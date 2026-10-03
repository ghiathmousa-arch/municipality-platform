import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { cn } from "../../lib/cn"
import { Container } from "./Container"

const sectionVariants = cva("py-10", {
  variants: {
    tone: {
      paper: "bg-paper text-forest",
      cream: "bg-cream text-forest",
      dark: "bg-forest text-cream",
    },
  },
  defaultVariants: {
    tone: "paper",
  },
})

interface SectionProps
  extends ComponentProps<"section">,
  VariantProps<typeof sectionVariants> {
  containerClassName?: string
}

export function Section({
  tone,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(sectionVariants({ tone }), className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}