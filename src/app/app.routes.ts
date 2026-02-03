import { Routes } from '@angular/router';
import {Home} from './components/home/home';
import {Characters} from './components/pages/characters/characters';
import {CharacterRecord} from './components/pages/character-record/character-record';

export const routes: Routes = [
  {path:"", component: Home},
  {path:"personagens", component: Characters},
  {path:"personagens/:codename", component: CharacterRecord}
];
