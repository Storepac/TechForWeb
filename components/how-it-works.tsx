import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Escolha seu plano",
    description: "Selecione o plano TechForWeb que melhor atende às necessidades do seu negócio",
    icon: "🎯",
  },
  {
    number: "2",
    title: "Setup profissional",
    description: "Nossa equipe TechForWeb realiza toda a configuração em até 7 dias úteis",
    icon: "⚙️",
  },
  {
    number: "3",
    title: "Treinamento completo",
    description: "Receba credenciais, tutorial e treinamento para administrar sua loja",
    icon: "🎓",
  },
  {
    number: "4",
    title: "Comece a vender",
    description: "Cadastre produtos e inicie suas vendas com sua loja profissional",
    icon: "🚀",
  },
]

const extraServices = [
  {
    service: "Cadastro profissional de até 150 produtos",
    price: "R$ 179,90",
    description: "Cadastro completo com descrições otimizadas",
  },
  {
    service: "Cadastro profissional de até 300 produtos",
    price: "R$ 299,00",
    description: "Cadastro completo com descrições otimizadas",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
            🔧 Processo TechForWeb
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Como funciona nosso processo?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo otimizado e profissional da TechForWeb para ter sua loja online funcionando rapidamente com
            qualidade garantida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-400 h-8 w-8" />
              )}
            </div>
          ))}
        </div>

        <Card className="bg-white shadow-xl border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">➕ Serviços Adicionais TechForWeb</h3>
            <p className="text-gray-700 text-center mb-8 text-lg">
              Não quer cadastrar manualmente? Contrate nosso serviço de cadastro profissional com descrições otimizadas:
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {extraServices.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
                >
                  <div className="text-center space-y-3">
                    <h4 className="font-semibold text-gray-900 text-lg">{item.service}</h4>
                    <p className="text-3xl font-bold text-blue-600">{item.price}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="flex items-center justify-center space-x-2 text-green-600 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>Serviço TechForWeb</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
