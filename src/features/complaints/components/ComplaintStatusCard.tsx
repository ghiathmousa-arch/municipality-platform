import { StatusBadge } from "../../../components/ui/StatusBadge"
import { Timeline } from "../../../components/ui/Timeline"
import { cn } from "../../../lib/cn"
import type { ComplaintSummary } from "../../../types/complaint"
import type { AppIcon } from "../../../types/icon"

interface ComplaintStatusCardProps {
  complaint: ComplaintSummary
  categoryIcon: AppIcon
  className?: string
}

export function ComplaintStatusCard({
  complaint,
  categoryIcon: CategoryIcon,
  className,
}: ComplaintStatusCardProps) {
  return (
    <article
      aria-label={`حالة الشكوى ${complaint.referenceNumber}`}
      className={cn(
        "w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl shadow-forest/10 ring-1 ring-forest/5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-forest/70">رقم الشكوى</p>
          {/* bdi لحتى ما تنقلب الشرطات والأرقام داخل نص RTL */}
          <p className="text-lg font-bold">
            <bdi dir="ltr">{complaint.referenceNumber}</bdi>
          </p>
        </div>
        <StatusBadge status={complaint.status} />
      </div>

      <p className="mt-3 flex items-center gap-2 text-sm text-forest/70">
        <CategoryIcon aria-hidden="true" stroke={1.75} className="size-5 shrink-0 text-forest" />
        {complaint.categoryLabel}
      </p>

      <hr className="my-4 border-forest/10" />

      <Timeline currentStatus={complaint.status} dates={complaint.statusDates} />
    </article>
  )
}