"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex w-fit items-center gap-2 text-mist/50 text-xs tracking-widest uppercase mb-8 hover:text-seafoam transition-colors duration-300"
      style={{ fontFamily: "Jost, sans-serif" }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M10 7H4M4 7L7 4M4 7L7 10"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to Home
    </button>
  );
}
