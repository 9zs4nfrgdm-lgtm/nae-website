import type { ReactNode } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="bg-slate-50 px-6 py-16 text-slate-950 sm:py-24 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <div className="mt-8 space-y-8 leading-7 text-slate-700 [&_a]:text-sky-800 [&_a]:underline [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-950 [&_p+p]:mt-3">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
