import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { lgRepairFaqs } from "@/lib/lg-repair-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { businessId, pageJsonLd } from "@/lib/structured-data";

const title = "LG Appliance Repairs Newcastle";
const description =
  "Diagnosis and repair for applicable LG laundry, refrigeration, dishwasher, oven, cooktop and microwave appliances across Newcastle and Lake Macquarie.";
const path = "/brands/lg";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "LG appliance repairs Newcastle",
    "LG washing machine repairs Newcastle",
    "LG dryer repairs Newcastle",
    "LG fridge repairs Lake Macquarie",
  ],
});

metadata.title = {
  absolute: `${title} | Newcastle Appliance Experts`,
};

export default function LgRepairsLayout({ children }: { children: ReactNode }) {
  const questions = lgRepairFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  }));

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
              name: "LG appliance repair",
              serviceType: "LG household appliance repair",
              description,
              url: absoluteUrl(path),
              provider: { "@id": businessId },
              areaServed: [
                { "@type": "City", name: "Newcastle, NSW" },
                {
                  "@type": "AdministrativeArea",
                  name: "Lake Macquarie, NSW",
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": absoluteUrl(`${path}#faq`),
              url: absoluteUrl(`${path}#faq`),
              name: "LG appliance repair frequently asked questions",
              mainEntity: questions,
            },
          ],
        }}
      />
      {children}
    </>
  );
}
