"use client";

const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M8 32 Q16 20 24 26 Q32 32 40 20" stroke="#4ecdc4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M8 38 Q16 26 24 32 Q32 38 40 26" stroke="rgba(78,205,196,0.4)" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="16" r="6" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M21 16 L24 10 L27 16" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="24" y1="10" x2="24" y2="22" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Attended Ash Scattering",
    subtitle: "Family Present On Board",
    description:
      "A private ash-scattering cruise with family and friends present. Ceremonies are typically 90 to 120 minutes and can include music, prayer, and personal remarks.",
    features: ["Up to 6 passengers", "Approx. 3 miles offshore", "90-120 minute ceremony", "Captain-led or family-led farewell"],
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M12 28 C12 20 20 14 28 14 C36 14 40 20 40 26" stroke="#4ecdc4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M8 34 Q16 24 24 28 Q32 32 40 24" stroke="rgba(78,205,196,0.4)" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="26" r="5" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M22 24 L24 20 L26 24 L24 28 Z" fill="rgba(201,169,110,0.4)"/>
      </svg>
    ),
    title: "Unattended Sea Burial",
    subtitle: "Respectful Captain-Only Service",
    description:
      "For families who cannot attend in person, the captain performs a dignified scattering and moment of reflection on your behalf.",
    features: ["Package starts at $400", "Photos upon request", "Certificate provided", "Coordinates included"],
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="16" y="12" width="16" height="20" rx="2" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M20 18 H28 M20 22 H28 M20 26 H25" stroke="rgba(201,169,110,0.6)" strokeWidth="1" strokeLinecap="round"/>
        <path d="M8 36 Q16 26 24 30 Q32 34 40 26" stroke="#4ecdc4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M8 40 Q18 32 28 36 Q36 40 40 34" stroke="rgba(78,205,196,0.3)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: "Ceremony Flower Service",
    subtitle: "Basket Ceremony with Roses",
    description:
      "The attended basket ceremony includes a rose casket spray and at least two dozen loose roses for a graceful, traditional sea farewell.",
    features: ["Rose casket spray", "Two dozen loose roses", "Traditional basket ceremony", "Optional wreaths and upgrades"],
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M10 30 Q20 15 30 22 Q38 28 42 18" stroke="#4ecdc4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="14" cy="16" r="3" fill="rgba(78,205,196,0.2)" stroke="#4ecdc4" strokeWidth="1"/>
        <circle cx="24" cy="12" r="3" fill="rgba(201,169,110,0.2)" stroke="#c9a96e" strokeWidth="1"/>
        <circle cx="34" cy="16" r="3" fill="rgba(78,205,196,0.2)" stroke="#4ecdc4" strokeWidth="1"/>
        <path d="M14 19 L24 15 M24 15 L34 19" stroke="rgba(168,197,218,0.4)" strokeWidth="0.8" strokeDasharray="2 2"/>
        <path d="M8 38 Q18 30 28 34 Q36 38 42 32" stroke="rgba(78,205,196,0.4)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: "EPA-Compliant Reporting",
    subtitle: "Handled for Your Family",
    description:
      "Every sea scattering is documented and reported under EPA requirements, including position details and notification filed after the service.",
    features: ["Latitude and longitude logged", "Depth and time recorded", "EPA report filed within 30 days", "Compliant documentation packet"],
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 10 L28 18 L37 19 L31 25 L32 34 L24 30 L16 34 L17 25 L11 19 L20 18 Z" stroke="#c9a96e" strokeWidth="1.5" fill="rgba(201,169,110,0.08)"/>
        <path d="M8 40 Q18 32 28 36 Q36 40 42 34" stroke="#4ecdc4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: "Remains Transfer Options",
    subtitle: "Shipping, Pickup, or Drop-Off",
    description:
      "Choose the transfer method that works best for you. Free cremains shipping kits are available, and local pickup/drop-off options are offered by appointment.",
    features: ["USPS Priority Mail Express", "Free shipping kit available", "Local New Hanover pickup", "Drop-off appointments in Wilmington"],
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M14 28 L24 12 L34 28" stroke="#4ecdc4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 34 L24 34 L38 34" stroke="#4ecdc4" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 34 L18 38 M30 34 L30 38" stroke="rgba(78,205,196,0.4)" strokeWidth="1" strokeLinecap="round"/>
        <path d="M6 40 Q16 34 26 38 Q34 42 42 36" stroke="rgba(78,205,196,0.4)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: "Preplanning Assistance",
    subtitle: "Arrange in Advance",
    description:
      "Families can preplan a future sea burial with clear pricing, simple paperwork, and guidance through each step before services are needed.",
    features: ["Online planning support", "Phone guidance available", "Simple intake process", "Peace of mind for family"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(78,205,196,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            What We Offer
          </span>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
            className="text-pearl mb-6"
          >
            Services Crafted
            <br />
            <em className="text-seafoam">with Care</em>
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 group hover:border-seafoam/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-seafoam/5"
            >
              {/* Icon */}
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <div className="mb-4">
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 500,
                    fontSize: "1.5rem",
                  }}
                  className="text-pearl mb-1"
                >
                  {service.title}
                </h3>
                <span
                  className="text-seafoam text-xs tracking-[0.25em] uppercase"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {service.subtitle}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-mist/70 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-xs text-mist/60"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6 L5 9 L10 3" stroke="#4ecdc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p
            className="text-mist/60 mb-6 text-sm"
            style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
          >
            Not sure which service is right for you?
          </p>
          <a
            href="#contact"
            className="btn-ocean inline-block px-10 py-3 rounded-full border border-seafoam/40 text-seafoam text-sm tracking-widest uppercase hover:border-seafoam hover:bg-seafoam/10 transition-all duration-300"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
