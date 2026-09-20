export interface MissionParticipant {
  codename: string;
  name: string;
  role: string;
  campaign?: string;
  imageURI?: string;
}

export interface MissionChapter {
  title: string;
  content: string[];
}

export interface Mission {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  campaign: string;
  location: string;
  territory: string;
  status: 'Concluída' | 'Em Andamento' | 'Fracassada';
  threatLevel: string;
  primaryTarget: string;
  participants: MissionParticipant[];
  summary: string;
  briefing: {
    incident: string;
    objective: string;
    anomalyType: string;
  };
  outcome: {
    result: string;
    casualties: string;
    aftermath: string;
  };
  chapters: MissionChapter[];
}
