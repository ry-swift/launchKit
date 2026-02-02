/**
 * LaunchKit 首页 Landing Page
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// 功能特性列表
const features = [
  {
    title: "微信扫码登录",
    description: "一键集成微信登录，让用户使用微信快速注册登录，提升转化率",
    icon: "💬",
  },
  {
    title: "支付宝/微信支付",
    description: "开箱即用的支付系统，支持支付宝、微信支付，自动处理回调",
    icon: "💰",
  },
  {
    title: "用户认证系统",
    description: "完整的邮箱、手机号、第三方登录，基于 NextAuth.js 构建",
    icon: "🔐",
  },
  {
    title: "管理后台",
    description: "内置用户管理、订单管理、数据统计面板，开箱即用",
    icon: "📊",
  },
  {
    title: "响应式设计",
    description: "基于 Tailwind CSS + Shadcn/ui，完美适配桌面和移动端",
    icon: "📱",
  },
  {
    title: "SEO 优化",
    description: "内置 SEO 最佳实践，Lighthouse 评分 90+，助力搜索排名",
    icon: "🔍",
  },
]

// 定价方案
const plans = [
  {
    name: "基础版",
    price: "399",
    description: "适合个人开发者",
    features: ["核心功能模块", "1 年更新支持", "中文文档", "社区支持"],
    popular: false,
  },
  {
    name: "专业版",
    price: "699",
    description: "最受欢迎的选择",
    features: [
      "全部功能模块",
      "终身更新支持",
      "中文文档 + 视频教程",
      "微信群技术支持",
      "优先功能建议",
    ],
    popular: true,
  },
  {
    name: "团队版",
    price: "1999",
    description: "适合团队使用",
    features: [
      "专业版全部功能",
      "5 个团队许可证",
      "1 对 1 技术咨询",
      "优先 Bug 修复",
      "定制化支持",
    ],
    popular: false,
  },
]

// FAQ 列表
const faqs = [
  {
    question: "LaunchKit 适合什么样的项目？",
    answer:
      "LaunchKit 适合任何需要用户系统和支付功能的 SaaS 项目，包括但不限于：会员制网站、在线课程平台、订阅服务、工具类应用等。",
  },
  {
    question: "购买后可以用于多个项目吗？",
    answer:
      "基础版和专业版的许可证是单项目使用的。如果您需要在多个项目中使用，请购买团队版或联系我们获取批量折扣。",
  },
  {
    question: "支持退款吗？",
    answer:
      "由于数字产品的特殊性，购买后不支持退款。但我们提供详细的文档和演示，建议您在购买前充分了解产品功能。",
  },
  {
    question: "如何获取技术支持？",
    answer:
      "基础版用户可通过 GitHub Issues 获取社区支持。专业版和团队版用户可加入专属微信群，获得更快速的技术支持。",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero 区域 */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              🚀 专为中国开发者打造
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              从想法到上线
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                只需一周
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              LaunchKit 是专为中国独立开发者打造的 Next.js SaaS 启动模板
              <br />
              内置微信登录、支付宝/微信支付、管理后台，让你专注于核心业务
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/register">免费开始使用</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">了解更多</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              已有 <span className="font-semibold text-primary">1,000+</span>{" "}
              开发者正在使用
            </p>
          </div>
        </div>

        {/* 背景装饰 */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]" />
      </section>

      {/* 功能特性 */}
      <section id="features" className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              一切你需要的，开箱即用
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              节省 100+ 小时开发时间，专注于你的核心业务
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 定价 */}
      <section id="pricing" className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              简单透明的定价
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              一次付费，终身使用。无隐藏费用，无订阅陷阱
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    最受欢迎
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">¥{plan.price}</span>
                    <span className="text-muted-foreground"> / 一次性</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-6 w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/register">立即购买</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              常见问题
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              有其他问题？欢迎联系我们
            </p>
          </div>
          <div className="mt-16 mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            准备好开始了吗？
          </h2>
          <p className="mt-4 text-lg opacity-90">
            加入 1,000+ 开发者，用 LaunchKit 快速启动你的 SaaS 项目
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link href="/register">免费开始使用</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
