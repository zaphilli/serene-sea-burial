"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type DropdownItem = { label: string; href: string; desc?: string };

const navItems: {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}[] = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Services", href: "/services", desc: "Overview of everything we offer" },
      { label: "Unattended Scattering", href: "/services/unattended-ash-scattering", desc: "Captain-led ceremony starting at $400" },
      { label: "Attended Ceremony", href: "/services/attended-ceremony", desc: "Private on-board service for up to 6 guests" },
      { label: "Shipping Kit", href: "/services/shipping-kit", desc: "Free USPS Priority Mail Express kit" },
      { label: "Preplanning", href: "/services/preplanning", desc: "Plan ahead with clear pricing" },
    ],
  },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Our Story", href: "/about", desc: "Mission, values, and our crew" },
      { label: "EPA Compliance", href: "/epa-compliance", desc: "Federal regulations we follow" },
      { label: "Service Areas", href: "/service-areas", desc: "Where we operate from" },
    ],
  },
  {
    label: "Resources",
    href: "/faq",
    dropdown: [
      { label: "FAQ", href: "/faq", desc: "Common questions answered" },
      { label: "Grief & Guidance", href: "/grief-and-guidance", desc: "Support for families in mourning" },
      { label: "Shipping Instructions", href: "/shipping-instructions", desc: "How to send remains to us" },
      { label: "Blog", href: "/blog", desc: "Articles and insights" },
    ],
  },
];

function NavDropdown({
  items,
  open,
}: {
  items: DropdownItem[];
  open: boolean;
}) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div
        className="glass rounded-xl border border-white/[0.06] shadow-xl shadow-black/30 py-2 min-w-[280px]"
      >
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block px-5 py-3 hover:bg-white/[0.04] transition-colors duration-200 group"
          >
            <span
              className="block text-pearl/90 text-sm group-hover:text-seafoam transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {item.label}
            </span>
            {item.desc && (
              <span
                className="block text-mist/35 text-xs mt-0.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.desc}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Serene Sea Burials"
            width={120}
            height={86}
            className={`object-contain w-auto transition-all duration-500 group-hover:opacity-80 brightness-[1.4] drop-shadow-[0_1px_12px_rgba(255,255,255,0.55)] ${
              scrolled ? "h-11" : "h-16"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav — left side after logo */}
        <div className="hidden md:flex items-center gap-8 ml-10">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                style={{ fontFamily: "var(--font-body)" }}
                className={`text-sm tracking-widest uppercase whitespace-nowrap transition-colors duration-300 flex items-center gap-1.5 ${
                  openDropdown === item.label
                    ? "text-seafoam"
                    : "text-mist hover:text-seafoam"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M2.5 4L5 6.5L7.5 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
              {item.dropdown && (
                <NavDropdown
                  items={item.dropdown}
                  open={openDropdown === item.label}
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA — far right */}
        <div className="hidden md:block ml-auto">
          <Link
            href="/contact"
            className="btn-ocean px-6 py-2.5 rounded-full border border-seafoam/40 text-seafoam text-sm tracking-widest uppercase hover:border-seafoam hover:bg-seafoam/10 transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-pearl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "var(--font-body)" }}
                className="block text-sm tracking-widest uppercase text-pearl/80 py-2"
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pl-4 pb-2 space-y-1">
                  {item.dropdown.map((sub, j) => (
                    <Link
                      key={j}
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      style={{ fontFamily: "var(--font-body)" }}
                      className="block text-xs tracking-wider text-mist/50 hover:text-seafoam py-1.5 transition-colors duration-200"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-sm tracking-widest uppercase text-seafoam border border-seafoam/40 rounded-full px-5 py-2 text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
