import {Actor} from './actor';
import {Ability} from './ability';
import {Weapon} from './weapon';

export interface Character {
  imageURI: string;
  codename: string;
  name: string;
  age: number;
  height: number;
  country: string;
  description: string;
  history: string;
  abilities: Ability[];
  actor: Actor;
  deeds: string[];
  weapons: Weapon;
}
