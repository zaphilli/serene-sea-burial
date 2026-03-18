"use client";

const stats = [
  { num: "3 NM", label: "Offshore Distance" },
  { num: "6", label: "Passenger Capacity" },
  { num: "90-120", label: "Minutes At Sea" },
  { num: "30 Days", label: "EPA Filing Window" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #0d2847 40%, #0a1628 100%)",
        }}
      />

      {/* Decorative wave bg */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg viewBox="0 0 1440 900" fill="none" className="w-full h-full">
          <path
            d="M-100 400 Q200 200 500 350 Q800 500 1100 300 Q1300 200 1540 350"
            stroke="#4ecdc4"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M-100 500 Q200 300 500 450 Q800 600 1100 400 Q1300 300 1540 450"
            stroke="#4ecdc4"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M-100 300 Q200 100 500 250 Q800 400 1100 200 Q1300 100 1540 250"
            stroke="rgba(201,169,110,0.5)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center">
              <div
                className="shimmer-text mb-2"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 400,
                  fontSize: "2.5rem",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                className="text-mist/60 text-xs tracking-widest uppercase"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left visual */}
          <div className="relative">
            {/* Abstract ocean illustration */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,74,122,0.4) 0%, rgba(13,40,71,0.8) 100%)",
                border: "1px solid rgba(78,205,196,0.15)",
              }}
            >
              <svg
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(78,205,196,0.2)"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </radialGradient>
                </defs>
                <rect width="500" height="400" fill="#071020"/>
                <circle cx="250" cy="200" r="180" fill="url(#centerGlow)"/>

                {/* Concentric wave rings */}
                {[40, 80, 120, 160, 200].map((r, i) => (
                  <circle
                    key={i}
                    cx="250"
                    cy="200"
                    r={r}
                    stroke="rgba(78,205,196,0.1)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                ))}

                {/* Compass rose */}
                <line x1="250" y1="80" x2="250" y2="320" stroke="rgba(168,197,218,0.15)" strokeWidth="0.5"/>
                <line x1="110" y1="200" x2="390" y2="200" stroke="rgba(168,197,218,0.15)" strokeWidth="0.5"/>
                <line x1="151" y1="101" x2="349" y2="299" stroke="rgba(168,197,218,0.08)" strokeWidth="0.5"/>
                <line x1="349" y1="101" x2="151" y2="299" stroke="rgba(168,197,218,0.08)" strokeWidth="0.5"/>

                {/* North arrow */}
                <path d="M250 90 L245 110 L250 105 L255 110 Z" fill="rgba(201,169,110,0.6)"/>
                <text x="250" y="78" textAnchor="middle" fill="rgba(201,169,110,0.6)" fontSize="12" fontFamily="Jost, sans-serif" fontWeight="500">N</text>

                {/* Central ship */}
                <path d="M225 195 L275 195 L282 210 L218 210 Z" fill="rgba(168,197,218,0.3)" stroke="rgba(78,205,196,0.4)" strokeWidth="1"/>
                <path d="M248 175 L252 175 L252 195 L248 195 Z" fill="rgba(168,197,218,0.5)"/>
                <path d="M252 178 L268 190 L252 195 Z" fill="rgba(201,169,110,0.3)" stroke="rgba(201,169,110,0.4)" strokeWidth="0.5"/>

                {/* Wave paths */}
                <path d="M50 240 Q125 220 200 240 Q275 260 350 240 Q425 220 500 240" stroke="rgba(78,205,196,0.25)" strokeWidth="1.5" fill="none"/>
                <path d="M50 260 Q125 240 200 260 Q275 280 350 260 Q425 240 500 260" stroke="rgba(78,205,196,0.15)" strokeWidth="1" fill="none"/>
                <path d="M50 280 Q125 260 200 280 Q275 300 350 280 Q425 260 500 280" stroke="rgba(78,205,196,0.1)" strokeWidth="0.8" fill="none"/>

                {/* Stars / coordinates */}
                {[[80, 80], [420, 90], [60, 320], [440, 310], [150, 150], [360, 340]].map(([x, y], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="2" fill="rgba(201,169,110,0.5)"/>
                    <circle cx={x} cy={y} r="5" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" fill="none"/>
                  </g>
                ))}

                {/* Coordinates text */}
                <text x="50" y="370" fill="rgba(78,205,196,0.4)" fontSize="10" fontFamily="monospace">34°03'N 77°54'W</text>
              </svg>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 border border-gold-light/20"
              style={{ borderColor: "rgba(201,169,110,0.2)" }}
            >
              <div
                className="text-gold-light text-3xl mb-1"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#c9a96e",
                }}
              >
                ✦
              </div>
              <div
                className="text-pearl text-sm font-medium"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                EPA Reporting
              </div>
              <div
                className="text-mist/60 text-xs"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                Filed within 30 days
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Why Families Choose Us
            </span>

            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-8"
            >
              Peaceful Coastal
              <br />
              <em className="text-seafoam">Farewells</em>
              <br />
              with Clear Guidance
            </h2>

            <div
              className="space-y-5 text-mist/70 leading-relaxed"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
            >
              <p>
                Serene Sea Burials serves families from Carolina Beach with
                attended and unattended ash scattering services designed for
                simplicity, dignity, and peace of mind.
              </p>
              <p>
                Attended packages include a private vessel experience for up to
                six passengers and typically run 90 to 120 minutes offshore,
                with time for readings, prayer, flowers, and reflection.
              </p>
              <p>
                Each service includes documented coordinates and required EPA
                notification filing. Families receive certificates and records
                after the ceremony for both remembrance and compliance.
              </p>
            </div>

            <div className="divider-gold my-8 max-w-xs" />

            <blockquote
              style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontWeight: 300 }}
              className="text-xl text-pearl/80 border-l border-seafoam/40 pl-6"
            >
              "A calm, respectful process can make an overwhelming moment feel
              manageable for the whole family."
            </blockquote>
            <p
              className="mt-3 text-xs text-mist/40 tracking-widest uppercase pl-6"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              — Serene Sea Burials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
