import React, { useRef, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Play, Scan, Smartphone, Sparkles, Video, Wand2 } from 'lucide-react';
import { PillButton, SectionLabel } from './oakline/primitives';
import { SIGNATURE_VIDEOS, type SignatureVideo } from './signatureVideos';
import './signature-media-bento.css';

export const SignatureVideoCarousel: React.FC<{ videos?: SignatureVideo[] }> = ({ videos = SIGNATURE_VIDEOS }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const player = useRef<HTMLVideoElement>(null);
  const currentIndex = Math.min(activeIndex, Math.max(0, videos.length - 1));
  const current = videos[currentIndex];
  const canNavigate = videos.length > 1;

  const selectVideo = (index: number) => {
    if (!canNavigate) return;
    const next = (index + videos.length) % videos.length;
    if (next === currentIndex) return;
    player.current?.pause();
    setStarted(false);
    setFailed(false);
    setActiveIndex(next);
  };

  const play = () => {
    const video = player.current;
    if (!video) return;
    if (failed) video.load();
    setFailed(false);
    void video.play().catch(() => {
      if (player.current === video) setFailed(true);
    });
  };

  if (!current) return null;

  return (
    <div className="signature-film" role="region" aria-roledescription="carrousel" aria-label="Films de présentation immobilière">
      <div className="signature-film-screen" role="group" aria-roledescription="diapositive" aria-label={`${currentIndex + 1} sur ${videos.length} : ${current.title}`}>
        <video
          key={current.id}
          ref={player}
          src={current.src}
          poster={current.poster}
          controls={started}
          playsInline
          preload="none"
          aria-label={`Film de présentation : ${current.title}, ${current.location}`}
          onPlay={() => setStarted(true)}
          onError={() => setFailed(true)}
        />
        {!started && !failed && (
          <div className="signature-film-cover">
            <p className="signature-eyebrow"><Video size={15} aria-hidden="true" /> Film de présentation</p>
            <button type="button" className="signature-play" onClick={play} aria-label={`Lire le film : ${current.title}`}>
              <Play size={27} fill="currentColor" strokeWidth={1.4} aria-hidden="true" />
            </button>
            <div className="signature-film-title">
              <span>{current.location}</span>
              <h3>{current.title}</h3>
              <p>Les volumes, la lumière, l’atmosphère.</p>
            </div>
          </div>
        )}
        {failed && (
          <div className="signature-film-error" role="alert">
            <p>La vidéo n’a pas pu être chargée.</p>
            <button type="button" onClick={play}>Réessayer la lecture</button>
          </div>
        )}
      </div>
      <div className="signature-film-navigation" onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          selectVideo(currentIndex + (event.key === 'ArrowRight' ? 1 : -1));
        }
      }}>
        <div className="signature-film-meta" aria-live="polite" aria-atomic="true">
          <span>Nos films</span>
          <p>{current.location} <span className="signature-film-count">{String(currentIndex + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}</span></p>
        </div>
        <div className="signature-film-controls">
          <button type="button" className="signature-arrow" disabled={!canNavigate} onClick={() => selectVideo(currentIndex - 1)} aria-label="Vidéo précédente"><ChevronLeft size={19} aria-hidden="true" /></button>
          <div className="signature-dots" aria-label="Choisir une vidéo">
            {videos.map((video, index) => (
              <button key={video.id} type="button" className="signature-dot" aria-label={`Voir la vidéo ${index + 1} : ${video.title}`} aria-current={index === currentIndex ? 'true' : undefined} onClick={() => selectVideo(index)}><span /></button>
            ))}
          </div>
          <button type="button" className="signature-arrow" disabled={!canNavigate} onClick={() => selectVideo(currentIndex + 1)} aria-label="Vidéo suivante"><ChevronRight size={19} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
};

export const SignatureMediaBento: React.FC = () => (
  <section className="signature-media" aria-labelledby="signature-media-title">
    <header className="signature-media-heading">
      <SectionLabel>01. Valorisation visuelle</SectionLabel>
      <div className="signature-media-intro">
        <h2 id="signature-media-title">Votre bien, sous son <em>meilleur jour.</em></h2>
        <p>Photos, films et visites immersives : chaque support révèle ce qui rend votre bien unique et aide les acquéreurs à s’y projeter.</p>
      </div>
      <PillButton to="/estimation" variant="solid" arrow>Parlons de votre bien</PillButton>
    </header>

    <div className="signature-bento">
      <div className="signature-bento-side signature-bento-left">
        <article className="signature-card signature-photo-card">
          <div className="signature-photo">
            <img src="/images/services/villa-prestige.jpg" alt="Maison en pierre photographiée à la tombée du jour, visuel d’illustration" loading="lazy" decoding="async" />
            <span className="signature-image-note">Visuel d’illustration</span>
          </div>
          <div className="signature-card-copy">
            <p className="signature-eyebrow"><Camera size={15} aria-hidden="true" /> Photos pro haute définition</p>
            <h3>Faire la différence au premier regard.</h3>
            <p>Des cadrages soignés, des perspectives lisibles et une lumière qui met les espaces en valeur.</p>
          </div>
        </article>
        <article className="signature-card signature-tour-card">
          <div className="signature-tour-mark" aria-hidden="true"><Scan size={37} strokeWidth={1} /><span>360°</span></div>
          <p className="signature-eyebrow">Visite virtuelle immersive</p>
          <h3>Se projeter, pièce après pièce.</h3>
          <p>Une visite à distance pour comprendre l’agencement et préparer la découverte du bien sur place.</p>
        </article>
      </div>

      <SignatureVideoCarousel />

      <div className="signature-bento-side signature-bento-right">
        <article className="signature-card signature-social-card">
          <p className="signature-eyebrow"><Smartphone size={15} aria-hidden="true" /> Réseaux sociaux & médias</p>
          <h3>Un bien,<br /><em>plusieurs formats.</em></h3>
          <p>Des vidéos courtes pour faire découvrir les points forts du bien et donner envie de le visiter.</p>
          <div className="signature-format-tags"><span>TikTok</span><span>Reels</span><span>Format vertical</span></div>
        </article>
        <article className="signature-card signature-staging-card">
          <div className="signature-staging-photo">
            <img src="/images/editorial/partenaire-architecture-interieure.webp" alt="Projection d’un salon lumineux aménagé, visuel d’illustration" loading="lazy" decoding="async" />
            <span className="signature-image-note"><Sparkles size={12} aria-hidden="true" /> Visuel d’illustration</span>
          </div>
          <div className="signature-card-copy">
            <h3>Révéler le potentiel.</h3>
            <div className="signature-service-detail"><Wand2 size={18} aria-hidden="true" /><div><h4>Home staging virtuel</h4><p>Des propositions d’aménagement pour imaginer les possibilités d’un espace.</p></div></div>
            <div className="signature-service-detail"><Video size={18} aria-hidden="true" /><div><h4>Vidéos IA</h4><p>Des projections animées, identifiées comme telles, pour illustrer une nouvelle ambiance.</p></div></div>
          </div>
        </article>
      </div>
    </div>
  </section>
);
