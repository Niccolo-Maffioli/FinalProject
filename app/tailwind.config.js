/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myblack': '#202028',
      },
      boxShadow: {
        'myshadow': '-1px 5px 16px rgba(0, 0, 0, 0.13);',
      }
    },
  },
  plugins: [require("daisyui")],
}
