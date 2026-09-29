import type { CSSProperties } from 'react';

// Les photos historiques portent deux signatures incrustées à des positions fixes.
// Un cadrage à l'affichage préserve les photos originales et cache ces signatures
// dans toutes les tailles de galerie, y compris l'agrandissement.
const LEFT_CORNER_SIGNATURES = new Set([
  'VA2352', 'VA2424', 'VM560', 'VM760', 'VM835', 'VM902',
]);
const LOWER_CENTER_SIGNATURES = new Set([
  'VA2539', 'VM1022', 'VM1043', 'VM1063', 'VM1093', 'VM1126',
  'VM1140', 'VM615', 'VM920', 'VM976', 'VM990', 'VT093', 'VT095',
]);

export const propertyPhotoCrop = (src: string): CSSProperties => {
  const ref = src.match(/\/images\/biens\/([^/]+)\//)?.[1];
  if (!ref) return {};

  if (LEFT_CORNER_SIGNATURES.has(ref)) {
    return { transform: 'scale(1.36)', transformOrigin: 'right center' };
  }
  if (LOWER_CENTER_SIGNATURES.has(ref)) {
    return { transform: 'scale(1.54)', transformOrigin: 'center top' };
  }
  return {};
};
