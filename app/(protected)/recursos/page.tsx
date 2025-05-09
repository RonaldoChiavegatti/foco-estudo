// Mover o conteúdo de app/recursos/page.tsx para cá

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Video, FileText, Download, Play, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function RecursosPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Recursos de Estudo</h1>
          <p className="text-muted-foreground">
            Acesse materiais de estudo organizados por disciplina para complementar sua preparação.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar recursos..."
              className="w-full bg-white dark:bg-gray-950 pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Filtros</Button>
            <Button variant="outline">Favoritos</Button>
          </div>
        </div>

        <Tabs defaultValue="videoaulas" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="videoaulas">Videoaulas</TabsTrigger>
            <TabsTrigger value="resumos">Resumos</TabsTrigger>
            <TabsTrigger value="exercicios">Exercícios</TabsTrigger>
          </TabsList>

          <TabsContent value="videoaulas" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <Video className="h-6 w-6 text-blue-700" />
                      </div>
                      <CardTitle>Matemática</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-blue-100 text-blue-700">120 aulas</Badge>
                  </div>
                  <CardDescription>Videoaulas completas com resolução de exercícios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Funções exponenciais</p>
                      <p className="text-sm text-muted-foreground">Aula 1 - Conceitos básicos</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Logaritmos</p>
                      <p className="text-sm text-muted-foreground">Aula 1 - Introdução</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Geometria analítica</p>
                      <p className="text-sm text-muted-foreground">Aula 1 - Plano cartesiano</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver todas as aulas</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-md">
                        <Video className="h-6 w-6 text-green-700" />
                      </div>
                      <CardTitle>Física</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-700">95 aulas</Badge>
                  </div>
                  <CardDescription>Videoaulas com experimentos e resolução de problemas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Cinemática</p>
                      <p className="text-sm text-muted-foreground">Aula 1 - MRU e MRUV</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Leis de Newton</p>
                      <p className="text-sm text-muted-foreground">Aula 1 - Conceitos fundamentais</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Eletromagnetismo</p>
                      <p className="text-sm text-muted-foreground">Aula 1 - Carga elétrica</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver todas as aulas</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 p-2 rounded-md">
                        <Video className="h-6 w-6 text-purple-700" />
                      </div>
                      <CardTitle>Química</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-purple-100 text-purple-700">80 aulas</Badge>
                  </div>
                  <CardDescription>Videoaulas com experimentos práticos e simulações</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Química Orgânica</p>
                      <p className="text-sm text-muted-foreground">Aula 1 - Introdução aos compostos</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Estequiometria</p>
                      <p className="text-sm text-muted-foreground">Aula 1 - Cálculos básicos</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Termoquímica</p>
                      <p className="text-sm text-muted-foreground">Aula 1 - Transferência de energia</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver todas as aulas</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resumos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-100 p-2 rounded-md">
                        <FileText className="h-6 w-6 text-amber-700" />
                      </div>
                      <CardTitle>História</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-amber-100 text-amber-700">35 resumos</Badge>
                  </div>
                  <CardDescription>Resumos completos com linha do tempo e mapas mentais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Brasil Colônia</p>
                      <p className="text-sm text-muted-foreground">12 páginas | Atualizado em 10/05/2024</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Era Vargas</p>
                      <p className="text-sm text-muted-foreground">18 páginas | Atualizado em 15/04/2024</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Segunda Guerra Mundial</p>
                      <p className="text-sm text-muted-foreground">22 páginas | Atualizado em 02/03/2024</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver todos os resumos</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <FileText className="h-6 w-6 text-blue-700" />
                      </div>
                      <CardTitle>Geografia</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-blue-100 text-blue-700">28 resumos</Badge>
                  </div>
                  <CardDescription>Resumos com mapas, infográficos e dados atualizados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Geopolítica Mundial</p>
                      <p className="text-sm text-muted-foreground">15 páginas | Atualizado em 20/05/2024</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Urbanização Brasileira</p>
                      <p className="text-sm text-muted-foreground">16 páginas | Atualizado em 05/04/2024</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Questões Ambientais</p>
                      <p className="text-sm text-muted-foreground">19 páginas | Atualizado em 12/03/2024</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver todos os resumos</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-red-100 p-2 rounded-md">
                        <BookOpen className="h-6 w-6 text-red-700" />
                      </div>
                      <CardTitle>Literatura</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-red-100 text-red-700">42 resumos</Badge>
                  </div>
                  <CardDescription>Análises de obras literárias e escolas literárias</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Realismo Brasileiro</p>
                      <p className="text-sm text-muted-foreground">14 páginas | Atualizado em 25/05/2024</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Modernismo - 1ª Fase</p>
                      <p className="text-sm text-muted-foreground">18 páginas | Atualizado em 30/04/2024</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Obras FUVEST 2025</p>
                      <p className="text-sm text-muted-foreground">23 páginas | Atualizado em 15/05/2024</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver todos os resumos</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="exercicios" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Exercícios Organizados por Disciplina</CardTitle>
                <CardDescription>Pratique com exercícios e obtenha feedback imediato</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Matemática</CardTitle>
                      <CardDescription>1.200+ exercícios com resolução</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full">Praticar</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Física</CardTitle>
                      <CardDescription>950+ exercícios com resolução</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full">Praticar</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Química</CardTitle>
                      <CardDescription>860+ exercícios com resolução</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full">Praticar</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Biologia</CardTitle>
                      <CardDescription>940+ exercícios com resolução</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full">Praticar</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">História</CardTitle>
                      <CardDescription>780+ exercícios com resolução</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full">Praticar</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Geografia</CardTitle>
                      <CardDescription>820+ exercícios com resolução</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full">Praticar</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
