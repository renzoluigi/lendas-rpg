import {Character} from './model/character';

export const CHARACTERS: Character[] = [
  {
    codename: 'Jack',
    imageURI: '/charlie-hanks.webp',
    name: 'Charlie Hanks',
    country: 'Inglaterra',
    description: "Conhecido como o 'limpador' da Federação, Charlie é um assassino frio e calculista. Ele não luta por honra ou glória, mas pela eficiência do contrato. Especialista em eliminar alvos prioritários sem ser visto, ele é o pesadelo de lendas e caçadores renegados.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [{
      name:"Caçador invisível",
      description:"Charlie por sua facilidade com assassinatos consegue se camuflar em qualquer lugar, o possibilitando realizar essa habilidade apenas uma vez por batalha, causando 1,5x o dano de seu tiro por estar escondido.",
      image:"/invisible-hunter.webp"
    }, {
      name:"Ponto fraco",
      description:"Charlie encontra com facilidades pontos fracos das lendas causando +3 de dano em seus tiros, porém a cada uso dessa habilidade Charlie perde 2 de dano a cada rolagem no mesmo combate.",
      image:"/ponto-fraco.webp"
    }, {
      name:"Troca de função",
      description:"Mesmo sendo um atirador experiente Charlie também tem noções de combate corporal, com essa habilidade Charlie troca sua arma de longo alcance por uma de curto alcance definida pelo jogador.",
      image:"/swap-weapon.webp"
    }, {
      name:"Armadilha",
      description:"Charlie consegue fazer armadilhas quase imperceptíveis a olho nu de energia folclórica, podendo ser disparadas até 500 metros de onde Charlie esteja, ele perceberá sua ativação.",
      image:"/trap.webp"
    }, ],
    history: "A origem de Charlie Hanks é um arquivo corrompido nos bancos de dados da Federação. Rumores apontam que ele era um agente de operações negras do governo britânico que descobriu o mundo sobrenatural durante uma missão falha nos anos 90. Após ter sua existência 'apagada' pelos seus superiores, ele encontrou refúgio — e lucro — no submundo das lendas. Hoje, ele aceita os trabalhos que ninguém mais quer, incluindo o extermínio de outros caçadores que quebram as regras.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Rifle espiritual",
      imageURI: "/rifle-espiritual.webp",
      description: "Charlie invoca sua arma espiritual que somente atinge e causa dano a inimigos com energia folclórica."
    },
    age: 30,
    height: 1.70
  },
  {
    codename: 'Corleone',
    imageURI: '/marcelo-canavarro.webp',
    name: 'Marcelo Canavarro',
    country: 'Itália/Brasil',
    description: "Marcelo é a personificação do legado. Carregando o peso de gerações em seus ombros, ele age como um conduíte espiritual para seus antepassados. Em combate, ele nunca está sozinho; sua postura nobre e técnica refinada revelam um homem que luta com a força de uma família inteira.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [{
      name:"Sintonização",
      description:"Marcelo se sintoniza com seus ancestrais através de uma rolagem de 1d6, dependendo do número que cair Marcelo se fortalecerá em diferentes níveis assumindo a força de seu falecido ancestral.",
      image:"/sintonizacao.webp"
    }, {
      name:"Saudade eterna",
      description:"Caso Marcelo esteja sintonizado com algum ancestral, consegue aprender uma técnica de seu antepassado e realizar-lá contra seu inimigo.",
      image:"/saudade-eterna.png"
    }, {
      name:"Caça inerte",
      description:"Por ser treinado desde pequeno por sua familia Marcelo tem uma habilidade sobrenatural de rastrear seus adversários desde que tenham energia folclórica, concedendo +5 em testes de rastreio",
      image:"/caca-inerte.webp"
    }],
    history: "A família Cannavarro caça o sobrenatural desde o Velho Mundo. Quando imigraram para o Brasil em 1874, durante a Grande Imigração, trouxeram consigo não apenas suas malas, mas rituais antigos e vendetas contra criaturas das trevas. Marcelo cresceu ouvindo as histórias não como contos de fadas, mas como manuais de instrução. Ele não escolheu essa vida; ela foi herdada junto com seu sobrenome. Ele busca honrar o sangue italiano e a terra brasileira, limpando o país de ameaças folclóricas.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Soqueiras",
      imageURI: "/soqueiras.webp",
      description: "Marcelo usa as soqueiras de seu falecido pai herança da família Canavarro que carrega sempre as lembrancas de seus falecidos usuários."
    },
    age: 28,
    height: 1.76
  },
  {
    codename: 'Gunther',
    imageURI: '/gunther-sorinas.webp',
    name: 'Gunther Sorinas',
    country: 'Áustria',
    description: "Uma montanha de músculos e ressentimento. Gunther é um tanque imparável no campo de batalha, utilizando técnicas de boxe aprimoradas por energia bruta. Ele luta não por paixão, mas por obrigação, o que o torna um combatente pragmático, brutal e extremamente resistente.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [{
      name:"Ruptura",
      description:"Caso gunther acerte seu alvo uma primeira vez ele cria um ponto fraco em seu adversário, que no próximo ataque se o concede +2 de dano e +2 de chance de acerto e caso gunther opte pelo 3 ataque ele tem um bônus de +7 de dano e -5 de acerto. ",
      image:"/ruptura.webp"
    },{
      name:"Pressão",
      description:"Gunther por ser constantemente levado ao limite em suas lutas tem a habilidade de caso chegue a metade de sua vida pode fazer uma troca equivalente, ganhando +7 de dano e tomando +7 de dano caso o inimigo o acerte",
      image:"/pressao.webp"
    }, {
      name:"Quebra de postura",
      description:"Gunther consegue quebrar a postura de seu adversário, limitando seu uso de energia folclórica, é efetivo somente com inimigos materiais e de pequeno porte",
      image:"/quebra-de-postura.webp"
    }, {
      name:"Pulso predatório",
      description:"Gunther libera rajadas de vento que atravessam o ar pela pressão de seus punhos causando dano ao oponente.",
      image:"/pulso-predatorio.webp"
    }],
    history: "Gunther era um celebridade mundial, um boxeador peso-pesado invicto. Sua queda não veio de um nocaute no ringue, mas de um exame de sangue da Federação após uma luta onde ele 'acidentalmente' demoliu o crânio de um oponente com uma força impossível. Detectado como um usuário latente de energia folclórica em esportes mundanos (um crime grave), ele recebeu um ultimato: prisão perpétua em uma cela anti-magia ou serviço militar obrigatório caçando lendas. Ele escolheu a liberdade vigiada.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Punhos",
      imageURI: "/punhos.webp",
      description: "Gunther usa seus próprios punhos em batalhas."
    },
    age: 45,
    height: 1.94
  },
  {
    codename: 'Xamã',
    imageURI: '/maria-torino.webp',
    name: 'Maria Torino',
    country: 'México',
    description: "Maria é uma bateria viva de energia folclórica, uma invocadora prodígio que comanda entidades antigas. Devido a restrições místicas, ela atua como uma general na retaguarda, controlando o campo de batalha através de seus avatares e totens, sem nunca sujar suas próprias mãos de sangue.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [{
      name:"Campos de prova de xibalba",
      description:"Maria força a criatura adversária a entrar em um combate de vontade através de um ritual feito por ela, seria uma rolagem de vontade com a Maria tendo vantagem de +2 de dado, caso Maria vença a criatura na rolagem ela faria com que a criatura perca o próximo turno, caso ela falhe Maria perde o próximo turno e 2 de vida",
      image:"/campos-xibalba.webp"
    }, {
      name:"Gêmeos heroicos",
      description:"Maria invoca os gêmeos do submundo Hunahpú & Xbalanqué para o combate, os 2 somente são derrotados caso morram juntos.",
      image:"/gemeos-heroicos.webp"
    }, {
      name:"Animal totemico",
      description:"Maria pode invocar animais puramente feitos de energia folclórica para auxiliar em seus combates e investigações:\n" +
        "Aguia - concede Maria a visão sobre uma águia que auxilia a investigação de perímetros.\n" +
        "Serpente - consegue invocar uma serpente que causa dano venenoso a seu adversário.\n" +
        "Urso - invoca um urso que seria voltado ao combate.",
      image:"/animal-totemico.webp"
    }, {
      name:"A reescrita do primeiro homem.",
      description:"Maria por sua tremenda quantidade de energia consegue reescrever a ideia de um ser humanoide \"perfeito\" como está no livro de popol vuh, esse ser humanoide tem força física monstruosa mas por ser extremamente forte fisicamente não é controlável por Maria, ele ataca qualquer um dentro de sua área, somente deixa de existir no nosso plano caso seja morto.",
      image:"/primeiro-homem.webp"
    }, ],
    history: "Nascida em um sítio arqueológico próximo ao local de repouso do Popol Vuh original, Maria foi exposta a níveis letais de radiação folclórica ainda no útero. Ela é considerada uma anomalia estatística pela Federação, possuindo mais energia bruta que veteranos de guerra. No entanto, tal poder veio com um preço: um antigo pacto maia a proíbe de causar dano direto a qualquer criatura viva, forçando-a a dominar a arte da invocação para sobreviver neste mundo hostil.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Popol Vuh",
      imageURI: "/popol-vuh.webp",
      description: "Um livro que é sagrado no México, desde sua nascença Maria o tem como arma, é capaz de invocar lendas e espíritos."
    },
    age: 18,
    height: 1.64
  },
  {
    codename: 'Açougueiro',
    imageURI: '/klaus-hoffman.webp',
    name: 'Klaus Hoffman',
    country: 'Alemanha',
    description: "Klaus é um berserker sádico que caminha na linha tênue entre caçador e monstro. Ele não busca justiça, busca sofrimento. Em combate, ele ignora a dor e a morte, rindo enquanto fatia seus inimigos, alimentado por um ódio que transcende a autopreservação.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [{
      name:"Fúria interminável",
      description:"Klaus se enche de fúria e parte pra cima das criaturas sem medo algum, não recebe nenhum tipo de controle de grupo e nem mental.",
      image:"/furia-interminavel.webp"
    }, {
      name:"Carnificina",
      description:"Ao dar o golpe final em uma lenda Klaus absorve sua alma em seu cutelo, o fortalecendo o restante do combate conforme o nível dessa lenda.",
      image:"/carnificina.webp"
    }, {
      name:"Espírito indomavel",
      description:"Klaus se recusa a morrer em combate para uma lenda, durante o combate mesmo que o HP do jogador chegue a -5 Klaus se recusa a morrer, somente após o combate acabar Klaus é dado como oficialmente morto.",
      image:"/espirito-indomavel.webp"
    }, {
      name:"Fé",
      description:"Klaus acredita que é a cura desse mundo doentio e é obrigado a se vangloriar durante os combates a cada dano ou morte causada, caso não faça pode tomar 1d6 de dano pelo seu pacto restritivo.",
      image:"/fe.webp"
    },],
    history: "A vida de Klaus acabou no dia em que ele e sua família entraram inadvertidamente em um território de caça na Floresta Negra. Ele foi o único a sobreviver, forçado a assistir ao massacre de sua esposa e filhos por uma lenda local. A mente de Klaus quebrou, sendo reconstruída apenas com ódio puro. Ele se juntou à Federação não para salvar vidas, mas para ter permissão legal de torturar e massacrar o máximo de criaturas possível. Seu 'Pacto de Fé' é uma manifestação distorcida de seu trauma.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Cutelo lamentoso",
      imageURI: "/cutelo.webp",
      description: "Klaus absorve as almas das lendas em seu cutelo, mesmo sendo um cutelo normal acredita-se que Klaus fez uma arma mítica apartar de seu ódio contra as criaturas. "
    },
    age: 22,
    height: 1.70
  },
  {
    codename: 'Musashi',
    imageURI: '/emma-katowo.webp',
    name: 'Emma Katowo',
    country: 'Japão',
    description: "Emma é a busca pela perfeição marcial encarnada. Uma duelista genial que vê cada monstro não como uma ameaça, mas como um teste para sua lâmina. Calma, precisa e letal, ela combina a disciplina dos samurais com uma curiosidade quase infantil sobre os limites de sua própria força.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [{
      name:"Benção de ashura",
      description:"Emma infunde energia em qualquer arma branca e por 1 round sua arma tem um acerto garantido, porém sua arma quebrará após o ataque.",
      image:"/bencao-de-ashura.webp"
    }, {
      name:"Genialidade",
      description:"Emma por ser uma das pessoas mais versáteis em lutas corpo a corpo sempre tem a possibilidade de contra-atacar golpes sofridos, com uma penalidade de -1 caso erre seu golpe o adversário terá outra chance.",
      image:"/genialidade.webp"
    }, {
      name:"Corte translucido",
      description:"Emma se prepara por um turno para lançar seu corte reunindo uma boa quantidade de energia folclórica, caso seja interrompida durante o turno de preparação sua ação é perdida, caso consiga se preparar e acertar o ataque no próximo turno com +3 de vantagem seu dano é de dobrado.",
      image:"/corte-translucido.webp"
    }, {
      name:"Um com a espada",
      description:"Emma se corta com sua espada sacrificando 5 de vida para se concentrar e entrar em comunhão com sua arma, durante o resto da batalha Emma causará 1,3x de dano em todos ataques.",
      image:"/um-com-a-espada.webp"
    }],
    history: "Treinada desde a infância em um dojo isolado nas montanhas por seu tio, um mestre espadachim recluso, Emma rapidamente superou todos os desafios humanos. Aos 12 anos derrotava mestres; aos 18, o tédio era seu maior inimigo. Ao descobrir a existência das Lendas, Emma viu um novo horizonte: oponentes que não morrem com um único golpe comum. Ela viajou para o ocidente e ingressou na Federação para afiar sua arte, buscando o 'Corte Translucido' perfeito que as lendas dizem poder cortar a própria realidade.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Katana ou qualquer tipo de espada",
      imageURI: "/katana.webp",
      description: "Emma consegue infundir com energia folclórica de uma maneira excelente deixando suas armas estupidamente letais."
    },
    age: 25,
    height: 1.80
  },
  {
    codename: 'Enforcado',
    imageURI: '/marcus-balar.webp',
    name: 'Marcus Balar',
    country: 'Estados Unidos',
    description: "Marcus é um malandro carismático que trata a vida e a morte como um jogo de pôquer. Imprevisível e adaptável, ele usa magia baseada em sorte e cartas de tarot para virar o jogo a seu favor. Ele é o coringa do grupo: pode salvar o dia ou causar o caos, dependendo de como as cartas caem.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [{
      name:"Ler o futuro",
      description:"Marcus joga 3 cartas de tarot para cima que quando caem revelam a ação de seu adversário na próxima rodada, conforme a força do adversário o teste será mais difícil. ",
      image:"/ler-o-futuro.webp"
    }, {
      name:"Carteado magico",
      description:"Marcus rola um d6 e dependendo do número que cair será um buff ou debuff a seu adversário. ",
      image:"/carteado-magico.webp"
    }, {
      name:"Cartas flutuantes",
      description:"Marcus consegue alterar a gravidade de suas cartas, podendo fazer arremessos impossíveis se feitos comumente causando dano ao inimigo.",
      image: "/cartas-flutuantes.webp"
    }, {
      name:"Destino do apostador",
      description:"Marcus rola um d6 e se transforma na carta de tarot que receber recebendo seus buffs ou seus debuffs, exemplo caso caia \"o louco\" markus perde o controle de seu corpo porém causa dano dobrado.",
      image:"/destino.webp"
    }],
    history: "Nascido nas ruas e criado em cassinos clandestinos, Marcus sempre teve uma sorte sobrenatural — literalmente. Ele despertou sua energia folclórica cedo, usando-a para trapacear em jogos de azar e escapar de agiotas. Aos 30 anos, após limpar a mesa de um figurão que acabou se revelando um recrutador da Federação, ele descobriu a verdade sobre o mundo. Percebendo que caçar monstros pagava muito melhor que pequenos golpes (e oferecia uma adrenalina viciante), ele trocou os becos pela caçada global.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Baralho enfeitiçado",
      imageURI: "/baralho-enfeiticado.webp",
      description: "Marcus usa um baralho de tarot reforçado com energia folclórica como arma dependendo extremamente de sua sorte."
    },
    age: 35,
    height: 1.84
  },
  {
    codename: 'Seiva',
    imageURI: '/dante-mora.webp',
    name: 'Dante Mora',
    country: 'Espanha',
    description: "Dante é um híbrido entre homem e planta, um guardião resistente que usa a própria biologia como arma. Ele atua na linha de frente, absorvendo danos e devolvendo espinhos, enquanto regenera seus aliados. Sua presença é inquietante, uma mistura de serenidade natural e perigo biológico.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [{
      name:"Mutação genética",
      description:"Transforma flores e materiais orgânicos em espinhos que podem ser lançados a seus oponentes.",
      image:"/mutacao-genetica.webp"
    }, {
      name:"Casca grossa",
      description:"Toda vez que markus é atingido por qualquer criatura devolve 1 terço do dano recebido, por conta de sua genética estranha consegue mutar seu corpo na hora do impacto devolvendo espinhos ao adversário.",
      image:"/casca-grossa.webp"
    }, {
      name:"Energia vital",
      description:"Dante envolve toda sua pele em vinhas diminuído o dano de cortes em 10 pontos.",
      image:"/energia-vital.webp"
    }, {
      name:"Simbiose",
      description:"Dante por ter um corpo diferente consegue armazenar energia vital em deu corpo, conseguindo curar a si ou a seus aliados 1d6 +1por habilidade.",
      image:"/simbiose.webp"
    }],
    history: "Dante sempre preferiu a companhia das plantas à das pessoas. Um botânico brilhante, porém obsessivo, ele encontrou um grimório druídico antigo durante uma expedição aos Pireneus. Decidido a 'sentir' a natureza de verdade, ele realizou um ritual proibido de transmutação em si mesmo. O processo foi agonizante e irreversível, fundindo seu DNA com a flora local. Agora, ele vaga pelo mundo buscando proteger o equilíbrio natural, vendo as Lendas malignas como pragas invasoras que precisam ser podadas.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Chicotes de vinha",
      imageURI: "/chicotes-de-vinha.webp",
      description: "Dante utiliza 2 chicotes espinhosos reforçados com energia folclórica."
    },
    age: 29,
    height: 1.81,
    campaign: 'one-shot'
  },
  {
    codename: 'Valko',
    imageURI: '/valko.jpg',
    name: 'Valko Morozov',
    country: 'Sibéria / Rússia',
    description: "Veterano calejado pelas neves eternas, Valko é um rastreador implacável de horrores sepultados no gelo. Silencioso como uma nevasca e mortal como o permafrost, ele empunha uma lâmina rúnica forjada em ferro frio para enfrentar abominações que a civilização moderna esqueceu sob o permafrost.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [
      {
        name: "Sopro Glacial",
        description: "Valko canaliza energia folclórica gélida ao redor de sua lâmina rúnica, desferindo um corte que congela os tecidos do adversário, reduzindo o deslocamento da criatura pela metade por 2 rodadas.",
        image: "/corte-translucido.webp"
      },
      {
        name: "Sobrevivência no Permafrost",
        description: "Habituado a temperaturas extremas e terrenos inóspitos, Valko possui resistência sobrenatural a frio e fadiga, ignorando penalidades climáticas e ganhando +3 em testes de rastreamento na neve.",
        image: "/espirito-indomavel.webp"
      },
      {
        name: "Sentido dos Ossos",
        description: "Consegue pressentir a aproximação de entidades e lendas soterradas sob o gelo num raio de até 1 quilômetro, identificando a natureza primordial da ameaça.",
        image: "/ponto-fraco.webp"
      },
      {
        name: "Quebra-Gelo Ancestral",
        description: "Um golpe avassalador de duas mãos que quebra a carapaça ou barreiras místicas do inimigo, concedendo bônus crítico maciço.",
        image: "/ruptura.webp"
      }
    ],
    history: "Valko nasceu nas estepes congeladas que margeiam os cumes proibidos do norte. Sua guilda de caçadores ancestrais protegia os passos montanhosos onde criptas antigas guardavam os 'Inomináveis do Gelo'. Quando uma expedição clandestina rompeu o selo milenar de uma cidadela sepultada, trazendo o Inverno de Ossos de volta à vida, Valko foi convocado pela Federação como guia supremo e ponta de lança da expedição. Para ele, a neve nunca é silenciosa — ela sussurra os nomes daqueles que ela pretende devorar.",
    deeds: [
      "Sobreviveu à expedição da Cordilheira dos Esquecidos.",
      "Mapeou as entradas das catacumbas congeladas da Cidadela."
    ],
    weapons: {
      name: "Montante Rúnico de Ferro Frio",
      imageURI: "/katana.webp",
      description: "Uma lâmina colossal entalhada com runas que nunca descongelam, capaz de ceifar tanto carne quanto espíritos congelados."
    },
    age: 42,
    height: 1.88,
    campaign: 'inverno-de-ossos'
  },
  {
    codename: 'Sen',
    imageURI: '/sen.webp',
    name: 'Sen',
    country: 'Brasil / Japão',
    description: "Pugilista excepcional com herança oriental e negra. Despertou suas habilidades de combate corporal supremo após uma severa exposição à energia folclórica no submundo das lutas clandestinas.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [
      {
        name: "Mãos Elementais",
        description: "Gastando 2 de EF, pode alterar a composição de suas próprias mãos, transmutando-as em minérios e rochas sólidas para aumentar consideravelmente o impacto dos ataques.",
        image: "/punhos.webp"
      },
      {
        name: "Vamos Ver Quem Aguenta Mais",
        description: "Gastando 1 de EF, todo o dano recebido por Sen é dobrado, porém todo o dano causado por ele é triplicado em um frenesi marcial.",
        image: "/pressao.webp"
      },
      {
        name: "Alcance Sobre-Humano",
        description: "Ao canalizar energia folclórica nos membros, consegue dobrar o alcance de seus ataques físicos. Pode ser usado uma vez por missão.",
        image: "/pulso-predatorio.webp"
      },
      {
        name: "Lutador",
        description: "Postura marcial impecável. Concede +2 de ataque e +2 de dano sem custo de EF. Uso limitado a 1 vez por missão.",
        image: "/quebra-de-postura.webp"
      },
      {
        name: "Olhos de Odin",
        description: "Sen retira seus óculos escuros, enxergando com clareza espiritual os pontos vitais das criaturas durante toda a luta (dano multiplicado por 1,5x). Ao término do combate, sofre fadiga visual (-2 em testes de ataque). Custa 1 EF.",
        image: "/ponto-fraco.webp"
      },
      {
        name: "Expansão de Domínio: Mano a Mano",
        description: "Requer acertar o golpe Rolo Compressor com sucesso. Sen projeta um ringue dimensional de combate singular 1 contra 1. Todos os demais observam de fora, e dentro do domínio todos os seus golpes acertam infalivelmente e causam 1,5x de dano.",
        image: "/campos-xibalba.webp"
      }
    ],
    history: "Sen cresceu entre dojos tradicionais e ringues urbanos, combinando raízes orientais com a vivência brasileira. Ele dominava o boxe mundano até que, durante uma disputa nos circuitos proibidos, foi atingido por uma emanação brutal de energia folclórica. Em vez de ser consumido, sua determinação transmutou a radiação em poder: seus punhos se tornaram minerais vivos. Ingressou na saga Vida e Morte para testar os limites do corpo humano contra entidades que jamais sangraram em ringues mundanos.",
    deeds: [
      "Sobreviveu à exposição crítica de energia folclórica bruta.",
      "Consagrou o Domínio 'Mano a Mano' nos registros de combate corpo a corpo da Federação."
    ],
    weapons: {
      name: "Ataduras e Punhos Minerais",
      imageURI: "/punhos.webp",
      description: "Ataduras rúnicas reforçadas que contêm a transmutação mineral das Mãos Elementais e amplificam o impacto do pugilismo."
    },
    age: 26,
    height: 1.82,
    campaign: 'vida-e-morte'
  },
  {
    codename: 'Josh',
    imageURI: '/josh.webp',
    name: 'Josh',
    country: 'Brasil',
    description: "Misterioso e imprevisível guerreiro que canaliza energia folclórica através de sangue e instintos totêmicos. Introvertido e temido em combate, domina rituais hematológicos e transfigurações animalescas.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [
      {
        name: "Aprimoramento Corporal",
        description: "Josh acelera o fluxo sanguíneo em suas veias, ampliando drasticamente força e reflexos. Gasta 1 EF e todos os ataques sob este efeito concedem +2 de dano.",
        image: "/energia-vital.webp"
      },
      {
        name: "Muralha de Sangue",
        description: "Solidifica o próprio sangue externamente em uma barreira couraçada, aumentando seu CA (Classe de Armadura) em +2 por 3 turnos.",
        image: "/casca-grossa.webp"
      },
      {
        name: "Sangue Verdadeiro",
        description: "Aplica efeito de sangramento ao acertar o alvo. Pode consumir ação para ativar efeito Corrosivo, causando dano contínuo que ignora armaduras.",
        image: "/carnificina.webp"
      },
      {
        name: "Dama Sangrenta",
        description: "Traça um selo ritualístico gigante no solo com sangue à mercê. Inimigos selecionados sofrem -3 de debuff de dano e aliados recebem +2 de dano enquanto permanecerem na área.",
        image: "/fe.webp"
      },
      {
        name: "Vontade de Ferro",
        description: "Seu corpo manifesta uma blindagem biológica férrea impenetrável. Gastando 3 EF, ignora todos os próximos ataques físicos por 2 turnos.",
        image: "/espirito-indomavel.webp"
      },
      {
        name: "Instinto Animal",
        description: "Gastando de 1 a 5 de EF, transfigura seu corpo em animais ou lendas já derrotadas (desde aves e répteis até lobos, ursos pardos e feras brutais).",
        image: "/animal-totemico.webp"
      },
      {
        name: "Olhos de Tandera",
        description: "Habilidade de percepção sobrenatural fora de combate; gasta 1 EF para ampliar sentidos e visão periférica além dos limites naturais.",
        image: "/ler-o-futuro.webp"
      },
      {
        name: "Expansão de Domínio: Lua Vermelha",
        description: "Alimentado pelo sangue derramado pelo oponente. Ergue uma colossal esfera escarlate onde Josh manipula livremente todo o sangue ao redor, infligindo dano devastador relativo ao poder da criatura.",
        image: "/destino.webp"
      }
    ],
    history: "Com raízes profundas no Brasil e fluência em Tupi-Guarani, Josh sempre foi visto como uma anomalia pela Federação. Sua personalidade oscila entre a introspecção quieta e uma fúria visceral quando o sangue é derramado. Ele não caça por vaidade; sua conexão ancestral com o sangue e com as feras faz dele um predador implacável que enfrentou os horrores mais tenebrosos da campanha Vida e Morte.",
    deeds: [
      "Manifestou a Expansão de Domínio Lua Vermelha em combate mortal.",
      "Dominou as transfigurações do Instinto Animal contra criaturas folclóricas primordiais."
    ],
    weapons: {
      name: "Lâminas de Sangue e Machado Ritual",
      imageURI: "/cutelo.webp",
      description: "Machado e punhais de ferro forjado embebidos em sangue folclórico para canalizar a técnica corrosiva de Sangue Verdadeiro."
    },
    age: 24,
    height: 1.78,
    campaign: 'vida-e-morte'
  }
];

export const ONE_SHOT_CHARACTERS: Character[] = CHARACTERS.filter(c => !c.campaign || c.campaign === 'one-shot');
export const INVERNO_CHARACTERS: Character[] = CHARACTERS.filter(c => c.campaign === 'inverno-de-ossos');
export const VIDA_E_MORTE_CHARACTERS: Character[] = CHARACTERS.filter(c => c.campaign === 'vida-e-morte');

