/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // enable dark mode via class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        primary: "hsl(var(--primary))",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
  plugins: [],
};

module.exports = config;