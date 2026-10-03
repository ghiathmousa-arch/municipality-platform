import { ROUTES } from "../lib/routes"

export const NAV_LINKS = [
  { label: "الرئيسية", to: ROUTES.home },
  { label: "كيف تعمل المنصة", to: "/#how-it-works" },
  { label: "أنواع الشكاوى", to: "/#categories" },
  { label: "الأسئلة الشائعة", to: "/#faq" },
] as const

export const FOOTER_LINKS = [
  { label: "سياسة الخصوصية", to: ROUTES.privacy },
  { label: "شروط الاستخدام", to: ROUTES.terms },
  { label: "الأسئلة الشائعة", to: "/#faq" },
  { label: "تواصل معنا", to: ROUTES.contact },
] as const