// Génère une version WebP redimensionnée à côté de chaque photo JPG/PNG lourde
// de public/images. Les originaux sont conservés (images de partage social).
// Usage, depuis un dossier où « sharp » est installé (npm i --no-save sharp) :
//   node scripts/optimize-images.mjs [racine-du-projet]
import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'fs';
import path from 'path';

const root = path.resolve(process.argv[2] ?? '.');
const dir = path.join(root, 'public/images');
const MIN_BYTES = 60 * 1024;
const QUALITY = 72;
const maxWidth = (file) => (file.includes(`${path.sep}biens${path.sep}`) ? 1600 : 1280);

const walk = (d) => readdirSync(d).flatMap((n) => {
  const p = path.join(d, n);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

let before = 0, after = 0, count = 0;
for (const file of walk(dir)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const size = statSync(file).size;
  if (size < MIN_BYTES) continue;
  const out = file.replace(/\.(jpe?g|png)$/i, '.webp');
  if (existsSync(out)) continue;
  const img = sharp(file).rotate();
  const meta = await img.metadata();
  if (meta.hasAlpha && /\.png$/i.test(file)) continue; // logos transparents : inchangés
  await img.resize({ width: maxWidth(file), withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);
  const outSize = statSync(out).size;
  before += size; after += outSize; count++;
}
console.log(`${count} images converties : ${(before / 1048576).toFixed(1)} Mo → ${(after / 1048576).toFixed(1)} Mo`);

// Vignettes 800 px des photos de couverture (cartes de la page d'accueil et de /nos-biens)
let thumbs = 0;
for (const file of walk(path.join(dir, 'biens'))) {
  if (!/[\\/]01\.(jpe?g|png)$/i.test(file)) continue;
  const out = file.replace(/\.(jpe?g|png)$/i, '-800.webp');
  if (existsSync(out)) continue;
  await sharp(file).rotate().resize({ width: 800, withoutEnlargement: true }).webp({ quality: 70 }).toFile(out);
  thumbs++;
}
console.log(`${thumbs} vignettes de couverture`);
