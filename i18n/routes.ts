// Mapping FR ↔ EN pour le LanguageSwitcher.
// Toute route absente du map fait fallback : EN → /, FR → /en/.
export const routeMap: Record<string, string> = {
  '/': '/en/',
  '/en/': '/',
  '/estimation': '/en/estimation/',
  '/estimation/': '/en/estimation/',
  '/en/estimation/': '/estimation/',
  '/contact': '/en/contact/',
  '/contact/': '/en/contact/',
  '/en/contact/': '/contact/',
  '/en/real-estate-pays-de-gex/': '/',
};
