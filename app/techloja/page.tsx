import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Plans } from "@/components/plans"
import { HowItWorks } from "@/components/how-it-works"
import { Referral } from "@/components/referral"
import { Footer } from "@/components/footer"
import { Hero as TechLojaHero } from "@/components/techloja-hero"

export default function TechLojaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TechLojaHero />
      <Features />
      <Plans />
      <HowItWorks />
      <Referral />
      <Footer />
    </div>
  )
}
