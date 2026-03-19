import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Sea Burial Services for Fayetteville, NC",
  description:
    "Ocean ash scattering for Fayetteville, NC families. Serving the Fort Liberty community with dignified sea burials from $400. Free USPS shipping kit, GPS coordinates, and military-friendly service.",
  alternates: { canonical: `${siteUrl}/service-areas/fayetteville` },
  openGraph: {
    url: `${siteUrl}/service-areas/fayetteville`,
    title: "Sea Burial Services — Fayetteville, NC | Serene Sea Burials",
    description:
      "Dignified ocean ash scattering for Fayetteville and Fort Liberty families. Free shipping kit, full documentation, starting at $400.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sea Burial Services for Fayetteville NC",
  description:
    "EPA-compliant ocean ash scattering services for families in Fayetteville, North Carolina. Proudly serving the Fort Liberty military community with dignified ceremonies from Carolina Beach.",
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
    name: "Fayetteville",
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
    title: "Get in Touch",
    desc: "Call or fill out our online form. We\u2019ll walk you through our services and help determine which option fits your family\u2019s needs.",
  },
  {
    num: "02",
    title: "Receive Your Shipping Kit",
    desc: "We\u2019ll mail a free USPS Priority Mail Express shipping kit directly to your Fayetteville address. Everything you need is included \u2014 box, cushioning, sealing bag, and prepaid label.",
  },
  {
    num: "03",
    title: "Ceremony at Sea",
    desc: "Our USCG-certified captain departs from Carolina Beach, approximately 2 hours from Fayetteville, and conducts a respectful scattering ceremony at least 3 nautical miles offshore.",
  },
  {
    num: "04",
    title: "Receive Your Documentation",
    desc: "We send you the GPS coordinates of the scattering location, a Certificate of Sea Burial, optional photographs, and we file all required EPA paperwork on your behalf.",
  },
];

const faqs = [
  {
    q: "Do you offer any military accommodations for sea burials?",
    a: "While our service is the same for all families, many military families find deep meaning in ocean scattering. The sea has a long tradition in military honors, and we treat every ceremony with the dignity and respect that service members and their families deserve.",
  },
  {
    q: "How far is Fayetteville from the scattering location?",
    a: "Carolina Beach is roughly 2 hours from Fayetteville by car. For families who prefer not to make the drive, our unattended service handles everything \u2014 just ship the remains using our free kit and we take care of the rest.",
  },
  {
    q: "What does the $400 unattended service include?",
    a: "The unattended scattering includes a free USPS shipping kit sent to your Fayetteville address, a captain-led ceremony with fresh flowers, GPS coordinates, an official Certificate of Sea Burial, and EPA notification filing. No hidden costs.",
  },
  {
    q: "Can my family be present for the scattering?",
    a: "Absolutely. Our attended ceremony accommodates up to 6 guests aboard the vessel departing from Carolina Beach. Many Fayetteville families choose to make the 2-hour trip for this meaningful experience.",
  },
  {
    q: "How do I ship cremated remains safely?",
    a: "We provide a complimentary USPS Priority Mail Express kit with all required packaging materials and prepaid labels. USPS is the only carrier authorized to ship cremated remains in the United States. Simply pack the kit and drop it at any Fayetteville post office.",
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

export default function FayettevillePage() {
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
            for <em className="text-seafoam">Fayetteville</em> Families
          </h1>
          <p
            className="text-mist/60 max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Honoring those who served — and those they loved. We provide
            dignified ocean ash scattering for Fayetteville and the Fort Liberty
            community, with a free shipping kit delivered straight to your door.
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
            Proudly Serving the Fayetteville Community
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Fayetteville is home to one of the largest military communities in
              the United States. For generations, service members stationed at
              Fort Liberty have forged a bond with duty, honor, and tradition.
              Ocean ash scattering carries forward that sense of ceremony — a
              final tribute conducted with the care and respect your family deserves.
            </p>
            <p>
              Located approximately 2 hours from Carolina Beach, Fayetteville
              families can choose between our unattended service with a free
              shipping kit or an attended ceremony where up to 6 guests join the
              captain aboard the vessel. Either way, we handle every detail so
              you can focus on honoring your loved one.
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
              Four Steps to a Meaningful Farewell
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
            Have questions about ocean ash scattering for your family in Fayetteville? We&apos;re here to talk — no pressure, no obligation.
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

      {/* Fayetteville-specific context */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Military Heritage & the Sea
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl mb-6">
            A Tradition That Runs Deep
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              The connection between military service and the sea stretches back
              centuries. Burial at sea has long been one of the most honored
              traditions in the armed forces, symbolizing a return to the vast
              waters that have carried service members across the globe. For
              Fayetteville&apos;s military families, ocean ash scattering offers a
              way to carry that tradition forward with grace and simplicity.
            </p>
            <p>
              Whether your loved one spent a career at Fort Liberty, deployed
              from North Carolina&apos;s coast, or simply found peace near the water,
              this service provides a lasting tribute that feels right. Our
              USPS shipping kit makes it easy — no travel required, no
              complicated logistics, just a dignified ceremony at sea.
            </p>
            <p>
              We also serve families in nearby{" "}
              <Link href="/service-areas/raleigh" className="text-seafoam/70 hover:text-seafoam transition-colors">Raleigh</Link>,{" "}
              <Link href="/service-areas/jacksonville" className="text-seafoam/70 hover:text-seafoam transition-colors">Jacksonville</Link>,{" "}
              <Link href="/service-areas/wilmington" className="text-seafoam/70 hover:text-seafoam transition-colors">Wilmington</Link>,
              and throughout southeastern North Carolina.
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
              Sea Burial Questions for Fayetteville Families
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
              { name: "Jacksonville", href: "/service-areas/jacksonville" },
              { name: "Wilmington", href: "/service-areas/wilmington" },
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
        </div>
      </section>

      <InnerCTA
        title="We're Here for Fayetteville Families"
        subtitle="Whenever you're ready, we'll guide you through every step with patience and care."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
