import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Preplanning Sea Burial Services",
  description:
    "Plan your sea burial in advance with Serene Sea Burials. Clear pricing, simple paperwork, and guidance through each step. No obligation, no pressure.",
  alternates: { canonical: `${siteUrl}/services/preplanning` },
  openGraph: {
    url: `${siteUrl}/services/preplanning`,
    title: "Preplanning | Serene Sea Burials",
    description:
      "Arrange sea burial services in advance. Clear pricing, simple paperwork, and compassionate guidance.",
  },
};

export default function PreplanningPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Preplanning"
        subtitle="Arrange services in advance with clear pricing, simple paperwork, and no obligation. Give your family peace of mind."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Why preplan */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-6"
            >
              Why Families Choose
              <br />
              to <em className="text-seafoam">Plan Ahead</em>
            </h2>
            <p
              className="text-mist/55 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Preplanning removes the burden of decision-making from your loved
              ones during an already difficult time. It&apos;s one of the most
              thoughtful things you can do for your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Remove the Burden",
                description:
                  "When the time comes, your family won\u2019t need to make decisions under stress. Everything will already be arranged.",
              },
              {
                title: "Lock In Details",
                description:
                  "Choose your service type, transfer method, and any personalization. We keep your plan on file.",
              },
              {
                title: "Clear Pricing",
                description:
                  "Know exactly what to expect. No surprises, no hidden fees, no pressure to upgrade.",
              },
              {
                title: "No Obligation",
                description:
                  "Plans can be updated or canceled at any time. Preplanning is a conversation, not a contract.",
              },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-7">
                <h3
                  className="text-pearl mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.25rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-mist/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-20 overflow-hidden">
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
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl"
            >
              A Simple Conversation
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Reach Out",
                description:
                  "Call or fill out our contact form. Let us know you\u2019re interested in preplanning and we\u2019ll schedule a time to talk.",
              },
              {
                num: "02",
                title: "Discuss Your Wishes",
                description:
                  "We\u2019ll walk through the options \u2014 attended vs. unattended, flowers, personalization \u2014 and answer any questions.",
              },
              {
                num: "03",
                title: "We Keep Your Plan on File",
                description:
                  "Your preferences are documented and stored securely. When the time comes, your family simply contacts us and we handle everything.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-6 items-start"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full glass flex items-center justify-center border border-seafoam/15"
                >
                  <span
                    className="text-seafoam/60 text-xs tracking-widest"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="pt-2">
                  <h3
                    className="text-pearl mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "1.2rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-mist/50 text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        title="Start the Conversation"
        subtitle="No pressure, no obligation. Just a chance to discuss what matters to you."
        primaryLabel="Speak With Us"
        primaryHref="/contact"
        secondaryLabel="Call (910) 833-1900"
        secondaryHref="tel:+19108331900"
      />
      <Footer />
    </main>
  );
}
