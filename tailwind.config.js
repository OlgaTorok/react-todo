/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      slate: '#64748b',
      slateLight: '#e2e8f0',
      slateDark: '#1e293b',
      red: '#dc2626',
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
