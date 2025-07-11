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
  ArrowRight,
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Soluções digitais completas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de desenvolvimento web, desde sites institucionais até sistemas complexos, 
            sempre com foco na qualidade e resultados para seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Desenvolvimento Web</h3>
            <p className="text-gray-600">Sites institucionais, landing pages e sistemas web personalizados com tecnologia de ponta.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
              <ShoppingCart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">E-commerce</h3>
            <p className="text-gray-600">Lojas virtuais completas com integração WhatsApp, domínio próprio e zero comissões.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Sistemas Personalizados</h3>
            <p className="text-gray-600">Sistemas sob medida para automatizar processos e otimizar a gestão do seu negócio.</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8"
            onClick={() => {
              window.location.href = "/servicos";
            }}
          >
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
