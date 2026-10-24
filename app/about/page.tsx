import MobileNavigation from "@/components/mobile-navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

const approach = [
  {
    number: "01",
    title: "Start with the appliance",
    description:
      "The appliance type, brand and model provide the starting point for understanding the job.",
  },
  {
    number: "02",
    title: "Understand the fault",
    description:
      "A clear description of the symptoms, noises or error codes helps us understand the job and plan the appropriate service.",
  },
  {
    number: "03",
    title: "Work out the next step",
    description:
      "Inspection and diagnosis, on-site or in our workshop as appropriate, inform the next step and keep the repair focused on the actual fault.",
  },
];

const services = [
  {
    number: "01",
    title: "Washing Machine Repairs",
    href: "/washing-machine-repairs",
  },
  {
    number: "02",
    title: "Dryer Repairs",
    href: "/dryer-repairs",
  },
  {
    number: "03",
    title: "Fridge & Freezer Repairs",
    href: "/fridge-freezer-repairs",
  },
  { number: "04", title: "Coffee Machine Repairs", href: "/coffee-machine-repairs" },
  { number: "05", title: "Dishwasher Repairs", href: "/dishwasher-repairs" },
  { number: "06", title: "Oven Repairs", href: "/oven-repairs" },
  { number: "07", title: "Cooktop Repairs", href: "/cooktop-repairs" },
  { number: "08", title: "Microwave Repairs", href: "/microwave-repairs" },
];

export default function AboutPage() {
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
            <Link href="/about" className="text-sky-600">
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
              About Newcastle Appliance Experts
            </div>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Practical appliance repair. Clear, local service.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Newcastle Appliance Experts provides professional appliance
              diagnosis and repair across Newcastle and Lake Macquarie, with
              services for washing machines, dryers, fridges, freezers,
              dishwashers, coffee machines, ovens, cooktops and microwaves.
              Newcastle Appliance Experts is also a De’Longhi Authorised
              Service Centre for De’Longhi products.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/request-a-repair"
                className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
              >
                Book a Repair
              </Link>
              <Link
                href="/service-areas"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-slate-950"
              >
                View Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Our Approach
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Understand the problem before deciding what comes next.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Appliance faults are not always explained by the first symptom.
              The same error, noise or performance issue can have different
              possible causes depending on the appliance and model.
            </p>
            <p>
              The details shared beforehand help us understand the job and
              arrange the appropriate service. Suitable larger appliances can be
              inspected on-site; small and portable appliances such as coffee
              machines are generally assessed and repaired at our Warners Bay workshop.
              Our technician explains the findings and next steps after assessment.
            </p>
            <p>
              The aim is straightforward: practical fault diagnosis,
              professional communication and repairs carried out properly.
            </p>
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
              A focused way to approach appliance faults.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Useful information before a service helps us prepare. Inspection and
              testing take place during an arranged on-site visit or workshop
              assessment, depending on the appliance and repair type.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {approach.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7"
              >
                <div className="text-sm font-bold text-sky-400">
                  {item.number}
                </div>
                <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Clear Communication
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Good information makes the process easier.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sharing the brand, model number, fault description and any error
              code gives useful context and helps us prepare. After assessment,
              inspection findings and the repair process can be explained in
              plain language so the next step is clear.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h3 className="text-2xl font-bold">Helpful details to send</h3>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {["Appliance type", "Brand", "Model number", "Fault or error code"].map(
                (detail) => (
                  <div
                    key={detail}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold shadow-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm text-sky-700">
                      ✓
                    </span>
                    {detail}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Local Service
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Serving Newcastle and Lake Macquarie.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Appliance repair service is available throughout Newcastle, Lake
              Macquarie and surrounding suburbs, including Charlestown,
              Cardiff, Kotara, Adamstown, Wallsend, Mayfield, Belmont and
              Warners Bay.
            </p>
            <Link
              href="/service-areas"
              className="mt-7 inline-block font-semibold text-sky-600 transition hover:text-sky-700"
            >
              Explore our service areas →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["Newcastle", "Charlestown", "Cardiff", "Kotara", "Belmont", "Warners Bay"].map(
              (area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-semibold shadow-sm"
                >
                  {area}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Appliance Repair Services
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Focused on the appliances you rely on.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Current repair services cover laundry, refrigeration,
              dishwashing, coffee machines and cooking appliances.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="text-sm font-bold text-sky-600">
                  {service.number}
                </div>
                <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
                <div className="mt-6 font-semibold text-sky-600">
                  View service →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="rounded-[2rem] bg-sky-600 px-8 py-14 text-white sm:px-14">
            <h2 className="text-4xl font-bold tracking-tight">
              Tell us about your appliance.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">
              Send the appliance type, brand, model number and symptoms to help
              us determine whether an on-site visit or workshop assessment is appropriate.
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
