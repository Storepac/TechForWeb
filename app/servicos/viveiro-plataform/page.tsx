"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Smartphone, DollarSign, Truck, Users, Zap, CheckCircle, MessageCircle, TrendingUp, CreditCard, Package, Globe } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Smartphone,
    title: "Vendas Móveis",
    description: "Venda de qualquer lugar com seu smartphone, sem perder oportunidades de negócio",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: CreditCard,
    title: "Link de Pagamento",
    description: "Gere links de pagamento instantâneos para seus clientes pagarem na hora",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: DollarSign,
    title: "Comissões Automáticas",
    description: "Receba sua comissão automaticamente após cada venda confirmada",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Package,
    title: "Catálogo Completo",
    description: "Acesso a todos os produtos disponíveis com preços e estoque em tempo real",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Truck,
    title: "Entrega Direta",
    description: "Nós enviamos o produto diretamente para o cliente, você só vende",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Relatórios de Vendas",
    description: "Acompanhe suas vendas, comissões e performance em tempo real",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const benefits = [
  "Não perca vendas durante viagens - venda de qualquer lugar",
  "Ganhe comissões de 10% a 25% em cada venda",
  "Sem estoque para carregar - produtos enviados diretamente",
  "Pagamento instantâneo via PIX, cartão ou boleto",
  "Catálogo sempre atualizado com novos produtos",
  "Suporte 24/7 para suas vendas"
];

const testimonials = [
  {
    name: "João Silva",
    role: "Mudeiro - 5 anos de experiência",
    text: "Antes perdia muitas vendas na estrada. Agora vendo até 3x mais com o sistema! O link de pagamento é genial, cliente paga na hora e eu recebo a comissão no dia seguinte.",
    commission: "R$ 2.500/mês",
    location: "São Paulo → Minas Gerais"
  },
  {
    name: "Carlos Mendes",
    role: "Vendedor de Mudas - 8 anos",
    text: "Sistema salvou meu negócio! Antes tinha que carregar estoque, agora só mostro o catálogo no celular. Cliente escolhe, paga e eu ganho comissão. Muito mais prático!",
    commission: "R$ 3.200/mês",
    location: "Paraná → Santa Catarina"
  },
  {
    name: "Roberto Alves",
    role: "Mudeiro Autônomo - 12 anos",
    text: "Já vendi mais de R$ 15 mil em um mês! O sistema é perfeito para quem viaja. Sempre tenho o catálogo atualizado e os clientes adoram pagar pelo WhatsApp.",
    commission: "R$ 4.800/mês",
    location: "Rio Grande do Sul → São Paulo"
  },
  {
    name: "Antônio Costa",
    role: "Vendedor de Plantas - 6 anos",
    text: "Comecei há 3 meses e já estou ganhando R$ 1.800 por mês. O melhor é que não preciso mais carregar mudas no carro. Sistema muito inteligente!",
    commission: "R$ 1.800/mês",
    location: "Bahia → Sergipe"
  },
  {
    name: "Francisco Santos",
    role: "Mudeiro Profissional - 15 anos",
    text: "Depois de 15 anos na estrada, finalmente encontrei uma solução que funciona. Vendo de qualquer lugar, recebo comissão automática e ainda tenho relatórios detalhados.",
    commission: "R$ 3.500/mês",
    location: "Goiás → Mato Grosso"
  },
  {
    name: "Pedro Oliveira",
    role: "Vendedor de Viveiro - 10 anos",
    text: "Sistema revolucionou minha forma de vender. Antes perdia vendas por não ter o produto, agora sempre tenho o catálogo completo no bolso. Clientes adoram!",
    commission: "R$ 2.800/mês",
    location: "Espírito Santo → Rio de Janeiro"
  },
  {
    name: "Miguel Rodrigues",
    role: "Mudeiro - 7 anos",
    text: "Melhor investimento que fiz! Em 2 meses já recuperei o valor e agora só lucro. O suporte é excelente e sempre me ajudam quando preciso.",
    commission: "R$ 2.100/mês",
    location: "Ceará → Piauí"
  },
  {
    name: "José Pereira",
    role: "Vendedor de Mudas - 9 anos",
    text: "Sistema muito profissional! Os clientes ficam impressionados com a facilidade do pagamento. Eu só mostro o produto, eles pagam e eu recebo comissão. Perfeito!",
    commission: "R$ 3.600/mês",
    location: "Maranhão → Pará"
  }
];

export default function ViveiroPlataformPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-background dark:text-foreground">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link href="/servicos">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Serviços
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-background dark:via-background dark:to-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-semibold text-blue-800 dark:text-blue-200">
                  💰 Sistema de Vendas Móveis
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-foreground leading-tight">
                  Venda de
                  <span className="block text-blue-600">Qualquer Lugar</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-muted-foreground leading-relaxed">
                  Transforme suas viagens em oportunidades de venda! Acesse nosso catálogo, 
                  gere links de pagamento e receba comissões automáticas. 
                  <strong>Não perca mais nenhuma venda!</strong>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 dark:bg-blue-500 dark:hover:bg-blue-600"
                  onClick={() => {
                    const message = "Olá TechForWeb! Quero começar a vender com o sistema móvel e ganhar comissões. Como funciona?"
                    const encodedMessage = encodeURIComponent(message)
                    window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
                  }}
                >
                  Quero Começar a Vender
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                  onClick={() => {
                    const el = document.getElementById('como-funciona');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Como Funciona
                </Button>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">Ganhe até R$ 5.000/mês</h3>
                </div>
                <p className="text-gray-700 dark:text-muted-foreground">
                  Mudeiros ativos ganham em média <strong>R$ 2.500/mês</strong> em comissões. 
                  Comece hoje mesmo!
                </p>
              </div>
            </div>

            {/* RIGHT - Mockup */}
            <div className="relative">
              <div className="bg-white dark:bg-card rounded-2xl shadow-2xl p-6 border border-gray-100 dark:border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 pb-4 border-b border-gray-100 dark:border-border">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="ml-4 text-xs text-gray-600 dark:text-muted-foreground font-mono">vendas-moveis.com</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-blue-600 text-white rounded-lg p-3 text-center font-semibold text-sm">
                      💰 Sistema de Vendas Móveis
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {["Catálogo", "Vendas", "Comissões", "Relatórios"].map((item) => (
                        <div key={item} className="bg-gray-100 dark:bg-muted rounded p-2 text-center text-xs dark:text-foreground">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="bg-green-500 text-white rounded-lg p-2 text-center text-xs font-semibold">
                      🚀 Venda de Qualquer Lugar!
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-2 z-10">
                <DollarSign className="h-4 w-4" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-20" />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-100 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-gray-50 dark:bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-semibold text-blue-800 dark:text-blue-200">
              ⚡ Como Funciona
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground">3 Passos Simples para Começar a Vender</h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              É muito simples! Você se cadastra, acessa o catálogo e começa a vender imediatamente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground">Faça seu Cadastro</h3>
              <p className="text-gray-600 dark:text-muted-foreground">
                Cadastre-se gratuitamente e receba acesso ao catálogo completo de produtos
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground">Venda e Gere Pagamento</h3>
              <p className="text-gray-600 dark:text-muted-foreground">
                Selecione produtos, defina quantidade e valor, gere link de pagamento
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground">Receba sua Comissão</h3>
              <p className="text-gray-600 dark:text-muted-foreground">
                Após o pagamento, receba sua comissão automaticamente na conta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-sm font-semibold text-green-800 dark:text-green-200">
              🚀 Recursos do Sistema
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground">Tudo que você precisa para vender mais</h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              Sistema completo desenvolvido para maximizar suas vendas e facilitar seu trabalho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white dark:bg-[#27272a]"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center  px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-sm font-semibold text-green-800 dark:text-green-200">
                  💰 Vantagens Exclusivas
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground">
                  Por que escolher nosso sistema?
                </h2>
                <p className="text-xl text-gray-600 dark:text-muted-foreground leading-relaxed">
                  Diferencial único no mercado: você vende, nós enviamos, você recebe comissão. 
                  Simples assim!
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Comissões Atraentes</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ganhe de 10% a 25% de comissão por venda, dependendo do produto e volume.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center dark:text-foreground">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">R$ 2.500</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Média Mensal</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">24h</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Para Receber</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-sm font-semibold text-yellow-800">
              👥 Depoimentos Reais
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Quem já está vendendo mais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que nossos mudeiros estão dizendo sobre como o sistema transformou seus negócios.
            </p>
          </div>

          {/* Carrossel de Depoimentos */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1]?.[0] || ''}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-blue-600 font-medium">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-3 text-center border border-green-200">
                      <span className="text-green-800 font-bold text-lg">Comissão: {testimonial.commission}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Indicadores */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-blue-500 transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Estatísticas */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Mudeiros Ativos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">R$ 2.500</div>
              <div className="text-gray-600">Média de Comissão</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-600">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">24h</div>
              <div className="text-gray-600">Para Receber</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para multiplicar suas vendas?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de mudeiros que já estão vendendo mais com nosso sistema. 
            Cadastro gratuito e comece a vender hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              onClick={() => {
                const message = "Olá TechForWeb! Quero me cadastrar no sistema de vendas móveis e começar a vender hoje mesmo!";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank");
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Quero Me Cadastrar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => {
                const message = "Olá TechForWeb! Gostaria de mais informações sobre o sistema de vendas móveis e como funciona o processo de comissões.";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank");
              }}
            >
              <Globe className="w-4 h-4 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 