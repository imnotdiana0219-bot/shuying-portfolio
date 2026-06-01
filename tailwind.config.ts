import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        // Institutional palette: deep slate base, restrained teal accent.
        ink: {
          DEFAULT: "#0b1117",
          soft: "#11181f",
          muted: "#1a232d",
        },
        accent: {
          DEFAULT: "#0d9488", // teal-600
          soft: "#14b8a6", // teal-500
          deep: "#0f766e", // teal-700
        },
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: {},
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
