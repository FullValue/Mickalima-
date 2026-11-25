import { build } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COMMUNES = [
  'ferney-voltaire',
  'saint-genis-pouilly',
  'divonne-les-bains',
  'gex',
  'prevessin-moens',
  'cessy',
  'ornex',
  'thoiry',
  'crozet',
];

// Fiches publiées : biens vendus uniquement (voir PUBLIER_BIENS_EN_VENTE dans components/biensData.ts)
const BIEN_SLUGS = [
  'maison-individuelle-5-pieces-echenevex-01170',
  'appartement-t3-3-pieces-cessy-01170',
  'maison-individuelle-7-pieces-cessy-01170',
  'maison-mitoyenne-2-cotes-4-pieces-gex-01170',
];

const BLOG_SLUGS = [
  'prix-m2-pays-de-gex-2026',
  'immobilier-frontalier-pays-de-gex',
  'mandat-exclusif-ou-simple-pays-de-gex',
  'estimation-en-ligne-ou-a-domicile-pays-de-gex',
  'agent-immobilier-independant-ou-agence-pays-de-gex',
  'vendre-sa-maison-rapidement-pays-de-gex',
  'compromis-de-vente-delais-pays-de-gex',
  'vendre-sa-maison-pays-de-gex',
];

const ROUTES = [
  '/',
  '/nos-biens',
  '/about',
  '/partenaires',
  '/blog',
  '/contact',
  '/estimation',
  '/mandat-signature',
  '/mandat-exclusif',
  '/mentions-legales',
  '/politique-confidentialite',
  '/prix-immobilier/pays-de-gex',
  '/404',
  ...BLOG_SLUGS.map(s => `/blog/${s}`),
  ...BIEN_SLUGS.map(s => `/nos-biens/${s}`),
  ...COMMUNES.map(c => `/${c}/estimation-immobiliere`),
  ...COMMUNES.map(c => `/prix-immobilier/${c}`),
  ...COMMUNES.map(c => `/frontalier/${c}`),
];

async function prerender() {
  console.log('🔧 Building SSR bundle...');
  await build({
    logLevel: 'warn',
    build: {
      ssr: 'entry-server.tsx',
      outDir: 'dist/server',
      rollupOptions: {
        output: { format: 'esm' },
      },
    },
    ssr: {
      noExternal: true,
    },
  });

  let template = readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');

  // Précharge les deux polices du premier écran (texte courant et titres) pour
  // qu'elles se téléchargent en parallèle du CSS au lieu d'attendre sa lecture.
  const assets = readdirSync(path.resolve(__dirname, 'dist/assets'));
  const fontPreloads = [/^inter-latin-wght-normal-.*\.woff2$/, /^instrument-sans-latin-wght-normal-.*\.woff2$/]
    .map(re => assets.find(f => re.test(f)))
    .filter(Boolean)
    .map(f => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`);
  if (fontPreloads.length !== 2) throw new Error(`Polices à précharger introuvables (${fontPreloads.length}/2)`);
  template = template.replace('</head>', `  ${fontPreloads.join('\n  ')}\n</head>`);
  const serverEntry = pathToFileURL(path.resolve(__dirname, 'dist/server/entry-server.js')).href;
  const { render } = await import(serverEntry);

  let ok = 0;
  let fail = 0;

  for (const url of ROUTES) {
    try {
      const { appHtml, helmet } = render(url);

      let html = template;

      if (helmet) {
        // Replace static title with route-specific title
        if (helmet.title?.toString()) {
          html = html.replace(/<title>[^<]*<\/title>/, helmet.title.toString());
        }

        // Remove static meta tags that helmet replaces per route
        html = html
          .replace(/[ \t]*<meta name="description"[^>]*>\r?\n?/g, '')
          .replace(/[ \t]*<meta property="og:[^"]*"[^>]*>\r?\n?/g, '')
          .replace(/[ \t]*<meta name="twitter:[^"]*"[^>]*>\r?\n?/g, '')
          .replace(/[ \t]*<!-- OG fallbacks[^\n]*\n?/g, '');

        // Si la route fournit sa propre balise robots (ex. 404 en noindex),
        // on retire le « index, follow » statique pour éviter deux directives contradictoires
        if (/name="robots"/.test(helmet.meta?.toString() ?? '')) {
          html = html.replace(/[ \t]*<meta name="robots"[^>]*>\r?\n?/, '');
        }

        // Inject helmet meta + link + script tags (Article/BreadcrumbList JSON-LD)
        const headInsert = [
          helmet.meta?.toString(),
          helmet.link?.toString(),
          helmet.script?.toString(),
        ]
          .filter(s => s?.trim())
          .join('\n  ');

        if (headInsert) {
          html = html.replace('</head>', `  ${headInsert}\n</head>`);
        }
      }

      // Inject rendered HTML body
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // /404 → dist/404.html : servi avec un statut HTTP 404 par Vercel et Netlify
      const filePath =
        url === '/'
          ? path.resolve(__dirname, 'dist/index.html')
          : url === '/404'
            ? path.resolve(__dirname, 'dist/404.html')
            : path.resolve(__dirname, `dist${url}/index.html`);

      const dir = path.dirname(filePath);
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
      writeFileSync(filePath, html);

      console.log(`  ✓ ${url}`);
      ok++;
    } catch (err) {
      console.warn(`  ✗ ${url}: ${err.message}`);
      fail++;
    }
  }

  rmSync(path.resolve(__dirname, 'dist/server'), { recursive: true, force: true });

  // Garde-fou : sans réécriture attrape-tout, une URL du sitemap non pré-rendue
  // deviendrait un 404 en production. On échoue au build plutôt qu'en ligne.
  const sitemap = readFileSync(path.resolve(__dirname, 'dist/sitemap.xml'), 'utf-8');
  const missing = [...sitemap.matchAll(/<loc>https:\/\/mickael-lima\.immo(\/[^<]*)<\/loc>/g)]
    .map(m => m[1])
    .filter(p => !existsSync(path.resolve(__dirname, `dist${p}`, 'index.html')));
  if (missing.length) {
    console.error(`\n❌ ${missing.length} URL du sitemap sans page pré-rendue :\n  ${missing.join('\n  ')}`);
    process.exit(1);
  }
  if (!existsSync(path.resolve(__dirname, 'dist/404.html'))) {
    console.error('\n❌ dist/404.html manquant');
    process.exit(1);
  }

  console.log(`\n${fail ? '⚠️' : '✅'} ${ok} pages pre-rendered${fail ? `, ${fail} failed` : ''}`);
  if (fail > 0) process.exit(1);
}

prerender().catch(err => {
  console.error(err);
  process.exit(1);
});
