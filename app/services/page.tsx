import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ash scattering at sea services from Carolina Beach, NC. Attended and unattended ceremonies, shipping kits, and preplanning options. EPA compliant with full documentation.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    url: `${siteUrl}/services`,
    title: "Sea Burial Services | Serene Sea Burials",
    description:
      "Attended and unattended ash scattering ceremonies from Carolina Beach, NC. EPA compliant with full documentation.",
  },
};

const services = [
  {
    title: "Unattended Ash Scattering",
    badge: "Most Chosen",
    subtitle: "For families near or far",
    description:
      "The captain performs a dignified scattering ceremony on your behalf, with a moment of reflection at sea. Ideal for families who cannot travel or prefer a simpler arrangement.",
    features: [
      "Starting at $400",
      "Photos upon request",
      "GPS coordinates provided",
      "Scattering certificate included",
    ],
    href: "/services/unattended-ash-scattering",
    featured: true,
  },
  {
    title: "Attended Ceremony",
    subtitle: "Family present on board",
    description:
      "A private ash scattering cruise for family and friends. Ceremonies include time for music, readings, prayer, and a personal farewell approximately 3 miles offshore.",
    features: [
      "Up to 6 passengers",
      "90\u2013120 minutes at sea",
      "Captain-led or family-led",
      "Personalize with flowers & music",
    ],
    href: "/services/attended-ceremony",
    featured: false,
  },
  {
    title: "Shipping Kit",
    subtitle: "Send remains safely from anywhere",
    description:
      "A prepaid USPS Priority Mail Express kit for safely transferring cremated remains to us from anywhere in the United States. Free with any unattended service booking.",
    features: [
      "USPS Priority Mail Express",
      "Prepaid and insured",
      "Tamper-evident packaging",
      "Tracking provided",
    ],
    href: "/services/shipping-kit",
    featured: false,
  },
  {
    title: "Preplanning",
    subtitle: "Arrange in advance",
    description:
      "Plan ahead with clear pricing, simple paperwork, and guidance through each step before services are needed. Lock in details now for peace of mind later.",
    features: [
      "No obligation",
      "Clear, fixed pricing",
      "Simple intake process",
      "Phone or online support",
    ],
    href: "/services/preplanning",
    featured: false,
  },
];

const included = [
  {
    title: "EPA-Compliant Filing",
    description: "Required documentation and notification filed within 30 days of service.",
  },
  {
    title: "GPS Coordinates",
    description: "Exact latitude and longitude of the scattering location recorded for your family.",
  },
  {
    title: "Scattering Certificate",
    description: "Official documentation of the service for your family\u2019s records.",
  },
  {
    title: "Flower Options",
    description: "Rose sprays, loose roses, and wreaths available to add to any service.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Every family is different. Whether you join us at sea or let our captain carry your wishes, the farewell will be handled with care."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Service cards */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group relative rounded-2xl p-8 lg:p-10 transition-all duration-500 block"
                style={{
                  background: service.featured
                    ? "rgba(78,205,196,0.04)"
                    : "rgba(13,40,71,0.35)",
                  backdropFilter: "blur(12px)",
                  border: service.featured
                    ? "1px solid rgba(78,205,196,0.2)"
                    : "1px solid rgba(168,197,218,0.1)",
                }}
              >
                {service.badge && (
                  <div
                    className="absolute -top-3 left-8 px-4 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase"
                    style={{
                      fontFamily: "var(--font-body)",
                      background:
                        "linear-gradient(135deg, rgba(78,205,196,0.9), rgba(78,205,196,0.7))",
                      color: "#071020",
                      fontWeight: 500,
                    }}
                  >
                    {service.badge}
                  </div>
                )}

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.6rem",
                  }}
                  className="text-pearl mb-1 group-hover:text-seafoam transition-colors duration-300"
                >
                  {service.title}
                </h3>
                <span
                  className="text-mist/40 text-xs tracking-[0.2em] uppercase block mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.subtitle}
                </span>

                <p
                  className="text-mist/55 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm text-mist/50"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="flex-shrink-0"
                      >
                        <path
                          d="M2.5 7 L5.5 10 L11.5 3.5"
                          stroke={service.featured ? "#4ecdc4" : "#c9a96e"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <span
                  className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 group-hover:gap-3"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    color: service.featured ? "#4ecdc4" : "#c9a96e",
                  }}
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7H12M8.5 3.5L12 7L8.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Included with every service */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-3"
            >
              Included with Every Service
            </h2>
            <p
              className="text-mist/45 text-sm"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              No hidden fees. These are standard with every package.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item, i) => (
              <div
                key={i}
                className="glass rounded-xl p-5 text-center"
              >
                <h3
                  className="text-pearl/80 text-sm mb-1.5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-mist/35 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Which Service Is Right?
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl"
            >
              Attended vs. Unattended
            </h2>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <thead>
                  <tr className="border-b border-mist/10">
                    <th className="text-left p-5 text-mist/40 font-normal tracking-wider uppercase text-xs">Feature</th>
                    <th className="p-5 text-seafoam font-normal tracking-wider uppercase text-xs text-center">Unattended</th>
                    <th className="p-5 text-pearl/70 font-normal tracking-wider uppercase text-xs text-center">Attended</th>
                  </tr>
                </thead>
                <tbody className="text-mist/60" style={{ fontWeight: 300 }}>
                  {[
                    ["Family on board", "No", "Up to 6"],
                    ["Duration", "Captain\u2019s discretion", "90\u2013120 min"],
                    ["Personalization", "Captain\u2019s reflection", "Music, readings, prayer"],
                    ["Starting price", "$400", "Contact us"],
                    ["Shipping kit included", "Yes", "N/A"],
                    ["Photos", "Upon request", "Yes"],
                    ["Certificate & coordinates", "Yes", "Yes"],
                    ["EPA filing", "Yes", "Yes"],
                  ].map(([feature, unattended, attended], i) => (
                    <tr key={i} className="border-b border-mist/5 last:border-0">
                      <td className="p-4 pl-5 text-pearl/70">{feature}</td>
                      <td className="p-4 text-center">{unattended}</td>
                      <td className="p-4 text-center">{attended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <InnerCTA />
      <Footer />
    </main>
  );
}
