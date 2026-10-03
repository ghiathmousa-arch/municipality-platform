import { IconTrash } from "@tabler/icons-react"
import { Search, Send } from "lucide-react"
import heroCity from "../../../assets/images/hero-city.jpg"
import heroPattern from "../../../assets/images/hero2.jpg"
import { ButtonLink } from "../../../components/ui/ButtonLink"
import { Container } from "../../../components/ui/Container"
import { DEMO_COMPLAINT } from "../../../data/demo-complaint"
import { ROUTES } from "../../../lib/routes"
import { ComplaintStatusCard } from "../../complaints/components/ComplaintStatusCard"

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-cream">
      {/* النقشة: خلف المحتوى من جهة البداية (يمين بالـ RTL)، والـ multiply بيدمجها مع الخلفية */}
      <img
        src={heroPattern}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-y-0 start-0 -z-10 h-full w-full max-w-3xl object-cover object-right opacity-40 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="h-56 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] lg:absolute lg:inset-y-0 lg:end-0 lg:h-auto lg:w-1/2 lg:[mask-image:linear-gradient(to_left,transparent,black_45%)]"
      >
        <img
          src={heroCity}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover"
        />
      </div>

      <Container className="relative grid items-center gap-10 py-10 lg:grid-cols-2 lg:py-20">
        <div className="space-y-6">
          <p className="flex items-center gap-3 text-sm text-forest/70">
            منصة رسمية لتقديم الشكاوى ومتابعة حالتها إلكترونياً
            <span aria-hidden="true" className="hidden h-px w-10 bg-forest/30 sm:block" />
          </p>

          <h1 id="hero-title" className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="block">شكواك تصل</span>
            <span className="block">إلى الجهة المختصة</span>
          </h1>

          <p className="max-w-xl text-base leading-8 text-forest/80 md:text-lg">
            منصة الشكاوى الرسمية لبلدية جرمانا، تتيح لك تقديم الشكاوى المتعلقة بالخدمات البلدية
            ومتابعة حالتها إلكترونياً بكل سهولة وشفافية.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink to={ROUTES.newComplaint} size="lg" className="w-full sm:w-auto">
              <Send aria-hidden="true" className="size-5" />
              تقديم شكوى جديدة
            </ButtonLink>
            <ButtonLink
              to={ROUTES.track}
              variant="outlineDark"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Search aria-hidden="true" className="size-5" />
              متابعة شكوى
            </ButtonLink>
          </div>
        </div>

        <div className="flex justify-center">
          <ComplaintStatusCard complaint={DEMO_COMPLAINT} categoryIcon={IconTrash} />
        </div>
      </Container>
    </section>
  )
}