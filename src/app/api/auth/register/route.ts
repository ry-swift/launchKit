/**
 * 用户注册 API
 */

import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { z } from "zod"

// 请求体验证
const registerSchema = z.object({
  name: z.string().min(1, "请输入昵称").max(50, "昵称不能超过 50 个字符"),
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(8, "密码长度至少为 8 位"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 验证请求体
    const validatedData = registerSchema.parse(body)

    // 检查邮箱是否已存在
    const existingUser = await db.user.findUnique({
      where: { email: validatedData.email },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "该邮箱已被注册" },
        { status: 400 }
      )
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(validatedData.password, 12)

    // 创建用户
    const user = await db.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
      },
    })

    // 返回成功响应（不包含密码）
    return NextResponse.json(
      {
        message: "注册成功",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    // Zod 验证错误
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors[0].message },
        { status: 400 }
      )
    }

    console.error("注册错误:", error)
    return NextResponse.json(
      { message: "注册失败，请稍后重试" },
      { status: 500 }
    )
  }
}
