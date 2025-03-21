/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Add these paths if you're using JavaScript/React
  ],
  theme: {
    extend: {},
    fontSize: {
      "xxs": "10px", // Changed from text to fontSize
      "xxxs":"6px",
    },
  },
  plugins: [],
}
