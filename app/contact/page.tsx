import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Serene Sea Burials. Request a shipping kit, arrange a ceremony, or ask a question. We respond during business hours, Mon\u2013Fri, 9 AM \u2013 5 PM.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    url: `${siteUrl}/contact`,
    title: "Contact Serene Sea Burials",
    description:
      "Request a shipping kit, arrange a ceremony, or ask a question. Carolina Beach, NC.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Ask questions, request a shipping kit, or arrange a ceremony. We respond during business hours."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* What to expect */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "We\u2019ll Respond Quickly",
                description: "Most inquiries are answered within a few hours during business hours.",
              },
              {
                title: "No Pressure",
                description: "Ask anything. There\u2019s no obligation and no sales pitch.",
              },
              {
                title: "Confidential",
                description: "All conversations are treated with complete privacy and respect.",
              },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <h3
                  className="text-pearl text-sm mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.1rem" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-mist/45 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse existing Contact component */}
      <Contact />

      <Footer />
    </main>
  );
}
