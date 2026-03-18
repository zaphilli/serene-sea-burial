const primaryServices = [
  {
    title: "Unattended Scattering",
    badge: "Most Chosen",
    subtitle: "For families near or far",
    description:
      "The captain performs a dignified scattering ceremony on your behalf, with a moment of reflection at sea. Ideal for families who cannot travel or prefer a simpler arrangement.",
    features: [
      "Starting at $400",
      "Photos upon request",
      "GPS coordinates provided",
      "Scattering certificate included",
    ],
    cta: { label: "Request Shipping Kit", href: "/services/unattended-ash-scattering" },
    featured: true,
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <path
          d="M12 28 C12 20 20 14 28 14 C36 14 40 20 40 26"
          stroke="#4ecdc4"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M8 34 Q16 24 24 28 Q32 32 40 24"
          stroke="rgba(78,205,196,0.4)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="26" r="5" stroke="#c9a96e" strokeWidth="1.5" />
        <path
          d="M22 24 L24 20 L26 24 L24 28 Z"
          fill="rgba(201,169,110,0.4)"
        />
      </svg>
    ),
  },
  {
    title: "Attended Ceremony",
    subtitle: "Family present on board",
    description:
      "A private ash scattering cruise for family and friends. Ceremonies include time for music, readings, prayer, and a personal farewell approximately 3 miles offshore.",
    features: [
      "Up to 6 passengers",
      "90–120 minutes at sea",
      "Captain-led or family-led",
      "Personalize with flowers & music",
    ],
    cta: { label: "Arrange a Ceremony", href: "/services/attended-ceremony" },
    featured: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <path
          d="M8 32 Q16 20 24 26 Q32 32 40 20"
          stroke="#4ecdc4"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M8 38 Q16 26 24 32 Q32 38 40 26"
          stroke="rgba(78,205,196,0.4)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="16" r="6" stroke="#c9a96e" strokeWidth="1.5" />
        <path
          d="M21 16 L24 10 L27 16"
          stroke="#c9a96e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="24"
          y1="10"
          x2="24"
          y2="22"
          stroke="#c9a96e"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const includedFeatures = [
  {
    title: "EPA-Compliant Filing",
    description: "Required documentation filed within 30 days of service",
  },
  {
    title: "GPS Coordinates",
    description: "Exact latitude and longitude recorded for your family",
  },
  {
    title: "Remains Transfer",
    description: "Free USPS shipping kit or local drop-off by appointment",
  },
  {
    title: "Flower Options",
    description: "Rose sprays, loose roses, and wreaths available to add",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span
            className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our Services
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.1,
            }}
            className="text-pearl mb-5"
          >
            Choose the Path
            <br />
            That Feels Right
          </h2>
          <p
            className="text-mist/50 max-w-md mx-auto text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Every family is different. Whether you join us at sea or let our
            captain carry your wishes, the farewell will be handled with care.
          </p>
        </div>

        {/* Primary services — 2-column */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {primaryServices.map((service, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 lg:p-10 transition-all duration-500 group"
              style={{
                background: service.featured
                  ? "rgba(78,205,196,0.04)"
                  : "rgba(13,40,71,0.35)",
                backdropFilter: "blur(12px)",
                border: service.featured
                  ? "1px solid rgba(78,205,196,0.2)"
                  : "1px solid rgba(168,197,218,0.1)",
              }}
            >
              {/* Featured badge */}
              {service.badge && (
                <div
                  className="absolute -top-3 left-8 px-4 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase"
                  style={{
                    fontFamily: "var(--font-body)",
                    background:
                      "linear-gradient(135deg, rgba(78,205,196,0.9), rgba(78,205,196,0.7))",
                    color: "#071020",
                    fontWeight: 500,
                  }}
                >
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div className="mb-6 opacity-70">
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.7rem",
                }}
                className="text-pearl mb-1"
              >
                {service.title}
              </h3>
              <span
                className="text-mist/40 text-xs tracking-[0.2em] uppercase block mb-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {service.subtitle}
              </span>

              {/* Description */}
              <p
                className="text-mist/60 text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {service.features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-sm text-mist/55"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M2.5 7 L5.5 10 L11.5 3.5"
                        stroke={service.featured ? "#4ecdc4" : "#c9a96e"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={service.cta.href}
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 group-hover:gap-3"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: service.featured ? "#4ecdc4" : "#c9a96e",
                }}
              >
                {service.cta.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7H12M8.5 3.5L12 7L8.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Included features */}
        <div>
          <div className="text-center mb-10">
            <span
              className="text-mist/35 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Included with Every Service
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {includedFeatures.map((feat, i) => (
              <div
                key={i}
                className="rounded-xl p-5 text-center"
                style={{
                  background: "rgba(13,40,71,0.3)",
                  border: "1px solid rgba(168,197,218,0.06)",
                }}
              >
                <h4
                  className="text-pearl/80 text-sm mb-1.5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  {feat.title}
                </h4>
                <p
                  className="text-mist/35 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Preplanning note */}
        <div className="text-center mt-14">
          <p
            className="text-mist/40 text-sm mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Planning ahead? We offer preplanning with clear pricing and simple
            paperwork.
          </p>
          <a
            href="/services/preplanning"
            className="text-seafoam/70 text-xs tracking-widest uppercase hover:text-seafoam transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Learn about preplanning →
          </a>
        </div>
      </div>
    </section>
  );
}
