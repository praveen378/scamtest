/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: '#ffddd1',
        White: '#F4F6FF',
        Text:"#ec9613"
      },
    },
  },
  plugins: [],
}

