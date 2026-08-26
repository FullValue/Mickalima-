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
        // Playfair Display pour les titres, Inter pour toute l'interface.
        sans: ['Inter', '"Inter Placeholder"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        newsletter: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
