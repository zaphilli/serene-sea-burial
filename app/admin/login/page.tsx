import { login } from "../actions";
import Image from "next/image";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #071020 100%)" }}
    >
      <div
        className="w-full max-w-sm rounded-3xl p-10 relative overflow-hidden"
        style={{
          background: "rgba(13,40,71,0.4)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(168,197,218,0.1)",
        }}
      >
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, #c9a96e 30%, #4ecdc4 70%, transparent)",
          }}
        />

        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Serene Sea Burials" width={100} height={72} className="object-contain" />
        </div>

        <h1
          className="text-pearl text-center mb-1"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 400 }}
        >
          Admin Access
        </h1>
        <p
          className="text-mist/40 text-xs text-center tracking-widest uppercase mb-8"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          Serene Sea Burials
        </p>

        {error && (
          <div
            className="mb-6 px-4 py-3 rounded-xl text-xs text-center"
            style={{
              background: "rgba(255,80,80,0.08)",
              border: "1px solid rgba(255,80,80,0.2)",
              color: "rgba(255,150,150,0.9)",
              fontFamily: "Jost, sans-serif",
            }}
          >
            Incorrect password. Please try again.
          </div>
        )}

        <form action={login} className="space-y-5">
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full bg-transparent px-4 py-3 rounded-xl text-pearl text-sm outline-none transition-colors duration-300"
              style={{
                fontFamily: "Jost, sans-serif",
                border: "1px solid rgba(168,197,218,0.15)",
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:scale-[1.02]"
            style={{
              fontFamily: "Jost, sans-serif",
              background: "linear-gradient(135deg, rgba(78,205,196,0.9), rgba(78,205,196,0.7))",
              color: "#071020",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
