import MobileNavigation from "@/components/mobile-navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import { lgRepairFaqs, lgServiceSections } from "@/lib/lg-repair-data";

export default function LgRepairsPage() {
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
            <Link href="/brands" className="text-sky-600">
              Brands
            </Link>
            <Link href="/service-areas" className="transition hover:text-sky-600">
              Service Areas
            </Link>
            <Link href="/about" className="transition hover:text-sky-600">
              About
            </Link>
            <Link href="/faq" className="transition hover:text-sky-600">
              FAQ
            </Link>
          </nav>

          <Link
            href="/request-a-repair"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Request a Repair
          </Link>
          <MobileNavigation />
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-sky-100 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              LG Appliance Repairs Newcastle
            </div>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Practical diagnosis for your LG appliance.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Professional fault diagnosis and repair for LG washing machines,
              dryers, fridges, freezers, dishwashers, ovens, cooktops and microwaves across Newcastle and Lake Macquarie.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/request-a-repair"
                className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
              >
                Book an LG Repair
              </Link>
              <a
                href="#lg-services"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-slate-950"
              >
                View LG Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="lg-services" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              LG Repair Services
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Help with the LG appliances you rely on.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A symptom is the starting point, not a complete diagnosis. Model,
              error-code and photo details help us prepare; the technician
              assesses suitable larger appliances on-site, while suitable portable
              appliances are generally assessed at our Warners Bay workshop.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lgServiceSections.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="text-sm font-bold text-sky-600">
                  {service.number}
                </div>
                <h3 className="mt-7 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-7 border-t border-slate-200 pt-6">
                  <div className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
                    Common symptoms
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                    {service.symptoms.map((symptom) => (
                      <li key={symptom} className="flex gap-3">
                        <span className="text-sky-600">✓</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                  {service.href === "/microwave-repairs" && (
                    <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                      Microwave service remains model-dependent. Do not remove
                      the casing because hazardous high voltage can remain inside.
                    </p>
                  )}
                </div>
                <Link
                  href={service.href}
                  className="mt-7 inline-block font-semibold text-sky-600 transition hover:text-sky-700"
                >
                  View service details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Diagnosis First
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From appliance details to a practical next step.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "Identify the appliance",
                "Start with the LG appliance type and the complete model number from its identification label.",
              ],
              [
                "02",
                "Describe the symptoms",
                "Explain what the appliance is doing, when the problem occurs and any noise, leak or error code you have noticed.",
              ],
              [
                "03",
                "Diagnose the fault",
                "During on-site or workshop assessment as appropriate, inspection and testing help distinguish the underlying cause from the symptom and guide the appropriate repair step.",
              ],
            ].map(([number, heading, text]) => (
              <article
                key={number}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7"
              >
                <div className="text-sm font-bold text-sky-400">{number}</div>
                <h3 className="mt-8 text-2xl font-bold">{heading}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              What to Have Ready
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              The right details help from the start.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              LG produces different appliance types and model variations. The
              full identification details help distinguish the exact appliance
              and provide context for the reported fault.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Appliance type", "Washing machine, dryer, fridge or freezer."],
                ["Model number", "A photo of the complete identification label."],
                ["Fault symptoms", "What happens and when the problem started."],
                ["Error code", "The exact code and when it appears."],
                ["Useful media", "Photos or video of a leak, noise or display."],
                ["Your suburb", "So service-area coverage can be confirmed."],
              ].map(([heading, text], index) => (
                <div
                  key={heading}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-bold text-sky-600">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-bold">{heading}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Local LG Appliance Repair
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Newcastle and Lake Macquarie service.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              LG appliance repairs are available across Newcastle, Lake
              Macquarie and surrounding suburbs, including Charlestown,
              Cardiff, Kotara, Adamstown, Wallsend, Mayfield, Belmont and
              Warners Bay.
            </p>
            <Link
              href="/service-areas"
              className="mt-7 inline-block font-semibold text-sky-600 transition hover:text-sky-700"
            >
              View all service areas →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              "Newcastle",
              "Charlestown",
              "Cardiff",
              "Kotara",
              "Belmont",
              "Warners Bay",
            ].map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-semibold shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              LG Repair FAQs
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Common questions about LG appliance repairs.
            </h2>
          </div>
          <div className="mt-14 space-y-4">
            {lgRepairFaqs.map((item, index) => (
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

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="rounded-[2rem] bg-sky-600 px-8 py-14 text-white sm:px-14">
            <h2 className="text-4xl font-bold tracking-tight">
              Need help with an LG appliance?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">
              Send the appliance type, model number, error code and symptoms
              to help us understand the job and confirm the appropriate service pathway.
            </p>
            <Link
              href="/request-a-repair"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-50"
            >
              Request an LG Repair
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-slate-500">
            LG is a trademark of its respective owner. No manufacturer
            affiliation or endorsement is implied.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
