"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; color: string;
    }[] = [];

    const colors = ["rgba(78,205,196,", "rgba(168,197,218,", "rgba(201,169,110,"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });

      // Draw subtle connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(78,205,196,${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Deep ocean gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(26,74,122,0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(13,40,71,0.6) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, rgba(10,22,40,0.8) 0%, transparent 60%),
            linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)
          `,
        }}
      />

      {/* Floating orbs */}
      <div
        className="orb absolute w-96 h-96 opacity-20"
        style={{
          background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)",
          top: "10%",
          left: "5%",
          animationDuration: "18s",
        }}
      />
      <div
        className="orb absolute w-64 h-64 opacity-10"
        style={{
          background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
          top: "60%",
          right: "10%",
          animationDuration: "24s",
          animationDelay: "6s",
        }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="animate-fade-up mb-4"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span
            className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase border border-seafoam/30 rounded-full px-6 py-2"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            North Carolina Ash Scattering Services
          </span>
        </div>

        <h1
          className="animate-fade-up mb-6"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            animationDelay: "0.3s",
            opacity: 0,
          }}
        >
          <span className="shimmer-text">A Final</span>
          <br />
          <span className="text-pearl">Journey</span>
          <br />
          <span className="text-mist" style={{ fontStyle: "italic", fontWeight: 300 }}>Across the</span>
          <span className="shimmer-text"> Sea</span>
        </h1>

        <p
          className="animate-fade-up text-mist/80 mb-10 max-w-xl mx-auto leading-relaxed"
          style={{
            fontFamily: "Jost, sans-serif",
            fontWeight: 300,
            fontSize: "1.1rem",
            animationDelay: "0.5s",
            opacity: 0,
          }}
        >
          Attended and unattended sea scattering ceremonies from Carolina Beach,
          with compassionate guidance, EPA-compliant filing, and complete
          documentation for your family.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <a
            href="#services"
            className="btn-ocean px-10 py-4 rounded-full bg-seafoam text-ocean-deep font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-lg hover:shadow-seafoam/20 hover:scale-105"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            View Services
          </a>
          <a
            href="#contact"
            className="btn-ocean px-10 py-4 rounded-full border border-pearl/20 text-pearl tracking-widest uppercase text-sm transition-all duration-300 hover:border-pearl/50 hover:bg-pearl/5"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Arrange Online
          </a>
        </div>
      </div>

      {/* Ocean wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wave-svg w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 180V90C120 50 240 20 360 40C480 60 600 110 720 100C840 90 960 30 1080 20C1200 10 1320 50 1440 70V180H0Z"
            fill="rgba(13,40,71,0.6)"
          />
          <path
            d="M0 180V120C150 80 300 40 450 60C600 80 750 130 900 120C1050 110 1200 60 1350 50C1380 48 1410 50 1440 55V180H0Z"
            fill="rgba(10,22,40,0.8)"
          />
        </svg>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div
            className="text-mist/40 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Scroll
          </div>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(168,197,218,0.3)" strokeWidth="1"/>
            <circle cx="8" cy="7" r="2" fill="rgba(78,205,196,0.6)">
              <animate attributeName="cy" values="7;15;7" dur="1.8s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.8s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
}
