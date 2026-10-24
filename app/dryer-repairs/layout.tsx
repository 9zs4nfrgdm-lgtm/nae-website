import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";

const title = "Dryer Repairs Newcastle";
const description =
  "Professional fault diagnosis and repair for heat pump, condenser and vented dryers across Newcastle and Lake Macquarie.";
const path = "/dryer-repairs";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "dryer repairs Newcastle",
    "dryer repairs Lake Macquarie",
    "heat pump dryer repair Newcastle",
  ],
});

export default function DryerRepairsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: title,
          description,
          path,
          serviceType: "Clothes dryer repair",
        })}
      />
      {children}
    </>
  );
}
