import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Free Cremains Shipping Kit",
  description:
    "Free prepaid USPS Priority Mail Express shipping kit for transferring cremated remains to Serene Sea Burials. Tamper-evident, insured, and fully compliant.",
  alternates: { canonical: `${siteUrl}/services/shipping-kit` },
  openGraph: {
    url: `${siteUrl}/services/shipping-kit`,
    title: "Free Cremains Shipping Kit | Serene Sea Burials",
    description:
      "Prepaid USPS Priority Mail Express kit for safely shipping cremated remains from anywhere in the US.",
  },
};

export default function ShippingKitPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Shipping Kit"
        subtitle="A free, prepaid USPS Priority Mail Express kit for safely transferring cremated remains to our care from anywhere in the United States."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* How it works */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              How It Works
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl"
            >
              Three Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Request Your Kit",
                description:
                  "Contact us to book an unattended scattering and we\u2019ll send the shipping kit to your door at no cost.",
              },
              {
                num: "02",
                title: "Pack & Ship",
                description:
                  "Place the cremated remains in the provided inner container, seal the outer packaging, and drop it at any USPS location.",
              },
              {
                num: "03",
                title: "We Take It From Here",
                description:
                  "Once we receive the remains, the captain schedules the scattering ceremony. You\u2019ll receive documentation afterward.",
              },
            ].map((step, i) => (
              <div key={i} className="glass rounded-2xl p-7 text-center">
                <div
                  className="text-seafoam/50 mb-4"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "2rem",
                    fontWeight: 400,
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-pearl mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.25rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-mist/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit details */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl"
            >
              What&apos;s in the Kit
            </h2>
          </div>

          <div className="glass rounded-2xl p-8">
            <ul className="space-y-4">
              {[
                {
                  title: "USPS Priority Mail Express Prepaid Label",
                  detail: "Shipping is covered \u2014 no cost to you.",
                },
                {
                  title: "Inner Sealed Container",
                  detail: "A tamper-evident container sized for cremated remains.",
                },
                {
                  title: "Outer Shipping Box",
                  detail: "Sturdy packaging designed to meet USPS requirements.",
                },
                {
                  title: "Packing Instructions",
                  detail: "Clear, step-by-step guide for preparing the shipment.",
                },
                {
                  title: "Tracking Information",
                  detail: "Track your package from drop-off to delivery.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="flex-shrink-0 mt-1"
                  >
                    <path
                      d="M3 8 L6.5 11.5 L13 4.5"
                      stroke="#4ecdc4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <div
                      className="text-pearl text-sm"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="text-mist/40 text-xs"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal note */}
          <div className="mt-8 text-center">
            <p
              className="text-mist/35 text-xs leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              USPS Priority Mail Express is the only mail service authorized by
              the U.S. Postal Service for shipping cremated remains. Our kit is
              designed to comply with all applicable USPS regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Alternative options */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="glass rounded-2xl p-8 text-center">
            <h3
              className="text-pearl mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "1.3rem",
              }}
            >
              Prefer Local Transfer?
            </h3>
            <p
              className="text-mist/50 text-sm leading-relaxed max-w-md mx-auto mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              If you&apos;re in the New Hanover County area, we also offer local
              drop-off and pickup by appointment at our Carolina Beach location.
            </p>
            <Link
              href="/contact"
              className="text-seafoam/70 text-xs tracking-widest uppercase hover:text-seafoam transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Schedule an appointment \u2192
            </Link>
          </div>
        </div>
      </section>

      <InnerCTA
        title="Request Your Free Kit"
        subtitle="We\u2019ll ship it to your door with everything you need."
        primaryLabel="Request Shipping Kit"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
