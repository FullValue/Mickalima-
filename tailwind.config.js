/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.tsx',
    './*.ts',
    './components/**/*.{tsx,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003064',
        textMain: '#003064',
        surface: '#F8FAFC',
        border: '#E2E8F0',
      },
      fontFamily: {
        newsletter: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
