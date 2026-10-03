import { Lock } from "lucide-react"
import { Section } from "../../../components/ui/Section"
import { SectionHeading } from "../../../components/ui/SectionHeading"
import { FEATURES } from "../../../data/features"
import { cn } from "../../../lib/cn"
import { FeatureItem } from "./FeatureItem"

export function WhyUseSection() {
  return (
    <Section aria-labelledby="why-title">
      <SectionHeading id="why-title" title="لماذا تستخدم منصة الشكاوى؟" />

      <ul className="mt-10 grid gap-8 md:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <li
            key={feature.title}
            // فاصل بين الميزات عالديسكتوب: border-s = جهة البداية (يمين بالـ RTL)
            className={cn(index > 0 && "md:border-s md:border-forest/10 md:ps-8")}
          >
            <FeatureItem {...feature} />
          </li>
        ))}
      </ul>

      <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-forest/70">
        <Lock aria-hidden="true" className="size-4 shrink-0" />
        تُستخدم المعلومات المقدمة لمعالجة الشكوى والتواصل مع مقدمها عند الحاجة، مع الحفاظ على
        خصوصية بياناتك.
      </p>
    </Section>
  )
}