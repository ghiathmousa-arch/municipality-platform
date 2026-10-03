import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  // الأنماط المشتركة بين كل الأزرار
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-forest text-cream enabled:hover:bg-forest-deep outline-forest",
        accent: "bg-sand text-forest enabled:hover:bg-sand-dark outline-sand",
        outlineLight: "border-2 border-cream/60 text-cream enabled:hover:bg-cream/10 outline-cream",
        outlineDark: "border-2 border-forest/30 text-forest enabled:hover:border-forest outline-forest",
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)