/**
 * 页脚组件
 */

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* 品牌 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LaunchKit
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              中国开发者的 SaaS 启动模板
              <br />
              从想法到上线，只需一周
            </p>
          </div>

          {/* 产品 */}
          <div>
            <h3 className="text-sm font-semibold">产品</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#features" className="hover:text-primary transition-colors">
                  功能特性
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  定价
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-primary transition-colors">
                  文档
                </Link>
              </li>
            </ul>
          </div>

          {/* 资源 */}
          <div>
            <h3 className="text-sm font-semibold">资源</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-primary transition-colors">
                  更新日志
                </Link>
              </li>
            </ul>
          </div>

          {/* 法律 */}
          <div>
            <h3 className="text-sm font-semibold">法律</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  服务条款
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权 */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LaunchKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
