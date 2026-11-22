import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { businessId, pageJsonLd } from "@/lib/structured-data";

const title = "De’Longhi Authorised Service Centre Newcastle";
const description =
  "Newcastle Appliance Experts is a De’Longhi Authorised Service Centre providing authorised repairs and servicing for eligible De’Longhi products.";
const path = "/brands/delonghi";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "DeLonghi authorised service centre Newcastle",
    "DeLonghi coffee machine repairs Newcastle",
    "DeLonghi warranty service Newcastle",
  ],
});

export default function DelonghiLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            pageJsonLd({ name: title, description, path }),
            {
              "@type": "Service",
              "@id": absoluteUrl(`${path}#service`),
              name: "De’Longhi authorised servicing and repairs",
              description,
              url: absoluteUrl(path),
              provider: { "@id": businessId },
              brand: { "@type": "Brand", name: "De’Longhi" },
              areaServed: [
                { "@type": "City", name: "Newcastle, NSW" },
                { "@type": "AdministrativeArea", name: "Lake Macquarie, NSW" },
              ],
            },
          ],
        }}
      />
      {children}
    </>
  );
}
