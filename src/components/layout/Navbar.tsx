import { Menu, Send, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router"
import { cn } from "../../lib/cn"
import { ROUTES } from "../../lib/routes"
import { NAV_LINKS } from "../../data/navigation"
import { ButtonLink } from "../ui/ButtonLink"
import { Container } from "../ui/Container"
import { Logo } from "./Logo"

// الرابط فعّال لما المسار والـ hash يطابقوا الرابط بالضبط
function isLinkActive(to: string, pathname: string, hash: string) {
  const [path, anchor = ""] = to.split("#")
  return pathname === path && hash === (anchor ? `#${anchor}` : "")
}

const focusRing =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const closeMenu = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-forest text-cream">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo onDark />

        {/* ديسكتوب */}
        <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.to, pathname, hash)
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "border-b-2 pb-1 text-sm font-medium transition-colors hover:text-sand",
                      focusRing,
                      active ? "border-sand text-cream" : "border-transparent text-cream/80"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink to={ROUTES.track} variant="outlineLight">
            متابعة شكوى
          </ButtonLink>
          <ButtonLink to={ROUTES.newComplaint} variant="accent">
            <Send aria-hidden="true" className="size-4" />
            تقديم شكوى
          </ButtonLink>
        </div>

        {/* موبايل */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-lg transition-colors hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-sand lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-cream/10 lg:hidden">
          <Container className="flex flex-col gap-4 py-4">
            <nav aria-label="التنقل الرئيسي للجوال">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.to, pathname, hash)
                  return (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-sand",
                          active && "bg-cream/10 text-sand"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="flex flex-col gap-3">
              <ButtonLink to={ROUTES.newComplaint} variant="accent" onClick={closeMenu}>
                <Send aria-hidden="true" className="size-4" />
                تقديم شكوى
              </ButtonLink>
              <ButtonLink to={ROUTES.track} variant="outlineLight" onClick={closeMenu}>
                متابعة شكوى
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}