import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Ash Scattering at Sea near Jacksonville, NC",
  description:
    "Ocean ash scattering near Jacksonville, NC and Camp Lejeune. Just 1 hour from Carolina Beach — attend in person or use our free shipping kit. Dignified sea burials from $400.",
  alternates: { canonical: `${siteUrl}/service-areas/jacksonville` },
  openGraph: {
    url: `${siteUrl}/service-areas/jacksonville`,
    title: "Ash Scattering at Sea — Jacksonville, NC | Serene Sea Burials",
    description:
      "Ocean ash scattering for Jacksonville and Camp Lejeune families. Close enough to attend in person, starting at $400.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ash Scattering at Sea near Jacksonville NC",
  description:
    "EPA-compliant ocean ash scattering services for families in Jacksonville, North Carolina and the Camp Lejeune community. Attended and unattended ceremonies from Carolina Beach.",
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
    name: "Jacksonville",
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
    title: "Reach Out to Our Team",
    desc: "Give us a call or submit an inquiry online. We\u2019ll discuss your options and help you decide between an attended ceremony or our unattended service.",
  },
  {
    num: "02",
    title: "Deliver or Ship the Remains",
    desc: "Jacksonville is close enough to drop off remains in person at our Carolina Beach location. Alternatively, we\u2019ll send a free USPS Priority Mail Express shipping kit to your door.",
  },
  {
    num: "03",
    title: "The Scattering Ceremony",
    desc: "Our captain heads at least 3 nautical miles offshore from Carolina Beach. The scattering is performed with fresh flowers, a moment of reflection, and the utmost respect.",
  },
  {
    num: "04",
    title: "Complete Documentation",
    desc: "Your family receives GPS coordinates pinpointing the scattering location, a Certificate of Sea Burial, optional photos, and we handle the EPA notification filing.",
  },
];

const faqs = [
  {
    q: "How close is Jacksonville to the scattering departure point?",
    a: "Carolina Beach is approximately 1 hour south of Jacksonville by car, making it one of our closest service areas. This proximity makes attended ceremonies especially convenient for Jacksonville families.",
  },
  {
    q: "Can we attend the ceremony from Jacksonville?",
    a: "Yes, and we encourage it if that feels right for your family. Our attended ceremony accommodates up to 6 guests aboard the vessel. The short drive from Jacksonville means you can be there and back in a single morning or afternoon.",
  },
  {
    q: "Do many military families choose sea burial?",
    a: "They do. Jacksonville\u2019s deep connection to Camp Lejeune and the Marine Corps means many families here feel a natural affinity for the ocean. Sea burial carries a sense of honor and tradition that resonates strongly with the military community.",
  },
  {
    q: "What is included in the unattended service?",
    a: "For $400, the unattended service covers a captain-led ceremony with fresh flowers, GPS coordinates, a Certificate of Sea Burial, EPA notification filing, and optional photos. If you\u2019re in Jacksonville, we also offer a free shipping kit or you can deliver remains directly.",
  },
  {
    q: "What happens if the weather delays the ceremony?",
    a: "Safety is our priority. If weather conditions prevent a safe departure, we reschedule at no additional cost. Jacksonville families will be notified promptly, and we work to complete the ceremony as soon as conditions allow.",
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

export default function JacksonvillePage() {
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
            Ash Scattering at Sea
            <br />
            near <em className="text-seafoam">Jacksonville</em>
          </h1>
          <p
            className="text-mist/60 max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Just an hour from Carolina Beach, Jacksonville families can attend
            the ceremony in person or let our captain handle everything. Either
            way, your loved one receives a dignified farewell at sea.
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
              Attended Ceremony
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
            Where the Military Meets the Sea
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Jacksonville sits at the crossroads of military life and the North
              Carolina coast. Home to Camp Lejeune and Marine Corps Air Station
              New River, this community understands service, sacrifice, and the
              deep pull of the ocean. For many families here, the sea isn&apos;t
              just a backdrop — it&apos;s part of daily life.
            </p>
            <p>
              At roughly one hour from our Carolina Beach departure point,
              Jacksonville is ideally situated for both attended and unattended
              ceremonies. Whether your family wants to stand at the rail as
              flowers meet the waves or prefers the quiet simplicity of our
              captain-led service, we provide a farewell worthy of the life
              being honored.
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
              A Straightforward, Honorable Process
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
            Have questions about ocean ash scattering for your family in Jacksonville? We&apos;re here to talk — no pressure, no obligation.
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

      {/* Jacksonville-specific context */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Camp Lejeune & the Coast
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl mb-6">
            The Ocean Is Already Part of Your Story
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              For Jacksonville residents, the Atlantic is more than scenery.
              Marines train along its shores, families spend weekends at
              Onslow Beach, and the salt air is part of the fabric of life here.
              Choosing ocean ash scattering isn&apos;t a departure from the familiar
              — it&apos;s a natural extension of it.
            </p>
            <p>
              The proximity of Jacksonville to Carolina Beach also means
              attended ceremonies are especially practical. A short morning drive
              puts your family aboard the vessel, and you&apos;re home by afternoon.
              It&apos;s a meaningful experience that doesn&apos;t require extensive
              planning or time away from work and family responsibilities.
            </p>
            <p>
              We also serve families in{" "}
              <Link href="/service-areas/wilmington" className="text-seafoam/70 hover:text-seafoam transition-colors">Wilmington</Link>,{" "}
              <Link href="/service-areas/fayetteville" className="text-seafoam/70 hover:text-seafoam transition-colors">Fayetteville</Link>,{" "}
              <Link href="/service-areas/southport" className="text-seafoam/70 hover:text-seafoam transition-colors">Southport</Link>,
              and throughout coastal North Carolina.
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
              Ash Scattering Questions for Jacksonville Families
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
              { name: "Wilmington", href: "/service-areas/wilmington" },
              { name: "Carolina Beach", href: "/service-areas/carolina-beach" },
              { name: "Fayetteville", href: "/service-areas/fayetteville" },
              { name: "Southport", href: "/service-areas/southport" },
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
        title="We're Here for Jacksonville Families"
        subtitle="Whenever you're ready, we'll guide you through every step with patience and care."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
