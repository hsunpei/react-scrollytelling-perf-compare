/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@react-scrollytelling/layout/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
  plugins: [daisyui],
};
