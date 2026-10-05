import React, { useEffect, useRef, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Pause, Play, Scan, Smartphone, Video, Volume2, VolumeX, Wand2 } from 'lucide-react';
import { PillButton, SectionLabel } from './oakline/primitives';
import { SIGNATURE_VIDEOS, type SignatureVideo } from './signatureVideos';
import './signature-media-bento.css';

export const SignatureVideoCarousel: React.FC<{ videos?: SignatureVideo[] }> = ({ videos = SIGNATURE_VIDEOS }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);
  const player = useRef<HTMLVideoElement>(null);
  const continuePlayback = useRef(false);
  const currentIndex = Math.min(activeIndex, Math.max(0, videos.length - 1));
  const current = videos[currentIndex];
  const canNavigate = videos.length > 1;

  // Once playback has been requested, changing stories keeps it running.
  useEffect(() => {
    const video = player.current;
    if (!video || !continuePlayback.current) return;
    void video.play().catch(() => {
      if (player.current === video) setIsPlaying(false);
    });
  }, [current?.id]);

  const selectVideo = (index: number, autoplay = started) => {
    if (!canNavigate) return;
    const next = (index + videos.length) % videos.length;
    if (next === currentIndex) return;
    continuePlayback.current = autoplay;
    player.current?.pause();
    setStarted(false);
    setIsPlaying(false);
    setProgress(0);
    setFailed(false);
    setActiveIndex(next);
  };

  const play = () => {
    const video = player.current;
    if (!video) return;
    if (failed) video.load();
    continuePlayback.current = true;
    setFailed(false);
    void video.play().catch(() => {
      if (player.current === video) setIsPlaying(false);
    });
  };

  const togglePlayback = () => {
    if (isPlaying) player.current?.pause();
    else play();
  };

  const updateProgress = (video: HTMLVideoElement) => {
    if (Number.isFinite(video.duration) && video.duration > 0) {
      setProgress(Math.min(1, video.currentTime / video.duration));
    }
  };

  if (!current) return null;

  return (
    <div className="signature-film" role="region" aria-roledescription="carrousel" aria-label="Films de présentation immobilière" onKeyDown={(event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        selectVideo(currentIndex + (event.key === 'ArrowRight' ? 1 : -1));
      }
    }}>
      <div className="signature-film-screen" role="group" aria-roledescription="diapositive" aria-label={`${currentIndex + 1} sur ${videos.length} : ${current.title}`}>
        <video
          key={current.id}
          ref={player}
          src={current.src}
          poster={current.poster}
          muted={muted}
          playsInline
          preload="none"
          aria-label={`Film de présentation : ${current.title}, ${current.location}`}
          onPlay={() => { setStarted(true); setIsPlaying(true); }}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(event) => updateProgress(event.currentTarget)}
          onLoadedMetadata={(event) => updateProgress(event.currentTarget)}
          onEnded={() => {
            setProgress(1);
            setIsPlaying(false);
            if (currentIndex < videos.length - 1) selectVideo(currentIndex + 1, true);
            else continuePlayback.current = false;
          }}
          onError={() => { setFailed(true); setIsPlaying(false); }}
        />
        <div className="signature-film-overlay">
          <div className="signature-story-progress" aria-label="Choisir un film">
            {videos.map((video, index) => (
              <button key={video.id} type="button" className="signature-story-segment" aria-label={`Voir la vidéo ${index + 1} : ${video.title}`} aria-current={index === currentIndex ? 'true' : undefined} onClick={() => selectVideo(index)}>
                <span className="signature-story-track"><span style={{ transform: `scaleX(${index < currentIndex ? 1 : index === currentIndex ? progress : 0})` }} /></span>
              </button>
            ))}
          </div>
          <div className="signature-film-topline">
            <p className="signature-eyebrow"><Video size={15} aria-hidden="true" /> Nos films</p>
            <span className="signature-film-count">{String(currentIndex + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}</span>
          </div>
          <div className="signature-film-bottom">
            <div className="signature-film-title" aria-live="polite" aria-atomic="true">
              <span>{current.location}</span>
              <h3>{current.title}</h3>
              <p>Les volumes, la lumière, l’atmosphère.</p>
            </div>
            <div className="signature-film-controls">
              <div className="signature-film-playback">
                <button type="button" className="signature-film-control" onClick={togglePlayback} aria-label={isPlaying ? 'Mettre le film en pause' : 'Lire le film'}>
                  {isPlaying ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
                </button>
                <button type="button" className="signature-film-control" onClick={() => setMuted(!muted)} aria-label={muted ? 'Activer le son du film' : 'Couper le son du film'} aria-pressed={!muted}>
                  {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
                </button>
              </div>
              {canNavigate && <div className="signature-film-directions">
                <button type="button" className="signature-film-control" onClick={() => selectVideo(currentIndex - 1)} aria-label="Vidéo précédente"><ChevronLeft size={20} aria-hidden="true" /></button>
                <button type="button" className="signature-film-control" onClick={() => selectVideo(currentIndex + 1)} aria-label="Vidéo suivante"><ChevronRight size={20} aria-hidden="true" /></button>
              </div>}
            </div>
          </div>
        </div>
        {!started && !failed && (
          <button type="button" className="signature-play" onClick={play} aria-label={`Lire le film : ${current.title}`}>
            <Play size={27} fill="currentColor" strokeWidth={1.4} aria-hidden="true" />
          </button>
        )}
        {failed && (
          <div className="signature-film-error" role="alert">
            <p>La vidéo n’a pas pu être chargée.</p>
            <button type="button" onClick={play}>Réessayer la lecture</button>
          </div>
        )}
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
            <img src="/images/services/villa-prestige.jpg" alt="Maison en pierre à la tombée du jour" loading="lazy" decoding="async" />
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
            <img src="/images/editorial/partenaire-architecture-interieure.webp" alt="Projection d’un salon lumineux aménagé" loading="lazy" decoding="async" />
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
