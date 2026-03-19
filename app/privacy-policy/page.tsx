import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Serene Sea Burials. How we collect, use, and protect your personal information.",
  alternates: { canonical: `${siteUrl}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div
          className="relative z-10 max-w-3xl mx-auto px-6 legal-content"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          <p className="text-mist/40 text-xs mb-12">
            Last updated: March 18, 2026
          </p>

          {[
            {
              title: "Information We Collect",
              content: [
                "When you contact us through our website, phone, or email, we may collect the following information:",
                "\u2022 Name, email address, and phone number\n\u2022 Details about the service you are inquiring about\n\u2022 Messages and notes from your inquiry\n\u2022 Approximate location based on IP address (for analytics only)\n\u2022 Website usage data via cookies and analytics tools",
              ],
            },
            {
              title: "How We Use Your Information",
              content: [
                "We use the information you provide to:",
                "\u2022 Respond to your inquiries and provide service information\n\u2022 Coordinate and deliver sea burial services\n\u2022 Process payments and send documentation\n\u2022 Improve our website and services\n\u2022 Comply with legal requirements including EPA reporting",
                "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
              ],
            },
            {
              title: "Information Sharing",
              content: [
                "We may share your information only in the following circumstances:",
                "\u2022 With service providers who assist in operating our business (e.g., email delivery, payment processing)\n\u2022 When required by law, regulation, or legal process\n\u2022 To comply with EPA reporting requirements (scattering documentation only)\n\u2022 With your explicit consent",
              ],
            },
            {
              title: "Data Security",
              content: [
                "We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of electronic transmission or storage is completely secure.",
              ],
            },
            {
              title: "Cookies",
              content: [
                "Our website may use cookies and similar tracking technologies to improve your experience and analyze site usage. You can control cookie settings through your browser preferences.",
              ],
            },
            {
              title: "Your Rights",
              content: [
                "You have the right to:",
                "\u2022 Request access to the personal information we hold about you\n\u2022 Request correction or deletion of your personal information\n\u2022 Opt out of non-essential communications\n\u2022 Withdraw consent for data processing where applicable",
                "To exercise any of these rights, please contact us at info@sereneseaburials.com.",
              ],
            },
            {
              title: "Children\u2019s Privacy",
              content: [
                "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.",
              ],
            },
            {
              title: "Changes to This Policy",
              content: [
                "We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.",
              ],
            },
            {
              title: "Contact Us",
              content: [
                "If you have questions about this privacy policy, please contact us:",
                "Serene Sea Burials\n220 Annie Dr\nCarolina Beach, NC 28428\n(910) 833-1900\ninfo@sereneseaburials.com",
              ],
            },
          ].map((section, i) => (
            <div key={i} className="mb-10">
              <h2
                className="text-pearl mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.4rem",
                }}
              >
                {section.title}
              </h2>
              {section.content.map((p, j) => (
                <p
                  key={j}
                  className="text-mist/55 text-sm leading-relaxed mb-3 whitespace-pre-line"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
