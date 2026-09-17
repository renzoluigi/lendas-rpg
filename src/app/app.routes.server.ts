import { RenderMode, ServerRoute } from '@angular/ssr';
import { CHARACTERS } from './characters-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'personagens/vida-e-morte/:codename',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CHARACTERS.map(char => ({
        codename: char.codename
      }));
    }
  },
  {
    path: 'personagens/one-shot/:codename',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CHARACTERS.map(char => ({
        codename: char.codename
      }));
    }
  },
  {
    path: 'personagens/inverno-de-ossos/:codename',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CHARACTERS.map(char => ({
        codename: char.codename
      }));
    }
  },
  {
    path: 'personagens/:codename',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CHARACTERS.map(char => ({
        codename: char.codename
      }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
