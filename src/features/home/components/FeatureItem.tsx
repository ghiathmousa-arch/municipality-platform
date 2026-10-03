import type { LucideIcon } from "lucide-react"
import { IconCircle } from "../../../components/ui/IconCircle"

interface FeatureItemProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <IconCircle icon={icon} size="lg" />
      <div className="space-y-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm leading-6 text-forest/70">{description}</p>
      </div>
    </div>
  )
}