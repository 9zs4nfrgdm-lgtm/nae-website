import Link from "next/link";
import { contactDetails, workshopDetails } from "@/lib/contact";

type SiteFooterProps = {
  variant?: "dark" | "light";
  showNavigation?: boolean;
};

export default function SiteFooter({
  variant = "dark",
  showNavigation = false,
}: SiteFooterProps) {
  if (variant === "light") {
    return (
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-950">Newcastle Appliance Experts</p>
            <p className="mt-2">{workshopDetails.address}</p>
            <p className="mt-1">{workshopDetails.hours}</p>
            <p className="mt-1 text-xs text-slate-500">ABN 50 692 960 704</p>
            <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:gap-4">
              <a href={contactDetails.phoneHref} className="transition hover:text-sky-600">
                {contactDetails.phoneDisplay}
              </a>
              <a href={contactDetails.emailHref} className="break-all transition hover:text-sky-600">
                {contactDetails.email}
              </a>
            </div>
          </div>
          {showNavigation && (
            <div className="flex flex-wrap gap-5">
              <Link href="/brands">Brands</Link>
              <Link href="/service-areas">Service Areas</Link>
              <Link href="/about">About</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          )}
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <img
            src="/nae-logo.png"
            alt="Newcastle Appliance Experts"
            className="h-16 w-auto rounded-xl bg-white object-contain px-3 py-2"
          />
          <div className="text-sm text-slate-400 sm:text-right">
            <p className="font-semibold text-white">Newcastle Appliance Experts</p>
            <p className="mt-1">{workshopDetails.address}</p>
            <p className="mt-1">{workshopDetails.hours}</p>
            <p className="mt-1 text-xs text-slate-500">ABN 50 692 960 704</p>
            <a href={contactDetails.phoneHref} className="mt-2 block transition hover:text-sky-400">
              {contactDetails.phoneDisplay}
            </a>
            <a href={contactDetails.emailHref} className="mt-1 block break-all transition hover:text-sky-400">
              {contactDetails.email}
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © 2026 Newcastle Appliance Experts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
