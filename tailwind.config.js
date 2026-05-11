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
          dark: '#1E3A8A',
          blue: '#2563EB',
          cyan: '#3B82F6',
          light: '#F4F7F9',
          accent: '#1D4ED8',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
