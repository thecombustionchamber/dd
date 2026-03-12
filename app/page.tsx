import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  console.log("[v0] Page rendering")
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fff", color: "#000" }}>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
