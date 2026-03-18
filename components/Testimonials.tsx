"use client";

const testimonials = [
  {
    quote:
      "The whole experience was compassionate, clear, and beautifully handled. Everything was explained in advance, and the day at sea felt peaceful and respectful.",
    name: "Karl S.",
    location: "Wilmington, NC",
    initial: "K",
  },
  {
    quote:
      "They cared for our family through every step. We received the coordinates and paperwork quickly, and the service gave us a real sense of closure.",
    name: "Lisa C.",
    location: "Carolina Beach, NC",
    initial: "L",
  },
  {
    quote:
      "For our unattended service, communication was excellent and the follow-up documents were exactly what we needed. Professional and kind from beginning to end.",
    name: "Janis M.",
    location: "Southport, NC",
    initial: "J",
  },
  {
    quote:
      "The captain gave our family time to speak, pray, and remember. It was intimate and meaningful, and we felt supported the entire trip.",
    name: "Shelia C.",
    location: "Kure Beach, NC",
    initial: "S",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #071020 60%, #0a1628 100%)",
        }}
      />

      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "25vw",
            fontWeight: 300,
            color: "#4ecdc4",
            whiteSpace: "nowrap",
          }}
        >
          Farewell
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Families We've Served
          </span>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
            className="text-pearl mb-6"
          >
            Words from
            <br />
            <em className="text-seafoam">Those Who Know</em>
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 group hover:border-seafoam/25 transition-all duration-500"
            >
              {/* Quote mark */}
              <div
                className="text-seafoam/20 mb-4 leading-none"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "5rem",
                  lineHeight: 0.8,
                }}
                aria-hidden
              >
                "
              </div>

              <blockquote
                className="text-pearl leading-relaxed mb-8"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 400,
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                }}
              >
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-ocean-deep font-medium text-sm flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #4ecdc4, #1a4a7a)",
                    fontFamily: "Jost, sans-serif",
                  }}
                >
                  {t.initial}
                </div>

                <div>
                  <div
                    className="text-pearl text-sm font-medium"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-mist/40 text-xs tracking-wider"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {t.location}
                  </div>
                </div>

                {/* Stars */}
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1 L7.5 4.5 L11 5 L8.5 7.5 L9 11 L6 9.5 L3 11 L3.5 7.5 L1 5 L4.5 4.5 Z"
                        fill="#c9a96e"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
