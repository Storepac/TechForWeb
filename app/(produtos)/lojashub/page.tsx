"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingBag, Calendar, Package } from "lucide-react";
import Link from "next/link";

export default function LojaHubPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-background dark:text-foreground">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-background dark:via-background dark:to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900 rounded-full text-sm font-semibold text-purple-800 dark:text-purple-200">
              🛍️ LojaHub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-foreground">
              Catálogo + Agendamento
            </h1>
            <p className="text-xl text-gray-600 dark:text-muted-foreground">
              Solução completa para exibir produtos e serviços com sistema de agendamento integrado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lojashub/catalogo">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8"
                >
                  Ver Catálogo
                  <ShoppingBag className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/lojashub/agendei">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Agendar
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground">
              Funcionalidades do LojaHub
            </h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              Duas funcionalidades poderosas em uma única plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-foreground">Catálogo</h3>
                <p className="text-gray-600 dark:text-muted-foreground">
                  Exiba seus produtos e serviços de forma organizada e atrativa. Sistema completo de catálogo com categorias, filtros e busca.
                </p>
                <Link href="/lojashub/catalogo">
                  <Button variant="outline" className="w-full">
                    Ver Catálogo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-foreground">Agendei</h3>
                <p className="text-gray-600 dark:text-muted-foreground">
                  Sistema completo de agendamento com calendário, disponibilidade e confirmação. Gerencie seus horários de forma eficiente.
                </p>
                <Link href="/lojashub/agendei">
                  <Button variant="outline" className="w-full">
                    Agendar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Em breve: LojaHub
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Estamos desenvolvendo o LojaHub para oferecer a melhor experiência em catálogo e agendamento.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
            onClick={() => {
              const message = "Olá TechForWeb! Gostaria de mais informações sobre o LojaHub.";
              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/5514996145415?text=${encodedMessage}`, "_blank");
            }}
          >
            Saber Mais
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}

