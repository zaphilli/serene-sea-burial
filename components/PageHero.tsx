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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb absolute w-[400px] h-[400px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)",
            top: "10%",
            right: "10%",
            animationDuration: "20s",
          }}
        />
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
            fontWeight: 300,
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
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
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
