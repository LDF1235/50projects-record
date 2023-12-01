/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-0': {
          transform: 'rotateY(0)',
        },
        '.rotate-y-360': {
          transform: 'rotateY(360deg)',
        },
      });
    }),
  ],
  darkMode: 'class',
};
