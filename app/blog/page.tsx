import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { posts } from "@/lib/posts";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Blog & Articles",
  description:
    "Guidance, insights, and articles about sea burial, ash scattering, EPA requirements, planning, and costs from Serene Sea Burials.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    url: `${siteUrl}/blog`,
    title: "Blog & Articles | Serene Sea Burials",
    description:
      "Articles about sea burial, ash scattering, planning, costs, and EPA requirements.",
  },
};

export default function BlogPage() {
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <main>
      <Navbar />
      <PageHero
        title="Guidance & Insights"
        subtitle="Articles to help you understand sea burial, plan ahead, and make informed decisions for your family."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "rgba(78,205,196,0.08)",
                  border: "1px solid rgba(78,205,196,0.2)",
                  color: "#4ecdc4",
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl p-7 transition-all duration-500 hover:scale-[1.01]"
                style={{
                  background: "rgba(13,40,71,0.35)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(168,197,218,0.1)",
                }}
              >
                <div
                  className="h-px mb-7"
                  style={{
                    background: "linear-gradient(90deg, #4ecdc4, #c9a96e)",
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

                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "1.4rem",
                    lineHeight: 1.25,
                  }}
                  className="text-pearl mb-3 group-hover:text-seafoam transition-colors duration-300"
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                  className="text-mist/50 text-sm mb-7"
                >
                  {post.excerpt.length > 120
                    ? post.excerpt.slice(0, 120) + "\u2026"
                    : post.excerpt}
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
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
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

      <Footer />
    </main>
  );
}
