import {
  IconBarrierBlock,
  IconBolt,
  IconBuilding,
  IconDroplet,
  IconDots,
  IconRoad,
  IconTrash,
  IconPipeline,
} from "@tabler/icons-react"
import type { AppIcon } from "../types/icon"

export interface ComplaintCategory {
  id: string
  label: string
  icon: AppIcon
}

// مؤقت: الـ ids لازم تتطابق مع الباك، ولاحقاً الـ label بيجي من الـ API
export const COMPLAINT_CATEGORIES: ComplaintCategory[] = [
  { id: "cleanliness", label: "النظافة والنفايات", icon: IconTrash },
  { id: "water", label: "المياه وشبكات الشرب", icon: IconDroplet },
  { id: "sewage", label: "الصرف الصحي", icon: IconPipeline },
  { id: "electricity", label: "الكهرباء والإنارة", icon: IconBolt },
  { id: "roads", label: "الطرق والحفر", icon: IconRoad },
  { id: "building-violations", label: "مخالفات البناء", icon: IconBuilding },
  { id: "road-works", label: "الإشغالات الطرقية", icon: IconBarrierBlock },
  { id: "other", label: "أخرى", icon: IconDots },
]