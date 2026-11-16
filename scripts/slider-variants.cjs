// Variantes 960 px (et 1280 px si l'original est plus grand) des visuels de communes.
const sharp=require('sharp');const fs=require('fs');const path=require('path');
(async()=>{const out={};for(const f of process.argv.slice(2)){
  const m=await sharp(f).metadata(); const widths=[960,1280].filter(w=>w<m.width); const made=[];
  for(const w of widths){const o=f.replace(/\.(webp|jpe?g)$/,`-${w}.webp`); await sharp(f).resize({width:w}).webp({quality:72}).toFile(o); made.push([w,fs.statSync(o).size>>10]);}
  out[path.basename(f)]={width:m.width,height:m.height,variants:made,orig:fs.statSync(f).size>>10};}
 console.log(JSON.stringify(out));})();
