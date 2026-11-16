// Photographie les éléments SEO critiques de chaque URL du sitemap, puis compare.
//   node scripts/seo-snapshot.mjs save      → avant un déploiement
//   node scripts/seo-snapshot.mjs compare   → après : signale les régressions
// Les quatre changements qui tuent un site sans bruit : une page passe en noindex,
// un canonical pointe ailleurs, un 200 devient 404, robots.txt bloque tout.
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(root, 'scripts/seo-baseline.json');
const ORIGIN = 'https://mickael-lima.immo';
const BOTS = ['OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot', 'bingbot'];
const mode = process.argv[2];
if (!['save', 'compare'].includes(mode)) {
  console.error('Usage : node scripts/seo-snapshot.mjs save|compare');
  process.exit(2);
}

const get = async (url, ua = 'Mozilla/5.0 (seo-snapshot)') => {
  const res = await fetch(url, { headers: { 'User-Agent': ua }, redirect: 'manual' });
  return { status: res.status, body: res.status === 200 ? await res.text() : '' };
};
const pick = (html, re) => (html.match(re)?.[1] ?? '').replace(/\s+/g, ' ').trim();

async function capture() {
  const robots = await get(`${ORIGIN}/robots.txt`);
  const sitemap = await get(`${ORIGIN}/sitemap.xml`);
  const urls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const pages = {};
  for (const url of urls) {
    const { status, body } = await get(url);
    pages[url] = {
      status,
      title: pick(body, /<title[^>]*>([^<]*)<\/title>/),
      canonical: pick(body, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/),
      robots: [...body.matchAll(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/g)].map(m => m[1]).join(' | '),
      h1: pick(body, /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, '').slice(0, 120),
    };
  }
  const bots = {};
  for (const ua of BOTS) bots[ua] = (await get(`${ORIGIN}/`, ua)).status;
  const notFound = (await get(`${ORIGIN}/page-inexistante-controle-seo/`)).status;
  return {
    date: new Date().toISOString(),
    robotsStatus: robots.status,
    robotsBlocksAll: /^\s*Disallow:\s*\/\s*$/im.test(robots.body),
    sitemapStatus: sitemap.status,
    notFound,
    bots,
    pages,
  };
}

const now = await capture();
const n = Object.keys(now.pages).length;

if (mode === 'save') {
  writeFileSync(FILE, JSON.stringify(now, null, 2));
  console.log(`Référence enregistrée : ${n} pages → scripts/seo-baseline.json`);
  process.exit(0);
}

if (!existsSync(FILE)) {
  console.error('Aucune référence : lancer d\'abord « save ».');
  process.exit(2);
}
const before = JSON.parse(readFileSync(FILE, 'utf-8'));
const critical = [];
const notes = [];

if (now.robotsStatus !== 200) critical.push(`robots.txt répond ${now.robotsStatus}`);
if (now.robotsBlocksAll) critical.push('robots.txt contient « Disallow: / »');
if (now.sitemapStatus !== 200) critical.push(`sitemap.xml répond ${now.sitemapStatus}`);
for (const [ua, s] of Object.entries(now.bots)) if (s !== 200) critical.push(`${ua} reçoit ${s} sur la page d'accueil`);
if (now.notFound !== 404) notes.push(`URL inexistante → ${now.notFound} (attendu : 404)`);

for (const [url, b] of Object.entries(before.pages)) {
  const a = now.pages[url];
  if (!a) { notes.push(`Sortie du sitemap : ${url}`); continue; }
  if (b.status === 200 && a.status !== 200) critical.push(`${url} : 200 → ${a.status}`);
  if (/noindex/i.test(a.robots) && !/noindex/i.test(b.robots)) critical.push(`${url} : passée en noindex`);
  if (a.status === 200 && a.canonical !== b.canonical) critical.push(`${url} : canonical « ${b.canonical} » → « ${a.canonical} »`);
  if (a.status === 200 && a.title !== b.title) notes.push(`${url} : titre « ${b.title} » → « ${a.title} »`);
  if (a.status === 200 && a.h1 !== b.h1) notes.push(`${url} : H1 modifié`);
}
for (const url of Object.keys(now.pages)) if (!before.pages[url]) notes.push(`Nouvelle URL : ${url} (${now.pages[url].status})`);

console.log(`Comparaison avec la référence du ${before.date.slice(0, 10)} — ${n} pages`);
console.log(critical.length ? `\n❌ ${critical.length} régression(s) critique(s) :\n  ${critical.join('\n  ')}` : '\n✅ Aucune régression critique');
if (notes.length) console.log(`\nÀ vérifier (${notes.length}) :\n  ${notes.join('\n  ')}`);
process.exit(critical.length ? 1 : 0);
