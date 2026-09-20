import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CharactersHub } from './components/pages/characters-hub/characters-hub';
import { Characters } from './components/pages/characters/characters';
import { CharacterRecord } from './components/pages/character-record/character-record';
import { CharacterRecordVidaEMorte } from './components/pages/character-record-vida-e-morte/character-record-vida-e-morte';
import { CharacterRecordInvernoDeOssos } from './components/pages/character-record-inverno-de-ossos/character-record-inverno-de-ossos';
import { CampaignVidaEMorte } from './components/pages/campaign-vida-e-morte/campaign-vida-e-morte';
import { CampaignInvernoDeOssos } from './components/pages/campaign-inverno-de-ossos/campaign-inverno-de-ossos';
import { ArchiveCanon } from './components/pages/archive-canon/archive-canon';
import { Archive } from './components/pages/archive/archive';
import { Legends } from './components/pages/legends/legends';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "arquivo", component: Archive },
  { path: "lendas", component: Legends },

  // Campanhas (Hub principal e sub-rotas)
  { path: "campanhas", component: CharactersHub },
  { path: "campanha", redirectTo: "campanhas", pathMatch: "full" },
  { path: "campanhas/arquivo-geral", component: ArchiveCanon },
  { path: "campanhas/arquivo-geral/:codename", component: CharacterRecordVidaEMorte },
  { path: "campanhas/canon", redirectTo: "campanhas/arquivo-geral", pathMatch: "full" },
  { path: "campanhas/vida-e-morte", component: CampaignVidaEMorte },
  { path: "campanhas/vida-e-morte/:codename", component: CharacterRecordVidaEMorte },
  { path: "campanhas/inverno-de-ossos", component: CampaignInvernoDeOssos },
  { path: "campanhas/inverno-de-ossos/:codename", component: CharacterRecordInvernoDeOssos },
  { path: "campanhas/one-shot", component: Characters },
  { path: "campanhas/one-shot/:codename", component: CharacterRecord },
  { path: "campanhas/:codename", component: CharacterRecord },

  // Redirecionamentos para 'campanha' singular
  { path: "campanha/arquivo-geral", redirectTo: "campanhas/arquivo-geral", pathMatch: "full" },
  { path: "campanha/arquivo-geral/:codename", redirectTo: ({ params }) => `campanhas/arquivo-geral/${params['codename']}` },
  { path: "campanha/canon", redirectTo: "campanhas/arquivo-geral", pathMatch: "full" },
  { path: "campanha/vida-e-morte", redirectTo: "campanhas/vida-e-morte", pathMatch: "full" },
  { path: "campanha/vida-e-morte/:codename", redirectTo: ({ params }) => `campanhas/vida-e-morte/${params['codename']}` },
  { path: "campanha/inverno-de-ossos", redirectTo: "campanhas/inverno-de-ossos", pathMatch: "full" },
  { path: "campanha/inverno-de-ossos/:codename", redirectTo: ({ params }) => `campanhas/inverno-de-ossos/${params['codename']}` },
  { path: "campanha/one-shot", redirectTo: "campanhas/one-shot", pathMatch: "full" },
  { path: "campanha/one-shot/:codename", redirectTo: ({ params }) => `campanhas/one-shot/${params['codename']}` },
  { path: "campanha/:codename", redirectTo: ({ params }) => `campanhas/${params['codename']}` },

  // Compatibilidade com antigas URLs 'personagens'
  { path: "personagens", redirectTo: "campanhas", pathMatch: "full" },
  { path: "personagens/arquivo-geral", redirectTo: "campanhas/arquivo-geral", pathMatch: "full" },
  { path: "personagens/arquivo-geral/:codename", redirectTo: ({ params }) => `campanhas/arquivo-geral/${params['codename']}` },
  { path: "personagens/canon", redirectTo: "campanhas/arquivo-geral", pathMatch: "full" },
  { path: "personagens/vida-e-morte", redirectTo: "campanhas/vida-e-morte", pathMatch: "full" },
  { path: "personagens/vida-e-morte/:codename", redirectTo: ({ params }) => `campanhas/vida-e-morte/${params['codename']}` },
  { path: "personagens/inverno-de-ossos", redirectTo: "campanhas/inverno-de-ossos", pathMatch: "full" },
  { path: "personagens/inverno-de-ossos/:codename", redirectTo: ({ params }) => `campanhas/inverno-de-ossos/${params['codename']}` },
  { path: "personagens/one-shot", redirectTo: "campanhas/one-shot", pathMatch: "full" },
  { path: "personagens/one-shot/:codename", redirectTo: ({ params }) => `campanhas/one-shot/${params['codename']}` },
  { path: "personagens/:codename", redirectTo: ({ params }) => `campanhas/${params['codename']}` },

  // Compatibilidade com antigas URLs 'cacadores'
  { path: "cacadores", redirectTo: "campanhas", pathMatch: "full" },
  { path: "cacadores/vida-e-morte", redirectTo: "campanhas/vida-e-morte", pathMatch: "full" },
  { path: "cacadores/inverno-de-ossos", redirectTo: "campanhas/inverno-de-ossos", pathMatch: "full" },
  { path: "cacadores/one-shot", redirectTo: "campanhas/one-shot", pathMatch: "full" },

  // Atalhos diretos de codinomes
  { path: "professor", redirectTo: "campanhas/vida-e-morte/Professor", pathMatch: "full" },
  { path: "stateham", redirectTo: "campanhas/vida-e-morte/Stateham", pathMatch: "full" },
  { path: "markus-wolf", redirectTo: "campanhas/vida-e-morte/Markus-Wolf", pathMatch: "full" },
  { path: "josh", redirectTo: "campanhas/vida-e-morte/Josh", pathMatch: "full" },
  { path: "sen", redirectTo: "campanhas/vida-e-morte/Sen", pathMatch: "full" },
  { path: "anubis", redirectTo: "lendas", pathMatch: "full" },
  { path: "exodus", redirectTo: "campanhas/inverno-de-ossos/Exodus", pathMatch: "full" },
  { path: "yusuf", redirectTo: "campanhas/inverno-de-ossos/Yusuf", pathMatch: "full" }
];
