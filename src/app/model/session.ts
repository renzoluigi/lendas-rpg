export interface SessionEvent {
  title: string;
  type: 'combate' | 'investigacao' | 'roleplay' | 'descanso' | 'viagem';
  icon: string;
}

export interface SessionEnemy {
  name: string;
  pv: number;
  defesa: number;
  danoMedio: string;
  papel?: string;
  habilidades?: string[];
}

export interface SessionImageSlot {
  title: string;
  description: string;
  prompt: string;
  src?: string;
  alt?: string;
}

export interface PartyMember {
  name: string;
  role: string;
  avatar: string;
  details: string;
  quirk?: string;
}

export interface SessionSection {
  id?: string;
  title: string;
  tagline?: string;
  content: string[];
  imageSlot?: SessionImageSlot;
  partyMembers?: PartyMember[];
  callout?: {
    type: 'pista' | 'lore' | 'aviso';
    title: string;
    text: string;
  };
}

export interface CampaignDay {
  day: number;
  title: string;
  subtitle: string;
  status: 'disponivel' | 'bloqueado' | 'futuro';
  episode?: number;
  events?: SessionEvent[];
  sections: SessionSection[];
  enemies?: SessionEnemy[];
  loot?: string[];
  levelUp?: {
    newLevel: number;
    hpDice: string;
    efDice: string;
    notes?: string;
  };
}
