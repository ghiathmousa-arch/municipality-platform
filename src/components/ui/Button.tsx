import type { VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import type { ComponentProps } from "react"
import { cn } from "../../lib/cn"
import { buttonVariants } from "./button-variants"

interface ButtonProps
  extends ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export function Button({
  variant,
  size,
  loading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {children}
      {loading && <Loader2 aria-hidden="true" className="size-4 animate-spin" />}
    </button>
  )
}