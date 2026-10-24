import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";
const title = "Microwave Repairs Newcastle";
const description = "General microwave fault diagnosis and repair across Newcastle and Lake Macquarie, subject to appliance type, installation and model suitability.";
const path = "/microwave-repairs";
export const metadata: Metadata = createPageMetadata({ title, description, path, keywords: ["microwave repairs Newcastle", "microwave repairs Lake Macquarie", "microwave service Newcastle"] });
export default function Layout({ children }: { children: ReactNode }) { return <><JsonLd data={serviceJsonLd({ name: title, description, path, serviceType: "Microwave repair" })} />{children}</>; }
