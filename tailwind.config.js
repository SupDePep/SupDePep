/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,css,ts,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

