import { build } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
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

const BLOG_SLUGS = [
  'prix-m2-pays-de-gex-2026',
  'immobilier-frontalier-pays-de-gex',
  'mandat-exclusif-vs-mandat-simple',
];

const ROUTES = [
  '/',
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
  ...BLOG_SLUGS.map(s => `/blog/${s}`),
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

  const template = readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
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

      const filePath =
        url === '/'
          ? path.resolve(__dirname, 'dist/index.html')
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

  console.log(`\n${fail ? '⚠️' : '✅'} ${ok} pages pre-rendered${fail ? `, ${fail} failed` : ''}`);
  if (fail > 0) process.exit(1);
}

prerender().catch(err => {
  console.error(err);
  process.exit(1);
});
