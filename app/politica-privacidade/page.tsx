import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Política de Privacidade</h1>
              <p className="text-gray-600">Última atualização: Janeiro de 2024</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">1. Informações Gerais</h2>
                <p className="text-gray-700 leading-relaxed">
                  A TechForWeb está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. Esta
                  Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações
                  quando você utiliza nossos serviços.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">2. Informações que Coletamos</h2>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-gray-800">2.1 Informações Fornecidas por Você</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Informações da empresa</li>
                    <li>Mensagens e comunicações</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-gray-800">2.2 Informações Coletadas Automaticamente</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador</li>
                    <li>Páginas visitadas</li>
                    <li>Tempo de permanência no site</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">3. Como Usamos suas Informações</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Responder às suas solicitações e dúvidas</li>
                  <li>Enviar informações sobre nossos produtos e serviços</li>
                  <li>Personalizar sua experiência em nosso site</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">4. Compartilhamento de Informações</h2>
                <p className="text-gray-700 leading-relaxed">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes
                  situações:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Para proteger nossos direitos e propriedade</li>
                  <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">5. Segurança dos Dados</h2>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas
                  informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">6. Seus Direitos</h2>
                <p className="text-gray-700 leading-relaxed">De acordo com a LGPD, você tem os seguintes direitos:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Acesso aos seus dados pessoais</li>
                  <li>Correção de dados incompletos ou incorretos</li>
                  <li>Exclusão de dados desnecessários</li>
                  <li>Portabilidade dos dados</li>
                  <li>Revogação do consentimento</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">7. Contato</h2>
                <p className="text-gray-700 leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato
                  conosco:
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
