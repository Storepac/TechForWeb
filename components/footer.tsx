"use client"

import { Code, Mail, Phone, MapPin, Instagram } from "lucide-react"

interface FooterProps {
  onNavigate?: (page: "home" | "techloja" | "politica" | "termos") => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16 dark:bg-card dark:text-card-foreground border-t border-gray-800 dark:border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/perfil_circle.png" alt="Logo T4W" className="w-10 h-10 rounded-full object-cover bg-black" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none font-poppins">TechFor</span>
                <span className="text-sm text-blue-400 font-semibold leading-none font-poppins">Web</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed font-poppins dark:text-muted-foreground">
              Empresa especializada em desenvolvimento web, criando soluções digitais inovadoras para impulsionar seu
              negócio.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/techforweb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors dark:text-muted-foreground dark:hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-poppins dark:text-foreground">Serviços</h3>
            <ul className="space-y-2 text-gray-400 dark:text-muted-foreground">
              <li className="hover:text-white transition-colors">
                <button
                  onClick={() => {
                    onNavigate?.("home")
                    setTimeout(() => {
                      const element = document.getElementById("servicos")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  }}
                  className="font-poppins"
                >
                  Sites Institucionais
                </button>
              </li>
              <li className="hover:text-white transition-colors">
                <button
                  onClick={() => {
                    onNavigate?.("home")
                    setTimeout(() => {
                      const element = document.getElementById("servicos")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  }}
                  className="font-poppins"
                >
                  E-commerce
                </button>
              </li>
              <li className="hover:text-white transition-colors">
                <button
                  onClick={() => {
                    onNavigate?.("home")
                    setTimeout(() => {
                      const element = document.getElementById("servicos")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  }}
                  className="font-poppins"
                >
                  Sistemas Web
                </button>
              </li>
              <li className="hover:text-white transition-colors">
                <button
                  onClick={() => {
                    onNavigate?.("home")
                    setTimeout(() => {
                      const element = document.getElementById("servicos")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  }}
                  className="font-poppins"
                >
                  Landing Pages
                </button>
              </li>
              <li className="hover:text-white transition-colors">
                <button
                  onClick={() => {
                    onNavigate?.("home")
                    setTimeout(() => {
                      const element = document.getElementById("servicos")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  }}
                  className="font-poppins"
                >
                  APIs e Integrações
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-poppins dark:text-foreground">Empresa</h3>
            <ul className="space-y-2 text-gray-400 dark:text-muted-foreground">
              <li className="hover:text-white transition-colors">
                <button
                  onClick={() => {
                    onNavigate?.("home")
                    setTimeout(() => {
                      const element = document.getElementById("sobre")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  }}
                  className="font-poppins"
                >
                  Sobre Nós
                </button>
              </li>
              <li className="hover:text-white transition-colors">
                <button
                  onClick={() => {
                    onNavigate?.("home")
                    setTimeout(() => {
                      const element = document.getElementById("portfolio")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  }}
                  className="font-poppins"
                >
                  Portfólio
                </button>
              </li>
              <li className="hover:text-white transition-colors">
                <button
                  onClick={() => {
                    onNavigate?.("home")
                    setTimeout(() => {
                      const element = document.getElementById("contato")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  }}
                  className="font-poppins"
                >
                  Contato
                </button>
              </li>
              <li className="hover:text-white transition-colors">
                <button
                  onClick={() => {
                    onNavigate?.("home")
                    setTimeout(() => {
                      const element = document.getElementById("produtos")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  }}
                  className="font-poppins"
                >
                  Tech Loja
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-poppins dark:text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400 dark:text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="font-poppins">(14) 99614-5415</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 dark:text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="font-poppins">contato@techforweb.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 dark:text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="font-poppins">São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 dark:text-muted-foreground text-center md:text-left font-poppins">
              &copy; {new Date().getFullYear()} TechForWeb. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-gray-400 dark:text-muted-foreground text-sm">
              <button
                onClick={() => onNavigate?.("politica")}
                className="hover:text-white transition-colors font-poppins dark:hover:text-foreground"
              >
                Política de Privacidade
              </button>
              <span>•</span>
              <button
                onClick={() => onNavigate?.("termos")}
                className="hover:text-white transition-colors font-poppins dark:hover:text-foreground"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
