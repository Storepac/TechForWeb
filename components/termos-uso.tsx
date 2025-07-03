"use client"

interface TermosUsoProps {
  onBackToHome: () => void
}

export function TermosUso({ onBackToHome }: TermosUsoProps) {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Termos de Uso</h1>
          <p className="text-gray-600">Última atualização: Janeiro de 2024</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Ao acessar e usar os serviços da TechForWeb, você concorda em cumprir e estar vinculado a estes Termos de
              Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição dos Serviços</h2>
            <p className="text-gray-700 leading-relaxed mb-4">A TechForWeb oferece:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Desenvolvimento de sites e sistemas web</li>
              <li>Criação de lojas virtuais (e-commerce)</li>
              <li>Design responsivo e otimização SEO</li>
              <li>Manutenção e suporte técnico</li>
              <li>Consultoria em tecnologia web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsabilidades do Cliente</h2>
            <p className="text-gray-700 leading-relaxed mb-4">O cliente se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Pagar pelos serviços conforme acordado</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
              <li>Não usar os serviços para atividades ilegais</li>
              <li>Manter a confidencialidade de senhas e acessos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propriedade Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo o conteúdo, design, código e materiais desenvolvidos pela TechForWeb são protegidos por direitos
              autorais. O cliente recebe uma licença para usar o produto final, mas a TechForWeb mantém os direitos
              sobre metodologias, frameworks e códigos proprietários utilizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pagamentos e Reembolsos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Condições de pagamento:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Os pagamentos devem ser feitos conforme cronograma acordado</li>
              <li>Atrasos podem resultar em suspensão dos serviços</li>
              <li>Reembolsos são avaliados caso a caso</li>
              <li>Taxas de terceiros (hospedagem, domínios) não são reembolsáveis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-gray-700 leading-relaxed">
              A TechForWeb não será responsável por danos indiretos, incidentais ou consequenciais decorrentes do uso de
              nossos serviços. Nossa responsabilidade total não excederá o valor pago pelos serviços no período de 12
              meses anterior ao evento que deu origem à reclamação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Suporte e Manutenção</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Nosso suporte inclui:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Correção de bugs e problemas técnicos</li>
              <li>Atualizações de segurança</li>
              <li>Suporte técnico durante horário comercial</li>
              <li>Backup e monitoramento (conforme plano contratado)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Rescisão</h2>
            <p className="text-gray-700 leading-relaxed">
              Qualquer parte pode rescindir o contrato mediante aviso prévio de 30 dias. Em caso de rescisão, o cliente
              deve pagar por todos os serviços prestados até a data da rescisão. A TechForWeb pode suspender os serviços
              imediatamente em caso de violação destes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modificações dos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
              imediatamente após a publicação em nosso site. É responsabilidade do cliente revisar periodicamente estes
              termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Lei Aplicável</h2>
            <p className="text-gray-700 leading-relaxed">
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes
              do Brasil, especificamente na comarca de São Paulo, SP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contato</h2>
            <p className="text-gray-700 leading-relaxed">Para dúvidas sobre estes Termos de Uso, entre em contato:</p>
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
