/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        isip: {
          dark: '#00497c',
          cyan: '#0c9bc1',
          light: '#F4F7F9',
          accent: '#E30613', // Standard industrial red for accents
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
