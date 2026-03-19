import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Ash Scattering at Sea — Carolina Beach, NC",
  description:
    "Serene Sea Burials operates from Carolina Beach, NC — our home port at 220 Annie Dr. Walk to the dock, meet the captain, and experience the most personal ocean ash scattering ceremony available.",
  alternates: { canonical: `${siteUrl}/service-areas/carolina-beach` },
  openGraph: {
    url: `${siteUrl}/service-areas/carolina-beach`,
    title: "Ash Scattering at Sea — Carolina Beach, NC | Serene Sea Burials",
    description:
      "Our home port. Walk to the dock, meet the captain, and say goodbye at sea. Ocean ash scattering ceremonies departing daily from Carolina Beach.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ocean Ash Scattering at Carolina Beach NC",
  description:
    "EPA-compliant ocean ash scattering services departing from Carolina Beach, North Carolina — the home base of Serene Sea Burials at 220 Annie Dr. Attended and unattended ceremonies available.",
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
    name: "Carolina Beach",
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
    desc: "Give us a call or stop by 220 Annie Dr in Carolina Beach. We\u2019ll sit down with you, answer every question, and help you plan the ceremony that feels right.",
  },
  {
    num: "02",
    title: "Bring Remains to Our Office",
    desc: "Since you\u2019re local, you can hand-deliver your loved one\u2019s remains directly to our Carolina Beach location. Meet the captain, see the vessel, and know exactly who will be caring for your family member.",
  },
  {
    num: "03",
    title: "The Ceremony at Sea",
    desc: "Board the vessel right here at the marina. You\u2019ll travel together approximately 3 nautical miles offshore for a deeply personal scattering ceremony with fresh flowers and a moment of reflection.",
  },
  {
    num: "04",
    title: "Documentation & Keepsakes",
    desc: "Before you leave, we\u2019ll share the GPS coordinates of the scattering site. Your official certificate, photographs, and EPA filing follow shortly after.",
  },
];

const faqs = [
  {
    q: "What should we bring to the ceremony?",
    a: "We provide everything needed for the scattering, including fresh flowers. You\u2019re welcome to bring additional items like letters, petals, or biodegradable wreaths to place on the water. We recommend comfortable, non-slip shoes and layers \u2014 it can be cooler offshore even on warm days. Sunglasses and sunscreen are also a good idea.",
  },
  {
    q: "What should we expect on the day of the ceremony?",
    a: "You\u2019ll meet the captain at our Carolina Beach dock. After a brief welcome and overview, your group boards the vessel and heads approximately 3 nautical miles offshore. The captain will guide the ceremony, allowing family members to participate in the scattering and place flowers on the water. The entire experience lasts about 90 minutes from dock to dock.",
  },
  {
    q: "Is parking available near the dock?",
    a: "Yes. There is free parking available near our location at 220 Annie Dr in Carolina Beach. We\u2019ll send detailed directions and parking instructions when you book your ceremony. If you\u2019re coming during peak summer months, we recommend arriving a few minutes early.",
  },
  {
    q: "Can we schedule a sunset ceremony?",
    a: "Absolutely \u2014 sunset ceremonies are among our most requested options and Carolina Beach offers some of the most stunning evening light on the coast. We\u2019ll time the departure so the scattering takes place as the sun meets the horizon. Sunset timing varies by season, so we\u2019ll coordinate the schedule with you in advance.",
  },
  {
    q: "How many guests can attend?",
    a: "Our vessel accommodates up to 6 guests in addition to the captain. This creates an intimate, unhurried atmosphere. If your group is larger, please contact us \u2014 we can discuss options for additional family members to watch the departure from the dock or arrange consecutive trips.",
  },
  {
    q: "What happens if the weather is bad on our scheduled day?",
    a: "Safety is our first priority. If conditions are unsafe or would significantly diminish the experience, we\u2019ll contact you to reschedule at no additional charge. Being based in Carolina Beach means we monitor conditions closely and can often offer an alternative date within just a day or two.",
  },
  {
    q: "Can we visit the scattering site afterward?",
    a: "Yes. We provide the exact GPS coordinates of the scattering location, and families are welcome to charter a boat or simply visit the Carolina Beach shore to feel close to their loved one anytime. Many families return on anniversaries or meaningful dates to reflect by the water.",
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

export default function CarolinaBeachPage() {
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
            <em className="text-seafoam">Carolina Beach</em>, NC
          </h1>
          <p
            className="text-mist/60 max-w-xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            This is home. Serene Sea Burials operates from 220 Annie Dr in
            Carolina Beach &mdash; where every ceremony begins. Walk to the dock,
            meet the captain, and give your loved one the most personal farewell
            the coast can offer.
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
            Where Every Journey Begins
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Carolina Beach is more than a service area for us &mdash; it&apos;s where
              we live and work. Our office sits at 220 Annie Dr, steps from the
              marina where every scattering ceremony departs. When you choose
              Serene Sea Burials, you&apos;re choosing a team that knows these waters
              intimately, from the tidal patterns to the quietest stretches of
              open ocean.
            </p>
            <p>
              For Carolina Beach families, the experience is uniquely personal.
              You can visit our office in person, hand-deliver your loved one&apos;s
              remains, meet the captain face to face, and on the day of the
              ceremony, watch the vessel depart from the dock. No shipping, no
              distance, no waiting &mdash; just a neighbor helping your family
              through one of life&apos;s most important moments.
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
              Our Signature Ceremony
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
              <p>
                From the Carolina Beach marina, our USCG-certified captain
                guides you approximately 3 nautical miles into the Atlantic.
                The scattering takes place in open water under clear sky, with
                fresh flowers, a moment of silence, and as much time as your
                family needs.
              </p>
              <p>
                Because this is our home port, we know exactly when the light
                is best, when the seas are calmest, and where the most serene
                waters lie. Sunset ceremonies here are especially breathtaking &mdash;
                the Carolina Beach horizon glows amber and coral as the remains
                meet the sea.
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
                  "In-person coordination at our office",
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
              A Personal, Hands-On Process
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
            Have questions about ocean ash scattering for your family in Carolina Beach? We&apos;re here to talk — no pressure, no obligation.
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
              { title: "Home Base", desc: "This is where we operate. You\u2019re not a remote client \u2014 you\u2019re a neighbor." },
              { title: "Intimate", desc: "Walk to the dock. Board the vessel. Be present for every moment of the farewell." },
              { title: "Professional", desc: "USCG-certified captain who knows these waters better than anyone." },
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

      {/* Carolina Beach-specific context */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Our Home on the Coast
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }} className="text-pearl mb-6">
            Carolina Beach &mdash; The Heart of What We Do
          </h2>
          <div className="space-y-5 text-mist/55 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
            <p>
              Carolina Beach is a place people come to find peace &mdash; and
              that&apos;s exactly what drew us here. The barrier island sits at the
              southern tip of New Hanover County, where the Cape Fear River
              empties into the Atlantic. It&apos;s quiet, it&apos;s beautiful, and it&apos;s
              the perfect departure point for a final voyage.
            </p>
            <p>
              Families who live here already understand the pull of the water.
              Whether it&apos;s morning walks along the boardwalk, fishing off the
              pier at Fort Fisher, or watching the shrimp boats come in at
              Kure Beach, the ocean is part of daily life. Choosing a sea
              burial isn&apos;t a departure from that life &mdash; it&apos;s an extension of it.
            </p>
            <p>
              We also serve families in nearby{" "}
              Kure Beach, Fort Fisher, and{" "}
              <Link href="/service-areas/wilmington" className="text-seafoam/70 hover:text-seafoam transition-colors">Wilmington</Link>.
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
              Ash Scattering Questions — Carolina Beach
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
              { name: "Southport", href: "/service-areas/southport" },
              { name: "Jacksonville", href: "/service-areas/jacksonville" },
              { name: "Fayetteville", href: "/service-areas/fayetteville" },
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
        title="Visit Us in Carolina Beach"
        subtitle="Stop by 220 Annie Dr or give us a call. We're here whenever you're ready."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
