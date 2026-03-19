import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import InnerCTA from "@/components/InnerCTA";

const siteUrl = "https://sereneseaburials.com";

export const metadata: Metadata = {
  title: "Grief & Guidance | Coping with Loss",
  description:
    "Resources and guidance for coping with the loss of a loved one. Understanding grief, self-care practices, and honoring memories through meaningful farewell ceremonies.",
  alternates: { canonical: `${siteUrl}/grief-and-guidance` },
  openGraph: {
    url: `${siteUrl}/grief-and-guidance`,
    title: "Grief & Guidance | Serene Sea Burials",
    description:
      "Compassionate resources to help you navigate the grieving process and find meaningful ways to honor your loved one.",
  },
};

const stages = [
  {
    name: "Denial",
    description:
      "The initial shock that serves as a defense mechanism. You may feel numb or find it hard to accept the reality of your loss. This is a normal response that helps you pace your grief.",
  },
  {
    name: "Anger",
    description:
      "As the shock begins to wear off, pain may re-emerge as frustration or anger. You might direct these feelings at others, yourself, or even the person who passed. Anger is a natural part of processing.",
  },
  {
    name: "Bargaining",
    description:
      "You may find yourself dwelling on \"what if\" or \"if only\" statements, replaying scenarios in your mind. This is the mind's attempt to regain a sense of control over something that feels uncontrollable.",
  },
  {
    name: "Depression",
    description:
      "A deep sadness may settle in as you begin to understand the full weight of the loss. This is not a sign of weakness — it is an appropriate response to a profound change in your life.",
  },
  {
    name: "Acceptance",
    description:
      "Acceptance does not mean you are \"okay\" with the loss. It means you acknowledge the reality and learn to live with it. You begin to find ways to move forward while carrying your loved one's memory with you.",
  },
];

const guidanceSections = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ecdc4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Seek Support",
    description:
      "You don't have to navigate grief alone. Reach out to trusted friends, family members, or a professional counselor. Support groups can be especially therapeutic — sharing stories and coping strategies with people who understand your experience can bring unexpected comfort.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ecdc4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Practice Self-Care",
    description:
      "Grief is physically and emotionally exhausting. Prioritize activities that nourish your body and mind — gentle exercise, meditation, balanced nutrition, and adequate sleep. Listen to your body; it often knows what it needs to heal. Even small acts of self-care can make a meaningful difference.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ecdc4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Allow Yourself to Grieve",
    description:
      "There is no right or wrong way to grieve. Give yourself permission to feel the full range of emotions without judgment. Suppressing your feelings can delay healing. Journaling can be an excellent outlet for expressing your thoughts and feelings — writing can help you process what words spoken aloud cannot.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ecdc4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Honor Their Memory",
    description:
      "Finding a meaningful way to remember your loved one can provide comfort and a sense of closure. An ash scattering service at sea offers a beautiful, natural way to return your loved one to the elements — the vastness of the ocean reflecting the depth of your connection. Many families find this act of release deeply healing.",
  },
];

const resources = [
  {
    name: "National Alliance for Grieving Children",
    url: "https://childrengrieve.org",
    description: "Support for children and teens who are grieving.",
  },
  {
    name: "GriefShare",
    url: "https://www.griefshare.org",
    description:
      "A nationwide network of grief recovery support groups.",
  },
  {
    name: "The Dougy Center",
    url: "https://www.dougy.org",
    description:
      "Resources for grieving children, teens, young adults, and their families.",
  },
  {
    name: "Crisis Text Line",
    url: "https://www.crisistextline.org",
    description:
      "Text HOME to 741741 to connect with a trained crisis counselor.",
  },
];

export default function GriefAndGuidancePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Grief & Guidance"
        subtitle="Grief is not a problem to be solved — it is a journey to be walked. We're here to offer gentle guidance along the way."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Intro */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-mist/55 leading-relaxed text-lg"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Losing someone you love is one of the most difficult experiences
            in life. There is no timeline for grief, no right way to feel,
            and no expectation for how quickly you should heal. Healing is
            not a race — it is a gradual unfolding of acceptance and peace.
          </p>
        </div>
      </section>

      {/* Emotional photo */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[21/7] md:aspect-[21/6]">
          <Image
            src="/media/petals-dispersing.jpg"
            alt="Flower petals gently dispersing across the ocean surface"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a1628 0%, transparent 25%, transparent 75%, #0a1628 100%)" }} />
        </div>
      </section>

      {/* Five Stages */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Understanding Grief
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-4"
            >
              The Five Stages of Grief
            </h2>
            <p
              className="text-mist/50 max-w-lg mx-auto text-sm"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Not everyone will experience all five stages, and they often
              don&apos;t occur in a linear order. This is simply a framework to
              help you understand what you may be feeling.
            </p>
          </div>

          <div className="space-y-4">
            {stages.map((stage, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 border border-white/[0.04] flex items-start gap-6"
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-seafoam/10 border border-seafoam/20 flex items-center justify-center text-seafoam text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3
                    className="text-pearl mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "1.2rem",
                    }}
                  >
                    {stage.name}
                  </h3>
                  <p
                    className="text-mist/50 text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                    }}
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance Cards */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Finding Your Way
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl"
            >
              Gentle Guidance for Healing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guidanceSections.map((section, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 border border-white/[0.04]"
              >
                <div className="w-12 h-12 rounded-full bg-seafoam/10 border border-seafoam/20 flex items-center justify-center mb-5">
                  {section.icon}
                </div>
                <h3
                  className="text-pearl mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.15rem",
                  }}
                >
                  {section.title}
                </h3>
                <p
                  className="text-mist/50 text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                  }}
                >
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #071020 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Additional Support
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              className="text-pearl mb-3"
            >
              Grief Support Resources
            </h2>
            <p
              className="text-mist/45 text-sm max-w-md mx-auto"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              These organizations offer compassionate, professional support
              for those navigating loss.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((resource, i) => (
              <Link
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 border border-white/[0.04] group hover:border-seafoam/20 transition-all duration-300"
              >
                <h3
                  className="text-pearl group-hover:text-seafoam transition-colors duration-300 mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.05rem",
                  }}
                >
                  {resource.name}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline ml-2 opacity-40 group-hover:opacity-100 transition-opacity"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </h3>
                <p
                  className="text-mist/40 text-sm"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                  }}
                >
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        title="We're Here for You"
        subtitle="Whether you're ready to plan a service or simply need someone to talk to, we're here with compassion and patience."
        primaryLabel="Reach Out to Us"
        primaryHref="/contact"
        secondaryLabel="Call (910) 833-1900"
        secondaryHref="tel:+19108331900"
      />

      <Footer />
    </main>
  );
}
