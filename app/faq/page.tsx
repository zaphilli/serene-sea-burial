"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const categories = [
  {
    name: "General",
    faqs: [
      {
        q: "Is burial at sea legal?",
        a: "Yes. Burial at sea is legal when handled under EPA rules. For cremated remains, scattering is performed at least 3 nautical miles from shore. We manage the required compliance steps for each service.",
      },
      {
        q: "How far offshore does the ceremony take place?",
        a: "Sea scattering is conducted approximately 3 nautical miles offshore in accordance with federal requirements. This ensures compliance with EPA guidelines while providing a meaningful setting for the ceremony.",
      },
      {
        q: "What is the difference between attended and unattended service?",
        a: "With an attended service, family members (up to 6 passengers) are present on the boat during the scattering. With an unattended service, the captain performs the ceremony respectfully on the family\u2019s behalf. Both include GPS coordinates, a certificate, and EPA filing.",
      },
      {
        q: "Do you serve families outside North Carolina?",
        a: "Yes. We accept shipped remains from anywhere in the United States via our free USPS Priority Mail Express shipping kit. Many families who choose our unattended service live out of state.",
      },
    ],
  },
  {
    name: "Attended Ceremonies",
    faqs: [
      {
        q: "How many guests can attend?",
        a: "Attended services are structured for an intimate experience and can accommodate up to 6 passengers.",
      },
      {
        q: "How long is an attended service?",
        a: "Most attended ash scattering services are approximately 90 to 120 minutes from departure to return, including travel time to and from the scattering location.",
      },
      {
        q: "Can we personalize the ceremony?",
        a: "Absolutely. Families may include music, readings, prayers, flowers, or any other personal touches. The ceremony is yours to shape, and our captain will guide the process with care.",
      },
      {
        q: "Where does the boat depart from?",
        a: "All ceremonies depart from Carolina Beach, North Carolina. We can provide directions and parking information when you book your service.",
      },
    ],
  },
  {
    name: "Unattended Services",
    faqs: [
      {
        q: "Can we choose unattended service if we cannot travel?",
        a: "Yes. Unattended options are available for families who cannot be on board. The captain performs the service respectfully and documentation is provided afterward.",
      },
      {
        q: "How much does unattended scattering cost?",
        a: "Unattended scattering services start at $400 and include the scattering ceremony, GPS coordinates, a scattering certificate, and EPA documentation filing.",
      },
      {
        q: "Will we receive photos?",
        a: "Photos of the scattering ceremony are available upon request for unattended services. Let us know when you book and the captain will capture the moment.",
      },
    ],
  },
  {
    name: "Remains Transfer",
    faqs: [
      {
        q: "How are cremated remains transferred?",
        a: "Families may use a provided shipping kit with USPS Priority Mail Express, or coordinate local drop-off and pickup options by appointment at our Carolina Beach location.",
      },
      {
        q: "Is the shipping kit free?",
        a: "Yes. The prepaid USPS Priority Mail Express shipping kit is provided at no additional cost when you book an unattended scattering service.",
      },
      {
        q: "Is shipping cremated remains legal?",
        a: "Yes. USPS Priority Mail Express is the only mail service authorized by the U.S. Postal Service for shipping cremated remains, and our kit is designed to comply with all USPS requirements.",
      },
    ],
  },
  {
    name: "Documentation",
    faqs: [
      {
        q: "What documents do we receive after service?",
        a: "You receive a sea scattering certificate with the date and GPS coordinates of the ceremony. EPA notification is also submitted within the required 30-day timeframe.",
      },
      {
        q: "What is EPA reporting and why is it required?",
        a: "The EPA requires notification of any burial at sea under the Marine Protection, Research, and Sanctuaries Act. We file this report within 30 days of the service, including the GPS coordinates, date, and details. This is handled entirely by our team.",
      },
      {
        q: "How soon after service do we receive documentation?",
        a: "Scattering certificates and GPS coordinates are typically provided within a few business days of the ceremony. The EPA filing is submitted within the required 30-day window.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      <Navbar />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Clear answers to help you understand our services, process, and what to expect."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveCategory(i);
                  setOpenIndex(0);
                }}
                className="px-5 py-2 rounded-full text-xs tracking-[0.1em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  background:
                    activeCategory === i
                      ? "rgba(78,205,196,0.12)"
                      : "rgba(168,197,218,0.04)",
                  border:
                    activeCategory === i
                      ? "1px solid rgba(78,205,196,0.4)"
                      : "1px solid rgba(168,197,218,0.1)",
                  color:
                    activeCategory === i
                      ? "#4ecdc4"
                      : "rgba(168,197,218,0.5)",
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="space-y-3">
            {categories[activeCategory].faqs.map((faq, i) => (
              <div
                key={`${activeCategory}-${i}`}
                className="glass rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  borderColor:
                    openIndex === i
                      ? "rgba(78,205,196,0.25)"
                      : "rgba(168,197,218,0.1)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span
                    className="text-pearl group-hover:text-seafoam transition-colors duration-300 pr-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "1.15rem",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor:
                        openIndex === i
                          ? "rgba(78,205,196,0.5)"
                          : "rgba(168,197,218,0.2)",
                      background:
                        openIndex === i
                          ? "rgba(78,205,196,0.1)"
                          : "transparent",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform duration-300"
                      style={{
                        transform:
                          openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <line
                        x1="6"
                        y1="0"
                        x2="6"
                        y2="12"
                        stroke={
                          openIndex === i
                            ? "#4ecdc4"
                            : "rgba(168,197,218,0.6)"
                        }
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="0"
                        y1="6"
                        x2="12"
                        y2="6"
                        stroke={
                          openIndex === i
                            ? "#4ecdc4"
                            : "rgba(168,197,218,0.6)"
                        }
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: openIndex === i ? "300px" : "0",
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <p
                    className="px-6 pb-6 text-mist/65 leading-relaxed text-sm"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <p
              className="text-mist/45 text-sm mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Have a question we haven&apos;t answered?
            </p>
            <Link
              href="/contact"
              className="btn-ocean inline-block px-10 py-3 rounded-full border border-seafoam/40 text-seafoam text-sm tracking-widest uppercase hover:border-seafoam hover:bg-seafoam/10 transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
