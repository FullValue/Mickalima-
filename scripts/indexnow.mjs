// Soumet les URL du sitemap à IndexNow (Bing, donc Copilot et ChatGPT Search).
// À lancer APRÈS un déploiement, quand les pages sont en ligne :
//   node scripts/indexnow.mjs            → toutes les URL du sitemap
//   node scripts/indexnow.mjs --dry      → affiche sans envoyer
//   node scripts/indexnow.mjs /blog/x/   → uniquement les chemins donnés
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'mickael-lima.immo';
const KEY = 'ff951cf2d05e6aad1f6f584fe5215a6c'; // public/<KEY>.txt

const args = process.argv.slice(2);
const dry = args.includes('--dry');
const paths = args.filter(a => a.startsWith('/'));

const sitemap = readFileSync(path.join(root, 'public/sitemap.xml'), 'utf-8');
const all = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const urlList = paths.length ? paths.map(p => `https://${HOST}${p}`) : all;

console.log(`${urlList.length} URL à soumettre`);
if (dry) {
  urlList.forEach(u => console.log('  ' + u));
  process.exit(0);
}

// La clé doit être en ligne, sinon IndexNow refuse la soumission
const keyRes = await fetch(`https://${HOST}/${KEY}.txt`);
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
  console.error(`Fichier de clé introuvable ou incorrect : https://${HOST}/${KEY}.txt`);
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow : HTTP ${res.status} ${res.statusText}`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
