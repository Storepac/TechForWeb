import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Globe,
  ShoppingCart,
  Settings,
  Smartphone,
  Database,
  Palette,
  Search,
  Shield,
  Zap,
  Users,
  BarChart3,
  MessageCircle,
} from "lucide-react"

const services = [
  {
    category: "Desenvolvimento Web",
    services: [
      {
        icon: Globe,
        title: "Sites Institucionais",
        description: "Sites profissionais e responsivos para apresentar sua empresa.",
        features: ["Design responsivo", "SEO otimizado", "CMS integrado", "SSL incluso"],
        price: "A partir de R$ 1.200",
        duration: "7-15 dias",
        color: "bg-blue-100 text-blue-600",
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Completo",
        description: "Lojas virtuais profissionais com todas as funcionalidades.",
        features: ["Carrinho completo", "Pagamento integrado", "Gestão de estoque", "Relatórios"],
        price: "A partir de R$ 2.500",
        duration: "15-30 dias",
        color: "bg-green-100 text-green-600",
      },
      {
        icon: Smartphone,
        title: "Landing Pages",
        description: "Páginas de conversão otimizadas para campanhas.",
        features: ["Alta conversão", "A/B Testing", "Analytics", "Integração CRM"],
        price: "A partir de R$ 800",
        duration: "3-7 dias",
        color: "bg-orange-100 text-orange-600",
      },
    ],
  },
  {
    category: "Sistemas Personalizados",
    services: [
      {
        icon: Settings,
        title: "Sistemas Web",
        description: "Sistemas personalizados para automatizar processos.",
        features: ["Desenvolvimento customizado", "Integração APIs", "Dashboard", "Suporte"],
        price: "Sob consulta",
        duration: "30-60 dias",
        color: "bg-purple-100 text-purple-600",
      },
      {
        icon: Database,
        title: "APIs e Integrações",
        description: "Desenvolvimento de APIs e integrações entre sistemas.",
        features: ["REST APIs", "Webhooks", "Integração sistemas", "Documentação"],
        price: "Sob consulta",
        duration: "15-30 dias",
        color: "bg-indigo-100 text-indigo-600",
      },
      {
        icon: BarChart3,
        title: "Dashboards BI",
        description: "Painéis de controle com business intelligence.",
        features: ["Relatórios avançados", "Gráficos interativos", "Tempo real", "Export dados"],
        price: "A partir de R$ 1.800",
        duration: "20-40 dias",
        color: "bg-cyan-100 text-cyan-600",
      },
    ],
  },
  {
    category: "Design & UX",
    services: [
      {
        icon: Palette,
        title: "UI/UX Design",
        description: "Design de interfaces e experiência do usuário.",
        features: ["Prototipagem", "Design system", "Testes usabilidade", "Responsivo"],
        price: "A partir de R$ 600",
        duration: "5-15 dias",
        color: "bg-pink-100 text-pink-600",
      },
      {
        icon: Zap,
        title: "Otimização Performance",
        description: "Otimização de velocidade e performance de sites.",
        features: ["Análise performance", "Otimização código", "CDN setup", "Monitoramento"],
        price: "A partir de R$ 400",
        duration: "3-7 dias",
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        icon: Search,
        title: "SEO Técnico",
        description: "Otimização para mecanismos de busca.",
        features: ["Auditoria SEO", "Otimização on-page", "Schema markup", "Relatórios"],
        price: "A partir de R$ 500",
        duration: "5-10 dias",
        color: "bg-emerald-100 text-emerald-600",
      },
    ],
  },
  {
    category: "Suporte & Manutenção",
    services: [
      {
        icon: Shield,
        title: "Manutenção Web",
        description: "Manutenção preventiva e corretiva de sites.",
        features: ["Backup automático", "Atualizações", "Monitoramento", "Suporte técnico"],
        price: "A partir de R$ 150/mês",
        duration: "Contínuo",
        color: "bg-red-100 text-red-600",
      },
      {
        icon: Users,
        title: "Consultoria Digital",
        description: "Consultoria especializada em transformação digital.",
        features: ["Análise negócio", "Estratégia digital", "Roadmap", "Acompanhamento"],
        price: "A partir de R$ 200/hora",
        duration: "Sob demanda",
        color: "bg-gray-100 text-gray-600",
      },
      {
        icon: MessageCircle,
        title: "Suporte Técnico",
        description: "Suporte técnico especializado para seus projetos.",
        features: ["Suporte via chat", "Resolução rápida", "Documentação", "Treinamento"],
        price: "A partir de R$ 100/mês",
        duration: "Contínuo",
        color: "bg-teal-100 text-teal-600",
      },
    ],
  },
]

export function ServicesExpanded() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
            🛠️ Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Soluções completas para seu negócio digital</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de desenvolvimento web e transformação digital.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.category}</h3>
                <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="h-6 w-6" />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                      </div>

                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-100 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Preço:</span>
                          <span className="font-semibold text-blue-600 text-sm">{service.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Prazo:</span>
                          <span className="font-semibold text-gray-900 text-sm">{service.duration}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                        Solicitar Orçamento
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
