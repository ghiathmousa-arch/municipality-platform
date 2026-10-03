import { FileText, Search, Users, type LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    icon: FileText,
    title: "سهولة التقديم",
    description: "نموذج بسيط وواضح لا يستغرق دقائق معدودة",
  },
  {
    icon: Search,
    title: "متابعة واضحة",
    description: "إمكانية متابعة حالة الشكوى في جميع مراحلها",
  },
  {
    icon: Users,
    title: "توجيه للجهة المختصة",
    description: "يتم تحويل الشكوى مباشرة إلى الجهة المعنية في البلدية",
  },
]