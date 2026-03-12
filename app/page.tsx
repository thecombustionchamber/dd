import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#111111" }}>
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
