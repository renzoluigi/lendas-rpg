export type HunterRankId = 'F' | 'E' | 'D' | 'C' | 'B' | 'A' | 'S' | 'SS';

export interface HunterRank {
  id: HunterRankId;
  title: string;
  badgeColor: string;
  badgeBorder: string;
  description: string;
  abilities: string;
  missions: string;
  threatLevel: string;
  exampleProfile?: string;
}

export interface Federation {
  id: string;
  number: number;
  name: string;
  mythologicalOrigin: string;
  region: string;
  countries: string[];
  description: string;
  strategicRole: string;
  sigilPlaceholderLabel: string;
}

export interface PhysicalEnhancementLevel {
  levelNumber: 1 | 2 | 3;
  name: string;
  description: string;
}

export interface PhysicalEnhancement {
  id: string;
  name: string;
  concept: string;
  levels: PhysicalEnhancementLevel[];
  iconPlaceholderLabel: string;
}

export interface AlchemyCategory {
  title: string;
  description: string;
  examples: string[];
}

export interface AlchemySystem {
  concept: string;
  creationMethod: string;
  notebookRule: string;
  limitations: string;
  categories: AlchemyCategory[];
}

export interface DomainExpansionRule {
  concept: string;
  rulesForHunters: string[];
  supremeExample: {
    title: string;
    bearer: string;
    supremeAbility: string;
    description: string;
    weaknesses: string[];
    activationChant: string[];
  };
}

export interface ConstellationPact {
  id: string;
  name: string;
  title: string;
  concept: string;
  lore: string;
  priceDemanded: string;
  powersOffered: string[];
}
