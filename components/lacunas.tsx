"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, BookOpen, CheckCircle, Play, ArrowRight, Star, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function LacunasComponent() {
  const [activeTab, setActiveTab] = useState("matematica")

  const lacunas = {
    matematica: [
      {
        id: 1,
        tema: "Geometria Espacial",
        subtema: "Volume e Área de Superfície",
        nivel: 3,
        progresso: 35,
        status: "crítico",
        exercicios: 10,
        aulas: 3,
      },
      {
        id: 2,
        tema: "Funções",
        subtema: "Funções Exponenciais e Logarítmicas",
        nivel: 2,
        progresso: 60,
        status: "atenção",
        exercicios: 8,
        aulas: 2,
      },
      {
        id: 3,
        tema: "Trigonometria",
        subtema: "Relações Trigonométricas",
        nivel: 2,
        progresso: 75,
        status: "bom",
        exercicios: 6,
        aulas: 1,
      },
    ],
    fisica: [
      {
        id: 1,
        tema: "Cinemática",
        subtema: "Movimento Circular",
        nivel: 2,
        progresso: 65,
        status: "atenção",
        exercicios: 8,
        aulas: 2,
      },
      {
        id: 2,
        tema: "Eletricidade",
        subtema: "Circuitos Elétricos",
        nivel: 3,
        progresso: 45,
        status: "crítico",
        exercicios: 10,
        aulas: 3,
      },
      {
        id: 3,
        tema: "Óptica",
        subtema: "Lentes e Espelhos",
        nivel: 2,
        progresso: 70,
        status: "bom",
        exercicios: 6,
        aulas: 1,
      },
    ],
    quimica: [
      {
        id: 1,
        tema: "Termoquímica",
        subtema: "Cálculos de Entalpia",
        nivel: 3,
        progresso: 40,
        status: "crítico",
        exercicios: 10,
        aulas: 3,
      },
      {
        id: 2,
        tema: "Estequiometria",
        subtema: "Cálculos Estequiométricos",
        nivel: 2,
        progresso: 55,
        status: "atenção",
        exercicios: 8,
        aulas: 2,
      },
      {
        id: 3,
        tema: "Química Orgânica",
        subtema: "Nomenclatura",
        nivel: 1,
        progresso: 80,
        status: "bom",
        exercicios: 6,
        aulas: 1,
      },
    ],
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "crítico":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "atenção":
        return <AlertCircle className="h-5 w-5 text-amber-500" />
      case "bom":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case "crítico":
        return "bg-red-500"
      case "atenção":
        return "bg-amber-500"
      case "bom":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCardBg = (status: string) => {
    switch (status) {
      case "crítico":
        return "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800"
      case "atenção":
        return "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800"
      case "bom":
        return "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"
      default:
        return ""
    }
  }

  const getNivelText = (nivel: number) => {
    switch (nivel) {
      case 1:
        return "Básico"
      case 2:
        return "Intermediário"
      case 3:
        return "Avançado"
      default:
        return "Não definido"
    }
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Diagnóstico de Lacunas</h2>
          <p className="text-sm text-muted-foreground mt-1">Identificação de temas que precisam de reforço</p>
        </div>
        <div className="flex gap-3">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar tema..." className="pl-9 h-9 rounded-full" />
          </div>
          <Button variant="outline" size="sm" className="h-9 gap-1 rounded-full">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filtrar</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="matematica" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-12 p-1 bg-muted/30">
          <TabsTrigger
            value="matematica"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Matemática
          </TabsTrigger>
          <TabsTrigger
            value="fisica"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Física
          </TabsTrigger>
          <TabsTrigger
            value="quimica"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Química
          </TabsTrigger>
        </TabsList>

        {Object.entries(lacunas).map(([materia, temas]) => (
          <TabsContent key={materia} value={materia} className="mt-6">
            <div className="grid gap-4">
              {temas.map((tema) => (
                <Card key={tema.id} className={`border shadow-sm overflow-hidden ${getCardBg(tema.status)}`}>
                  <CardContent className="p-0">
                    <div className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          {getStatusIcon(tema.status)}
                          <div>
                            <h3 className="font-medium">{tema.tema}</h3>
                            <p className="text-sm text-muted-foreground">{tema.subtema}</p>
                            <div className="mt-2 flex items-center gap-2">
                              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                {getNivelText(tema.nivel)}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {tema.exercicios} exercícios • {tema.aulas} aulas
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" className="gap-1 rounded-full">
                          <Play className="h-3.5 w-3.5" />
                          Iniciar
                        </Button>
                      </div>
                      <div className="mt-4 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Progresso</span>
                          <span className="text-xs font-medium">{tema.progresso}%</span>
                        </div>
                        <Progress value={tema.progresso} className={`h-2 ${getProgressColor(tema.status)}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="border-none shadow-sm bg-white dark:bg-slate-900 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/5">
          <CardTitle>Modo "Refinar Lacuna"</CardTitle>
          <CardDescription>Série de aulas e exercícios específicos para temas com baixo desempenho</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">
                    {activeTab === "matematica"
                      ? "Geometria Espacial"
                      : activeTab === "fisica"
                        ? "Eletricidade"
                        : "Termoquímica"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {activeTab === "matematica"
                      ? "Volume e Área de Superfície"
                      : activeTab === "fisica"
                        ? "Circuitos Elétricos"
                        : "Cálculos de Entalpia"}
                  </p>
                </div>
              </div>
              <Button className="rounded-full">Iniciar Refinamento</Button>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-xl border p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Aula Teórica</h4>
                    <p className="text-xs text-muted-foreground">Conceitos fundamentais e exemplos</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">4.0</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Exercícios Básicos</h4>
                    <p className="text-xs text-muted-foreground">5 exercícios com resolução passo a passo</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">4.2</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Aula de Aprofundamento</h4>
                    <p className="text-xs text-muted-foreground">Técnicas avançadas e casos especiais</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">4.8</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Exercícios de Vestibular</h4>
                    <p className="text-xs text-muted-foreground">5 questões de provas anteriores</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">3.5</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Avaliação Final</h4>
                    <p className="text-xs text-muted-foreground">Teste para verificar o progresso</p>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
