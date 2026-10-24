import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { pageJsonLd } from "@/lib/structured-data";

const title = "Request an Appliance Repair";
const description =
  "Send an appliance repair enquiry in Newcastle or Lake Macquarie. Appliance and fault details help us confirm the appropriate on-site or workshop service.";
const path = "/request-a-repair";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "book appliance repair Newcastle",
    "request appliance repair Newcastle",
    "appliance repair enquiry Lake Macquarie",
  ],
});

export default function RequestARepairLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          type: "ContactPage",
          name: title,
          description,
          path,
        })}
      />
      {children}
    </>
  );
}
