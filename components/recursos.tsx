"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Play, Download, Search, Filter, Bookmark } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function RecursosComponent() {
  const questoes = [
    {
      id: 1,
      titulo: "Geometria Espacial - Volume de Prismas",
      vestibular: "FAMERP 2022",
      dificuldade: "Médio",
      materia: "Matemática",
      acertos: "68%",
    },
    {
      id: 2,
      titulo: "Termoquímica - Cálculo de Entalpia",
      vestibular: "UNESP 2023",
      dificuldade: "Difícil",
      materia: "Química",
      acertos: "42%",
    },
    {
      id: 3,
      titulo: "Cinemática - Movimento Circular Uniforme",
      vestibular: "UNICAMP 2021",
      dificuldade: "Médio",
      materia: "Física",
      acertos: "55%",
    },
    {
      id: 4,
      titulo: "Funções Exponenciais e Logarítmicas",
      vestibular: "FAMERP 2023",
      dificuldade: "Difícil",
      materia: "Matemática",
      acertos: "38%",
    },
  ]

  const videoaulas = [
    {
      id: 1,
      titulo: "Geometria Espacial - Conceitos Fundamentais",
      professor: "Prof. Carlos Silva",
      duracao: "32 min",
      materia: "Matemática",
      visualizacoes: "1.2k",
    },
    {
      id: 2,
      titulo: "Termoquímica - Cálculos de Entalpia",
      professor: "Profa. Ana Oliveira",
      duracao: "45 min",
      materia: "Química",
      visualizacoes: "980",
    },
    {
      id: 3,
      titulo: "Cinemática - Movimento Circular",
      professor: "Prof. Ricardo Santos",
      duracao: "38 min",
      materia: "Física",
      visualizacoes: "1.5k",
    },
    {
      id: 4,
      titulo: "Funções Exponenciais - Resolução de Problemas",
      professor: "Profa. Márcia Lima",
      duracao: "41 min",
      materia: "Matemática",
      visualizacoes: "1.1k",
    },
  ]

  const resumos = [
    {
      id: 1,
      titulo: "Geometria Espacial - Resumo Completo",
      paginas: "12 páginas",
      materia: "Matemática",
      downloads: "2.3k",
    },
    {
      id: 2,
      titulo: "Termoquímica - Fórmulas e Conceitos",
      paginas: "8 páginas",
      materia: "Química",
      downloads: "1.8k",
    },
    {
      id: 3,
      titulo: "Cinemática - Equações e Gráficos",
      paginas: "10 páginas",
      materia: "Física",
      downloads: "2.1k",
    },
    {
      id: 4,
      titulo: "Funções - Guia Completo",
      paginas: "15 páginas",
      materia: "Matemática",
      downloads: "2.5k",
    },
  ]

  const getMateriaColor = (materia: string) => {
    switch (materia) {
      case "Matemática":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
      case "Física":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      case "Química":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getDificuldadeColor = (dificuldade: string) => {
    switch (dificuldade) {
      case "Fácil":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      case "Médio":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
      case "Difícil":
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Recursos de Estudo</h2>
          <p className="text-sm text-muted-foreground mt-1">Acesse materiais para complementar seus estudos</p>
        </div>
        <div className="flex gap-3">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar recursos..." className="pl-9 h-9 rounded-full" />
          </div>
          <Button variant="outline" size="sm" className="h-9 gap-1 rounded-full">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filtrar</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="questoes" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-12 p-1 bg-muted/30">
          <TabsTrigger
            value="questoes"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Banco de Questões
          </TabsTrigger>
          <TabsTrigger
            value="videoaulas"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Videoaulas
          </TabsTrigger>
          <TabsTrigger
            value="resumos"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Resumos e Flashcards
          </TabsTrigger>
        </TabsList>

        <TabsContent value="questoes" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {questoes.map((questao) => (
              <Card key={questao.id} className="border shadow-sm overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{questao.titulo}</CardTitle>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline" className={getMateriaColor(questao.materia)}>
                      {questao.materia}
                    </Badge>
                    <Badge variant="outline" className={getDificuldadeColor(questao.dificuldade)}>
                      {questao.dificuldade}
                    </Badge>
                    <Badge variant="outline">{questao.vestibular}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Taxa de acerto: {questao.acertos}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver questão
                  </Button>
                  <Button size="sm" className="rounded-full">
                    <Play className="mr-2 h-4 w-4" />
                    Resolver
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="rounded-full">
              Ver mais questões
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="videoaulas" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {videoaulas.map((video) => (
              <Card key={video.id} className="border shadow-sm overflow-hidden">
                <div className="relative aspect-video bg-muted">
                  <img
                    src={`/placeholder.svg?height=180&width=320&text=Videoaula`}
                    alt={video.titulo}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" className="rounded-full h-12 w-12 bg-primary/90 hover:bg-primary">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-black/70 text-white">{video.duracao}</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{video.titulo}</CardTitle>
                  <CardDescription>{video.professor}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between pt-0">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={getMateriaColor(video.materia)}>
                      {video.materia}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{video.visualizacoes} visualizações</span>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="rounded-full">
              Ver mais videoaulas
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="resumos" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {resumos.map((resumo) => (
              <Card key={resumo.id} className="border shadow-sm overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{resumo.titulo}</CardTitle>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline" className={getMateriaColor(resumo.materia)}>
                      {resumo.materia}
                    </Badge>
                    <Badge variant="outline">
                      <FileText className="mr-1 h-3 w-3" />
                      {resumo.paginas}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{resumo.downloads} downloads</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Visualizar
                  </Button>
                  <Button size="sm" className="rounded-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="rounded-full">
              Ver mais resumos
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
