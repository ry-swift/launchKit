/**
 * 全局 Provider 组件
 * 包含 SessionProvider、ThemeProvider 等
 */

"use client"

import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/sonner"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      {children}
      <Toaster position="top-center" richColors />
    </SessionProvider>
  )
}
