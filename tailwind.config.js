/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#00f0ff', // Warna Cyan Futuristik
        dark: '#0a0a0a',  // Background Gelap
      }
    },
  },
  plugins: [],
}