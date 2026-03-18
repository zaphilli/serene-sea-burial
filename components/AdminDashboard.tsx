"use client";

import { useState } from "react";
import type { Inquiry, InquiryStatus } from "@/lib/inquiries";

const STATUS_LABELS: Record<InquiryStatus, string> = {
  new: "New",
  read: "Read",
  resolved: "Resolved",
};

const STATUS_COLORS: Record<InquiryStatus, { bg: string; text: string; border: string }> = {
  new: { bg: "#e6faf8", text: "#0e7c75", border: "#9de5e0" },
  read: { bg: "#f1f5f9", text: "#475569", border: "#cbd5e1" },
  resolved: { bg: "#fdf6ec", text: "#92620a", border: "#f0c97a" },
};

const SERVICE_LABELS: Record<string, string> = {
  attended: "Attended Ceremony",
  unattended: "Unattended Burial",
  shipping: "Shipping Kit",
  preplan: "Preplanning",
  other: "Other / Not Sure",
  "": "Not specified",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return (
    d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
    " · " +
    d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
  );
}

export default function AdminDashboard({ initial }: { initial: Inquiry[] }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initial);
  const [filter, setFilter] = useState<InquiryStatus | "all">("all");
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const filtered =
    filter === "all" ? inquiries : inquiries.filter((i) => i.status === filter);

  const counts = {
    all: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    read: inquiries.filter((i) => i.status === "read").length,
    resolved: inquiries.filter((i) => i.status === "resolved").length,
  };

  async function setStatus(id: string, status: InquiryStatus) {
    const res = await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      const updated: Inquiry = await res.json();
      setInquiries((prev) => prev.map((i) => (i.id === id ? updated : i)));
      if (selected?.id === id) setSelected(updated);
    }
  }

  async function remove(id: string) {
    setDeleting(id);
    const res = await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
    if (res.ok) {
      setInquiries((prev) => prev.filter((i) => i.id !== id));
      if (selected?.id === id) setSelected(null);
    }
    setDeleting(null);
  }

  function openInquiry(inquiry: Inquiry) {
    setSelected(inquiry);
    if (inquiry.status === "new") setStatus(inquiry.id, "read");
  }

  return (
    <div className="flex h-[calc(100vh-73px)]" style={{ background: "#f8fafc" }}>
      {/* Sidebar */}
      <div
        className="w-80 flex-shrink-0 flex flex-col border-r overflow-y-auto"
        style={{ borderColor: "#e2e8f0", background: "#ffffff" }}
      >
        {/* Filters */}
        <div className="p-4 border-b" style={{ borderColor: "#e2e8f0" }}>
          <div className="flex flex-wrap gap-2">
            {(["all", "new", "read", "resolved"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                style={{
                  fontFamily: "Jost, sans-serif",
                  ...(filter === f
                    ? { background: "#0d2847", color: "#ffffff", border: "1px solid #0d2847" }
                    : { background: "#f1f5f9", color: "#64748b", border: "1px solid #e2e8f0" }),
                }}
              >
                {f === "all" ? "All" : STATUS_LABELS[f]} ({counts[f]})
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="flex-1">
          {filtered.length === 0 && (
            <div
              className="p-8 text-center text-sm"
              style={{ fontFamily: "Jost, sans-serif", color: "#94a3b8" }}
            >
              No inquiries
            </div>
          )}
          {filtered.map((inquiry) => (
            <button
              key={inquiry.id}
              onClick={() => openInquiry(inquiry)}
              className="w-full text-left px-4 py-4 border-b transition-all duration-200"
              style={{
                borderColor: "#f1f5f9",
                background: selected?.id === inquiry.id ? "#f0fffe" : "#ffffff",
                borderLeft: selected?.id === inquiry.id ? "3px solid #4ecdc4" : "3px solid transparent",
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <span
                  className="text-sm font-semibold truncate"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: inquiry.status === "new" ? "#0f172a" : "#475569",
                  }}
                >
                  {inquiry.name}
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 font-medium"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    background: STATUS_COLORS[inquiry.status].bg,
                    color: STATUS_COLORS[inquiry.status].text,
                    border: `1px solid ${STATUS_COLORS[inquiry.status].border}`,
                  }}
                >
                  {STATUS_LABELS[inquiry.status]}
                </span>
              </div>
              <div
                className="text-xs truncate mb-1"
                style={{ fontFamily: "Jost, sans-serif", color: "#64748b" }}
              >
                {SERVICE_LABELS[inquiry.service] ?? inquiry.service}
              </div>
              <div className="flex items-center justify-between gap-2">
                <div
                  className="text-xs"
                  style={{ fontFamily: "Jost, sans-serif", color: "#94a3b8" }}
                >
                  {formatDate(inquiry.createdAt)}
                </div>
                {inquiry.location && (
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{
                      fontFamily: "Jost, sans-serif",
                      background: "#f1f5f9",
                      color: "#64748b",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    📍 {inquiry.location}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <div className="flex-1 overflow-y-auto" style={{ background: "#f8fafc" }}>
        {!selected ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="mb-3" style={{ fontSize: "3rem", color: "#cbd5e1" }}>✦</div>
              <p
                className="text-sm"
                style={{ fontFamily: "Jost, sans-serif", color: "#94a3b8" }}
              >
                Select an inquiry to view details
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <div>
                <h2
                  className="mb-1"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: "#0f172a",
                  }}
                >
                  {selected.name}
                </h2>
                <p
                  className="text-xs"
                  style={{ fontFamily: "Jost, sans-serif", color: "#94a3b8" }}
                >
                  Received {formatDate(selected.createdAt)}
                </p>
              </div>
              <span
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  fontFamily: "Jost, sans-serif",
                  background: STATUS_COLORS[selected.status].bg,
                  color: STATUS_COLORS[selected.status].text,
                  border: `1px solid ${STATUS_COLORS[selected.status].border}`,
                }}
              >
                {STATUS_LABELS[selected.status]}
              </span>
            </div>

            {/* Contact info */}
            <div
              className="grid sm:grid-cols-3 gap-4 mb-8 p-5 rounded-2xl"
              style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}
            >
              {[
                { label: "Email", value: selected.email, href: `mailto:${selected.email}` },
                {
                  label: "Phone",
                  value: selected.phone || "—",
                  href: selected.phone ? `tel:${selected.phone}` : undefined,
                },
                {
                  label: "Service",
                  value: (SERVICE_LABELS[selected.service] ?? selected.service) || "—",
                },
                ...(selected.location ? [{ label: "Location", value: selected.location }] : []),
              ].map((field) => (
                <div key={field.label}>
                  <div
                    className="text-[10px] tracking-widest uppercase mb-1 font-medium"
                    style={{ fontFamily: "Jost, sans-serif", color: "#94a3b8" }}
                  >
                    {field.label}
                  </div>
                  {field.href ? (
                    <a
                      href={field.href}
                      className="text-sm font-medium hover:underline"
                      style={{ fontFamily: "Jost, sans-serif", color: "#0e7c75" }}
                    >
                      {field.value}
                    </a>
                  ) : (
                    <div
                      className="text-sm font-medium"
                      style={{ fontFamily: "Jost, sans-serif", color: "#1e293b" }}
                    >
                      {field.value}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message */}
            {selected.message && (
              <div className="mb-8">
                <div
                  className="text-[10px] tracking-widest uppercase mb-3 font-medium"
                  style={{ fontFamily: "Jost, sans-serif", color: "#94a3b8" }}
                >
                  Message
                </div>
                <div
                  className="p-5 rounded-2xl text-sm leading-relaxed"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#334155",
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {selected.message}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {(["new", "read", "resolved"] as InquiryStatus[])
                .filter((s) => s !== selected.status)
                .map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(selected.id, s)}
                    className="px-4 py-2 rounded-xl text-xs font-medium tracking-wide uppercase transition-all duration-200 hover:opacity-80"
                    style={{
                      fontFamily: "Jost, sans-serif",
                      background: STATUS_COLORS[s].bg,
                      color: STATUS_COLORS[s].text,
                      border: `1px solid ${STATUS_COLORS[s].border}`,
                    }}
                  >
                    Mark {STATUS_LABELS[s]}
                  </button>
                ))}

              <a
                href={`mailto:${selected.email}`}
                className="px-4 py-2 rounded-xl text-xs font-medium tracking-wide uppercase transition-all duration-200 hover:opacity-80"
                style={{
                  fontFamily: "Jost, sans-serif",
                  background: "#0d2847",
                  color: "#ffffff",
                  border: "1px solid #0d2847",
                }}
              >
                Reply via Email
              </a>

              <button
                onClick={() => remove(selected.id)}
                disabled={deleting === selected.id}
                className="px-4 py-2 rounded-xl text-xs font-medium tracking-wide uppercase transition-all duration-200 hover:opacity-80 ml-auto"
                style={{
                  fontFamily: "Jost, sans-serif",
                  background: "#fff1f1",
                  color: "#dc2626",
                  border: "1px solid #fecaca",
                  opacity: deleting === selected.id ? 0.5 : 1,
                }}
              >
                {deleting === selected.id ? "Deleting…" : "Delete"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
