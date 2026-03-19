import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Ocean Ash Scattering for Durham, NC Families",
  description:
    "Dignified ocean ash scattering services for Durham, NC families. Unattended sea burials starting at $400 with free shipping kit, GPS coordinates, certificate, and EPA compliance.",
  alternates: { canonical: `${siteUrl}/service-areas/durham` },
  openGraph: {
    url: `${siteUrl}/service-areas/durham`,
    title: "Ocean Ash Scattering — Durham, NC | Serene Sea Burials",
    description:
      "Dignified sea burial services for Durham families. Free shipping kit, complete documentation, starting at $400.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ocean Ash Scattering for Durham NC",
  description:
    "EPA-compliant ocean ash scattering services for families in Durham, North Carolina. Unattended and attended ceremonies from Carolina Beach.",
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
    name: "Durham",
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
    desc: "Reach out by phone or through our website. We\u2019ll listen, answer every question, and help you choose the service that fits your family\u2019s needs.",
  },
  {
    num: "02",
    title: "Ship the Remains",
    desc: "We\u2019ll send a free USPS Priority Mail Express shipping kit to your Durham address with everything you need. Pack the remains and take the kit to any local post office.",
  },
  {
    num: "03",
    title: "The Ocean Ceremony",
    desc: "Our USCG-certified captain heads approximately 3 nautical miles offshore from Carolina Beach and conducts a dignified scattering ceremony with fresh flowers.",
  },
  {
    num: "04",
    title: "Complete Documentation",
    desc: "You\u2019ll receive GPS coordinates of the exact scattering location, an official Certificate of Sea Burial, optional photos, and we file the required EPA notification for you.",
  },
];

const faqs = [
  {
    q: "How does the unattended scattering service work for Durham families?",
    a: "We mail a free shipping kit directly to your Durham address. You pack the cremated remains and drop the kit at any post office. Once we receive them at our Carolina Beach location, our captain performs the scattering ceremony within 5\u20137 business days. You then receive GPS coordinates, a certificate, and optional photographs \u2014 all without traveling to the coast.",
  },
  {
    q: "What makes ocean ash scattering different from a traditional burial?",
    a: "Ocean scattering returns your loved one to nature rather than placing them in a fixed plot. There is no headstone to maintain, no ongoing cemetery fees, and no single location your family must visit. Many Durham families appreciate that the ocean is always accessible from anywhere \u2014 a fitting choice for a community with ties across the country and around the world.",
  },
  {
    q: "Is ocean scattering right for someone who loved the outdoors?",
    a: "Many families tell us their loved one had a deep connection to the water \u2014 whether it was fishing on Jordan Lake, kayaking the Eno River, or spending summers at the Carolina coast. For these individuals, returning to the sea feels like a natural and fitting tribute that honors who they were.",
  },
  {
    q: "How much does a sea burial cost, and what\u2019s included?",
    a: "Our unattended service is $400 with no hidden fees. That price covers the free shipping kit, captain-led ceremony, fresh flowers, GPS coordinates, Certificate of Sea Burial, and EPA notification filing. Optional add-ons such as video recording or attendance aboard the vessel are available at additional cost.",
  },
  {
    q: "Do I need to make any arrangements with a funeral home first?",
    a: "If your loved one has already been cremated, no additional funeral home arrangements are required. You can work directly with us. If cremation has not yet taken place, any local Durham funeral home or crematory can handle that step, after which you\u2019ll use our shipping kit to send the remains to us.",
  },
  {
    q: "Can multiple family members\u2019 ashes be scattered at the same location?",
    a: "Yes. Some families choose to scatter a spouse or partner at the same GPS coordinates as a previous loved one. We keep records of every scattering location and can coordinate return ceremonies to the same site. Each scattering is performed as its own individual ceremony.",
  },
  {
    q: "Do you serve Chapel Hill and other communities near Durham?",
    a: "Yes. We serve families throughout the Research Triangle, including Chapel Hill, Hillsborough, Research Triangle Park, and all surrounding areas. Every family receives the same free shipping kit and complete service regardless of their specific address.",
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

export default function DurhamPage() {
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
            for <em className="text-seafoam">Durham</em> Families
          </h1>
          <p
            className="text-mist/60 max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            A dignified sea burial for families across the Bull City and the
            Research Triangle. We send a free shipping kit to your Durham
            address and handle every detail at the coast — from ceremony to
            final documentation.
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
            Serving Durham &amp; the Research Triangle
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Durham has long been a city that thinks differently. From its
              roots as a center of industry and education to its present-day
              identity as a hub of research, medicine, and culture, Durham
              families often seek options that reflect their values — including
              when it comes to end-of-life decisions. Ocean ash scattering
              offers an alternative that is personal, environmentally
              thoughtful, and free from the constraints of a traditional burial.
            </p>
            <p>
              About 2.5 hours from the Carolina coast, Durham is close enough to
              feel the pull of the ocean yet far enough that travel can be a
              burden during a difficult time. Our unattended service was designed
              for exactly this situation. We bring the peace of the sea to your
              family without asking anyone to leave home.
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
                Ocean ash scattering is a time-honored practice of returning
                cremated remains to the sea. Regulated by the EPA under the
                Marine Protection, Research and Sanctuaries Act, it must be
                performed at least 3 nautical miles offshore to ensure
                environmental compliance.
              </p>
              <p>
                Our captain departs from Carolina Beach with your loved
                one&apos;s ashes and a fresh flower arrangement. At the
                designated offshore coordinates, a respectful ceremony is
                conducted — a moment of reflection as the remains are gently
                released into the Atlantic.
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
                  "Free shipping kit (for Durham families)",
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
            Have questions about ocean ash scattering for your family in Durham? We&apos;re here to talk — no pressure, no obligation.
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

      {/* Durham-specific context */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Durham & the Research Triangle
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl mb-6">
            Progressive Thinking, Timeless Tribute
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Durham is home to Duke University, a world-class medical center,
              and a thriving community of researchers, educators, and healthcare
              professionals. Families connected to these institutions often bring
              a thoughtful, open-minded approach to life&apos;s biggest
              decisions — including how to honor a loved one after they pass.
              For many, ocean ash scattering aligns with values of simplicity,
              environmental consciousness, and personal meaning over convention.
            </p>
            <p>
              At the same time, Durham has deep North Carolina roots. Families
              who have called the Bull City home for generations understand the
              pull of the Carolina coast — weekend trips to Wrightsville Beach,
              fishing off the Outer Banks, quiet mornings along the shore. A sea
              burial can honor both the progressive spirit and the coastal
              connection that define so many Durham families.
            </p>
            <p>
              We also serve families in Chapel Hill, Hillsborough, and throughout
              Research Triangle Park, as well as{" "}
              <Link href="/service-areas/raleigh" className="text-seafoam/70 hover:text-seafoam transition-colors">Raleigh</Link> and{" "}
              <Link href="/service-areas/cary" className="text-seafoam/70 hover:text-seafoam transition-colors">Cary</Link>.
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
              Sea Burial Questions for Durham Families
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
              { name: "Cary", href: "/service-areas/cary" },
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
        title="We're Here for Durham Families"
        subtitle="When the time is right, we'll guide your family through every step with care and understanding."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
