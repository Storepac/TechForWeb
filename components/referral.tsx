"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Users, MessageCircle, Star } from "lucide-react"

export function Referral() {
  const handleWhatsAppClick = () => {
    const message =
      "Olá TechForWeb! Gostaria de saber mais sobre o programa de indicação do Tech Loja e como posso receber 20% de cashback!"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5514996145415?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto shadow-2xl border-0 bg-white overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Left side - Content */}
              <div className="p-12 space-y-8">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                    <Gift className="h-10 w-10 text-blue-600" />
                  </div>

                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
                    💡 Programa Exclusivo TechForWeb
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Programa de Indicação
                    <span className="block text-blue-600">Tech Loja</span>
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    Indique clientes para a TechForWeb e receba cashback! Nossa forma de reconhecer parceiros que ajudam
                    a expandir nossa rede de lojas virtuais.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8" />
                    <span className="text-2xl font-bold">20% de Cashback</span>
                  </div>

                  <p className="text-blue-100 text-lg">
                    Para cada cliente indicado que contratar qualquer plano Tech Loja, você recebe 20% do valor da
                    implementação!
                  </p>

                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-white font-semibold text-center">
                      Isso significa até <span className="text-2xl">R$ 199,40</span> de volta para você!
                    </p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg w-full lg:w-auto"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Saiba Mais sobre Indicações
                </Button>
              </div>

              {/* Right side - Process */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 flex items-center">
                <div className="space-y-8 w-full">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">Como funciona:</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Você indica um cliente</h4>
                        <p className="text-gray-600 text-sm">Apresente a solução Tech Loja da TechForWeb</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Cliente contrata</h4>
                        <p className="text-gray-600 text-sm">Ele escolhe qualquer plano Tech Loja</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Você recebe cashback</h4>
                        <p className="text-gray-600 text-sm">20% do valor da implementação direto para você!</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Programa confiável TechForWeb</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
