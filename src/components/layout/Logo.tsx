import { Link } from "react-router";
import { cn } from "../../lib/cn";
import { ROUTES } from "../../lib/routes";

// 1. استيراد الصورة هنا في الأعلى
import logoImg from "../../assets/images/logo.jpg";

interface LogoProps {
  onDark?: boolean;
  className?: string;
  size?: "md" | "sm"
}

export function Logo({ onDark = false, className }: LogoProps) {
  return (
    <Link
      to={ROUTES.home}
      className={cn(
        "inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand",
        className
      )}
    >
      {/* 2. تمرير المتغير المقتبس داخل أقواس JSX {} */}
      <img src={logoImg} alt="شعار البلدية" className="h-12 w-auto" />

      <span className={cn("flex flex-col", onDark ? "text-white" : "text-forest")}>
        <span className="text-[11px] opacity-80">الجمهورية العربية السورية</span>
        <span className="text-lg font-bold">بلدية جرمانا</span>
        <span className="text-xs text-sand">منصة الشكاوى</span>
      </span>
    </Link>
  );
}