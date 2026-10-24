import MobileNavigation from "@/components/mobile-navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import { faqItems } from "@/lib/faq-data";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
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
            <Link href="/#services" className="transition hover:text-sky-600">
              Services
            </Link>
            <Link href="/brands" className="transition hover:text-sky-600">
              Brands
            </Link>
            <Link href="/service-areas" className="transition hover:text-sky-600">
              Service Areas
            </Link>
            <Link href="/about" className="transition hover:text-sky-600">
              About
            </Link>
            <Link href="/faq" className="text-sky-600">
              FAQ
            </Link>
          </nav>

          <Link
            href="/request-a-repair"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Book a Repair
          </Link>
          <MobileNavigation />
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-sky-100 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Appliance Repair FAQs
            </div>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Helpful answers before your appliance repair.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Find practical information about household appliance repairs
              across Newcastle and Lake Macquarie.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/request-a-repair"
                className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
              >
                Book a Repair
              </Link>
              <a
                href="#questions"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-slate-950"
              >
                Browse Questions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Common Questions
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              What to know before getting in touch.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Appliance details and a clear description of the symptoms help
              us understand the job and determine the appropriate service pathway.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition open:border-sky-200 open:shadow-md sm:p-7"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-xl font-bold marker:content-none">
                  <span className="flex gap-4">
                    <span className="mt-1 text-sm font-bold text-sky-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.question}
                  </span>
                  <span className="text-2xl font-normal text-sky-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 pl-10 leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Current Repair Services
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Eight appliance service categories.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Explore common faults and the information that is useful for each
              appliance type.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Washing Machine Repairs", "/washing-machine-repairs"],
              ["Dryer Repairs", "/dryer-repairs"],
              ["Fridge & Freezer Repairs", "/fridge-freezer-repairs"],
              ["Coffee Machine Repairs", "/coffee-machine-repairs"],
              ["Dishwasher Repairs", "/dishwasher-repairs"],
              ["Oven Repairs", "/oven-repairs"],
              ["Cooktop Repairs", "/cooktop-repairs"],
              ["Microwave Repairs", "/microwave-repairs"],
            ].map(([title, href], index) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500"
              >
                <span className="flex items-center gap-5">
                  <span className="text-sm font-bold text-sky-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-bold">{title}</span>
                </span>
                <span className="text-sky-400">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="rounded-[2rem] bg-sky-600 px-8 py-14 text-white sm:px-14">
            <h2 className="text-4xl font-bold tracking-tight">
              Still have a question about your appliance?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">
              Send the appliance type, brand, model number and symptoms to help
              us determine whether your appliance needs an on-site visit or workshop assessment.
            </p>
            <Link
              href="/request-a-repair"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-50"
            >
              Request a Repair
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
