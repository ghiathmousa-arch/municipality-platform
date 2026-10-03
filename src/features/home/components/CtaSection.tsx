import { Search, Send } from "lucide-react"
import { ButtonLink } from "../../../components/ui/ButtonLink"
import { Section } from "../../../components/ui/Section"
import { SectionHeading } from "../../../components/ui/SectionHeading"
import { ROUTES } from "../../../lib/routes"

export function CtaSection() {
  return (
    <Section tone="dark" aria-labelledby="cta-title">
      <SectionHeading
        id="cta-title"
        tone="dark"
        title="هل لديك مشكلة تريد إبلاغ البلدية عنها؟"
        description="قدّم شكواك الآن وتابع مراحل معالجتها إلكترونياً"
      />

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <ButtonLink to={ROUTES.newComplaint} variant="accent" size="lg" className="w-full sm:w-auto">
          <Send aria-hidden="true" className="size-5" />
          تقديم شكوى جديدة
        </ButtonLink>
        <ButtonLink to={ROUTES.track} variant="outlineLight" size="lg" className="w-full sm:w-auto">
          <Search aria-hidden="true" className="size-5" />
          متابعة شكوى
        </ButtonLink>
      </div>
    </Section>
  )
}