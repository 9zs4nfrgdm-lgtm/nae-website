import MobileNavigation from "@/components/mobile-navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/json-ld";
import SiteFooter from "@/components/site-footer";
import {
  getBrandRepairPage,
  brandRepairPages,
  categoryDetails,
  type BrandRepairData,
  type RepairCategory,
} from "@/lib/brand-repair-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { businessId, pageJsonLd } from "@/lib/structured-data";

type BrandPageProps = { params: Promise<{ slug: string }> };

function categoryList(brand: BrandRepairData) {
  return brand.categories.map((category) => categoryDetails[category].label);
}

function readableList(items: string[]) {
  if (items.length < 2) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

const additionalSymptoms: Record<string, Partial<Record<RepairCategory, string[]>>> = {
  westinghouse: {
    dishwashers: ["Water remaining after a Westinghouse wash program", "Dishwasher not filling or leaking around the door", "Poor wash or drying results", "Program stopping or controls not responding"],
    ovens: ["Oven not heating on the selected function", "Temperature running too hot, too cool or unevenly", "Fan or heating element not operating", "Door, timer, display or selector problem"],
    cooktops: ["Electric element or induction zone not heating", "Gas burner not igniting on applicable models", "Heat level difficult to regulate", "Cooktop display, switch or touch-control fault"],
    microwaves: ["Microwave operating without heating food", "Unit not starting when the door is closed", "Turntable, fan or interior-light problem", "Unusual noise or display and keypad fault"],
  },
  electrolux: {
    dishwashers: ["Dishwasher not draining at the end of a program", "No water entering or water escaping the cabinet", "Wash or drying performance declining", "ComfortLift, door or program-control symptom"],
    ovens: ["Oven not producing heat on one or more functions", "Set and actual temperatures not aligning", "Convection fan or element problem", "Steam, door or touch-control symptom on applicable models"],
    cooktops: ["Induction zone not detecting cookware", "Electric zone or gas burner not heating correctly", "Heat adjustment behaving inconsistently", "Hob display or touch controls not responding"],
    microwaves: ["Built-in microwave not heating", "Microwave or combination mode not starting", "Fan, turntable or unusual operating noise", "Door, display or control-panel fault"],
  },
  aeg: {
    dishwashers: ["Water not draining after an AEG program", "Dishwasher failing to fill or leaking", "Spray, washing or drying performance issue", "ComfortLift, door or electronic-control symptom"],
    ovens: ["Oven not heating in the chosen mode", "Temperature, steam or cooking-performance inconsistency", "Fan or heating function not operating", "Door, touchscreen or selector problem"],
    cooktops: ["Induction zone not recognising a pan", "Gas burner not lighting on applicable AEG models", "Zone output or temperature control fluctuating", "SaphirMatt surface controls or display not responding"],
    microwaves: ["Combi microwave running without effective heating", "Microwave function not starting", "Fan or unusual noise during operation", "Door, display or command-control issue"],
  },
  simpson: {
    dishwashers: ["Legacy Simpson dishwasher leaving water in the cabinet", "Fill or leak problem during a wash", "Dishes remaining dirty or wet", "Program dial, latch or control symptom"],
    ovens: ["Legacy Simpson oven not heating", "Cooking temperature running unevenly", "Fan or element function not working", "Door seal, thermostat or control problem"],
    cooktops: ["Hotplate or burner not heating", "Ignition problem on an applicable gas model", "Heat output difficult to adjust", "Knob, switch or indicator fault"],
  },
  beko: {
    dishwashers: ["Beko dishwasher not draining or filling", "Water leaking during a program", "Spray or drying results deteriorating", "AutoDose, door or program-control symptom on applicable models"],
    ovens: ["Beko oven not heating on the selected mode", "Temperature or cooking results becoming uneven", "AeroPerfect fan or element symptom on applicable models", "Door, display or function-selector issue"],
    cooktops: ["Induction zone or electric element not heating", "Gas ignition fault on an applicable cooktop", "Power level changing or cutting out", "Touch display, control or indicator problem"],
  },
  "fisher-paykel": {
    dishwashers: ["DishDrawer compartment not draining or filling", "Water leaking from a drawer or conventional dishwasher", "Poor wash or drying result", "Drawer, lid, cycle or control-panel symptom"],
    ovens: ["Oven not reaching or maintaining temperature", "AeroTech fan or heating function not operating", "One oven function producing uneven results", "Door, touchscreen or dial-control problem"],
    cooktops: ["Induction zone not detecting cookware", "Gas burner not igniting on an applicable model", "Zone temperature or power output inconsistent", "Cooktop control or display fault"],
    microwaves: ["Companion microwave function not heating", "Microwave or combination program not starting", "Fan, turntable or operating-noise problem", "Door, touchscreen or display symptom"],
  },
  haier: {
    dishwashers: ["Haier dishwasher not draining or taking in water", "Leak appearing during a program", "Wash or drying performance problem", "Door, cycle or SmartHQ control symptom"],
    ovens: ["Oven not heating on a selected cooking function", "Temperature varying or overheating", "Convection fan or element not operating", "Door, display or connected-control issue"],
    cooktops: ["Induction zone not heating or recognising cookware", "Gas ignition issue on an applicable Haier model", "Power level fluctuating or zone switching off", "Touch control or display fault"],
  },
  chef: {
    ovens: ["Chef oven not heating", "Temperature running too high, low or unevenly", "Fan or element function not operating", "Door, timer, knob or selector issue"],
    cooktops: ["Electric hotplate or ceramic zone not heating", "Gas burner not igniting on an applicable Chef model", "Heat output difficult to regulate", "Knob, switch or indicator problem"],
  },
  hisense: {
    dishwashers: ["Hisense dishwasher not draining or filling", "Water leaking from the appliance", "Poor cleaning or drying performance", "Program, door or ConnectLife control symptom"],
    microwaves: ["Hisense microwave not heating", "Appliance not starting or stopping unexpectedly", "Turntable, cooling fan or unusual noise", "Digital display or keypad problem"],
  },
  kogan: {
    dishwashers: ["Benchtop or freestanding dishwasher not draining", "Unit not filling or leaking during use", "Wash or drying result deteriorating", "Door, program or control-panel issue"],
    ovens: ["Built-in Kogan oven not heating", "Temperature inaccurate or cooking unevenly", "Fan or element function failing", "Door, timer or selector-control problem"],
    cooktops: ["Induction or ceramic zone not heating", "Gas burner not igniting on an applicable model", "Heat output cutting out or difficult to adjust", "Touch panel, display or switch fault"],
    microwaves: ["Kogan microwave running without heating", "Microwave not starting", "Turntable or fan problem", "Unusual sound, display or button fault"],
  },
  panasonic: {
    microwaves: ["Panasonic microwave not heating food", "Unit not starting or stopping during operation", "Turntable or cooling-fan symptom", "Unusual noise, door, display or control issue"],
  },
  solt: {
    dishwashers: ["Sôlt dishwasher not draining or accepting water", "Leak developing during a wash", "Poor cleaning or drying result", "Door latch, program or display symptom"],
    ovens: ["Sôlt oven not heating", "Temperature unstable or cooking unevenly", "Fan or heating element not operating", "Door, timer or control-panel issue"],
    cooktops: ["Cooking zone not heating", "Ignition issue on an applicable gas model", "Power or temperature control inconsistent", "Touch display, knob or switch problem"],
    microwaves: ["Sôlt microwave not heating", "Appliance not beginning a program", "Turntable or fan not operating normally", "Unexpected noise, display or keypad issue"],
  },
  stirling: {
    dishwashers: ["Stirling dishwasher leaving water after a cycle", "Fill problem or water leak", "Dishes not washing or drying properly", "Door, program or indicator fault"],
    ovens: ["Stirling oven not producing heat", "Set temperature not being maintained", "Fan or element problem", "Door, timer or function-control issue"],
    cooktops: ["Electric or induction zone not heating", "Gas ignition problem on an applicable release", "Heat output fluctuating", "Display, touch control or selector fault"],
    microwaves: ["Stirling microwave operating without heating", "Unit not starting", "Turntable or fan issue", "Unusual noise, display or button problem"],
  },
  technika: {
    dishwashers: ["Technika dishwasher not draining or filling", "Water leaking around the machine", "Poor wash or drying result", "Cycle, door-latch or control issue"],
    ovens: ["Technika oven not heating", "Temperature too high, low or uneven", "Fan or element function not working", "Door, timer or selector problem"],
    cooktops: ["Element or induction zone not heating", "Gas burner not igniting on an applicable cooktop", "Heat level difficult to control", "Display, knob or touch-control fault"],
    microwaves: ["Technika microwave not heating", "Built-in unit not starting", "Turntable, fan or operating-noise issue", "Door, display or control-panel fault"],
  },
  inalto: {
    dishwashers: ["InAlto dishwasher not draining or filling", "Leak occurring during a program", "Cleaning or drying performance declining", "Door, cycle or electronic-control problem"],
    ovens: ["InAlto oven not heating on the selected function", "Temperature inconsistent or overheating", "Fan or element not operating", "Door, timer, display or selector issue"],
    cooktops: ["Ceramic or induction zone not heating", "Gas ignition problem on an applicable model", "Temperature or power control fluctuating", "Touch display, knob or switch fault"],
    microwaves: ["InAlto microwave not heating", "Appliance not starting or cutting out", "Turntable or cooling-fan problem", "Unusual sound, display or keypad issue"],
  },
};

function brandFaqs(brand: BrandRepairData) {
  const services = readableList(categoryList(brand));

  return [
    brand.specificFaq,
    {
      question: `Which ${brand.name} appliances are covered?`,
      answer: brand.categories.length
        ? `This page covers ${services}. It does not extend Newcastle Appliance Experts' service scope beyond the appliance categories listed here.`
        : `No applicable service category is currently listed for this brand.`,
    },
    {
      question: `What information should I provide for a ${brand.name} appliance?`,
      answer: `Send the appliance type, full model number, a description of the symptom and any displayed code or indicator pattern. ${brand.modelGuidance}`,
    },
    {
      question: `Does a ${brand.name} error code identify the repair needed?`,
      answer:
        "An error code is useful context and can help us prepare, but it is not a confirmed diagnosis. Similar messages or symptoms can have different causes, so inspection and testing are needed. The appliance and repair type determine whether an on-site visit or workshop assessment is appropriate.",
    },
    {
      question: `Is Newcastle Appliance Experts affiliated with ${brand.name}?`,
      answer: `No manufacturer authorisation, approval, endorsement or affiliation with ${brand.name} is claimed. Repair enquiries are handled independently.`,
    },
  ];
}

export const dynamicParams = false;

export function generateStaticParams() {
  return brandRepairPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandRepairPage(slug);
  if (!brand) return {};

  const hasServices = brand.categories.length > 0;
  const title = hasServices
    ? `${brand.name} Appliance Repairs Newcastle`
    : `${brand.name} Appliance Service Information Newcastle`;
  const description = hasServices
    ? `Diagnosis and repair information for ${readableList(categoryList(brand))} across Newcastle and Lake Macquarie.`
    : `Current Newcastle Appliance Experts service-scope information for Chef appliances in Newcastle and Lake Macquarie.`;
  const metadata = createPageMetadata({
    title,
    description,
    path: `/brands/${slug}`,
    keywords: hasServices
      ? [`${brand.name} appliance repairs Newcastle`, `${brand.name} repairs Lake Macquarie`]
      : ["Chef appliance service Newcastle"],
  });

  metadata.title = { absolute: `${title} | Newcastle Appliance Experts` };
  return metadata;
}

export default async function BrandRepairPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandRepairPage(slug);
  if (!brand) notFound();

  const path = `/brands/${brand.slug}`;
  const hasServices = brand.categories.length > 0;
  const services = readableList(categoryList(brand));
  const title = hasServices
    ? `${brand.name} Appliance Repairs Newcastle`
    : `${brand.name} Appliance Service Information Newcastle`;
  const description = hasServices
    ? `Independent fault diagnosis and repair information for ${services} across Newcastle and Lake Macquarie.`
    : "An accurate explanation of how Newcastle Appliance Experts' current service categories relate to Chef appliances.";
  const faqs = brandFaqs(brand);
  const graph: Record<string, unknown>[] = [
    pageJsonLd({ name: title, description, path }),
    {
      "@type": "FAQPage",
      "@id": absoluteUrl(`${path}#faq`),
      name: `${brand.name} appliance repair frequently asked questions`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  if (hasServices) {
    graph.splice(1, 0, {
      "@type": "Service",
      "@id": absoluteUrl(`${path}#service`),
      name: `${brand.name} appliance repair`,
      serviceType: `${brand.name} ${services} repair`,
      description,
      url: absoluteUrl(path),
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Newcastle, NSW" },
        { "@type": "AdministrativeArea", name: "Lake Macquarie, NSW" },
      ],
    });
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />

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
          <Link href="/request-a-repair" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">
            Book a Repair
          </Link>
          <MobileNavigation />
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-sky-100 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">{title}</div>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              {hasServices ? `Practical help for your ${brand.name} appliance.` : "Clear information about our current service scope."}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">{brand.overview}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              {hasServices && (
                <Link href="/request-a-repair" className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700">
                  Book a {brand.name} Repair
                </Link>
              )}
              <Link href="/brands" className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-slate-950">
                View All Brands
              </Link>
            </div>
          </div>
        </div>
      </section>

      {hasServices ? (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">Relevant Repair Categories</div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{brand.name} appliances currently covered.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{brand.rangeContext}</p>
            </div>
            <div className={`mt-14 grid gap-6 ${brand.categories.length === 1 ? "max-w-2xl" : brand.categories.length === 2 ? "md:grid-cols-2" : "lg:grid-cols-3"}`}>
              {brand.categories.map((category, index) => {
                const details = categoryDetails[category];
                return (
                  <article key={category} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                    <div className="text-sm font-bold text-sky-600">{String(index + 1).padStart(2, "0")}</div>
                    <h3 className="mt-7 text-2xl font-bold">{brand.name} {details.title}</h3>
                    <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                      {(brand.symptoms[category] ?? additionalSymptoms[brand.slug]?.[category] ?? []).map((symptom) => (
                        <li key={symptom} className="flex gap-3"><span className="text-sky-600">✓</span><span>{symptom}</span></li>
                      ))}
                    </ul>
                    {category === "microwaves" && (
                      <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                        Microwave service is model-dependent. Do not remove the
                        casing because hazardous high voltage can remain inside.
                      </p>
                    )}
                    <Link href={details.href} className="mt-7 inline-block font-semibold text-sky-600 transition hover:text-sky-700">View service details →</Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-sky-100 bg-sky-50 p-8 sm:p-10">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">Service Scope</div>
              <h2 className="mt-4 text-3xl font-bold">No matching repair category is currently listed.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{brand.rangeContext}</p>
              <Link href="/#services" className="mt-7 inline-block font-semibold text-sky-600">View current appliance services →</Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">Service Preparation & Diagnosis</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Useful details first. Inspection before conclusions.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">{brand.diagnosticFocus}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Find the full model", brand.modelGuidance],
              ["02", "Record the symptom", "Note when the problem occurs, which function or compartment is affected, and any noise, leak, indicator or error code."],
              ["03", "Arrange assessment", "Suitable larger appliances can be inspected on-site. Small and portable appliances are generally assessed in our Warners Bay workshop after drop-off and check-in. We confirm the appropriate pathway and explain the findings after assessment."],
            ].map(([number, heading, text]) => (
              <article key={number} className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                <div className="text-sm font-bold text-sky-400">{number}</div>
                <h3 className="mt-8 text-2xl font-bold">{heading}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">Local Appliance Service</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Newcastle and Lake Macquarie coverage.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {hasServices ? `${brand.name} appliance repair enquiries are available` : "Current appliance service is available"} across Newcastle, Lake Macquarie and surrounding suburbs including Charlestown, Cardiff, Kotara, Adamstown, Wallsend, Mayfield, Belmont and Warners Bay.
            </p>
            <Link href="/service-areas" className="mt-7 inline-block font-semibold text-sky-600 transition hover:text-sky-700">Explore service areas →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {["Newcastle", "Charlestown", "Cardiff", "Kotara", "Belmont", "Warners Bay"].map((area) => (
              <div key={area} className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-semibold shadow-sm">{area}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">{brand.name} FAQs</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Useful questions before getting in touch.</h2>
          </div>
          <div className="mt-14 space-y-4">
            {faqs.map((item, index) => (
              <details key={item.question} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition open:border-sky-200 open:shadow-md sm:p-7">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-xl font-bold marker:content-none">
                  <span className="flex gap-4"><span className="mt-1 text-sm font-bold text-sky-600">{String(index + 1).padStart(2, "0")}</span>{item.question}</span>
                  <span className="text-2xl font-normal text-sky-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-5 pl-10 leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {hasServices && (
        <section className="pb-24">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <div className="rounded-[2rem] bg-sky-600 px-8 py-14 text-white sm:px-14">
              <h2 className="text-4xl font-bold tracking-tight">Need help with a {brand.name} appliance?</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">Send the appliance type, full model number, any error code and symptoms to help us determine the appropriate on-site or workshop service.</p>
              <Link href="/request-a-repair" className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-50">Request a Repair</Link>
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-slate-500">{brand.name} is a trademark of its respective owner. No manufacturer affiliation or endorsement is implied.</p>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
