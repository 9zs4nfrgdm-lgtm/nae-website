import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { pageJsonLd } from "@/lib/structured-data";

const title = "About Newcastle Appliance Experts";
const description =
  "Learn about Newcastle Appliance Experts' diagnosis-first approach, clear communication and local appliance repair service across Newcastle and Lake Macquarie.";
const path = "/about";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: ["Newcastle Appliance Experts", "local appliance repair Newcastle"],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          type: "AboutPage",
          name: title,
          description,
          path,
        })}
      />
      {children}
    </>
  );
}
