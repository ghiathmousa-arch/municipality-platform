import { ChevronLeft } from "lucide-react"
import { Section } from "../../../components/ui/Section"
import { SectionHeading } from "../../../components/ui/SectionHeading"
import { HOW_IT_WORKS_STEPS } from "../../../data/how-it-works"
import { StepCard } from "./StepCard"

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" aria-labelledby="how-it-works-title">
      <SectionHeading
        id="how-it-works-title"
        title="كيف تعمل المنصة؟"
        description="خطوات بسيطة لتقديم شكواك ومتابعتها حتى المعالجة"
      />

      <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <li key={step.title} className="relative">
            <StepCard number={index + 1} {...step} />

            {/* الخط المنقط بين الخطوات: ديسكتوب فقط وما بيظهر بعد الخطوة الأخيرة */}
            {index < HOW_IT_WORKS_STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute start-[calc(50%+2.75rem)] top-9 hidden h-0 w-[calc(100%-3.5rem)] items-center justify-center border-t-2 border-dotted border-forest/25 lg:flex"
              >
                <ChevronLeft className="size-4 bg-paper text-forest/40 ltr:rotate-180" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}