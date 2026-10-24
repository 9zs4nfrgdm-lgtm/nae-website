import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";

const title = "Washing Machine Repairs Newcastle";
const description =
  "Professional washing machine fault diagnosis and repair across Newcastle and Lake Macquarie for front loaders, top loaders and washer-dryer combinations.";
const path = "/washing-machine-repairs";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "washing machine repairs Newcastle",
    "washing machine repairs Lake Macquarie",
    "washer repair Newcastle",
  ],
});

export default function WashingMachineRepairsLayout({
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
          serviceType: "Washing machine repair",
        })}
      />
      {children}
    </>
  );
}
