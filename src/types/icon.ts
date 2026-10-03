import type { ComponentType } from "react"

// نوع مشترك لأيقونات التصنيفات (Tabler).
// Tabler بتستعمل prop اسمها stroke لسماكة الخط، عكس Lucide اللي بتعتبرها لون،
// فهالنوع لأيقونات Tabler بس، وأيقونات Lucide بتضل بـ IconCircle وباقي الموقع.
export type AppIcon = ComponentType<{
  className?: string
  stroke?: number | string
  "aria-hidden"?: boolean | "true" | "false"
}>