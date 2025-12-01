"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart, Settings, Smartphone, Database, Palette, Globe, BarChart3, Store, LibraryIcon } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Catálogo (Tech Loja)",
    description: "Crie sua loja online e venda pelo WhatsApp. Plataforma completa para criar sua loja virtual com checkout integrado ao WhatsApp.",
    icon: ShoppingCart,
    features: [
      "E-commerce completo",
      "WhatsApp integrado", 
      "Checkout integrado",
      "Sem taxas por venda",
      "Fácil de usar"
    ],
    pricing: "A partir de R$ 39,90/mês",
    link: "https://catalogo.techforweb.com.br/",
    status: "disponivel",
    color: "bg-blue-100 text-blue-600",
    gradient: "from-blue-500 to-blue-700",
    category: "E-commerce"
  },
  {
    name: "Agendei",
    description: "Sistema completo de agendamentos para gerenciar clientes, horários e cobranças de forma simples e eficiente.",
    icon: Settings,
    features: [
      "Agendamentos fáceis e rápidos",
      "Gestão de clientes", 
      "Sistema de cobranças",
      "Interface intuitiva",
      "Plataforma completa"
    ],
    pricing: "Acesse o sistema",
    link: "https://agendei.techforweb.com.br/",
    status: "disponivel",
    color: "bg-green-100 text-green-600",
    gradient: "from-green-500 to-green-700",
    category: "Sistema"
  },
  {
    name: "Sites Institucionais",
    description: "Sites profissionais e responsivos para apresentar sua empresa de forma moderna e eficiente.",
    icon: Globe,
    features: [
      "Design responsivo",
      "SEO otimizado",
      "Carregamento rápido",
      "Painel administrativo"
    ],
    pricing: "A partir de R$ 1.200",
    link: "#",
    status: "disponivel",
    color: "bg-purple-100 text-purple-600",
    gradient: "from-purple-500 to-purple-700",
    category: "Website"
  },
  {
    name: "E-commerce Personalizado",
    description: "Lojas virtuais completas para vender online com segurança e praticidade.",
    icon: ShoppingCart,
    features: [
      "Carrinho de compras",
      "Pagamento integrado",
      "Gestão de estoque",
      "Relatórios de vendas"
    ],
    pricing: "A partir de R$ 2.500",
    link: "#",
    status: "disponivel",
    color: "bg-orange-100 text-orange-600",
    gradient: "from-orange-500 to-orange-700",
    category: "E-commerce"
  },
  {
    name: "Sistemas Web",
    description: "Sistemas personalizados para automatizar processos e otimizar sua gestão.",
    icon: Settings,
    features: [
      "Desenvolvimento customizado",
      "Integração com APIs",
      "Dashboard completo",
      "Suporte técnico"
    ],
    pricing: "Sob consulta",
    link: "#",
    status: "disponivel",
    color: "bg-indigo-100 text-indigo-600",
    gradient: "from-indigo-500 to-indigo-700",
    category: "Sistema"
  },
  {
    name: "Landing Pages",
    description: "Páginas de conversão otimizadas para campanhas de marketing e captação de leads.",
    icon: Smartphone,
    features: [
      "Alta conversão",
      "Integração com CRM",
      "A/B Testing",
      "Analytics integrado"
    ],
    pricing: "A partir de R$ 800",
    link: "#",
    status: "disponivel",
    color: "bg-pink-100 text-pink-600",
    gradient: "from-pink-500 to-pink-700",
    category: "Landing Page"
  },
  {
    name: "APIs e Integrações",
    description: "Desenvolvimento de APIs e integrações para conectar diferentes sistemas.",
    icon: Database,
    features: [
      "REST APIs",
      "Integração de sistemas",
      "Webhooks",
      "Documentação completa"
    ],
    pricing: "Sob consulta",
    link: "#",
    status: "disponivel",
    color: "bg-cyan-100 text-cyan-600",
    gradient: "from-cyan-500 to-cyan-700",
    category: "API"
  },
  {
    name: "UI/UX Design",
    description: "Design de interfaces modernas e experiência do usuário otimizada.",
    icon: Palette,
    features: [
      "Prototipagem",
      "Design system",
      "Testes de usabilidade",
      "Design responsivo"
    ],
    pricing: "A partir de R$ 600",
    link: "#",
    status: "disponivel",
    color: "bg-yellow-100 text-yellow-600",
    gradient: "from-yellow-500 to-yellow-700",
    category: "Design"
  },
  {
    name: "Gestão de Tráfego",
    description: "Serviço completo de gestão de tráfego pago para maximizar seus resultados digitais.",
    icon: BarChart3,
    features: [
      "Gestão Google Ads",
      "Facebook/Instagram Ads",
      "Otimização de campanhas",
      "Relatórios detalhados",
      "ROI maximizado"
    ],
    pricing: "Investimento personalizado",
    link: "#",
    status: "disponivel",
    color: "bg-emerald-100 text-emerald-600",
    gradient: "from-emerald-500 to-emerald-700",
    category: "Marketing"
  },
  {
    name: "Criação de Mídia",
    description: "Serviço especializado em criação de conteúdo visual para redes sociais e marketing digital.",
    icon: Store,
    features: [
      "Posts para redes sociais",
      "Stories criativos",
      "Banners promocionais",
      "Identidade visual",
      "Conteúdo estratégico"
    ],
    pricing: "Pacotes personalizados",
    link: "#",
    status: "disponivel",
    color: "bg-rose-100 text-rose-600",
    gradient: "from-rose-500 to-rose-700",
    category: "Marketing"
  }
];

const categories = [
  { name: "Todos", value: "todos" },
  { name: "E-commerce", value: "e-commerce" },
  { name: "Sistema", value: "sistema" },
  { name: "Website", value: "website" },
  { name: "Landing Page", value: "landing-page" },
  { name: "API", value: "api" },
  { name: "Design", value: "design" },
  { name: "Marketing", value: "marketing" }
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground">
            🛠️ Nossos Serviços
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Soluções Digitais Completas
          </p>
          <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de desenvolvimento web e transformação digital 
            para impulsionar seu negócio com tecnologia de ponta.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant="outline"
              className="rounded-full border-gray-300 dark:border-border text-gray-700 dark:text-foreground hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white dark:bg-card"
            >
              <CardContent className="p-6 space-y-4">
                {/* Header do Card */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 ${service.color} dark:opacity-80 rounded-xl flex items-center justify-center`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge 
                    variant={service.status === "em-desenvolvimento" ? "secondary" : "default"}
                    className={service.status === "em-desenvolvimento" ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"}
                  >
                    {service.status === "em-desenvolvimento" ? "Em Desenvolvimento" : "Disponível"}
                  </Badge>
                </div>

                {/* Conteúdo */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground">{service.name}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500 dark:text-muted-foreground">
                      +{service.features.length - 3} mais recursos
                    </div>
                  )}
                </div>

                {/* Preço */}
                <div className="pt-3 border-t border-gray-100 dark:border-border">
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">{service.pricing}</p>
                  
                  <div className="flex space-x-2">
                    {service.link !== "#" ? (
                      service.link.startsWith("http") ? (
                        <Button 
                          className={`flex-1 bg-gradient-to-r ${service.gradient} text-white hover:opacity-90 dark:hover:opacity-80`}
                          onClick={() => {
                            window.open(service.link, "_blank")
                          }}
                        >
                          Acessar Sistema
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Link href={service.link} className="flex-1">
                          <Button className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:opacity-90 dark:hover:opacity-80`}>
                            Ver Detalhes
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      )
                    ) : (
                      <Button 
                        className={`flex-1 bg-gradient-to-r ${service.gradient} text-white hover:opacity-90 dark:hover:opacity-80`}
                        onClick={() => {
                          const message = `Olá TechForWeb! Gostaria de mais informações sobre ${service.name}.`
                          const encodedMessage = encodeURIComponent(message)
                          window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
                        }}
                      >
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Precisa de algo personalizado?</h3>
          <p className="text-blue-100 dark:text-blue-200 text-lg mb-6 max-w-2xl mx-auto">
            Desenvolvemos soluções sob medida para atender necessidades específicas do seu negócio. 
            Nossa equipe está pronta para transformar suas ideias em realidade.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-200 font-semibold"
            onClick={() => {
              const message = "Olá TechForWeb! Gostaria de solicitar um orçamento para um projeto personalizado."
              const encodedMessage = encodeURIComponent(message)
              window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
            }}
          >
            Falar com Especialista
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
} 