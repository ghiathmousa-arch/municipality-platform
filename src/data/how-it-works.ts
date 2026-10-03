import { FileText, MapPin, Search, Users, type LucideIcon } from "lucide-react"

interface HowItWorksStep {
  icon: LucideIcon
  title: string
  description: string
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    icon: FileText,
    title: "قدّم الشكوى",
    description: "عبّئ نموذج الشكوى بالمعلومات الأساسية",
  },
  {
    icon: MapPin,
    title: "حدد الموقع والتفاصيل",
    description: "أضف موقع الشكوى ووصف المشكلة ويمكنك إرفاق صور",
  },
  {
    icon: Users,
    title: "تُحال للجهة المختصة",
    description: "يتم تحويل الشكوى تلقائياً إلى الجهة المختصة في البلدية",
  },
  {
    icon: Search,
    title: "تابع حالة الشكوى",
    description: "يمكنك متابعة حالة الشكوى باستخدام رقم المرجع",
  },
]