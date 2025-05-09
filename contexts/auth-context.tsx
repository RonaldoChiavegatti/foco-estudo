"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { User } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const login = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    // Aguardar um momento para garantir que a sessão foi atualizada
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Verificar se o login foi bem-sucedido
    if (data.session) {
      // Usar window.location para forçar uma navegação completa
      window.location.href = "/dashboard"
    }
  }

  const register = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) throw error

    // Se o registro foi bem-sucedido, redirecionar para uma página de confirmação
    if (data?.user) {
      window.location.href = "/auth/confirm-email"
    }
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    
    // Usar window.location para forçar uma navegação completa
    window.location.href = "/login"
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
