/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0b1220",
        accent: "#38bdf8"
      }
    },
  },
  plugins: [],
}
