import type { Metadata } from "next";

export const siteName = "Newcastle Appliance Experts";
export const productionSiteUrl = "https://newcastleapplianceexperts.com.au";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = new URL(configuredUrl || productionSiteUrl);

  // Production metadata must always identify the public business domain.
  // Development can opt into a local origin without changing the launch default.
  if (process.env.NODE_ENV === "production" && url.origin !== productionSiteUrl) {
    throw new Error(`NEXT_PUBLIC_SITE_URL must be ${productionSiteUrl} in production.`);
  }
  if (url.pathname !== "/" || url.search || url.hash || url.username || url.password) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be a site origin without a path, query or credentials.");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use HTTP or HTTPS.");
  }

  return url.origin;
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${getSiteUrl()}/`).toString();
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AU",
      url: path,
      siteName,
      title,
      description,
      images: [
        {
          url: "/nae-logo.png",
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/nae-logo.png"],
    },
  };
}
