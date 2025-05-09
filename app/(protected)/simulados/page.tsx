import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Clock, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SimuladosPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Simulados</h1>
          <p className="text-muted-foreground">
            Prepare-se para o vestibular com nossos simulados completos e específicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Simulado Agendado */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>ENEM 2024</CardTitle>
                  <CardDescription>Simulado Completo</CardDescription>
                </div>
                <Badge className="bg-blue-500">Agendado</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>Sábado, 15 de Junho, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Duração: 5 horas e 30 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <span>180 questões + redação</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Iniciar Simulado</Button>
            </CardFooter>
          </Card>

          {/* Simulado Disponível */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>FUVEST 2024</CardTitle>
                  <CardDescription>Simulado 1ª Fase</CardDescription>
                </div>
                <Badge variant="outline" className="bg-green-100 text-green-700">Disponível</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Duração: 5 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <span>90 questões</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span>Todas as disciplinas</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Realizar Agora</Button>
            </CardFooter>
          </Card>

          {/* Simulado Disponível */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>UNICAMP 2024</CardTitle>
                  <CardDescription>Simulado Completo</CardDescription>
                </div>
                <Badge variant="outline" className="bg-green-100 text-green-700">Disponível</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Duração: 5 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <span>72 questões</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span>Todas as disciplinas</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Realizar Agora</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Simulados Concluídos</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">ENEM 2023 - Simulado 1</p>
                    <p className="text-sm text-muted-foreground">Realizado em: 10/05/2024</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">720 / 1000</p>
                      <p className="text-sm text-muted-foreground">Pontuação</p>
                    </div>
                    <Button size="sm" variant="outline">Ver Relatório</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">FUVEST 2023 - Simulado 1</p>
                    <p className="text-sm text-muted-foreground">Realizado em: 28/04/2024</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">68 / 90</p>
                      <p className="text-sm text-muted-foreground">Acertos</p>
                    </div>
                    <Button size="sm" variant="outline">Ver Relatório</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
