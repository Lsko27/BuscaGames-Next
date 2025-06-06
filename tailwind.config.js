/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // ajuste conforme seu projeto
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
