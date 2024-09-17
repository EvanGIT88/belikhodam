/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",  // Include all HTML files in src and subdirectories
    "./src/**/*.js"     // Include all JS files in src and subdirectories
  ],
  theme: {
    extend: {
      backgroundImage: {
        'khodam-bg': "url('/src/images/khodam-bg.jpg')",
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        dotgothic: ['Dotgothic', 'sans-serif']
      }
    },
    screens: {
      'phone': '480px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
  },
  plugins: [],
}

