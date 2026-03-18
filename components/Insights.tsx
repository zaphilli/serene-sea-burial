import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Insights() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #071020 0%, #0a1628 100%)",
        }}
      />

      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #c9a96e 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From Our Team
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl"
            >
              Guidance &amp; <em className="text-seafoam">Insights</em>
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-3xl p-7 transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: "rgba(13,40,71,0.35)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(168,197,218,0.1)",
              }}
            >
              {/* Top accent line */}
              <div
                className="h-px mb-7 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, #4ecdc4, #c9a96e)",
                  opacity: 0.35,
                  width: "40px",
                }}
              />

              <span
                className="inline-block text-seafoam text-[10px] tracking-[0.35em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {post.category}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "1.45rem",
                  lineHeight: 1.25,
                }}
                className="text-pearl mb-3 group-hover:text-seafoam transition-colors duration-300"
              >
                {post.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
                className="text-mist/55 text-sm mb-7"
              >
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className="text-mist/30 text-xs"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {post.readTime}
                </span>
                <span
                  className="flex items-center gap-2 text-seafoam text-xs tracking-widest uppercase transition-all duration-300 group-hover:gap-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Read
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7H12M8.5 3.5L12 7L8.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
