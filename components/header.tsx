"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  currentPage?: "home" | "techloja" | "politica" | "termos"
  onNavigate?: (page: "home" | "techloja" | "politica" | "termos") => void
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Se a página carregar com um hash (#sobre, #contato), rola suavemente
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 300)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== "home") {
      // Força redirecionamento para a home com hash
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate?.("home")}
          >
            <img
              src="/perfil_circle.png"
              alt="Logo T4W"
              className="w-10 h-10 rounded-full object-cover bg-black"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 leading-none font-poppins">
                TechFor
              </span>
              <span className="text-sm text-blue-600 font-semibold leading-none font-poppins">
                Web
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-poppins"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-poppins"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-poppins"
            >
              Produtos
            </button>
            <button
              onClick={() => {
                if (currentPage !== "home") {
                  onNavigate?.("home")
                  setTimeout(() => {
                    window.location.href = "/servicos"
                  }, 100)
                } else {
                  window.location.href = "/servicos"
                }
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-poppins"
            >
              Serviços
            </button>
            <button
              onClick={() => {
                if (currentPage !== "home") {
                  onNavigate?.("home")
                  setTimeout(() => {
                    window.location.href = "/projetos"
                  }, 100)
                } else {
                  window.location.href = "/projetos"
                }
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-poppins"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-poppins"
            >
              Contato
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium"
              onClick={() => {
                const message =
                  "Olá TechForWeb! Gostaria de solicitar um orçamento gratuito."
                const encodedMessage = encodeURIComponent(message)
                window.open(
                  `https://wa.me/5514996145415?text=${encodedMessage}`,
                  "_blank"
                )
              }}
            >
              Orçamento Grátis
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left font-poppins"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left font-poppins"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left font-poppins"
              >
                Produtos
              </button>
              <button
                onClick={() => {
                  if (currentPage !== "home") {
                    onNavigate?.("home")
                    setTimeout(() => {
                      window.location.href = "/servicos"
                    }, 100)
                  } else {
                    window.location.href = "/servicos"
                  }
                  setIsMenuOpen(false)
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left font-poppins"
              >
                Serviços
              </button>
              <button
                onClick={() => {
                  if (currentPage !== "home") {
                    onNavigate?.("home")
                    setTimeout(() => {
                      window.location.href = "/projetos"
                    }, 100)
                  } else {
                    window.location.href = "/projetos"
                  }
                  setIsMenuOpen(false)
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left font-poppins"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left font-poppins"
              >
                Contato
              </button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white w-full font-poppins font-medium"
                onClick={() => {
                  const message =
                    "Olá TechForWeb! Gostaria de solicitar um orçamento gratuito."
                  const encodedMessage = encodeURIComponent(message)
                  window.open(
                    `https://wa.me/5514996145415?text=${encodedMessage}`,
                    "_blank"
                  )
                  setIsMenuOpen(false)
                }}
              >
                Orçamento Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
