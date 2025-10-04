import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { SuccessStoriesSection } from "@/components/sections/success-stories-section"
import { CommitmentFeeSection } from "@/components/sections/commitment-fee-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { ApplicationSection } from "@/components/sections/application-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <SuccessStoriesSection />
        <CommitmentFeeSection />
        <ApplicationSection />
        <TimelineSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
