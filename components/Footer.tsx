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
          background:
            "linear-gradient(180deg, #071020 0%, #040c18 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="17" stroke="rgba(78,205,196,0.4)" strokeWidth="1"/>
                  <path d="M4 22 Q9 14 18 18 Q27 22 32 14" stroke="#4ecdc4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M14 12 L18 6 L22 12" stroke="#c9a96e" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="18" y1="6" x2="18" y2="22" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 600, fontSize: "1.2rem" }} className="text-pearl">
                  Serene Sea Burials
                </span>
              </div>
              <p
                className="text-mist/50 text-sm leading-relaxed max-w-xs"
                style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
              >
                Compassionate sea scattering services from Carolina Beach,
                North Carolina. Attended and unattended options with full
                documentation support.
              </p>

              <div className="mt-8 flex gap-4">
                {["Facebook", "Instagram"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-9 h-9 glass rounded-full flex items-center justify-center text-mist/40 hover:text-seafoam hover:border-seafoam/30 transition-all duration-300"
                    aria-label={platform}
                    style={{ fontFamily: "Jost, sans-serif", fontSize: "0.6rem", letterSpacing: "0.05em" }}
                  >
                    {platform.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4
                className="text-mist/40 text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Attended Ash Scattering",
                  "Unattended Sea Burial",
                  "Flower Basket Ceremony",
                  "Shipping Kit Options",
                  "Preplanning Support",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-mist/60 text-sm hover:text-seafoam transition-colors duration-300 hover-underline"
                      style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-mist/40 text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {["About Us", "Our Process", "Testimonials", "FAQ", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/ /g, "").replace("aboutus", "about").replace("ourprocess", "process")}`}
                      className="text-mist/60 text-sm hover:text-seafoam transition-colors duration-300 hover-underline"
                      style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                    >
                      {item}
                    </a>
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
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              © {new Date().getFullYear()} Serene Sea Burials. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "EPA Compliance"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-mist/30 text-xs hover:text-mist/60 transition-colors duration-300"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {link}
                </a>
              ))}
              <Link
                href="/admin"
                className="text-mist/40 text-xs hover:text-mist/70 transition-colors duration-300"
                style={{ fontFamily: "Jost, sans-serif" }}
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
