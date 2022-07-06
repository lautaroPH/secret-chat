/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#282C34',
      },
      fontFamily: {
        matrix: ['matrixFont', 'ui-monospace'],
      },
    },
  },
  plugins: [],
};
