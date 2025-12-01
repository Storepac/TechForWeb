"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  LibraryIcon as Catalog,
  BarChart3,
  MessageCircle,
  ArrowRight,
  Star,
  CheckCircle,
  Calendar,
  MapPin,
  Globe,
} from "lucide-react"

interface ProductsProps {
  onShowTechLoja?: () => void
}

const products = [
  {
    name: "Agendei",
    version: "v1.0",
    description:
      "Sistema de agendamentos fáceis e rápidos. Gerencie horários, clientes e cobranças em uma única plataforma.",
    icon: Calendar,
    features: [
      "Agenda online intuitiva",
      "Gestão de clientes",
      "Lembretes automáticos",
      "Cobrança integrada",
      "Painel com visão do dia",
    ],
    pricing: {
      setup: "Plano sob medida",
      monthly: "Consulte condições",
    },
    link: "https://agendei.techforweb.com.br/",
    popular: false,
    color: "bg-emerald-100 text-emerald-700",
    gradient: "from-emerald-500 to-emerald-700",
    hasDetailPage: false,
    isLarge: true,
    isExternal: true,
  },
  {
    name: "XixiMaps",
    version: "v1.0",
    description:
      "Mapa colaborativo de banheiros públicos limpos e seguros, pensado especialmente para mulheres.",
    icon: MapPin,
    features: [
      "Mapa interativo",
      "Avaliação de segurança e higiene",
      "Filtros por tipo de local",
      "Interface simples e acessível",
      "Foco em segurança para mulheres",
    ],
    pricing: {
      setup: "Uso gratuito",
      monthly: "Modelo a definir",
    },
    link: "https://xiximaps.techforweb.com.br/landing",
    popular: true,
    color: "bg-blue-100 text-blue-700",
    gradient: "from-blue-500 to-blue-700",
    hasDetailPage: false,
    isLarge: true,
    isExternal: true,
  },
  {
    name: "Catálogo Tech Loja",
    version: "v2.0",
    description:
      "Crie sua loja online e venda pelo WhatsApp com checkout simplificado e foco em conversão.",
    icon: ShoppingCart,
    features: [
      "Catálogo completo de produtos",
      "Checkout via WhatsApp",
      "Layout otimizado para mobile",
      "Gestão simples do conteúdo",
      "Pronto para rodar em poucos dias",
    ],
    pricing: {
      setup: "Plano sob medida",
      monthly: "Consulte condições",
    },
    link: "https://catalogo.techforweb.com.br/",
    popular: false,
    color: "bg-pink-100 text-pink-700",
    gradient: "from-pink-500 to-pink-700",
    hasDetailPage: false,
    isLarge: true,
    isExternal: true,
  },
  {
    name: "Contador de Espirros",
    version: "v1.0",
    description:
      "App gratuito para monitorar sua saúde respiratória, registrando espirros e identificando padrões.",
    icon: BarChart3,
    features: [
      "Registro rápido de espirros",
      "Gráficos e estatísticas",
      "Funcionamento offline",
      "Dados salvos no dispositivo",
      "Totalmente gratuito",
    ],
    pricing: {
      setup: "App gratuito",
      monthly: "Sem custos",
    },
    link: "https://contador-de-espirros.lovable.app/",
    popular: false,
    color: "bg-purple-100 text-purple-700",
    gradient: "from-purple-500 to-purple-700",
    hasDetailPage: false,
    isLarge: true,
    isExternal: true,
  },
]

const smallProducts = [
  {
    name: "Sites Institucionais",
    version: "v2.0",
    description: "Desenvolvimento completo de sites institucionais, landing pages, blogs e portais corporativos.",
    icon: Catalog,
    features: ["Sites institucionais", "Landing pages", "Blogs corporativos", "Design responsivo", "SEO otimizado"],
    pricing: {
      setup: "Sob consulta",
      monthly: "Projeto personalizado",
    },
    link: "#",
    popular: false,
    color: "bg-orange-100 text-orange-600",
    gradient: "from-orange-500 to-orange-700",
    hasDetailPage: false,
  },
  {
    name: "Landing Pages",
    version: "v2.0",
    description: "Landing pages otimizadas para conversão com design moderno e alta performance.",
    icon: Globe,
    features: ["Design moderno", "Otimização conversão", "SEO avançado", "Analytics integrado", "Responsivo"],
    pricing: {
      setup: "Sob consulta",
      monthly: "Projeto personalizado",
    },
    link: "#",
    popular: false,
    color: "bg-cyan-100 text-cyan-600",
    gradient: "from-cyan-500 to-cyan-700",
    hasDetailPage: false,
  },
]

export function Products({ onShowTechLoja }: ProductsProps) {
  return (
    <section id="produtos" className="py-20 bg-white text-gray-900 dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">🚀 Nossos Produtos</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Nossos campeões de vendas
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Produtos mais solicitados desenvolvidos pela TechForWeb para acelerar sua transformação digital com tecnologia de ponta.
          </p>
        </div>

        {/* Large Products - 2 cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 w-[95%] mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-visible bg-white dark:bg-[#27272a] ${
                product.popular ? "ring-2 ring-blue-500 scale-105 pt-8" : ""
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-1 flex items-center space-x-1 shadow-lg whitespace-nowrap">
                    <Star className="w-3 h-3" />
                    <span className="text-xs sm:text-sm">Mais Popular</span>
                  </Badge>
                </div>
              )}

              <CardContent className="p-2 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${product.color} rounded-xl flex items-center justify-center`}>
                      <product.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {product.version}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{product.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Principais recursos:</h4>
                   <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-muted rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-muted-foreground">Implementação:</span>
                    <span className="font-bold text-gray-900 dark:text-foreground">{product.pricing.setup}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-muted-foreground">Mensalidade:</span>
                    <span className="font-bold text-blue-600">{product.pricing.monthly}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  {product.isExternal ? (
                    <Button
                      className={`flex-1 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90`}
                      onClick={() => {
                        window.open(product.link, "_blank")
                      }}
                    >
                      Acessar App
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : product.hasDetailPage ? (
                    <Button
                      className={`flex-1 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90`}
                      onClick={() => {
                        window.location.href = product.link
                      }}
                    >
                      Ver Detalhes
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      className={`flex-1 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90`}
                      onClick={() => {
                        const message = `Olá TechForWeb! Gostaria de mais informações sobre o ${product.name}.`
                        const encodedMessage = encodeURIComponent(message)
                        window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
                      }}
                    >
                      Solicitar Orçamento
                      <MessageCircle className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="border-gray-300 bg-transparent"
                    onClick={() => {
                      const message = `Olá TechForWeb! Gostaria de mais informações sobre o ${product.name}.`
                      const encodedMessage = encodeURIComponent(message)
                      window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Small Products - 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 w-[95%] mx-auto">
          {smallProducts.map((product, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-visible bg-white dark:bg-[#27272a]"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${product.color} rounded-lg flex items-center justify-center`}>
                    <product.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {product.version}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-muted-foreground text-sm leading-relaxed">{product.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Recursos:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600 dark:text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-muted rounded-lg p-3 space-y-1 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-muted-foreground">Implementação:</span>
                    <span className="font-bold text-gray-900 dark:text-foreground">{product.pricing.setup}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-muted-foreground">Mensalidade:</span>
                    <span className="font-bold text-blue-600">{product.pricing.monthly}</span>
                  </div>
                </div>

                                 <Button
                   className={`w-full bg-gradient-to-r ${product.gradient} text-white hover:opacity-90`}
                   onClick={() => {
                     if (product.hasDetailPage) {
                       window.location.href = product.link
                     } else {
                       const message = `Olá TechForWeb! Gostaria de mais informações sobre o ${product.name}.`
                       const encodedMessage = encodeURIComponent(message)
                       window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
                     }
                   }}
                 >
                   {product.hasDetailPage ? (
                     <>
                       Ver Detalhes
                       <ArrowRight className="w-4 h-4 ml-2" />
                     </>
                   ) : (
                     <>
                       Solicitar Orçamento
                       <MessageCircle className="w-4 h-4 ml-2" />
                     </>
                   )}
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card text-card-foreground rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Precisa de algo personalizado?</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Desenvolvemos produtos sob medida para atender necessidades específicas do seu negócio.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Solicitar Produto Personalizado
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
