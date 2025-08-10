import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Tech Loja - E-commerce",
    description: "Plataforma completa de e-commerce sem comissões para lojas virtuais profissionais.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354074/guarda-roupa-digital-em-tela-transparente_e06ycz.jpg",
    tags: ["React", "Next.js", "E-commerce", "WhatsApp"],
    link: "/servicos/tech-loja",
    github: "#",
    category: "E-commerce",
  },
  {
    title: "Sistema de Gestão",
    description: "Sistema web para gestão completa de empresa com dashboard e relatórios.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354075/gestao_facqll.jpg",
    tags: ["PHP", "MySQL", "Dashboard", "Relatórios"],
    link: "#",
    github: "#",
    category: "Sistema",
  },
  {
    title: "Site Institucional",
    description: "Site moderno e responsivo para empresa de consultoria empresarial.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354489/close-up-people-back-office_wxyuwg.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    link: "#",
    github: "#",
    category: "Website",
  },
  {
    title: "Landing Page",
    description: "Página de conversão otimizada para campanha de marketing digital.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354394/communication-social-media-icons-laptop-device_sqzebc.jpg",
    tags: ["Landing Page", "Conversão", "SEO", "Analytics"],
    link: "#",
    github: "#",
    category: "Landing Page",
  },
  {
    title: "App Mobile Web",
    description: "Aplicação web responsiva com funcionalidades mobile-first.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354075/app_mobile_azdhbc.jpg",
    tags: ["PWA", "Mobile", "Offline", "Push"],
    link: "#",
    github: "#",
    category: "App Web",
  },
  {
    title: "API REST",
    description: "API completa para integração entre sistemas e aplicações.",
    image: "https://res.cloudinary.com/lojaamk/image/upload/v1753354075/api_lmhdo2.jpg",
    tags: ["API", "REST", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    category: "API",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
            💼 Nosso Portfólio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projetos que fazem a diferença</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes, sempre focando em qualidade e
            resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
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
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
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
