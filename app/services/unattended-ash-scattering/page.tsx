import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Unattended Ash Scattering at Sea",
  description:
    "Unattended ash scattering services from Carolina Beach, NC starting at $400. The captain performs a respectful ceremony on your behalf. GPS coordinates, certificate, and EPA filing included.",
  alternates: { canonical: `${siteUrl}/services/unattended-ash-scattering` },
  openGraph: {
    url: `${siteUrl}/services/unattended-ash-scattering`,
    title: "Unattended Ash Scattering at Sea | Serene Sea Burials",
    description:
      "Starting at $400. A dignified captain-only scattering ceremony with GPS coordinates, certificate, and EPA filing included.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Unattended Ash Scattering at Sea",
  description:
    "A dignified captain-only ash scattering ceremony performed on the family\u2019s behalf at sea. Includes GPS coordinates, scattering certificate, and EPA filing.",
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
  offers: {
    "@type": "Offer",
    price: "400",
    priceCurrency: "USD",
    priceValidUntil: "2027-12-31",
  },
};

const steps = [
  {
    num: "01",
    title: "Contact Us",
    description:
      "Reach out by phone or through our contact form. We\u2019ll answer your questions, explain the process, and help you decide if unattended scattering is right for your family.",
  },
  {
    num: "02",
    title: "Receive Your Shipping Kit",
    description:
      "We send a free, prepaid USPS Priority Mail Express kit to your door. The package includes everything needed to safely transfer the cremated remains to our care.",
  },
  {
    num: "03",
    title: "Ship the Remains",
    description:
      "Pack the remains using the provided materials and drop the kit at any USPS location. Tracking is included so you can follow the package to us.",
  },
  {
    num: "04",
    title: "The Scattering Ceremony",
    description:
      "Our captain takes the remains approximately 3 nautical miles offshore and performs a respectful scattering ceremony with a moment of reflection at sea.",
  },
  {
    num: "05",
    title: "Receive Documentation",
    description:
      "Within a few business days, you receive GPS coordinates, a scattering certificate, and optional photos. We file the required EPA notification within 30 days.",
  },
];

const faqs = [
  {
    q: "Who performs the ceremony?",
    a: "Our experienced captain conducts the scattering with care and respect. Even without family present, the ceremony includes a moment of quiet reflection at the scattering location.",
  },
  {
    q: "Can I receive photos of the scattering?",
    a: "Yes. Photos of the ceremony are available upon request at no additional charge. Let us know when you book and the captain will capture the moment for you.",
  },
  {
    q: "How long after I ship the remains will the service take place?",
    a: "Scattering is typically performed within 5\u20137 business days of receiving the remains, weather permitting. We\u2019ll keep you informed throughout the process.",
  },
  {
    q: "What if I want family to attend later?",
    a: "If your plans change and family members are able to attend, we can adjust to an attended ceremony. Contact us to discuss options.",
  },
];

export default function UnattendedPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <PageHero
        title="Unattended Ash Scattering"
        subtitle="A dignified, captain-led ceremony for families who cannot travel or prefer a simpler arrangement. Starting at $400."
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
                A Respectful Farewell,
                <br />
                <em className="text-seafoam">Without the Travel</em>
              </h2>
              <div
                className="space-y-5 text-mist/60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                <p>
                  Our unattended scattering service is designed for families who
                  cannot be present at sea — whether due to distance, health, or
                  personal preference. The ceremony is no less meaningful for
                  being private.
                </p>
                <p>
                  The captain takes your loved one&apos;s remains approximately 3
                  nautical miles offshore from Carolina Beach and performs a
                  dignified scattering with a moment of quiet reflection. Every
                  detail is handled with the same care as an attended ceremony.
                </p>
                <p>
                  Afterward, you receive the GPS coordinates of the scattering
                  location, a certificate, and optional photographs — giving you
                  a permanent connection to the place where your loved one was
                  returned to the sea.
                </p>
              </div>
            </div>

            {/* What's included card */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(78,205,196,0.04)",
                  border: "1px solid rgba(78,205,196,0.15)",
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
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Captain-led scattering ceremony",
                    "Free prepaid shipping kit",
                    "GPS coordinates of scattering",
                    "Scattering certificate",
                    "EPA notification filing",
                    "Photos upon request",
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
                          stroke="#4ecdc4"
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
                <div className="text-center">
                  <div
                    className="text-seafoam mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 400,
                    }}
                  >
                    Starting at $400
                  </div>
                  <p
                    className="text-mist/40 text-xs"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    No hidden fees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/15 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              How It Works
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
              Five Simple Steps
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-7 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(78,205,196,0.25) 15%, rgba(78,205,196,0.25) 85%, transparent)",
              }}
            />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full glass flex items-center justify-center border border-seafoam/15">
                      <span
                        className="text-seafoam/70 text-xs tracking-widest"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3 pb-2">
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: "1.25rem",
                      }}
                      className="text-pearl mb-2"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-mist/50 text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
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
              Who Chooses Unattended Scattering?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Out-of-State Families",
                description:
                  "Families across the country ship remains to us using our free kit. No travel required.",
              },
              {
                title: "Those Who Prefer Simplicity",
                description:
                  "A quiet, private ceremony without the logistics of gathering family for a boat trip.",
              },
              {
                title: "Budget-Conscious Families",
                description:
                  "Starting at $400, it\u2019s a fraction of the cost of traditional burial or an attended ceremony.",
              },
              {
                title: "Families with Health Limitations",
                description:
                  "When mobility or health concerns make it difficult to be on the water.",
              },
              {
                title: "Preplanning for the Future",
                description:
                  "Families arranging services in advance for a loved one or for themselves.",
              },
              {
                title: "Second Scatterings",
                description:
                  "Families who wish to scatter a portion of remains at sea in addition to other memorial arrangements.",
              },
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

      {/* FAQ */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
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
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <h3
                  className="text-pearl mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-mist/55 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="text-seafoam/70 text-xs tracking-widest uppercase hover:text-seafoam transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View all FAQs \u2192
            </Link>
          </div>
        </div>
      </section>

      <InnerCTA
        title="Ready to Begin?"
        subtitle="Request a free shipping kit or ask us any questions."
        primaryLabel="Request Shipping Kit"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
