import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CharactersHub } from './components/pages/characters-hub/characters-hub';
import { Characters } from './components/pages/characters/characters';
import { CharacterRecord } from './components/pages/character-record/character-record';
import { CharacterRecordVidaEMorte } from './components/pages/character-record-vida-e-morte/character-record-vida-e-morte';
import { CharacterRecordInvernoDeOssos } from './components/pages/character-record-inverno-de-ossos/character-record-inverno-de-ossos';
import { CampaignVidaEMorte } from './components/pages/campaign-vida-e-morte/campaign-vida-e-morte';
import { CampaignInvernoDeOssos } from './components/pages/campaign-inverno-de-ossos/campaign-inverno-de-ossos';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "personagens", component: CharactersHub },
  { path: "personagens/vida-e-morte", component: CampaignVidaEMorte },
  { path: "personagens/vida-e-morte/:codename", component: CharacterRecordVidaEMorte },
  { path: "josh", redirectTo: "personagens/vida-e-morte/Josh", pathMatch: "full" },
  { path: "sen", redirectTo: "personagens/vida-e-morte/Sen", pathMatch: "full" },
  { path: "valko", redirectTo: "personagens/inverno-de-ossos/Valko", pathMatch: "full" },
  { path: "personagens/one-shot", component: Characters },
  { path: "personagens/one-shot/:codename", component: CharacterRecord },
  { path: "personagens/inverno-de-ossos", component: CampaignInvernoDeOssos },
  { path: "personagens/inverno-de-ossos/:codename", component: CharacterRecordInvernoDeOssos },
  { path: "personagens/:codename", component: CharacterRecord }
];
