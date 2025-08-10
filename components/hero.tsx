import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-100 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
                🚀 Empresa de Desenvolvimento Web
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Desenvolvimento
                <span className="block text-blue-600">Web Profissional</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Criamos sites, sistemas e lojas virtuais modernas para impulsionar seu negócio. Soluções digitais
                completas com tecnologia de ponta e design responsivo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Ver Portfólio
              </Button>
            </div>

              <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">Sites responsivos e modernos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">Sistemas web personalizados</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">E-commerce profissional</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">+100 projetos entregues</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card text-card-foreground rounded-2xl shadow-2xl p-6 border border-border">
              {/* Code editor mockup */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-4 border-b border-gray-100">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-xs text-muted-foreground font-mono">index.html</div>
                </div>

                <div className="space-y-2 font-mono text-sm">
                  <div className="text-muted-foreground">{"<html>"}</div>
                  <div className="text-blue-600 ml-4">{"<head>"}</div>
                  <div className="text-green-600 ml-8">{"<title>TechForWeb</title>"}</div>
                  <div className="text-blue-600 ml-4">{"</head>"}</div>
                  <div className="text-blue-600 ml-4">{"<body>"}</div>
                  <div className="text-purple-600 ml-8">{"<h1>Desenvolvimento Web</h1>"}</div>
                  <div className="text-muted-foreground ml-8">{"<p>Soluções digitais...</p>"}</div>
                  <div className="text-blue-600 ml-4">{"</body>"}</div>
                  <div className="text-muted-foreground">{"</html>"}</div>
                </div>

                <div className="bg-blue-600 text-white rounded-lg p-3 text-center font-semibold text-sm">
                  Código Profissional
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-2 z-10">
              <CheckCircle className="h-4 w-4" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-100 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
