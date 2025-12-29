/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.875rem',
        'sm': '1rem',
        'base': '1.125rem',
        'lg': '1.375rem',
        'xl': '1.625rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '2.875rem',
        '5xl': '3.5rem',
        '6xl': '4.25rem',
        '7xl': '5rem',
      },
      maxWidth: {
        '7xl': '90rem',
        '8xl': '100rem',
        '9xl': '110rem',
      },
      colors: {
        'brand-orange': {
          50: '#fff4ed',
          100: '#ffe6d5',
          200: '#fecaaa',
          300: '#fda574',
          400: '#fb7a3c',
          500: '#f95316',
          600: '#ea3c0c',
          700: '#c22b0c',
          800: '#9a2512',
          900: '#7c2112',
        },
      },
    },
  },
  plugins: [],
};
