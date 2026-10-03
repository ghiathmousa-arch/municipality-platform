import { AccordionItem } from "../../../components/ui/AccordionItem"
import { Section } from "../../../components/ui/Section"
import { SectionHeading } from "../../../components/ui/SectionHeading"
import { FAQ_ENTRIES } from "../../../data/faq"

export function FaqSection() {
  return (
    <Section id="faq" tone="cream" aria-labelledby="faq-title">
      <SectionHeading
        id="faq-title"
        title="الأسئلة الشائعة"
        description="إجابات على أكثر الأسئلة المتعلقة بتقديم الشكاوى ومتابعتها"
      />

      {/* items-start: حتى ما يتمدد العنصر المجاور لما يفتح سؤال */}
      <div className="mt-10 grid items-start gap-4 md:grid-cols-2">
        {FAQ_ENTRIES.map((entry) => (
          <AccordionItem key={entry.question} question={entry.question}>
            {entry.answer}
          </AccordionItem>
        ))}
      </div>
    </Section>
  )
}