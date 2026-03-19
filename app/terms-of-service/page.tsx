import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Serene Sea Burials. Terms governing the use of our website and sea burial services.",
  alternates: { canonical: `${siteUrl}/terms-of-service` },
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Terms of Service"
        subtitle="Terms governing the use of our website and services."
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
          className="relative z-10 max-w-3xl mx-auto px-6"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          <p className="text-mist/40 text-xs mb-12">
            Last updated: March 18, 2026
          </p>

          {[
            {
              title: "Agreement to Terms",
              content: [
                "By accessing or using the Serene Sea Burials website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.",
              ],
            },
            {
              title: "Services Provided",
              content: [
                "Serene Sea Burials provides attended and unattended ash scattering at sea services, cremains shipping kits, and related documentation services. All services are conducted from Carolina Beach, North Carolina in compliance with applicable federal, state, and local laws.",
                "Services are subject to availability and weather conditions. Serene Sea Burials reserves the right to reschedule services due to unsafe weather or sea conditions.",
              ],
            },
            {
              title: "Eligibility",
              content: [
                "You must be at least 18 years of age and legally authorized to arrange funeral or memorial services for the deceased to use our services.",
              ],
            },
            {
              title: "Cremated Remains",
              content: [
                "By engaging our services, you represent and warrant that:",
                "\u2022 You are legally authorized to make decisions regarding the cremated remains\n\u2022 The remains have been properly cremated by a licensed crematory\n\u2022 Any shipping of remains complies with USPS regulations for Priority Mail Express\n\u2022 All information provided regarding the identity of the deceased is accurate",
              ],
            },
            {
              title: "Payment and Cancellation",
              content: [
                "Payment terms and cancellation policies will be communicated at the time of booking. Deposits may be required to secure service dates. Cancellation and refund policies vary by service type.",
              ],
            },
            {
              title: "EPA Compliance",
              content: [
                "All ash scattering services are conducted in accordance with the EPA\u2019s general permit under the Marine Protection, Research, and Sanctuaries Act. Serene Sea Burials is responsible for filing required EPA notification within 30 days of each service.",
              ],
            },
            {
              title: "Limitation of Liability",
              content: [
                "Serene Sea Burials provides services with reasonable care and professionalism. However, to the fullest extent permitted by law:",
                "\u2022 We are not liable for delays caused by weather, mechanical issues, or other circumstances beyond our control\n\u2022 Our total liability is limited to the amount paid for the specific service in question\n\u2022 We are not liable for any indirect, incidental, or consequential damages",
              ],
            },
            {
              title: "Website Use",
              content: [
                "The content on our website is provided for informational purposes only. While we strive for accuracy, we do not guarantee that all information is complete or current. You agree not to use our website for any unlawful purpose or in any way that could damage or impair the site.",
              ],
            },
            {
              title: "Intellectual Property",
              content: [
                "All content on this website \u2014 including text, images, graphics, logos, and design \u2014 is the property of Serene Sea Burials and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.",
              ],
            },
            {
              title: "Privacy",
              content: [
                "Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy for information about how we collect, use, and protect your personal data.",
              ],
            },
            {
              title: "Governing Law",
              content: [
                "These terms are governed by and construed in accordance with the laws of the State of North Carolina, without regard to conflict of law provisions.",
              ],
            },
            {
              title: "Changes to Terms",
              content: [
                "We reserve the right to update or modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
              ],
            },
            {
              title: "Contact Us",
              content: [
                "If you have questions about these terms, please contact us:",
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
