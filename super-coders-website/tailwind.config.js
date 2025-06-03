/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0f172a",
        accent: "#38bdf8",
        neon: "#00f0ff",
      },
    },
  },
  plugins: [],
};
