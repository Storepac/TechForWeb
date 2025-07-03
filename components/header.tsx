"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Code, Menu, X } from "lucide-react"

interface HeaderProps {
  currentPage?: "home" | "techloja" | "politica" | "termos"
  onNavigate?: (page: "home" | "techloja" | "politica" | "termos") => void
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    // Se estiver em qualquer página que não seja home, volta para home primeiro
    if (currentPage !== "home" && sectionId !== "inicio") {
      onNavigate?.("home")
      // Aguarda um pouco para a página carregar antes de fazer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate?.("home")}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 leading-none font-poppins">TechFor</span>
              <span className="text-sm text-blue-600 font-semibold leading-none font-poppins">Web</span>
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
              onClick={() => scrollToSection("servicos")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-poppins"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
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
                const message = "Olá TechForWeb! Gostaria de solicitar um orçamento gratuito."
                const encodedMessage = encodeURIComponent(message)
                window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
              }}
            >
              Orçamento Grátis
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                onClick={() => scrollToSection("servicos")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left font-poppins"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
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
                  const message = "Olá TechForWeb! Gostaria de solicitar um orçamento gratuito."
                  const encodedMessage = encodeURIComponent(message)
                  window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank")
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
