import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#0a0a0a", coal: "#141414", graphite: "#222326", steel: "#8b8f96", lime: "#c6ff1a" },
    fontFamily: { display: ["var(--font-display)", "Impact", "sans-serif"], sans: ["var(--font-body)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
