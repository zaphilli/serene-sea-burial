import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Wave top */}
      <div className="wave-container">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full wave-svg-2"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0V40C180 80 360 100 540 80C720 60 900 10 1080 30C1260 50 1350 90 1440 80V0H0Z"
            fill="#071020"
          />
        </svg>
      </div>

      <div
        className="relative"
        style={{
          background: "linear-gradient(180deg, #071020 0%, #040c18 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <circle
                    cx="18"
                    cy="18"
                    r="17"
                    stroke="rgba(78,205,196,0.4)"
                    strokeWidth="1"
                  />
                  <path
                    d="M4 22 Q9 14 18 18 Q27 22 32 14"
                    stroke="#4ecdc4"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 12 L18 6 L22 12"
                    stroke="#c9a96e"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="18"
                    y1="6"
                    x2="18"
                    y2="22"
                    stroke="#c9a96e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                  }}
                  className="text-pearl"
                >
                  Serene Sea Burials
                </span>
              </div>
              <p
                className="text-mist/50 text-sm leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Compassionate sea scattering services from Carolina Beach,
                North Carolina. Attended and unattended options with full
                documentation support.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-mist/40 hover:text-seafoam hover:border-seafoam/30 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-mist/40 hover:text-seafoam hover:border-seafoam/30 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services links */}
            <div>
              <h4
                className="text-mist/40 text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Unattended Scattering", href: "/services/unattended-ash-scattering" },
                  { label: "Attended Ceremony", href: "/services/attended-ceremony" },
                  { label: "Shipping Kit", href: "/services/shipping-kit" },
                  { label: "Preplanning", href: "/services/preplanning" },
                  { label: "All Services", href: "/services" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-mist/60 text-sm hover:text-seafoam transition-colors duration-300 hover-underline"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4
                className="text-mist/40 text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Blog", href: "/blog" },
                  { label: "Service Areas", href: "/service-areas" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-mist/60 text-sm hover:text-seafoam transition-colors duration-300 hover-underline"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="divider-gold mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-mist/30 text-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © {new Date().getFullYear()} Serene Sea Burials. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-mist/30 text-xs hover:text-mist/60 transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-mist/30 text-xs hover:text-mist/60 transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Terms of Service
              </Link>
              <Link
                href="/admin"
                className="text-mist/20 text-xs hover:text-mist/50 transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
