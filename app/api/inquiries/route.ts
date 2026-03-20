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
    const inquiry = await createInquiry({ name, email, phone: phone ?? "", service: service ?? "", message: message ?? "", location });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const serviceLabels: Record<string, string> = {
      attended: "Attended Ceremony",
      unattended: "Unattended Burial",
      shipping: "Shipping Kit",
      preplan: "Preplanning",
      other: "Not Sure Yet",
    };

    await resend.emails.send({
      from: "forms@solagon.com",
      to: "zach@solagon.com",
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${serviceLabels[service] ?? service}</p>` : ""}
        ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ""}
        ${location ? `<p><strong>Location:</strong> ${location}</p>` : ""}
      `,
    });

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
  return NextResponse.json(await getInquiries());
}
