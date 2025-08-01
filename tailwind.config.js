import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        jua: ["var(--font-jua)"],
        "martian-mono": ["var(--font-martian-mono)"],
        "passion-one": ["var(--font-passion-one)"],
      },
      colors: {
        sablue: "#04a6f8",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;