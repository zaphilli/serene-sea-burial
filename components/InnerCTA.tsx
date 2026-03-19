import Link from "next/link";

export default function InnerCTA({
  title = "We\u2019re Here When You\u2019re Ready",
  subtitle = "There\u2019s no rush. Whenever the time feels right, we\u2019re here to help.",
  primaryLabel = "Speak With Us",
  primaryHref = "/contact",
  secondaryLabel = "Call (910) 833-1900",
  secondaryHref = "tel:+19108331900",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb absolute w-[500px] h-[500px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)",
            top: "20%",
            left: "30%",
            animationDuration: "20s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.15,
          }}
          className="text-pearl mb-4"
        >
          {title}
        </h2>
        <p
          className="text-mist/50 mb-10 max-w-md mx-auto"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="btn-ocean px-10 py-4 rounded-full text-ocean-deep font-medium tracking-widest uppercase text-xs transition-all duration-300 hover:shadow-lg hover:shadow-seafoam/20"
            style={{
              fontFamily: "var(--font-body)",
              background:
                "linear-gradient(135deg, rgba(78,205,196,0.95) 0%, rgba(78,205,196,0.8) 100%)",
            }}
          >
            {primaryLabel}
          </Link>
          <a
            href={secondaryHref}
            className="px-10 py-4 rounded-full border border-pearl/20 text-pearl/80 tracking-widest uppercase text-xs transition-all duration-300 hover:border-pearl/40 hover:bg-pearl/5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
