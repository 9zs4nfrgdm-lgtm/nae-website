import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";
const title = "Oven Repairs Newcastle";
const description = "Household oven fault diagnosis and repair across Newcastle and Lake Macquarie for heating, temperature, fan, door, control and power symptoms.";
const path = "/oven-repairs";
export const metadata: Metadata = createPageMetadata({ title, description, path, keywords: ["oven repairs Newcastle", "oven repairs Lake Macquarie", "oven service Newcastle"] });
export default function Layout({ children }: { children: ReactNode }) { return <><JsonLd data={serviceJsonLd({ name: title, description, path, serviceType: "Oven repair" })} />{children}</>; }
