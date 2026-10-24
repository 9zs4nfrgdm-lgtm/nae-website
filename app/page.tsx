import JsonLd from "@/components/json-ld";
import { homePageJsonLd } from "@/lib/structured-data";
import MobileNavigation from "@/components/mobile-navigation";
import SiteFooter from "@/components/site-footer";
import { contactDetails, workshopDetails } from "@/lib/contact";
import Link from "next/link";

const services = [
  {
    title: "Washing Machine Repairs",
    description:
      "Diagnosis and repair for front loaders, top loaders and washer-dryer combinations.",
    detail:
      "Leaks, draining faults, spin issues, unusual noises, error codes and more.",
    href: "/washing-machine-repairs",
    number: "01",
  },
  {
    title: "Dryer Repairs",
    description:
      "Professional repairs for heat pump, condenser and vented dryers.",
    detail:
      "No heat, poor drying, drum faults, airflow issues, noises and error codes.",
    href: "/dryer-repairs",
    number: "02",
  },
  { title: "Coffee Machine Repairs", description: "Authorised servicing and repairs for De’Longhi coffee machines.", detail: "Manual espresso, automatic and bean-to-cup coffee machine repairs.", href: "/coffee-machine-repairs", number: "03" },
  {
    title: "Fridge & Freezer Repairs",
    description:
      "Diagnosis of refrigeration, cooling, icing and temperature faults.",
    detail:
      "Cooling problems, icing, fan faults, leaks, temperature issues and electrical faults.",
    href: "/fridge-freezer-repairs",
    number: "04",
  },
  { title: "Dishwasher Repairs", description: "Diagnosis and repair for household dishwasher faults.", detail: "Drain, fill, leak, cleaning, heating, noise and control symptoms.", href: "/dishwasher-repairs", number: "05" },
  { title: "Oven Repairs", description: "Practical diagnosis for household oven problems.", detail: "Heating, temperature, fan, door, display and power symptoms.", href: "/oven-repairs", number: "06" },
  { title: "Cooktop Repairs", description: "Fault diagnosis for household cooktops.", detail: "Heating zones, ignition, controls, displays and intermittent operation.", href: "/cooktop-repairs", number: "07" },
  { title: "Microwave Repairs", description: "General microwave repairs, subject to model and installation suitability.", detail: "Heating, door, control, turntable, noise and operation symptoms.", href: "/microwave-repairs", number: "08" },
];

const areas = [
  "Newcastle",
  "Charlestown",
  "Cardiff",
  "Kotara",
  "Adamstown",
  "Wallsend",
  "Mayfield",
  "Lambton",
  "New Lambton",
  "Hamilton",
  "Merewether",
  "Belmont",
  "Warners Bay",
  "Toronto",
  "Glendale",
  "Edgeworth",
  "Gateshead",
  "Mount Hutton",
  "Valentine",
  "Eleebana",
  "Redhead",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <JsonLd data={{ "@context": "https://schema.org", ...homePageJsonLd }} />
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
  <a href="#services" className="transition hover:text-sky-600">
    Services
  </a>

  <Link href="/brands" className="transition hover:text-sky-600">
    Brands
  </Link>

  <a href="#areas" className="transition hover:text-sky-600">
    Service Areas
  </a>

  <Link href="/about" className="transition hover:text-sky-600">
    About
  </Link>

  <Link href="/faq" className="transition hover:text-sky-600">
    FAQ
  </Link>

  <a href="#contact" className="transition hover:text-sky-600">
    Contact
  </a>
</nav>

          <a
            href="/request-a-repair"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Book a Repair
          </a>
          <MobileNavigation />
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute right-[-160px] top-[-120px] h-[560px] w-[560px] rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800">
              Newcastle & Lake Macquarie Appliance Repairs
            </div>

            <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Appliance repairs,
              <span className="block text-sky-600">done properly.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Professional diagnosis and repair for laundry, refrigeration,
              dishwashing, cooking and coffee machines across Newcastle and Lake Macquarie.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/request-a-repair"
                className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
              >
                Book a Repair
              </a>

              <a
                href="#services"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-slate-950"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-12">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Need an appliance repaired?
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us about your appliance.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Send us the appliance type, brand, model number and a description
              of the symptoms so we can confirm whether an on-site visit or workshop assessment is appropriate.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <span className="font-bold text-sky-400">01</span>
                <span>Tell us the appliance</span>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-sky-400">02</span>
                <span>Describe the problem</span>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-sky-400">03</span>
                <span>Confirm the service pathway</span>
              </div>
            </div>

            <a
              href="/request-a-repair"
              className="mt-9 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-950"
            >
              Request a Repair →
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            "Local Newcastle service",
            "Qualified appliance technician",
            "Clear service-call pricing",
            "Eight appliance service categories",
          ].map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 px-3 py-3 text-sm font-semibold text-slate-700"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                ✓
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Appliance Repair Services
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Specialist repair for the appliances you rely on.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Focused repair for laundry, refrigeration, dishwashing, cooking
              and coffee machines throughout Newcastle and Lake Macquarie.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 font-bold text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                  {service.number}
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {service.detail}
                </p>

                <a
                  href={service.href}
                  className="mt-6 inline-block font-semibold text-sky-600 transition group-hover:text-sky-700"
                >
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sky-100 bg-sky-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div className="inline-flex w-fit rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
            De’Longhi Authorised Service Centre
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Authorised De’Longhi repairs and servicing.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Newcastle Appliance Experts is a De’Longhi Authorised Service Centre, providing authorised repairs and servicing for De’Longhi products across Newcastle and Lake Macquarie.</p>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">Register the repair online, send the prepared email and documents, then drop off the product during business hours without an appointment or waiting for a job number.</p>
            <Link href="/brands/delonghi" className="mt-7 inline-block font-semibold text-sky-700 transition hover:text-sky-900">Register a De’Longhi Repair →</Link>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Newcastle Appliance Experts
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Local knowledge.
              <br />
              Technical expertise.
              <br />
              Straight answers.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Newcastle Appliance Experts provides professional appliance
              diagnosis and repair throughout Newcastle and surrounding areas.
            </p>

            <p>
              Our services cover washing machines, dryers, fridges, freezers,
              dishwashers, coffee machines, ovens, cooktops and microwaves.
              We are also authorised to service and repair De’Longhi products.
            </p>

            <p>
              We focus on practical fault diagnosis, professional
              communication and repairs carried out properly.
            </p>
          </div>
        </div>
      </section>

      <section id="areas" className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Local Appliance Repair
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Servicing Newcastle, Lake Macquarie and surrounding areas.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Providing appliance repairs across Newcastle and Lake Macquarie,
              including Newcastle, Charlestown, Cardiff, Kotara, Adamstown,
              Wallsend, Mayfield, Lambton, New Lambton, Hamilton, Merewether,
              Belmont, Warners Bay, Toronto, Glendale, Edgeworth, Gateshead,
              Mount Hutton, Valentine, Eleebana, Redhead and surrounding suburbs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-semibold shadow-sm"
              >
                {area}
              </div>
            ))}
            <p className="col-span-full mt-3 text-sm leading-6 text-slate-600">
              Can&apos;t see your suburb? We service many surrounding Newcastle and Lake Macquarie areas.{" "}
              <Link href="/service-areas" className="font-semibold text-sky-600 underline transition hover:text-sky-700">View our Service Areas for broader coverage.</Link>
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
            Book an Appliance Repair
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s get your appliance sorted.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us what appliance you have, the brand, model and symptoms.
            We arrange on-site servicing for suitable household appliances and workshop assessment for suitable small and portable appliances, including coffee machines.
          </p>

          <div className="mt-6 text-slate-600">
            <p>{workshopDetails.address}</p>
            <p className="mt-2">{workshopDetails.hours}</p>
          </div>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contactDetails.phoneHref}
              className="rounded-full bg-sky-600 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
            >
              Call {contactDetails.phoneDisplay}
            </a>
            <a
              href={contactDetails.emailHref}
              className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-950 transition hover:border-sky-600 hover:text-sky-600"
            >
              Email {contactDetails.email}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
