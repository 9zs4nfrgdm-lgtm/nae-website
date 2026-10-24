import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { pageJsonLd } from "@/lib/structured-data";

const title = "Other Appliance Brands";
const description =
  "Brand not listed? Send Newcastle Appliance Experts the appliance brand, type, model and fault so service suitability can be confirmed.";
const path = "/brands/other";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "other appliance brands Newcastle",
    "appliance brand repair enquiry Newcastle",
  ],
});

export default function OtherBrandsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            pageJsonLd({ name: title, description, path }),
            {
              "@type": "BreadcrumbList",
              "@id": absoluteUrl(`${path}#breadcrumbs`),
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Brands", item: absoluteUrl("/brands") },
                { "@type": "ListItem", position: 3, name: "Other Brands", item: absoluteUrl(path) },
              ],
            },
          ],
        }}
      />
      {children}
    </>
  );
}
