/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#ffb74d',
        /* primary: '#ff9800', */
        /* primary: 'rgb(216, 235, 247)', */

        body: 'rgb(205, 205, 205)',
        'dark-bg': '#1f1f1f',
      },
      placeholderColor: {
        primary: 'rgb(205, 205, 205)',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
