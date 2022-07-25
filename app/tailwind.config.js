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
      },
      height: {
        '91': '91vh',
        '97': '97vh',
        'vh80': '80vh',
      }
    },
  },
  plugins: [require("daisyui")],
}
