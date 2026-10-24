import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/json-ld";
import { getSiteUrl, siteName } from "@/lib/seo";
import {
  businessJsonLd,
  navigationJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteName} | Appliance Repairs Newcastle`,
    template: `%s | ${siteName}`,
  },
  description:
    "Professional appliance repairs across Newcastle and Lake Macquarie, including laundry, refrigeration, dishwashing, coffee machines and cooking appliances.",
  applicationName: siteName,
  keywords: [
    "appliance repairs Newcastle",
    "appliance repairs Lake Macquarie",
    "washing machine repairs Newcastle",
    "dryer repairs Newcastle",
    "fridge repairs Newcastle",
    "freezer repairs Newcastle",
    "dishwasher repairs Newcastle",
    "oven repairs Newcastle",
    "cooktop repairs Newcastle",
    "microwave repairs Newcastle",
    "coffee machine repairs Newcastle",
    "DeLonghi authorised service centre Newcastle",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName,
    title: `${siteName} | Appliance Repairs Newcastle`,
    description:
      "Professional appliance repairs across Newcastle and Lake Macquarie, including laundry, refrigeration, dishwashing, coffee machines and cooking appliances.",
    images: [{ url: "/nae-logo.png", alt: siteName }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              websiteJsonLd,
              businessJsonLd,
              navigationJsonLd,
            ],
          }}
        />
        {children}
      </body>
    </html>
  );
}
