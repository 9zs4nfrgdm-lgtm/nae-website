import MobileNavigation from "@/components/mobile-navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

const enquiryDetails = [
  {
    number: "01",
    title: "Appliance brand",
    text: "Provide the manufacturer name shown on the appliance and, if useful, include a photo of the branding.",
  },
  {
    number: "02",
    title: "Appliance type",
    text: "Tell us whether it is a washing machine, dryer, fridge, freezer, dishwasher, oven, cooktop or microwave.",
  },
  {
    number: "03",
    title: "Model number",
    text: "Send the complete model from the appliance identification label. A clear photo is often the easiest way to capture it accurately.",
  },
  {
    number: "04",
    title: "Fault description",
    text: "Explain what the appliance is doing, when the problem occurs and include any displayed code, unusual noise or visible symptom.",
  },
];

export default function OtherBrandsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="site-header sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <Link href="/" className="flex items-center">
            <img src="/nae-logo.png" alt="Newcastle Appliance Experts" className="h-20 w-auto object-contain sm:h-24" />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
            <Link href="/#services" className="transition hover:text-sky-600">Services</Link>
            <Link href="/brands" className="text-sky-600">Brands</Link>
            <Link href="/service-areas" className="transition hover:text-sky-600">Service Areas</Link>
            <Link href="/about" className="transition hover:text-sky-600">About</Link>
            <Link href="/faq" className="transition hover:text-sky-600">FAQ</Link>
          </nav>
          <Link href="/request-a-repair" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">Book a Repair</Link>
          <MobileNavigation />
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-sky-100 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">Other Appliance Brands</div>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">Brand not listed?</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              The published Brands page is not an exhaustive list. Send us the
              appliance details and we can confirm whether we can assist with
              your particular brand and model.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/request-a-repair" className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700">Send Appliance Details</Link>
              <Link href="/brands" className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-slate-950">View Listed Brands</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">What To Send</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Four details help us check the enquiry.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Brand and model information helps identify the exact appliance and lets us check service suitability. We can then confirm an on-site visit for a suitable larger appliance or workshop assessment for a suitable small or portable appliance.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {enquiryDetails.map((detail) => (
              <article key={detail.number} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-sm font-bold text-sky-600">{detail.number}</div>
                <h3 className="mt-7 text-2xl font-bold">{detail.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{detail.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">Service Suitability</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">A brand name is only the starting point.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>Appliance ranges can differ between manufacturers, models and product generations. The exact appliance type and model are needed before confirming whether Newcastle Appliance Experts can assist.</p>
            <p>No claim is made that every appliance brand or every model is serviced.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="rounded-[2rem] bg-sky-600 px-8 py-14 text-white sm:px-14">
            <h2 className="text-4xl font-bold tracking-tight">Send us your appliance details.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">Include the brand, appliance type, complete model number and symptoms so we can understand the job, check service suitability and arrange the appropriate service pathway.</p>
            <Link href="/request-a-repair" className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-50">Request a Repair Assessment</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
