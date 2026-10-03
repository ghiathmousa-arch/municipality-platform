import { Link } from "react-router"
import { FOOTER_LINKS } from "../../data/navigation"
import { Container } from "../ui/Container"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <Container className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
        <Logo onDark />

        <nav aria-label="روابط التذييل">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="rounded-sm text-cream/80 transition-colors hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-center text-sm text-cream/70">
          جميع الحقوق محفوظة © {new Date().getFullYear()} بلدية جرمانا
        </p>
      </Container>
    </footer>
  )
}