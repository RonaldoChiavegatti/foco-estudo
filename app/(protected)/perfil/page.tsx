"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, FileText, Settings, BarChart3, BookOpen, User, Bell, LogOut } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/contexts/auth-context"

export default function PerfilPage() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 border-4 border-primary mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
                  <AvatarFallback>{user?.email?.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{user?.email}</CardTitle>
                <CardDescription>Vestibulando 2025</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Streak de estudos</span>
                  <Badge
                    variant="outline"
                    className="bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                  >
                    12 dias
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Simulados realizados</span>
                  <Badge variant="outline" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    5
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Redações enviadas</span>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  >
                    8
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Questões resolvidas</span>
                  <Badge
                    variant="outline"
                    className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                  >
                    428
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" className="w-full rounded-full">
                <Settings className="mr-2 h-4 w-4" />
                Editar Perfil
              </Button>
              <Button 
                variant="outline" 
                className="w-full rounded-full text-red-500 hover:text-red-600"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </CardFooter>
          </Card>

          <Card className="border shadow-sm mt-6">
            <CardHeader>
              <CardTitle className="text-base">Metas de Estudo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Tempo de estudo semanal</span>
                  <span className="text-sm">15h / 20h</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Questões por semana</span>
                  <span className="text-sm">45 / 50</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Redações por mês</span>
                  <span className="text-sm">2 / 4</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full rounded-full">
                Definir Novas Metas
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Tabs defaultValue="desempenho" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-12 p-1 bg-muted/30 mb-6">
              <TabsTrigger
                value="desempenho"
                className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                Desempenho
              </TabsTrigger>
              <TabsTrigger
                value="configuracoes"
                className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                Configurações
              </TabsTrigger>
              <TabsTrigger
                value="notificacoes"
                className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                Notificações
              </TabsTrigger>
            </TabsList>

            <TabsContent value="desempenho">
              <Card className="border shadow-sm mb-6">
                <CardHeader>
                  <CardTitle>Progresso Geral</CardTitle>
                  <CardDescription>Desempenho por disciplina</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium">Matemática</span>
                      </div>
                      <span className="text-sm text-muted-foreground">68%</span>
                    </div>
                    <Progress value={68} className="h-2" indicatorClassName="bg-blue-500" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium">Física</span>
                      </div>
                      <span className="text-sm text-muted-foreground">72%</span>
                    </div>
                    <Progress value={72} className="h-2" indicatorClassName="bg-green-500" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm font-medium">Química</span>
                      </div>
                      <span className="text-sm text-muted-foreground">54%</span>
                    </div>
                    <Progress value={54} className="h-2" indicatorClassName="bg-purple-500" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                        <span className="text-sm font-medium">Redação</span>
                      </div>
                      <span className="text-sm text-muted-foreground">76%</span>
                    </div>
                    <Progress value={76} className="h-2" indicatorClassName="bg-orange-500" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full rounded-full">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Análise detalhada
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                  <CardDescription>Últimas ações realizadas na plataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Redação enviada</p>
                        <p className="text-sm text-muted-foreground">Há 2 horas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Sessão de estudo concluída</p>
                        <p className="text-sm text-muted-foreground">Há 3 horas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Simulado agendado</p>
                        <p className="text-sm text-muted-foreground">Há 1 dia</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="configuracoes">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Configurações da Conta</CardTitle>
                  <CardDescription>Gerencie suas preferências e informações pessoais</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Notificações por email</p>
                        <p className="text-sm text-muted-foreground">Receba atualizações sobre seu progresso</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Configurar
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Privacidade</p>
                        <p className="text-sm text-muted-foreground">Gerencie suas configurações de privacidade</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Configurar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notificacoes">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Notificações</CardTitle>
                  <CardDescription>Gerencie suas notificações e alertas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Lembretes de estudo</p>
                        <p className="text-sm text-muted-foreground">Receba lembretes para suas sessões de estudo</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Configurar
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Alertas de simulado</p>
                        <p className="text-sm text-muted-foreground">Seja notificado sobre simulados próximos</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Configurar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
