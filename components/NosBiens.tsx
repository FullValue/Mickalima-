import React, { useMemo, useState } from 'react';
import { SEO } from './SEO';
import { T, ListingCard, RevalisFooter } from './nosBiensShared';
import { BIENS } from './biensData';

/**
 * Index des biens — DA du template Framer Revalis (page /listings) :
 * hero image sombre pleine largeur, sidebar sticky de filtres à cocher,
 * grille de cartes 2 colonnes, « Charger plus », footer.
 * Données réelles : portefeuille de Mickaël (biensData.ts).
 */

const HERO_IMAGE = '/images/biens/VM976/01.jpg';

const TYPES = ['Maison', 'Appartement', 'Terrain'];
const CITIES = Array.from(new Set(BIENS.map((b) => b.city))).sort((a, b) => a.localeCompare(b, 'fr'));
const RANGES: Array<{ label: string; min: number; max: number }> = [
  { label: '< 500 k€', min: 0, max: 500000 },
  { label: '500 k€ – 800 k€', min: 500000, max: 800000 },
  { label: '800 k€ – 1,2 M€', min: 800000, max: 1200000 },
  { label: '1,2 M€ +', min: 1200000, max: Infinity },
];

const PAGE_SIZE = 6;

const groupLabel: React.CSSProperties = {
  fontFamily: T.body, fontSize: 13, fontWeight: 600, textTransform: 'uppercase',
  letterSpacing: 1.5, color: T.dark, marginBottom: 14,
};

/* Case à cocher stylée comme le template */
const Checkbox: React.FC<{ label: string; checked: boolean; onChange: () => void }> = ({ label, checked, onChange }) => (
  <label
    style={{
      display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
      fontFamily: T.body, fontSize: 16, color: T.dark,
    }}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
    />
    <span
      aria-hidden="true"
      style={{
        width: 20, height: 20, borderRadius: 5, flexShrink: 0,
        border: `1.5px solid ${checked ? T.dark : '#d5d5d5'}`,
        background: checked ? T.dark : '#fff',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all .15s ease',
      }}
    >
      {checked && (
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
          <path d="M1 4.5L4 7.5L10 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
    {label}
  </label>
);

const toggle = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

const NOSBIENS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Nos biens à vendre — Pays de Gex et bassin genevois',
  description:
    'Maisons, appartements et terrains à la vente, sélectionnés par Mickaël Lima, agent immobilier dans le Pays de Gex.',
  url: 'https://mickael-lima.immo/nos-biens/',
  about: { '@type': 'RealEstateAgent', name: 'Mickaël Lima — L’agence Immo' },
};

export const NosBiens: React.FC = () => {
  const [status, setStatus] = useState('Tous');
  const [types, setTypes] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [ranges, setRanges] = useState<string[]>([]);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const reset = () => setVisible(PAGE_SIZE);

  const filtered = useMemo(() => {
    const activeRanges = RANGES.filter((r) => ranges.includes(r.label));
    return BIENS.filter((p) => {
      if (status === 'Tous' && p.status === 'Vendu') return false; // les vendus ont leur section dédiée
      if (status !== 'Tous' && p.status !== status) return false;
      if (types.length && !types.includes(p.type)) return false;
      if (cities.length && !cities.includes(p.city)) return false;
      if (activeRanges.length && !activeRanges.some((r) => (p.price ?? 0) >= r.min && (p.price ?? 0) < r.max)) return false;
      return true;
    });
  }, [status, types, cities, ranges]);

  const shown = filtered.slice(0, visible);
  const vendus = useMemo(() => BIENS.filter((p) => p.status === 'Vendu'), []);
  const showVendusSection = status === 'Tous' && vendus.length > 0;

  return (
    <>
      <SEO
        title="Nos Biens à Vendre — Pays de Gex & Bassin Genevois | Mickaël Lima"
        description="Maisons, appartements et terrains à vendre dans le Pays de Gex et alentours : Grilly, Divonne-les-Bains, Ferney-Voltaire, Crozet, Péron… Photos, détails et visites avec Mickaël Lima."
        canonical="/nos-biens"
        schema={NOSBIENS_SCHEMA}
      />

      <div style={{ background: T.bg, fontFamily: T.body, color: T.dark }}>
        {/* ===== Hero image sombre pleine largeur ===== */}
        <section
          style={{
            position: 'relative', minHeight: 580, display: 'flex', alignItems: 'center',
            overflow: 'hidden', backgroundColor: T.navy,
          }}
        >
          <img
            src={HERO_IMAGE}
            alt=""
            aria-hidden="true"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, rgba(1,17,38,0.92) 0%, rgba(1,17,38,0.55) 40%, rgba(1,17,38,0.15) 75%, rgba(1,17,38,0.05) 100%)',
            }}
          />
          <div style={{ position: 'relative', width: '100%', maxWidth: 1300, margin: '0 auto', padding: '150px 30px 70px', color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 34 }}>
              <span style={{ fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2.5, whiteSpace: 'nowrap' }}>
                Nos propriétés
              </span>
              <span aria-hidden="true" style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.25)' }} />
            </div>
            <h1
              style={{
                fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(46px, 6.4vw, 92px)',
                lineHeight: '1.04em', marginBottom: 24,
              }}
            >
              Notre sélection de biens
            </h1>
            <p style={{ fontSize: 18, lineHeight: '1.6em', color: 'rgba(255,255,255,0.92)', maxWidth: 480 }}>
              Maisons, appartements et terrains dans le Pays de Gex et le bassin genevois,
              sélectionnés et accompagnés par votre agent.
            </p>
          </div>
        </section>

        {/* ===== Sidebar filtres + grille ===== */}
        <section style={{ maxWidth: 1300, margin: '0 auto', padding: '70px 30px 30px' }}>
          <div className="nb-listing-layout" style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: 28, alignItems: 'start' }}>
            {/* --- Sidebar (sticky) --- */}
            <aside className="nb-sidebar" style={{ position: 'sticky', top: 100, background: '#fff', borderRadius: 10, padding: 26 }}>
              <div style={{ marginBottom: 32 }}>
                <p style={groupLabel}>Statut</p>
                <select
                  value={status}
                  onChange={(e) => { setStatus(e.target.value); reset(); }}
                  aria-label="Filtrer par statut"
                  style={{
                    fontFamily: T.body, fontSize: 15, color: T.dark, background: T.chipBg,
                    border: `1px solid ${T.border}`, borderRadius: 8, padding: '13px 16px',
                    outline: 'none', cursor: 'pointer', width: '100%',
                  }}
                >
                  {['Tous', 'À vendre', 'Sous compromis', 'Vendu'].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 32 }}>
                <p style={groupLabel}>Par type</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {TYPES.map((t) => (
                    <Checkbox key={t} label={t} checked={types.includes(t)} onChange={() => { setTypes(toggle(types, t)); reset(); }} />
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 32 }}>
                <p style={groupLabel}>Par ville</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {CITIES.map((c) => (
                    <Checkbox key={c} label={c} checked={cities.includes(c)} onChange={() => { setCities(toggle(cities, c)); reset(); }} />
                  ))}
                </div>
              </div>

              <div>
                <p style={groupLabel}>Budget</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {RANGES.map((r) => (
                    <Checkbox key={r.label} label={r.label} checked={ranges.includes(r.label)} onChange={() => { setRanges(toggle(ranges, r.label)); reset(); }} />
                  ))}
                </div>
              </div>
            </aside>

            {/* --- Grille des biens (2 colonnes) --- */}
            <div>
              <p style={{ fontSize: 14, color: T.muted, margin: '0 0 18px' }} aria-live="polite">
                {filtered.length} bien{filtered.length > 1 ? 's' : ''}
              </p>
              {shown.length > 0 ? (
                <div className="nb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  {shown.map((p) => (
                    <ListingCard key={p.ref} property={p} fluid />
                  ))}
                </div>
              ) : (
                <div style={{ background: '#fff', borderRadius: 10, padding: '64px 24px', textAlign: 'center' }}>
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
                    className="nb-loadmore"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    style={{
                      fontFamily: T.body, fontSize: 15, fontWeight: 500, color: T.dark, background: '#fff',
                      border: 'none', borderRadius: 8, padding: '15px 34px', cursor: 'pointer',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    }}
                  >
                    Charger plus
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== Vendus récemment ===== */}
        {showVendusSection && (
          <section style={{ maxWidth: 1300, margin: '0 auto', padding: '50px 30px 30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 36 }}>
              <h2 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(30px, 3.4vw, 44px)', lineHeight: '1.1em', color: T.dark, whiteSpace: 'nowrap' }}>
                Vendus récemment
              </h2>
              <span aria-hidden="true" style={{ flex: 1, height: 1, background: '#e0e0e0' }} />
            </div>
            <div className="nb-grid-vendus" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {vendus.map((p) => (
                <ListingCard key={p.ref} property={p} fluid />
              ))}
            </div>
          </section>
        )}

        <div style={{ height: 70 }} />

        <RevalisFooter />
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .nb-listing-layout { grid-template-columns: 1fr !important; }
          .nb-sidebar { position: static !important; }
        }
        @media (max-width: 1023px) {
          .nb-grid-vendus { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 679px) {
          .nb-grid { grid-template-columns: 1fr !important; }
          .nb-grid-vendus { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};
