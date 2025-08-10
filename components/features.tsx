import { Card, CardContent } from "@/components/ui/card"
import { Store, Smartphone, MessageCircle, BarChart3, Shield, Zap, Globe, Users } from "lucide-react"

const features = [
  {
    icon: Store,
    title: "E-commerce Completo",
    description: "Loja virtual profissional com carrinho, checkout e catálogo responsivo",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Design otimizado para desktop, tablet e mobile com performance superior",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    description: "Integração completa com WhatsApp para vendas diretas e atendimento",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Dashboard Profissional",
    description: "Painel administrativo completo para gestão total do seu negócio",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Globe,
    title: "Domínio Próprio",
    description: "Domínio .com.br profissional incluso para dar credibilidade",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Zap,
    title: "Zero Comissões",
    description: "Sem taxas sobre vendas. Todo o lucro é 100% seu para sempre",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Certificado SSL, backup automático e proteção contra ataques",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Users,
    title: "Suporte TechForWeb",
    description: "Suporte técnico especializado da equipe TechForWeb",
    color: "bg-cyan-100 text-cyan-600",
  },
]

export function Features() {
  return (
    <section id="recursos" className="py-20 bg-white text-gray-900 dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
            ⚡ Tecnologia TechForWeb
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Recursos profissionais para seu e-commerce</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plataforma completa desenvolvida pela TechForWeb com todos os recursos necessários para criar uma loja
            virtual de alto padrão e começar a vender online hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
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

        <div className="mt-16 text-center">
          <div className="bg-white text-gray-900 dark:bg-card dark:text-card-foreground rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">Desenvolvido pela TechForWeb</h3>
            <p className="text-gray-600 dark:text-muted-foreground text-lg">
              Empresa especializada em desenvolvimento web com anos de experiência criando soluções digitais
              profissionais para empresas de todos os tamanhos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
