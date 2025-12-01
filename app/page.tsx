"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutDetailed } from "@/components/about-detailed"
import { Products } from "@/components/products"
import { ServicesExpanded } from "@/components/services-expanded"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-background dark:text-foreground font-poppins">
      <Header currentPage="home" />
      <Hero />
      <AboutDetailed />
      <Products onShowTechLoja={() => window.location.href = "/servicos/tech-loja"} />
      <ServicesExpanded />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
