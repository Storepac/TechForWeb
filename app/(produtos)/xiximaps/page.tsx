"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Calendar, Navigation } from "lucide-react";
import Link from "next/link";

export default function XixiMapsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-background dark:text-foreground">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-background dark:via-background dark:to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-sm font-semibold text-green-800 dark:text-green-200">
              🗺️ XixiMaps
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-foreground">
              Encontre o local perfeito
            </h1>
            <p className="text-xl text-gray-600 dark:text-muted-foreground">
              Sistema completo de mapas interativos com agendamento integrado. Encontre e reserve locais com facilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8"
                onClick={() => {
                  const el = document.getElementById('mapa');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Mapa
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => {
                  const el = document.getElementById('agendamento');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Agendar
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground">
              Funcionalidades do XixiMaps
            </h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              Tudo que você precisa para encontrar e agendar locais de forma simples e eficiente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">Mapa Interativo</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">
                  Visualize locais em um mapa interativo com informações detalhadas
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">Agendamento</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">
                  Reserve horários diretamente pelo sistema de forma rápida e prática
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto">
                  <Navigation className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">Navegação</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">
                  Obtenha rotas e direções para chegar aos locais desejados
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="mapa" className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Em breve: XixiMaps
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Estamos desenvolvendo o XixiMaps para oferecer a melhor experiência em busca e agendamento de locais.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
            onClick={() => {
              const message = "Olá TechForWeb! Gostaria de mais informações sobre o XixiMaps.";
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

