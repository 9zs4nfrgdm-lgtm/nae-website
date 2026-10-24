import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { faqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/seo";
import { pageJsonLd } from "@/lib/structured-data";

const title = "Appliance Repair FAQs";
const description =
  "Answers to common questions about household appliance repairs across Newcastle and Lake Macquarie.";
const path = "/faq";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "appliance repair FAQ Newcastle",
    "washing machine repair questions",
    "dryer fridge freezer repair Newcastle",
  ],
});

export default function FaqLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          ...pageJsonLd({ type: "FAQPage", name: title, description, path }),
          mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
        }}
      />
      {children}
    </>
  );
}
