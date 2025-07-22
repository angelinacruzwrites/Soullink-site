// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include all JS/TSX/JSX files in the 'pages' directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all JS/TSX/JSX files in the 'components' directory
  ],
  theme: {
    extend: {
      colors: {
        emerald: '#2ecc71', // Custom emerald green color
        gold: '#f1c40f',    // Custom gold color
      },
    },
  },
  plugins: [],
}

