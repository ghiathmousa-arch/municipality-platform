import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"
import { cn } from "../../lib/cn"

const iconCircleVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      size: {
        sm: "size-10 [&>svg]:size-5",
        md: "size-14 [&>svg]:size-6",
        lg: "size-18 [&>svg]:size-8",
      },
      tone: {
        sand: "bg-sand/25 text-forest",
        forest: "bg-forest text-cream",
        cream: "bg-cream text-forest",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "sand",
    },
  }
)

interface IconCircleProps extends VariantProps<typeof iconCircleVariants> {
  icon: LucideIcon
  className?: string
}

export function IconCircle({ icon: Icon, size, tone, className }: IconCircleProps) {
  return (
    <span aria-hidden="true" className={cn(iconCircleVariants({ size, tone }), className)}>
      <Icon />
    </span>
  )
}