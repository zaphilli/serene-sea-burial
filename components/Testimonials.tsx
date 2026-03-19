const reviews = [
  {
    quote:
      "It was genuinely a celebration of my grandmother's life, and I couldn't have imagined it any other way. Captain Tony and his mate were not only exceptionally kind but also recorded the ceremony, a precious memento our entire family will treasure. Thank you!",
    name: "Karl S.",
    location: "Raleigh, NC",
    initial: "K",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "I've organized funerals and cremations for loved ones before, but none have been as straightforward and serene as this entire process. The beautiful sunset added to the peacefulness, making it a day we'll cherish forever.",
    name: "Genia A.",
    location: "Fayetteville, NC",
    initial: "G",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "The celebration of my mother's life was truly beautiful. The preparation, the ceremony, and the subsequent follow-up were exceptional in every way. Captain Tony, thank you for conducting the ceremony with such dignity and respect. I highly recommend Serene Sea Burials to anyone in need of these services.",
    name: "John K.",
    location: "Southport, NC",
    initial: "J",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Captain Tony and his team ensured our experience was both stress-free and exceptionally memorable! Saying goodbye to a loved one is never easy, but this unique experience made our celebration of their life truly special and serene.",
    name: "Henry C.",
    location: "Charleston, SC",
    initial: "H",
    rating: 5,
    source: "Google",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1.5L8.7 5.1L12.5 5.6L9.75 8.3L10.4 12.1L7 10.3L3.6 12.1L4.25 8.3L1.5 5.6L5.3 5.1Z"
            fill="#FBBC04"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #071020 60%, #0a1628 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span
            className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Families We&apos;ve Served
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.1,
            }}
            className="text-pearl mb-4"
          >
            Words from Those
            <br />
            <em className="text-seafoam">Who Know</em>
          </h2>
          {/* Google rating badge */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC04" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex items-center gap-2">
              <span
                className="text-pearl text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                5.0
              </span>
              <StarRating count={5} />
              <span
                className="text-mist/40 text-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                on Google
              </span>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 lg:p-10 transition-all duration-500"
            >
              {/* Stars */}
              <div className="mb-5">
                <StarRating count={r.rating} />
              </div>

              <blockquote
                className="text-pearl/90 leading-relaxed mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  fontStyle: "normal",
                }}
              >
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-ocean-deep font-medium text-sm flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #4ecdc4, #1a4a7a)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {r.initial}
                </div>

                <div>
                  <div
                    className="text-pearl text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {r.name}
                  </div>
                  <div
                    className="text-mist/40 text-xs tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {r.location}
                  </div>
                </div>

                {/* Google badge */}
                <div className="ml-auto flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-50"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC04" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span
                    className="text-mist/30 text-[10px] tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Google
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
