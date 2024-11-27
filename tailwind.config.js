/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        bg: '#08005e',
        primary: '#0ce096',
        secondary: 'rgba(12, 224, 150, 0.1)',
        hover: '#1acc8d',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
      },
    },
  },
  plugins: [],
}
