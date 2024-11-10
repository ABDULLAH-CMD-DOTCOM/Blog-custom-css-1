import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myPink:"#f98585",
        myBlack:"#21243D",
        recentBackground:"#F4E2E2",
        background: "#f6f0f0",
        footerBackground:"#FAF5F5",
        heroSalam:"#dfd8d8",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
