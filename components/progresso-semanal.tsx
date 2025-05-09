"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Button } from "@/components/ui/button"
import { Download, Share2, Filter } from "lucide-react"

export default function ProgressoSemanal() {
  const dadosSemanais = [
    { dia: "Seg", matematica: 120, fisica: 0, quimica: 0, outras: 60 },
    { dia: "Ter", matematica: 0, fisica: 120, quimica: 0, outras: 60 },
    { dia: "Qua", matematica: 0, fisica: 0, quimica: 120, outras: 60 },
    { dia: "Qui", matematica: 120, fisica: 0, quimica: 0, outras: 60 },
    { dia: "Sex", matematica: 0, fisica: 120, quimica: 0, outras: 60 },
    { dia: "Sáb", matematica: 40, fisica: 40, quimica: 40, outras: 60 },
    { dia: "Dom", matematica: 0, fisica: 0, quimica: 0, outras: 0 },
  ]

  const desempenhoProvas = [
    { prova: "Simulado 1", matematica: 65, fisica: 70, quimica: 50, media: 62 },
    { prova: "Simulado 2", matematica: 68, fisica: 72, quimica: 55, media: 65 },
    { prova: "Simulado 3", matematica: 70, fisica: 75, quimica: 60, media: 68 },
    { prova: "FAMERP 2022", matematica: 62, fisica: 68, quimica: 52, media: 61 },
    { prova: "UNESP 2023", matematica: 66, fisica: 70, quimica: 58, media: 65 },
  ]

  const progressoMensal = [
    { mes: "Jan", matematica: 45, fisica: 40, quimica: 35 },
    { mes: "Fev", matematica: 50, fisica: 45, quimica: 40 },
    { mes: "Mar", matematica: 55, fisica: 50, quimica: 42 },
    { mes: "Abr", matematica: 60, fisica: 55, quimica: 45 },
    { mes: "Mai", matematica: 65, fisica: 60, quimica: 48 },
    { mes: "Jun", matematica: 68, fisica: 72, quimica: 54 },
  ]

  const errosComuns = [
    { categoria: "Geometria Espacial", quantidade: 12 },
    { categoria: "Termoquímica", quantidade: 10 },
    { categoria: "Cinemática", quantidade: 8 },
    { categoria: "Funções", quantidade: 7 },
    { categoria: "Estequiometria", quantidade: 6 },
  ]

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Análise de Desempenho</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Acompanhe seu progresso e identifique áreas para melhorar
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="h-9 gap-1 rounded-full">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filtrar</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-1 rounded-full">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Exportar</span>
          </Button>
          <Button size="sm" className="h-9 gap-1 rounded-full">
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="tempo" className="w-full">
        <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-muted/30">
          <TabsTrigger
            value="tempo"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Tempo de Estudo
          </TabsTrigger>
          <TabsTrigger
            value="desempenho"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Desempenho
          </TabsTrigger>
          <TabsTrigger
            value="progresso"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Progresso
          </TabsTrigger>
          <TabsTrigger
            value="erros"
            className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
          >
            Erros Comuns
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tempo" className="mt-6">
          <Card className="border-none shadow-sm bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle>Tempo de Estudo Semanal (minutos)</CardTitle>
              <CardDescription>Distribuição do tempo por disciplina</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dadosSemanais} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="dia" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        border: "none",
                      }}
                    />
                    <Bar dataKey="matematica" name="Matemática" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="fisica" name="Física" stackId="a" fill="#22c55e" />
                    <Bar dataKey="quimica" name="Química" stackId="a" fill="#a855f7" />
                    <Bar dataKey="outras" name="Outras Matérias" stackId="a" fill="#f97316" radius={[0, 0, 4, 4]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Matemática</span>
                    <p className="text-sm font-medium">280 min</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Física</span>
                    <p className="text-sm font-medium">240 min</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Química</span>
                    <p className="text-sm font-medium">160 min</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-orange-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Outras</span>
                    <p className="text-sm font-medium">300 min</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="desempenho" className="mt-6">
          <Card className="border-none shadow-sm bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle>Desempenho em Provas (%)</CardTitle>
              <CardDescription>Resultados dos simulados e provas anteriores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={desempenhoProvas} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="prova" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        border: "none",
                      }}
                    />
                    <Bar dataKey="matematica" name="Matemática" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="fisica" name="Física" fill="#22c55e" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="quimica" name="Química" fill="#a855f7" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="media" name="Média Geral" fill="#f97316" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Matemática</span>
                    <p className="text-sm font-medium">66.2%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Física</span>
                    <p className="text-sm font-medium">71.0%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Química</span>
                    <p className="text-sm font-medium">55.0%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-orange-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Média</span>
                    <p className="text-sm font-medium">64.2%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progresso" className="mt-6">
          <Card className="border-none shadow-sm bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle>Progresso Mensal (%)</CardTitle>
              <CardDescription>Evolução do desempenho ao longo dos meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressoMensal} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="mes" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        border: "none",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="matematica"
                      name="Matemática"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="fisica"
                      name="Física"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="quimica"
                      name="Química"
                      stroke="#a855f7"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Matemática</span>
                    <p className="text-sm font-medium">+23% em 6 meses</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Física</span>
                    <p className="text-sm font-medium">+32% em 6 meses</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                  <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                  <div>
                    <span className="text-xs text-muted-foreground">Química</span>
                    <p className="text-sm font-medium">+19% em 6 meses</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="erros" className="mt-6">
          <Card className="border-none shadow-sm bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle>Erros Mais Comuns</CardTitle>
              <CardDescription>Categorias com maior número de erros</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={errosComuns} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                    <XAxis type="number" />
                    <YAxis dataKey="categoria" type="category" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        border: "none",
                      }}
                    />
                    <Bar dataKey="quantidade" name="Quantidade de Erros" fill="#ef4444" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                <h4 className="font-medium text-sm">Recomendação de Estudo</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Foque em Geometria Espacial e Termoquímica durante os blocos de refinamento. Estas são as áreas onde
                  você mais cometeu erros nos últimos simulados.
                </p>
                <Button variant="outline" size="sm" className="mt-3">
                  Ver plano de estudos personalizado
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
