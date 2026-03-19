"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

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

const declarations = [
  "I declare that I have legal right and authority to authorize the disposition of the cremated remains described above.",
  "I understand that once the cremated remains are scattered at sea, they are unrecoverable.",
  "I authorize the release of the cremated remains to Serene Sea Burials, LLC for the purpose of sea scattering services.",
  "Unless otherwise stated, I authorize Serene Sea Burials, LLC to dispose of the container after the ceremony.",
  "I agree to release Serene Sea Burials, LLC of all legal action in the event the ashes are lost or damaged during shipping.",
];

export default function AuthorizationFormPage() {
  const [form, setForm] = useState({
    deceasedName: "",
    funeralHome: "",
    firstName: "",
    lastName: "",
    relationship: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    signature: "",
  });
  const [checks, setChecks] = useState<boolean[]>(
    new Array(declarations.length).fill(false)
  );
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleCheck = (i: number) => {
    setChecks((prev) => prev.map((c, j) => (j === i ? !c : c)));
  };

  const allChecked = checks.every(Boolean);
  const allFilled = Object.values(form).every((v) => v.trim() !== "");
  const canSubmit = allChecked && allFilled;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          service: "Authorization Form",
          message: `Authorization for ${form.deceasedName}\nFuneral Home: ${form.funeralHome}\nRelationship: ${form.relationship}\nAddress: ${form.streetAddress}, ${form.city}, ${form.state}\nDigital Signature: ${form.signature}\nAll declarations acknowledged.`,
        }),
      });
      if (res.ok) setSubmitted(true);
      else setSubmitError(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent text-pearl text-sm pt-5 pb-3 border-b border-mist/15 outline-none focus:border-seafoam/40 transition-colors duration-300";

  return (
    <main>
      <Navbar />
      <PageHero
        title="Authorization Form"
        subtitle="Grant permission for Serene Sea Burials to perform ash scattering services on your behalf."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Order", href: "/order" },
        ]}
      />

      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="glass rounded-2xl p-12 border border-white/[0.04] text-center">
              <div className="w-16 h-16 rounded-full bg-seafoam/10 border border-seafoam/30 flex items-center justify-center mx-auto mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ecdc4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2
                className="text-pearl mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "1.8rem",
                }}
              >
                Authorization Received
              </h2>
              <p
                className="text-mist/55 text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Thank you. We have received your authorization form and will
                be in touch shortly to confirm next steps.
              </p>
            </div>
          ) : (
            <div className="glass rounded-2xl p-8 md:p-12 border border-white/[0.04]">
              {/* Decedent Info */}
              <h3
                className="text-pearl mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.15rem",
                }}
              >
                Decedent Information
              </h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-10">
                {[
                  { id: "deceasedName", label: "Name of Deceased" },
                  { id: "funeralHome", label: "Funeral Home / Crematory" },
                ].map((field) => (
                  <FloatingField
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    focused={focused}
                    active={
                      focused === field.id ||
                      form[field.id as keyof typeof form] !== ""
                    }
                  >
                    <input
                      id={field.id}
                      name={field.id}
                      value={form[field.id as keyof typeof form]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </FloatingField>
                ))}
              </div>

              {/* Authorized Representative */}
              <h3
                className="text-pearl mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.15rem",
                }}
              >
                Authorized Representative
              </h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-10">
                {[
                  { id: "firstName", label: "First Name" },
                  { id: "lastName", label: "Last Name" },
                  { id: "relationship", label: "Relationship to Deceased" },
                  { id: "email", label: "Email Address" },
                  { id: "phone", label: "Phone Number" },
                  { id: "streetAddress", label: "Street Address" },
                  { id: "city", label: "City" },
                  { id: "state", label: "State" },
                ].map((field) => (
                  <FloatingField
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    focused={focused}
                    active={
                      focused === field.id ||
                      form[field.id as keyof typeof form] !== ""
                    }
                  >
                    <input
                      id={field.id}
                      name={field.id}
                      value={form[field.id as keyof typeof form]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </FloatingField>
                ))}
              </div>

              {/* Declarations */}
              <h3
                className="text-pearl mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.15rem",
                }}
              >
                Acknowledgements
              </h3>
              <div className="space-y-4 mb-10">
                {declarations.map((text, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleCheck(i)}
                    className="flex items-start gap-4 text-left w-full group"
                  >
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded border mt-0.5 flex items-center justify-center transition-all duration-300 ${
                        checks[i]
                          ? "bg-seafoam/20 border-seafoam/50"
                          : "border-mist/20 group-hover:border-mist/40"
                      }`}
                    >
                      {checks[i] && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#4ecdc4"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </span>
                    <span
                      className="text-mist/50 text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                      }}
                    >
                      {text}
                    </span>
                  </button>
                ))}
              </div>

              {/* Signature */}
              <h3
                className="text-pearl mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.15rem",
                }}
              >
                Digital Signature
              </h3>
              <div className="mb-10">
                <FloatingField
                  id="signature"
                  label="Type your full legal name"
                  focused={focused}
                  active={focused === "signature" || form.signature !== ""}
                >
                  <input
                    id="signature"
                    name="signature"
                    value={form.signature}
                    onChange={handleChange}
                    onFocus={() => setFocused("signature")}
                    onBlur={() => setFocused(null)}
                    className={inputClass}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    }}
                  />
                </FloatingField>
                <p
                  className="text-mist/30 text-xs mt-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  By typing your name, you are providing a digital signature
                  acknowledging the above declarations.
                </p>
              </div>

              {submitError && (
                <p
                  className="text-red-400/80 text-sm mb-4 text-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={!canSubmit || submitting}
                className="w-full py-4 rounded-full tracking-widest uppercase text-xs font-medium transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "var(--font-body)",
                  background: canSubmit
                    ? "linear-gradient(135deg, rgba(78,205,196,0.95) 0%, rgba(78,205,196,0.8) 100%)"
                    : "rgba(78,205,196,0.15)",
                  color: canSubmit ? "#0a1628" : "#4ecdc4",
                }}
              >
                {submitting ? "Sending..." : "Submit Authorization"}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
