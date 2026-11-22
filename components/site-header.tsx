import Link from "next/link";
import MobileNavigation from "@/components/mobile-navigation";
import { contactDetails } from "@/lib/contact";

export default function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" className="flex items-center">
          <img
            src="/nae-logo.png"
            alt="Newcastle Appliance Experts"
            className="h-20 w-auto object-contain sm:h-24"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          <Link href="/#services" className="transition hover:text-sky-600">Services</Link>
          <Link href="/brands" className="transition hover:text-sky-600">Brands</Link>
          <Link href="/service-areas" className="transition hover:text-sky-600">Service Areas</Link>
          <Link href="/about" className="transition hover:text-sky-600">About</Link>
          <Link href="/faq" className="transition hover:text-sky-600">FAQ</Link>
        </nav>
        <a
          href={contactDetails.phoneHref}
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          Call {contactDetails.phoneDisplay}
        </a>
        <MobileNavigation />
      </div>
    </header>
  );
}
