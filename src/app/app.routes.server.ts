import {RenderMode, ServerRoute} from '@angular/ssr';
import {CHARACTERS} from './characters-data';

export const serverRoutes: ServerRoute[] = [
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
