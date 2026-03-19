import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Sea Burial Services near Southport, NC",
  description:
    "Ocean ash scattering near Southport, NC. Just 30 minutes by ferry from Carolina Beach. Attended and unattended sea burials from $400 with full documentation and EPA compliance.",
  alternates: { canonical: `${siteUrl}/service-areas/southport` },
  openGraph: {
    url: `${siteUrl}/service-areas/southport`,
    title: "Sea Burial Services — Southport, NC | Serene Sea Burials",
    description:
      "Ocean ash scattering for Southport families. Close to our Carolina Beach departure point, starting at $400.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sea Burial Services near Southport NC",
  description:
    "EPA-compliant ocean ash scattering services for families in Southport, North Carolina. Attended and unattended ceremonies departing from nearby Carolina Beach.",
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
    name: "Southport",
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
    title: "Start the Conversation",
    desc: "Call us or use the contact form on our website. We\u2019ll help you choose between an attended ceremony or our unattended captain-led service.",
  },
  {
    num: "02",
    title: "Bring or Ship the Remains",
    desc: "Southport is so close to Carolina Beach that many families deliver remains in person. We also offer a free USPS Priority Mail Express shipping kit if that\u2019s more convenient.",
  },
  {
    num: "03",
    title: "A Ceremony on the Water",
    desc: "Our captain departs from Carolina Beach and travels at least 3 nautical miles offshore for a respectful scattering with fresh flowers and a moment of silence.",
  },
  {
    num: "04",
    title: "Your Records, Delivered",
    desc: "We provide GPS coordinates of the scattering site, a Certificate of Sea Burial, optional photographs, and handle all EPA notification paperwork.",
  },
];

const faqs = [
  {
    q: "How do I get from Southport to Carolina Beach?",
    a: "You have two options: the Fort Fisher Ferry, which takes about 30 minutes and runs daily, or driving via Highway 133 and Route 87, which is approximately 50 minutes. Either route is scenic and straightforward.",
  },
  {
    q: "Is an attended ceremony practical from Southport?",
    a: "Absolutely. Southport is one of our closest service areas, making attended ceremonies very convenient. You can take the morning ferry, join the ceremony, and be home by lunch. Up to 6 guests can be aboard the vessel.",
  },
  {
    q: "How much does the service cost?",
    a: "Our unattended scattering starts at $400 and includes a captain-led ceremony, fresh flowers, GPS coordinates, Certificate of Sea Burial, and EPA filing. Attended ceremonies are priced separately \u2014 contact us for current rates.",
  },
  {
    q: "Do you scatter ashes in the Cape Fear River?",
    a: "No. All scatterings are conducted in the Atlantic Ocean, at least 3 nautical miles from shore, in compliance with EPA regulations under the MPRSA. This ensures the ceremony meets all federal requirements.",
  },
  {
    q: "Can we schedule around the ferry times?",
    a: "Of course. We\u2019re flexible with scheduling and happy to coordinate departure times so Southport families taking the Fort Fisher Ferry can arrive comfortably before the ceremony begins.",
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

export default function SouthportPage() {
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
            near <em className="text-seafoam">Southport</em>
          </h1>
          <p
            className="text-mist/60 max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            A short ferry ride or scenic drive from one of North Carolina&apos;s
            most cherished coastal towns. Southport families can attend the
            ceremony in person or let us handle everything from start to finish.
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
            Southport&apos;s Maritime Heart
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Nestled at the mouth of the Cape Fear River where it meets the
              Atlantic, Southport is a town shaped by the water. Generations of
              fishermen, pilots, and coastal families have called this place
              home, and the ocean is woven into its identity. For Southport
              residents, choosing a sea burial feels less like an alternative
              and more like a homecoming.
            </p>
            <p>
              Our Carolina Beach departure point is remarkably close — just a
              30-minute ferry ride across the river or about 50 minutes by road.
              That proximity means attending the ceremony is simple and
              stress-free, though our unattended service is always available for
              families who prefer it.
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
              Simple Steps, Lasting Peace
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
            Have questions about ocean ash scattering for your family in Southport? We&apos;re here to talk — no pressure, no obligation.
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

      {/* Southport-specific context */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            A Coastal Tradition
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl mb-6">
            Where River Meets Ocean
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Southport&apos;s waterfront has watched centuries of ships pass
              between the Cape Fear River and the open Atlantic. The town&apos;s
              deep maritime heritage means families here understand the pull of
              the water better than most. An ocean scattering honors that
              connection in the most personal way possible.
            </p>
            <p>
              Whether your family has lived in Southport for decades or retired
              here drawn by the charm of this quiet coastal town, the ocean
              offers a memorial without walls or boundaries. Your loved one
              becomes part of the tides, the currents, and the enduring rhythm
              of the coast they called home.
            </p>
            <p>
              We also serve families in{" "}
              <Link href="/service-areas/wilmington" className="text-seafoam/70 hover:text-seafoam transition-colors">Wilmington</Link>,{" "}
              <Link href="/service-areas/carolina-beach" className="text-seafoam/70 hover:text-seafoam transition-colors">Carolina Beach</Link>,{" "}
              <Link href="/service-areas/fayetteville" className="text-seafoam/70 hover:text-seafoam transition-colors">Fayetteville</Link>,
              and across southeastern North Carolina.
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
              Sea Burial Questions near Southport
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
              { name: "Wilmington", href: "/service-areas/wilmington" },
              { name: "Fayetteville", href: "/service-areas/fayetteville" },
              { name: "Jacksonville", href: "/service-areas/jacksonville" },
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
        title="We're Here for Southport Families"
        subtitle="Whenever you're ready, we'll guide you through every step with patience and care."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
