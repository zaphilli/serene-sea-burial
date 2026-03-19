import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Serene Sea Burials serves families in Carolina Beach, Wilmington, Kure Beach, Wrightsville Beach, Southport, and across North Carolina. Shipping kit available nationwide.",
  alternates: { canonical: `${siteUrl}/service-areas` },
  openGraph: {
    url: `${siteUrl}/service-areas`,
    title: "Service Areas | Serene Sea Burials",
    description:
      "Sea burial services from Carolina Beach, NC. Serving Wilmington, Kure Beach, Wrightsville Beach, Southport, and nationwide via shipping kit.",
  },
};

const localAreas = [
  {
    name: "Carolina Beach",
    detail: "Home base — departure point for all ceremonies",
    type: "primary" as const,
    href: "/service-areas/carolina-beach",
  },
  {
    name: "Wilmington",
    detail: "20 minutes to Carolina Beach",
    type: "primary" as const,
    href: "/service-areas/wilmington",
  },
  {
    name: "Southport",
    detail: "30 minutes via ferry or 50 minutes by road",
    type: "primary" as const,
    href: "/service-areas/southport",
  },
  {
    name: "Jacksonville",
    detail: "1 hour to Carolina Beach",
    type: "secondary" as const,
    href: "/service-areas/jacksonville",
  },
  {
    name: "Fayetteville",
    detail: "2 hours to Carolina Beach",
    type: "secondary" as const,
    href: "/service-areas/fayetteville",
  },
  {
    name: "Raleigh",
    detail: "2.5 hours — shipping kit recommended",
    type: "secondary" as const,
    href: "/service-areas/raleigh",
  },
  {
    name: "Cary",
    detail: "2.5 hours — shipping kit recommended",
    type: "secondary" as const,
    href: "/service-areas/cary",
  },
  {
    name: "Durham",
    detail: "2.5 hours — shipping kit recommended",
    type: "secondary" as const,
    href: "/service-areas/durham",
  },
  {
    name: "Charlotte",
    detail: "3.5 hours — shipping kit recommended",
    type: "secondary" as const,
    href: "/service-areas/charlotte",
  },
  {
    name: "Kure Beach",
    detail: "5 minutes from our dock",
    type: "primary" as const,
    href: null,
  },
  {
    name: "Wrightsville Beach",
    detail: "25 minutes to Carolina Beach",
    type: "secondary" as const,
    href: null,
  },
  {
    name: "Leland",
    detail: "30 minutes to Carolina Beach",
    type: "secondary" as const,
    href: null,
  },
];

export default function ServiceAreasPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Service Areas"
        subtitle="Based in Carolina Beach, North Carolina. Serving families locally, statewide, and nationwide."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Local service */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Local & Regional
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-4"
            >
              Attended & Unattended Ceremonies
            </h2>
            <p
              className="text-mist/50 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Families in the greater Wilmington area and across coastal North
              Carolina can attend ceremonies in person or choose our unattended
              service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localAreas.map((area, i) => {
              const cardClass = `rounded-xl p-5 block transition-all duration-300 ${
                area.href ? "hover:border-seafoam/30 group" : ""
              }`;
              const cardStyle = {
                background:
                  area.type === "primary"
                    ? "rgba(78,205,196,0.04)"
                    : "rgba(13,40,71,0.3)",
                border:
                  area.type === "primary"
                    ? "1px solid rgba(78,205,196,0.15)"
                    : "1px solid rgba(168,197,218,0.06)",
              };
              const inner = (
                <>
                  <h3
                    className={`text-pearl text-sm mb-1 ${area.href ? "group-hover:text-seafoam transition-colors" : ""}`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "1.1rem",
                    }}
                  >
                    {area.name}
                    {area.href && (
                      <span className="text-seafoam/40 ml-1.5 text-xs">→</span>
                    )}
                  </h3>
                  <p
                    className="text-mist/40 text-xs"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    {area.detail}
                  </p>
                </>
              );
              return area.href ? (
                <Link key={i} href={area.href} className={cardClass} style={cardStyle}>
                  {inner}
                </Link>
              ) : (
                <div key={i} className={cardClass} style={cardStyle}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nationwide */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/15 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span
            className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Nationwide
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.15,
            }}
            className="text-pearl mb-6"
          >
            Unattended Scattering from Anywhere
          </h2>
          <p
            className="text-mist/55 max-w-xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Our free USPS Priority Mail Express shipping kit makes it possible
            for families anywhere in the United States to arrange an unattended
            scattering at sea. We receive remains from every state.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {[
              { title: "Free Shipping Kit", detail: "Prepaid and insured" },
              { title: "Full Documentation", detail: "Certificate, GPS, EPA filing" },
              { title: "No Travel Required", detail: "Captain handles everything" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-5">
                <div
                  className="text-pearl text-sm mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </div>
                <div
                  className="text-mist/40 text-xs"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services/shipping-kit"
              className="text-seafoam/70 text-xs tracking-widest uppercase hover:text-seafoam transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Learn about our shipping kit \u2192
            </Link>
          </div>
        </div>
      </section>

      <InnerCTA />
      <Footer />
    </main>
  );
}
