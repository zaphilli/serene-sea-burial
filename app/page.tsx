import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Serene Sea Burials | Ash Scattering at Sea — Carolina Beach, NC",
  description:
    "Serene Sea Burials offers EPA-compliant attended and unattended ash scattering ceremonies from Carolina Beach, NC. We handle all legal documentation, EPA filing, and logistics — so your family can focus entirely on saying goodbye.",
  alternates: { canonical: siteUrl },
  openGraph: {
    url: siteUrl,
    title: "Serene Sea Burials | Ash Scattering at Sea — Carolina Beach, NC",
    description:
      "EPA-compliant attended and unattended ash scattering ceremonies from Carolina Beach, NC. Full documentation included.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Serene Sea Burials",
  description:
    "EPA-compliant ash scattering and burial at sea services from Carolina Beach, North Carolina. Attended and unattended ceremonies with full legal documentation.",
  url: siteUrl,
  telephone: "+19104447148",
  email: "info@sereneseaburials.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "133 Virginia Ave",
    addressLocality: "Carolina Beach",
    addressRegion: "NC",
    postalCode: "28428",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0354,
    longitude: -77.8986,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: { "@type": "State", name: "North Carolina" },
  serviceType: ["Ash Scattering", "Burial at Sea", "Sea Burial Ceremony"],
  image: `${siteUrl}/logo.png`,
  priceRange: "$$",
  currenciesAccepted: "USD",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is burial at sea legal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Burial at sea is legal when handled under EPA rules. For cremated remains, scattering is performed at least 3 nautical miles from shore. We manage the required compliance steps for each service.",
      },
    },
    {
      "@type": "Question",
      name: "How far offshore does the ceremony take place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sea scattering is conducted approximately 3 nautical miles offshore in accordance with federal requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How many guests can attend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Attended services are structured for an intimate experience and can accommodate up to 6 passengers.",
      },
    },
    {
      "@type": "Question",
      name: "How long is an attended service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most attended ash scattering services are approximately 90 to 120 minutes from departure to return.",
      },
    },
    {
      "@type": "Question",
      name: "Can we choose unattended service if we cannot travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unattended options are available for families who cannot be on board. The captain performs the service respectfully and documentation is provided afterward.",
      },
    },
    {
      "@type": "Question",
      name: "How are cremated remains transferred?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Families may use a provided shipping kit with USPS Priority Mail Express, or coordinate local drop-off and pickup options by appointment.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do we receive after service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You receive a sea scattering certificate and location details. EPA notification is also submitted within the required 30-day timeframe.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Ash Scattering at Sea",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
  },
  areaServed: {
    "@type": "State",
    name: "North Carolina",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sea Burial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Attended Ash Scattering Ceremony",
          description:
            "An intimate on-board ceremony for up to 6 guests. The captain and crew guide your family through the scattering service at sea, approximately 3 nautical miles offshore.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Unattended Sea Burial",
          description:
            "For families who cannot travel, the captain performs the scattering service with full care and respect. Documentation and GPS coordinates are provided afterward.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shipping Kit",
          description:
            "A USPS Priority Mail Express shipping kit for safely transporting cremated remains to Serene Sea Burials for an unattended service.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
