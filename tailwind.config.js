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
        surface: '#F8FAFC',
        border: '#E2E8F0',
      },
      fontFamily: {
        // Deux familles uniquement sur tout le site (cf. footer Revalis) :
        // Playfair Display pour les titres/serif, Montserrat pour le reste.
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        newsletter: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
