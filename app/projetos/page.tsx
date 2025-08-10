"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Github, ShoppingCart, Settings, Globe, Smartphone, Database, Palette } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Tech Loja - E-commerce",
    description: "Plataforma completa de e-commerce sem comissões para lojas virtuais profissionais.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Next.js", "E-commerce", "WhatsApp"],
    link: "/servicos/tech-loja",
    github: "#",
    category: "E-commerce",
    status: "Ativo",
    color: "bg-blue-100 text-blue-600",
    features: [
      "E-commerce completo sem comissões",
      "Integração WhatsApp Business",
      "Domínio próprio incluso",
      "Dashboard profissional"
    ]
  },
  {
    title: "Viveiro Platform",
    description: "Sistema completo para administração de viveiros, controle de estoque, vendas e relatórios.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "TypeScript", "Sistema", "Dashboard"],
    link: "/servicos/viveiro-plataform",
    github: "#",
    category: "Sistema",
    status: "Em Desenvolvimento",
    color: "bg-green-100 text-green-600",
    features: [
      "Gestão de produtos e categorias",
      "Controle de vendas e relatórios",
      "Dashboard intuitivo",
      "Design responsivo"
    ]
  },
  {
    title: "Site Institucional - Consultoria",
    description: "Site moderno e responsivo para empresa de consultoria empresarial com blog integrado.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    link: "#",
    github: "#",
    category: "Website",
    status: "Concluído",
    color: "bg-purple-100 text-purple-600",
    features: [
      "Design moderno e responsivo",
      "Blog integrado",
      "SEO otimizado",
      "Painel administrativo"
    ]
  },
  {
    title: "Landing Page - Campanha Digital",
    description: "Página de conversão otimizada para campanha de marketing digital com alta taxa de conversão.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Landing Page", "Conversão", "SEO", "Analytics"],
    link: "#",
    github: "#",
    category: "Landing Page",
    status: "Concluído",
    color: "bg-orange-100 text-orange-600",
    features: [
      "Alta conversão",
      "A/B Testing implementado",
      "Analytics integrado",
      "Integração com CRM"
    ]
  },
  {
    title: "App Mobile Web - Delivery",
    description: "Aplicação web responsiva com funcionalidades mobile-first para delivery de alimentos.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["PWA", "Mobile", "Offline", "Push"],
    link: "#",
    github: "#",
    category: "App Web",
    status: "Concluído",
    color: "bg-pink-100 text-pink-600",
    features: [
      "PWA com funcionalidades offline",
      "Notificações push",
      "Geolocalização",
      "Pagamento integrado"
    ]
  },
  {
    title: "Sistema de Gestão - Clínica",
    description: "Sistema completo para gestão de clínica médica com agendamento e prontuário eletrônico.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["PHP", "MySQL", "Dashboard", "Relatórios"],
    link: "#",
    github: "#",
    category: "Sistema",
    status: "Concluído",
    color: "bg-indigo-100 text-indigo-600",
    features: [
      "Agendamento online",
      "Prontuário eletrônico",
      "Relatórios médicos",
      "Integração com planos de saúde"
    ]
  },
  {
    title: "E-commerce - Moda Feminina",
    description: "Loja virtual completa para marca de moda feminina com catálogo extenso e integração com marketplaces.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["E-commerce", "Moda", "Marketplace", "Integração"],
    link: "#",
    github: "#",
    category: "E-commerce",
    status: "Concluído",
    color: "bg-rose-100 text-rose-600",
    features: [
      "Catálogo com 500+ produtos",
      "Integração com marketplaces",
      "Sistema de fidelidade",
      "Relatórios de vendas"
    ]
  },
  {
    title: "API REST - Integração Sistemas",
    description: "API REST completa para integração entre diferentes sistemas empresariais.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["API", "REST", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    category: "API",
    status: "Concluído",
    color: "bg-cyan-100 text-cyan-600",
    features: [
      "API REST completa",
      "Autenticação JWT",
      "Documentação Swagger",
      "Monitoramento em tempo real"
    ]
  }
];

const categories = [
  { name: "Todos", value: "todos" },
  { name: "E-commerce", value: "e-commerce" },
  { name: "Sistema", value: "sistema" },
  { name: "Website", value: "website" },
  { name: "Landing Page", value: "landing-page" },
  { name: "App Web", value: "app-web" },
  { name: "API", value: "api" }
];

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800 mb-4">
            💼 Nosso Portfólio
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos Realizados
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos desenvolvidos pela TechForWeb. Cada projeto é único e 
            desenvolvido com foco nos resultados e satisfação do cliente.
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

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
            <CardContent className="p-6 space-y-4">
                {/* Header do Card */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center`}>
                    {project.category === "E-commerce" && <ShoppingCart className="h-6 w-6" />}
                    {project.category === "Sistema" && <Settings className="h-6 w-6" />}
                    {project.category === "Website" && <Globe className="h-6 w-6" />}
                    {project.category === "Landing Page" && <Smartphone className="h-6 w-6" />}
                    {project.category === "App Web" && <Smartphone className="h-6 w-6" />}
                    {project.category === "API" && <Database className="h-6 w-6" />}
                  </div>
                  <Badge 
                    variant={project.status === "Em Desenvolvimento" ? "secondary" : "default"}
                    className={project.status === "Em Desenvolvimento" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Conteúdo */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 2 && (
                    <div className="text-sm text-muted-foreground">
                      +{project.features.length - 2} mais recursos
                    </div>
                  )}
                </div>

                {/* Botões */}
                <div className="flex space-x-2 pt-4">
                  {project.link !== "#" ? (
                    <Link href={project.link} className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                        Ver Projeto
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
                      onClick={() => {
                        const message = `Olá TechForWeb! Gostaria de mais informações sobre o projeto ${project.title}.`
                        const encodedMessage = encodeURIComponent(message)
                        window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
                      }}
                    >
                      Solicitar Orçamento
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                  
                  <Button variant="outline" size="sm" className="border-gray-300">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Tem um projeto em mente?</h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Vamos transformar sua ideia em realidade! Nossa equipe está pronta para desenvolver 
            a solução perfeita para seu negócio.
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
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
} 