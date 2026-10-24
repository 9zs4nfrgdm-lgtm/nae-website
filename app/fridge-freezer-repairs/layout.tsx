import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";

const title = "Fridge & Freezer Repairs Newcastle";
const description =
  "Professional diagnosis of fridge and freezer cooling, icing, temperature and electrical faults across Newcastle and Lake Macquarie.";
const path = "/fridge-freezer-repairs";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "fridge repairs Newcastle",
    "freezer repairs Newcastle",
    "fridge repairs Lake Macquarie",
  ],
});

export default function FridgeFreezerRepairsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: title,
          description,
          path,
          serviceType: "Fridge and freezer repair",
        })}
      />
      {children}
    </>
  );
}
