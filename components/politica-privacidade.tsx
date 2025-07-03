"use client"

interface PoliticaPrivacidadeProps {
  onBackToHome: () => void
}

export function PoliticaPrivacidade({ onBackToHome }: PoliticaPrivacidadeProps) {
  return (
    <main className="container mx-auto px-4 py-16 font-poppins">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="text-blue-600 hover:text-blue-700 font-medium mb-4 flex items-center gap-2"
          >
            ← Voltar ao início
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidade</h1>
          <p className="text-gray-600">Última atualização: Janeiro de 2024</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informações Gerais</h2>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidade descreve como a TechForWeb coleta, usa e protege suas informações pessoais
              quando você utiliza nossos serviços. Estamos comprometidos em proteger sua privacidade e garantir a
              segurança de seus dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Coletamos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Coletamos as seguintes informações:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Informações de contato (nome, email, telefone)</li>
              <li>Informações de navegação e uso do site</li>
              <li>Dados técnicos (endereço IP, tipo de navegador)</li>
              <li>Informações fornecidas voluntariamente em formulários</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos suas Informações</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Utilizamos suas informações para:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Responder às suas solicitações e dúvidas</li>
              <li>Enviar comunicações importantes sobre nossos serviços</li>
              <li>Personalizar sua experiência em nosso site</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-gray-700 leading-relaxed">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário
              para fornecer nossos serviços ou quando exigido por lei. Podemos compartilhar informações com prestadores
              de serviços confiáveis que nos ajudam a operar nosso negócio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Segurança dos Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações
              pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL e
              outras tecnologias de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seus Direitos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Você tem o direito de:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento a qualquer momento</li>
              <li>Portabilidade de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos cookies para melhorar sua experiência em nosso site. Os cookies nos ajudam a entender como você
              usa nosso site e a personalizar o conteúdo. Você pode configurar seu navegador para recusar cookies, mas
              isso pode afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Alterações nesta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças
              significativas publicando a nova política em nosso site. Recomendamos que você revise esta política
              regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre
              em contato conosco:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> contato@techforweb.com.br
              </p>
              <p className="text-gray-700">
                <strong>Telefone:</strong> (14) 99614-5415
              </p>
              <p className="text-gray-700">
                <strong>Endereço:</strong> São Paulo, SP
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Última atualização:</strong> Janeiro de 2024
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
