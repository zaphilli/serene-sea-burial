import { NextRequest, NextResponse } from "next/server";
import { createInquiry, getInquiries } from "@/lib/inquiries";
import { cookies } from "next/headers";
import { Resend } from "resend";

async function getLocation(req: NextRequest): Promise<string | undefined> {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      undefined;
    if (!ip || ip === "127.0.0.1" || ip === "::1") return undefined;
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=city,regionName,countryCode`, { signal: AbortSignal.timeout(2000) });
    if (!res.ok) return undefined;
    const data = await res.json();
    if (data.city && data.regionName) return `${data.city}, ${data.regionName}`;
    if (data.city) return data.city;
    return undefined;
  } catch {
    return undefined;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }
    const location = await getLocation(req);
    const inquiry = createInquiry({ name, email, phone: phone ?? "", service: service ?? "", message: message ?? "", location });

    const ownerEmail = process.env.OWNER_EMAIL;
    if (ownerEmail && process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const serviceLabel: Record<string, string> = {
        attended: "Attended Ceremony",
        unattended: "Unattended Burial",
        shipping: "Shipping Kit",
        preplan: "Preplanning",
        other: "Other / Not Sure",
      };
      await resend.emails.send({
        from: "Serene Sea Burials <onboarding@resend.dev>",
        to: ownerEmail,
        subject: `New Inquiry from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#f8fafc;border-radius:12px;">
            <h2 style="margin:0 0 4px;font-size:22px;color:#0f172a;">New Inquiry</h2>
            <p style="margin:0 0 24px;font-size:13px;color:#94a3b8;">Serene Sea Burials — ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;width:90px;">Name</td><td style="padding:8px 0;font-size:14px;color:#1e293b;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;">Email</td><td style="padding:8px 0;font-size:14px;color:#0e7c75;"><a href="mailto:${email}" style="color:#0e7c75;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;">Phone</td><td style="padding:8px 0;font-size:14px;color:#1e293b;"><a href="tel:${phone}" style="color:#0e7c75;">${phone}</a></td></tr>` : ""}
              ${inquiry.service ? `<tr><td style="padding:8px 0;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;">Service</td><td style="padding:8px 0;font-size:14px;color:#1e293b;">${serviceLabel[inquiry.service] ?? inquiry.service}</td></tr>` : ""}
              ${location ? `<tr><td style="padding:8px 0;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;">Location</td><td style="padding:8px 0;font-size:14px;color:#1e293b;">${location}</td></tr>` : ""}
            </table>
            ${message ? `<div style="margin-top:20px;padding:16px;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;"><p style="margin:0 0 8px;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;">Message</p><p style="margin:0;font-size:14px;color:#334155;white-space:pre-wrap;">${message}</p></div>` : ""}
            <div style="margin-top:24px;"><a href="${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/admin" style="display:inline-block;padding:10px 20px;background:#0d2847;color:#ffffff;text-decoration:none;border-radius:8px;font-size:13px;">View in Dashboard</a></div>
          </div>
        `,
      }).catch(() => {/* non-fatal */});
    }

    return NextResponse.json(inquiry, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to save inquiry." }, { status: 500 });
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token || token !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(getInquiries());
}
