"use client";

import { useState } from "react";
import Link from "next/link";
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

const addOns = [
  { id: "extraFlowers", label: "Extra Flowers (2 Dozen Roses)", price: 50 },
  { id: "wreath", label: "Biodegradable Wreath", price: 150 },
  { id: "microVideo", label: "Micro Video Service (60–90 sec)", price: 275 },
  { id: "urn", label: "Biodegradable Urn with Bamboo Case", price: 175 },
  { id: "additionalAshes", label: "Additional Ashes (per individual)", price: 100 },
  { id: "framedCert", label: "Framed Certificate (hard copy)", price: 75 },
  { id: "expedited", label: "Expedited / Specific Date Service", price: 275 },
];

const BASE_PRICE = 400;

export default function OrderPage() {
  const [form, setForm] = useState({
    deceasedName: "",
    beneficiaryName: "",
    contactName: "",
    email: "",
    phone: "",
    shippingPreference: "",
    pickupAddress: "",
  });
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const total =
    BASE_PRICE +
    addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(false);
    const selectedAddOnLabels = addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .map((a) => `${a.label} (+$${a.price})`)
      .join(", ");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.contactName,
          email: form.email,
          phone: form.phone,
          service: "Order Form — Unattended Sea Scattering",
          message: `Order for: ${form.deceasedName}\nBeneficiary: ${form.beneficiaryName}\nShipping: ${form.shippingPreference}\nPickup Address: ${form.pickupAddress || "N/A"}\nAdd-ons: ${selectedAddOnLabels || "None"}\nEstimated Total: $${total}`,
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
        title="Arrange a Service"
        subtitle="When you're ready, we'll walk you through every step with care and compassion."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
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
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {submitted ? (
            <div className="glass rounded-2xl p-12 border border-white/[0.04] text-center max-w-2xl mx-auto">
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
                Order Received
              </h2>
              <p
                className="text-mist/55 text-sm mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Thank you for your order. We&apos;ll be in touch within 24 hours to
                confirm the details and arrange next steps.
              </p>
              <p
                className="text-mist/40 text-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Please also complete the{" "}
                <Link
                  href="/authorization-form"
                  className="text-seafoam/70 hover:text-seafoam transition-colors"
                >
                  Authorization Form
                </Link>{" "}
                if you haven&apos;t already.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2 glass rounded-2xl p-8 md:p-10 border border-white/[0.04]">
                <h3
                  className="text-pearl mb-8"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.25rem",
                  }}
                >
                  Service Details
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-10">
                  {[
                    { id: "deceasedName", label: "Name of Deceased" },
                    { id: "beneficiaryName", label: "Beneficiary Name" },
                    { id: "contactName", label: "Your Full Name" },
                    { id: "email", label: "Email Address" },
                    { id: "phone", label: "Phone Number" },
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

                  {/* Shipping preference */}
                  <div className="relative md:col-span-2">
                    <label
                      htmlFor="shippingPreference"
                      className="text-mist/45 text-[10px] tracking-[0.15em] uppercase block mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      How will remains be delivered?
                    </label>
                    <select
                      id="shippingPreference"
                      name="shippingPreference"
                      value={form.shippingPreference}
                      onChange={handleChange}
                      className="w-full bg-transparent text-pearl text-sm pb-3 border-b border-mist/15 outline-none focus:border-seafoam/40 transition-colors duration-300 appearance-none"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <option value="" className="bg-[#0d2847]">
                        Select an option
                      </option>
                      <option value="ship" className="bg-[#0d2847]">
                        I will ship via USPS
                      </option>
                      <option value="dropoff" className="bg-[#0d2847]">
                        I will drop off in person
                      </option>
                      <option value="pickup" className="bg-[#0d2847]">
                        Please arrange pickup
                      </option>
                    </select>
                  </div>

                  {form.shippingPreference === "pickup" && (
                    <div className="md:col-span-2">
                      <FloatingField
                        id="pickupAddress"
                        label="Pickup Address"
                        focused={focused}
                        active={
                          focused === "pickupAddress" ||
                          form.pickupAddress !== ""
                        }
                      >
                        <input
                          id="pickupAddress"
                          name="pickupAddress"
                          value={form.pickupAddress}
                          onChange={handleChange}
                          onFocus={() => setFocused("pickupAddress")}
                          onBlur={() => setFocused(null)}
                          className={inputClass}
                          style={{ fontFamily: "var(--font-body)" }}
                        />
                      </FloatingField>
                    </div>
                  )}
                </div>

                {/* Add-ons */}
                <h3
                  className="text-pearl mb-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.25rem",
                  }}
                >
                  Customize Your Service
                </h3>
                <div className="space-y-3 mb-10">
                  {addOns.map((addon) => (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon.id)}
                      className="flex items-center justify-between w-full py-3 px-4 rounded-xl border transition-all duration-300 text-left group"
                      style={{
                        borderColor: selectedAddOns.includes(addon.id)
                          ? "rgba(78,205,196,0.3)"
                          : "rgba(255,255,255,0.04)",
                        background: selectedAddOns.includes(addon.id)
                          ? "rgba(78,205,196,0.05)"
                          : "transparent",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all duration-300 ${
                            selectedAddOns.includes(addon.id)
                              ? "bg-seafoam/20 border-seafoam/50"
                              : "border-mist/20 group-hover:border-mist/40"
                          }`}
                        >
                          {selectedAddOns.includes(addon.id) && (
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
                          className="text-mist/60 text-sm"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 400,
                          }}
                        >
                          {addon.label}
                        </span>
                      </div>
                      <span
                        className="text-seafoam/60 text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        +${addon.price}
                      </span>
                    </button>
                  ))}
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
                  disabled={submitting}
                  className="w-full py-4 rounded-full tracking-widest uppercase text-xs font-medium transition-all duration-300 hover:shadow-lg hover:shadow-seafoam/20"
                  style={{
                    fontFamily: "var(--font-body)",
                    background:
                      "linear-gradient(135deg, rgba(78,205,196,0.95) 0%, rgba(78,205,196,0.8) 100%)",
                    color: "#0a1628",
                  }}
                >
                  {submitting ? "Sending..." : "Submit Request"}
                </button>
              </div>

              {/* Summary sidebar */}
              <div className="lg:col-span-1">
                <div className="glass rounded-2xl p-8 border border-white/[0.04] sticky top-28">
                  <h3
                    className="text-pearl mb-6"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "1.15rem",
                    }}
                  >
                    Order Summary
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span
                        className="text-mist/55"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 400,
                        }}
                      >
                        Unattended Sea Scattering
                      </span>
                      <span className="text-pearl/80">${BASE_PRICE}</span>
                    </div>
                    {addOns
                      .filter((a) => selectedAddOns.includes(a.id))
                      .map((a) => (
                        <div key={a.id} className="flex justify-between text-sm">
                          <span
                            className="text-mist/45"
                            style={{
                              fontFamily: "var(--font-body)",
                              fontWeight: 400,
                            }}
                          >
                            {a.label}
                          </span>
                          <span className="text-pearl/60">+${a.price}</span>
                        </div>
                      ))}
                  </div>

                  <div className="divider-gold mb-4" />

                  <div className="flex justify-between items-baseline">
                    <span
                      className="text-mist/50 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Estimated Total
                    </span>
                    <span
                      className="text-pearl text-xl"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                      }}
                    >
                      ${total}
                    </span>
                  </div>

                  <p
                    className="text-mist/30 text-xs mt-4 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Price includes 20% gratuity for your captain and crew.
                  </p>

                  <div className="divider-gold my-6" />

                  <h4
                    className="text-pearl/80 text-sm mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Basket ceremony 3+ miles offshore",
                      "EPA paperwork filed (40 CFR 229.1)",
                      "USCG Certified Captain",
                      "Certificate of Sea Burial (PDF)",
                      "GPS coordinates of scattering site",
                      "Two digital proof-of-service photos",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-mist/45 text-xs"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 400,
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#4ecdc4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-shrink-0 mt-0.5"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Additional Info */}
          {!submitted && (
            <div className="mt-8 text-center">
              <p
                className="text-mist/35 text-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                You will also need to complete the{" "}
                <Link
                  href="/authorization-form"
                  className="text-seafoam/60 hover:text-seafoam transition-colors"
                >
                  Authorization Form
                </Link>{" "}
                before your service can be scheduled. View our{" "}
                <Link
                  href="/shipping-instructions"
                  className="text-seafoam/60 hover:text-seafoam transition-colors"
                >
                  Shipping Instructions
                </Link>{" "}
                for details on sending remains.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
