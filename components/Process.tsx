"use client";

import Image from "next/image";

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
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Header + visual — on mobile, this appears second */}
          <div className="order-2 lg:order-1">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              How It Works
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-8"
            >
              A Gentle Process
              <br />
              from <em className="text-seafoam">Shore to Sea</em>
            </h2>

            <p
              className="text-mist/60 leading-relaxed max-w-md mb-10"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              The entire process is designed to be calm and straightforward.
              From scheduling to final paperwork, each step is handled with care
              so your family can focus on remembrance.
            </p>

            {/* Process photo */}
            <div className="hidden lg:block relative aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/media/basket-urns-wispy-sky.jpg"
                alt="Ceremony basket with flowers and urns on the boat, open ocean and sky"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071020]/50 via-transparent to-[#071020]/20" />
            </div>
          </div>

          {/* Right: Steps — on mobile, this appears first */}
          <div className="relative order-1 lg:order-2">
            {/* Vertical line */}
            <div
              className="absolute left-7 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(78,205,196,0.25) 20%, rgba(78,205,196,0.25) 80%, transparent)",
              }}
            />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 lg:gap-8 group">
                  {/* Number circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full glass flex items-center justify-center border border-seafoam/15 group-hover:border-seafoam/40 transition-all duration-300">
                      <span
                        className="text-seafoam/70 text-xs tracking-widest"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-3 pb-2">
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: "1.3rem",
                      }}
                      className="text-pearl mb-2 group-hover:text-seafoam transition-colors duration-300"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-mist/50 text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                      }}
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
