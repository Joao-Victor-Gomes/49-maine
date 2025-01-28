/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0C3551",
      },
      fontFamily: {
        ppRegular: ["var(--font-pp-regular)", "sans-serif"],
        ppSemiBold: ["var(--font-pp-semibold)", "sans-serif"],
        ppExtraBold: ["var(--font-pp-extrabold)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
