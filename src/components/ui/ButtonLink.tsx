import type { VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Link } from "react-router"
import { cn } from "../../lib/cn"
import { buttonVariants } from "./button-variants"

interface ButtonLinkProps
  extends ComponentProps<typeof Link>,
  VariantProps<typeof buttonVariants> { }

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
}