import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const KEY = "inquiries";

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

async function readAll(): Promise<Inquiry[]> {
  try {
    const data = await redis.get<Inquiry[]>(KEY);
    return data ?? [];
  } catch {
    return [];
  }
}

async function writeAll(inquiries: Inquiry[]): Promise<void> {
  await redis.set(KEY, inquiries);
}

export async function getInquiries(): Promise<Inquiry[]> {
  const all = await readAll();
  return all.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function createInquiry(
  data: Omit<Inquiry, "id" | "createdAt" | "status"> & { location?: string }
): Promise<Inquiry> {
  const inquiries = await readAll();
  const inquiry: Inquiry = {
    ...data,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    createdAt: new Date().toISOString(),
    status: "new",
  };
  inquiries.push(inquiry);
  await writeAll(inquiries);
  return inquiry;
}

export async function updateInquiry(
  id: string,
  patch: Partial<Pick<Inquiry, "status">>
): Promise<Inquiry | null> {
  const inquiries = await readAll();
  const idx = inquiries.findIndex((i) => i.id === id);
  if (idx === -1) return null;
  inquiries[idx] = { ...inquiries[idx], ...patch };
  await writeAll(inquiries);
  return inquiries[idx];
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const inquiries = await readAll();
  const next = inquiries.filter((i) => i.id !== id);
  if (next.length === inquiries.length) return false;
  await writeAll(next);
  return true;
}
