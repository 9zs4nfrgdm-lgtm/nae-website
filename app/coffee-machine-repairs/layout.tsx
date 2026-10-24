import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";

const title = "Coffee Machine Repairs Newcastle";
const description =
  "De’Longhi coffee machine servicing and repairs in Newcastle and Lake Macquarie from a De’Longhi Authorised Service Centre.";
const path = "/coffee-machine-repairs";

export const metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "coffee machine repairs Newcastle",
    "DeLonghi coffee machine service Newcastle",
    "automatic coffee machine repairs Newcastle",
  ],
});

export default function CoffeeMachineRepairsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: title,
          description,
          path,
          serviceType: "De’Longhi coffee machine servicing and repair",
          brand: "De’Longhi",
        })}
      />
      {children}
    </>
  );
}
