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
  { number: "24/7", label: "Suporte Disponível" },
]

export function AboutDetailed() {
  return (
    <section id="sobre" className="py-20 bg-white text-gray-900 dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground">🏢 Sobre a TechForWeb</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Transformando ideias em resultados reais
          </p>
          <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Na TechForWeb, não apenas desenvolvemos sites e sistemas - criamos soluções digitais que geram resultados 
            mensuráveis para o seu negócio. Com tecnologia de ponta, design moderno e foco total na experiência do cliente, 
            ajudamos empresas de todos os tamanhos a conquistar seu espaço no mundo digital e aumentar suas vendas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg bg-white dark:bg-card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-muted-foreground text-sm font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 mb-16 dark:bg-card dark:text-card-foreground border border-gray-100 dark:border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground">Por que escolher a TechForWeb?</h3>
              <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">
                Somos especialistas em transformar desafios digitais em oportunidades de crescimento. Cada projeto é 
                tratado com dedicação exclusiva, desde o primeiro contato até a entrega e suporte contínuo. Nossa missão 
                é fazer com que sua presença online não apenas impressione, mas também converta visitantes em clientes 
                fiéis e aumente sua receita.
              </p>
              <div className="space-y-3">
                {[
                  "Soluções personalizadas para seu negócio",
                  "Tecnologia de ponta e design moderno",
                  "Foco em resultados e conversão",
                  "Suporte dedicado e acompanhamento contínuo",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-4">O que nos diferencia</h4>
              <ul className="space-y-3 text-gray-600 dark:text-muted-foreground">
                <li>
                  • <strong>Resultados Comprovados:</strong> Projetos que realmente aumentam vendas e engajamento
                </li>
                <li>
                  • <strong>Atendimento Humanizado:</strong> Você fala com pessoas, não com robôs
                </li>
                <li>
                  • <strong>Tecnologia Atualizada:</strong> Sempre usando as melhores ferramentas do mercado
                </li>
                <li>
                  • <strong>Compromisso Real:</strong> Entregamos no prazo, dentro do orçamento e com qualidade
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">Nossos Serviços</h3>
            <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para atender todas as suas necessidades digitais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-card">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-foreground">{service.title}</h4>
                  <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-muted-foreground">{feature}</span>
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Pronto para transformar seu negócio digitalmente?</h3>
            <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              Não perca mais vendas por falta de presença digital. Fale conosco agora e descubra como podemos 
              ajudar seu negócio a crescer e conquistar mais clientes online.
            </p>
            <button
              onClick={() => {
                const message = "Olá TechForWeb! Gostaria de conversar sobre como posso melhorar minha presença digital e aumentar minhas vendas."
                const encodedMessage = encodeURIComponent(message)
                window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
              }}
              className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
            >
              Falar com Especialista Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
