"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Our Process" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Serene Sea Burials"
            width={120}
            height={86}
            className="object-contain transition-opacity duration-300 group-hover:opacity-80"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontFamily: "Jost, sans-serif" }}
              className="text-sm tracking-widest uppercase text-mist hover:text-seafoam transition-colors duration-300 hover-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-ocean px-6 py-2.5 rounded-full border border-seafoam/40 text-seafoam text-sm tracking-widest uppercase hover:border-seafoam hover:bg-seafoam/10 transition-all duration-300"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-pearl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden glass transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "Jost, sans-serif" }}
              className="text-sm tracking-widest uppercase text-mist hover:text-seafoam transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-widest uppercase text-seafoam border border-seafoam/40 rounded-full px-5 py-2 text-center"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
