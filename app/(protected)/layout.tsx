"use client"

import type React from "react"

import { useAuth } from "@/contexts/auth-context"
import { Brain, Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white dark:bg-slate-900 px-6 shadow-sm">
        <div className="flex flex-1 items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-semibold">EstudaFoco</h1>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="/simulados" className="text-sm font-medium hover:text-primary transition-colors">
            Simulados
          </Link>
          <Link href="/banco-questoes" className="text-sm font-medium hover:text-primary transition-colors">
            Banco de Questões
          </Link>
          <Link href="/redacao" className="text-sm font-medium hover:text-primary transition-colors">
            Redação
          </Link>
          <Link href="/recursos" className="text-sm font-medium hover:text-primary transition-colors">
            Recursos
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button variant="outline" size="sm" className="h-9 gap-1 rounded-full">
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">Cronômetro</span>
          </Button>
          <Link href="/perfil">
            <Avatar className="h-9 w-9 border-2 border-primary cursor-pointer">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
              <AvatarFallback>{user.email?.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
