// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#383544',
        primary: {
          light: '#2563eb',
          dark: '#8576FF',
          unselect: '#ADA9BB',
          nav: '#484554',
        },
        default: {
          50: '#000',
        },
        icon: {
          collapse: '#64748B',
        },
      },
      text: {
        base: '16px',
      },
    },
    screens: {
      midxl: { max: '1240px' },
      // => @media (max-width: 1240px) { ... }

      laptopmd: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }

      tablet: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      mobile: { max: '670px' },
      // => @media (max-width: 425px) { ... }
    },
  },
  plugins: [nextui()],
};
