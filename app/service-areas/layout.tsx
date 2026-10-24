import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { pageJsonLd } from "@/lib/structured-data";

const title = "Appliance Repair Service Areas";
const description =
  "Household appliance repair service areas across Newcastle, Lake Macquarie and surrounding suburbs.";
const path = "/service-areas";
const areas = [
  "Newcastle",
  "Adamstown",
  "Broadmeadow",
  "Hamilton",
  "Kotara",
  "Lambton",
  "Mayfield",
  "Merewether",
  "New Lambton",
  "Wallsend",
  "Argenton",
  "Belmont",
  "Boolaroo",
  "Booragul",
  "Cardiff",
  "Charlestown",
  "Edgeworth",
  "Eleebana",
  "Fassifern",
  "Fennell Bay",
  "Gateshead",
  "Glendale",
  "Jewells",
  "Mount Hutton",
  "Redhead",
  "Speers Point",
  "Swansea",
  "Teralba",
  "Toronto",
  "Valentine",
  "Warners Bay",
];

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "appliance repairs Newcastle suburbs",
    "appliance repairs Lake Macquarie",
    "local appliance repair Newcastle",
  ],
});

export default function ServiceAreasLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            pageJsonLd({ type: "CollectionPage", name: title, description, path }),
            {
              "@type": "ItemList",
              "@id": absoluteUrl(`${path}#areas`),
              name: "Appliance repair service areas",
              itemListElement: areas.map((name, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: { "@type": "Place", name: `${name}, NSW` },
              })),
            },
          ],
        }}
      />
      {children}
    </>
  );
}
