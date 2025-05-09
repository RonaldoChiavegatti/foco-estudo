import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Lista de rotas protegidas (sem os parênteses)
const PROTECTED_ROUTES = [
  '/dashboard',
  '/simulados', 
  '/banco-questoes', 
  '/redacao', 
  '/recursos',
  '/perfil'
]

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()
  
  const path = request.nextUrl.pathname

  // Verificar se o usuário está tentando acessar uma rota protegida
  const isProtectedRoute = PROTECTED_ROUTES.some(route => path === route || path.startsWith(`${route}/`))
  
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Se o usuário está tentando acessar a página de login ou registro mas já está autenticado
  if ((path === '/login' || path === '/registro') && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return res
}

// Adiciona um matcher para que o middleware só seja executado nas rotas especificadas
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|auth/callback).*)',
  ],
} 