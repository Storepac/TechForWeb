"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Target, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Desenvolvimento Web",
    description: "Criamos sites modernos e responsivos que impressionam e convertem visitantes em clientes.",
    features: ["Sites institucionais", "Landing pages", "Portais corporativos", "Design responsivo"],
  },
  {
    icon: Award,
    title: "E-commerce",
    description: "Lojas virtuais completas com todas as funcionalidades necessárias para vender online.",
    features: ["Carrinho de compras", "Pagamento integrado", "Gestão de produtos", "Relatórios de vendas"],
  },
  {
    icon: Target,
    title: "Sistemas Web",
    description: "Sistemas personalizados para automatizar processos e otimizar a gestão do seu negócio.",
    features: ["Desenvolvimento customizado", "Integração com APIs", "Dashboard completo", "Suporte técnico"],
  },
  {
    icon: Lightbulb,
    title: "Consultoria Digital",
    description: "Orientação especializada para sua transformação digital e estratégias online.",
    features: ["Análise de negócio", "Estratégia digital", "Roadmap tecnológico", "Acompanhamento"],
  },
]

const stats = [
  { number: "100+", label: "Projetos Entregues" },
  { number: "50+", label: "Clientes Satisfeitos" },
  { number: "5+", label: "Anos de Experiência" },
  { number: "98%", label: "Taxa de Sucesso" },
]

export function AboutDetailed() {
  return (
    <section id="sobre" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
            🏢 Sobre a TechForWeb
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Transformando ideias em soluções digitais</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A TechForWeb é uma empresa especializada em desenvolvimento web, focada em criar soluções digitais
            inovadoras que impulsionam o crescimento dos nossos clientes. Com anos de experiência no mercado, oferecemos
            serviços completos desde a concepção até a implementação de projetos web.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à tecnologia web de qualidade, oferecendo soluções personalizadas que atendem às
                necessidades específicas de cada cliente. Acreditamos que toda empresa, independente do tamanho, merece
                ter uma presença digital profissional e eficiente.
              </p>
              <div className="space-y-3">
                {[
                  "Qualidade em cada projeto entregue",
                  "Atendimento personalizado e humanizado",
                  "Tecnologias modernas e atualizadas",
                  "Suporte contínuo e confiável",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Nossos Valores</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Inovação:</strong> Sempre buscando as melhores soluções
                </li>
                <li>
                  • <strong>Transparência:</strong> Comunicação clara em todos os processos
                </li>
                <li>
                  • <strong>Excelência:</strong> Comprometimento com a qualidade
                </li>
                <li>
                  • <strong>Parceria:</strong> Relacionamento duradouro com clientes
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossos Serviços</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para atender todas as suas necessidades digitais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar seu projeto?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar a transformar sua presença digital
            </p>
            <button
              onClick={() => {
                const message = "Olá TechForWeb! Gostaria de conversar sobre meu projeto."
                const encodedMessage = encodeURIComponent(message)
                window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
