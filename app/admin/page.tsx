import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getInquiries } from "@/lib/inquiries";
import AdminDashboard from "@/components/AdminDashboard";
import { logout } from "./actions";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token || token !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login");
  }

  const inquiries = await getInquiries();
  const newCount = inquiries.filter((i) => i.status === "new").length;

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      {/* Top bar */}
      <header
        className="flex items-center justify-between px-6 py-4 border-b"
        style={{ borderColor: "#e2e8f0", background: "#ffffff" }}
      >
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/logo.png" alt="Serene Sea Burials" width={72} height={52} className="object-contain" />
          </Link>
          <div className="h-6 w-px" style={{ background: "#e2e8f0" }} />
          <div>
            <span
              className="text-sm font-medium"
              style={{ fontFamily: "var(--font-body)", color: "#0f172a" }}
            >
              Inquiries
            </span>
            {newCount > 0 && (
              <span
                className="ml-2 text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "#e6faf8",
                  color: "#0e7c75",
                  border: "1px solid #9de5e0",
                }}
              >
                {newCount} new
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-xs font-medium tracking-wide uppercase transition-colors hover:opacity-70"
            style={{ fontFamily: "var(--font-body)", color: "#64748b" }}
          >
            View Site
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="text-xs font-medium tracking-wide uppercase transition-colors hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", color: "#64748b" }}
            >
              Sign Out
            </button>
          </form>
        </div>
      </header>

      <AdminDashboard initial={inquiries} />
    </div>
  );
}
