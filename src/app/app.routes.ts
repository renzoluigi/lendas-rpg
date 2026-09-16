import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CharactersHub } from './components/pages/characters-hub/characters-hub';
import { Characters } from './components/pages/characters/characters';
import { CharacterRecord } from './components/pages/character-record/character-record';
import { CampaignVidaEMorte } from './components/pages/campaign-vida-e-morte/campaign-vida-e-morte';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "personagens", component: CharactersHub },
  { path: "personagens/vida-e-morte", component: CampaignVidaEMorte },
  { path: "personagens/one-shot", component: Characters },
  { path: "personagens/one-shot/:codename", component: CharacterRecord },
  { path: "personagens/:codename", component: CharacterRecord },
  { path: "personagens/vida-e-morte/one-shot", redirectTo: "personagens/one-shot", pathMatch: "full" },
  { path: "personagens/vida-e-morte/one-shot/:codename", redirectTo: "personagens/one-shot/:codename", pathMatch: "full" }
];
