import MobileNavigation from "@/components/mobile-navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  serviceName: string;
  faults: string[];
  details: { title: string; text: string }[];
  safetyNote?: string;
};

const serviceLinks = [
  ["Washing Machines", "/washing-machine-repairs"],
  ["Dryers", "/dryer-repairs"],
  ["Coffee Machines", "/coffee-machine-repairs"],
  ["Fridges & Freezers", "/fridge-freezer-repairs"],
  ["Dishwashers", "/dishwasher-repairs"],
  ["Ovens", "/oven-repairs"],
  ["Cooktops", "/cooktop-repairs"],
  ["Microwaves", "/microwave-repairs"],
];

export default function ApplianceServicePage({
  eyebrow,
  title,
  intro,
  serviceName,
  faults,
  details,
  safetyNote,
}: ServicePageProps) {
  const isMicrowave = serviceName === "Microwave";

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="site-header border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label="Newcastle Appliance Experts home">
            <img src="/nae-logo.png" alt="Newcastle Appliance Experts" className="h-20 w-auto object-contain" />
          </Link>
          <Link href="/request-a-repair" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">Book a Repair</Link>
          <MobileNavigation />
        </div>
      </header>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-sky-600">{eyebrow}</div>
            <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/request-a-repair" className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700">Book a Repair</Link>
              <Link href="/service-areas" className="rounded-full border border-slate-300 px-7 py-4 font-semibold transition hover:border-slate-950">View Service Areas</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Common {serviceName.toLowerCase()} fault symptoms</h2>
            <p className="mt-4 leading-7 text-slate-600">{isMicrowave ? "A symptom can have more than one cause. Portable microwaves are generally assessed at our Warners Bay workshop after drop-off and check-in. For installed models, we confirm the appropriate service method first." : "A symptom can have more than one cause. The technician generally inspects and tests the appliance on-site before deciding what requires attention."}</p>
            <div className="mt-8 grid gap-4">
              {faults.map((fault) => <div key={fault} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-medium shadow-sm">{fault}</div>)}
            </div>
            {safetyNote && <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 leading-7 text-slate-700">{safetyNote}</p>}
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">What to have ready</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{isMicrowave ? "Useful details help us confirm the appropriate workshop or on-site service for your model and installation; they do not replace inspection and diagnosis." : "Useful details help us understand the appliance and prepare for the visit; they do not replace on-site inspection and diagnosis."}</p>
            <div className="mt-8 space-y-5">
              {details.map((detail, index) => <div key={detail.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><div className="text-sm font-bold text-sky-600">{String(index + 1).padStart(2, "0")}</div><h3 className="mt-2 text-xl font-bold">{detail.title}</h3><p className="mt-2 leading-7 text-slate-600">{detail.text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div><div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">Diagnosis first</div><h2 className="mt-4 text-4xl font-bold tracking-tight">A clear process from symptom to next step.</h2></div>
          <div className="space-y-5 text-lg leading-8 text-slate-300"><p><strong className="text-white">1. Share the details.</strong> {isMicrowave ? "Tell us the full model, whether it is portable or installed, and what it is doing so we can confirm the service pathway." : "Tell us the brand, full model and what the appliance is doing so we can prepare for the visit."}</p><p><strong className="text-white">{isMicrowave ? "2. Inspect and test." : "2. Inspect and test on-site."}</strong> {isMicrowave ? "Our technician inspects and tests the appliance during the arranged assessment. Workshop assessment follows drop-off and check-in and is not necessarily carried out while you wait." : "The technician checks the appliance during the service visit rather than assuming the fault from a symptom or error code."}</p><p><strong className="text-white">3. Discuss the finding.</strong> The diagnosis and practical next step are explained clearly before proceeding.</p></div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div><h2 className="text-3xl font-bold">Newcastle and Lake Macquarie</h2><p className="mt-5 leading-7 text-slate-600">{serviceName} service is available across Newcastle, Lake Macquarie and surrounding service suburbs. Check the service-area page or include your suburb with your enquiry.</p></div>
            <div><h2 className="text-3xl font-bold">Other appliance services</h2><div className="mt-6 flex flex-wrap gap-3">{serviceLinks.map(([label, href]) => <Link key={href} href={href} className="rounded-full border border-slate-300 px-4 py-2 font-semibold transition hover:border-sky-600 hover:text-sky-600">{label}</Link>)}</div></div>
          </div>
          <div className="mt-16 rounded-[2rem] bg-sky-600 p-8 text-center text-white sm:p-12"><h2 className="text-4xl font-bold">Need help with your {serviceName.toLowerCase()}?</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-sky-50">{isMicrowave ? "Send the brand, model, installation details, suburb and symptoms so we can confirm whether workshop assessment or an on-site visit is appropriate." : "Send the brand, model, suburb and symptoms to help us understand the job and prepare for an on-site service visit."}</p><Link href="/request-a-repair" className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-slate-100">Request a Repair</Link></div>
        </div>
      </section>

      <SiteFooter variant="light" showNavigation />
    </main>
  );
}
