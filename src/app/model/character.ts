import { Actor } from './actor';
import { Ability } from './ability';
import { Weapon } from './weapon';
import { HunterRankId } from './archive';

export interface CharacterRelation {
  role: string;
  targetCodename: string;
  targetName: string;
}

export interface Character {
  imageURI: string;
  codename: string;
  name: string;
  age?: number;
  height?: number;
  country: string;
  description: string;
  history: string;
  abilities: Ability[];
  actor?: Actor;
  deeds: string[];
  weapons?: Weapon;
  campaign?: string;
  isCanonical?: boolean;
  title?: string;
  classification?: string;
  threatLevel?: string;
  quote?: string;
  equipmentSummary?: string;
  appearanceCampaigns?: string[];
  relations?: CharacterRelation[];
  rank?: HunterRankId;
  federation?: string;
  physicalSpecialties?: string[];
  domainName?: string;
  domainChant?: string[];
}

