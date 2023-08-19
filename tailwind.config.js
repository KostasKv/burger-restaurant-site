/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-oswald)"],
        "serif-alt": ["var(--font-bowlby-one)"],
      },
      colors: {
        primary: "#ee4a1e",
        accent: "#eef866",
        background: "#f6f2f0",
      },
    },
  },
  plugins: [],
};
