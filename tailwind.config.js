/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pyf2Blue: {
          light: "#cce4ff",
          DEFAULT: "#0066cc",
          dark: "#0047ab",
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

