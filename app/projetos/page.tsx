"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Github, ShoppingCart, Settings, Globe, Smartphone, Database, Palette } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Catálogo (Tech Loja)",
    description: "Plataforma completa para criar sua loja virtual com checkout integrado ao WhatsApp. Sem complicações, sem taxas por venda.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354074/guarda-roupa-digital-em-tela-transparente_e06ycz.jpg",
    tags: ["React", "Next.js", "E-commerce", "WhatsApp"],
    link: "https://catalogo.techforweb.com.br/",
    github: "#",
    category: "E-commerce",
    status: "Ativo",
    color: "bg-blue-100 text-blue-600",
    features: [
      "E-commerce completo sem taxas",
      "Checkout integrado ao WhatsApp",
      "Fácil de usar",
      "Sem complicações"
    ]
  },
  {
    title: "Agendei",
    description: "Sistema completo de agendamentos para gerenciar clientes, horários e cobranças de forma simples e eficiente.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354075/gestao_facqll.jpg",
    tags: ["Next.js", "TypeScript", "Sistema", "Agendamento"],
    link: "https://agendei.techforweb.com.br/",
    github: "#",
    category: "Sistema",
    status: "Ativo",
    color: "bg-green-100 text-green-600",
    features: [
      "Agendamentos fáceis e rápidos",
      "Gestão de clientes",
      "Sistema de cobranças",
      "Interface intuitiva"
    ]
  },
  {
    title: "XixiMaps",
    description: "Encontre banheiros públicos limpos, seguros e confiáveis perto de você. Pensado para todos, especialmente para mulheres.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354394/communication-social-media-icons-laptop-device_sqzebc.jpg",
    tags: ["Next.js", "Mapas", "Mobile", "Segurança"],
    link: "https://xiximaps.techforweb.com.br/landing",
    github: "#",
    category: "App Web",
    status: "Ativo",
    color: "bg-purple-100 text-purple-600",
    features: [
      "Mapa interativo",
      "Banheiros seguros",
      "Filtros por localização",
      "Avaliações e comentários"
    ]
  },
  {
    title: "Contador de Espirros",
    description: "Monitore sua saúde respiratória. Registre espirros, identifique padrões e receba insights personalizados.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354075/app_mobile_azdhbc.jpg",
    tags: ["PWA", "Mobile", "Saúde", "Offline"],
    link: "https://contador-de-espirros.lovable.app/",
    github: "#",
    category: "App Web",
    status: "Ativo",
    color: "bg-pink-100 text-pink-600",
    features: [
      "Totalmente gratuito",
      "Funciona offline",
      "Dados seguros no dispositivo",
      "Insights personalizados"
    ]
  },
  {
    title: "Sites Institucionais",
    description: "Sites profissionais e responsivos para apresentar sua empresa de forma moderna e eficiente.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354489/close-up-people-back-office_wxyuwg.jpg",
    tags: ["Next.js", "Responsivo", "SEO", "Moderno"],
    link: "#",
    github: "#",
    category: "Website",
    status: "Disponível",
    color: "bg-orange-100 text-orange-600",
    features: [
      "Design moderno e responsivo",
      "SEO otimizado",
      "Carregamento rápido",
      "Painel administrativo"
    ]
  },
  {
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para campanhas de marketing e captação de leads com alta performance.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354394/communication-social-media-icons-laptop-device_sqzebc.jpg",
    tags: ["Landing Page", "Conversão", "SEO", "Analytics"],
    link: "#",
    github: "#",
    category: "Landing Page",
    status: "Disponível",
    color: "bg-cyan-100 text-cyan-600",
    features: [
      "Alta conversão",
      "Otimização SEO",
      "Analytics integrado",
      "Design responsivo"
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
    <main className="min-h-screen bg-white text-gray-900 dark:bg-background dark:text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground">
            💼 Nosso Portfólio
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Projetos Realizados
          </p>
          <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
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
              className="rounded-full border-gray-300 dark:border-border text-gray-700 dark:text-foreground hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300"
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
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 rounded-2xl bg-white dark:bg-card"
            >
            <CardContent className="p-6 space-y-4">
                {/* Header do Card */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 ${project.color} dark:opacity-80 rounded-xl flex items-center justify-center`}>
                    {project.category === "E-commerce" && <ShoppingCart className="h-6 w-6" />}
                    {project.category === "Sistema" && <Settings className="h-6 w-6" />}
                    {project.category === "Website" && <Globe className="h-6 w-6" />}
                    {project.category === "Landing Page" && <Smartphone className="h-6 w-6" />}
                    {project.category === "App Web" && <Smartphone className="h-6 w-6" />}
                    {project.category === "API" && <Database className="h-6 w-6" />}
                  </div>
                  <Badge 
                    variant={project.status === "Em Desenvolvimento" ? "secondary" : "default"}
                    className={project.status === "Em Desenvolvimento" ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Conteúdo */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground">{project.title}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-gray-300 dark:border-border">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs border-gray-300 dark:border-border">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 2 && (
                    <div className="text-sm text-gray-500 dark:text-muted-foreground">
                      +{project.features.length - 2} mais recursos
                    </div>
                  )}
                </div>

                {/* Botões */}
                <div className="flex space-x-2 pt-4">
                  {project.link !== "#" ? (
                    project.link.startsWith("http") ? (
                      <Button 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white text-sm"
                        onClick={() => {
                          window.open(project.link, "_blank")
                        }}
                      >
                        Acessar Sistema
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Link href={project.link} className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white text-sm">
                          Ver Projeto
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    )
                  ) : (
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white text-sm"
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
                  
                  <Button variant="outline" size="sm" className="border-gray-300 dark:border-border">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Tem um projeto em mente?</h3>
          <p className="text-blue-100 dark:text-blue-200 text-lg mb-6 max-w-2xl mx-auto">
            Vamos transformar sua ideia em realidade! Nossa equipe está pronta para desenvolver 
            a solução perfeita para seu negócio.
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
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
} 