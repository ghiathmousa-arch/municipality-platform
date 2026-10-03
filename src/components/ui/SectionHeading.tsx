import { cn } from "../../lib/cn"

interface SectionHeadingProps {
  title: string
  description?: string
  align?: "center" | "start"
  tone?: "light" | "dark"
  as?: "h1" | "h2"
  id?: string
  className?: string
}

export function SectionHeading({
  title,
  description,
  align = "center",
  tone = "light",
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      <Heading id={id} className="text-2xl font-bold md:text-3xl">
        {title}
      </Heading>
      {description && (
        <p className={cn("text-base", tone === "dark" ? "text-cream/80" : "text-forest/70")}>
          {description}
        </p>
      )}
    </div>
  )
}