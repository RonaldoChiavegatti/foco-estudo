"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, BookOpen, CheckCircle, AlertCircle, BarChart3, CalendarIcon, Settings } from "lucide-react"
import CronogramaComponent from "@/components/cronograma"
import ProgressoSemanal from "@/components/progresso-semanal"
import LacunasComponent from "@/components/lacunas"
import RecursosComponent from "@/components/recursos"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/auth-context"

// Esta página será redirecionada a partir do login

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 dark:bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Avatar" />
                    <AvatarFallback>{user?.email?.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{user?.email}</CardTitle>
                    <CardDescription>Vestibulando 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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
                    <span className="text-sm font-medium">Próximo simulado</span>
                    <Badge variant="outline" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      Sábado
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Redações enviadas</span>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    >
                      8/10
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Próximos Estudos</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Bloco 1: Matemática</p>
                    <p className="text-sm text-muted-foreground">13:00 - 15:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Bloco 2: Refinamento</p>
                    <p className="text-sm text-muted-foreground">15:30 - 17:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Revisão + Outras Matérias</p>
                    <p className="text-sm text-muted-foreground">17:00 - 18:00</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-2">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Ver calendário completo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Progresso Geral</CardTitle>
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
                <Button variant="outline" className="w-full mt-2">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Análise detalhada
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="grid gap-6">
            {/* Welcome Card */}
            <Card className="bg-gradient-to-r from-primary/20 to-primary/5 border-none">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">Olá, {user?.email?.split('@')[0] || 'Estudante'}! 👋</h1>
                    <p className="text-muted-foreground mt-1">
                      Você tem <span className="font-medium text-primary">3 tarefas</span> programadas para hoje
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="rounded-full">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Iniciar Estudo
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <Settings className="mr-2 h-4 w-4" />
                      Configurações
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Tabs */}
            <Tabs defaultValue="cronograma" className="space-y-6">
              <TabsList className="grid grid-cols-4 h-12 p-1 bg-muted/30">
                <TabsTrigger
                  value="cronograma"
                  className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
                >
                  Cronograma
                </TabsTrigger>
                <TabsTrigger
                  value="progresso"
                  className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
                >
                  Progresso
                </TabsTrigger>
                <TabsTrigger
                  value="lacunas"
                  className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
                >
                  Lacunas
                </TabsTrigger>
                <TabsTrigger
                  value="recursos"
                  className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
                >
                  Recursos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cronograma" className="space-y-6 mt-6">
                <CronogramaComponent />
              </TabsContent>

              <TabsContent value="progresso" className="space-y-6 mt-6">
                <ProgressoSemanal />
              </TabsContent>

              <TabsContent value="lacunas" className="space-y-6 mt-6">
                <LacunasComponent />
              </TabsContent>

              <TabsContent value="recursos" className="space-y-6 mt-6">
                <RecursosComponent />
              </TabsContent>
            </Tabs>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Recomendações Personalizadas</CardTitle>
                <CardDescription>Com base no seu desempenho recente</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-start gap-4 rounded-lg border p-4 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
                  <AlertCircle className="mt-0.5 h-5 w-5 text-amber-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Geometria Espacial</p>
                    <p className="text-sm text-muted-foreground">
                      Detectamos dificuldades em problemas de volume e área de superfície. Recomendamos 3 aulas e 10
                      exercícios específicos.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 w-full sm:w-auto">
                      Iniciar Reforço
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Física Mecânica</p>
                    <p className="text-sm text-muted-foreground">
                      Seu desempenho em Leis de Newton está acima da média. Recomendamos avançar para tópicos de
                      Hidrodinâmica.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 w-full sm:w-auto">
                      Ver Aulas Avançadas
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 