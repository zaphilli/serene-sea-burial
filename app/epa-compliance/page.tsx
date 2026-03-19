import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "EPA Compliance | Sea Burial Regulations",
  description:
    "Serene Sea Burials is fully compliant with the EPA Marine Protection, Research and Sanctuaries Act (MPRSA). Learn how we meet all federal regulations for ocean ash scattering.",
  alternates: { canonical: `${siteUrl}/epa-compliance` },
  openGraph: {
    url: `${siteUrl}/epa-compliance`,
    title: "EPA Compliance | Serene Sea Burials",
    description:
      "Fully compliant with federal EPA regulations for ocean ash scattering. Every service is documented and filed within 30 days.",
  },
};

const compliancePoints = [
  {
    title: "Marine Protection, Research and Sanctuaries Act",
    description:
      "All of our services are conducted in full compliance with the MPRSA, the federal law governing the disposal of materials at sea. This ensures that every ash scattering ceremony meets strict environmental standards set by the U.S. Environmental Protection Agency.",
  },
  {
    title: "EPA Filing Within 30 Days",
    description:
      "After every service, we file a detailed report with the EPA within 30 days. This report includes the departure port and state, type of remains, water depth and sink rate, distance from shore baseline, and the exact latitude and longitude coordinates of the scattering location.",
  },
  {
    title: "3+ Nautical Miles Offshore",
    description:
      "Per EPA regulations (40 CFR 229.1), all ash scatterings must take place at least three nautical miles from shore. Our captain ensures every ceremony exceeds this minimum distance, providing both legal compliance and a serene open-ocean setting.",
  },
  {
    title: "Biodegradable Materials Only",
    description:
      "We are committed to environmental stewardship. Only biodegradable materials — including natural wreaths and fresh flowers — are used during our ceremonies. All non-biodegradable items are removed from the vessel and properly disposed of on land.",
  },
  {
    title: "U.S. Coast Guard Certified Captain",
    description:
      "Every voyage is led by a U.S. Coast Guard certified captain who is trained in both maritime safety and EPA compliance protocols. You can trust that your loved one's ceremony is in professional, capable hands.",
  },
  {
    title: "Conservation-Focused Practices",
    description:
      "We believe that honoring loved ones can coexist with protecting our planet. Our conservation-focused approach ensures that each ceremony has minimal environmental impact on marine ecosystems while providing a meaningful farewell.",
  },
];

const documentationFields = [
  "Departure port and state",
  "Type of remains scattered",
  "Water depth at scattering site",
  "Sink rate of materials",
  "Distance from shore baseline",
  "Exact latitude and longitude coordinates",
];

export default function EPACompliancePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="EPA Compliance"
        subtitle="Every ceremony is conducted in full compliance with federal environmental regulations — because honoring your loved one should also honor the ocean."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "#" },
        ]}
      />

      {/* Compliance Overview */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Federal Compliance
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-5"
            >
              Our Commitment to Compliance
            </h2>
            <p
              className="text-mist/55 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Serene Sea Burials operates under the Marine Protection, Research
              and Sanctuaries Act (MPRSA) and files all required documentation
              with the EPA within 30 days of each service. We hold ourselves to
              the highest standard so you never have to worry about regulatory
              details during such a personal moment.
            </p>
          </div>

          {/* Compliance Points */}
          <div className="grid md:grid-cols-2 gap-6">
            {compliancePoints.map((point, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 border border-white/[0.04]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-seafoam/10 border border-seafoam/20 mt-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4ecdc4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-pearl mb-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: "1.15rem",
                      }}
                    >
                      {point.title}
                    </h3>
                    <p
                      className="text-mist/50 text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                      }}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              What We File
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
              EPA Documentation
            </h2>
            <p
              className="text-mist/50 max-w-lg mx-auto text-sm"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              After every ceremony, we submit a comprehensive report to the EPA
              that includes the following data points:
            </p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 border border-white/[0.04] max-w-2xl mx-auto">
            <ul className="space-y-4">
              {documentationFields.map((field, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-seafoam/10 border border-seafoam/20 flex items-center justify-center text-seafoam text-xs font-medium">
                    {i + 1}
                  </span>
                  <span
                    className="text-mist/65 text-sm"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    {field}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificate note */}
          <div className="text-center mt-12">
            <p
              className="text-mist/40 text-sm leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Every family receives an official Certificate of Sea Burial with
              the exact GPS coordinates and date of their loved one&apos;s
              ceremony.
            </p>
          </div>
        </div>
      </section>

      <InnerCTA
        title="Questions About Compliance?"
        subtitle="We're happy to walk you through our process and answer any regulatory questions."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
        secondaryLabel="View FAQ"
        secondaryHref="/faq"
      />

      <Footer />
    </main>
  );
}
