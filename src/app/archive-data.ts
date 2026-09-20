import {
  Federation,
  HunterRank,
  PhysicalEnhancement,
  AlchemySystem,
  DomainExpansionRule,
  ConstellationPact
} from './model/archive';

export interface WorldOverview {
  title: string;
  subtitle: string;
  sections: {
    title: string;
    tag: string;
    content: string[];
    highlight?: string;
  }[];
}

export const WORLD_OVERVIEW: WorldOverview = {
  title: 'DIRETRIZES GLOBAIS DA FEDERAÇÃO',
  subtitle: 'Dossiê confidencial sobre a quebra das fronteiras míticas, o Véu e a Energia Folclórica.',
  sections: [
    {
      title: 'A Quebra das Fronteiras & O Despertar',
      tag: 'HISTÓRIA // EVENTO PRIMORDIAL',
      content: [
        'Em uma era onde as fronteiras entre mito e realidade se desintegraram por completo, antigas lendas despertaram de seu longo esquecimento. Criaturas imortais, entidades colossais e monstros lendários que antes habitavam apenas canções populares e manuscritos arcaicos passaram a vagar livremente pela Terra.',
        'A humanidade viu-se forçada a responder de forma coordenada. Das cinzas do caos global surgiram as 15 Grandes Federações, coalizões mundiais unidas pelo mesmo objetivo: enfrentar o sobrenatural e assegurar a sobrevivência da civilização.',
        'Seus agentes de vanguarda, conhecidos como Caçadores, dominam a confluência entre tecnologia bélica moderna, conhecimentos folclóricos ancestrais e manipulação bioenergética.'
      ]
    },
    {
      title: 'O Véu & A Proteção dos Civis',
      tag: 'SEGURANÇA // PROTOCOLO SILENCIOSO',
      content: [
        'A esmagadora maioria da população global vive suas rotinas sem jamais perceber a presença de entidades sobrenaturais. A tênue barreira invisível que separa o cotidiano civil do mundo das lendas é chamada de "O Véu".',
        'As Federações operam incansavelmente para manter esse véu intacto. Incidentes místicos e devastações de grande escala são encobertos como anomalias meteorológicas, acidentes industriais ou abalos sísmicos para evitar colapso e histeria em massa.',
        'No entanto, o mundo místico exerce atração irresistível sobre os incautos: civis que por acidente ou curiosidade vislumbram o mundo mítico tornam-se presas primárias, pois a Energia Folclórica consome aqueles que se aproximam sem o devido preparo.'
      ],
      highlight: 'A cada combate de alto escalão, o Véu se desgasta. A pergunta crucial dos estrategistas globais não é se ele ruirá, mas o que restará quando ele finalmente cair.'
    },
    {
      title: 'A Energia Folclórica & O Despertar Prematuro',
      tag: 'SISTEMA DE PODER // BIOENERGIA PRIMORDIAL',
      content: [
        'A Energia Folclórica é o fluido primordial que conecta os mitos à realidade tangível. Ela impregna locais sagrados onde contos nasceram, relíquias arqueológicas e a própria linhagem de certas pessoas.',
        'Apenas indivíduos com exposição suficiente a essa energia adquirem a capacidade sensorial de enxergar criaturas míticas e interagir fisicamente com elas.',
        'Porém, a exposição não controlada é altamente corrosiva. O chamado "Despertar Prematuro" ocorre quando mentes despreparadas são inundadas pela energia: a psique humana se dissolve no misticismo, causando loucura, colapso de identidade e, no estágio terminal, mutação aberrante em híbridos grotescos entre humano e monstro.'
      ],
      highlight: 'Tríade do Poder: Elemento (Afinidade primordial do conceito mítico) • Variação (Estilo e técnicas operacionais) • Nível de Sincronização (Ressonância e escala de poder).'
    },
    {
      title: 'A Sede Viva da Federação',
      tag: 'INFRAESTRUTURA // ARQUITETURA ENCANTADA',
      content: [
        'A sede central da Federação de Caçadores transcende as leis da engenharia humana convencional. Erguida com feitiçarias primordiais e circuitos rúnicos arcanos, o complexo é dotado de consciência bioenergética própria.',
        'Móveis se reposicionam autonomamente, salas reorganizam sua distribuição espacial conforme a urgência das crises e corredores inteiros se metamorfoseiam enquanto os caçadores transitam por eles.',
        'É nesse epicentro pulsante que jovens pupilos recebem seus primeiros briefings operacionais e onde os maiores combatentes da história cruzam seus caminhos.'
      ]
    }
  ]
};

export const FEDERATIONS_DATA: Federation[] = [
  {
    id: 'valquiria',
    number: 1,
    name: 'Federação Valquíria',
    mythologicalOrigin: 'Mitologia Nórdica',
    region: 'Escandinávia & Norte da Europa',
    countries: ['Noruega', 'Suécia', 'Dinamarca', 'Finlândia', 'Islândia'],
    description: 'Baluarte dos guerreiros do norte. Seus caçadores combinam runas rituais nórdicas, aço glacial e técnicas de frenesi controlado para caçar gigantes de gelo, trolls e espectros de bravos caídos.',
    strategicRole: 'Especialistas em contenção climática severa e combate de choque pesado.',
    sigilPlaceholderLabel: 'BRASÃO VALQUÍRIA',
    sigilImage: '/valquiria.webp'
  },
  {
    id: 'guardioes-olimpicos',
    number: 2,
    name: 'Ordem dos Guardiões Olímpicos',
    mythologicalOrigin: 'Mitologia Greco-Romana',
    region: 'Mediterrâneo & Bálcãs',
    countries: ['Grécia', 'Itália', 'Chipre', 'Albânia', 'Bálcãs'],
    description: 'Fundada nas ruínas de santuários antigos. Seus combatentes são disciplinados em formações de falange tática mística, empunhando energias solares e armas forjadas com bronze celestial.',
    strategicRole: 'Comando estratégico, contenção de quimeras e divindades menores descontroladas.',
    sigilPlaceholderLabel: 'BRASÃO OLÍMPICO',
    sigilImage: '/guardioes-greco.webp'
  },
  {
    id: 'sombras-do-deserto',
    number: 3,
    name: 'Confederação das Sombras do Deserto',
    mythologicalOrigin: 'Mitologia do Oriente Médio & Mesopotâmica',
    region: 'Oriente Médio & Norte da África',
    countries: ['Egito', 'Arábia Saudita', 'Irã', 'Emirados Árabes', 'Jordânia'],
    description: 'Guardiões das areias proibidas e criptas faraônicas. Mestres em ocultação por miragens folclóricas, neutralização de gênios antigos (Djinns) e manipulação de ventos abrasadores. Foi em seu território egípcio que ocorreu a histórica crise de Anúbis e o resgate da vila aprisionada.',
    strategicRole: 'Operações de infiltração, rastreamento arqueológico e contenção de maldições arcanas.',
    sigilPlaceholderLabel: 'BRASÃO SOMBRAS DO DESERTO',
    sigilImage: '/sombras-do-deserto.webp'
  },
  {
    id: 'mae-ursa',
    number: 4,
    name: 'Federação da Mãe Ursa',
    mythologicalOrigin: 'Mitologia Eslava',
    region: 'Leste Europeu',
    countries: ['Rússia', 'Ucrânia', 'Polônia', 'Bielorrússia'],
    description: 'Resistentes e brutais como os invernos da taiga. Seus agentes canalizam a força feral das feras eslavas, espíritos das florestas antigas e ritos totêmicos de proteção inabalável.',
    strategicRole: 'Contenção de colossos florestais, anomalias de inverno perpétuo e defesas de cerco.',
    sigilPlaceholderLabel: 'BRASÃO MÃE URSA',
    sigilImage: '/mae-urso.webp'
  },
  {
    id: 'dragao-celestial',
    number: 5,
    name: 'Coalizão do Dragão Celestial',
    mythologicalOrigin: 'Mitologia do Leste Asiático',
    region: 'Ásia Oriental',
    countries: ['China', 'Japão', 'Coreia do Sul', 'Taiwan', 'Mongólia'],
    description: 'A vanguarda do equilíbrio entre chi elemental e bioengenharia espiritual. Mestres da esgrima sobrenatural, purificação de shikigamis e manipulação de fluxos energéticos de dragões celestes.',
    strategicRole: 'Combate de alta precisão veloz, purificação de miasmas e exorcismo de yokais.',
    sigilPlaceholderLabel: 'BRASÃO DRAGÃO CELESTIAL',
    sigilImage: '/draga-celestial.webp'
  },
  {
    id: 'savana-eterna',
    number: 6,
    name: 'União da Savana Eterna',
    mythologicalOrigin: 'Mitologia Africana & Yorubá',
    region: 'África Subsaariana',
    countries: ['África do Sul', 'Nigéria', 'Quênia', 'Gana', 'Angola'],
    description: 'Conectados às forças elementares ancestrais da terra e do trovão. Usam tambores de ressonância mística e infusão de espíritos guardiões para patrulhar imensas extensões territoriais.',
    strategicRole: 'Rastreamento sobrenatural de longa distância e neutralização de espíritos caóticos.',
    sigilPlaceholderLabel: 'BRASÃO SAVANA ETERNA',
    sigilImage: '/savana-eterna.webp'
  },
  {
    id: 'circulo-de-avalon',
    number: 7,
    name: 'Círculo de Avalon',
    mythologicalOrigin: 'Mitologia Céltica & Ciclo Arturiano',
    region: 'Ilhas Britânicas',
    countries: ['Inglaterra', 'Escócia', 'Irlanda', 'País de Gales'],
    description: 'Ordens cavalheirescas místicas que protegem os círculos de pedra e os túmulos sagrados. Mestres em encantamentos de bruma, armas sagradas rituais e proteção contra o Povo das Fadas.',
    strategicRole: 'Contenção dimensional, cancelamento de ilusões e duelos rituais de honra.',
    sigilPlaceholderLabel: 'BRASÃO AVALON',
    sigilImage: '/avalon.webp'
  },
  {
    id: 'aguias-do-amanhecer',
    number: 8,
    name: 'Federação das Águias do Amanhecer',
    mythologicalOrigin: 'Mitologia Nativo-Americana & Folclore Moderno',
    region: 'América do Norte',
    countries: ['Estados Unidos', 'Canadá'],
    description: 'Uma força militarizada altamente tecnológica que combina sensores espectrais avançados a relíquias tribais autênticas para deter anomalias criptozoológicas e wendigos.',
    strategicRole: 'Resposta rápida aeromóvel, apoio logístico pesado e contenção de criptídeos.',
    sigilPlaceholderLabel: 'BRASÃO ÁGUIAS DO AMANHECER',
    sigilImage: '/aguias-amanhecer.webp'
  },
  {
    id: 'senhores-do-fogo',
    number: 9,
    name: 'Conselho dos Senhores do Fogo',
    mythologicalOrigin: 'Mitologia do Sudeste Asiático',
    region: 'Sudeste Asiático',
    countries: ['Tailândia', 'Vietnã', 'Indonésia', 'Filipinas', 'Malásia'],
    description: 'Especialistas em piromancia folclórica e combate em arquipélagos vulcânicos e selvas densas. Seus caçadores enfrentam nagas de fogo e espíritos vulcânicos destrutivos.',
    strategicRole: 'Guerra de guerrilha em terreno denso e controle de bioenergia térmica.',
    sigilPlaceholderLabel: 'BRASÃO SENHORES DO FOGO',
    sigilImage: '/conselho-do-fogo.webp'
  },
  {
    id: 'tempestades-do-pacifico',
    number: 10,
    name: 'Ordem das Tempestades do Pacífico',
    mythologicalOrigin: 'Mitologia Polinésia & Aborígene',
    region: 'Oceania & Ilhas do Pacífico',
    countries: ['Austrália', 'Nova Zelândia', 'Fiji', 'Samoa', 'Polinésia'],
    description: 'Dominadores das correntes marítimas e do "Tempo do Sonho". Seus patrulheiros enfrentam monstros abissais dos oceanos profundos e protegem a barreira das marés cósmicas.',
    strategicRole: 'Vigilância naval profunda, contenção de leviatãs e manipulação das águas.',
    sigilPlaceholderLabel: 'BRASÃO TEMPESTADES DO PACÍFICO',
    sigilImage: '/tempestades-pacifico.webp'
  },
  {
    id: 'titas-esquecidos',
    number: 11,
    name: 'Liga dos Titãs Esquecidos',
    mythologicalOrigin: 'Mitologia Ibérica & Sul-Europeia',
    region: 'Sul da Europa',
    countries: ['Espanha', 'Portugal', 'França'],
    description: 'Vigilantes de antigas catacumbas e fortalezas medievais. Especializados em conter resquícios de titãs pré-olímpicos e lendas da península ibérica com armaduras pesadas encantadas.',
    strategicRole: 'Contenção de colossos subterrâneos e arquitetura defensiva anti-mítica.',
    sigilPlaceholderLabel: 'BRASÃO TITÃS ESQUECIDOS',
    sigilImage: '/titas-esquecidos.webp'
  },
  {
    id: 'espiritos-nordicos',
    number: 12,
    name: 'Coalizão dos Espíritos Nórdicos',
    mythologicalOrigin: 'Fusão Inuit & Viking Ártico',
    region: 'Extremo Norte Polar',
    countries: ['Canadá Ártico', 'Groenlândia', 'Islândia'],
    description: 'Operando nos desertos gélidos onde a sobrevivência humana já é um desafio extremo. Unem a espiritualidade xamânica inuit à resiliência dos clãs vikings do norte gelado.',
    strategicRole: 'Exploração em frio absoluto e guarda de portais das calotas polares.',
    sigilPlaceholderLabel: 'BRASÃO ESPÍRITOS NÓRDICOS',
    sigilImage: '/espiritos-nordicos.webp'
  },
  {
    id: 'guardioes-da-selva',
    number: 13,
    name: 'Federação dos Guardiões da Selva',
    mythologicalOrigin: 'Mitologia Sul-Americana & Amazônica',
    region: 'América do Sul',
    countries: ['Brasil', 'Peru', 'Colômbia', 'Venezuela', 'Bolívia'],
    description: 'Defensores da maior reserva de biodiversidade e energia folclórica viva do planeta. Lutam contra lendas colossais da floresta equatorial, curupiras, mapinguaris e entidades ancestrais dos rios.',
    strategicRole: 'Camuflagem botânica mística, guerra em biomas hostis e alquimia vegetal primordial.',
    sigilPlaceholderLabel: 'BRASÃO GUARDIÕES DA SELVA',
    sigilImage: '/guardioes-da-selva.webp'
  },
  {
    id: 'ceus-de-jade',
    number: 14,
    name: 'Conselho dos Céus de Jade',
    mythologicalOrigin: 'Mitologia Hindu & Budista Himalaia',
    region: 'Subcontinente Indiano & Himalaia',
    countries: ['Índia', 'Nepal', 'Butão', 'Sri Lanka'],
    description: 'Mestres de mantras arcanos, chakras míticos e filosofia cósmica. Enfrentam asurs, rakshasas e entidades cósmicas guardadas nas alturas proibidas do Himalaia.',
    strategicRole: 'Combate psíquico superior, anulação de ilusões cósmicas e selamentos kármicos.',
    sigilPlaceholderLabel: 'BRASÃO CÉUS DE JADE',
    sigilImage: '/ceus-de-jade.webp'
  },
  {
    id: 'ventos-austrais',
    number: 15,
    name: 'Confederação dos Ventos Austrais',
    mythologicalOrigin: 'Mistérios Antárticos & Lendas dos Mares do Sul',
    region: 'Antártica & Atlântico Sul',
    countries: ['Bases Antárticas Internacionais', 'Territórios Austrais'],
    description: 'A federação mais silenciosa e isolada da Terra. Vigia as profundezas congeladas do polo sul, onde seres cósmicos adormeceram muito antes do surgimento dos primeiros humanos.',
    strategicRole: 'Vigilância de horrores cósmicos ancestrais e quarentena de ruínas antárticas.',
    sigilPlaceholderLabel: 'BRASÃO VENTOS AUSTRAIS',
    sigilImage: '/ventos-austrais.webp'
  }
];

export const HUNTER_RANKS: HunterRank[] = [
  {
    id: 'F',
    title: 'Novato',
    badgeColor: '#6c757d',
    badgeBorder: '#adb5bd',
    description: 'Caçadores em estágio inicial de aprendizado. Possuem conhecimento teórico básico sobre lendas e controle rudimentar de Energia Folclórica.',
    abilities: 'Manipulação inicial e instável da Energia Folclórica, condicionamento físico de atleta comum.',
    missions: 'Pequenas anomalias urbanas, reconhecimento supervisionado e enfrentamento de criaturas folclóricas menores.',
    threatLevel: 'Ameaça Baixa (Espíritos Menores)',
    exampleProfile: 'Recrutas recém-aprovados nas academias federais.'
  },
  {
    id: 'E',
    title: 'Aspirante',
    badgeColor: '#28a745',
    badgeBorder: '#4cd964',
    description: 'Caçadores com missões reais concluídas em campo. Começam a catalogar fraquezas específicas das lendas e a usar seu Caderno Alquímico.',
    abilities: 'Aumento moderado em força e agilidade, uso das primeiras poções básicas de fortalecimento e primeiros socorros místico.',
    missions: 'Contenção de pequenos bandos de criaturas míticas e assistência em perícias de campo.',
    threatLevel: 'Ameaça Local Controlada',
    exampleProfile: 'Caçadores com 6 a 12 meses de combate ativo.'
  },
  {
    id: 'D',
    title: 'Iniciante Consolidado',
    badgeColor: '#17a2b8',
    badgeBorder: '#5bc0de',
    description: 'Agentes com desenvoltura comprovada em combate real. Demonstram entendimento sólido das mecânicas da Energia Folclórica e afinidade com elementos.',
    abilities: 'Controle elementar básico, reforços físicos de Nível 1 estáveis e preparo de poções eficazes de neutralização.',
    missions: 'Lendas de nível intermediário, investigações em zonas rurais e contenção de aparições perigosas.',
    threatLevel: 'Ameaça Regional Moderada',
    exampleProfile: 'Veteranos de missões preliminares.'
  },
  {
    id: 'C',
    title: 'Caçador Pleno',
    badgeColor: '#007bff',
    badgeBorder: '#4da3ff',
    description: 'A espinha dorsal das Federações. Combatentes competentes, experientes e capazes de operar em táticas conjuntas de esquadrão sob pressão extrema.',
    abilities: 'Manipulação avançada da Energia Folclórica, acesso a poções refinadas de neutralização e domínio total de múltiplos reforços físicos Nível 1.',
    missions: 'Lendas de porte médio-alto, incursões em tocas míticas e caçadas táticas em equipe.',
    threatLevel: 'Ameaça Severa em Zona Aberta',
    exampleProfile: 'Líderes de esquadrões de campo.'
  },
  {
    id: 'B',
    title: 'Caçador Experiente',
    badgeColor: '#ffc107',
    badgeBorder: '#ffdb70',
    description: 'Veteranos de dezenas de batalhas que conhecem a fundo as fraquezas ocultas das lendas. Podem comandar operações de grande porte e planejar emboscadas complexas.',
    abilities: 'Especialização em até dois Reforços Físicos (Nível 2), manuseio de armas forjadas com drops de monstros e habilidades de alto impacto.',
    missions: 'Missões de alto risco, confronto direto contra lendas lendárias perigosas e incursões em territórios hostis.',
    threatLevel: 'Ameaça Crítica / Destruição Local',
    exampleProfile: 'Markus-Wolf (Rastreador Implacável das Fronteiras), Sen e veteranos de operações táticas.'
  },
  {
    id: 'A',
    title: 'Caçador de Elite',
    badgeColor: '#fd7e14',
    badgeBorder: '#ffa256',
    description: 'Combatentes do mais alto escalão operacional da humanidade. Reverenciados por feitos que mudaram o rumo de crises inteiras, possuem acesso a técnicas lendárias raras.',
    abilities: 'Manipulação refinada de múltiplos elementos, Reforços Físicos em Nível 3, capacidade de firmar pactos com Constelações Lendárias.',
    missions: 'Confronto com entidades quase imortais, contenção de quebras catastróficas do Véu e missões de sobrevivência global.',
    threatLevel: 'Catástrofe Continental',
    exampleProfile: 'Comandantes Supremos de Setor, mestres sêniores da Academia (como Prof. Stateham em sua docência) e agentes táticos.'
  },
  {
    id: 'S',
    title: 'Lenda Viva',
    badgeColor: '#dc3545',
    badgeBorder: '#ff6b6b',
    description: 'Guerreiros cujo nome se fundiu ao próprio mito que combatem. Sua compreensão da Energia Folclórica transcende a biologia humana normal.',
    abilities: 'Domínio mítico total, desenvolvimento de Expansão de Domínio, autoridade sobre a vida e a morte em combate de escala titânica.',
    missions: 'Batalhas existenciais que decidem o futuro da civilização e aniquilação de divindades caídas.',
    threatLevel: 'Ameaça de Aniquilação Global',
    exampleProfile: 'Os Pilares da Federação (como Mestre Stateham em seu ápice nos Cinco Punhos) e campeões ancestrais.'
  },
  {
    id: 'SS',
    title: 'O Mais Forte (Transcendente)',
    badgeColor: '#b197fc',
    badgeBorder: '#d0bfff',
    description: 'O ápice absoluto e inquestionável. Indivíduos que quebraram todos os tetos de poder imagináveis, operando em parâmetros divinos que assustam tanto caçadores quanto lendas ancestrais.',
    abilities: 'Manipulação de realidades, criação e desintegração de matéria em nível atômico, Expansão de Domínio Absoluta (Origem da Criação / Mundo Perfeito), onipresença territorial.',
    missions: 'Entidades cósmicas, selos divinos rompidos e preservação da estrutura da própria realidade.',
    threatLevel: 'Risco Existencial Cosmico',
    exampleProfile: 'O Professor (Considerado unanimemente o caçador mais forte de toda a história).'
  }
];

export const PHYSICAL_ENHANCEMENTS: PhysicalEnhancement[] = [
  {
    id: 'forca',
    name: 'Reforços de Força',
    concept: 'Concentração de Energia Folclórica na musculatura e estrutura óssea, ampliando a capacidade de carga, tração e potência de impacto.',
    iconPlaceholderLabel: 'ÍCONE DE FORÇA',
    levels: [
      {
        levelNumber: 1,
        name: 'Força Sobrenatural',
        description: 'Capacidade de erguer até 3 vezes o próprio limite humano corporal. Resistência aumentada a estiramentos e fraturas por esforço bruto.'
      },
      {
        levelNumber: 2,
        name: 'Força Colossal',
        description: 'Multiplica a força física em até 10 vezes. Golpes capazes de pulverizar placas maciças de aço e rocha sólida com ondas de choque místicas.'
      },
      {
        levelNumber: 3,
        name: 'Força Mítica',
        description: 'Potência colossal capaz de demolir edificações inteiras com golpes diretos e nocautear golens e gigantes míticos com impactos de escala titânica.'
      }
    ]
  },
  {
    id: 'velocidade',
    name: 'Reforços de Velocidade',
    concept: 'Aceleração bioelétrica das sinapses e articulações através de microfluxos de Energia Folclórica, conferindo agilidade sobre-humana.',
    iconPlaceholderLabel: 'ÍCONE DE VELOCIDADE',
    levels: [
      {
        levelNumber: 1,
        name: 'Agilidade do Vento',
        description: 'Movimenta-se com o dobro da velocidade de um velocista olímpico, permitindo esquivas em fração de segundo e arrancadas surpreendentes.'
      },
      {
        levelNumber: 2,
        name: 'Passos do Relâmpago',
        description: 'Deslocamentos velozes que deixam rastros cintilantes de energia no ar. Desfere sequências de golpes mais rápidas do que o reflexo inimigo pode acompanhar.'
      },
      {
        levelNumber: 3,
        name: 'Movimento Intangível',
        description: 'Velocidade beirando a barreira do som. Torna-se invisível ao olho nu, atacando múltiplos pontos cardeais em frações imperceptíveis de segundo.'
      }
    ]
  },
  {
    id: 'resistencia',
    name: 'Reforços de Resistência',
    concept: 'Densificação da epiderme e órgãos internos através da ressonância folclórica, bloqueando impactos cinéticos e danos térmicos.',
    iconPlaceholderLabel: 'ÍCONE DE RESISTÊNCIA',
    levels: [
      {
        levelNumber: 1,
        name: 'Pele de Pedra',
        description: 'O corpo adquire a consistência da pedra polida, dispersando cortes superficiais, fragmentos de estilhaços e impactos contundentes comuns.'
      },
      {
        levelNumber: 2,
        name: 'Corpo de Aço',
        description: 'Resiste a mordidas esmagadoras de feras lendárias e impactos diretos de criaturas de grande porte. Alta tolerância a frio polar e chamas abrasadoras.'
      },
      {
        levelNumber: 3,
        name: 'Armadura Elemental',
        description: 'Invulnerabilidade temporária a agressões energéticas elementais (chamas míticas, descargas e peçonhas arcanas), absorvendo energia para regeneração celular.'
      }
    ]
  },
  {
    id: 'sentidos',
    name: 'Reforços de Sentidos',
    concept: 'Expansão hiper-sensorial que ativa a visão espectral, audição de longo alcance e o pressentimento instintivo da presença mítica.',
    iconPlaceholderLabel: 'ÍCONE DE SENTIDOS',
    levels: [
      {
        levelNumber: 1,
        name: 'Sentidos Elevados',
        description: 'Visão e audição aguçadas a centenas de metros. Detecção de sutis alterações térmicas e vibrações acústicas de predadores no ar.'
      },
      {
        levelNumber: 2,
        name: 'Percepção Espiritual',
        description: 'Capacidade de enxergar em espectros infravermelho e ultravioleta. Detecta a presença de espectros invisíveis e correntes ocultas de Energia Folclórica.'
      },
      {
        levelNumber: 3,
        name: 'Visão Mítica',
        description: 'Enxerga além das ilusões e miragens da realidade física. Ouve a aproximação de entidades míticas a quilômetros de distância e antecipa intenções hostis de ataque.'
      }
    ]
  },
  {
    id: 'especiais',
    name: 'Habilidades Especiais & Dreno',
    concept: 'Aplicações singulares da energia em combate (técnicas de salto cinético, ancoramento sísmico e canalização em projéteis).',
    iconPlaceholderLabel: 'ÍCONE DE ESPECIAIS',
    levels: [
      {
        levelNumber: 1,
        name: 'Canalização Básica',
        description: 'Infusão de energia em calçados e punhos para saltos acrobáticos e ancoragem segura em superfícies verticais.'
      },
      {
        levelNumber: 2,
        name: 'Dispersão de Choque',
        description: 'Liberação de pulsos defensivos que neutralizam projéteis inimigos e criam espaço tático ao redor do caçador.'
      },
      {
        levelNumber: 3,
        name: 'Sobrecarga Mitológica',
        description: 'Canalização máxima dos canais energéticos para dobrar temporariamente todos os efeitos ao custo de alto risco de exaustão.'
      }
    ]
  }
];

export const ALCHEMY_SYSTEM: AlchemySystem = {
  concept: 'Diferente da química convencional de laboratório, a Alquimia dos Caçadores é um processo psíquico-energético que manipula a Energia Folclórica das criaturas enfrentadas para conceder vantagens táticas momentâneas.',
  creationMethod: 'Não utiliza matérias-primas físicas com frascos e ervas comuns. A fórmula depende do estado mental, foco respiratório, volume de Energia Folclórica canalizada e a clareza da imaginação do Caçador quanto ao efeito desejado.',
  notebookRule: 'Ao ingressar em uma das 15 Federações, o Caçador recebe seu Caderno Alquímico pessoal. Cada federação ensina tradições e métodos rúnicos distintos de notação alquímica.',
  limitations: 'O caçador só pode ativar as poções do seu próprio Caderno Alquímico, que ressoa exclusivamente com sua frequência bioenergética. Embora existam renomados Cientistas Alquímicos nas Federações, é terminantemente impossível um caçador usar poções prontas de outros mestres.',
  categories: [
    {
      title: 'Poções de Fortalecimento Físico',
      description: 'Alteram e amplificam temporariamente as capacidades fisiológicas do caçador, proporcionando surtos de vigor, estancamento instantâneo de hemorragias ou aceleração de reflexos em momentos críticos.',
      examples: ['Elixir do Fôlego Imóvel', 'Tônico da Medula de Titã', 'Infusão de Adrenalina Folclórica']
    },
    {
      title: 'Poções de Neutralização Sobrenatural',
      description: 'Fórmulas projetadas para neutralizar efeitos hostis diretos causados por mitos, como anulação de paralisias espectrais, imunidade temporária a venenos místicos e dissipação de miasmas corrosivos.',
      examples: ['Solução de Quebra-Ilusão', 'Filtro Anti-Maldição', 'Neutralizador de Paralisia de Sombra']
    },
    {
      title: 'Poções Específicas para Lendas',
      description: 'Elixires de alta sofisticação que exploram fraquezas lendárias documentadas de monstros específicos, desestabilizando o núcleo de energia da criatura durante o combate.',
      examples: ['Bálsamo de Cinzas Sagradas', 'Extrato de Fogo Fátuo Sintético', 'Condutor de Prata Fluida']
    }
  ]
};

export const WEAPON_FORGE_RULES = {
  concept: 'Armas comuns de fogo ou lâminas de aço industrial não causam danos letais à maioria das lendas míticas despertas.',
  rules: [
    {
      title: 'Forja com Drops de Lendas',
      description: 'Para que uma arma realmente fira e destrua seres lendários, ela deve ser forjada utilizando carcaças, chifres, dentes, escamas ou essências deixadas por monstros derrotados (drops de combate).'
    },
    {
      title: 'Os Ferreiros da Federação',
      description: 'Os caçadores devem levar os fragmentos coletados aos artesãos especializados das oficinas da sua federação, ou adquirir ligas e catalisadores exclusivos homologados.'
    },
    {
      title: 'Custo & Criatividade do Caçador',
      description: 'Os insumos da Federação possuem custo operacional altíssimo. A inventividade do próprio caçador na combinação de materiais míticos colhidos é o fator primordial que ditará a letalidade, peso místico e raridade da arma.'
    }
  ]
};

export const DOMAIN_EXPANSION_RULES: DomainExpansionRule = {
  concept: 'A Expansão de Domínio é a manifestação mais sublime e aterrorizante que um caçador pode alcançar: expandir o espaço inato de sua alma sobre o mundo real através de uma barreira energética temporária imbuída de sua vontade absoluta. Diferencia-se categoricamente do "Domínio Inato" das Lendas divinas (como Anúbis), que não requer barreira de combate e age como uma extensão viva e permanente de sua própria existência sobre o território físico.',
  rulesForHunters: [
    '1. Conexão Narrativa Vital: A natureza da expansão deve fazer sentido íntimo com o passado, traumas e biografia do personagem, não apenas com o elemento que ele manipula.',
    '2. Habilidades de Domínio Negociadas: O domínio inicial deve conceder de 2 a 3 habilidades bem delimitadas, acordadas rigorosamente com o Mestre de Jogo.',
    '3. Fraquezas Obrigatórias: Todo domínio sem exceção possui contra-pesos severos (dreno contínuo devastador, limites de alcance físico ou instabilidade das criaturas criadas).',
    '4. Condições e Gatilhos de Ativação: Caçadores em desenvolvimento necessitam de gatilhos situacionais ou exigências de batalha para erguer seu território místico.',
    '5. O Canto Ritual de Ativação: Toda expansão de domínio exige a declamação vocal obrigatória de um poema/canto ritual de 4 versos antes de se materializar no plano físico.'
  ],
  supremeExample: {
    title: 'Reino da Criação Infinita / Mundo Perfeito',
    bearer: 'O Professor (Rank SS - O Mais Forte)',
    supremeAbility: 'A Origem da Criação',
    description: 'Dentro de seu domínio, o usuário funde sua essência à totalidade do espaço criado, tornando-se onipresente e capaz de manipular a criação e destruição da matéria e da vida em nível atômico com um único pensamento. Foi essa habilidade suprema que pulverizou Anúbis na campanha Vida e Morte.',
    weaknesses: [
      'Limite de Tempo & Dreno Brutal: Manter o território ativo exige volumes astronômicos de Energia Folclórica; quanto mais vida e matéria cria ou aniquila, mais veloz é o esgotamento.',
      'Criaturas de Consciência Própria: Entidades criadas de altíssima complexidade podem desenvolver centelha de consciência e, em raríssimas ocasiões, resistir a ordens diretas.',
      'Área Física Delimitada: Se múltiplos alvos operarem fora do raio esférico do domínio, ele não pode ser expandido indefinidamente pelo espaço.'
    ],
    activationChant: [
      '"Do pó ao ser, da mente à criação,',
      'Neste domínio, sou pura ascensão.',
      'Tudo que existe, moldo à minha mão,',
      'Matéria e vida, em perfeita união."'
    ]
  }
};

export const CONSTELLATIONS_DATA: ConstellationPact[] = [
  {
    id: 'serpentae-lux',
    name: 'Serpentae Lux',
    title: 'A Serpente da Sabedoria Cósmica',
    concept: 'Entidade celestial mítica que vigia os horizontes astrais. Não age por heroísmo nem malevolência, mas sim como guardiã de conhecimentos proibidos que a humanidade esqueceu.',
    lore: 'Serpentae Lux desliza entre as estrelas ancestrais, emanando luz hipnótica. Quando um Caçador se encontra em desespero crítico, a serpente de luz desce em sussurros para oferecer barganhas de poder arcanas.',
    priceDemanded: 'Para receber seu auxílio proibido, o Caçador deve sacrificar parcelas de sua memória ou sanidade. Serpentae Lux devora memórias queridas da infância ou cognição da vítima, empurrando o caçador para uma loucura lenta e inexorável ao longo do tempo.',
    powersOffered: [
      'Revelação instantânea de fraquezas ocultas e nomes verdadeiros de lendas antigas.',
      'Acesso temporário a magias primordiais da luz capazes de rasgar barreiras míticas.',
      'Clarividência tática sobre as próximas ações do adversário durante o combate.'
    ]
  }
];
