export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Deep ocean gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(26,74,122,0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(13,40,71,0.6) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 90%, rgba(78,205,196,0.06) 0%, transparent 40%),
            linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)
          `,
        }}
      />

      {/* Gentle ambient floating light — CSS-only, no canvas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb absolute w-[500px] h-[500px] opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)",
            top: "10%",
            left: "5%",
            animationDuration: "20s",
          }}
        />
        <div
          className="orb absolute w-[350px] h-[350px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
            bottom: "25%",
            right: "10%",
            animationDuration: "26s",
            animationDelay: "8s",
          }}
        />
        <div
          className="orb absolute w-[200px] h-[200px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #a8c5da 0%, transparent 70%)",
            top: "55%",
            left: "45%",
            animationDuration: "22s",
            animationDelay: "12s",
          }}
        />
      </div>

      {/* Subtle horizon line */}
      <div
        className="absolute left-0 right-0 bottom-[30%] h-px opacity-[0.06]"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(168,197,218,0.5) 30%, rgba(168,197,218,0.6) 50%, rgba(168,197,218,0.5) 70%, transparent 95%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span
            className="inline-block text-mist/50 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Carolina Beach, North Carolina
          </span>
        </div>

        <h1
          className="animate-fade-up mt-8 mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            animationDelay: "0.3s",
            opacity: 0,
          }}
        >
          <span className="text-pearl">A Peaceful</span>
          <br />
          <span className="text-pearl">Return </span>
          <em style={{ fontWeight: 300, color: "#4ecdc4" }}>to the Sea</em>
        </h1>

        <p
          className="animate-fade-up text-mist/70 mb-12 max-w-lg mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "1.05rem",
            animationDelay: "0.5s",
            opacity: 0,
          }}
        >
          Attended and unattended ash scattering ceremonies with
          compassionate guidance, EPA-compliant filing, and complete
          documentation for your family.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <a
            href="/contact"
            className="btn-ocean px-10 py-4 rounded-full text-ocean-deep font-medium tracking-widest uppercase text-xs transition-all duration-300 hover:shadow-lg hover:shadow-seafoam/20"
            style={{
              fontFamily: "var(--font-body)",
              background:
                "linear-gradient(135deg, rgba(78,205,196,0.95) 0%, rgba(78,205,196,0.8) 100%)",
            }}
          >
            Begin Planning
          </a>
          <a
            href="/services"
            className="px-10 py-4 rounded-full border border-pearl/20 text-pearl/80 tracking-widest uppercase text-xs transition-all duration-300 hover:border-pearl/40 hover:bg-pearl/5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View Services
          </a>
        </div>

        {/* Trust signals */}
        <div
          className="animate-fade-up mt-20 flex items-center justify-center gap-3 sm:gap-8 flex-wrap"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          {["EPA Compliant", "Up to 6 Guests", "Full Documentation"].map(
            (item, i) => (
              <span
                key={i}
                className="text-mist/30 text-[10px] tracking-[0.2em] uppercase flex items-center gap-3 sm:gap-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {i > 0 && (
                  <span className="w-1 h-1 rounded-full bg-seafoam/30" />
                )}
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wave-svg w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 160V80C120 45 240 20 360 35C480 50 600 95 720 90C840 85 960 30 1080 20C1200 10 1320 45 1440 60V160H0Z"
            fill="rgba(13,40,71,0.5)"
          />
          <path
            d="M0 160V110C150 75 300 40 450 55C600 70 750 115 900 108C1050 100 1200 55 1350 48L1440 50V160H0Z"
            fill="rgba(10,22,40,0.7)"
          />
        </svg>
      </div>
    </section>
  );
}
