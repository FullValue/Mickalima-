import React, { useMemo, useState } from 'react';
import { SEO } from './SEO';
import { T, NB_PROPERTIES, ListingCard, RevalisFooter } from './nosBiensShared';

/**
 * Index des biens — réplique de la page /listings du template Framer Revalis :
 * hero (badge « nos propriétés », grand titre, sous-titre), barre de filtres
 * (statut + type + ville + budget), grille de cartes, bouton « Charger plus »,
 * footer Revalis. Textes FR, polices du site (Playfair Display + Montserrat).
 * Chaque carte mène à sa page détail /nos-biens/:slug.
 */

const STATUSES = ['Tous', 'À vendre', 'À louer'] as const;

const TYPES = ['Appartement', 'Villa', 'Condo', 'Penthouse'];
const CITIES = ['Rochester', 'Albany', 'Buffalo', 'New York'];
const RANGES: Array<{ label: string; min: number; max: number }> = [
  { label: '< 100 k$', min: 0, max: 100000 },
  { label: '100 k$ – 500 k$', min: 100000, max: 500000 },
  { label: '500 k$ – 1 M$', min: 500000, max: 1000000 },
  { label: '1 M$ +', min: 1000000, max: Infinity },
];

const PAGE_SIZE = 6;

const selectStyle: React.CSSProperties = {
  fontFamily: T.body, fontSize: 14, color: T.dark, background: '#fff',
  border: `1px solid ${T.border}`, borderRadius: 8, padding: '12px 16px',
  outline: 'none', cursor: 'pointer', minWidth: 170,
};

export const NosBiens: React.FC = () => {
  const [status, setStatus] = useState<(typeof STATUSES)[number]>('Tous');
  const [type, setType] = useState('Tous');
  const [city, setCity] = useState('Toutes');
  const [range, setRange] = useState('Tous');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const r = RANGES.find((x) => x.label === range);
    return NB_PROPERTIES.filter((p) => {
      if (status === 'À louer') return false; // démo : tout est à la vente
      if (type !== 'Tous' && p.type !== type) return false;
      if (city !== 'Toutes' && p.city !== city) return false;
      if (r && !(p.priceValue >= r.min && p.priceValue < r.max)) return false;
      return true;
    });
  }, [status, type, city, range]);

  const shown = filtered.slice(0, visible);

  return (
    <>
      <SEO
        title="Nos Biens — Notre sélection"
        description="Découvrez notre sélection de biens à la vente : villas, penthouses, appartements et condos. Filtrez par type, ville et budget, et contactez votre agent."
        canonical="/nos-biens"
      />

      <div style={{ background: T.bg, fontFamily: T.body, color: T.dark, paddingTop: 96 }}>
        {/* ===== Hero ===== */}
        <section style={{ maxWidth: 1300, margin: '0 auto', padding: '64px 30px 48px', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block', fontSize: 13, fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: 2, color: T.muted, border: `1px solid ${T.border}`, background: '#fff',
              borderRadius: 50, padding: '9px 18px', marginBottom: 26,
            }}
          >
            Nos propriétés
          </span>
          <h1
            style={{
              fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(44px, 6.4vw, 84px)',
              lineHeight: '1.05em', color: T.dark, marginBottom: 22,
            }}
          >
            Notre sélection <em style={{ fontStyle: 'italic' }}>de biens.</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: '1.65em', color: T.muted, maxWidth: 560, margin: '0 auto' }}>
            Découvrez une sélection de biens dans les quartiers les plus recherchés,
            portée par une expertise locale.
          </p>
        </section>

        {/* ===== Filtres ===== */}
        <section style={{ maxWidth: 1300, margin: '0 auto', padding: '0 30px 40px' }}>
          <div
            style={{
              display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between',
              gap: 20, background: '#fff', border: `1px solid ${T.border}`, borderRadius: 10, padding: 18,
            }}
          >
            {/* Statut */}
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: T.muted, marginBottom: 10 }}>
                Statut
              </p>
              <div style={{ display: 'inline-flex', background: T.chipBg, borderRadius: 8, padding: 4 }} role="group" aria-label="Filtrer par statut">
                {STATUSES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => { setStatus(s); setVisible(PAGE_SIZE); }}
                    aria-pressed={status === s}
                    style={{
                      fontFamily: T.body, fontSize: 14, fontWeight: 500, cursor: 'pointer',
                      border: 'none', borderRadius: 6, padding: '9px 18px',
                      background: status === s ? '#fff' : 'transparent',
                      color: status === s ? T.dark : T.muted,
                      boxShadow: status === s ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <div>
                <label htmlFor="nb-f-type" style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: T.muted, marginBottom: 10 }}>
                  Par type
                </label>
                <select id="nb-f-type" value={type} onChange={(e) => { setType(e.target.value); setVisible(PAGE_SIZE); }} style={selectStyle}>
                  <option value="Tous">Tous les types</option>
                  {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="nb-f-city" style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: T.muted, marginBottom: 10 }}>
                  Par ville
                </label>
                <select id="nb-f-city" value={city} onChange={(e) => { setCity(e.target.value); setVisible(PAGE_SIZE); }} style={selectStyle}>
                  <option value="Toutes">Toutes les villes</option>
                  {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="nb-f-range" style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: T.muted, marginBottom: 10 }}>
                  Budget
                </label>
                <select id="nb-f-range" value={range} onChange={(e) => { setRange(e.target.value); setVisible(PAGE_SIZE); }} style={selectStyle}>
                  <option value="Tous">Tous les budgets</option>
                  {RANGES.map((r) => <option key={r.label} value={r.label}>{r.label}</option>)}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Grille des biens ===== */}
        <section style={{ maxWidth: 1300, margin: '0 auto', padding: '0 30px 40px' }}>
          {shown.length > 0 ? (
            <div className="nb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {shown.map((p) => (
                <ListingCard key={p.slug} property={p} fluid />
              ))}
            </div>
          ) : (
            <div style={{ background: '#fff', border: `1px solid ${T.border}`, borderRadius: 10, padding: '64px 24px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 26, marginBottom: 10 }}>
                Aucun bien ne correspond à ces critères
              </h3>
              <p style={{ fontSize: 15, color: T.muted }}>
                Élargissez vos filtres ou contactez-nous : une partie de nos biens n'est jamais publiée.
              </p>
            </div>
          )}

          {visible < filtered.length && (
            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                style={{
                  fontFamily: T.body, fontSize: 15, fontWeight: 500, color: '#fff', background: T.dark,
                  border: 'none', borderRadius: 8, padding: '15px 34px', cursor: 'pointer',
                }}
              >
                Charger plus
              </button>
            </div>
          )}
        </section>

        <div style={{ height: 60 }} />

        <RevalisFooter />
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .nb-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 679px) {
          .nb-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};
