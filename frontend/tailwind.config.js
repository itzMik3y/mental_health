/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-green': '#0D9488', // Adjust if needed for other greens
          'brand-green-dark': '#ActualHexCode', // <-- Replace #ActualHexCode with the code you picked
          'brand-yellow': '#F59E0B', // Adjust if needed
          // Add other custom colors if necessary
        }
      },
    },
    plugins: [],
  }