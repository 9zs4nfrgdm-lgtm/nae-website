import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";

const title = "Dishwasher Repairs Newcastle";
const description = "Dishwasher fault diagnosis and repair across Newcastle and Lake Macquarie for draining, filling, leaking, cleaning, heating and control symptoms.";
const path = "/dishwasher-repairs";
export const metadata: Metadata = createPageMetadata({ title, description, path, keywords: ["dishwasher repairs Newcastle", "dishwasher repairs Lake Macquarie", "dishwasher service Newcastle"] });
export default function Layout({ children }: { children: ReactNode }) { return <><JsonLd data={serviceJsonLd({ name: title, description, path, serviceType: "Dishwasher repair" })} />{children}</>; }
