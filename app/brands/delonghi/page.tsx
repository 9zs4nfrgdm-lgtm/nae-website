"use client";

import MobileNavigation from "@/components/mobile-navigation";

import { FormEvent, useState } from "react";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import {
  contactDetails,
  workshopDetails,
  createDelonghiServiceEmailHref,
  type DelonghiServiceRequestDetails,
} from "@/lib/contact";

const productTypes = [
  "Manual espresso coffee machine",
  "Automatic / bean-to-cup coffee machine",
  "Capsule coffee machine",
  "Coffee grinder or accessory",
  "Other De’Longhi product",
] as const;

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100";
const labelClass = "block text-sm font-semibold text-slate-800";

function Optional() {
  return <span className="font-normal text-slate-500"> (optional)</span>;
}

export default function DelonghiPage() {
  const [submitMessage, setSubmitMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = (name: string) => String(formData.get(name) ?? "").trim();
    const request: DelonghiServiceRequestDetails = {
      customerName: value("customerName"),
      mobile: value("mobile"),
      customerEmail: value("email"),
      suburb: value("suburb"),
      streetAddress: value("streetAddress"),
      productType: value("productType"),
      modelNumber: value("modelNumber"),
      serialNumber: value("serialNumber"),
      serviceType: value("serviceType"),
      faultDescription: value("faultDescription"),
      purchaseDate: value("purchaseDate"),
      purchasedFrom: value("purchasedFrom"),
      crmNumber: value("crmNumber"),
      errorCode: value("errorCode"),
      otherInformation: value("otherInformation"),
    };

    setSubmitMessage(
      "Your email app should open with your De’Longhi repair registration. Nothing has been sent yet—review the message, attach your supporting documents and photos, then press Send.",
    );
    window.location.href = createDelonghiServiceEmailHref(request);
  }

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
          <a href="#delonghi-service-form" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">Register a Repair</a>
          <MobileNavigation />
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute right-[-180px] top-[-180px] h-[540px] w-[540px] rounded-full bg-sky-700/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Authorised De’Longhi Repairs &amp; Servicing
            </div>
            <h1 className="mt-7 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              De’Longhi Authorised Service Centre
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Newcastle Appliance Experts is a De’Longhi Authorised Service Centre, providing authorised repairs and servicing for De’Longhi products across Newcastle and Lake Macquarie.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#delonghi-service-form" className="rounded-full bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-500">Register Your De’Longhi Repair</a>
              <Link href="/coffee-machine-repairs" className="rounded-full border border-slate-600 px-7 py-4 font-semibold transition hover:border-sky-400">Coffee Machine Repairs</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">De’Longhi Product Service</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Coffee machines and other De’Longhi products.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>We provide authorised repairs and servicing for De’Longhi products, including coffee machines and other appliances.</p>
            <p>This includes automatic coffee machines, manual espresso machines, bean-to-cup machines and other De’Longhi products.</p>
            <p>Customers can register warranty and out-of-warranty repairs. Product, purchase and fault details help us prepare. Products suitable for workshop servicing are generally assessed and repaired at our Warners Bay workshop after drop-off and check-in; assessment is not necessarily carried out at drop-off.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">How it works</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">A straightforward registration and drop-off process.</h2>
          </div>
          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="text-xl font-bold">Workshop drop-off</h3>
            <p className="mt-3">{workshopDetails.address}</p>
            <p className="mt-2">{workshopDetails.hours}</p>
            <p className="mt-3 leading-7 text-slate-300">Once you have sent your registration email, you can drop off your product without an appointment or waiting for your job number.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Register your repair", "Provide your contact, product, purchase and fault details online."],
              ["02", "Send your details & documents", "Your email app opens with the details populated. Send the email after attaching proof of purchase, the model/serial label and any relevant photos or documents."],
              ["03", "Drop off your product", `Once the email has been sent, bring your De’Longhi product to ${workshopDetails.address}, ${workshopDetails.hours}. No appointment or phone call is required, and there is no need to wait for a job number.`],
              ["04", "Receive your job number", "Newcastle Appliance Experts will email your confirmation and job number within a few hours during business hours, or the next business day for registrations received outside business hours."],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                <div className="text-sm font-bold text-sky-400">{number}</div>
                <h3 className="mt-7 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="delonghi-service-form" className="scroll-mt-28 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">Dedicated Repair Registration</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Register Your De’Longhi Repair</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Required fields are marked with an asterisk. Details supplied here help us prepare and do not replace inspection or diagnosis. For workshop repairs, assessment takes place after drop-off and check-in.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-8">
            <fieldset className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <legend className="px-2 text-2xl font-bold">Customer details</legend>
              <div className="mt-3 grid gap-6 sm:grid-cols-2">
                <label className={labelClass}>Customer name *<input name="customerName" required autoComplete="name" className={inputClass} /></label>
                <label className={labelClass}>Mobile number *<input name="mobile" required type="tel" inputMode="tel" autoComplete="tel" className={inputClass} /></label>
                <label className={labelClass}>Email address *<input name="email" required type="email" autoComplete="email" className={inputClass} /></label>
                <label className={labelClass}>Suburb *<input name="suburb" required autoComplete="address-level2" className={inputClass} /></label>
                <label className={`${labelClass} sm:col-span-2`}>Street address<Optional /><input name="streetAddress" autoComplete="street-address" className={inputClass} /></label>
              </div>
            </fieldset>

            <fieldset className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <legend className="px-2 text-2xl font-bold">Product details</legend>
              <div className="mt-3 grid gap-6 sm:grid-cols-2">
                <label className={labelClass}>De’Longhi product type *<select name="productType" required defaultValue="" className={inputClass}><option value="" disabled>Select a product type</option>{productTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
                <label className={labelClass}>Model number *<input name="modelNumber" required className={inputClass} /></label>
                <label className={labelClass}>Serial number<Optional /><input name="serialNumber" className={inputClass} /></label>
              </div>
            </fieldset>

            <fieldset className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <legend className="px-2 text-2xl font-bold">Repair details</legend>
              <div className="mt-3 grid gap-6 sm:grid-cols-2">
                <label className={labelClass}>Repair type *<select name="serviceType" required defaultValue="" className={inputClass}><option value="" disabled>Select a repair type</option><option>Warranty repair</option><option>Out-of-warranty repair</option><option>Not sure</option></select></label>
                <label className={labelClass}>Date of purchase<Optional /><input name="purchaseDate" type="date" className={inputClass} /></label>
                <label className={labelClass}>Purchased from<Optional /><input name="purchasedFrom" className={inputClass} /></label>
                <label className={labelClass}>De’Longhi CRM number<Optional /><input name="crmNumber" className={inputClass} /></label>
                <label className={labelClass}>Error code, if applicable<Optional /><input name="errorCode" className={inputClass} /></label>
                <label className={`${labelClass} sm:col-span-2`}>Detailed fault description *<textarea name="faultDescription" required rows={6} className={inputClass} placeholder="Describe what the product is doing, when the issue occurs and any displayed message." /></label>
                <label className={`${labelClass} sm:col-span-2`}>Any other relevant information<Optional /><textarea name="otherInformation" rows={4} className={inputClass} /></label>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-500">Selecting Warranty repair records the requested repair pathway; it does not by itself confirm warranty coverage. You do not need to have contacted De’Longhi before registering your repair here.</p>
            </fieldset>

            <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <div className="rounded-2xl border border-sky-400/30 bg-sky-400/10 p-5">
                <h3 className="text-lg font-bold">Supporting documents &amp; photos</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">After completing your repair registration, your email app will open with your repair details filled in. Before sending, please attach your proof of purchase (receipt or invoice), a clear photo of the model/serial label, and any other relevant photos or documents to the prepared email to <a href={contactDetails.emailHref} className="break-all text-sky-300 underline">{contactDetails.email}</a>.</p>
                <p className="mt-3 text-sm font-semibold text-sky-300">For warranty repairs, please attach proof of purchase if available. You can still continue the registration if you do not currently have it.</p>
              </div>
              <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-300">
                <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-sky-500" />
                <span>I consent to Newcastle Appliance Experts using the information provided to register this De’Longhi repair and arrange service. *</span>
              </label>
              <button type="submit" className="mt-6 rounded-full bg-sky-600 px-8 py-4 font-semibold transition hover:bg-sky-500">Continue Repair Registration</button>
              {submitMessage && <p role="alert" className="mt-5 rounded-2xl border border-amber-400/40 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">{submitMessage}</p>}
              <p className="mt-5 text-sm text-slate-400">Prefer to call? <a href={contactDetails.phoneHref} className="text-sky-400 underline">{contactDetails.phoneDisplay}</a></p>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-sky-200 bg-sky-50 p-8 sm:p-12">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">What happens next?</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Repair confirmation</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">We&apos;ll email you a confirmation with your job number within a few hours during business hours, or the next business day if you register outside business hours. You don&apos;t need to wait for your job number before dropping off your appliance — once you&apos;ve sent your repair details, you&apos;re welcome to bring it in during business hours.</p>
            <p className="mt-5 rounded-2xl bg-white p-5 font-semibold leading-7 text-slate-950">Your job number is sent separately by Newcastle Appliance Experts after we receive your registration email. The website does not generate it, and no appointment or phone call is required before drop-off.</p>
          </div>
        </div>
      </section>

      <section id="after-drop-off" className="scroll-mt-28 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">Workshop repair journey</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">What happens after drop-off?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Once your product has been checked in, we&apos;ll keep you informed as your repair progresses. We&apos;ll contact you when there&apos;s a meaningful update, if we need further information or approval, and when your repair is ready for collection.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {[
              ["01", "Product received", "Your product is checked into the workshop and matched to your repair and job number."],
              ["02", "Workshop assessment", "Our technician assesses the product in the workshop and determines what is required to complete the repair."],
              ["03", "Approval or parts, if required", "Depending on the repair, we may contact you for further information or approval, or let you know if parts are required."],
              ["04", "Repair", "Once the required parts and approvals are in place, the repair is completed and tested as appropriate."],
              ["05", "Ready for collection", "We'll contact you when your repair is complete and ready for collection. Collect your product from our Warners Bay workshop during opening hours."],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                <div className="text-sm font-bold text-sky-400">{number}</div>
                <h3 className="mt-7 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 leading-7 text-slate-300">We provide updates when there is a meaningful change to your repair rather than sending unnecessary progress messages while a job is still being assessed or waiting on parts. Your job number is your reference throughout the repair and is sent separately by Newcastle Appliance Experts after registration.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
