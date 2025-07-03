"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageCircle, Crown, Star } from "lucide-react"

const plans = [
  {
    name: "Start",
    price: 39.9,
    products: 700,
    photos: 2,
    popular: false,
    description: "Ideal para começar",
    whatsappMessage:
      "Olá TechForWeb! Tenho interesse no Plano Start do Tech Loja (1000 produtos, 2 fotos por produto, R$ 39,90/mês). Gostaria de mais informações!",
  },
  {
    name: "Pro",
    price: 79.9,
    products: 1200,
    photos: 3,
    popular: true,
    description: "Mais vendido",
    whatsappMessage:
      "Olá TechForWeb! Tenho interesse no Plano Pro do Tech Loja (1500 produtos, 3 fotos por produto, R$ 79,90/mês). Gostaria de mais informações!",
  },
  {
    name: "Max",
    price: 149.9,
    products: 2000,
    photos: 4,
    popular: false,
    description: "Para grandes volumes",
    whatsappMessage:
      "Olá TechForWeb! Tenho interesse no Plano Max do Tech Loja (2000 produtos, 4 fotos por produto, R$ 149,90/mês). Gostaria de mais informações!",
  },
]

const includedFeatures = [
  "E-commerce completo e profissional",
  "Domínio próprio (.com.br) incluso",
  "1 administrador por loja",
  "Dashboard profissional TechForWeb",
  "Sistema de pedidos automatizado",
  "Integração WhatsApp Business",
  "Catálogo responsivo e moderno",
  "Site 100% mobile-first",
  "Checkout otimizado para conversão",
  "Suporte técnico TechForWeb",
  "Certificado SSL incluso",
  "Backup automático diário",
]

export function Plans() {
  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5514996145415?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
            💼 Planos TechForWeb
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Escolha o plano ideal para seu negócio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planos mensais flexíveis sem fidelidade. Desenvolvido pela TechForWeb com suporte especializado e tecnologia
            de ponta.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 max-w-lg mx-auto mt-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Implementação TechForWeb</h3>
            <p className="text-4xl font-bold text-white">R$ 997,00</p>
            <p className="text-blue-100 mt-2">Pagamento único • Setup profissional completo</p>
            <div className="mt-4 text-sm text-blue-100">✓ Configuração completa • ✓ Treinamento • ✓ Suporte 7 dias</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "ring-2 ring-blue-600 shadow-2xl scale-105" : "shadow-lg border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-1 flex items-center space-x-1 shadow-lg whitespace-nowrap">
                    <Crown className="w-3 h-3" />
                    <span className="text-xs sm:text-sm">{plan.description}</span>
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <p className="text-gray-600 text-sm">{plan.description}</p>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-blue-600">
                    R$ {plan.price.toFixed(2).replace(".", ",")}
                    <span className="text-lg text-gray-600 font-normal">/mês</span>
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Produtos</span>
                    <span className="font-bold text-gray-900">{plan.products.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Fotos por produto</span>
                    <span className="font-bold text-gray-900">{plan.photos} fotos</span>
                  </div>
                </div>

                <Button
                  className={`w-full h-12 font-semibold ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"} text-white`}
                  onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contratar via WhatsApp
                </Button>

                {plan.popular && (
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Plano mais escolhido</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section do protótipo */}
        <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Veja um exemplo real de loja criada com nosso sistema!</h2>
            <p className="text-lg text-gray-700 mb-6">Confira um protótipo de loja virtual moderna, responsiva e pronta para vender, desenvolvida com a tecnologia TechForWeb.</p>
            <a
              href="https://model-bellastore-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition-colors text-lg"
            >
              Visualizar Protótipo
            </a>
          </div>
        </section>

        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-xl border border-blue-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-900">
              ✅ Recursos Incluídos em Todos os Planos TechForWeb
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">⚠️</span> Importante sobre cadastro de produtos:
              </h4>
              <p className="text-gray-700">
                O cadastro dos produtos não está incluso nos planos mensais. Você pode cadastrar manualmente através do
                painel administrativo ou contratar nosso serviço de cadastro profissional TechForWeb.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
