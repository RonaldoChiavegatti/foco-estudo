import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, CheckCircle, Clock, PenTool } from "lucide-react"

export default function RedacaoPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Redações</h1>
            <p className="text-muted-foreground">
              Pratique redação e receba feedback personalizado para melhorar seu desempenho.
            </p>
          </div>
          <Button className="rounded-full">
            <Upload className="mr-2 h-4 w-4" />
            Enviar Redação
          </Button>
        </div>

        <Tabs defaultValue="temas" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
            <TabsTrigger value="temas">Temas</TabsTrigger>
            <TabsTrigger value="minhas">Minhas Redações</TabsTrigger>
            <TabsTrigger value="modelo">Redações Modelo</TabsTrigger>
            <TabsTrigger value="guia">Guia de Escrita</TabsTrigger>
          </TabsList>

          <TabsContent value="temas" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>Tema da Semana</CardTitle>
                    <Badge className="bg-blue-500">Novo</Badge>
                  </div>
                  <CardDescription>ENEM 2024 - Simulado</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-lg mb-2">Os desafios da mobilidade urbana sustentável no Brasil contemporâneo</p>
                  <p className="text-sm text-muted-foreground">
                    Considerando os textos motivadores e seus conhecimentos, redija um texto dissertativo-argumentativo sobre os desafios da mobilidade urbana sustentável no Brasil.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">Prazo: 15/06/2024</span>
                  </div>
                  <Button>Escrever</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tema Anterior</CardTitle>
                  <CardDescription>ENEM 2023 - Adaptado</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-lg mb-2">Impactos da desinformação na era digital</p>
                  <p className="text-sm text-muted-foreground">
                    A partir da leitura dos textos motivadores e seus conhecimentos, redija um texto sobre os impactos da desinformação na sociedade contemporânea.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-muted-foreground">Disponível</span>
                  </div>
                  <Button variant="outline">Escrever</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tema Livre</CardTitle>
                  <CardDescription>FUVEST - Modelo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-lg mb-2">O papel da ciência na sociedade brasileira</p>
                  <p className="text-sm text-muted-foreground">
                    Considerando os textos apresentados e seus conhecimentos, desenvolva uma dissertação sobre o papel e a importância da ciência na sociedade brasileira.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-muted-foreground">Disponível</span>
                  </div>
                  <Button variant="outline">Escrever</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="minhas" className="space-y-6">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="flex items-center p-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <PenTool className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Desafios da mobilidade urbana sustentável</p>
                          <p className="text-sm text-muted-foreground">Enviada em 05/06/2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-amber-100 text-amber-700">Em análise</Badge>
                      <Button size="sm" variant="outline">Ver Redação</Button>
                    </div>
                  </div>

                  <div className="flex items-center p-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <PenTool className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Impactos da desinformação na era digital</p>
                          <p className="text-sm text-muted-foreground">Enviada em 22/05/2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-green-100 text-green-700">Corrigida - 920</Badge>
                      <Button size="sm" variant="outline">Ver Correção</Button>
                    </div>
                  </div>

                  <div className="flex items-center p-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <PenTool className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">O papel da ciência na sociedade brasileira</p>
                          <p className="text-sm text-muted-foreground">Enviada em 10/05/2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-green-100 text-green-700">Corrigida - 880</Badge>
                      <Button size="sm" variant="outline">Ver Correção</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modelo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Redações Modelo</CardTitle>
                <CardDescription>Exemplos de redações nota máxima para você se inspirar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">ENEM 2023 - Nota 1000</CardTitle>
                      <CardDescription>Desafios para valorização da diversidade cultural brasileira</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">Ler redação</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">ENEM 2022 - Nota 1000</CardTitle>
                      <CardDescription>Acesso à educação técnica no Brasil</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">Ler redação</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">FUVEST 2023 - Nota máxima</CardTitle>
                      <CardDescription>O conceito de liberdade no mundo digital</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">Ler redação</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">UNICAMP 2023 - Nota máxima</CardTitle>
                      <CardDescription>Inteligência artificial e o futuro do trabalho</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">Ler redação</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guia" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Guia de Escrita</CardTitle>
                <CardDescription>Recursos para aprimorar sua redação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Estrutura do texto</CardTitle>
                      <CardDescription>Como estruturar uma redação nota 1000</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">Acessar</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Repertório</CardTitle>
                      <CardDescription>Repertório cultural e argumentativo</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">Acessar</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Conectivos</CardTitle>
                      <CardDescription>Conectivos e expressões para coesão</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">Acessar</Button>
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
