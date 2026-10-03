import { IconRoad } from "@tabler/icons-react"
import { Search } from "lucide-react"
import trackingBackground from "../../../assets/images/hero-city.jpg"
import { ButtonLink } from "../../../components/ui/ButtonLink"
import { Section } from "../../../components/ui/Section"
import { DEMO_TRACKED_COMPLAINT } from "../../../data/demo-complaint"
import { ROUTES } from "../../../lib/routes"
import { ComplaintTrackingCard } from "../../complaints/components/ComplaintTrackingCard"

export function TrackingSection() {
  return (
    <Section
      id="tracking"
      tone="dark"
      aria-labelledby="tracking-title"
      className="relative isolate overflow-hidden"
      containerClassName="grid items-center gap-10 lg:grid-cols-2"
    >
      {/* خلفية خافتة: عنصر مطلق بنسبة للقسم لأنو الـ Container مو positioned */}
      <img
        src={trackingBackground}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover opacity-15"
      />

      <div className="space-y-5">
        <h2 id="tracking-title" className="text-3xl font-bold md:text-4xl">
          اعرف أين وصلت شكواك
        </h2>
        <p className="max-w-md leading-8 text-cream/80">
          بعد تقديم الشكوى ستحصل على رقم مرجعي يمكنك من خلاله متابعة جميع مراحل المعالجة بشكل
          إلكتروني وواضح.
        </p>
        <ButtonLink to={ROUTES.track} variant="accent" size="lg">
          <Search aria-hidden="true" className="size-5" />
          متابعة شكوى
        </ButtonLink>
      </div>

      <ComplaintTrackingCard complaint={DEMO_TRACKED_COMPLAINT} categoryIcon={IconRoad} />
    </Section>
  )
}