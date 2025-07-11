"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart, Settings, Smartphone, Database, Palette, Globe, BarChart3, Store, LibraryIcon } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Tech Loja",
    description: "Plataforma completa de e-commerce sem comissões para criar lojas virtuais profissionais.",
    icon: ShoppingCart,
    features: [
      "E-commerce completo",
      "WhatsApp integrado", 
      "Domínio próprio incluso",
      "Zero comissões",
      "Dashboard profissional"
    ],
    pricing: "A partir de R$ 39,90/mês",
    link: "/servicos/tech-loja",
    status: "disponivel",
    color: "bg-blue-100 text-blue-600",
    gradient: "from-blue-500 to-blue-700",
    category: "E-commerce"
  },
  {
    name: "Viveiro Platform",
    description: "Sistema completo para administração de viveiros, controle de estoque, vendas e relatórios.",
    icon: Settings,
    features: [
      "Gestão de produtos e categorias",
      "Controle de vendas e relatórios", 
      "Dashboard intuitivo",
      "Design responsivo",
      "Desenvolvido por TechForWeb"
    ],
    pricing: "Sob consulta",
    link: "/servicos/viveiro-plataform",
    status: "em-desenvolvimento",
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
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800 mb-4">
            🛠️ Nossos Serviços
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soluções Digitais Completas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="rounded-full border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
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
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                {/* Header do Card */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge 
                    variant={service.status === "em-desenvolvimento" ? "secondary" : "default"}
                    className={service.status === "em-desenvolvimento" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}
                  >
                    {service.status === "em-desenvolvimento" ? "Em Desenvolvimento" : "Disponível"}
                  </Badge>
                </div>

                {/* Conteúdo */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{service.features.length - 3} mais recursos
                    </div>
                  )}
                </div>

                {/* Preço */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-lg font-semibold text-blue-600 mb-3">{service.pricing}</p>
                  
                  <div className="flex space-x-2">
                    {service.link !== "#" ? (
                      <Link href={service.link} className="flex-1">
                        <Button className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:opacity-90`}>
                          Ver Detalhes
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        className={`flex-1 bg-gradient-to-r ${service.gradient} text-white hover:opacity-90`}
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Precisa de algo personalizado?</h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Desenvolvemos soluções sob medida para atender necessidades específicas do seu negócio. 
            Nossa equipe está pronta para transformar suas ideias em realidade.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
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