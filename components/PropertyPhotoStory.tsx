import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import type { PropertyPhoto } from './mandatMedia';
import './property-photo-story.css';

const PHOTO_DURATION = 6000;

/** Photos that share the films' story controls and translucent captions. */
export const PropertyPhotoStory: React.FC<{
  photos: PropertyPhoto[];
  title: React.ReactNode;
  label: string;
  children?: React.ReactNode;
  className?: string;
}> = ({ photos, title, label, children, className = '' }) => {
  const root = useRef<HTMLElement>(null);
  const visible = useInView(root, { amount: .2 });
  const reduced = useReducedMotion();
  const elapsed = useRef(0);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const running = visible && !reduced && !paused && !hovered && !focused && !hidden && photos.length > 1;

  useEffect(() => {
    const update = () => setHidden(document.hidden);
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  useEffect(() => {
    if (!running) return;
    let last = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      elapsed.current += now - last;
      last = now;
      if (elapsed.current >= PHOTO_DURATION) {
        elapsed.current = 0;
        setActive(index => (index + 1) % photos.length);
      }
      setProgress(elapsed.current / PHOTO_DURATION);
    }, 100);
    return () => window.clearInterval(timer);
  }, [running, photos.length]);

  const select = (index: number) => {
    setActive((index + photos.length) % photos.length);
    elapsed.current = 0;
    setProgress(0);
  };

  if (!photos.length) return null;

  return (
    <article ref={root} className={`property-photo-story ${className}`} role="region" aria-roledescription="carrousel" aria-label={label}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          select(active + (event.key === 'ArrowRight' ? 1 : -1));
        }
      }}>
      <div className="property-photo-story-images">
        {photos.map((photo, index) => (
          <img key={photo.src} src={photo.src} alt={index === active ? photo.alt : ''} aria-hidden={index !== active}
            loading="lazy" decoding="async" width="1400" height="1050" data-active={index === active}
            style={{ objectPosition: photo.position }} />
        ))}
      </div>
      <div className="property-photo-story-shade" aria-hidden="true" />
      <div className="property-photo-story-top">
        <div className="property-photo-story-segments" aria-label="Choisir une photographie">
          {photos.map((photo, index) => (
            <button type="button" key={photo.src} aria-label={`Photographie ${index + 1} : ${photo.alt}`}
              aria-current={active === index ? 'true' : undefined} onClick={() => select(index)}>
              <span><span style={{ transform: `scaleX(${index < active ? 1 : index === active ? progress : 0})` }} /></span>
            </button>
          ))}
        </div>
        <div className="property-photo-story-topline"><span>{label}</span><span>{String(active + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span></div>
      </div>
      <div className="property-photo-story-bottom">
        <div className="property-photo-story-copy">
          <h3>{title}</h3>
          {children}
        </div>
        <div className="property-photo-story-controls">
          {!reduced && <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? `Reprendre le diaporama : ${label}` : `Mettre le diaporama en pause : ${label}`} aria-pressed={paused}>
            {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          </button>}
          <span className="property-photo-story-description" aria-live={running ? 'off' : 'polite'}>{photos[active].caption}</span>
          <div>
            <button type="button" onClick={() => select(active - 1)} aria-label={`Photographie précédente : ${label}`}><ChevronLeft size={18} aria-hidden="true" /></button>
            <button type="button" onClick={() => select(active + 1)} aria-label={`Photographie suivante : ${label}`}><ChevronRight size={18} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </article>
  );
};
