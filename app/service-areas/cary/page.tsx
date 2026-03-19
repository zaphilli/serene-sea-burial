import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Ash Scattering at Sea for Cary, NC Families",
  description:
    "Sea burial and ocean ash scattering services for Cary, NC families. Unattended cremation scattering from $400 with free shipping kit, GPS coordinates, and certificate.",
  alternates: { canonical: `${siteUrl}/service-areas/cary` },
  openGraph: {
    url: `${siteUrl}/service-areas/cary`,
    title: "Ash Scattering at Sea — Cary, NC | Serene Sea Burials",
    description:
      "Meaningful ocean ash scattering for Cary families. Free shipping kit, full documentation, starting at $400.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ocean Ash Scattering for Cary NC",
  description:
    "EPA-compliant ocean ash scattering services for families in Cary, North Carolina. Unattended and attended ceremonies from Carolina Beach.",
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
    name: "Cary",
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
    desc: "Call us or fill out our online form. We\u2019ll walk you through the options and help you decide what feels right for your family.",
  },
  {
    num: "02",
    title: "Receive Your Shipping Kit",
    desc: "We\u2019ll mail a free USPS Priority Mail Express kit directly to your Cary address. Everything you need is inside \u2014 just pack the remains and drop it off at any post office.",
  },
  {
    num: "03",
    title: "Ceremony at Sea",
    desc: "Our USCG-certified captain carries your loved one approximately 3 nautical miles offshore from Carolina Beach and performs a respectful scattering with fresh flowers.",
  },
  {
    num: "04",
    title: "Receive Your Documentation",
    desc: "We send you the exact GPS coordinates, an official Certificate of Sea Burial, optional photographs, and handle the required EPA notification on your behalf.",
  },
];

const faqs = [
  {
    q: "Why do Cary families choose ocean ash scattering?",
    a: "Many Cary residents are newer to North Carolina and may not have established family burial plots in the area. Ocean ash scattering offers a meaningful, location-independent alternative that doesn\u2019t require maintaining a gravesite. It\u2019s also significantly more affordable than purchasing a cemetery plot and headstone.",
  },
  {
    q: "How do I send cremated remains from Cary to the coast?",
    a: "We provide a free USPS Priority Mail Express shipping kit that includes a sturdy box, cushioning materials, a sealing bag, and prepaid shipping labels. Simply pack the remains and drop the kit at any Cary-area post office. USPS is the only carrier authorized to ship cremated remains.",
  },
  {
    q: "What is the total cost for an unattended sea burial?",
    a: "Our unattended scattering service is $400 and covers everything: the free shipping kit, captain-led ceremony, fresh flowers, GPS coordinates, Certificate of Sea Burial, and EPA filing. There are no additional fees. Optional add-ons like video recording or expedited scheduling are available separately.",
  },
  {
    q: "Can my family be present for the scattering ceremony?",
    a: "Absolutely. Our attended ceremony option accommodates up to 6 guests aboard the vessel at Carolina Beach. That said, many Cary families prefer the unattended service since it avoids the roughly 2.5-hour drive to the coast and still provides complete documentation of the ceremony.",
  },
  {
    q: "Is there a waiting period or specific timeline?",
    a: "There is no mandatory waiting period in North Carolina for scattering cremated remains. Once the ashes arrive at our Carolina Beach location, scattering is typically completed within 5\u20137 business days, depending on weather. Most families complete the entire process from first contact to final documentation in about 2\u20133 weeks.",
  },
  {
    q: "Do you serve areas near Cary like Apex and Morrisville?",
    a: "Yes. We serve families throughout the western Triangle, including Apex, Morrisville, Holly Springs, and surrounding communities. Every family in the area receives the same free shipping kit and full-service experience regardless of their specific location.",
  },
  {
    q: "What happens to the remains in the ocean?",
    a: "Cremated remains are composed primarily of calcium phosphate, which is a natural mineral compound. When scattered at sea, they disperse gradually and are absorbed by the marine environment without harm. The EPA permits this practice under the Marine Protection, Research and Sanctuaries Act when conducted at least 3 nautical miles from shore.",
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

export default function CaryPage() {
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
            for <em className="text-seafoam">Cary</em> Families
          </h1>
          <p
            className="text-mist/60 max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            A heartfelt sea burial for families who have made Cary home. We
            ship a free kit to your door and take care of every detail at the
            coast — ceremony, documentation, and EPA compliance included.
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
            Serving Cary &amp; the Western Triangle
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Cary is one of North Carolina&apos;s fastest-growing communities, and
              many of its residents arrived from other parts of the country. For
              families without established cemetery plots or deep local roots,
              choosing a final resting place can feel especially difficult. Ocean
              ash scattering offers a meaningful alternative — one that isn&apos;t
              tied to any single location but carries the timeless beauty of the sea.
            </p>
            <p>
              Located in the heart of the Triangle and just minutes from Raleigh
              and Durham, Cary is roughly 2.5 hours from the Carolina coast. Our
              unattended scattering service eliminates that distance entirely. We
              handle everything from your doorstep to the open ocean, so your
              family can focus on remembering — not logistics.
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
                Atlantic Ocean — a practice honored across many cultures and
                traditions. Under federal EPA regulations, scattering must take
                place at least 3 nautical miles from shore.
              </p>
              <p>
                Our captain departs from Carolina Beach carrying your loved
                one&apos;s remains along with fresh flowers. At the designated
                offshore location, a quiet, respectful ceremony is performed
                before the ashes are gently committed to the sea.
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
                  "Free shipping kit (for Cary families)",
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
            Have questions about ocean ash scattering for your family in Cary? We&apos;re here to talk — no pressure, no obligation.
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

      {/* Cary-specific context */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Cary & the Triangle
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl mb-6">
            A Meaningful Choice for Transplant Families
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Cary has grown remarkably over the past two decades, welcoming
              families from across the United States and around the world. Many
              of these families don&apos;t have generations of history in North
              Carolina — and when the time comes to say goodbye to a loved one,
              the question of &quot;where&quot; can feel especially uncertain. Ocean
              ash scattering removes that burden by offering a resting place
              that belongs to no single city or state, but to the timeless sea.
            </p>
            <p>
              Whether your family relocated for work in the Research Triangle,
              retired to enjoy Cary&apos;s nationally ranked quality of life, or
              simply found community here, a sea burial provides a way to honor
              your loved one without the constraints of a traditional cemetery
              plot. The ocean is always accessible — there is no plot to visit,
              no headstone to maintain, just the enduring presence of the Atlantic.
            </p>
            <p>
              We proudly serve families in Cary and neighboring communities including{" "}
              Apex, Morrisville, and Holly Springs, as well as{" "}
              <Link href="/service-areas/raleigh" className="text-seafoam/70 hover:text-seafoam transition-colors">Raleigh</Link> and{" "}
              <Link href="/service-areas/durham" className="text-seafoam/70 hover:text-seafoam transition-colors">Durham</Link>.
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
              Sea Burial Questions for Cary Families
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
              { name: "Charlotte", href: "/service-areas/charlotte" },
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
        title="We're Here for Cary Families"
        subtitle="Whenever you're ready, we'll walk beside you through every step with patience and compassion."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
