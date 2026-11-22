import Image from "next/image";
import { contactDetails } from "@/lib/contact";
import JsonLd from "@/components/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { pageJsonLd } from "@/lib/structured-data";
import MobileNavigation from "@/components/mobile-navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

const title = "Appliance Brands We Repair";
const description = "View household appliance brands serviced by Newcastle Appliance Experts across Newcastle and Lake Macquarie.";
const path = "/brands";

const authorisedBrands = [
  {
    name: "De’Longhi",
    logo: "delonghi-logo.webp",
    product: "delonghi-eletta-ultra.webp",
    alt: "De’Longhi Eletta Ultra coffee machine",
    description: "Register a repair for a coffee machine or other eligible De’Longhi product.",
    href: "/brands/delonghi#delonghi-service-form",
    action: "Register a De’Longhi repair",
  },
  {
    name: "Kenwood",
    logo: "kenwood-logo.webp",
    product: "kenwood-titanium-chef-baker.webp",
    alt: "Kenwood Titanium Chef Baker stand mixer",
    description: "Call with your Kenwood model number to confirm service options.",
    href: contactDetails.phoneHref,
    action: "Call about a Kenwood repair",
  },
  {
    name: "Braun",
    logo: "braun-logo.webp",
    product: "braun-multiquick-7.webp",
    alt: "Braun MultiQuick 7 hand blender with attachments",
    description: "Call with your Braun household appliance model number to confirm service options.",
    href: contactDetails.phoneHref,
    action: "Call about a Braun repair",
  },
];

const brands = [
  "LG",
  "Westinghouse",
  "Vintec",
  "Electrolux",
  "AEG",
  "Simpson",
  "Beko",
  "Fisher & Paykel",
  "Haier",
  "Chef",
  "Hisense",
  "Kelvinator",
  "Kogan",
  "Panasonic",
  "Solt",
  "Stirling",
  "Technika",
  "InAlto",
];

const repairServices = [
  ["Washing Machine Repairs", "/washing-machine-repairs"],
  ["Dryer Repairs", "/dryer-repairs"],
  ["Coffee Machine Repairs", "/coffee-machine-repairs"],
  ["Fridge & Freezer Repairs", "/fridge-freezer-repairs"],
  ["Dishwasher Repairs", "/dishwasher-repairs"],
  ["Oven Repairs", "/oven-repairs"],
  ["Cooktop Repairs", "/cooktop-repairs"],
  ["Microwave Repairs", "/microwave-repairs"],
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            pageJsonLd({ type: "CollectionPage", name: title, description, path }),
            {
              "@type": "ItemList",
              "@id": absoluteUrl(`${path}#brands`),
              name: "Supported appliance brands",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "De’Longhi — Authorised Service Centre",
                  url: absoluteUrl("/brands/delonghi"),
                },
                ...brands.map((name, index) => ({
                  "@type": "ListItem",
                  position: index + 2,
                  name,
                  url: absoluteUrl(
                    `/brands/${name.toLowerCase().replace(" & ", "-").replaceAll(" ", "-")}`,
                  ),
                })),
                {
                  "@type": "ListItem",
                  position: brands.length + 2,
                  name: "Other appliance brands",
                  url: absoluteUrl("/brands/other"),
                },
              ],
            },
          ],
        }}
      />

      {/* HEADER */}
      <header className="site-header sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <Link href="/">
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
            <Link href="/#areas" className="transition hover:text-sky-600">
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-sky-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Appliance Brands
            </div>

            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Brands we repair.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Newcastle Appliance Experts services a range of major household
              appliance brands across Newcastle and Lake Macquarie.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND GRID */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <section aria-labelledby="authorised-brands" className="mb-16">
            <h2 id="authorised-brands" className="text-4xl font-bold tracking-tight">Authorised service brands</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {authorisedBrands.map(({ name, logo, product, alt, description, href, action }) => (
                <article key={name} className="flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="flex h-10 items-center">
                    <span className="sr-only">{name}</span>
                    <Image src={`/brand-art/${logo}`} alt="" width={160} height={40} unoptimized className="h-full w-auto max-w-36 object-contain" />
                  </h3>
                  <Image src={`/brand-art/${product}`} alt={alt} width={320} height={320} unoptimized className="mt-4 h-48 w-full object-contain" />
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
                  <Link href={href} className="mt-4 inline-block font-semibold text-sky-700 underline underline-offset-4">{action}</Link>
                </article>
              ))}
            </div>
          </section>
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Supported Manufacturers
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Familiar with appliances from leading brands.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Brand and model information helps us identify the appliance and
              confirm the appropriate service. Suitable larger appliances can be
              assessed on-site, while small and portable appliances are generally
              assessed and repaired at our Warners Bay workshop.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand) => {
              const slug = brand
                .toLowerCase()
                .replace(" & ", "-")
                .replaceAll(" ", "-");

              return (
                <Link
                  key={brand}
                  href={`/brands/${slug}`}
                  className="group flex min-h-32 items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
                  aria-label={`View ${brand} appliance repair information`}
                >
                  <span className="text-xl font-bold tracking-tight text-slate-800 transition group-hover:text-sky-600">
                    {brand}
                  </span>
                </Link>
              );
            })}
            <Link
              href="/brands/other"
              className="group flex min-h-32 flex-col items-center justify-center rounded-3xl border border-dashed border-sky-300 bg-sky-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-lg"
              aria-label="Brand not listed? View other brand enquiry information"
            >
              <span className="text-2xl font-bold text-sky-600">+ More</span>
              <span className="mt-2 text-sm font-semibold text-slate-700 transition group-hover:text-sky-700">
                Brand not listed?
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Our Current Services
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Eight appliance service categories.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our repair scope includes laundry, refrigeration, dishwashing,
              coffee machines and cooking appliances. Send your brand and model
              details so we can confirm service suitability for your appliance.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {repairServices.map(([title, href], index) => (
              <Link key={href} href={href} className="rounded-3xl border border-slate-800 bg-slate-900 p-7 transition hover:border-sky-500">
                <div className="text-sm font-bold text-sky-400">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                <div className="mt-6 font-semibold text-sky-400">View service →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold">
              Don&apos;t see your brand listed?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Get in touch with the brand and model number of your appliance.
              We can confirm whether we can assist with your particular
              appliance before arranging a service.
            </p>
            <Link href="/brands/other" className="mt-6 inline-block font-semibold text-sky-600 transition hover:text-sky-700">
              Send details for another brand →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="rounded-[2rem] bg-sky-600 px-8 py-14 text-white sm:px-14">
            <h2 className="text-4xl font-bold tracking-tight">
              Need an appliance repaired?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">
              Tell us the appliance type, brand, model and symptoms so we can
              understand the job and confirm the appropriate service pathway.
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
