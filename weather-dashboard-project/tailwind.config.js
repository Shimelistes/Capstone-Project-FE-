/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#667eea',
        'blue-dark': '#764ba2',
      },
    },
  },
  plugins: [],
};
