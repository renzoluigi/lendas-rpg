export type LegendStatus = 'Ativa' | 'Contida' | 'Exterminada';

export interface LegendMinion {
  name: string;
  threat: string;
  description: string;
}

export interface LegendDrop {
  name: string;
  rarity: string;
  utility: string;
}

export interface LegendDomain {
  name: string;
  type: 'Domínio Inato' | 'Expansão de Domínio';
  concept: string;
  description: string;
  manifestationArea: string;
}

export interface Legend {
  id: string;
  codename: string;
  name: string;
  title: string;
  mythology: string;
  federationTerritory: string;
  threatLevel: string;
  status: LegendStatus;
  campaign: string;
  campaignTitle: string;
  imageURI: string;
  quote?: string;
  description: string;
  history: string;
  domain: LegendDomain;
  minions?: LegendMinion[];
  drops?: LegendDrop[];
  defeatDetails?: {
    defeatedBy: string;
    abilityUsed: string;
    summary: string;
  };
  relatedCharacters?: {
    codename: string;
    name: string;
    role: string;
    campaign: string;
  }[];
}
