import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Attended Ash Scattering Ceremony",
  description:
    "Private attended ash scattering ceremony from Carolina Beach, NC. Up to 6 passengers, 90\u2013120 minutes at sea. Personalize with music, readings, flowers, and prayer.",
  alternates: { canonical: `${siteUrl}/services/attended-ceremony` },
  openGraph: {
    url: `${siteUrl}/services/attended-ceremony`,
    title: "Attended Ash Scattering Ceremony | Serene Sea Burials",
    description:
      "Private ash scattering cruise for up to 6 guests. 90\u2013120 minutes at sea with time for readings, prayer, flowers, and reflection.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Attended Ash Scattering Ceremony",
  description:
    "A private ash scattering cruise for up to 6 family members. Ceremonies include time for music, readings, prayer, flowers, and a personal farewell at sea.",
  provider: {
    "@type": "LocalBusiness",
    name: "Serene Sea Burials",
    address: {
      "@type": "PostalAddress",
      streetAddress: "220 Annie Dr",
      addressLocality: "Carolina Beach",
      addressRegion: "NC",
      postalCode: "28428",
    },
  },
  areaServed: { "@type": "State", name: "North Carolina" },
};

const timeline = [
  {
    time: "Before Departure",
    title: "Meet at the Dock",
    description:
      "Your family arrives at our Carolina Beach departure point. The captain greets you, goes over the plan, and ensures everyone is comfortable before setting out.",
  },
  {
    time: "First 20\u201330 Min",
    title: "Journey to the Scattering Site",
    description:
      "The boat heads approximately 3 nautical miles offshore. This is a quiet, beautiful ride \u2014 time to settle in, take in the coast, and prepare for the ceremony.",
  },
  {
    time: "At the Site",
    title: "The Ceremony",
    description:
      "The captain slows the vessel and the ceremony begins. Families may share readings, play music, say prayers, scatter flowers, and take their time with the farewell. There is no rush.",
  },
  {
    time: "After Scattering",
    title: "A Moment of Reflection",
    description:
      "The boat remains at the scattering site for as long as the family needs. Many families spend a few quiet minutes watching the flowers drift on the water.",
  },
  {
    time: "Return",
    title: "Journey Back to Shore",
    description:
      "The return trip is often quieter. Families return to the dock knowing the farewell was handled with dignity and care.",
  },
];

export default function AttendedPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <PageHero
        title="Attended Ceremony"
        subtitle="A private ash scattering cruise for your family. Up to 6 passengers, 90\u2013120 minutes at sea."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Overview */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  lineHeight: 1.15,
                }}
                className="text-pearl mb-6"
              >
                Be There for the
                <br />
                <em className="text-seafoam">Final Farewell</em>
              </h2>
              <div
                className="space-y-5 text-mist/60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                <p>
                  An attended ceremony gives your family the opportunity to be
                  present at the moment of scattering. It&apos;s an intimate,
                  private experience on the water \u2014 just your family, the
                  captain, and the open sea.
                </p>
                <p>
                  Ceremonies typically last 90 to 120 minutes from departure to
                  return. There is no script and no rush. The captain guides the
                  process, but the ceremony is yours to shape however feels
                  right.
                </p>
                <p>
                  Many families include music, readings, prayers, or simply
                  quiet reflection. Flower options are available, including rose
                  sprays and loose roses that drift on the water after the
                  scattering.
                </p>
              </div>
            </div>

            {/* Details card */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(201,169,110,0.04)",
                  border: "1px solid rgba(201,169,110,0.15)",
                }}
              >
                <h3
                  className="text-pearl mb-5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.3rem",
                  }}
                >
                  Ceremony Details
                </h3>
                <ul className="space-y-3">
                  {[
                    "Up to 6 passengers",
                    "90\u2013120 minutes total",
                    "3 nautical miles offshore",
                    "Captain-guided ceremony",
                    "Music and readings welcome",
                    "Flower options available",
                    "GPS coordinates provided",
                    "Scattering certificate",
                    "EPA filing included",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-mist/60"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M2.5 7 L5.5 10 L11.5 3.5"
                          stroke="#c9a96e"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="divider-gold my-6" />
                <p
                  className="text-mist/40 text-xs text-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Contact us for pricing and availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light/15 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Day of the Ceremony
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
              What to Expect
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right pt-1">
                  <span
                    className="text-gold-light/60 text-xs tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.time}
                  </span>
                </div>
                <div
                  className="flex-shrink-0 w-px mt-1"
                  style={{ background: "rgba(201,169,110,0.2)" }}
                />
                <div className="pb-2">
                  <h3
                    className="text-pearl mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "1.2rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-mist/50 text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization */}
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
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl"
            >
              Make It Yours
            </h2>
            <p
              className="text-mist/50 max-w-md mx-auto mt-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Every ceremony is different. Here are some of the ways families
              personalize the experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Music", description: "Play a favorite song through a portable speaker on board." },
              { title: "Readings", description: "Share a poem, scripture, letter, or personal words." },
              { title: "Prayer", description: "Include a prayer or blessing led by family or the captain." },
              { title: "Flowers", description: "Scatter loose roses or a full rose spray into the water." },
              { title: "Photos & Video", description: "Capture the ceremony with your own camera or phone." },
              { title: "Quiet Reflection", description: "Simply be present on the water with no formal structure." },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <h3
                  className="text-pearl mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-mist/45 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare link */}
      <section className="relative py-12 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-mist/40 text-sm mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Not sure if attended is right for your family?
          </p>
          <Link
            href="/services"
            className="text-seafoam/70 text-xs tracking-widest uppercase hover:text-seafoam transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Compare all services \u2192
          </Link>
        </div>
      </section>

      <InnerCTA
        title="Arrange a Ceremony"
        subtitle="Contact us to schedule an attended ash scattering ceremony from Carolina Beach."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
