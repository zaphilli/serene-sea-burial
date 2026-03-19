"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is burial at sea legal?",
    a: "Yes. Burial at sea is legal when handled under EPA rules. For cremated remains, scattering is performed at least 3 nautical miles from shore. We manage the required compliance steps for each service.",
  },
  {
    q: "How far offshore does the ceremony take place?",
    a: "Sea scattering is conducted approximately 3 nautical miles offshore in accordance with federal requirements.",
  },
  {
    q: "How many guests can attend?",
    a: "Attended services are structured for an intimate experience and can accommodate up to 6 passengers.",
  },
  {
    q: "How long is an attended service?",
    a: "Most attended ash scattering services are approximately 90 to 120 minutes from departure to return.",
  },
  {
    q: "Can we choose unattended service if we cannot travel?",
    a: "Yes. Unattended options are available for families who cannot be on board. The captain performs the service respectfully and documentation is provided afterward.",
  },
  {
    q: "How are cremated remains transferred?",
    a: "Families may use a provided shipping kit with USPS Priority Mail Express, or coordinate local drop-off and pickup options by appointment.",
  },
  {
    q: "What documents do we receive after service?",
    a: "You receive a sea scattering certificate and location details. EPA notification is also submitted within the required 30-day timeframe.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Common Questions
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
            className="text-pearl mb-6"
          >
            Answers to Help
            <br />
            <em className="text-seafoam">Guide You Forward</em>
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
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
                      openIndex === i ? "rgba(78,205,196,0.1)" : "transparent",
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
                    <line x1="6" y1="0" x2="6" y2="12" stroke={openIndex === i ? "#4ecdc4" : "rgba(168,197,218,0.6)"} strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="0" y1="6" x2="12" y2="6" stroke={openIndex === i ? "#4ecdc4" : "rgba(168,197,218,0.6)"} strokeWidth="1.5" strokeLinecap="round"/>
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
                  className="px-6 pb-6 text-mist/70 leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p
            className="text-mist/50 text-sm mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Have a question we haven't answered?
          </p>
          <a
            href="#contact"
            className="text-seafoam text-sm tracking-widest uppercase hover-underline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  );
}
