import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        prerender({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/',
            '/estimation',
            '/about',
            '/contact',
            '/blog',
            '/mandat-exclusif',
            '/blog/prix-m2-pays-de-gex-2026',
            '/blog/immobilier-frontalier-pays-de-gex',
            '/blog/mandat-exclusif-vs-mandat-simple',
            '/ferney-voltaire/estimation-immobiliere',
            '/saint-genis-pouilly/estimation-immobiliere',
            '/divonne-les-bains/estimation-immobiliere',
            '/gex/estimation-immobiliere',
            '/prevessin-moens/estimation-immobiliere',
            '/cessy/estimation-immobiliere',
            '/ornex/estimation-immobiliere',
            '/thoiry/estimation-immobiliere',
            '/crozet/estimation-immobiliere',
            '/prix-immobilier/ferney-voltaire',
            '/prix-immobilier/saint-genis-pouilly',
            '/prix-immobilier/divonne-les-bains',
            '/prix-immobilier/gex',
            '/prix-immobilier/prevessin-moens',
            '/prix-immobilier/cessy',
            '/prix-immobilier/ornex',
            '/prix-immobilier/thoiry',
            '/prix-immobilier/crozet',
            '/frontalier/ferney-voltaire',
            '/frontalier/saint-genis-pouilly',
            '/frontalier/divonne-les-bains',
            '/frontalier/gex',
            '/frontalier/prevessin-moens',
            '/frontalier/cessy',
            '/frontalier/ornex',
            '/frontalier/thoiry',
            '/frontalier/crozet',
          ],
        }),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
