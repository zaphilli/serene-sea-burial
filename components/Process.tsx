"use client";

const steps = [
  {
    num: "01",
    title: "Choose a Service",
    description:
      "Select either an attended or unattended sea scattering package and schedule by phone or online.",
  },
  {
    num: "02",
    title: "Transfer the Remains",
    description:
      "Send cremated remains using the provided shipping kit or use local drop-off and pickup options by appointment.",
  },
  {
    num: "03",
    title: "Personalize the Ceremony",
    description:
      "Add readings, music, prayers, flowers, and other personal touches to create a meaningful farewell at sea.",
  },
  {
    num: "04",
    title: "Scattering at Sea",
    description:
      "The captain conducts the ceremony approximately 3 nautical miles offshore, with family attendance available on attended packages.",
  },
  {
    num: "05",
    title: "Receive Final Documents",
    description:
      "You receive coordinates and a scattering certificate, and we file the required EPA notice within 30 days.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
        }}
      />

      {/* Decorative ocean line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Header + visual */}
          <div>
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              How It Works
            </span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
              className="text-pearl mb-8"
            >
              A Gentle
              <br />
              <em className="text-seafoam">Journey</em>
              <br />
              from Shore
              <br />
              to Sea
            </h2>

            <p
              className="text-mist/70 leading-relaxed max-w-md"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
            >
              The entire process is designed to be calm and straightforward.
              From scheduling to final paperwork, each step is handled with care
              so your family can focus on remembrance.
            </p>

            {/* Decorative ocean scene */}
            <div className="mt-12 relative">
              <svg
                viewBox="0 0 500 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full opacity-60"
              >
                {/* Sky gradient */}
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0a1628"/>
                    <stop offset="100%" stopColor="#1a4a7a" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a4a7a" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#0d2847"/>
                  </linearGradient>
                </defs>
                <rect width="500" height="200" fill="url(#skyGrad)"/>
                {/* Stars */}
                {[
                  [50, 20, 1.2, 0.6], [120, 40, 0.8, 0.7], [200, 15, 1.4, 0.5],
                  [280, 35, 0.6, 0.8], [350, 10, 1.0, 0.5], [420, 30, 1.3, 0.7],
                  [470, 50, 0.7, 0.6], [80, 60, 1.1, 0.5], [160, 50, 0.9, 0.7],
                  [240, 70, 1.3, 0.6], [320, 45, 0.7, 0.8], [400, 65, 1.0, 0.5],
                  [460, 80, 1.2, 0.7],
                ].map(([x, y, r, opacity], i) => (
                  <circle key={i} cx={x} cy={y} r={r} fill="white" opacity={opacity}/>
                ))}
                {/* Moon */}
                <circle cx="420" cy="40" r="18" fill="rgba(201,169,110,0.15)" stroke="rgba(201,169,110,0.3)" strokeWidth="1"/>
                <circle cx="410" cy="36" r="14" fill="#071020"/>
                {/* Horizon/sea */}
                <rect x="0" y="120" width="500" height="80" fill="url(#seaGrad)"/>
                {/* Water waves */}
                <path d="M0 130 Q62 120 125 130 Q187 140 250 130 Q312 120 375 130 Q437 140 500 130" stroke="rgba(78,205,196,0.3)" strokeWidth="1" fill="none"/>
                <path d="M0 145 Q62 135 125 145 Q187 155 250 145 Q312 135 375 145 Q437 155 500 145" stroke="rgba(78,205,196,0.2)" strokeWidth="1" fill="none"/>
                <path d="M0 160 Q62 150 125 160 Q187 170 250 160 Q312 150 375 160 Q437 170 500 160" stroke="rgba(78,205,196,0.15)" strokeWidth="0.8" fill="none"/>
                {/* Moon reflection */}
                <path d="M400 125 Q415 130 430 125" stroke="rgba(201,169,110,0.4)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M395 135 Q415 140 435 135" stroke="rgba(201,169,110,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Boat silhouette */}
                <path d="M220 118 L280 118 L290 128 L210 128 Z" fill="rgba(10,22,40,0.9)" stroke="rgba(168,197,218,0.3)" strokeWidth="0.5"/>
                <path d="M248 105 L252 105 L252 118 L248 118 Z" fill="rgba(168,197,218,0.4)"/>
                <path d="M248 105 L265 113 L248 118 Z" fill="rgba(168,197,218,0.2)" stroke="rgba(168,197,218,0.3)" strokeWidth="0.5"/>
                {/* Flowers on water */}
                <circle cx="180" cy="132" r="3" fill="rgba(255,255,255,0.3)"/>
                <circle cx="310" cy="135" r="2" fill="rgba(255,255,255,0.25)"/>
                <circle cx="160" cy="148" r="2.5" fill="rgba(255,255,255,0.2)"/>
              </svg>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-7 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(78,205,196,0.3) 20%, rgba(78,205,196,0.3) 80%, transparent)",
              }}
            />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  {/* Number circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full glass flex items-center justify-center border border-seafoam/20 group-hover:border-seafoam/50 transition-all duration-300">
                      <span
                        className="text-seafoam text-xs tracking-widest"
                        style={{ fontFamily: "Jost, sans-serif" }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-3 pb-4">
                    <h3
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontWeight: 500,
                        fontSize: "1.4rem",
                      }}
                      className="text-pearl mb-2 group-hover:text-seafoam transition-colors duration-300"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-mist/60 text-sm leading-relaxed"
                      style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/20 to-transparent" />
    </section>
  );
}
