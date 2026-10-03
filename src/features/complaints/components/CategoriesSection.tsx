import { ArrowLeft } from "lucide-react"
import { ButtonLink } from "../../../components/ui/ButtonLink"
import { Section } from "../../../components/ui/Section"
import { SectionHeading } from "../../../components/ui/SectionHeading"
import { COMPLAINT_CATEGORIES } from "../../../data/complaint-categories"
import { ROUTES } from "../../../lib/routes"
import { CategoryGrid } from "../../complaints/components/CategoryGrid"

// الصفحة الرئيسية بتعرض أول عدد محدد، وزر "عرض الكل" بيفتح الصفحة الكاملة
const HOME_CATEGORIES_LIMIT = 8

export function CategoriesSection() {
  return (
    <Section id="categories" tone="cream" aria-labelledby="categories-title">
      <SectionHeading
        id="categories-title"
        title="ما الذي يمكنك الإبلاغ عنه؟"
        description="يمكنك تقديم شكوى بشأن أي من الخدمات والمشكلات البلدية التالية"
      />

      <div className="mt-10">
        <CategoryGrid categories={COMPLAINT_CATEGORIES.slice(0, HOME_CATEGORIES_LIMIT)} />
      </div>

      <div className="mt-8 flex justify-center">
        <ButtonLink to={ROUTES.categories} variant="outlineDark">
          عرض جميع أنواع الشكاوى
          {/* السهم الأمامي بالعربي ناحية اليسار */}
          <ArrowLeft aria-hidden="true" className="size-4 ltr:rotate-180" />
        </ButtonLink>
      </div>
    </Section>
  )
}