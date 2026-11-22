"use client";

import SiteHeader from "@/components/site-header";

import { useState } from "react";
import Link from "next/link";
import { AttachmentInput, useRepairSubmission } from "@/components/repair-submission";
import SiteFooter from "@/components/site-footer";
import { supportedBrandNames } from "@/lib/brand-repair-data";
import {
  contactDetails,
} from "@/lib/contact";

const applianceTypes = [
  "Washing Machine",
  "Dryer",
  "Coffee Machine",
  "Fridge/Freezer",
  "Dishwasher",
  "Oven",
  "Cooktop",
  "Microwave",
] as const;

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100";
const labelClass = "block text-sm font-semibold text-slate-800";

function Optional() {
  return <span className="font-normal text-slate-500"> (optional)</span>;
}

export default function RequestARepairPage() {
  const [selectedBrand, setSelectedBrand] = useState("");

  const { handleSubmit, message: submitMessage, pending, sent, ready } = useRepairSubmission("repair", "Your repair enquiry has been sent. We’ll be in touch to discuss the next steps.", () => setSelectedBrand(""));

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute right-[-160px] top-[-180px] h-[520px] w-[520px] rounded-full bg-sky-100 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Request a Repair
            </div>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Tell us about your appliance.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Your enquiry helps us understand the job and determine the appropriate service pathway. Suitable larger appliances may need an on-site visit; small and portable appliances, including coffee machines, are generally assessed and repaired at our Warners Bay workshop. Sending an enquiry does not book a visit.
            </p>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-white p-6 text-sm leading-6 text-slate-600 shadow-sm">
            <p><span className="font-semibold text-slate-950">Required fields</span> are marked with an asterisk. Everything else can be left blank if you do not know it.</p>
            <p className="mt-3">Prefer to speak with someone? Call <a href={contactDetails.phoneHref} className="font-semibold text-sky-600 hover:text-sky-700">{contactDetails.phoneDisplay}</a>.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4 text-sm leading-6 text-sky-950">
            <span className="font-semibold">How submission works:</span> Send your repair details and any photos directly through this form.
          </div>

          <form method="post" action="/api/repair-submissions" encType="multipart/form-data" onSubmit={handleSubmit} className="space-y-10" noValidate={false}>
            <fieldset className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <legend className="px-2 text-2xl font-bold">Your contact details</legend>
              <div className="mt-3 grid gap-6 sm:grid-cols-2">
                <label className={labelClass}>Customer name *<input name="customerName" required autoComplete="name" className={inputClass} /></label>
                <label className={labelClass}>Mobile number *<input name="mobile" type="tel" required autoComplete="tel" inputMode="tel" className={inputClass} /></label>
                <label className={labelClass}>Email address *<input name="email" type="email" required autoComplete="email" className={inputClass} /></label>
                <label className={labelClass}>Suburb *<input name="suburb" required autoComplete="address-level2" className={inputClass} /></label>
                <label className={`${labelClass} sm:col-span-2`}>Street address<Optional /><input name="streetAddress" autoComplete="street-address" className={inputClass} /></label>
              </div>
            </fieldset>

            <fieldset className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <legend className="px-2 text-2xl font-bold">Appliance details</legend>
              <p className="mt-3 text-sm leading-6 text-slate-600">A photo of the identification label is often the easiest way to capture model and product details accurately. These details help with preparation but may not identify the underlying fault without inspection and testing.</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className={labelClass}>Appliance type *<select name="applianceType" required defaultValue="" className={inputClass}><option value="" disabled>Select an appliance</option>{applianceTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
                <label className={labelClass}>Brand *<select name="brand" required value={selectedBrand} onChange={(event) => setSelectedBrand(event.target.value)} className={inputClass}><option value="" disabled>Select a brand</option>{supportedBrandNames.map((brand) => <option key={brand}>{brand}</option>)}<option>Other / Brand not listed</option></select></label>
                {selectedBrand === "De’Longhi" && <p role="status" className="sm:col-span-2 rounded-xl bg-sky-50 p-3 font-normal leading-6 text-slate-700">For authorised De’Longhi service, use the <Link href="/brands/delonghi#delonghi-service-form" className="font-semibold text-sky-700 underline">dedicated De’Longhi service form</Link>.</p>}
                <label className={labelClass}>Model number<Optional /><input name="modelNumber" className={inputClass} /></label>
                <label className={labelClass}>Serial number<Optional /><input name="serialNumber" className={inputClass} /></label>
                <label className={labelClass}>Variant / PNC / product code<Optional /><input name="productCode" className={inputClass} /></label>
                <label className={labelClass}>Approximate age<Optional /><input name="approximateAge" placeholder="For example, 5 years" className={inputClass} /></label>
              </div>
            </fieldset>

            <fieldset className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <legend className="px-2 text-2xl font-bold">What is going wrong?</legend>
              <div className="mt-3 grid gap-6 sm:grid-cols-2">
                <label className={labelClass}>Error code<Optional /><input name="errorCode" className={inputClass} /></label>
                <label className={labelClass}>When the fault started<Optional /><input name="faultStarted" placeholder="For example, yesterday or two weeks ago" className={inputClass} /></label>
                <label className={`${labelClass} sm:col-span-2`}>Detailed fault description *<textarea name="faultDescription" required rows={6} placeholder="Describe what happens, when it happens, and any noises, smells, leaks or display messages." className={inputClass} /></label>
                <label className={`${labelClass} sm:col-span-2`}>Anything already tried<Optional /><textarea name="alreadyTried" rows={4} placeholder="For example, power reset, filter cleaned or appliance moved." className={inputClass} /></label>
              </div>
            </fieldset>

            <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-sky-500" />
                <span>I consent to Newcastle Appliance Experts using the information I provide to respond to this repair enquiry and arrange service. Please do not include sensitive personal information. *</span>
              </label>
              <AttachmentInput />
              <p className="mt-4 text-sm leading-6 text-slate-300">
                We use the details and files you send to handle your repair. Read our{" "}
                <Link href="/privacy-policy" className="text-sky-300 underline">Privacy Policy</Link>.
              </p>
              <noscript><p className="mt-3 text-sm text-amber-200">Online submission requires JavaScript. Please call us to arrange service.</p></noscript>
              <button type="submit" disabled={!ready || pending} className="mt-6 rounded-full bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-500 disabled:opacity-60">
                {pending ? "Sending…" : "Submit Repair Enquiry"}
              </button>
              {submitMessage && (
                <div role={sent ? "status" : "alert"} className="mt-6 rounded-2xl border border-amber-400/40 bg-amber-300/10 p-5 text-sm leading-6 text-amber-100">
                  <p>{submitMessage}</p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-5">
                    <a href={contactDetails.phoneHref} className="font-semibold text-white underline">Call {contactDetails.phoneDisplay}</a>
                    <a href={contactDetails.emailHref} className="break-all font-semibold text-white underline">Email {contactDetails.email}</a>
                  </div>
                </div>
              )}
              <p className="mt-5 text-sm text-slate-400">Alternatively, email <a href={contactDetails.emailHref} className="text-sky-400 underline">{contactDetails.email}</a> directly or call <a href={contactDetails.phoneHref} className="text-sky-400 underline">{contactDetails.phoneDisplay}</a>.</p>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
