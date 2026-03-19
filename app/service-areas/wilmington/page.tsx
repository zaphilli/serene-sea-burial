import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Sea Burial Services in Wilmington, NC",
  description:
    "Ocean ash scattering services for Wilmington, NC families. Just 20 minutes from Carolina Beach — attended and unattended sea burials starting at $400 with local drop-off available.",
  alternates: { canonical: `${siteUrl}/service-areas/wilmington` },
  openGraph: {
    url: `${siteUrl}/service-areas/wilmington`,
    title: "Sea Burial Services in Wilmington, NC | Serene Sea Burials",
    description:
      "Attended and unattended ocean ash scattering for Wilmington families. Local drop-off available — just 20 minutes to Carolina Beach.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ocean Ash Scattering for Wilmington NC",
  description:
    "EPA-compliant ocean ash scattering services for families in Wilmington, North Carolina. Attended and unattended ceremonies departing from Carolina Beach, just 20 minutes away.",
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
    name: "Wilmington",
    containedInPlace: { "@type": "State", name: "North Carolina" },
  },
  offers: {
    "@type": "Offer",
    price: "400",
    priceCurrency: "USD",
  },
};

const steps = [
  {
    num: "01",
    title: "Reach Out",
    desc: "Call us or fill out the form on our website. We\u2019ll walk you through both attended and unattended options and help you decide what feels right for your family.",
  },
  {
    num: "02",
    title: "Drop Off or Ship Remains",
    desc: "Since Wilmington is just 20 minutes from our Carolina Beach location, most families choose to drop off remains in person. We\u2019re also happy to send a free USPS shipping kit if that\u2019s more convenient.",
  },
  {
    num: "03",
    title: "The Ceremony at Sea",
    desc: "For attended ceremonies, your family meets our captain at the Carolina Beach dock \u2014 a short drive down the coast. For unattended services, our captain performs the scattering with the same care and reverence.",
  },
  {
    num: "04",
    title: "Documentation Delivered",
    desc: "You receive GPS coordinates of the scattering site, an official certificate, optional photographs, and we file the required EPA notification on your behalf.",
  },
];

const faqs = [
  {
    q: "How does an attended ceremony work for Wilmington families?",
    a: "You and up to 6 guests meet our captain at the Carolina Beach dock, roughly 20 minutes south of downtown Wilmington. From there, you\u2019ll cruise approximately 3 nautical miles offshore where you can participate directly in the scattering, say your goodbyes, and place flowers on the water. The entire trip takes about 90 minutes.",
  },
  {
    q: "Can we do a sunset ceremony?",
    a: "Yes. Sunset departures are one of the most meaningful options we offer, and the proximity from Wilmington makes evening scheduling very practical. We\u2019ll coordinate timing based on sunset and tidal conditions to create the best possible experience.",
  },
  {
    q: "Can we drop off remains instead of shipping them?",
    a: "Absolutely. Many Wilmington families prefer to bring remains to our Carolina Beach office at 220 Annie Dr in person. It\u2019s a short drive and gives you the chance to see where your loved one\u2019s journey will begin. If you prefer to ship, we\u2019ll send a free USPS Priority Mail Express kit to your door.",
  },
  {
    q: "What\u2019s the difference between attended and unattended scattering?",
    a: "With an attended ceremony, family members board the vessel and are present for the scattering. With unattended, our captain performs the ceremony with the same reverence, and you receive full documentation including GPS coordinates and photographs. Because Wilmington is so close, many local families choose the attended option.",
  },
  {
    q: "How far in advance should we book an attended ceremony?",
    a: "We recommend scheduling at least 5\u20137 days in advance for attended services so we can coordinate weather, tides, and your family\u2019s preferred time. However, we understand that grief doesn\u2019t follow a calendar \u2014 we accommodate urgent requests whenever possible.",
  },
  {
    q: "How much does an attended sea burial cost?",
    a: "Our unattended scattering service starts at $400. Attended ceremonies, where your family joins the captain aboard the vessel, are priced separately. Contact us for current attended ceremony pricing. Both options include GPS coordinates, a scattering certificate, flowers, and full EPA compliance.",
  },
  {
    q: "Do you serve families in Wrightsville Beach and Hampstead too?",
    a: "Yes. We regularly serve families across the greater Wilmington area including Wrightsville Beach, Leland, Hampstead, and all of New Hanover and Brunswick counties. Carolina Beach is easily accessible from anywhere in the region.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function WilmingtonPage() {
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
            Sea Burial Services
            <br />
            for <em className="text-seafoam">Wilmington</em> Families
          </h1>
          <p
            className="text-mist/60 max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Just 20 minutes from Carolina Beach, Wilmington families have the
            unique option of attending the ceremony in person. Whether you choose
            to be there or let us handle everything, we provide a dignified
            farewell at sea.
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
              href="/services/attended-ceremony"
              className="px-10 py-4 rounded-full border border-pearl/20 text-pearl/80 tracking-widest uppercase text-xs transition-all duration-300 hover:border-pearl/40 hover:bg-pearl/5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Attended Ceremonies
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
            Your Neighbors on the Coast
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Wilmington is the largest city near Carolina Beach, and for families
              here, ocean ash scattering isn&apos;t a distant service &mdash; it&apos;s a
              local one. The drive from downtown Wilmington to our dock takes
              roughly 20 minutes, making both attended and unattended ceremonies
              genuinely convenient.
            </p>
            <p>
              The Cape Fear River winds through the heart of Wilmington before
              meeting the Atlantic just south of Carolina Beach. For many local
              families, the waters off our coast already hold deep personal meaning &mdash;
              afternoons at Wrightsville Beach, boat rides along the Intracoastal,
              sunsets over the river. A sea burial here feels less like a farewell
              and more like a return.
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
                Ocean ash scattering is the release of cremated remains into the
                sea &mdash; a tradition honored across cultures for centuries.
                Under EPA regulations, scattering is conducted at least 3
                nautical miles offshore in the open Atlantic.
              </p>
              <p>
                For Wilmington families, the attended ceremony is especially
                accessible. You and your loved ones board the vessel at our
                Carolina Beach dock, travel to the scattering site together,
                and participate directly in the ceremony with flowers and a
                moment of quiet reflection.
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
                  "Free shipping kit or local drop-off",
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
            Have questions about ocean ash scattering for your family in Wilmington? We&apos;re here to talk — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="px-8 py-3 rounded-full text-ocean-deep font-medium tracking-widest uppercase text-xs transition-all duration-300 hover:shadow-lg hover:shadow-seafoam/20" style={{ fontFamily: "var(--font-body)", background: "linear-gradient(135deg, rgba(78,205,196,0.95) 0%, rgba(78,205,196,0.8) 100%)" }}>
              Speak With Us
            </Link>
            <a href="tel:+19108331900" className="px-8 py-3 rounded-full border border-pearl/15 text-pearl/70 tracking-widest uppercase text-xs transition-all duration-300 hover:border-pearl/30" style={{ fontFamily: "var(--font-body)" }}>
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
              { title: "Local", desc: "We\u2019re right down the road. Drop off remains, attend a ceremony, or simply stop by to talk." },
              { title: "Flexible", desc: "Choose attended or unattended. Sunset or morning. In-person drop-off or shipping. Your call." },
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

      {/* Wilmington-specific context */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Wilmington & the Cape Fear Coast
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl mb-6">
            Close Enough to Be There
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Unlike families hours away who rely on our shipping service,
              Wilmington residents have the rare privilege of being genuinely
              close. You can drop off your loved one&apos;s remains in person, meet
              the captain, and even watch the vessel depart from the Carolina
              Beach marina. That proximity transforms the experience from a
              logistical arrangement into something deeply personal.
            </p>
            <p>
              For families who choose the attended ceremony, the short drive
              down to Carolina Beach means there&apos;s no need for hotels, long
              road trips, or complicated travel plans. Gather your family in
              Wilmington, head to the coast, and return home the same afternoon
              with a sense of peace and closure.
            </p>
            <p>
              We also proudly serve families throughout the region, including{" "}
              <Link href="/service-areas/carolina-beach" className="text-seafoam/70 hover:text-seafoam transition-colors">Carolina Beach</Link>,{" "}
              Wrightsville Beach, Leland, and Hampstead.
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
              Sea Burial Questions for Wilmington Families
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
              { name: "Carolina Beach", href: "/service-areas/carolina-beach" },
              { name: "Southport", href: "/service-areas/southport" },
              { name: "Jacksonville", href: "/service-areas/jacksonville" },
              { name: "Fayetteville", href: "/service-areas/fayetteville" },
            ].map((city, i) => (
              <Link key={i} href={city.href} className="glass rounded-xl p-4 text-center group hover:border-seafoam/20 transition-all duration-300 border border-transparent">
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
          <div className="text-center mt-6">
            <p className="text-mist/30 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              <Link href="/services/unattended-ash-scattering" className="hover:text-mist/50 transition-colors">Unattended Scattering</Link>{" · "}<Link href="/services/attended-ceremony" className="hover:text-mist/50 transition-colors">Attended Ceremony</Link>{" · "}<Link href="/shipping-instructions" className="hover:text-mist/50 transition-colors">Shipping Instructions</Link>{" · "}<Link href="/faq" className="hover:text-mist/50 transition-colors">FAQ</Link>{" · "}<Link href="/epa-compliance" className="hover:text-mist/50 transition-colors">EPA Compliance</Link>{" · "}<Link href="/blog" className="hover:text-mist/50 transition-colors">Blog</Link>
            </p>
          </div>
        </div>
      </section>

      <InnerCTA
        title="We're Here for Wilmington Families"
        subtitle="Whether you want to attend in person or let us handle everything, we'll guide you with patience and care."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
