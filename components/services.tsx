import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, ShoppingCart, Settings, Smartphone, Database, Palette } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Sites profissionais e responsivos para apresentar sua empresa de forma moderna e eficiente.",
    features: ["Design responsivo", "SEO otimizado", "Carregamento rápido", "Painel administrativo"],
    price: "A partir de R$ 1.200",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais completas para vender online com segurança e praticidade.",
    features: ["Carrinho de compras", "Pagamento integrado", "Gestão de estoque", "Relatórios de vendas"],
    price: "A partir de R$ 2.500",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Settings,
    title: "Sistemas Web",
    description: "Sistemas personalizados para automatizar processos e otimizar sua gestão.",
    features: ["Desenvolvimento customizado", "Integração com APIs", "Dashboard completo", "Suporte técnico"],
    price: "Sob consulta",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Smartphone,
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para campanhas de marketing e captação de leads.",
    features: ["Alta conversão", "Integração com CRM", "A/B Testing", "Analytics integrado"],
    price: "A partir de R$ 800",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Database,
    title: "APIs e Integrações",
    description: "Desenvolvimento de APIs e integrações para conectar diferentes sistemas.",
    features: ["REST APIs", "Integração de sistemas", "Webhooks", "Documentação completa"],
    price: "Sob consulta",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design de interfaces modernas e experiência do usuário otimizada.",
    features: ["Prototipagem", "Design system", "Testes de usabilidade", "Design responsivo"],
    price: "A partir de R$ 600",
    color: "bg-pink-100 text-pink-600",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
            🛠️ Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Soluções digitais completas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de desenvolvimento web para atender todas as necessidades do seu
            negócio digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <CardContent className="p-8 space-y-6">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center`}>
                  <service.icon className="h-8 w-8" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-lg font-semibold text-blue-600 mb-4">{service.price}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Solicitar Orçamento</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisa de algo personalizado?</h3>
            <p className="text-gray-600 text-lg mb-6">
              Desenvolvemos soluções sob medida para atender necessidades específicas do seu negócio.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
