import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-jost",
});

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Serene Sea Burials | Ash Scattering at Sea — Carolina Beach, NC",
    template: "%s | Serene Sea Burials",
  },
  description:
    "EPA-compliant ash scattering and burial at sea services from Carolina Beach, North Carolina. Attended and unattended ceremonies. We handle all documentation and filing. Serving families along the entire NC coast.",
  keywords: [
    "sea burial",
    "ash scattering at sea",
    "burial at sea North Carolina",
    "cremation at sea",
    "ash scattering Carolina Beach",
    "EPA compliant sea burial",
    "attended sea burial ceremony",
    "unattended ash scattering",
    "ocean burial NC",
    "sea scattering service",
    "burial at sea NC",
    "Serene Sea Burials",
  ],
  authors: [{ name: "Serene Sea Burials" }],
  creator: "Serene Sea Burials",
  publisher: "Serene Sea Burials",
  category: "funeral services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Serene Sea Burials",
    title: "Serene Sea Burials | Ash Scattering at Sea — Carolina Beach, NC",
    description:
      "EPA-compliant ash scattering and burial at sea services from Carolina Beach, NC. Attended and unattended ceremonies. We handle all documentation so your family can focus on what matters.",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Serene Sea Burials — Carolina Beach, North Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serene Sea Burials | Ash Scattering at Sea — Carolina Beach, NC",
    description:
      "EPA-compliant ash scattering and burial at sea services from Carolina Beach, NC. Attended and unattended ceremonies with full documentation.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
