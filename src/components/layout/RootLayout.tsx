import { useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export function RootLayout() {
  const { pathname, hash } = useLocation()

  // الراوتر ما بيمرّر الصفحة لوحده: للـ hash بنروح للعنصر، وغير هيك لفوق
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById("main-content")?.focus()
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sand focus:px-4 focus:py-2 focus:font-semibold focus:text-forest"
      >
        تخطي إلى المحتوى
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}