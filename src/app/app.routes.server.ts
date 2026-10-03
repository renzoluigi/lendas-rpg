import { RenderMode, ServerRoute } from '@angular/ssr';
import { CHARACTERS } from './characters-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'campanhas/vida-e-morte/:codename',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CHARACTERS.map(char => ({
        codename: char.codename
      }));
    }
  },
  {
    path: 'campanhas/arquivo-geral/:codename',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CHARACTERS.map(char => ({
        codename: char.codename
      }));
    }
  },
  {
    path: 'campanhas/one-shot/:codename',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CHARACTERS.map(char => ({
        codename: char.codename
      }));
    }
  },
  {
    path: 'campanhas/inverno-de-ossos/diario/:day',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return Array.from({ length: 30 }, (_, i) => ({
        day: String(i + 1)
      }));
    }
  },
  {
    path: 'campanhas/inverno-de-ossos/:codename',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CHARACTERS.map(char => ({
        codename: char.codename
      }));
    }
  },
  {
    path: 'campanhas/:codename',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CHARACTERS.map(char => ({
        codename: char.codename
      }));
    }
  },
  {
    path: 'campanha/**',
    renderMode: RenderMode.Server
  },
  {
    path: 'personagens/**',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
