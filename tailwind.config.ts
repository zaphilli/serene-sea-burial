import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-deep': '#0a1628',
        'ocean-mid': '#0d2847',
        'ocean-light': '#1a4a7a',
        'seafoam': '#4ecdc4',
        'pearl': '#f0ece3',
        'gold-light': '#c9a96e',
        'mist': '#a8c5da',
      },
      fontFamily: {
        'display': ['var(--font-cormorant)', 'serif'],
        'body': ['var(--font-jost)', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0px) scaleX(1)' },
          '50%': { transform: 'translateY(-20px) scaleX(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
