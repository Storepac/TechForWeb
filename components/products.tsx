"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  LibraryIcon as Catalog,
  Store,
  BarChart3,
  MessageCircle,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react"

interface ProductsProps {
  onShowTechLoja?: () => void
}

const products = [
  {
    name: "Tech Loja",
    version: "v2.0",
    description: "Plataforma completa de e-commerce sem comissões para criar lojas virtuais profissionais.",
    icon: ShoppingCart,
    features: [
      "E-commerce completo",
      "WhatsApp integrado",
      "Domínio próprio incluso",
      "Zero comissões",
      "Dashboard profissional",
    ],
    pricing: {
      setup: "Ver na página",
      monthly: "Confira os planos",
    },
    link: "/techloja",
    popular: true,
    color: "bg-blue-100 text-blue-600",
    gradient: "from-blue-500 to-blue-700",
    hasDetailPage: true,
  },
  {
    name: "Gestor de Tráfego",
    version: "v1.0",
    description: "Serviço completo de gestão de tráfego pago para maximizar seus resultados digitais.",
    icon: BarChart3,
    features: [
      "Gestão Google Ads",
      "Facebook/Instagram Ads",
      "Otimização de campanhas",
      "Relatórios detalhados",
      "ROI maximizado",
    ],
    pricing: {
      setup: "Sob consulta",
      monthly: "Investimento personalizado",
    },
    link: "#",
    popular: false,
    color: "bg-green-100 text-green-600",
    gradient: "from-green-500 to-green-700",
    hasDetailPage: false,
  },
  {
    name: "Criação de Mídia",
    version: "v1.0",
    description: "Serviço especializado em criação de conteúdo visual para redes sociais e marketing digital.",
    icon: Store,
    features: [
      "Posts para redes sociais",
      "Stories criativos",
      "Banners promocionais",
      "Identidade visual",
      "Conteúdo estratégico",
    ],
    pricing: {
      setup: "Sob consulta",
      monthly: "Pacotes personalizados",
    },
    link: "#",
    popular: false,
    color: "bg-purple-100 text-purple-600",
    gradient: "from-purple-500 to-purple-700",
    hasDetailPage: false,
  },
  {
    name: "Criação de Sites",
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
]

export function Products({ onShowTechLoja }: ProductsProps) {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
            🚀 Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Soluções digitais prontas para usar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Produtos desenvolvidos pela TechForWeb para acelerar sua transformação digital com tecnologia de ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 w-[95%] mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-visible ${
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
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {product.version}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{product.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Principais recursos:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Implementação:</span>
                    <span className="font-bold text-gray-900">{product.pricing.setup}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Mensalidade:</span>
                    <span className="font-bold text-blue-600">{product.pricing.monthly}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  {product.hasDetailPage ? (
                    <Button
                      className={`flex-1 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90`}
                      onClick={() => {
                        onShowTechLoja?.()
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }, 100)
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

        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisa de algo personalizado?</h3>
            <p className="text-gray-600 text-lg mb-6">
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
