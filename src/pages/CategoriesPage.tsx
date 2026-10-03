import { Section } from "../components/ui/Section"
import { SectionHeading } from "../components/ui/SectionHeading"
import { COMPLAINT_CATEGORIES } from "../data/complaint-categories"
import { CategoryGrid } from "../features/complaints/components/CategoryGrid"

export function CategoriesPage() {
  return (
    <Section aria-labelledby="categories-page-title">
      <SectionHeading
        as="h1"
        id="categories-page-title"
        title="أنواع الشكاوى"
        description="اختر نوع الشكوى لتبدأ بتقديمها"
      />
      <div className="mt-10">
        <CategoryGrid categories={COMPLAINT_CATEGORIES} />
      </div>
    </Section>
  )
}