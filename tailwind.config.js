/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/*.{jsx}',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    
  
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
  }},
  plugins: [],
}
