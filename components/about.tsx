import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "100+",
    label: "Clientes Satisfeitos",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Award,
    number: "150+",
    label: "Projetos Entregues",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    number: "5+",
    label: "Anos de Experiência",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Target,
    number: "98%",
    label: "Taxa de Sucesso",
    color: "bg-orange-100 text-orange-600",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
                👥 Sobre a TechForWeb
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Empresa especializada em
                <span className="block text-blue-600">desenvolvimento web</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                A TechForWeb é uma empresa de desenvolvimento web focada em criar soluções digitais inovadoras e
                eficientes. Trabalhamos com as mais modernas tecnologias para entregar projetos que realmente fazem a
                diferença no seu negócio.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é transformar ideias em realidade digital, oferecendo sites, sistemas e e-commerces que não
                apenas impressionam visualmente, mas também geram resultados concretos para nossos clientes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Nossos Diferenciais:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Tecnologias modernas e atualizadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Design responsivo e otimizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Suporte técnico especializado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Prazos de entrega cumpridos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 ${stat.color} rounded-xl flex items-center justify-center mx-auto`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
