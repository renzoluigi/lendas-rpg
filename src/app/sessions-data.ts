import { CampaignDay } from './model/session';

export const INVERNO_SESSIONS: CampaignDay[] = [
  {
    day: 1,
    title: 'A Emboscada na Estrada',
    subtitle: 'Episódio 1 — O Batismo de Sangue',
    status: 'disponivel',
    episode: 1,
    sections: [ 
      {
        id: 'comitiva',
        title: 'A Comitiva e as Primeiras Fricções',
        tagline: 'OS CAÇADORES DE VODENHAD',
        content: [
          'O grupo foi convocado pela Federação dos Caçadores para uma operação em território hostil. Composto por cinco especialistas portadores de diferentes linhagens da enigmática "Energia Folclórica", a comitiva iniciou sua marcha marcada por desconfiança mútua, contraste agudo de métodos e ausência de entrosamento em combate.'
        ],
        partyMembers: [
          {
            name: 'Pelúcido Petrov',
            role: 'Curandeiro & Manipulador de Mana',
            avatar: '/pelucido.webp',
            details: 'Portador de vasta reserva de energia folclórica. Conjurador de magias de suporte ("Fortificar", "Cura") e ataque mental e espinhos. Calculista, sério e profundamente avesso ao contato físico com aliados ou adversários.'
          },
          {
            name: 'Franz Blackwood',
            role: 'Duelista & Postura de Combate',
            avatar: '/Franz.webp',
            details: 'Nobre espadachim focado em técnica refinada e controle rigoroso de postura. Frio e implacável em batalha, demonstra instabilidade ao desferir golpes cruéis contra oponentes já neutralizados.'
          },
          {
            name: 'Yusuf ibn Khalil, "Fumegant"',
            role: 'Guardião das Brumas Alquímicas',
            avatar: '/yassuf.webp',
            details: 'Guerreiro do deserto armado com um pesado narguilé ancestral. Manipula vapores folclóricos de toxinas e essências tranquilizantes para controlar terreno e debilitar investidas inimigas.'
          },
          {
            name: 'Andri Ásgeirsson',
            role: 'Espadachim dos Ventos',
            avatar: '/andri.webp',
            details: 'Guerreiro nórdico que canaliza o fluxo aerodinâmico em cortes velozes ("Impulso Aerodinâmico", "Leitura dos Ventos"). Empenha-se em manter postura marcial honrada diante dos métodos rudes do grupo.'
          },
          {
            name: 'Amenhotep II, "Exodus"',
            role: 'Lâmina Necrótica & Carrasco',
            avatar: '/exodus.webp',
            details: 'Assassino coberto por linho funerário e resina de betume. Empunha uma Khopesh enegrecida e canaliza a necrose corrosiva do "Nilo Fervente". Silencioso, letal e estritamente pragmático.'
          }
        ]
      },
      {
        id: 'missao-hurik',
        title: 'O Chamado de Hurik & A Partida Noturna',
        tagline: 'O CONTRATO DA FEDERAÇÃO',
        content: [
          'Contratados por Hurik — um veterano calejado da Federação dos Caçadores —, a missão oficial designada ao grupo previa a investigação do desaparecimento de mais de 10 mulheres e crianças em Vodenhad, povoado remoto na serra fria, sob a classificação burocrática de "atividade folclórica de baixo nível".',
          'Contudo, a intuição aguçada de Exodus e Franz expôs contradições no encargo. Hurik demonstrou nervosismo atípico e sequer entregou o documento em mãos: atirou a carta com o selo da Associação diretamente ao chão com desprezo e tensão contida, ocultando a verdadeira escala do perigo que os aguardava.',
          'Com 30 dias de prazo para solucionar a crise, broches de autoridade no peito e uma carroça de carga coberta por lona militar puxada por cavalos de guerra, a comitiva partiu às 18h00, adentrando a névoa noturna.'
        ],
        imageSlot: {
          title: 'A Entrega do Contrato por Hurik',
          src: '/hurik-confront.avif',
          alt: 'A Entrega do Contrato por Hurik',
          description: 'O momento de desconfiança na sede da guilda, onde o veterano Hurik atira o contrato selado ao chão diante dos caçadores.',
          prompt: 'Dark fantasy digital painting, cinematic wide shot 16:9. A tense confrontation inside a dimly lit, atmospheric medieval guild tavern. A scarred, grizzled veteran hunter in weathered leather armor tosses a sealed wax-stamped parchment document onto a rough wooden tavern table with disdain. Around the table, five diverse, cloaked adventurers observe him with mistrust and sharp eyes: a bandaged Egyptian warrior, a proud young swordsman, a grim hooded mage, a noble duelist, and an Arab warrior with a heavy hookah. Warm candle glow, thick shadows, moody atmosphere, gritty realism, in the style of The Witcher 3 and Dark Souls.'
        }
      },
      {
        id: 'emboscada',
        title: 'A Emboscada na Estrada Deserta (20h15)',
        tagline: 'INCIDENTE NA FLORESTA',
        content: [
          'Por volta das 20h15, entre os pinheiros negros da serra, Exodus freou bruscamente a carroça: destroços bloqueavam a passagem estreita. Uma carroça comercial desmantelada jazia no centro da trilha, caixas de maçãs e grãos espalhadas pela lama, e um suposto cadáver inerte estirado na vala.',
          'Era uma emboscada calculada com frieza. Três guerreiros renegados com rostos cobertos por tatuagens rúnicas surgiram das sombras empunhando machados de guerra.',
          'O falso morto ergueu-se para desferir um golpe surpresa, mas Andri reagiu no primeiro instante: com um salto acrobático impulsionado pelos ventos, decepou a ameaça em um único arco cortante. Todavia, um segundo invasor conseguiu romper a lona da carroça, encurralando Pelúcido e Fumegant em combate fechado.'
        ],
        imageSlot: {
          title: 'A Emboscada na Estrada Noturna',
          src: '/emboscada.avif',
          alt: 'A Emboscada na Estrada Noturna',
          description: 'A carroça destruída bloqueando o caminho sob névoa e luar, maçãs espalhadas na lama e bárbaros rúnicos saltando para o ataque.',
          prompt: 'Dark fantasy concept art, 16:9 cinematic shot. A remote muddy forest road winding through towering pine trees under a cold misty moonlit night. In the middle of the road, an overturned wooden trade wagon is shattered with red apples and broken wooden crates strewn across the mud. Three savage tribal barbarian warriors covered in runic facial warpaint and wolf pelts emerge from the dense dark thicket wielding battleaxes, lunging toward a covered horse-drawn wagon. Atmospheric cold blue fog, dramatic lighting, high detail, grimdark fantasy aesthetic.'
        }
      },
      {
        id: 'colosso',
        title: 'O Colosso da Floresta & A Execução no Sangue',
        tagline: 'O CONFRONTO BRUTAL',
        content: [
          'O solo tremeu quando emergiu da mata fechada o Colosso: um combatente bárbaro titânico de três metros de altura, marcado por runas purulentas entalhadas na fronte. Atraído pela densa assinatura folclórica de Pelúcido, o monstro ignorou os combatentes na vanguarda e avançou em fúria contínua para estraçalhar a carroça.',
          'O embate tornou-se violento e caótico: a investida brutal do titã rachou a estrutura da carruagem e forçou a comitiva a uma contenção desesperada na lama escorregadia da serra. Fumegant ergueu densas névoas de contenção enquanto Franz e Andri tentavam conter a investida do colosso.',
          'A virada decisiva veio das sombras: aproveitando o foco cego da criatura em esmagar o refúgio do mago, Exodus escalou sorrateiramente a carcaça da carruagem e saltou sobre o crânio do titã. Cravando a Khopesh curva com ambas as mãos, liberou o "Nilo Fervente" — necrosando o cérebro da criatura e dissolvendo seus órgãos internos com ácido folclórico.'
        ],
        imageSlot: {
          title: 'O Duelo Contra o Colosso Rúnico',
          src: '/execucao-gigante-exodus.avif',
          alt: 'O Duelo Contra o Colosso Rúnico',
          description: 'O bárbaro colossal de três metros arremetendo contra a carruagem enquanto o assassino enfaixado salta sobre seu crânio canalizando a necrose mágica.',
          prompt: 'Dark fantasy epic combat action illustration, 16:9. A towering 3-meter muscular barbarian colossus covered in glowing carved runic scars rampaging through the shattered remains of a wooden carriage in a dark frozen forest. From behind, a stealthy mummy-like assassin wrapped in black linen bandages leaps from above, plunging a curved Egyptian bronze Khopesh blade deep into the titan\'s skull. Black boiling necrotic magic and acidic shadows hiss and erupt from the wound. Cinematic lighting, snowflakes, dynamic angle, gritty dark fantasy illustration.'
        }
      },
      {
        id: 'pistas-contrato',
        title: 'As Pistas nos Destroços & O Contrato de Sangue',
        tagline: 'INVESTIGAÇÃO E ESPÓLIOS',
        content: [
          'Com o colosso abatido e os renegados restantes neutralizados, a comitiva estabeleceu perímetro e procedeu à busca detalhada no campo do confronto.',
          'Pelúcido canalizou magia de Conhecimento sobre as marcas rúnicas na cabeça do gigante e identificou resquícios de coação mental — a criatura agia sob encantamento direcionado para eliminar conjuradores folclóricos. No casaco do líder abatido, encontrou um Contrato de Sangue selado, redigido em um dialeto ancestral.',
          'A inspeção na carroça destruída aprofundou o enigma: as caixas continham maçãs, cevada e trigo de comerciantes comuns, mas não havia corpos nem poças de sangue humano. As vítimas não foram executadas ali — os colonos e viajantes estão sendo sequestrados vivos por cultistas da energia folclórica.'
        ],
        callout: {
          type: 'pista',
          title: 'DESCOBERTA CRUCIAL: O MODUS OPERANDI',
          text: 'A ausência total de sangue dos condutores da carroça confirma que os desaparecimentos de Vodenhad respondem a uma colheita ritualística de cativos vivos. O ataque ao grupo não foi um roubo ordinário de estrada, mas uma caçada encomendada.'
        },
        imageSlot: {
          title: 'O Exame do Contrato de Sangue',
          src: '/pelucido-e-gigante.avif',
          alt: 'O Exame do Contrato de Sangue',
          description: 'Pelúcido ajoelhado junto ao colosso abatido, examinando com luz mágica o pergaminho do contrato de sangue encontrado entre os pertences do líder.',
          prompt: 'Dark fantasy close-up illustration, 16:9. A serious young mage in dark robes kneeling in the muddy forest floor beside a fallen barbarian warrior. The mage casts a subtle pale blue spell over the creature\'s runic tattooed temple, while holding a ragged, blood-stained parchment contract inscribed with ancient glowing crimson runes. In the background, the smoking remains of the battlefield under cold moonlight. Intricate details, atmospheric glow, eerie investigative mystery vibe.'
        }
      },
      {
        id: 'chegada-vodenhad',
        title: 'Sob a Névoa Noturna: Os Portões de Vodenhad',
        tagline: 'CONCLUSÃO DO PRIMEIRO DIA',
        content: [
          'Quarenta e cinco minutos após o término do confronto, contendo os ferimentos e assegurando a carruagem danificada, a comitiva alcançou os limites de Vodenhad.',
          'O vilarejo repousa sob um silêncio tumular, cercado por paliçadas de madeira escura e névoa gelada. Com a certeza de que a Federação ocultou os verdadeiros horrores que assolam a região, os caçadores transpõem os portões. Os 30 dias de investigação acabaram de começar.'
        ],
        imageSlot: {
          title: 'Os Portões de Vodenhad na Névoa',
          src: '/chegada-vodenhadt.png',
          alt: 'Os Portões de Vodenhad na Névoa',
          description: 'A carruagem desgastada dos caçadores chegando diante dos portões maciços de Vodenhad sob a névoa fria da meia-noite.',
          prompt: 'Dark fantasy environment art, 16:9 panoramic shot. The ominous, towering wooden and iron-reinforced palisade gates of a remote, gothic mountain village called Vodenhad at midnight. Dense cold fog blankets the muddy ground and creeping bare pine trees. A single battered horse-drawn wagon approaches the closed gate under the pale glow of hanging iron lanterns. Dark silhouettes, eerie quiet, oppressive mystery, high detailed cinematic digital painting in the style of Bloodborne and Elden Ring.'
        }
      }
    ],
    enemies: [
      {
        name: 'Renegado Corrompido',
        image: '/barbaro-normal-ficha.png',
        pv: 16,
        defesa: 12,
        danoMedio: '~5.5',
        papel: 'Bárbaros contaminados pela alta energia folclórica da região — ainda humanos. Combate introdutório, caem rápido individualmente.'
      },
      {
        name: 'Corvo Rachado (Líder)',
        image: '/gigante-ficha.avif',
        imagePosition: 'center 24%',
        pv: 42,
        defesa: 14,
        danoMedio: '~8.5',
        papel: 'Colosso de 3 metros. Líder dos bárbaros corrompidos.',
        habilidades: [
          'Frenesi da Terra Rachada: abaixo de 17 PV, ganha +2 de dano mas sofre -2 na Defesa.',
          'Resquício de Consciência: se alguém tentar falar com ele (CD 15), ele hesita por 1 rodada.',
          'Entrada tardia: entra em combate na rodada 2.'
        ]
      }
    ],
    loot: ['400 moedas', 'Adagas', 'Bebidas', 'Grande caixa de maçãs'],
    levelUp: {
      newLevel: 2,
      hpDice: '1d6',
      efDice: '1d3',
      notes: 'Valores atuais não sobem automaticamente — necessário descanso na cidade.'
    }
  }
];

// Generate remaining 29 days as locked
for (let i = 2; i <= 30; i++) {
  INVERNO_SESSIONS.push({
    day: i,
    title: '???',
    subtitle: 'Sessão ainda não registrada',
    status: 'bloqueado',
    events: [],
    sections: []
  });
}
