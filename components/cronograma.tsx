"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, BookOpen, CheckCircle, Edit, Calendar, Plus } from "lucide-react"

export default function CronogramaComponent() {
  const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

  const rotinaSemanal = [
    {
      dia: "Segunda",
      blocos: [
        { horario: "07h - 12h", atividade: "Trabalho", tipo: "trabalho" },
        { horario: "12h - 13h", atividade: "Almoço e pausa", tipo: "pausa" },
        { horario: "13h - 15h", atividade: "Bloco 1: Matemática", tipo: "estudo", materia: "matematica" },
        { horario: "15h - 15h30", atividade: "Pausa", tipo: "pausa" },
        { horario: "15h30 - 17h", atividade: "Bloco 2: Refinamento Matemática", tipo: "estudo", materia: "matematica" },
        { horario: "17h - 18h", atividade: "Revisão + Redação", tipo: "estudo", materia: "redacao" },
        { horario: "18h - 19h", atividade: "Jantar", tipo: "pausa" },
        { horario: "19h - 23h", atividade: "Faculdade", tipo: "faculdade" },
      ],
    },
    {
      dia: "Terça",
      blocos: [
        { horario: "07h - 12h", atividade: "Trabalho", tipo: "trabalho" },
        { horario: "12h - 13h", atividade: "Almoço e pausa", tipo: "pausa" },
        { horario: "13h - 15h", atividade: "Bloco 1: Física", tipo: "estudo", materia: "fisica" },
        { horario: "15h - 15h30", atividade: "Pausa", tipo: "pausa" },
        { horario: "15h30 - 17h", atividade: "Bloco 2: Refinamento Física", tipo: "estudo", materia: "fisica" },
        { horario: "17h - 18h", atividade: "Revisão + História", tipo: "estudo", materia: "historia" },
        { horario: "18h - 19h", atividade: "Jantar", tipo: "pausa" },
        { horario: "19h - 23h", atividade: "Faculdade", tipo: "faculdade" },
      ],
    },
    {
      dia: "Quarta",
      blocos: [
        { horario: "07h - 12h", atividade: "Trabalho", tipo: "trabalho" },
        { horario: "12h - 13h", atividade: "Almoço e pausa", tipo: "pausa" },
        { horario: "13h - 15h", atividade: "Bloco 1: Química", tipo: "estudo", materia: "quimica" },
        { horario: "15h - 15h30", atividade: "Pausa", tipo: "pausa" },
        { horario: "15h30 - 17h", atividade: "Bloco 2: Refinamento Química", tipo: "estudo", materia: "quimica" },
        { horario: "17h - 18h", atividade: "Revisão + Geografia", tipo: "estudo", materia: "geografia" },
        { horario: "18h - 19h", atividade: "Jantar", tipo: "pausa" },
        { horario: "19h - 23h", atividade: "Faculdade", tipo: "faculdade" },
      ],
    },
    {
      dia: "Quinta",
      blocos: [
        { horario: "07h - 12h", atividade: "Trabalho", tipo: "trabalho" },
        { horario: "12h - 13h", atividade: "Almoço e pausa", tipo: "pausa" },
        { horario: "13h - 15h", atividade: "Bloco 1: Matemática", tipo: "estudo", materia: "matematica" },
        { horario: "15h - 15h30", atividade: "Pausa", tipo: "pausa" },
        { horario: "15h30 - 17h", atividade: "Bloco 2: Refinamento Matemática", tipo: "estudo", materia: "matematica" },
        { horario: "17h - 18h", atividade: "Revisão + Biologia", tipo: "estudo", materia: "biologia" },
        { horario: "18h - 19h", atividade: "Jantar", tipo: "pausa" },
        { horario: "19h - 23h", atividade: "Faculdade", tipo: "faculdade" },
      ],
    },
    {
      dia: "Sexta",
      blocos: [
        { horario: "07h - 12h", atividade: "Trabalho", tipo: "trabalho" },
        { horario: "12h - 13h", atividade: "Almoço e pausa", tipo: "pausa" },
        { horario: "13h - 15h", atividade: "Bloco 1: Física", tipo: "estudo", materia: "fisica" },
        { horario: "15h - 15h30", atividade: "Pausa", tipo: "pausa" },
        { horario: "15h30 - 17h", atividade: "Bloco 2: Refinamento Física", tipo: "estudo", materia: "fisica" },
        { horario: "17h - 18h", atividade: "Revisão + Redação", tipo: "estudo", materia: "redacao" },
        { horario: "18h - 19h", atividade: "Jantar", tipo: "pausa" },
        { horario: "19h - 23h", atividade: "Faculdade", tipo: "faculdade" },
      ],
    },
    {
      dia: "Sábado",
      blocos: [
        { horario: "09h - 11h", atividade: "Simulado", tipo: "simulado" },
        { horario: "11h - 12h", atividade: "Correção comentada", tipo: "estudo" },
        { horario: "12h - 13h", atividade: "Almoço", tipo: "pausa" },
        { horario: "13h - 14h", atividade: "Redação ou reforço", tipo: "estudo", materia: "redacao" },
        { horario: "14h - 18h", atividade: "Tempo livre", tipo: "livre" },
      ],
    },
    {
      dia: "Domingo",
      blocos: [{ horario: "Dia todo", atividade: "Descanso", tipo: "livre" }],
    },
  ]

  const getBadgeVariant = (tipo: string) => {
    switch (tipo) {
      case "estudo":
        return "default"
      case "trabalho":
        return "outline"
      case "faculdade":
        return "secondary"
      case "pausa":
        return "outline"
      case "simulado":
        return "destructive"
      case "livre":
        return "outline"
      default:
        return "outline"
    }
  }

  const getMateriaColor = (materia?: string) => {
    switch (materia) {
      case "matematica":
        return "bg-blue-500"
      case "fisica":
        return "bg-green-500"
      case "quimica":
        return "bg-purple-500"
      case "redacao":
        return "bg-orange-500"
      case "historia":
        return "bg-yellow-500"
      case "geografia":
        return "bg-indigo-500"
      case "biologia":
        return "bg-pink-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Cronograma Semanal</h2>
          <p className="text-sm text-muted-foreground mt-1">Organize seu tempo de estudo de forma eficiente</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="h-9 gap-1 rounded-full">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Visualizar Calendário</span>
          </Button>
          <Button size="sm" className="h-9 gap-1 rounded-full">
            <Edit className="h-4 w-4" />
            <span className="hidden sm:inline">Personalizar</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="Segunda" className="w-full">
        <TabsList className="grid w-full grid-cols-7 h-12 p-1 bg-muted/30">
          {diasSemana.map((dia) => (
            <TabsTrigger
              key={dia}
              value={dia}
              className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
            >
              {dia.slice(0, 3)}
            </TabsTrigger>
          ))}
        </TabsList>

        {rotinaSemanal.map((diaRotina) => (
          <TabsContent key={diaRotina.dia} value={diaRotina.dia} className="mt-6">
            <Card className="border-none shadow-sm bg-white dark:bg-slate-900">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{diaRotina.dia}</CardTitle>
                    <CardDescription>
                      {diaRotina.dia === "Sábado"
                        ? "Dia de simulado e reforço"
                        : diaRotina.dia === "Domingo"
                          ? "Dia de descanso"
                          : "Rotina de estudos e trabalho"}
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3">
                {diaRotina.blocos.map((bloco, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 rounded-xl p-3 transition-all hover:bg-muted/50
                      ${bloco.tipo === "estudo" ? "border-l-4 border-primary" : "border-l-4 border-transparent"}`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full 
                      ${
                        bloco.tipo === "estudo"
                          ? "bg-primary/10"
                          : bloco.tipo === "simulado"
                            ? "bg-red-100 dark:bg-red-900/20"
                            : "bg-muted/50"
                      }`}
                    >
                      {bloco.tipo === "estudo" ? (
                        <BookOpen className="h-5 w-5 text-primary" />
                      ) : (
                        <Clock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="grid gap-1 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium leading-none">{bloco.atividade}</p>
                        <Badge variant={getBadgeVariant(bloco.tipo)} className="rounded-full">
                          {bloco.horario}
                        </Badge>
                      </div>
                      {bloco.materia && (
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`h-2 w-2 rounded-full ${getMateriaColor(bloco.materia)}`}></div>
                          <p className="text-xs text-muted-foreground capitalize">{bloco.materia}</p>
                        </div>
                      )}
                    </div>
                    {bloco.tipo === "estudo" && (
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
