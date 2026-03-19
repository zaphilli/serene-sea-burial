import Link from "next/link";

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="relative pt-36 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #0d2847 70%, #0a1628 100%)",
        }}
      />

      {/* Subtle wave pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 280 Q180 220 360 260 Q540 300 720 240 Q900 180 1080 230 Q1260 280 1440 220"
            stroke="#4ecdc4"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0 320 Q180 260 360 300 Q540 340 720 280 Q900 220 1080 270 Q1260 320 1440 260"
            stroke="#4ecdc4"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 360 Q180 300 360 340 Q540 380 720 320 Q900 260 1080 310 Q1260 360 1440 300"
            stroke="#4ecdc4"
            strokeWidth="0.6"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 flex-wrap">
              {breadcrumbs.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-mist/25 text-xs">/</span>
                  )}
                  <Link
                    href={item.href}
                    className="text-mist/45 text-xs tracking-[0.2em] uppercase hover:text-seafoam transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.1,
          }}
          className="text-pearl mb-5"
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-mist/55 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #0a1628)",
        }}
      />
    </section>
  );
}
