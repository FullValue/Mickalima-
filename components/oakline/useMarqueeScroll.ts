import { useEffect, useRef, useState } from 'react';

/** Le geste manuel reprend la position de l’animation, sans saut ni zone vide. */
export const useMarqueeScroll = (itemCount: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    const container = ref.current;
    const track = container?.querySelector<HTMLElement>('.marquee-track');
    if (!container || !track) return;

    const takeControl = () => {
      if (container.dataset.manual === 'true') return;
      const transform = getComputedStyle(track).transform;
      const travelled = transform === 'none' ? 0 : -new DOMMatrixReadOnly(transform).m41;
      const position = container.scrollLeft + travelled;
      // Removing the transform makes the whole native scroll range usable.
      container.dataset.manual = 'true';
      container.scrollLeft = position;
    };
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey) takeControl();
    };
    const onScroll = () => {
      if (container.scrollLeft > 0) takeControl();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) takeControl();
    };
    const observer = new IntersectionObserver(([entry]) => {
      container.dataset.visible = String(entry.isIntersecting);
    });
    const onVisibility = () => {
      container.dataset.documentHidden = String(document.hidden);
    };
    const sizeTrack = () => {
      const first = track.children[0] as HTMLElement | undefined;
      const next = track.children[itemCount] as HTMLElement | undefined;
      if (!first || !next) return;
      const distance = next.offsetLeft - first.offsetLeft;
      if (distance <= 0) return;
      track.style.setProperty('--marquee-distance', `${distance}px`);
      // Enough copies to fill wide screens throughout the whole animation.
      setCopies(Math.max(2, Math.ceil(container.clientWidth / distance) + 1));
    };
    const resizeObserver = new ResizeObserver(sizeTrack);
    resizeObserver.observe(container);
    resizeObserver.observe(track);
    sizeTrack();
    onVisibility();
    observer.observe(container);
    container.addEventListener('wheel', onWheel, { passive: true });
    container.addEventListener('scroll', onScroll, { passive: true });
    container.addEventListener('keydown', onKeyDown);
    container.addEventListener('focusin', takeControl);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('scroll', onScroll);
      container.removeEventListener('keydown', onKeyDown);
      container.removeEventListener('focusin', takeControl);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [itemCount]);

  return { ref, copies };
};
