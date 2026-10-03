import { CategoriesSection } from "../features/complaints/components/CategoriesSection"
import { CtaSection } from "../features/home/components/CtaSection"
import { FaqSection } from "../features/home/components/FaqSection"
import { HeroSection } from "../features/home/components/HeroSection"
import { HowItWorksSection } from "../features/home/components/HowItWorksSection"
import { TrackingSection } from "../features/home/components/TrackingSection"
import { WhyUseSection } from "../features/home/components/WhyUseSection"

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <CategoriesSection />
      <TrackingSection />
      <WhyUseSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}