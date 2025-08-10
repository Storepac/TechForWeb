"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutDetailed } from "@/components/about-detailed"
import { Products } from "@/components/products"
import { ServicesExpanded } from "@/components/services-expanded"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

// Tech Loja components
import { Features } from "@/components/features"
import { Plans } from "@/components/plans"
import { HowItWorks } from "@/components/how-it-works"
import { Referral } from "@/components/referral"
import { Hero as TechLojaHero } from "@/components/techloja-hero"

// Legal pages
import { PoliticaPrivacidade } from "@/components/politica-privacidade"
import { TermosUso } from "@/components/termos-uso"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "techloja" | "politica" | "termos">("home")

  const renderContent = () => {
    if (currentPage === "techloja") {
      return (
        <>
          <TechLojaHero onBackToHome={() => setCurrentPage("home")} />
          <Features />
          <Plans />
          <HowItWorks />
          <Referral />
        </>
      )
    }

    if (currentPage === "politica") {
      return <PoliticaPrivacidade onBackToHome={() => setCurrentPage("home")} />
    }

    if (currentPage === "termos") {
      return <TermosUso onBackToHome={() => setCurrentPage("home")} />
    }

    return (
      <>
        <Hero />
        <AboutDetailed />
        <Products onShowTechLoja={() => setCurrentPage("techloja")} />
        <ServicesExpanded />
        <Portfolio />
        <Contact />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-background dark:text-foreground font-poppins">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderContent()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}
