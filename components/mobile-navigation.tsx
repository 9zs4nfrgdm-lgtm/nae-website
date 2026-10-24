"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { contactDetails } from "@/lib/contact";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const container = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <div
      ref={container}
      className="order-2 lg:hidden"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-950 transition hover:border-sky-600 hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600"
      >
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
      <nav
        id={panelId}
        aria-label="Mobile navigation"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[70dvh] overflow-y-auto border-b border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 shadow-lg"
      >
        <ul className="mx-auto max-w-7xl space-y-1">
          {[
            ["Services", "/#services"],
            ["Brands", "/brands"],
            ["Service Areas", "/service-areas"],
            ["About", "/about"],
            ["FAQ", "/faq"],
            ["Request a Repair", "/request-a-repair"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-sky-600">{label}</Link>
            </li>
          ))}
          <li><a href={contactDetails.phoneHref} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sky-700 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-sky-600">Call {contactDetails.phoneDisplay}</a></li>
        </ul>
      </nav>
    </div>
  );
}
