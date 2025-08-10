"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleWhatsAppClick = () => {
    const message = "Olá TechForWeb! Gostaria de solicitar um orçamento para desenvolvimento web."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5514996145415?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-20 bg-white text-gray-900 dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800">
            📞 Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground">Vamos conversar sobre seu projeto</h2>
          <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade digital. Entre em contato e solicite seu orçamento
            gratuito.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Solicite seu orçamento</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nome completo</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                      placeholder="(14) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Assunto</label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full"
                      placeholder="Tipo de projeto"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full h-32"
                    placeholder="Descreva seu projeto..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Informações de contato</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Telefone</p>
                      <p className="text-muted-foreground">(14) 99614-5415</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">E-mail</p>
                      <p className="text-muted-foreground">contato@techforweb.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Localização</p>
                      <p className="text-muted-foreground">São Paulo, Brasil</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-8 text-center space-y-4">
                <MessageCircle className="h-12 w-12 mx-auto" />
                <h3 className="text-xl font-bold">Atendimento via WhatsApp</h3>
                <p className="text-green-100">Fale conosco agora mesmo e tire suas dúvidas!</p>
                <Button onClick={handleWhatsAppClick} className="bg-white text-green-600 hover:bg-gray-100 w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
