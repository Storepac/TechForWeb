import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Catálogo (Tech Loja)",
    description: "Plataforma completa para criar sua loja virtual com checkout integrado ao WhatsApp. Sem complicações, sem taxas por venda.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354074/guarda-roupa-digital-em-tela-transparente_e06ycz.jpg",
    tags: ["React", "Next.js", "E-commerce", "WhatsApp"],
    link: "https://catalogo.techforweb.com.br/",
    github: "#",
    category: "E-commerce",
  },
  {
    title: "Agendei",
    description: "Sistema completo de agendamentos para gerenciar clientes, horários e cobranças de forma simples e eficiente.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354075/gestao_facqll.jpg",
    tags: ["Next.js", "TypeScript", "Sistema", "Agendamento"],
    link: "https://agendei.techforweb.com.br/",
    github: "#",
    category: "Sistema",
  },
  {
    title: "XixiMaps",
    description: "Encontre banheiros públicos limpos, seguros e confiáveis perto de você. Pensado para todos, especialmente para mulheres.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354394/communication-social-media-icons-laptop-device_sqzebc.jpg",
    tags: ["Next.js", "Mapas", "Mobile", "Segurança"],
    link: "https://xiximaps.techforweb.com.br/landing",
    github: "#",
    category: "App Web",
  },
  {
    title: "Contador de Espirros",
    description: "Monitore sua saúde respiratória. Registre espirros, identifique padrões e receba insights personalizados.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354075/app_mobile_azdhbc.jpg",
    tags: ["PWA", "Mobile", "Saúde", "Offline"],
    link: "https://contador-de-espirros.lovable.app/",
    github: "#",
    category: "App Web",
  },
  {
    title: "Sites Institucionais",
    description: "Sites profissionais e responsivos para apresentar sua empresa de forma moderna e eficiente.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354489/close-up-people-back-office_wxyuwg.jpg",
    tags: ["Next.js", "Responsivo", "SEO", "Moderno"],
    link: "#",
    github: "#",
    category: "Website",
  },
  {
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para campanhas de marketing e captação de leads com alta performance.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354394/communication-social-media-icons-laptop-device_sqzebc.jpg",
    tags: ["Landing Page", "Conversão", "SEO", "Analytics"],
    link: "#",
    github: "#",
    category: "Landing Page",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white text-gray-900 dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">💼 Nosso Portfólio</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Projetos que fazem a diferença
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes, sempre focando em qualidade e
            resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white dark:bg-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 dark:bg-blue-700 text-white">{project.category}</Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground">{project.title}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2 pt-4">
                  {project.link !== "#" ? (
                    project.link.startsWith("http") ? (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white"
                        onClick={() => {
                          window.open(project.link, "_blank")
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Acessar Sistema
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white"
                        onClick={() => {
                          window.location.href = project.link
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </Button>
                    )
                  ) : (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white"
                      onClick={() => {
                        const message = `Olá TechForWeb! Gostaria de mais informações sobre o projeto ${project.title}.`
                        const encodedMessage = encodeURIComponent(message)
                        window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
                      }}
                    >
                      Solicitar Orçamento
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="border-gray-300 dark:border-border bg-transparent">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 bg-transparent"
            onClick={() => {
              window.location.href = "/projetos";
            }}
          >
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
