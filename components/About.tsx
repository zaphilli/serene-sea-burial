const trustPillars = [
  {
    label: "3 NM Offshore",
    detail: "EPA-required distance",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 16 Q8 10 12 13 Q16 16 20 10"
          stroke="#4ecdc4"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M4 20 Q8 14 12 17 Q16 20 20 14"
          stroke="rgba(78,205,196,0.3)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Up to 6 Guests",
    detail: "Intimate setting",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3" stroke="#4ecdc4" strokeWidth="1.2" />
        <path
          d="M6 20 C6 16 9 14 12 14 C15 14 18 16 18 20"
          stroke="#4ecdc4"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "90–120 Minutes",
    detail: "Time at sea",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#4ecdc4" strokeWidth="1.2" />
        <path
          d="M12 7 V12 L15 14"
          stroke="#4ecdc4"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "EPA Filed",
    detail: "Within 30 days",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="5"
          y="4"
          width="14"
          height="16"
          rx="2"
          stroke="#4ecdc4"
          strokeWidth="1.2"
        />
        <path
          d="M9 9 L15 9 M9 12 L15 12 M9 15 L12 15"
          stroke="rgba(78,205,196,0.5)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #0d2847 40%, #0a1628 100%)",
        }}
      />

      {/* Subtle decorative lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <svg viewBox="0 0 1440 600" fill="none" className="w-full h-full">
          <path
            d="M-100 300 Q200 150 500 250 Q800 350 1100 200 Q1300 100 1540 250"
            stroke="#4ecdc4"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M-100 400 Q200 250 500 350 Q800 450 1100 300 Q1300 200 1540 350"
            stroke="#4ecdc4"
            strokeWidth="0.6"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Main content — centered */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Why Families Choose Us
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
            className="text-pearl mb-8"
          >
            Peaceful Farewells
            <br />
            with Clear Guidance
          </h2>

          <div
            className="max-w-2xl mx-auto space-y-5 text-mist/60 leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            <p>
              Serene Sea Burials serves families from Carolina Beach with
              attended and unattended ash scattering services designed for
              simplicity, dignity, and peace of mind.
            </p>
            <p>
              Attended packages include a private vessel experience for up to six
              passengers and typically run 90 to 120 minutes offshore, with time
              for readings, prayer, flowers, and reflection.
            </p>
            <p>
              Each service includes documented coordinates and required EPA
              notification filing. Families receive certificates and records
              after the ceremony for both remembrance and compliance.
            </p>
          </div>

          <div className="divider-gold max-w-xs mx-auto mt-10 mb-10" />

          <p
            className="text-mist/40 text-sm max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            A calm, respectful process can make an overwhelming moment feel
            manageable for the whole family.
          </p>
        </div>

        {/* Trust pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPillars.map((pillar, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="flex justify-center mb-3 opacity-70">
                {pillar.icon}
              </div>
              <div
                className="text-pearl mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                }}
              >
                {pillar.label}
              </div>
              <div
                className="text-mist/40 text-xs tracking-wider"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {pillar.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
