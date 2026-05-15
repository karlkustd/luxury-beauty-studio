import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: "#0F3D2E",
          forest: "#145A41",
          glow: "#00C853",
          light: "#DDE4C8",
        },
        gold: {
          DEFAULT: "#D4AF37",
          bright: "#E8C547",
          pale: "#E8D5A3",
        },
        ivory: "#F9F7F1",
        cream: "#F2EDE3",
        ruby: "#8B1A2E",
        sapphire: "#1A3A6B",
        amethyst: "#4A2060",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
      },
      keyframes: {
        ken: {
          "0%": { transform: "scale(1.08) translate3d(0,0,0)" },
          "100%": { transform: "scale(1.16) translate3d(-1.2%,-0.9%,0)" },
        },
      },
      animation: {
        ken: "ken 28s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
} satisfies Config;
