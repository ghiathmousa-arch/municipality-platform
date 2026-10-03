import { Check } from "lucide-react"
import { cn } from "../../lib/cn"
import {
  COMPLAINT_STATUSES,
  COMPLAINT_STATUS_LABELS,
  type ComplaintStatus,
} from "../../types/complaint"

interface TimelineProps {
  currentStatus: ComplaintStatus
  dates?: Partial<Record<ComplaintStatus, string>>
  className?: string
}

export function Timeline({ currentStatus, dates, className }: TimelineProps) {
  const currentIndex = COMPLAINT_STATUSES.indexOf(currentStatus)

  return (
    <ol aria-label="مراحل معالجة الشكوى" className={cn("flex flex-col", className)}>
      {COMPLAINT_STATUSES.map((status, index) => {
        const isDone = index < currentIndex
        const isCurrent = index === currentIndex
        const isUpcoming = index > currentIndex
        const isLast = index === COMPLAINT_STATUSES.length - 1
        const date = dates?.[status]

        return (
          <li
            key={status}
            aria-current={isCurrent ? "step" : undefined}
            className={cn("relative flex gap-3", !isLast && "pb-5")}
          >
            {/* الخط الواصل للخطوة التالية */}
            {!isLast && (
              <span
                aria-hidden="true"
                className={cn(
                  "absolute start-[11px] top-6 bottom-0 w-0.5",
                  isDone ? "bg-forest" : "bg-forest/15"
                )}
              />
            )}

            <span
              aria-hidden="true"
              className={cn(
                "relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full",
                isDone && "bg-forest text-cream",
                isCurrent && "border-2 border-forest bg-cream",
                isUpcoming && "border-2 border-forest/25 bg-white"
              )}
            >
              {isDone && <Check className="size-3.5" strokeWidth={3} />}
              {isCurrent && <span className="size-2.5 rounded-full bg-forest" />}
            </span>

            <div className="min-w-0">
              <p
                className={cn(
                  "text-sm leading-6",
                  isCurrent ? "font-bold" : "font-medium",
                  isUpcoming && "text-forest/70"
                )}
              >
                {COMPLAINT_STATUS_LABELS[status]}
                {isDone && <span className="sr-only"> (مكتملة)</span>}
                {isCurrent && <span className="sr-only"> (المرحلة الحالية)</span>}
              </p>
              {date && (
                <bdi dir="ltr" className="block text-xs text-forest/70">
                  {date}
                </bdi>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}