import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Shipping Instructions | How to Ship Cremated Remains",
  description:
    "Step-by-step instructions for shipping cremated remains to Serene Sea Burials via USPS Priority Mail Express. Free shipping kit available.",
  alternates: { canonical: `${siteUrl}/shipping-instructions` },
  openGraph: {
    url: `${siteUrl}/shipping-instructions`,
    title: "Shipping Instructions | Serene Sea Burials",
    description:
      "How to safely ship cremated remains via USPS Priority Mail Express for your sea burial service.",
  },
};

const steps = [
  {
    number: "01",
    title: "Order Your Free Shipping Kit",
    description:
      "Request a free cremated remains shipping kit from USPS. The kit includes a Priority Express box, Priority Mail Express tape, bubble cushioning, and a self-sealing bag. You can order the kit online from the USPS store or pick one up at your local post office.",
    note: "USPS is the only carrier that ships cremated remains. UPS and FedEx do not offer this service.",
  },
  {
    number: "02",
    title: "Prepare & Package",
    description:
      "Place the cremated remains in a sift-proof, sturdy inner container that securely contains the remains without any loose powder leaking. Surround the inner container with cushioning material and place it inside the outer USPS shipping box. Affix Label 139 ('Cremated Remains') to all sides of the box, including the top and bottom. These labels are available free at any post office.",
    note: "The inner container must be strong and durable enough to prevent any leakage during transit.",
  },
  {
    number: "03",
    title: "Ship Your Package",
    description:
      "Seal the package securely and bring it to your local post office. Ship via USPS Priority Mail Express only. Provide the tracking number to Serene Sea Burials so we can monitor the shipment's arrival.",
    note: "Do not use a drop box — deliver the package to the counter in person.",
  },
  {
    number: "04",
    title: "We Take It From Here",
    description:
      "Once we receive the remains, we'll confirm receipt and schedule your service based on weather conditions. Your captain will coordinate the ceremony and provide you with photos, GPS coordinates, and your official Certificate of Sea Burial afterward.",
    note: null,
  },
];

const packagingRequirements = [
  "Inner container must be sift-proof and durable",
  "Cushioning material must surround the inner container",
  "USPS Label 139 on all sides (top, bottom, and sides)",
  "Ship via USPS Priority Mail Express only",
  "Include return address on outer packaging",
  "Do not include any non-essential items in the package",
];

export default function ShippingInstructionsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Shipping Instructions"
        subtitle="A simple, step-by-step guide to safely shipping cremated remains to our Carolina Beach location."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "#" },
        ]}
      />

      {/* Steps */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Step by Step
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-4"
            >
              How to Ship Cremated Remains
            </h2>
            <p
              className="text-mist/50 max-w-lg mx-auto text-sm"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              We&apos;ve made this process as straightforward as possible.
              Follow these four steps and we&apos;ll handle everything else.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 md:p-10 border border-white/[0.04]"
              >
                <div className="flex items-start gap-6">
                  <span
                    className="flex-shrink-0 text-seafoam/30 text-4xl font-light"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3
                      className="text-pearl mb-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: "1.25rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-mist/55 text-sm leading-relaxed mb-3"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                      }}
                    >
                      {step.description}
                    </p>
                    {step.note && (
                      <p
                        className="text-gold/70 text-xs leading-relaxed flex items-start gap-2"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 400,
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="flex-shrink-0 mt-0.5"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Address & Requirements */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Shipping Address */}
            <div className="glass rounded-2xl p-8 md:p-10 border border-white/[0.04]">
              <h3
                className="text-pearl mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.25rem",
                }}
              >
                Shipping Address
              </h3>
              <div
                className="text-mist/55 text-sm leading-loose"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                <p className="text-pearl/80 font-medium mb-1">
                  Serene Sea Burials, LLC
                </p>
                <p>PO Box 234</p>
                <p>Carolina Beach, NC 28428</p>
              </div>
              <div className="divider-gold my-6" />
              <p
                className="text-mist/40 text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Please provide your tracking number to{" "}
                <a
                  href="mailto:info@sereneseaburials.com"
                  className="text-seafoam/70 hover:text-seafoam transition-colors"
                >
                  info@sereneseaburials.com
                </a>{" "}
                once shipped so we can monitor delivery.
              </p>
            </div>

            {/* Packaging Requirements */}
            <div className="glass rounded-2xl p-8 md:p-10 border border-white/[0.04]">
              <h3
                className="text-pearl mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.25rem",
                }}
              >
                Packaging Checklist
              </h3>
              <ul className="space-y-3">
                {packagingRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4ecdc4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span
                      className="text-mist/55 text-sm"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                      }}
                    >
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <InnerCTA
        title="Need a Shipping Kit?"
        subtitle="Contact us and we'll help you get started with the USPS cremated remains shipping kit."
        primaryLabel="Reach Out to Us"
        primaryHref="/contact"
        secondaryLabel="Call (910) 833-1900"
        secondaryHref="tel:+19108331900"
      />

      <Footer />
    </main>
  );
}
