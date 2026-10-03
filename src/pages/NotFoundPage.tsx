import { ButtonLink } from "../components/ui/ButtonLink"
import { Section } from "../components/ui/Section"
import { SectionHeading } from "../components/ui/SectionHeading"
import { ROUTES } from "../lib/routes"

export function NotFoundPage() {
  return (
    <Section>
      <SectionHeading title="الصفحة غير موجودة" description="الرابط الذي طلبته غير متوفر أو تم نقله." />
      <div className="mt-8 flex justify-center">
        <ButtonLink to={ROUTES.home}>العودة إلى الرئيسية</ButtonLink>
      </div>
    </Section>
  )
}