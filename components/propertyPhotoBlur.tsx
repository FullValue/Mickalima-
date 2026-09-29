import React, { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

type LogoArea = { x: number; y: number; width: number; height: number };

const LEFT_CORNER_LOGOS = new Set([
  'VA2352', 'VA2424', 'VM560', 'VM760', 'VM835', 'VM902',
]);
const LOWER_CENTER_LOGOS = new Set([
  'VA2539', 'VM1022', 'VM1043', 'VM1063', 'VM1093', 'VM1126', 'VM1140',
  'VM615', 'VM920', 'VM976', 'VM990', 'VT093', 'VT095',
]);
const SQUARE_PHOTOS = new Set(['VM1063', 'VM1093', 'VM1126', 'VM1140']);

const logoArea = (src: string): LogoArea | null => {
  const ref = src.match(/\/images\/biens\/([^/]+)\//)?.[1];
  if (!ref) return null;
  if (LEFT_CORNER_LOGOS.has(ref)) return { x: 0.015, y: 0.715, width: 0.21, height: 0.275 };
  if (LOWER_CENTER_LOGOS.has(ref)) {
    return SQUARE_PHOTOS.has(ref)
      ? { x: 0.305, y: 0.68, width: 0.39, height: 0.205 }
      : { x: 0.305, y: 0.635, width: 0.39, height: 0.31 };
  }
  return null;
};

const blurStyle: CSSProperties = {
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 1,
  borderRadius: 12,
  background: 'rgba(245, 244, 240, 0.08)',
  backdropFilter: 'blur(54px) saturate(0.45)',
  WebkitBackdropFilter: 'blur(54px) saturate(0.45)',
};

/** Blur the embedded mark in the displayed image without zooming or cropping it. */
export const PropertyLogoBlur: React.FC<{ src: string }> = ({ src }) => {
  const area = logoArea(src);
  const overlayRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState<CSSProperties | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const image = overlay?.previousElementSibling;
    const frame = overlay?.parentElement;
    if (!area || !(image instanceof HTMLImageElement) || !frame) return;

    const update = () => {
      if (!image.naturalWidth || !image.naturalHeight) return;
      const imageBox = image.getBoundingClientRect();
      const frameBox = frame.getBoundingClientRect();
      const imageStyle = window.getComputedStyle(image);
      const fit = imageStyle.objectFit;
      const scale = fit === 'contain'
        ? Math.min(imageBox.width / image.naturalWidth, imageBox.height / image.naturalHeight)
        : Math.max(imageBox.width / image.naturalWidth, imageBox.height / image.naturalHeight);
      const renderedWidth = image.naturalWidth * scale;
      const renderedHeight = image.naturalHeight * scale;
      const originX = imageBox.left - frameBox.left + (imageBox.width - renderedWidth) / 2;
      const originY = imageBox.top - frameBox.top + (imageBox.height - renderedHeight) / 2;
      const left = Math.max(0, originX + area.x * renderedWidth);
      const top = Math.max(0, originY + area.y * renderedHeight);
      const right = Math.min(frameBox.width, originX + (area.x + area.width) * renderedWidth);
      const bottom = Math.min(frameBox.height, originY + (area.y + area.height) * renderedHeight);
      setPosition(right > left && bottom > top
        ? { left, top, width: right - left, height: bottom - top }
        : null);
    };

    const observer = new ResizeObserver(update);
    observer.observe(frame);
    observer.observe(image);
    image.addEventListener('load', update);
    update();
    return () => {
      observer.disconnect();
      image.removeEventListener('load', update);
    };
  }, [src, area?.x, area?.y, area?.width, area?.height]);

  if (!area) return null;
  return <span ref={overlayRef} aria-hidden="true" style={{ ...blurStyle, ...(position ?? { left: `${area.x * 100}%`, top: `${area.y * 100}%`, width: `${area.width * 100}%`, height: `${area.height * 100}%` }) }} />;
};
