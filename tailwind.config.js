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
        primary: '#011d41',
        textMain: '#011d41',
        surface: '#f7f7f7',
        border: '#ebebeb',
      },
      fontFamily: {
        // Instrument Sans reprend les titres de la référence 360 Lexington Avenue.
        sans: ['Inter', '"Inter Placeholder"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Sans"', 'sans-serif'],
        accent: ['"Instrument Serif"', 'serif'],
        newsletter: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
