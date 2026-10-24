import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

const title = "Appliance Brands We Repair";
const description =
  "View household appliance brands serviced by Newcastle Appliance Experts across Newcastle and Lake Macquarie.";
const path = "/brands";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: ["appliance brands repaired Newcastle", "appliance repair brands Lake Macquarie"],
});

export default function BrandsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
