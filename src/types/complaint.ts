// مقترح: لازم تتأكد من شريكك إنو الباك بيرجّع نفس القيم.
// الباك بيبعت الكود (received...) والواجهة هي اللي بتحوّله لنص عربي.
export const COMPLAINT_STATUSES = [
  "received",
  "under_review",
  "in_progress",
  "resolved",
] as const

export type ComplaintStatus = (typeof COMPLAINT_STATUSES)[number]

export const COMPLAINT_STATUS_LABELS: Record<ComplaintStatus, string> = {
  received: "تم الاستلام",
  under_review: "قيد المراجعة",
  in_progress: "قيد المعالجة",
  resolved: "تمت المعالجة",
}

// ملخص الشكوى المعروض بالكروت (شكل مقترح، منثبّته مع شريكك)
export interface ComplaintSummary {
  referenceNumber: string
  status: ComplaintStatus
  categoryLabel: string
  statusDates: Partial<Record<ComplaintStatus, string>>
}

// تفاصيل أكتر للشكوى (صفحة وكرت التتبع)
export interface ComplaintDetails extends ComplaintSummary {
  location: string
  submittedAt: string
  imageUrl?: string
}