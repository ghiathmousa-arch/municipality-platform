import { Link } from "react-router"
import { cn } from "../../../lib/cn"
import { ROUTES } from "../../../lib/routes"
import type { ComplaintCategory } from "../../../data/complaint-categories"

interface CategoryCardProps {
  category: ComplaintCategory
  className?: string
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  const Icon = category.icon

  return (
    <Link
      to={`${ROUTES.newComplaint}?category=${category.id}`}
      className={cn(
        "flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-cream px-3 py-6 text-center text-sm font-semibold ring-1 ring-forest/5 transition",
        "hover:bg-white hover:shadow-lg hover:shadow-forest/10 motion-safe:hover:-translate-y-0.5",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest",
        className
      )}
    >
      {/* stroke = سماكة الخط بأيقونات Tabler */}
      <Icon aria-hidden="true" stroke={1.5} className="size-9 text-forest" />
      {category.label}
    </Link>
  )
}