import React, { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { BIENS } from './biensData';
import { PropertyLogoBlur } from './propertyPhotoBlur';
import './signature-client-gallery.css';

const SELECTION = [
  [['VM976', 5], ['VM990', 2], ['VM1043', 5]],
  [['VM990', 0], ['VM560', 2], ['VM976', 6]],
  [['VM1043', 0], ['VM1126', 4], ['VM560', 0]],
  [['VM1126', 0], ['VM976', 8], ['VM990', 5]],
] as const;

const COLUMNS = SELECTION.map(column => column.flatMap(([ref, index]) => {
  const bien = BIENS.find(item => item.ref === ref);
  const src = bien?.photos[index] ?? bien?.photos[0];
  return src && bien ? [{ src, alt: `${bien.typeLabel} à ${bien.city} — photographie du bien` }] : [];
}));

/** Mosaïque à colonnes alternées, avec les photos du portefeuille existant. */
export const SignatureClientGallery: React.FC = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const visible = useInView(gallery, { margin: '100px' });
  const [paused, setPaused] = useState(false);

  return (
    <div ref={gallery} className="signature-client-gallery" data-paused={paused || !visible} role="region" aria-labelledby="signature-client-gallery-title">
      <div className="signature-client-gallery-heading">
        <div><p>La galerie</p><h3 id="signature-client-gallery-title">Les biens de mes clients.</h3></div>
        <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Reprendre le défilement de la galerie' : 'Mettre la galerie en pause'} aria-pressed={paused} className="signature-gallery-pause">
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      </div>
      <div className="signature-gallery-columns">
        {COLUMNS.map((photos, column) => (
          <div className="signature-gallery-column" key={column}>
            <div className="signature-gallery-track" style={{ '--gallery-duration': `${36 + column * 5}s` } as React.CSSProperties}>
              {[0, 1].map(copy => (
                <div className="signature-gallery-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {photos.map((photo, index) => (
                    <figure className="signature-gallery-photo" key={photo.src} data-shape={index % 2 === 0 ? 'portrait' : 'landscape'}>
                      <img src={photo.src} alt={copy === 1 ? '' : photo.alt} width="800" height="600" loading="lazy" decoding="async" />
                      <PropertyLogoBlur src={photo.src} />
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="signature-gallery-caption">Une sélection de biens confiés dans le Pays de Gex.</p>
    </div>
  );
};
