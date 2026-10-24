import { absoluteUrl, siteName } from "./seo";
import { brandRepairPages } from "./brand-repair-data";
import { contactDetails, workshopDetails } from "./contact";

export const businessId = absoluteUrl("/#business");
export const websiteId = absoluteUrl("/#website");

export const businessJsonLd = {
  "@type": "LocalBusiness",
  "@id": businessId,
  name: siteName,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/nae-logo.png"),
  image: absoluteUrl("/nae-logo.png"),
  telephone: contactDetails.telephone,
  email: contactDetails.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: workshopDetails.streetAddress,
    addressLocality: workshopDetails.locality,
    addressRegion: workshopDetails.region,
    addressCountry: "AU",
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "16:00",
  }],
  description:
    "Professional household appliance diagnosis and repair across Newcastle and Lake Macquarie.",
  areaServed: [
    {
      "@type": "City",
      name: "Newcastle",
      containedInPlace: {
        "@type": "State",
        name: "New South Wales",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "Lake Macquarie",
      containedInPlace: {
        "@type": "State",
        name: "New South Wales",
      },
    },
  ],
  knowsAbout: [
    "Washing machine repair",
    "Dryer repair",
    "Coffee machine repair",
    "Fridge repair",
    "Freezer repair",
    "Dishwasher repair",
    "Oven repair",
    "Cooktop repair",
    "Microwave repair",
    "Appliance fault diagnosis",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Appliance repair services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Washing Machine Repairs",
          url: absoluteUrl("/washing-machine-repairs"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dryer Repairs",
          url: absoluteUrl("/dryer-repairs"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Coffee Machine Repairs",
          url: absoluteUrl("/coffee-machine-repairs"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fridge and Freezer Repairs",
          url: absoluteUrl("/fridge-freezer-repairs"),
        },
      },
      ...[
        ["Dishwasher Repairs", "/dishwasher-repairs"],
        ["Oven Repairs", "/oven-repairs"],
        ["Cooktop Repairs", "/cooktop-repairs"],
        ["Microwave Repairs", "/microwave-repairs"],
      ].map(([name, path]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, url: absoluteUrl(path) } })),
    ],
  },
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": websiteId,
  url: absoluteUrl("/"),
  name: siteName,
  inLanguage: "en-AU",
  publisher: { "@id": businessId },
  hasPart: [
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
  ].map((path) => ({ "@id": absoluteUrl(`${path}#webpage`) })),
};

export const homePageJsonLd = {
  "@type": "WebPage",
  "@id": absoluteUrl("/#webpage"),
  url: absoluteUrl("/"),
  name: `${siteName} | Appliance Repairs Newcastle`,
  description:
    "Professional household appliance repairs across Newcastle and Lake Macquarie.",
  inLanguage: "en-AU",
  isPartOf: { "@id": websiteId },
  about: { "@id": businessId },
};

export const navigationJsonLd = {
  "@type": "SiteNavigationElement",
  name: [
    "Home",
    "Washing Machine Repairs",
    "Dryer Repairs",
    "Coffee Machine Repairs",
    "Fridge & Freezer Repairs",
    "Dishwasher Repairs",
    "Oven Repairs",
    "Cooktop Repairs",
    "Microwave Repairs",
    "Brands",
    "Service Areas",
    "About",
    "FAQ",
    "Request a Repair",
  ],
  url: [
    "/",
    "/washing-machine-repairs",
    "/dryer-repairs",
    "/coffee-machine-repairs",
    "/fridge-freezer-repairs",
    "/dishwasher-repairs",
    "/oven-repairs",
    "/cooktop-repairs",
    "/microwave-repairs",
    "/brands",
    "/service-areas",
    "/about",
    "/faq",
    "/request-a-repair",
  ].map(absoluteUrl),
};

export function pageJsonLd({
  type = "WebPage",
  name,
  description,
  path,
}: {
  type?: string;
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": absoluteUrl(`${path}#webpage`),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-AU",
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
  brand,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  brand?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      pageJsonLd({ name, description, path }),
      {
        "@type": "Service",
        "@id": absoluteUrl(`${path}#service`),
        name,
        serviceType,
        description,
        url: absoluteUrl(path),
        provider: { "@id": businessId },
        ...(brand ? { brand: { "@type": "Brand", name: brand } } : {}),
        areaServed: [
          { "@type": "City", name: "Newcastle, NSW" },
          { "@type": "AdministrativeArea", name: "Lake Macquarie, NSW" },
        ],
      },
    ],
  };
}
