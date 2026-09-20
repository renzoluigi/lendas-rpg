import { Legend } from './model/legend';

export const LEGENDS: Legend[] = [
  {
    id: 'anubis',
    codename: 'Anubis',
    name: 'Anúbis',
    title: 'Entidade Lendária do Egito',
    mythology: 'Mitologia Egípcia',
    federationTerritory: 'Egito (Confederação das Sombras do Deserto)',
    threatLevel: 'Entidade Lendária',
    status: 'Exterminada',
    campaign: 'vida-e-morte',
    campaignTitle: 'Vida e Morte — Primeira Missão',
    imageURI: '/anubis.webp',
    description: 'Uma entidade mitológica de poder incomensurável que se manifestou no Egito. Seu domínio inato aprisionou uma vila inteira de civis e desafiou a Federação, sendo enfrentado diretamente pelo Caçador Mais Forte.',
    history: `Anúbis manifestou-se em uma região do Egito que começou a apresentar níveis anormalmente altos de energia folclórica e desaparecimentos massivos de pessoas.

O acesso ao local se dava através de um enigma em um rio — uma ponte representando a passagem da vida. Ao cruzarem a água, os caçadores entraram no Domínio de Anúbis.

Diferente de uma barreira comum de combate, o local era um Domínio Inato: uma extensão da própria existência da entidade, onde uma vila de civis permanecia presa e aterrorizada. Enquanto Sen e Josh enfrentavam os minions gerados pelo domínio para proteger as pessoas, o Caçador Mais Forte assumiu o combate direto contra Anúbis em uma disputa de sobreposição de domínios, culminando na vitória do Mais Forte através de seu domínio de criação e manipulação atômica.`,
    domain: {
      name: 'Domínio Inato de Anúbis',
      type: 'Domínio Inato',
      concept: 'Uma manifestação inata da própria existência da entidade, e não uma barreira criada para regras de combate.',
      description: 'Dentro do domínio havia uma vila com pessoas presas e aterrorizadas, cercadas pela presença opressora da entidade e por suas criaturas protetoras.',
      manifestationArea: 'Egito // Passagem da Vida'
    },
    minions: [
      {
        name: 'Minions de Anúbis',
        threat: 'Criaturas do Domínio',
        description: 'Criaturas menores criadas pelo domínio de Anúbis para patrulhar o território, proteger a entidade e eliminar invasores.'
      }
    ],
    defeatDetails: {
      defeatedBy: 'O Mais Forte',
      abilityUsed: 'Expansão de Domínio: A Origem da Criação',
      summary: 'Após uma disputa de sobreposição de domínios turno após turno, o Mais Forte expandiu seu próprio domínio, transformando o ambiente em uma área verde de pura criação e perfeição e manipulando a matéria atômica para derrotar a entidade.'
    },
    relatedCharacters: [
      {
        codename: 'Professor',
        name: 'O Professor',
        role: 'Exterminador da Divindade',
        campaign: 'vida-e-morte'
      },
      {
        codename: 'Sen',
        name: 'Sen',
        role: 'Sobrevivente & Combatente de Minions',
        campaign: 'vida-e-morte'
      },
      {
        codename: 'Josh',
        name: 'Josh',
        role: 'Sobrevivente & Protetor da Vila',
        campaign: 'vida-e-morte'
      },
      {
        codename: 'Stateham',
        name: 'Professor Stateham',
        role: 'Instrutor dos Agentes Enviados',
        campaign: 'vida-e-morte'
      }
    ]
  }
];
