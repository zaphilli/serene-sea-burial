import { getPostBySlug, posts, Section } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/BackButton";

const siteUrl = "https://sereneseaburials.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: "Serene Sea Burials",
      images: [
        {
          url: `${siteUrl}/logo.png`,
          width: 500,
          height: 500,
          alt: "Serene Sea Burials",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}/logo.png`],
    },
  };
}

function renderSection(section: Section, i: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={i}
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 400,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
          className="text-pearl mt-12 mb-4"
        >
          {section.text}
        </h2>
      );

    case "subheading":
      return (
        <h3
          key={i}
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 400,
            fontSize: "1.3rem",
            fontStyle: "italic",
          }}
          className="text-seafoam mt-8 mb-3"
        >
          {section.text}
        </h3>
      );

    case "paragraph":
      return (
        <p
          key={i}
          style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
          className="text-mist/80 mb-5 text-[15px]"
        >
          {section.text}
        </p>
      );

    case "callout":
      return (
        <blockquote
          key={i}
          className="my-8 px-6 py-5 rounded-2xl"
          style={{
            background: "rgba(78,205,196,0.06)",
            borderLeft: "2px solid rgba(78,205,196,0.4)",
          }}
        >
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
            className="text-pearl/90"
          >
            {section.text}
          </p>
        </blockquote>
      );

    case "list":
      return (
        <ul key={i} className="my-5 space-y-2">
          {section.items?.map((item, j) => (
            <li
              key={j}
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
              className="text-mist/80 text-[15px] flex items-start gap-3"
            >
              <span className="text-seafoam mt-1 flex-shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "comparison":
      const [header, ...rows] = section.columns ?? [];
      return (
        <div key={i} className="my-10 overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(168,197,218,0.1)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "rgba(13,40,71,0.6)" }}>
                <th
                  className="text-left px-5 py-3 text-mist/50 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                >
                  {header?.label}
                </th>
                <th
                  className="text-left px-5 py-3 text-mist/50 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                >
                  {header?.traditional}
                </th>
                <th
                  className="text-left px-5 py-3 text-seafoam text-xs tracking-widest uppercase"
                  style={{ fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                >
                  {header?.sea}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr
                  key={j}
                  style={{
                    background:
                      j % 2 === 0 ? "rgba(10,22,40,0.4)" : "rgba(13,40,71,0.2)",
                    borderTop: "1px solid rgba(168,197,218,0.06)",
                  }}
                >
                  <td
                    className="px-5 py-3 text-pearl/70 text-xs tracking-wide"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {row.label}
                  </td>
                  <td
                    className="px-5 py-3 text-mist/60 text-xs"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {row.traditional}
                  </td>
                  <td
                    className="px-5 py-3 text-seafoam text-xs font-medium"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {row.sea}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    image: `${siteUrl}/logo.png`,
    author: {
      "@type": "Organization",
      name: "Serene Sea Burials",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Serene Sea Burials",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <div style={{ background: "#0a1628", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-lg shadow-black/20 py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Serene Sea Burials"
              width={100}
              height={72}
              className="object-contain transition-opacity duration-300 group-hover:opacity-80"
              priority
            />
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full border border-seafoam/40 text-seafoam text-xs tracking-widest uppercase hover:border-seafoam hover:bg-seafoam/10 transition-all duration-300"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #4ecdc4 0%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.06,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <BackButton />

          <span
            className="inline-block text-seafoam text-xs tracking-[0.35em] uppercase mb-5"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {post.category}
          </span>

          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
            className="text-pearl mb-5"
          >
            {post.title}
          </h1>

          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              fontWeight: 300,
            }}
            className="text-mist/60 mb-8 leading-relaxed"
          >
            {post.subtitle}
          </p>

          <div className="flex items-center gap-6 mb-12">
            <div className="divider-gold flex-1" />
            <span
              className="text-mist/35 text-xs tracking-widest"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {post.date} &nbsp;·&nbsp; {post.readTime}
            </span>
            <div className="divider-gold flex-1" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-32">
        {post.content.map((section, i) => renderSection(section, i))}

        {/* CTA */}
        <div
          className="mt-16 rounded-3xl p-10 text-center"
          style={{
            background: "rgba(13,40,71,0.4)",
            border: "1px solid rgba(168,197,218,0.1)",
          }}
        >
          <div
            className="absolute"
            style={{
              top: 0, left: "20%", right: "20%", height: "1px",
              background: "linear-gradient(90deg, transparent, #c9a96e 40%, #4ecdc4 60%, transparent)",
            }}
          />
          <h3
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontSize: "1.8rem" }}
            className="text-pearl mb-3"
          >
            We Are Here for You
          </h3>
          <p
            className="text-mist/60 text-sm mb-7 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
          >
            Whether you are planning ahead or navigating a loss right now, our team is ready to answer every question — with no pressure and no obligation.
          </p>
          <Link
            href="/#contact"
            className="btn-ocean inline-flex items-center gap-3 px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "#071020",
              background: "linear-gradient(135deg, rgba(78,205,196,0.92), rgba(78,205,196,0.75))",
              border: "1px solid rgba(78,205,196,0.35)",
            }}
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8.5 3.5L12 7L8.5 10.5" stroke="#071020" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div
        className="border-t py-8 text-center"
        style={{ borderColor: "rgba(168,197,218,0.08)" }}
      >
        <p
          className="text-mist/25 text-xs tracking-widest"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          © {new Date().getFullYear()} Serene Sea Burials · Carolina Beach, NC
        </p>
      </div>
    </div>
  );
}
