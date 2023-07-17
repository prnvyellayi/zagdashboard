/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter'],
        'Poppins': ['Poppins']
      },
      borderRadius: {
        '10': "10px",
        '30': '30px'
      },
      fontSize: {
        '14': "14px"
      }
    },
  },
  plugins: [],
}

