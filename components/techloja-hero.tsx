"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, ArrowLeft } from "lucide-react"

interface TechLojaHeroProps {
  onBackToHome: () => void
}

export function Hero({ onBackToHome }: TechLojaHeroProps) {
  return (
    <>
      <section
        id="inicio"
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
      >
        {/* Back button */}
        <div className="container mx-auto px-4 mb-4">
          <Button variant="ghost" onClick={() => {
            if (onBackToHome) {
              onBackToHome();
            } else {
              window.location.href = "/";
            }
          }} className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Button>
        </div>

        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-100 rounded-full opacity-40" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
                  🚀 Loja Virtual Profissional
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Crie sua
                  <span className="block text-blue-600">Loja Virtual</span>
                  <span className="block">sem comissões</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Plataforma completa de e-commerce desenvolvida pela TechForWeb. Tenha sua loja profissional com domínio
                  próprio, WhatsApp integrado e zero taxas sobre vendas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8" onClick={() => {
                  const el = document.getElementById('planos');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Ver Planos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  onClick={() => {
                    const el = document.getElementById('como-funciona');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Como Funciona
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  "E-commerce completo sem comissões",
                  "Domínio próprio (.com.br) incluso",
                  "WhatsApp Business integrado",
                ].map((text) => (
                  <div key={text} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
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
                    <p className="text-sm text-gray-600 font-medium">+50 lojas criadas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 pb-4 border-b border-gray-100">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="ml-4 text-xs text-gray-600 font-mono">minhaloja.com.br</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-blue-600 text-white rounded-lg p-3 text-center font-semibold text-sm">
                      Minha Loja Virtual
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {["Produto 1", "Produto 2", "Produto 3", "Produto 4"].map((p) => (
                        <div key={p} className="bg-gray-100 rounded p-2 text-center text-xs">
                          {p}
                        </div>
                      ))}
                    </div>

                    <div className="bg-green-500 text-white rounded-lg p-2 text-center text-xs font-semibold">
                      💬 Comprar via WhatsApp
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-2 z-10">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-20" />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-100 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
