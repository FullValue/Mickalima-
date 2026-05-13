import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from './AppContent';

// Suppress useLayoutEffect SSR warnings from animation libraries
(React as any).useLayoutEffect = React.useEffect;

export function render(url: string): { appHtml: string; helmet: any } {
  const helmetContext: any = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </HelmetProvider>
  );
  return { appHtml, helmet: helmetContext.helmet };
}
