export interface GuideSection {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
}

export interface HunterFunction {
  name: string;
  role: string;
  mandatorySkill: string;
  initialHp: string;
  levelHp: string;
  initialEnergy: string;
  levelEnergy: string;
  energyKeyAttr: string;
  concept: string;
  equipment: string[];
  specialMechanic?: {
    name: string;
    description: string;
  };
}

export interface CerneInfo {
  name: string;
  theme: string;
  manifestation: string;
  sampleTechnique: string;
  techniqueDesc: string;
  icon: string;
}

export interface FederationGuideItem {
  id: string;
  number: string;
  name: string;
  mythology: string;
  regions: string;
  description: string;
  doctrine: string;
}

export interface ImagePlaceholderItem {
  id: string;
  title: string;
  location: string;
  aspectRatio: string;
  concept: string;
  promptEn: string;
  promptPt: string;
}

export const IMAGE_PLACEHOLDERS: ImagePlaceholderItem[] = [
  {
    id: 'IMG-01',
    title: 'O Juramento do Crepúsculo no Mapa-Múndi',
    location: 'Capa / Hero do Guia de Introdução',
    aspectRatio: '16:9 (Horizontal Panorâmica)',
    concept: 'Caçadores novatos reunidos ao redor de uma grande mesa de guerra em pedra rúnica com mapa-múndi iluminado por runas douradas e sombras misteriosas.',
    promptEn: 'Cinematic wide dark fantasy shot, a diverse group of modern folklore monster hunters gathered around a massive ancient stone war table with a glowing mystical world map. Atmospheric volumetric lighting, shadows, cracked silver eye brooches on their tactical trench coats, arcane glowing sigils, grim determination, dark fantasy atmosphere, Hyper-detailed 8k, Unreal Engine 5 render style, moody cinematic tones, amber and gold accents.',
    promptPt: 'Tomada panorâmica cinematográfica de dark fantasy, grupo diversificado de caçadores de monstros contemporâneos reunidos ao redor de uma mesa de guerra de pedra com mapa-múndi místico brilhante. Iluminação volumétrica atmosférica, broches de prata com olho quebrado em casacos táticos, runas arcanas brilhantes, detalhes em dourado e âmbar, estilo 8k ultra detalhado.'
  },
  {
    id: 'IMG-02',
    title: 'O Broche do Crepúsculo',
    location: 'Capítulo III — O Broche do Crepúsculo',
    aspectRatio: '1:1 (Quadrada de Detalhe)',
    concept: 'Macro close-up do Broche do Crepúsculo pousado sobre veludo escuro e pergaminhos antigos: um círculo quebrado de prata enegrecida com um olho esculpido no centro emitindo leve reflexo prateado.',
    promptEn: 'Macro photographic close-up of an ancient mystical brooch resting on weathered dark leather and arcane parchment. The brooch is a broken circle made of blackened tarnished silver, with a stylized carved eye at its center reflecting faint ethereal light. Intricate handcrafted engravings, dark moody lighting, cinematic depth of field, dramatic shadows, dark fantasy heirloom aesthetic, ultra-sharp 8k.',
    promptPt: 'Close-up macro fotográfico de um broche místico antigo repousando sobre couro escuro envelhecido e pergaminhos arcanos. O broche é um círculo quebrado de prata enegrecida e desgastada, com um olho estilizado esculpido ao centro refletindo luz etérea. Iluminação sombria, sombras dramáticas, estética de herança dark fantasy, ultra nítido.'
  },
  {
    id: 'IMG-03',
    title: 'As Seis Funções de Caça em Formação Tática',
    location: 'Capítulo IV — As Funções de Combate',
    aspectRatio: '16:9 (Horizontal Tática)',
    concept: 'Os seis arquétipos de caçadores (Vanguarda com espada e escudo, Retaguarda com arco, Conjurador com foco rúnico, Curandeiro com kit medicinal, Investigador com lupa e rapieira, Alquimista com frascos luminosos) em formação defensiva contra a névoa.',
    promptEn: 'Dynamic concept art of six specialized monster hunter archetypes standing in a tactical combat formation against creeping misty darkness. Left to right: heavy armored Vanguard with longsword and shield, agile Vanguard sniper with composite bow, robed arcanist Spellcaster channeling raw folklore energy, Field Healer with apothecary bag, sharp Investigator with rapier and lantern, and Alchemist with glowing chemical vials. High-contrast dark fantasy concept art, atmospheric mist, cinematic lighting, sharp character designs, 8k resolution.',
    promptPt: 'Arte conceitual dinâmica de seis arquétipos de caçadores em formação tática contra névoa escura. Vanguarda com espada e escudo, Atirador de Retaguarda com arco, Conjurador canalizando energia folclórica, Curandeiro com bolsa médica, Investigador com lanterna e rapieira, e Alquimista com frascos químicos brilhantes. Arte conceitual dark fantasy com alto contraste e iluminação cinematográfica.'
  },
  {
    id: 'IMG-04',
    title: 'Despertar do Cerne: A Semente da Energia Folclórica',
    location: 'Capítulo VI — O Cerne e as Técnicas',
    aspectRatio: '3:2 (Retrato Tático)',
    concept: 'Caçador em transe focado enquanto veias arcanas escurecem e energia bioenergética mística emana de suas mãos em espirais de sangue e névoa.',
    promptEn: 'Close-up portrait of a dark fantasy hunter awakening their inner folkloric power Core (Cerne). Dark blackened veins spreading across arms and neck, hands glowing with raw mystical folklore bio-energy, subtle swirls of blood and misty smoke intertwining in the air. Intimate, intense emotional expression, deep shadows, cinematic ambient lighting, hyper-detailed skin texture, mystical aura, 8k render.',
    promptPt: 'Retrato em plano médio de um caçador de dark fantasy despertando seu Cerne de energia folclórica interior. Veias negras se espalhando pelos braços e pescoço, mãos emanando bioenergia mística, redemoinhos sutis de sangue e névoa no ar. Expressão intensa, sombras profundas, aura mística, textura de alta fidelidade.'
  },
  {
    id: 'IMG-05',
    title: 'Expansão de Domínio: O Salão dos Reflexos',
    location: 'Capítulo VII — Expansão de Domínio',
    aspectRatio: '16:9 (Cenário Imersivo)',
    concept: 'Um domínio absoluto aberto no meio de uma floresta: o ambiente se estilhaça em milhares de espelhos flutuantes no vazio escuro, onde sombras e ilusões refletem cópias infinitas sob névoa espectral.',
    promptEn: 'Epic domain expansion environment illustration: "Hall of Endless Reflections". Reality fractures into an immense surreal dark void filled with hundreds of shattered floating antique mirrors and crystalline glass shards. Each mirror reflects eerie distorted alternate versions of reality and shadowy hunter figures. Dark fantasy, Jujutsu Kaisen domain expansion aesthetic blended with gothic folklore, haunting volumetric fog, dark obsidian and shattered silver palette, cinematic 8k masterpiece.',
    promptPt: 'Ilustração épica de expansão de domínio: "O Salão dos Reflexos". A realidade se estilhaça num imenso vácuo escuro repleto de centenas de espelhos antigos e fragmentos de vidro flutuantes. Cada espelho reflete versões distorcidas da realidade e silhuetas de caçadores. Estética de expansão de domínio com folclore gótico, névoa volumétrica assombrosa, paleta de obsidiana e prata estilhaçada.'
  },
  {
    id: 'IMG-06',
    title: 'A Constelação: A Não-Nascida',
    location: 'Capítulo VIII — Constelações e Pactos',
    aspectRatio: '16:9 (Sombria e Enigmática)',
    concept: 'Um caçador ferido encarando um espelho rachado em um quarto sombrio; no reflexo, sua imagem tem um atraso sutil e uma presença celestial não-nascida sussurra em seu ombro como uma constelação sem estrelas.',
    promptEn: 'Haunting dark psychological fantasy scene: a wounded exhausted hunter standing before a cracked antique mirror in a dimly lit abandoned chamber. In the mirror reflection, the hunter moves with an unsettling half-second delay, and behind the reflection looms the faint, faceless cosmic silhouette of "The Unborn" constellation—a starless cosmic phantom whispering forbidden promises into their ear. Atmospheric horror, melancholic beauty, muted colors with faint starry dust, cinematic masterpiece, 8k.',
    promptPt: 'Cena psicológica de horror e fantasia sombria: um caçador exausto e ferido diante de um espelho antigo rachado num quarto mal iluminado. No reflexo, a imagem se move com meio segundo de atraso, e atrás do reflexo paira a silhueta cósmica da constelação "A Não-Nascida", um fantasma cósmico sussurrando promessas proibidas. Beleza melancólica e poeira estelar sutil.'
  }
];

export const HUNTER_FUNCTIONS: HunterFunction[] = [
  {
    name: 'Vanguarda',
    role: 'Tanque & Linha de Frente',
    mandatorySkill: 'Luta',
    initialHp: '1d12 + CON',
    levelHp: '1d6 + CON',
    initialEnergy: '1d6 + INT',
    levelEnergy: '1d2 + INT',
    energyKeyAttr: 'Inteligência (INT)',
    concept: 'Caçadores que priorizam o combate corpo a corpo contra as lendas, sendo a muralha inabalável da party — a primeira linha entre a abominação e os aliados.',
    equipment: [
      'Espada longa marcada (1d8 cortante, versátil 1d10) ou Machado de batalha (1d8 cortante)',
      'Escudo reforçado (+2 na Defesa)',
      'Armadura de couro batido ou brunea leve',
      'Broche do Crepúsculo'
    ]
  },
  {
    name: 'Retaguarda',
    role: 'Precisão, Infiltração & Longa Distância',
    mandatorySkill: 'Pontaria',
    initialHp: '1d10 + CON',
    levelHp: '1d6 + CON',
    initialEnergy: '1d8 + DES',
    levelEnergy: '1d4 + DES',
    energyKeyAttr: 'Destreza (DES)',
    concept: 'Combatentes ágeis e rastreadores natos da Federação que valorizam precisão acima da força bruta, neutralizando perigos antes que o inimigo consiga se aproximar.',
    equipment: [
      'Arco curto ou besta leve (1d6 perfurante)',
      'Adaga de reserva (1d4 perfurante)',
      'Armadura leve de couro e capa de deslocamento silencioso',
      'Broche do Crepúsculo'
    ]
  },
  {
    name: 'Conjurador',
    role: 'Canalizador de Poder Bruto & Área',
    mandatorySkill: 'Misticismo',
    initialHp: '1d6 + CON',
    levelHp: '1d4 + CON',
    initialEnergy: '1d12 + INT',
    levelEnergy: '1d6 + INT',
    energyKeyAttr: 'Inteligência (INT)',
    concept: 'Manipulam energia folclórica bruta de forma direta. Possuem físico frágil, porém o arsenal mais versátil e avassalador da guilda. São raros e frequentemente vistos com cautela por famílias tradicionais.',
    equipment: [
      'Lâmina curta ritual ou cajado entalhado (1d4 cortante ou contundente)',
      'Foco arcano canalizador (amuleto, corrente ou talismã)',
      'Vestes pesadas com runas protetoras bordadas',
      'Broche do Crepúsculo'
    ]
  },
  {
    name: 'Curandeiro',
    role: 'Sustentação, Vitalidade & Suporte',
    mandatorySkill: 'Cura',
    initialHp: '1d8 + CON',
    levelHp: '1d4 + CON',
    initialEnergy: '1d10 + SAB',
    levelEnergy: '1d4 + SAB',
    energyKeyAttr: 'Sabedoria (SAB)',
    concept: 'Especialistas em manter o grupo vivo em combates de atrito prolongado, unindo medicina empírica, rituais folclóricos e técnicas de purificação de miasmas ancestrais.',
    equipment: [
      'Maça leve ou cajado (1d6 contundente)',
      'Kit completo de remédios de campo e insumos para rituais de cura',
      'Vestes simples de viajante reforçadas',
      'Broche do Crepúsculo'
    ]
  },
  {
    name: 'Investigador',
    role: 'Rastreamento, Fraquezas & Tática',
    mandatorySkill: 'Investigação',
    initialHp: '1d8 + CON',
    levelHp: '1d4 + CON',
    initialEnergy: '1d8 + INT',
    levelEnergy: '1d4 + INT',
    energyKeyAttr: 'Inteligência (INT)',
    concept: 'Especialistas em decifrar a anatomia e os mitos de uma lenda antes do confronto. Descobrir a vulnerabilidade real de uma manifestação antes do combate muitas vezes salva mais vidas do que qualquer lâmina.',
    equipment: [
      'Rapieira ou espada curta (1d6 perfurante)',
      'Kit de investigação (lupa, cordas, giz, gazuas de arrombamento)',
      'Capa discreta de camuflagem urbana e florestal',
      'Broche do Crepúsculo'
    ]
  },
  {
    name: 'Alquimista',
    role: 'Preparo, Infusões & Reagentes',
    mandatorySkill: 'Ofício (Alquimia)',
    initialHp: '1d8 + CON',
    levelHp: '1d4 + CON',
    initialEnergy: '1d10 + INT',
    levelEnergy: '1d4 + INT',
    energyKeyAttr: 'Inteligência (INT)',
    concept: 'Destiladores de bioenergia folclórica em poções e reagentes. Ao contrário do Conjurador, processam e estocam o poder antes do embate para fortalecer aliados, criar solventes e antídotos.',
    equipment: [
      'Machadinha ou espada curta (1d6 cortante)',
      'Kit de alquimista completo (reagentes, frascos, fornalha portátil)',
      '2 poções de Reforço Físico pré-preparadas',
      'Avental e bolsa reforçados com couro blindado',
      'Broche do Crepúsculo'
    ],
    specialMechanic: {
      name: 'Reforço Físico (Mecânica Exclusiva)',
      description: 'O Alquimista gasta Energia Folclórica para infundir poções com bônus temporários físicos (Força, Destreza ou Constituição). O alvo que bebe recebe o bônus por rodadas limitadas. Deve ser preparada antes do combate, incentivando estratégia prévia.'
    }
  }
];

export const CERNES_DATA: CerneInfo[] = [
  {
    name: 'Sangue',
    theme: 'Vitalidade, pactos e maldições herdadas',
    manifestation: 'Veias escurecem sob a pele, ferimentos sangram energia pura em vez de dor, ar ao redor cheira a cobre fresco.',
    sampleTechnique: 'Voto de Sangue',
    techniqueDesc: 'O caçador corta a própria palma e sela um pacto temporário com um aliado, absorvendo a dor alheia para devolver vigor.',
    icon: '🩸'
  },
  {
    name: 'Osso',
    theme: 'Morte, memória e ancestralidade',
    manifestation: 'Estalos secos no ar ambiente, sombras projetadas em formato esquelético e uma sensação térmica de cripta selada.',
    sampleTechnique: 'Eco dos Que Vieram Antes',
    techniqueDesc: 'Luta por um instante com os reflexos de um antepassado morto, antecipando ataques antes que se concretizem.',
    icon: '💀'
  },
  {
    name: 'Espelho',
    theme: 'Reflexo, ilusão e identidade estilhaçada',
    manifestation: 'Superfícies próximas (água, metal, vidro) tremulam e distorcem; o caçador parece duplicado por frações de segundo.',
    sampleTechnique: 'Passo Refletido',
    techniqueDesc: 'Por uma rodada, desfaz a percepção visual do inimigo sobre qual versão do caçador é a real, dificultando a mira.',
    icon: '🪞'
  },
  {
    name: 'Névoa',
    theme: 'Ocultação, espíritos e espaços liminares',
    manifestation: 'Bruma densa surge ao redor dos pés, ruídos são abafados e contornos corporais tornam-se esfumaçados.',
    sampleTechnique: 'Passagem Cega',
    techniqueDesc: 'Atravessa um espaço como se não estivesse totalmente presente na realidade, ignorando obstáculos e linhas de visão.',
    icon: '🌫️'
  },
  {
    name: 'Chama',
    theme: 'Destruição, purificação e fúria primordial',
    manifestation: 'Ondas visíveis de calor no ar, olhos ou punhos tornam-se incandescentes com brasas crepitantes.',
    sampleTechnique: 'Fúria Purificadora',
    techniqueDesc: 'Golpe carregado que queima matéria corrompida ou amaldiçoada, com eficácia devastadora contra alvos já feridos.',
    icon: '🔥'
  },
  {
    name: 'Gelo',
    theme: 'Imobilidade, preservação e frieza calculada',
    manifestation: 'Vapor gelado na respiração, geada rúnica cristalizando sobre armas e superfícies próximas.',
    sampleTechnique: 'Quietude Glacial',
    techniqueDesc: 'Força um instante de congelamento cinético no alvo, como se o próprio fluxo de tempo engasgasse brevemente.',
    icon: '❄️'
  },
  {
    name: 'Pedra',
    theme: 'Resistência, peso e as raízes da terra antiga',
    manifestation: 'Passos com ressonância sísmica anormal e micro-fissuras no solo onde o caçador firma suas bases.',
    sampleTechnique: 'Peso da Montanha',
    techniqueDesc: 'Ancora o próprio centro de gravidade, tornando-se quase imune a empurrões, quedas ou deslocamentos forçados.',
    icon: '🪨'
  },
  {
    name: 'Vento',
    theme: 'Velocidade extrema, sussurros e evasão',
    manifestation: 'Rajadas de ar sem vento meteorológico, vestimentas e cabelos reagem antes que o corpo dê o primeiro passo.',
    sampleTechnique: 'Passo que Não Deixa Rastro',
    techniqueDesc: 'Arranco cinético tão veloz que cria a ilusão sensorial de que o caçador nunca esteve no ponto de partida.',
    icon: '💨'
  },
  {
    name: 'Maré',
    theme: 'Água profunda, afogamento e purificação ritual',
    manifestation: 'Umidade inexplicável condensando no ambiente e eco constante de ondas marítimas mesmo no interior de terra firme.',
    sampleTechnique: 'Correnteza Interna',
    techniqueDesc: 'Sente o fluxo e o ritmo subjacente de um combate, desvendando intenções e mentiras antes de ocorrerem.',
    icon: '🌊'
  },
  {
    name: 'Trovão',
    theme: 'Tempestade, julgamento e violência súbita',
    manifestation: 'Estalo de alta voltagem audível antes de cada golpe físico, cheiro característico de ozônio ionizado.',
    sampleTechnique: 'Veredito',
    techniqueDesc: 'Ataque relâmpago que atinge o alvo com massa e força desproporcionais, como um julgamento vindo dos céus.',
    icon: '⚡'
  },
  {
    name: 'Raiz',
    theme: 'Crescimento, aprisionamento e natureza selvagem',
    manifestation: 'Pequenas rachaduras no piso geram florações e gavinhas vegetais instantâneas e efêmeras.',
    sampleTechnique: 'Abraço da Terra',
    techniqueDesc: 'Gavinhas e raízes etéreas brotam instantaneamente do piso prendendo os membros inferiores do adversário.',
    icon: '🌿'
  },
  {
    name: 'Canto',
    theme: 'Voz, encantamento, transe e loucura mística',
    manifestation: 'A voz do caçador ressoa com múltiplas camadas harmônicas impossíveis para o trato vocal humano.',
    sampleTechnique: 'Palavra que Não se Esquece',
    techniqueDesc: 'Uma única frase entoada que reverbera indefinidamente na psique do alvo, gerando desorientação e vulnerabilidade.',
    icon: '🎶'
  },
  {
    name: 'Lua',
    theme: 'Ciclos cósmicos, transmutação e lucidez noturna',
    manifestation: 'Potência amplificada durante a noite e brilho prateado opaco nas pupilas sob luar visível.',
    sampleTechnique: 'Clareza do Plenilúnio',
    techniqueDesc: 'Visão psíquica penetrante que dissipa ilusões, disfarces folclóricos e mentiras com precisão cirúrgica.',
    icon: '🌙'
  },
  {
    name: 'Ferro',
    theme: 'Proteção civilizatória e anulação do sobrenatural',
    manifestation: 'Fulgor metálico frio nas armas e mãos; sensação de peso denso e realidade inabalável ao redor.',
    sampleTechnique: 'Guarda Inquebrável',
    techniqueDesc: 'Torna o usuário o ponto mais inamovível da cena, cancelando truques ilusórios e resistindo a magias de dobra.',
    icon: '⚔️'
  }
];

export const FEDERATIONS_LIST: FederationGuideItem[] = [
  {
    id: 'fed-01',
    number: '#01',
    name: 'Federação Valquíria',
    mythology: 'Mitologia Nórdica',
    regions: 'Escandinávia e Norte da Europa (Noruega, Suécia, Dinamarca, Islândia)',
    description: 'Baluarte dos Guerreiros do Norte. Seus caçadores usam runas rituais nórdicas, aço glacial e frenesi controlado contra gigantes de gelo, trolls e espectros.',
    doctrine: 'Contenção climática severa e combate de choque pesado.'
  },
  {
    id: 'fed-02',
    number: '#02',
    name: 'Ordem dos Guardiões Olímpicos',
    mythology: 'Mitologia Greco-Romana',
    regions: 'Mediterrâneo e Bálcãs (Grécia, Itália, Chipre, Albânia)',
    description: 'Fundada nas ruínas de santuários sagrados. Combatentes disciplinados em falanges místicas com energias solares e armas de bronze celestial.',
    doctrine: 'Comando estratégico, contenção de quimeras e divisões menores descontroladas.'
  },
  {
    id: 'fed-03',
    number: '#03',
    name: 'Confederação das Sombras do Deserto',
    mythology: 'Mitologia do Oriente Médio e Mesopotâmica',
    regions: 'Oriente Médio e Norte da África (Egito, Arábia Saudita, Irã, Jordânia)',
    description: 'Mestres das miragens folclóricas, neutralização de djinns antigos e ventos abrasadores. Palco da crise histórica de Anúbis e do resgate da vila aprisionada.',
    doctrine: 'Infiltração silenciosa, rastreamento e contenção de maldições arcanas.'
  },
  {
    id: 'fed-04',
    number: '#04',
    name: 'Federação da Mãe Ursa',
    mythology: 'Mitologia Eslava',
    regions: 'Leste Europeu (Rússia, Ucrânia, Polônia, Bielorrússia)',
    description: 'Resistentes como a taiga profunda. Agentes canalizam a força das feras eslavas, espíritos da floresta ancestral e ritos totêmicos de proteção inabalável.',
    doctrine: 'Contenção de colossos florestais, anomalias de inverno perpétuo e defesas de cerco.'
  },
  {
    id: 'fed-05',
    number: '#05',
    name: 'Coalizão do Dragão Celestial',
    mythology: 'Mitologia do Leste Asiático',
    regions: 'Ásia Oriental (China, Japão, Coreia do Sul, Taiwan, Mongólia)',
    description: 'Vanguarda do equilíbrio entre chi elemental e bioengenharia espiritual. Mestres da esgrima sobrenatural, purificação de shikigamis e exorcismo de yokais.',
    doctrine: 'Combate de alta precisão, purificação de miasmas e exorcismo folclórico.'
  },
  {
    id: 'fed-06',
    number: '#06',
    name: 'União da Savana Eterna',
    mythology: 'Mitologia Africana e Iorubá',
    regions: 'África Subsaariana (África do Sul, Nigéria, Quênia, Gana, Angola)',
    description: 'Conectados às forças elementares ancestrais da terra e do trovão com tambores de ressonância mística e infusão de espíritos guardiões.',
    doctrine: 'Rastreamento sobrenatural de longa distância e neutralização de espíritos caóticos.'
  },
  {
    id: 'fed-07',
    number: '#07',
    name: 'Círculo de Avalon',
    mythology: 'Mitologia Céltica e Ciclo Arturiano',
    regions: 'Ilhas Britânicas (Inglaterra, Escócia, Irlanda, País de Gales)',
    description: 'Ordens cavalheirescas místicas que vigiam os círculos de pedra, especialistas em encantamentos de bruma, armas sagradas e proteção contra o Povo das Fadas.',
    doctrine: 'Contenção dimensional, cancelamento de ilusões e duelos rituais de honra.'
  },
  {
    id: 'fed-08',
    number: '#08',
    name: 'Federação das Águias do Amanhecer',
    mythology: 'Mitologia Nativo-Americana e Folclore Moderno',
    regions: 'América do Norte (Estados Unidos e Canadá)',
    description: 'Força militarizada que une sensores espectrais de última geração a relíquias tribais autênticas para combater wendigos e anomalias criptozoológicas.',
    doctrine: 'Resposta rápida aeromóvel, apoio logístico pesado e contenção de criptídeos.'
  },
  {
    id: 'fed-09',
    number: '#09',
    name: 'Conselho dos Senhores do Fogo',
    mythology: 'Mitologia do Sudeste Asiático',
    regions: 'Sudeste Asiático (Tailândia, Vietnã, Indonésia, Filipinas, Malásia)',
    description: 'Especialistas em piromancia folclórica e combate em arquipélagos vulcânicos e selvas densas, combatendo nagas de fogo e espíritos coléricos.',
    doctrine: 'Guerra de guerrilha em terreno denso e controle de bioenergia térmica.'
  },
  {
    id: 'fed-10',
    number: '#10',
    name: 'Ordem das Tempestades do Pacífico',
    mythology: 'Mitologia Polinésia e Aborígene',
    regions: 'Oceania e Ilhas do Pacífico (Austrália, Nova Zelândia, Fiji, Polinésia)',
    description: 'Mestres das correntes marítimas e do "Tempo do Sonho", caçam leviatãs dos abismos oceânicos e defendem as marés cósmicas.',
    doctrine: 'Vigilância naval profunda, contenção de leviatãs e manipulação das águas.'
  },
  {
    id: 'fed-11',
    number: '#11',
    name: 'Liga dos Titãs Esquecidos',
    mythology: 'Mitologia Ibérica e Sul-Europeia',
    regions: 'Sul da Europa (Espanha, Portugal, França)',
    description: 'Vigilantes de catacumbas ancestrais e fortalezas medievais, equipados com armaduras pesadas blindadas contra resquícios de titãs pré-olímpicos.',
    doctrine: 'Contenção de colossos construídos e arquitetura defensiva anti-mítica.'
  },
  {
    id: 'fed-12',
    number: '#12',
    name: 'Coalizão dos Espíritos Nórdicos',
    mythology: 'Fusão Inuit e Viking Ártico',
    regions: 'Extremo Norte Polar (Canadá Ártico, Groenlândia, Alasca)',
    description: 'Operam nas calotas polares onde o frio absoluto testa o limite biológico, unindo xamanismo inuit e resiliência viking glacial.',
    doctrine: 'Sobrevivência em frio absoluto e vigília dos portais das calotas polares.'
  },
  {
    id: 'fed-13',
    number: '#13',
    name: 'Federação dos Guardiões da Selva',
    mythology: 'Mitologia Sul-Americana e Amazônica',
    regions: 'América do Sul (Brasil, Peru, Colômbia, Bolívia, Venezuela)',
    description: 'Defensores do maior manancial de biodiversidade mística da Terra. Enfrentam curupiras coléricos, mapinguaris e deuses primordiais das águas fluviais.',
    doctrine: 'Camuflagem botânica mística, guerra em biomas hostis e alquimia vegetal primordial.'
  },
  {
    id: 'fed-14',
    number: '#14',
    name: 'Conselho dos Céus de Jade',
    mythology: 'Mitologia Hindu e Budista Himalaia',
    regions: 'Subcontinente Indiano e Himalaia (Índia, Nepal, Butão, Sri Lanka)',
    description: 'Mestres de mantras arcanos, alinhamento de chakras e filosofia cósmica, aprisionando asuras e rakshasas nos picos proibidos das montanhas.',
    doctrine: 'Combate psíquico superior, anulação de ilusões cósmicas e selamentos cármicos.'
  },
  {
    id: 'fed-15',
    number: '#15',
    name: 'Confederação dos Ventos Austrais',
    mythology: 'Mistérios Antárticos e Mares do Sul',
    regions: 'Antártica e Bases Internacionais Isoladas',
    description: 'A divisão mais isolada e secreta da Terra. Monitora horrores cósmicos ancestrais que adormeceram no gelo antes mesmo do nascimento da humanidade.',
    doctrine: 'Vigilância de horrores cósmicos ancestrais e quarentena de ruínas antárticas.'
  }
];
