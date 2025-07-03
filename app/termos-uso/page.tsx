import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Termos de Uso</h1>
              <p className="text-gray-600">Última atualização: Janeiro de 2024</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">1. Aceitação dos Termos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ao acessar e usar os serviços da TechForWeb, você concorda em cumprir e estar vinculado a estes Termos
                  de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">2. Descrição dos Serviços</h2>
                <p className="text-gray-700 leading-relaxed">
                  A TechForWeb oferece serviços de desenvolvimento web, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Desenvolvimento de sites institucionais</li>
                  <li>Criação de lojas virtuais (e-commerce)</li>
                  <li>Desenvolvimento de sistemas web personalizados</li>
                  <li>Landing pages e páginas de conversão</li>
                  <li>Consultoria em tecnologia web</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">3. Responsabilidades do Cliente</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Fornecer informações precisas e atualizadas</li>
                  <li>Cumprir os prazos acordados para fornecimento de conteúdo</li>
                  <li>Realizar os pagamentos conforme acordado</li>
                  <li>Não usar os serviços para atividades ilegais</li>
                  <li>Respeitar direitos autorais e propriedade intelectual</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">4. Responsabilidades da TechForWeb</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Entregar os serviços conforme especificado no contrato</li>
                  <li>Manter a confidencialidade das informações do cliente</li>
                  <li>Fornecer suporte técnico conforme acordado</li>
                  <li>Cumprir os prazos estabelecidos</li>
                  <li>Garantir a qualidade dos serviços prestados</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">5. Propriedade Intelectual</h2>
                <p className="text-gray-700 leading-relaxed">
                  O código-fonte, design e demais elementos desenvolvidos pela TechForWeb permanecem como propriedade do
                  cliente após o pagamento integral dos serviços. A TechForWeb mantém o direito de usar o projeto em seu
                  portfólio, salvo acordo em contrário.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">6. Pagamentos e Cancelamentos</h2>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-gray-800">6.1 Pagamentos</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Os pagamentos devem ser realizados conforme acordado no contrato</li>
                    <li>Atrasos no pagamento podem resultar na suspensão dos serviços</li>
                    <li>Taxas bancárias são de responsabilidade do cliente</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-gray-800">6.2 Cancelamentos</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Cancelamentos devem ser comunicados por escrito</li>
                    <li>Trabalhos já realizados serão cobrados proporcionalmente</li>
                    <li>Reembolsos seguem as condições específicas de cada contrato</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">7. Limitação de Responsabilidade</h2>
                <p className="text-gray-700 leading-relaxed">
                  A TechForWeb não se responsabiliza por danos indiretos, lucros cessantes ou prejuízos decorrentes do
                  uso dos serviços, exceto nos casos previstos em lei. Nossa responsabilidade está limitada ao valor
                  pago pelos serviços.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">8. Modificações dos Termos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações serão comunicadas
                  através de nosso site e entrarão em vigor imediatamente após a publicação.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">9. Lei Aplicável</h2>
                <p className="text-gray-700 leading-relaxed">
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca de
                  São Paulo, SP.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">10. Contato</h2>
                <p className="text-gray-700 leading-relaxed">
                  Para dúvidas sobre estes Termos de Uso, entre em contato:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>E-mail:</strong> contato@techforweb.com.br
                    <br />
                    <strong>Telefone:</strong> (14) 99614-5415
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
