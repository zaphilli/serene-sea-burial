import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "Cancellation, refund, and weather policies for Serene Sea Burials ocean ash scattering services from Carolina Beach, NC.",
  alternates: { canonical: `${siteUrl}/cancellation-policy` },
  openGraph: {
    url: `${siteUrl}/cancellation-policy`,
    title: "Cancellation Policy | Serene Sea Burials",
    description:
      "Our cancellation, refund, and rescheduling policies for sea burial services.",
  },
};

const sections = [
  {
    title: "Client-Initiated Cancellations",
    content: [
      "Cancellation requests must be submitted at least 45 days before your scheduled service date to qualify for a refund.",
      "Cancellations made 45 or more days in advance will receive a full refund minus a 10% processing fee.",
      "Once within 45 days of the scheduled service, there are no refunds. No exceptions. No-shows are also non-refundable.",
      "We understand these are difficult decisions, and we encourage families to reach out to us if circumstances change. We will always do our best to work with you on rescheduling when possible.",
    ],
  },
  {
    title: "Company-Initiated Cancellations",
    content: [
      "Serene Sea Burials reserves the right to cancel or reschedule trips due to circumstances beyond our control, including but not limited to mechanical failures, crew illness, or hazardous conditions.",
      "In the event of a company-initiated cancellation, customers will receive a full refund immediately — no processing fees will be applied.",
      "Please note that Serene Sea Burials is not liable for any travel expenses incurred by clients, including airline tickets, hotel reservations, car rentals, or other related costs.",
    ],
  },
  {
    title: "Weather Policy",
    content: [
      "We do not cancel or reschedule due to rain. Rain, scattered showers, and overcast skies are not considered grounds for cancellation or rescheduling.",
      "Our captain makes the final weather decision at departure time based on sea conditions and safety considerations.",
      "Only hazardous conditions — such as named tropical storms, hurricane warnings, or dangerous sea states — warrant rescheduling. In these cases, we will work with you to find a new date at no additional charge.",
      "If you choose not to proceed on a rainy or overcast day, it will be treated as a client-initiated cancellation and subject to the policy above.",
    ],
  },
  {
    title: "Rescheduling",
    content: [
      "If you need to reschedule your service, please contact us as soon as possible. We will make every reasonable effort to accommodate a new date.",
      "Rescheduling requests made more than 45 days before the original service date can be accommodated at no additional cost.",
      "Rescheduling requests within 45 days of the original date may be subject to an expedited service fee, depending on availability.",
    ],
  },
  {
    title: "Refund Processing",
    content: [
      "All eligible refunds are processed within 7–10 business days of the cancellation request.",
      "Refunds will be returned to the original payment method used at the time of booking.",
      "A 10% processing fee is deducted from all client-initiated refunds to cover administrative and payment processing costs.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you need to cancel, reschedule, or have questions about this policy, please contact us:",
      "Serene Sea Burials\n220 Annie Dr\nCarolina Beach, NC 28428\n(910) 833-1900\ninfo@sereneseaburials.com",
    ],
  },
];

export default function CancellationPolicyPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Cancellation Policy"
        subtitle="Our policies regarding cancellations, refunds, rescheduling, and weather-related changes."
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

          {sections.map((section, i) => (
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
