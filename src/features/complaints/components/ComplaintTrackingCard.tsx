import { IconCalendar, IconMapPin } from "@tabler/icons-react"
import { Timeline } from "../../../components/ui/Timeline"
import { cn } from "../../../lib/cn"
import type { ComplaintDetails } from "../../../types/complaint"
import type { AppIcon } from "../../../types/icon"

interface ComplaintTrackingCardProps {
  complaint: ComplaintDetails
  categoryIcon: AppIcon
  className?: string
}

export function ComplaintTrackingCard({
  complaint,
  categoryIcon: CategoryIcon,
  className,
}: ComplaintTrackingCardProps) {
  return (
    <article
      aria-label={`تتبع الشكوى ${complaint.referenceNumber}`}
      className={cn(
        "flex w-full flex-col gap-6 rounded-2xl bg-white p-6 text-forest shadow-xl shadow-black/20 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      {/* أول عنصر = يمين بالـ RTL */}
      <Timeline currentStatus={complaint.status} dates={complaint.statusDates} />

      {/* border-s = جهة البداية (يمين)، يعني الفاصل بين الـ Timeline والتفاصيل */}
      <div className="flex items-center justify-between gap-5 border-t border-forest/10 pt-6 sm:border-s sm:border-t-0 sm:pt-0 sm:ps-8">
        <div className="space-y-3">
          <div>
            <p className="text-xs text-forest/70">رقم الشكوى</p>
            <p className="text-lg font-bold">
              <bdi dir="ltr">{complaint.referenceNumber}</bdi>
            </p>
          </div>
          <p className="flex items-center gap-2 text-sm text-forest/70">
            <CategoryIcon aria-hidden="true" stroke={1.5} className="size-5" />
            {complaint.categoryLabel}
          </p>
          <p className="flex items-center gap-2 text-sm text-forest/70">
            <IconMapPin aria-hidden="true" stroke={1.5} className="size-5" />
            {complaint.location}
          </p>
          <p className="flex items-center gap-2 text-sm text-forest/70">
            <IconCalendar aria-hidden="true" stroke={1.5} className="size-5" />
            <bdi dir="ltr">{complaint.submittedAt}</bdi>
          </p>
        </div>

        {/* الصورة اختيارية: بدونها بتطلع أيقونة التصنيف */}
        <div className="flex h-20 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-cream sm:h-24 sm:w-32">
          {complaint.imageUrl ? (
            <img
              src={complaint.imageUrl}
              alt=""
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          ) : (
            <CategoryIcon aria-hidden="true" stroke={1.5} className="size-9 text-forest/40" />
          )}
        </div>
      </div>
    </article>
  )
}