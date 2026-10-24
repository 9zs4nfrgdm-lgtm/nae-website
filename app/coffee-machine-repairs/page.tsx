import { workshopDetails } from "@/lib/contact";
import MobileNavigation from "@/components/mobile-navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

const symptoms = [
  "Coffee not dispensing or flowing correctly",
  "Machine not heating or reaching temperature",
  "Grinding, brewing or milk-system problems",
  "Leaks, unusual noises or displayed error messages",
  "Automatic cycle, control or cleaning-program issues",
  "Inconsistent coffee delivery or performance",
];

export default function CoffeeMachineRepairsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="site-header sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <Link href="/"><img src="/nae-logo.png" alt="Newcastle Appliance Experts" className="h-20 w-auto object-contain sm:h-24" /></Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
            <Link href="/#services" className="text-sky-600">Services</Link>
            <Link href="/brands" className="transition hover:text-sky-600">Brands</Link>
            <Link href="/service-areas" className="transition hover:text-sky-600">Service Areas</Link>
            <Link href="/about" className="transition hover:text-sky-600">About</Link>
            <Link href="/faq" className="transition hover:text-sky-600">FAQ</Link>
          </nav>
          <Link href="/brands/delonghi#delonghi-service-form" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">Register a Repair</Link>
          <MobileNavigation />
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-sky-100 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">De’Longhi Authorised Service Centre</div>
            <h1 className="mt-6 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">Coffee machine repairs across Newcastle.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">Newcastle Appliance Experts provides authorised servicing and repairs for De’Longhi coffee machines, including manual espresso and automatic bean-to-cup models.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/brands/delonghi#delonghi-service-form" className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700">Register a De’Longhi Repair</Link>
              <Link href="/brands/delonghi" className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-slate-950">About Authorised Service</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Coffee machine symptoms we service</h2>
            <p className="mt-4 leading-7 text-slate-600">Coffee machines are generally assessed and repaired at our Warners Bay workshop after drop-off and check-in. A symptom or error code helps us prepare, but inspection and testing are needed to identify the fault. Assessment is not necessarily carried out at drop-off.</p>
            <div className="mt-8 grid gap-4">{symptoms.map((symptom) => <div key={symptom} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-medium shadow-sm">{symptom}</div>)}</div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Useful service-request details</h2>
            <p className="mt-4 leading-7 text-slate-600">The model, serial number, service type and fault description help Newcastle Appliance Experts understand the request and prepare for the service process.</p>
            <div className="mt-8 space-y-4">
              {[
                ["Product type", "Tell us whether the machine is manual espresso, automatic / bean-to-cup or another De’Longhi product."],
                ["Model and serial", "Record the complete details from the product identification label."],
                ["Warranty context", "Choose warranty, out-of-warranty or not sure, and attach proof of purchase to your email if available."],
                ["Fault symptoms", "Describe what happens, when it occurs and any error message shown."],
              ].map(([title, text]) => <article key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">After drop-off</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">Practical updates through the repair journey.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">Once your product is checked into the workshop, it is assessed and progressed through any required approval, parts, repair and testing stages. We&apos;ll contact you when there is a meaningful update and when the repair is ready for collection; your job number is your reference throughout.</p>
            <Link href="/brands/delonghi#after-drop-off" className="mt-6 inline-block font-semibold text-sky-700 transition hover:text-sky-900">See what happens after drop-off →</Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">Authorised De’Longhi Service</div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Register your De’Longhi coffee machine repair.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Use the dedicated registration for warranty, out-of-warranty or not-sure De’Longhi repairs. Once the prepared email is sent, you can drop off the product at {workshopDetails.address}, {workshopDetails.hours}, without an appointment or waiting for a job number.</p>
          <Link href="/brands/delonghi#delonghi-service-form" className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-50">Register a De’Longhi Repair</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
