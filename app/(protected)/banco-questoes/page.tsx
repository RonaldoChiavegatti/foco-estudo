import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Brain, Atom, Calculator, BookText, Microscope, Globe } from "lucide-react"

export default function BancoQuestoesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Banco de Questões</h1>
          <p className="text-muted-foreground">
            Pratique com questões de vestibulares anteriores, organizadas por matéria e tema.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Busque por tema, matéria ou vestibular..."
              className="w-full bg-white dark:bg-gray-950 pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Filtros</Button>
            <Button variant="outline">Favoritos</Button>
          </div>
        </div>

        <Tabs defaultValue="todas" className="w-full">
          <TabsList className="grid w-full grid-cols-7 lg:max-w-3xl mb-8">
            <TabsTrigger value="todas">Todas</TabsTrigger>
            <TabsTrigger value="matematica">Matemática</TabsTrigger>
            <TabsTrigger value="fisica">Física</TabsTrigger>
            <TabsTrigger value="quimica">Química</TabsTrigger>
            <TabsTrigger value="biologia">Biologia</TabsTrigger>
            <TabsTrigger value="historia">História</TabsTrigger>
            <TabsTrigger value="geografia">Geografia</TabsTrigger>
          </TabsList>

          <TabsContent value="todas" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Matemática */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <Calculator className="h-6 w-6 text-blue-700" />
                      </div>
                      <CardTitle>Matemática</CardTitle>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">2.500+ questões</Badge>
                  </div>
                  <CardDescription>Álgebra, Geometria, Funções e mais</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    Álgebra
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Geometria
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Trigonometria
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Estatística
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver Questões</Button>
                </CardFooter>
              </Card>

              {/* Física */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-md">
                        <Atom className="h-6 w-6 text-green-700" />
                      </div>
                      <CardTitle>Física</CardTitle>
                    </div>
                    <Badge className="bg-green-100 text-green-700">1.800+ questões</Badge>
                  </div>
                  <CardDescription>Mecânica, Termodinâmica, Eletromagnetismo</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    Mecânica
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Eletricidade
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Ondulatória
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Termodinâmica
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver Questões</Button>
                </CardFooter>
              </Card>

              {/* Química */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 p-2 rounded-md">
                        <Microscope className="h-6 w-6 text-purple-700" />
                      </div>
                      <CardTitle>Química</CardTitle>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700">1.600+ questões</Badge>
                  </div>
                  <CardDescription>Orgânica, Inorgânica, Físico-Química</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    Orgânica
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Inorgânica
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Físico-Química
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Equilíbrio
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver Questões</Button>
                </CardFooter>
              </Card>

              {/* Biologia */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-md">
                        <BookText className="h-6 w-6 text-green-700" />
                      </div>
                      <CardTitle>Biologia</CardTitle>
                    </div>
                    <Badge className="bg-green-100 text-green-700">1.900+ questões</Badge>
                  </div>
                  <CardDescription>Citologia, Genética, Ecologia e mais</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    Citologia
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Genética
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Ecologia
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Fisiologia
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver Questões</Button>
                </CardFooter>
              </Card>

              {/* Português */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-100 p-2 rounded-md">
                        <BookOpen className="h-6 w-6 text-amber-700" />
                      </div>
                      <CardTitle>Português</CardTitle>
                    </div>
                    <Badge className="bg-amber-100 text-amber-700">2.200+ questões</Badge>
                  </div>
                  <CardDescription>Gramática, Interpretação, Literatura</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    Gramática
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Interpretação
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Literatura
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Redação
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver Questões</Button>
                </CardFooter>
              </Card>

              {/* Geografia */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <Globe className="h-6 w-6 text-blue-700" />
                      </div>
                      <CardTitle>Geografia</CardTitle>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">1.500+ questões</Badge>
                  </div>
                  <CardDescription>Geografia Física, Humana, Geopolítica</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    Cartografia
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Climatologia
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Demografia
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    Geopolítica
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver Questões</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="matematica">
            <Card>
              <CardHeader>
                <CardTitle>Questões de Matemática</CardTitle>
                <CardDescription>Explore questões organizadas por temas</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Conteúdo das questões de matemática será exibido aqui.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Outros TabsContent para as outras disciplinas seriam adicionados aqui */}
        </Tabs>
      </div>
    </div>
  )
}
