import { ChevronDown } from "lucide-react"
import type { ReactNode } from "react"

interface AccordionItemProps {
  question: string
  children: ReactNode
}

// <details> الجاهز: كيبورد وقارئ شاشة بدون أي JavaScript
// كلاس accordion مربوط بحركة الفتح بـ index.css
export function AccordionItem({ question, children }: AccordionItemProps) {
  return (
    <details className="accordion group rounded-xl bg-white text-forest ring-1 ring-forest/10 transition-[background-color,box-shadow] duration-300 open:bg-forest open:text-cream open:shadow-lg open:shadow-forest/20 open:ring-forest">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronDown
          aria-hidden="true"
          className="size-5 shrink-0 text-forest/60 transition-transform duration-300 group-open:rotate-180 group-open:text-sand"
        />
      </summary>
      <div className="px-5 pb-4 text-sm leading-7 opacity-80">{children}</div>
    </details>
  )
}