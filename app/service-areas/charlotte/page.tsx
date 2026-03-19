import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Ocean Ash Scattering for Charlotte Families",
  description:
    "Ocean ash scattering services for Charlotte, NC families. No travel to the coast required — we ship a free kit to your door. Dignified sea burials from $400 with GPS coordinates and EPA documentation.",
  alternates: { canonical: `${siteUrl}/service-areas/charlotte` },
  openGraph: {
    url: `${siteUrl}/service-areas/charlotte`,
    title: "Ocean Ash Scattering — Charlotte, NC | Serene Sea Burials",
    description:
      "Peaceful ocean ash scattering for Charlotte families. Free shipping kit, no travel needed, starting at $400.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ocean Ash Scattering for Charlotte NC",
  description:
    "EPA-compliant ocean ash scattering services for families in Charlotte, North Carolina. Free shipping kit eliminates the need to travel to the coast.",
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
    name: "Charlotte",
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
    title: "Contact Us",
    desc: "Reach out by phone or through our website. We\u2019ll explain your options and answer any questions about ocean ash scattering from Charlotte.",
  },
  {
    num: "02",
    title: "We Ship the Kit to You",
    desc: "A free USPS Priority Mail Express cremated remains shipping kit arrives at your Charlotte address with everything you need \u2014 packaging, sealing bag, and prepaid return label.",
  },
  {
    num: "03",
    title: "The Ocean Ceremony",
    desc: "Our captain departs Carolina Beach and performs a respectful scattering ceremony at least 3 nautical miles offshore, accompanied by fresh flowers and a moment of reflection.",
  },
  {
    num: "04",
    title: "Full Documentation Mailed",
    desc: "You receive the exact GPS coordinates, a Certificate of Sea Burial, optional photographs, and confirmation that the EPA notification has been filed.",
  },
];

const faqs = [
  {
    q: "Do I need to drive to the coast from Charlotte?",
    a: "Not at all. Our unattended service was designed for families who live far from the ocean. We mail a free shipping kit to your Charlotte home, you drop it at any local post office, and our captain handles everything from there. You never need to leave the city.",
  },
  {
    q: "How much does ocean ash scattering cost from Charlotte?",
    a: "Our unattended scattering starts at $400 and covers everything: the shipping kit, captain-led ceremony, fresh flowers, GPS coordinates, Certificate of Sea Burial, and EPA filing. There are no extra fees for shipping to Charlotte.",
  },
  {
    q: "How long does the entire process take?",
    a: "After we receive the cremated remains at our Carolina Beach facility, scattering is typically completed within 5\u20137 business days, weather dependent. Including shipping time from Charlotte, most families complete the process in about 2\u20133 weeks from first contact.",
  },
  {
    q: "Is this legal and properly regulated?",
    a: "Yes. Ocean ash scattering is legal under the Marine Protection, Research and Sanctuaries Act (MPRSA) when conducted at least 3 nautical miles from shore. We maintain full EPA compliance and file all required documentation after every ceremony.",
  },
  {
    q: "What if our family wants to attend in person?",
    a: "We offer an attended ceremony that accommodates up to 6 guests aboard the vessel at Carolina Beach. Charlotte is roughly 3.5 hours from the coast, so some families choose to combine the trip with a weekend at the beach. Many others prefer the simplicity of our unattended option.",
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

export default function CharlottePage() {
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
            for <em className="text-seafoam">Charlotte</em> Families
          </h1>
          <p
            className="text-mist/60 max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            NC&apos;s largest city may be hours from the coast, but that
            doesn&apos;t mean the ocean is out of reach. Our free shipping kit
            brings a meaningful sea burial to your doorstep — no travel required.
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
            Bringing the Coast to Charlotte
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Charlotte is the heart of North Carolina, but it sits about 3.5
              hours from the nearest beach. For families who want a sea burial
              without the long drive, our unattended scattering service makes it
              effortless. We ship everything you need directly to your Charlotte
              address, and our captain takes care of the ceremony at sea.
            </p>
            <p>
              Many Charlotte residents originally relocated from coastal
              communities or spent years building memories at North Carolina&apos;s
              beaches. Returning a loved one to those waters can be a powerful
              way to honor their story, no matter how far inland life may have
              taken them.
            </p>
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
              Effortless from Start to Finish
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
            Have questions about ocean ash scattering for your family in Charlotte? We&apos;re here to talk — no pressure, no obligation.
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

      {/* Charlotte-specific context */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Charlotte & the Queen City
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl mb-6">
            Distance Doesn&apos;t Diminish Meaning
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Charlotte families often tell us the same thing: they wish they
              could give their loved one a sea burial, but the coast feels too
              far away. That&apos;s exactly why we built our shipping kit service.
              One small package arrives at your door, you visit your nearest post
              office, and we handle everything else from Carolina Beach.
            </p>
            <p>
              There are no plots to purchase, no annual maintenance fees, and no
              geographic boundaries on where you can remember someone. The
              Atlantic Ocean becomes a living, enduring memorial — one your
              family can revisit any time they stand at the shore.
            </p>
            <p>
              We also serve families in{" "}
              <Link href="/service-areas/raleigh" className="text-seafoam/70 hover:text-seafoam transition-colors">Raleigh</Link>,{" "}
              <Link href="/service-areas/durham" className="text-seafoam/70 hover:text-seafoam transition-colors">Durham</Link>,{" "}
              <Link href="/service-areas/fayetteville" className="text-seafoam/70 hover:text-seafoam transition-colors">Fayetteville</Link>,
              and across North Carolina.
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
              Sea Burial Questions for Charlotte Families
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
              { name: "Raleigh", href: "/service-areas/raleigh" },
              { name: "Durham", href: "/service-areas/durham" },
              { name: "Fayetteville", href: "/service-areas/fayetteville" },
              { name: "Cary", href: "/service-areas/cary" },
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
        </div>
      </section>

      <InnerCTA
        title="We're Here for Charlotte Families"
        subtitle="Whenever you're ready, we'll guide you through every step with patience and care."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
