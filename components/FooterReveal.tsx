import React, { useEffect, useRef } from 'react';

/** Le contenu de la page glisse au-dessus du footer resté en arrière-plan. */
export const FooterReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = ref.current;
    if (!footer) return;

    // Un footer plus haut que l'écran se dévoile puis continue en scroll normal.
    const update = () => {
      const bottom = Math.min(0, window.innerHeight - footer.offsetHeight - 80);
      footer.style.setProperty('--footer-reveal-bottom', `${bottom}px`);
    };
    const observer = new ResizeObserver(update);
    observer.observe(footer);
    window.addEventListener('resize', update);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const revealFocusedLink = (event: React.FocusEvent<HTMLDivElement>) => {
    const content = document.querySelector('[data-page-content]');
    if (!content || content.getBoundingClientRect().bottom <= 80) return;
    window.scrollTo({
      top: window.scrollY + content.getBoundingClientRect().bottom - 80,
      behavior: 'instant' as ScrollBehavior,
    });
    event.target.scrollIntoView({ block: 'nearest', behavior: 'instant' as ScrollBehavior });
  };

  return <div ref={ref} className="footer-reveal" onFocusCapture={revealFocusedLink}>{children}</div>;
};
