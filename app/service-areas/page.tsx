import MobileNavigation from "@/components/mobile-navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

const serviceAreas = [
  {
    region: "Newcastle",
    suburbs: [
      "Newcastle",
      "Adamstown",
      "Broadmeadow",
      "Hamilton",
      "Kotara",
      "Lambton",
      "Mayfield",
      "Merewether",
      "New Lambton",
      "Wallsend",
    ],
  },
  {
    region: "Lake Macquarie",
    suburbs: [
      "Argenton",
      "Belmont",
      "Boolaroo",
      "Booragul",
      "Cardiff",
      "Charlestown",
      "Edgeworth",
      "Eleebana",
      "Fassifern",
      "Fennell Bay",
      "Gateshead",
      "Glendale",
      "Jewells",
      "Mount Hutton",
      "Redhead",
      "Speers Point",
      "Swansea",
      "Teralba",
      "Toronto",
      "Valentine",
      "Warners Bay",
    ],
  },
];

const services = [
  {
    number: "01",
    title: "Washing Machine Repairs",
    description:
      "Diagnosis and repair for front loaders, top loaders and washer-dryer combinations.",
    href: "/washing-machine-repairs",
  },
  {
    number: "02",
    title: "Dryer Repairs",
    description:
      "Professional repairs for heat pump, condenser and vented dryers.",
    href: "/dryer-repairs",
  },
  {
    number: "03",
    title: "Fridge & Freezer Repairs",
    description:
      "Diagnosis of refrigeration, cooling, icing and temperature faults.",
    href: "/fridge-freezer-repairs",
  },
  { number: "04", title: "Dishwasher Repairs", description: "Diagnosis of draining, filling, leaking, cleaning and control faults.", href: "/dishwasher-repairs" },
  { number: "05", title: "Coffee Machine Repairs", description: "Authorised servicing and repairs for De’Longhi coffee machines.", href: "/coffee-machine-repairs" },
  { number: "06", title: "Oven Repairs", description: "Diagnosis of heating, temperature, fan, door and control faults.", href: "/oven-repairs" },
  { number: "07", title: "Cooktop Repairs", description: "Diagnosis of heating-zone, ignition, control and display faults.", href: "/cooktop-repairs" },
  { number: "08", title: "Microwave Repairs", description: "General microwave fault diagnosis, subject to model suitability.", href: "/microwave-repairs" },
];

export default function ServiceAreasPage() {
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
            <Link href="/service-areas" className="text-sky-600">
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
              Local Appliance Repair
            </div>

            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Appliance repairs across Newcastle and Lake Macquarie.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Newcastle Appliance Experts provides professional diagnosis and
              repair for laundry, refrigeration, dishwashing, coffee machines
              and cooking appliances across
              Newcastle, Lake Macquarie and surrounding suburbs.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/request-a-repair"
                className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
              >
                Request a Repair
              </Link>
              <a
                href="#suburbs"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-slate-950"
              >
                View Service Areas
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="suburbs" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Suburbs We Service
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Local service throughout the Newcastle region.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our core service area includes the suburbs below, along with
              nearby locations across Newcastle and Lake Macquarie.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {serviceAreas.map((area) => (
              <article
                key={area.region}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9"
              >
                <h3 className="text-2xl font-bold">{area.region}</h3>
                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {area.suburbs.map((suburb) => (
                    <div
                      key={suburb}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-semibold shadow-sm"
                    >
                      {suburb}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-sky-100 bg-sky-50 p-7 sm:p-9">
            <h3 className="text-2xl font-bold">Don&apos;t see your suburb?</h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              The list above is a guide rather than every location we cover.
              Get in touch with your suburb and appliance details and we can
              confirm whether we service your area.
            </p>
            <Link
              href="/request-a-repair"
              className="mt-5 inline-block font-semibold text-sky-600 transition hover:text-sky-700"
            >
              Ask about your suburb →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Our Current Services
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Appliance repair services near you.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Professional fault diagnosis and repair for the household
              appliances you rely on.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500"
              >
                <div className="text-sm font-bold text-sky-400">
                  {service.number}
                </div>
                <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {service.description}
                </p>
                <div className="mt-6 font-semibold text-sky-400">
                  View service →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="rounded-[2rem] bg-sky-600 px-8 py-14 text-white sm:px-14">
            <h2 className="text-4xl font-bold tracking-tight">
              Need an appliance repaired?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">
              Tell us your suburb, appliance type, brand, model and symptoms
              so we can confirm whether an on-site visit or workshop assessment is appropriate.
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
