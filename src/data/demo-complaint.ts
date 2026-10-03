import potholeImage from "../assets/images/exampel.jpg"
import type { ComplaintDetails, ComplaintSummary } from "../types/complaint"

// بيانات مثال للعرض بالـ Hero (مؤقتة لحد ما يجهز الباك)
export const DEMO_COMPLAINT: ComplaintSummary = {
  referenceNumber: "JR-2026-00328",
  status: "in_progress",
  categoryLabel: "النظافة والنفايات",
  statusDates: {
    received: "2026/03/10",
    under_review: "2026/03/11",
  },
}

// مثال لقسم التتبع (مؤقت)
export const DEMO_TRACKED_COMPLAINT: ComplaintDetails = {
  referenceNumber: "JR-2026-00328",
  status: "in_progress",
  categoryLabel: "الطرق والحفر",
  location: "شارع الثورة - جرمانا",
  submittedAt: "2026/03/10",
  imageUrl: potholeImage,
  statusDates: {
    received: "2026/03/10",
    under_review: "2026/03/11",
  },
}