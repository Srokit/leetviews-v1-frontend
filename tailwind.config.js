/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#115e4c',
        'secondary': '#dcd4bc',
      },
    },
  },
  plugins: [],
}

