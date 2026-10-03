import type { ComplaintCategory } from "../../../data/complaint-categories"
import { CategoryCard } from "./CategoryCard"

interface CategoryGridProps {
  categories: ComplaintCategory[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-8">
      {categories.map((category) => (
        <li key={category.id}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  )
}