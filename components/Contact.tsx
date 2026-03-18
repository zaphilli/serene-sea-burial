"use client";

import { useState } from "react";

function FloatingField({
  id,
  label,
  focused,
  active,
  children,
}: {
  id: string;
  label: string;
  focused: string | null;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      <label
        htmlFor={id}
        className="absolute left-0 pointer-events-none transition-all duration-300"
        style={{
          fontFamily: "var(--font-body)",
          top: active ? "0px" : "20px",
          fontSize: active ? "10px" : "13px",
          letterSpacing: active ? "0.15em" : "0.05em",
          textTransform: "uppercase",
          color: focused === id ? "#4ecdc4" : "rgba(168,197,218,0.45)",
        }}
      >
        {label}
      </label>
      <div
        className="absolute bottom-0 left-0 h-px transition-all duration-500"
        style={{
          width: focused === id ? "100%" : "0%",
          background: "linear-gradient(90deg, #4ecdc4, #c9a96e)",
        }}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const services = [
    { value: "attended", label: "Attended Ceremony" },
    { value: "unattended", label: "Unattended Burial" },
    { value: "shipping", label: "Shipping Kit" },
    { value: "preplan", label: "Preplanning" },
    { value: "other", label: "Not Sure Yet" },
  ];

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #071020 60%, #0a1628 100%)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #4ecdc4 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Info */}
          <div>
            <span
              className="inline-block text-seafoam text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Reach Out
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
              className="text-pearl mb-8"
            >
              We&apos;re Here
              <br />
              <em className="text-seafoam">Whenever You</em>
              <br />
              Are Ready
            </h2>

            <p
              className="text-mist/70 leading-relaxed mb-12 max-w-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Ask questions, request a shipping kit, or arrange a ceremony.
              We keep the process clear, respectful, and easy to navigate for
              every family.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M3 5 Q3 3 5 3 L7.5 3 L9 7 L7 9 Q8.5 12.5 11 15 L13 13 L17 14.5 L17 17 Q17 19 15 19 C8 19 1 12 1 5 Z"
                        stroke="#4ecdc4"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "(910) 444-7148",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#4ecdc4" strokeWidth="1.5" />
                      <path d="M2 7 L10 12 L18 7" stroke="#4ecdc4" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@sereneseaburials.com",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2 C6.5 2 4 5 4 8 C4 13 10 18 10 18 C10 18 16 13 16 8 C16 5 13.5 2 10 2 Z"
                        stroke="#4ecdc4"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="10" cy="8" r="2.5" stroke="#4ecdc4" strokeWidth="1" />
                    </svg>
                  ),
                  label: "Office",
                  value: "220 Annie Dr, Carolina Beach, NC 28428",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7" stroke="#4ecdc4" strokeWidth="1.5" />
                      <path d="M10 6 V10 L13 12" stroke="#4ecdc4" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                  label: "Hours",
                  value: "Mon–Fri, 9:00 AM – 5:00 PM",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-mist/40 text-xs tracking-widest uppercase mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-pearl text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
            style={{
              background: "rgba(13, 40, 71, 0.35)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(168, 197, 218, 0.1)",
            }}
          >
            {/* Gradient top accent */}
            <div
              className="absolute top-0 left-8 right-8 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #c9a96e 30%, #4ecdc4 70%, transparent)",
              }}
            />

            {submitted ? (
              <div className="text-center py-16 px-4">
                <div className="relative w-20 h-20 mx-auto mb-8">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(78,205,196,0.12) 0%, transparent 70%)",
                      border: "1px solid rgba(78,205,196,0.25)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <path
                        d="M5 17 C7 15 10 19 13 17 C16 15 18 19 21 17 C24 15 27 19 29 17"
                        stroke="#4ecdc4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5 22 C7 20 10 24 13 22 C16 20 18 24 21 22 C24 20 27 24 29 22"
                        stroke="#c9a96e"
                        strokeWidth="1"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.2rem",
                    fontWeight: 400,
                  }}
                  className="text-pearl mb-4"
                >
                  Message Received
                </h3>
                <div className="divider-gold w-20 mx-auto mb-6" />
                <p
                  className="text-mist/60 text-sm leading-relaxed max-w-xs mx-auto"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  A member of our team will be in touch shortly. We are here for you.
                </p>
              </div>
            ) : (
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.9rem",
                    fontWeight: 400,
                  }}
                  className="text-pearl mb-1"
                >
                  Send Us a Message
                </h3>
                <p
                  className="text-mist/35 text-xs mb-9"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  All inquiries are kept strictly confidential.
                </p>

                <div className="space-y-8">
                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    <FloatingField id="name" label="Full Name" focused={focused} active={focused === "name" || form.name !== ""}>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        placeholder=" "
                        className="w-full bg-transparent pt-5 pb-2 text-pearl text-sm outline-none border-b transition-colors duration-300"
                        style={{
                          ...inputStyle,
                          borderColor:
                            focused === "name"
                              ? "rgba(78,205,196,0.4)"
                              : "rgba(168,197,218,0.15)",
                        }}
                        suppressHydrationWarning
                      />
                    </FloatingField>

                    <FloatingField id="phone" label="Phone" focused={focused} active={focused === "phone" || form.phone !== ""}>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        placeholder=" "
                        className="w-full bg-transparent pt-5 pb-2 text-pearl text-sm outline-none border-b transition-colors duration-300"
                        style={{
                          ...inputStyle,
                          borderColor:
                            focused === "phone"
                              ? "rgba(78,205,196,0.4)"
                              : "rgba(168,197,218,0.15)",
                        }}
                        suppressHydrationWarning
                      />
                    </FloatingField>
                  </div>

                  {/* Email */}
                  <FloatingField id="email" label="Email Address" focused={focused} active={focused === "email" || form.email !== ""}>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder=" "
                      className="w-full bg-transparent pt-5 pb-2 text-pearl text-sm outline-none border-b transition-colors duration-300"
                      style={{
                        ...inputStyle,
                        borderColor:
                          focused === "email"
                            ? "rgba(78,205,196,0.4)"
                            : "rgba(168,197,218,0.15)",
                      }}
                      suppressHydrationWarning
                    />
                  </FloatingField>

                  {/* Service pill selector */}
                  <div>
                    <div
                      className="text-xs tracking-widest uppercase mb-3"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "rgba(168,197,218,0.45)",
                      }}
                    >
                      Service of Interest
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() =>
                            setForm((prev) => ({ ...prev, service: s.value }))
                          }
                          className="px-4 py-2 rounded-full text-xs transition-all duration-300"
                          style={{
                            fontFamily: "var(--font-body)",
                            letterSpacing: "0.06em",
                            background:
                              form.service === s.value
                                ? "rgba(78,205,196,0.12)"
                                : "rgba(168,197,218,0.04)",
                            border:
                              form.service === s.value
                                ? "1px solid rgba(78,205,196,0.45)"
                                : "1px solid rgba(168,197,218,0.12)",
                            color:
                              form.service === s.value
                                ? "#4ecdc4"
                                : "rgba(168,197,218,0.45)",
                          }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <FloatingField id="message" label="Your Message" focused={focused} active={focused === "message" || form.message !== ""}>
                    <textarea
                      name="message"
                      id="message"
                      autoComplete="off"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      rows={4}
                      placeholder=" "
                      className="w-full bg-transparent pt-5 pb-2 text-pearl text-sm outline-none border-b resize-none transition-colors duration-300"
                      style={{
                        ...inputStyle,
                        borderColor:
                          focused === "message"
                            ? "rgba(78,205,196,0.4)"
                            : "rgba(168,197,218,0.15)",
                      }}
                      suppressHydrationWarning
                    />
                  </FloatingField>

                  {/* Submit */}
                  {submitError && (
                    <p
                      className="text-xs text-center px-4 py-2 rounded-xl"
                      style={{
                        fontFamily: "var(--font-body)",
                        background: "rgba(255,80,80,0.08)",
                        border: "1px solid rgba(255,80,80,0.2)",
                        color: "rgba(255,150,150,0.9)",
                      }}
                    >
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="btn-ocean group w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] mt-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "#071020",
                      background: "linear-gradient(135deg, rgba(78,205,196,0.92) 0%, rgba(78,205,196,0.78) 100%)",
                      border: "1px solid rgba(78,205,196,0.35)",
                      boxShadow: "0 8px 32px rgba(78,205,196,0.12)",
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? "Sending…" : "Send Message"}
                    {!submitting && (
                      <svg
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        width="15" height="15" viewBox="0 0 15 15" fill="none"
                      >
                        <path
                          d="M2.5 7.5 H12.5 M9 3.5 L13 7.5 L9 11.5"
                          stroke="#071020" strokeWidth="1.4"
                          strokeLinecap="round" strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>

                  <p
                    className="text-mist/25 text-xs text-center"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    We respond as soon as possible during business hours.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
