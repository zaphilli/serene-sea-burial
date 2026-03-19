import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Ash Scattering at Sea for Raleigh, NC Families",
  description:
    "Ocean ash scattering services for families in Raleigh, NC. Unattended sea burials from $400 with free shipping kit, GPS coordinates, and EPA-compliant documentation.",
  alternates: { canonical: `${siteUrl}/service-areas/raleigh` },
  openGraph: {
    url: `${siteUrl}/service-areas/raleigh`,
    title: "Ash Scattering at Sea — Raleigh, NC | Serene Sea Burials",
    description:
      "Peaceful ocean ash scattering for Raleigh families. Free shipping kit, full documentation, starting at $400.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ocean Ash Scattering for Raleigh NC",
  description:
    "EPA-compliant ocean ash scattering services for families in Raleigh, North Carolina. Unattended and attended ceremonies from Carolina Beach.",
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
    telephone: "+19108331900",
  },
  areaServed: {
    "@type": "City",
    name: "Raleigh",
    containedInPlace: { "@type": "State", name: "North Carolina" },
  },
  offers: {
    "@type": "Offer",
    price: "400",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ocean ash scattering legal in North Carolina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ocean ash scattering is fully legal under the Marine Protection, Research and Sanctuaries Act (MPRSA) when conducted at least 3 nautical miles from shore. We handle all EPA compliance and documentation on your behalf.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a sea burial cost for Raleigh families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our unattended scattering service starts at $400 and includes a free shipping kit, captain-led ceremony, GPS coordinates, scattering certificate, and EPA filing. There are no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to travel to the coast from Raleigh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our unattended service is specifically designed for families who cannot be present. We send a free shipping kit to your Raleigh address, and the captain handles everything at sea.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the sea burial process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once we receive the cremated remains, scattering is typically performed within 5-7 business days, weather permitting. From initial contact to final documentation, most families complete the process within 2-3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Can family members attend the ceremony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our attended ceremony accommodates up to 6 guests aboard the vessel. For families in Raleigh, the unattended option is often preferred since it eliminates the 2.5-hour drive to the coast.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do we receive after the scattering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every family receives an official Certificate of Sea Burial with exact GPS coordinates and date of the ceremony. We also file the required EPA notification within 30 days. Photos are available upon request.",
      },
    },
    {
      "@type": "Question",
      name: "How are cremated remains shipped safely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide a free USPS Priority Mail Express cremated remains shipping kit with everything you need. USPS is the only carrier that ships cremated remains.",
      },
    },
  ],
};

const steps = [
  {
    num: "01",
    title: "Reach Out",
    desc: "Contact us by phone or through our website. We\u2019ll answer your questions and help you choose the right service for your family.",
  },
  {
    num: "02",
    title: "Ship or Deliver Remains",
    desc: "We\u2019ll send a free USPS Priority Mail Express shipping kit to your Raleigh address. Pack the remains and drop the kit at any post office.",
  },
  {
    num: "03",
    title: "The Ceremony at Sea",
    desc: "Our captain takes your loved one approximately 3 nautical miles offshore from Carolina Beach and performs a dignified scattering ceremony.",
  },
  {
    num: "04",
    title: "Documentation Delivered",
    desc: "You receive GPS coordinates of the scattering site, an official certificate, optional photographs, and we file the required EPA notification.",
  },
];

const faqs = [
  {
    q: "Is ocean ash scattering legal in North Carolina?",
    a: "Yes. Ocean ash scattering is fully legal under the Marine Protection, Research and Sanctuaries Act (MPRSA) when conducted at least 3 nautical miles from shore. We handle all EPA compliance and documentation on your behalf.",
  },
  {
    q: "How much does a sea burial cost for Raleigh families?",
    a: "Our unattended scattering service starts at $400 and includes a free shipping kit, captain-led ceremony, GPS coordinates, scattering certificate, and EPA filing. There are no hidden fees. Add-on options like extra flowers, video, or expedited scheduling are available.",
  },
  {
    q: "Do I need to travel to the coast?",
    a: "No. Our unattended service is specifically designed for families who cannot be present. We send a free shipping kit to your Raleigh address, and the captain handles everything at sea. You receive full documentation afterward.",
  },
  {
    q: "How long does the process take from start to finish?",
    a: "Once we receive the cremated remains at our Carolina Beach location, scattering is typically performed within 5\u20137 business days, weather permitting. From your initial contact to final documentation, most families complete the process within 2\u20133 weeks.",
  },
  {
    q: "Can family members attend the ceremony?",
    a: "Yes. Our attended ceremony accommodates up to 6 guests aboard the vessel. However, for families in Raleigh, the unattended option is often preferred since it eliminates the 2.5-hour drive to the coast.",
  },
  {
    q: "What documentation do we receive?",
    a: "Every family receives an official Certificate of Sea Burial with the exact GPS coordinates and date of the ceremony. We also file the required EPA notification within 30 days. Photos are available upon request.",
  },
  {
    q: "How are the remains shipped safely?",
    a: "We provide a free USPS Priority Mail Express cremated remains shipping kit with everything you need — box, cushioning, sealing bag, and prepaid labels. USPS is the only carrier that ships cremated remains.",
  },
];

export default function RaleighPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 70%, #0a1628 100%)",
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
          <svg viewBox="0 0 1440 400" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 280 Q180 220 360 260 Q540 300 720 240 Q900 180 1080 230 Q1260 280 1440 220" stroke="#4ecdc4" strokeWidth="1.5" fill="none" />
            <path d="M0 320 Q180 260 360 300 Q540 340 720 280 Q900 220 1080 270 Q1260 320 1440 260" stroke="#4ecdc4" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2">
              <li><Link href="/" className="text-mist/45 text-xs tracking-[0.2em] uppercase hover:text-seafoam transition-colors" style={{ fontFamily: "var(--font-body)" }}>Home</Link></li>
              <li className="flex items-center gap-2"><span className="text-mist/25 text-xs">/</span><Link href="/service-areas" className="text-mist/45 text-xs tracking-[0.2em] uppercase hover:text-seafoam transition-colors" style={{ fontFamily: "var(--font-body)" }}>Service Areas</Link></li>
            </ol>
          </nav>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              lineHeight: 1.1,
            }}
            className="text-pearl mb-6"
          >
            Ocean Ash Scattering
            <br />
            for <em className="text-seafoam">Raleigh</em> Families
          </h1>
          <p
            className="text-mist/60 max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            A peaceful, dignified sea burial without leaving home. We send a
            free shipping kit to your door in Raleigh and handle everything
            at the coast — from ceremony to EPA documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full text-ocean-deep font-medium tracking-widest uppercase text-xs transition-all duration-300 hover:shadow-lg hover:shadow-seafoam/20"
              style={{
                fontFamily: "var(--font-body)",
                background: "linear-gradient(135deg, rgba(78,205,196,0.95) 0%, rgba(78,205,196,0.8) 100%)",
              }}
            >
              Speak With Us
            </Link>
            <Link
              href="/services/unattended-ash-scattering"
              className="px-10 py-4 rounded-full border border-pearl/20 text-pearl/80 tracking-widest uppercase text-xs transition-all duration-300 hover:border-pearl/40 hover:bg-pearl/5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to bottom, transparent, #0a1628)" }} />
      </section>

      {/* Intro */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }}
            className="text-pearl mb-6"
          >
            Serving Raleigh from the Carolina Coast
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Raleigh is approximately 2.5 hours from the North Carolina coast, but
              distance shouldn&apos;t stand between your family and a meaningful farewell.
              Our unattended ash scattering service bridges that gap — bringing the
              peace of the ocean to families across the Triangle without requiring
              anyone to travel.
            </p>
            <p>
              Since 2023, Serene Sea Burials has served families throughout the
              Raleigh-Durham area with the same care and professionalism we bring to
              every ceremony. Whether your loved one had a connection to the sea or
              your family simply wants an alternative to traditional burial, ocean
              scattering offers a beautiful, lasting tribute.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Ocean Ash Scattering */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/15 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
              The Service
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl">
              What Is Ocean Ash Scattering?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
              <p>
                Ocean ash scattering is the practice of releasing cremated remains
                into the sea — a tradition honored across cultures for centuries.
                In North Carolina, it&apos;s conducted under EPA regulations at least 3
                nautical miles offshore.
              </p>
              <p>
                Our captain departs from Carolina Beach with your loved one&apos;s
                remains, fresh flowers, and all required documentation. At the
                designated location, a respectful scattering ceremony takes place
                with a moment of quiet reflection.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border border-white/[0.04]">
              <h3 className="text-pearl mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.15rem" }}>
                Included with Every Service
              </h3>
              <ul className="space-y-3">
                {[
                  "Captain-led scattering ceremony",
                  "Fresh flower arrangement",
                  "GPS coordinates of scattering site",
                  "Official Certificate of Sea Burial",
                  "EPA notification filed within 30 days",
                  "Digital photos upon request",
                  "Free shipping kit (for Raleigh families)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-mist/55" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                      <path d="M2.5 7 L5.5 10 L11.5 3.5" stroke="#4ecdc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
              How It Works
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl">
              A Simple, Respectful Process
            </h2>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="glass rounded-2xl p-8 border border-white/[0.04] flex items-start gap-6">
                <span className="flex-shrink-0 text-seafoam/30 text-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
                  {step.num}
                </span>
                <div>
                  <h3 className="text-pearl mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.15rem" }}>
                    {step.title}
                  </h3>
                  <p className="text-mist/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-mist/50 text-sm mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            Have questions about ocean ash scattering for your family in Raleigh? We&apos;re here to talk — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full text-ocean-deep font-medium tracking-widest uppercase text-xs transition-all duration-300 hover:shadow-lg hover:shadow-seafoam/20"
              style={{ fontFamily: "var(--font-body)", background: "linear-gradient(135deg, rgba(78,205,196,0.95) 0%, rgba(78,205,196,0.8) 100%)" }}
            >
              Speak With Us
            </Link>
            <a
              href="tel:+19108331900"
              className="px-8 py-3 rounded-full border border-pearl/15 text-pearl/70 tracking-widest uppercase text-xs transition-all duration-300 hover:border-pearl/30"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Call (910) 833-1900
            </a>
          </div>
        </div>
      </section>

      {/* Why Serene Sea Burials */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/15 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Why Families Trust Us
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl">
              Why Choose Serene Sea Burials
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Affordable", desc: "Starting at $400 with no hidden fees. A fraction of traditional funeral costs." },
              { title: "Simple", desc: "We handle everything — shipping, ceremony, paperwork, and EPA filing." },
              { title: "Professional", desc: "USCG-certified captain. Every detail treated with dignity and respect." },
              { title: "Documented", desc: "GPS coordinates, certificate, photos, and full EPA compliance included." },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center">
                <h3 className="text-pearl mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.1rem" }}>
                  {item.title}
                </h3>
                <p className="text-mist/45 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raleigh-specific context */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Raleigh & the Triangle
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl mb-6">
            A Connection to the Coast
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Many families in Raleigh have deep ties to the North Carolina coast —
              summer vacations at Carolina Beach, fishing trips off Wrightsville,
              quiet weekends in Southport. For these families, an ocean scattering
              feels like a homecoming, not a departure.
            </p>
            <p>
              Even for those without a personal connection to the shore, the
              vastness and beauty of the Atlantic offers something traditional
              burial cannot: a sense of boundless peace. There are no plots to
              maintain, no geographic limitations for future visits — just the
              enduring rhythm of the ocean.
            </p>
            <p>
              We also serve families across the Triangle, including{" "}
              <Link href="/service-areas/cary" className="text-seafoam/70 hover:text-seafoam transition-colors">Cary</Link>,{" "}
              <Link href="/service-areas/durham" className="text-seafoam/70 hover:text-seafoam transition-colors">Durham</Link>,
              Chapel Hill, Apex, and Wake Forest.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/15 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Common Questions
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl">
              Sea Burial Questions for Raleigh Families
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-white/[0.04]">
                <h3 className="text-pearl mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.05rem" }}>
                  {faq.q}
                </h3>
                <p className="text-mist/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Service Areas */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2rem)", lineHeight: 1.15 }} className="text-pearl">
              We Also Serve Families In
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "Cary", href: "/service-areas/cary" },
              { name: "Durham", href: "/service-areas/durham" },
              { name: "Fayetteville", href: "/service-areas/fayetteville" },
              { name: "Charlotte", href: "/service-areas/charlotte" },
            ].map((city, i) => (
              <Link
                key={i}
                href={city.href}
                className="glass rounded-xl p-4 text-center group hover:border-seafoam/20 transition-all duration-300 border border-transparent"
              >
                <span className="text-pearl/80 text-sm group-hover:text-seafoam transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                  {city.name}, NC
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas" className="text-seafoam/60 text-xs tracking-widest uppercase hover:text-seafoam transition-colors" style={{ fontFamily: "var(--font-body)" }}>
              View All Service Areas →
            </Link>
          </div>
          {/* Service links */}
          <div className="text-center mt-6">
            <p className="text-mist/30 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              <Link href="/services/unattended-ash-scattering" className="hover:text-mist/50 transition-colors">Unattended Scattering</Link>
              {" · "}
              <Link href="/services/attended-ceremony" className="hover:text-mist/50 transition-colors">Attended Ceremony</Link>
              {" · "}
              <Link href="/shipping-instructions" className="hover:text-mist/50 transition-colors">Shipping Instructions</Link>
              {" · "}
              <Link href="/faq" className="hover:text-mist/50 transition-colors">FAQ</Link>
              {" · "}
              <Link href="/epa-compliance" className="hover:text-mist/50 transition-colors">EPA Compliance</Link>
              {" · "}
              <Link href="/blog" className="hover:text-mist/50 transition-colors">Blog</Link>
            </p>
          </div>
        </div>
      </section>

      <InnerCTA
        title="We're Here for Raleigh Families"
        subtitle="Whenever you're ready, we'll guide you through every step with patience and care."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
