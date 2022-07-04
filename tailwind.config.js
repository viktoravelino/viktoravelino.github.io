/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: {
          DEFAULT: '#808080',
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#DBDBDB',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
