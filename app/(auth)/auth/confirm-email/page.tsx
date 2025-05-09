"use client"

import type React from "react"
import { Brain, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfirmEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">EstudaFoco</h1>
          </div>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl text-center">Verifique seu email</CardTitle>
            <CardDescription className="text-center">
              Enviamos um link de confirmação para seu email. Por favor, verifique sua caixa de entrada e spam.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Após confirmar seu email, você poderá fazer login e começar a usar o EstudaFoco.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button asChild className="w-full">
              <Link href="/login">Voltar para o login</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 