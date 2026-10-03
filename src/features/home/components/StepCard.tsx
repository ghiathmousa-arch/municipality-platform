import type { LucideIcon } from "lucide-react"
import { IconCircle } from "../../../components/ui/IconCircle"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: LucideIcon
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative">
        <IconCircle icon={icon} size="lg" />
        {/* الرقم زخرفة: الترقيم الفعلي من الـ <ol> */}
        <span
          aria-hidden="true"
          className="absolute -start-1 -top-1 flex size-6 items-center justify-center rounded-full bg-sand text-xs font-bold text-forest"
        >
          {number}
        </span>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mx-auto max-w-56 text-sm leading-6 text-forest/70">{description}</p>
      </div>
    </div>
  )
}