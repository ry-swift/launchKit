/**
 * 认证页面布局（登录/注册）
 */

import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
      <Link
        href="/"
        className="mb-8 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        LaunchKit
      </Link>
      <div className="w-full max-w-md">{children}</div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} LaunchKit. All rights reserved.
      </p>
    </div>
  )
}
