/**
 * LaunchKit 根布局
 */

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "LaunchKit - 中国开发者的 SaaS 启动模板",
    template: "%s | LaunchKit",
  },
  description:
    "从想法到上线，只需一周。LaunchKit 是专为中国独立开发者打造的 Next.js SaaS 启动模板，内置微信登录、支付宝/微信支付、用户管理等功能。",
  keywords: [
    "SaaS",
    "模板",
    "Next.js",
    "独立开发者",
    "微信登录",
    "支付宝支付",
    "启动模板",
    "Boilerplate",
  ],
  authors: [{ name: "LaunchKit" }],
  creator: "LaunchKit",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://launchkit.cn",
    title: "LaunchKit - 中国开发者的 SaaS 启动模板",
    description: "从想法到上线，只需一周",
    siteName: "LaunchKit",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchKit - 中国开发者的 SaaS 启动模板",
    description: "从想法到上线，只需一周",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
