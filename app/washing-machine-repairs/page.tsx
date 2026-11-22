import MobileNavigation from "@/components/mobile-navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

export default function WashingMachineRepairsPage() {
  const faults = [
    "Not draining",
    "Not spinning",
    "Leaking water",
    "Making unusual noises",
    "Not filling with water",
    "Door or lid faults",
    "Error codes",
    "Shaking or moving excessively",
    "Not completing cycles",
    "Electrical or control faults",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="site-header border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/">
            <img
              src="/nae-logo.png"
              alt="Newcastle Appliance Experts"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <Link
            href="/request-a-repair"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Request a Repair
          </Link>
          <MobileNavigation />
        </div>
      </header>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Newcastle Washing Machine Repairs
            </div>

            <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Washing machine repairs across Newcastle.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Professional diagnosis and repair for front loaders, top loaders
              and washer-dryer combinations throughout Newcastle and Lake
              Macquarie.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-a-repair"
                className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700"
              >
                Request a Repair
              </Link>

              <Link
                href="/"
                className="rounded-full border border-slate-300 px-7 py-4 font-semibold transition hover:border-slate-950"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Common washing machine faults
            </h2>

            <div className="mt-8 grid gap-4">
              {faults.map((fault) => (
                <div
                  key={fault}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-medium shadow-sm"
                >
                  {fault}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              What to send us
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Brand, model and symptom details help us understand the job and
              prepare for the visit. The technician generally diagnoses the
              fault on-site through inspection and testing.
            </p>

            <div className="mt-8 space-y-5">
              {[
                ["01", "Brand", "For example Samsung, LG, Electrolux or Bosch."],
                [
                  "02",
                  "Model number",
                  "Usually found on a label inside the door, lid or rear of the appliance.",
                ],
                [
                  "03",
                  "Fault description",
                  "Tell us what the machine is doing, or not doing.",
                ],
                [
                  "04",
                  "Error code",
                  "If a code is displayed, include it in your enquiry.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="text-sm font-bold text-sky-600">{number}</div>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Local Appliance Repair
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Washing machine repairs throughout Newcastle and Lake Macquarie.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Servicing Newcastle, Charlestown, Cardiff, Kotara, Adamstown,
              Wallsend, Mayfield, Belmont, Warners Bay and surrounding suburbs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight">
            Need your washing machine repaired?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us the brand, model and symptoms to help us prepare. A technician
            can inspect and diagnose the washing machine on-site.
          </p>

          <Link
            href="/request-a-repair"
            className="mt-8 inline-block rounded-full bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700"
          >
            Request a Repair
          </Link>
        </div>
      </section>
      <SiteFooter variant="light" />
    </main>
  );
}
