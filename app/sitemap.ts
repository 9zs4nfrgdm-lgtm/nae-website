import type { MetadataRoute } from "next";
import { brandRepairPages } from "@/lib/brand-repair-data";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const routes = [
  "",
  "/washing-machine-repairs",
  "/dryer-repairs",
  "/coffee-machine-repairs",
  "/fridge-freezer-repairs",
  "/dishwasher-repairs",
  "/oven-repairs",
  "/cooktop-repairs",
  "/microwave-repairs",
  "/brands",
  "/brands/lg",
  "/brands/other",
  "/brands/delonghi",
  "/service-areas",
  "/about",
  "/faq",
  "/request-a-repair",
  ...brandRepairPages.map(({ slug }) => `/brands/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route || "/"),
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.8 : 1,
  }));
}
