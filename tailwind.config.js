/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0FA958',
        secondary: '#0B7E43',
        accent: '#F2B705',
        dark: '#0E0E0E',
        lightGrey: '#F4F6F5',
      },
    },
  },
  plugins: [],
}
