import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "inquiries.json");

export type InquiryStatus = "new" | "read" | "resolved";

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  location?: string;
  createdAt: string;
  status: InquiryStatus;
}

function readAll(): Inquiry[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Inquiry[];
  } catch {
    return [];
  }
}

function writeAll(inquiries: Inquiry[]): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
}

export function getInquiries(): Inquiry[] {
  return readAll().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function createInquiry(
  data: Omit<Inquiry, "id" | "createdAt" | "status"> & { location?: string }
): Inquiry {
  const inquiries = readAll();
  const inquiry: Inquiry = {
    ...data,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    createdAt: new Date().toISOString(),
    status: "new",
  };
  inquiries.push(inquiry);
  writeAll(inquiries);
  return inquiry;
}

export function updateInquiry(
  id: string,
  patch: Partial<Pick<Inquiry, "status">>
): Inquiry | null {
  const inquiries = readAll();
  const idx = inquiries.findIndex((i) => i.id === id);
  if (idx === -1) return null;
  inquiries[idx] = { ...inquiries[idx], ...patch };
  writeAll(inquiries);
  return inquiries[idx];
}

export function deleteInquiry(id: string): boolean {
  const inquiries = readAll();
  const next = inquiries.filter((i) => i.id !== id);
  if (next.length === inquiries.length) return false;
  writeAll(next);
  return true;
}
