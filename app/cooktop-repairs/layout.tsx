import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";
const title = "Cooktop Repairs Newcastle";
const description = "Household cooktop fault diagnosis and repair across Newcastle and Lake Macquarie. Provide the cooktop type, model and reported symptoms to confirm service suitability.";
const path = "/cooktop-repairs";
export const metadata: Metadata = createPageMetadata({ title, description, path, keywords: ["cooktop repairs Newcastle", "cooktop repairs Lake Macquarie", "cooktop service Newcastle"] });
export default function Layout({ children }: { children: ReactNode }) { return <><JsonLd data={serviceJsonLd({ name: title, description, path, serviceType: "Cooktop repair" })} />{children}</>; }
