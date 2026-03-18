import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Serene Sea Burials — our mission, values, and commitment to compassionate ash scattering services from Carolina Beach, North Carolina.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    url: `${siteUrl}/about`,
    title: "About Serene Sea Burials",
    description:
      "Compassionate ash scattering services from Carolina Beach, NC. Learn about our mission and values.",
  },
};

const values = [
  {
    title: "Compassion First",
    description:
      "Every interaction is rooted in empathy. We understand that families come to us during one of the most difficult moments of their lives, and we treat each inquiry with patience and care.",
  },
  {
    title: "Complete Transparency",
    description:
      "No hidden fees, no confusing language. We explain every step, every cost, and every option clearly so families can make decisions with confidence.",
  },
  {
    title: "Dignified Simplicity",
    description:
      "We believe a meaningful farewell doesn\u2019t need to be complicated. Our process is designed to be as straightforward and peaceful as the service itself.",
  },
  {
    title: "Full Compliance",
    description:
      "Every scattering is conducted in accordance with EPA regulations. We handle all documentation, GPS logging, and required filings so families don\u2019t have to.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="About Serene Sea Burials"
        subtitle="Compassionate sea scattering services from Carolina Beach, North Carolina."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Mission */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Mission
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-8"
            >
              To give every family a peaceful,
              <br />
              dignified farewell at sea.
            </h2>
          </div>

          <div
            className="space-y-6 text-mist/60 leading-relaxed max-w-2xl mx-auto text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>
              Serene Sea Burials was founded with a simple belief: that saying
              goodbye should be peaceful, not stressful. Too many families face
              overwhelming decisions, unexpected costs, and complicated logistics
              during their most vulnerable moments.
            </p>
            <p>
              We created a service that removes those burdens. From the first
              phone call to the final EPA filing, every step is handled with
              care, clarity, and compassion. Whether your family is here on the
              coast or across the country, we make the process simple.
            </p>
            <p>
              Operating from Carolina Beach, North Carolina, we serve families
              from across the state and beyond. Our captain and crew treat every
              ceremony — attended or unattended — with the same respect and
              reverence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              What Guides Us
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl"
            >
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8"
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.35rem",
                  }}
                  className="text-pearl mb-3"
                >
                  {value.title}
                </h3>
                <p
                  className="text-mist/55 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sea Burial */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
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
              Why Sea Burial
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-8"
            >
              A Return to Something
              <br />
              <em className="text-seafoam">Timeless</em>
            </h2>
          </div>

          <div
            className="space-y-6 text-mist/60 leading-relaxed max-w-2xl mx-auto text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>
              Sea burial is one of the oldest traditions in human history.
              Cultures around the world have returned their loved ones to the
              water for thousands of years — not out of obligation, but out of a
              deep connection to the natural world.
            </p>
            <p>
              Today, ash scattering at sea offers families a meaningful,
              affordable, and environmentally thoughtful alternative to
              traditional burial. There are no cemetery plots to maintain, no
              ongoing costs, and no geographic limitations for families who want
              to visit in memory.
            </p>
            <p>
              The ocean is vast, enduring, and beautiful. For many families, it
              represents exactly the kind of peace they want for someone they
              love.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {[
              { num: "3 NM", label: "Offshore Distance" },
              { num: "6", label: "Max Passengers" },
              { num: "100%", label: "EPA Compliant" },
              { num: "30", label: "Day Filing Window" },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-xl p-5 text-center">
                <div
                  className="text-seafoam mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "1.8rem",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  className="text-mist/40 text-xs tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span
            className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our Location
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.15,
            }}
            className="text-pearl mb-6"
          >
            Carolina Beach, North Carolina
          </h2>
          <p
            className="text-mist/50 max-w-lg mx-auto leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Located at 220 Annie Dr, Carolina Beach, NC 28428. We serve
            families across North Carolina and accept shipped remains from
            anywhere in the United States.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 5 Q3 3 5 3 L7.5 3 L9 7 L7 9 Q8.5 12.5 11 15 L13 13 L17 14.5 L17 17 Q17 19 15 19 C8 19 1 12 1 5 Z"
                  stroke="#4ecdc4"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="text-pearl text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                (910) 444-7148
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <rect
                  x="2"
                  y="4"
                  width="16"
                  height="12"
                  rx="2"
                  stroke="#4ecdc4"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 7 L10 12 L18 7"
                  stroke="#4ecdc4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className="text-pearl text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                info@sereneseaburials.com
              </span>
            </div>
          </div>
        </div>
      </section>

      <InnerCTA />
      <Footer />
    </main>
  );
}
