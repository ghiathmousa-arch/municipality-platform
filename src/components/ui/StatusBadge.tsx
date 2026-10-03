import { CheckCircle2, FileSearch, Inbox, Settings, type LucideIcon } from "lucide-react"
import { cn } from "../../lib/cn"
import { COMPLAINT_STATUS_LABELS, type ComplaintStatus } from "../../types/complaint"

const STATUS_STYLES: Record<ComplaintStatus, { icon: LucideIcon; className: string }> = {
  received: { icon: Inbox, className: "bg-cream text-forest ring-1 ring-forest/15" },
  under_review: { icon: FileSearch, className: "bg-sand/30 text-forest" },
  in_progress: { icon: Settings, className: "bg-forest/10 text-forest" },
  resolved: { icon: CheckCircle2, className: "bg-forest text-cream" },
}

interface StatusBadgeProps {
  status: ComplaintStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { icon: Icon, className: tone } = STATUS_STYLES[status]

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        tone,
        className
      )}
    >
      {COMPLAINT_STATUS_LABELS[status]}
      <Icon aria-hidden="true" className="size-3.5" />
    </span>
  )
}