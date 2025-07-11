"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, Star, Store, Smartphone, MessageCircle, BarChart3, Shield, Zap, Globe, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Store,
    title: "E-commerce Completo",
    description: "Loja virtual profissional com carrinho, checkout e catálogo responsivo",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Design otimizado para desktop, tablet e mobile com performance superior",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    description: "Integração completa com WhatsApp para vendas diretas e atendimento",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Dashboard Profissional",
    description: "Painel administrativo completo para gestão total do seu negócio",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Globe,
    title: "Domínio Próprio",
    description: "Domínio .com.br profissional incluso para dar credibilidade",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Zap,
    title: "Zero Comissões",
    description: "Sem taxas sobre vendas. Todo o lucro é 100% seu para sempre",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Certificado SSL, backup automático e proteção contra ataques",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Users,
    title: "Suporte TechForWeb",
    description: "Suporte técnico especializado da equipe TechForWeb",
    color: "bg-cyan-100 text-cyan-600",
  },
];

const plans = [
  {
    name: "Start",
    price: 39.99,
    originalPrice: 49.99,
    products: 1000,
    photos: 3,
    popular: false,
    description: "Ideal para começar",
    savings: "20% OFF",
    whatsappMessage:
      "Olá TechForWeb! Tenho interesse no Plano Start do Tech Loja (1000 produtos, 3 fotos por produto, R$ 39,90/mês + taxa de implementação R$ 997,00). Gostaria de mais informações!",
  },
  {
    name: "Pro",
    price: 79.99,
    originalPrice: 99.99,
    products: 2000,
    photos: 5,
    popular: true,
    description: "Mais vendido",
    savings: "20% OFF",
    whatsappMessage:
      "Olá TechForWeb! Tenho interesse no Plano Pro do Tech Loja (2000 produtos, 5 fotos por produto, R$ 79,90/mês + taxa de implementação R$ 997,00). Gostaria de mais informações!",
  },
  {
    name: "Max",
    price: 149.99,
    originalPrice: 189.99,
    products: 5000,
    photos: 8,
    popular: false,
    description: "Para grandes volumes",
    savings: "21% OFF",
    whatsappMessage:
      "Olá TechForWeb! Tenho interesse no Plano Max do Tech Loja (5000 produtos, 8 fotos por produto, R$ 149,90/mês + taxa de implementação R$ 997,00). Gostaria de mais informações!",
  },
];

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
];

const steps = [
  {
    number: "1",
    title: "Escolha seu plano",
    description: "Selecione o plano TechForWeb que melhor atende às necessidades do seu negócio",
    icon: "🎯",
  },
  {
    number: "2",
    title: "Setup profissional",
    description: "Nossa equipe TechForWeb realiza toda a configuração em até 7 dias úteis",
    icon: "⚙️",
  },
  {
    number: "3",
    title: "Treinamento completo",
    description: "Receba credenciais, tutorial e treinamento para administrar sua loja",
    icon: "🎓",
  },
  {
    number: "4",
    title: "Comece a vender",
    description: "Cadastre produtos e inicie suas vendas com sua loja profissional",
    icon: "🚀",
  },
];

export default function TechLojaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link href="/servicos">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Serviços
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
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
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8"
                  onClick={() => {
                    const el = document.getElementById('planos');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
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
            </div>

            {/* RIGHT - Mockup */}
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

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
              ⚡ Tecnologia TechForWeb
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recursos profissionais para seu e-commerce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plataforma completa desenvolvida pela TechForWeb com todos os recursos necessários para criar uma loja
              virtual de alto padrão e começar a vender online hoje mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-800">
              🔥 OFERTA ESPECIAL
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Planos com até 21% de desconto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferta por tempo limitado! Preços especiais para você começar a vender online hoje mesmo.
            </p>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-200">
              <p className="text-red-800 font-semibold">
                ⏰ Oferta válida até o final do mês • Setup gratuito • Taxa de implementação reduzida
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-blue-500 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <div className="space-y-2">
                      {plan.originalPrice && (
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-lg text-gray-500 line-through">R$ {plan.originalPrice}</span>
                          <Badge className="bg-red-100 text-red-600 text-xs font-semibold">
                            {plan.savings}
                          </Badge>
                        </div>
                      )}
                      <div className="text-4xl font-bold text-gray-900">R$ {plan.price}</div>
                      <div className="text-gray-600">por mês</div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Produtos:</span>
                        <span className="font-semibold">{plan.products.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fotos por produto:</span>
                        <span className="font-semibold">{plan.photos}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxa de implementação:</span>
                        <span className="font-semibold text-blue-600">R$ 997,00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Setup gratuito:</span>
                        <span className="font-semibold text-green-600">✓ Incluso</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Treinamento:</span>
                        <span className="font-semibold text-green-600">✓ Incluso</span>
                      </div>
                    </div>

                    {plan.originalPrice && (
                      <div className="text-center mb-4">
                        <p className="text-sm text-green-600 font-semibold">
                          💰 Economia de R$ {(plan.originalPrice - plan.price).toFixed(0)}/mês
                        </p>
                      </div>
                    )}
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                      onClick={() => {
                        const encodedMessage = encodeURIComponent(plan.whatsappMessage);
                        window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank");
                      }}
                    >
                      Escolher Plano
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Included Features */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Todos os planos incluem:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
              🚀 Como Funciona
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Em 4 passos simples</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e transparente para ter sua loja virtual funcionando rapidamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-2xl">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-blue-600">PASSO {step.number}</div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar a vender online?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empreendedores que já estão vendendo com a Tech Loja.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            onClick={() => {
              const message = "Olá TechForWeb! Gostaria de mais informações sobre a Tech Loja e como começar.";
              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank");
            }}
          >
            Falar com Especialista
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
} 