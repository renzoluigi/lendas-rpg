import {Character} from './model/character';

export const CHARACTERS: Character[] = [
  {
    codename: 'Jack',
    imageURI: '/charlie-hanks.png',
    name: 'Charlie Hanks',
    country: 'Inglaterra',
    description: "Conhecido como o 'limpador' da Federação, Charlie é um assassino frio e calculista. Ele não luta por honra ou glória, mas pela eficiência do contrato. Especialista em eliminar alvos prioritários sem ser visto, ele é o pesadelo de lendas e caçadores renegados.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.png',
    },
    abilities: [{
      name:"Caçador invisível",
      description:"Charlie por sua facilidade com assassinatos consegue se camuflar em qualquer lugar, o possibilitando realizar essa habilidade apenas uma vez por batalha, causando 1,5x o dano de seu tiro por estar escondido.",
      image:"/invisible-hunter.png"
    }, {
      name:"Ponto fraco",
      description:"Charlie encontra com facilidades pontos fracos das lendas causando +3 de dano em seus tiros, porém a cada uso dessa habilidade Charlie perde 2 de dano a cada rolagem no mesmo combate.",
      image:"/ponto-fraco.png"
    }, {
      name:"Troca de função",
      description:"Mesmo sendo um atirador experiente Charlie também tem noções de combate corporal, com essa habilidade Charlie troca sua arma de longo alcance por uma de curto alcance definida pelo jogador.",
      image:"/swap-weapon.png"
    }, {
      name:"Armadilha",
      description:"Charlie consegue fazer armadilhas quase imperceptíveis a olho nu de energia folclórica, podendo ser disparadas até 500 metros de onde Charlie esteja, ele perceberá sua ativação.",
      image:"/trap.png"
    }, ],
    history: "A origem de Charlie Hanks é um arquivo corrompido nos bancos de dados da Federação. Rumores apontam que ele era um agente de operações negras do governo britânico que descobriu o mundo sobrenatural durante uma missão falha nos anos 90. Após ter sua existência 'apagada' pelos seus superiores, ele encontrou refúgio — e lucro — no submundo das lendas. Hoje, ele aceita os trabalhos que ninguém mais quer, incluindo o extermínio de outros caçadores que quebram as regras.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Rifle espiritual",
      imageURI: "/rifle-espiritual.png",
      description: "Charlie invoca sua arma espiritual que somente atinge e causa dano a inimigos com energia folclórica."
    },
    age: 30,
    height: 1.70
  },
  {
    codename: 'Corleone',
    imageURI: '/marcelo-canavarro.png',
    name: 'Marcelo Canavarro',
    country: 'Itália/Brasil',
    description: "Marcelo é a personificação do legado. Carregando o peso de gerações em seus ombros, ele age como um conduíte espiritual para seus antepassados. Em combate, ele nunca está sozinho; sua postura nobre e técnica refinada revelam um homem que luta com a força de uma família inteira.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.png',
    },
    abilities: [{
      name:"Sintonização",
      description:"Marcelo se sintoniza com seus ancestrais através de uma rolagem de 1d6, dependendo do número que cair Marcelo se fortalecerá em diferentes níveis assumindo a força de seu falecido ancestral.",
      image:"/sintonizacao.png"
    }, {
      name:"Saudade eterna",
      description:"Caso Marcelo esteja sintonizado com algum ancestral, consegue aprender uma técnica de seu antepassado e realizar-lá contra seu inimigo.",
      image:"/saudade-eterna.png"
    }, {
      name:"Caça inerte",
      description:"Por ser treinado desde pequeno por sua familia Marcelo tem uma habilidade sobrenatural de rastrear seus adversários desde que tenham energia folclórica, concedendo +5 em testes de rastreio",
      image:"/caca-inerte.png"
    }],
    history: "A família Cannavarro caça o sobrenatural desde o Velho Mundo. Quando imigraram para o Brasil em 1874, durante a Grande Imigração, trouxeram consigo não apenas suas malas, mas rituais antigos e vendetas contra criaturas das trevas. Marcelo cresceu ouvindo as histórias não como contos de fadas, mas como manuais de instrução. Ele não escolheu essa vida; ela foi herdada junto com seu sobrenome. Ele busca honrar o sangue italiano e a terra brasileira, limpando o país de ameaças folclóricas.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Soqueiras",
      imageURI: "/soqueiras.png",
      description: "Marcelo usa as soqueiras de seu falecido pai herança da família Canavarro que carrega sempre as lembrancas de seus falecidos usuários."
    },
    age: 28,
    height: 1.76
  },
  {
    codename: 'Gunther',
    imageURI: '/gunther-sorinas.png',
    name: 'Gunther Sorinas',
    country: 'Áustria',
    description: "Uma montanha de músculos e ressentimento. Gunther é um tanque imparável no campo de batalha, utilizando técnicas de boxe aprimoradas por energia bruta. Ele luta não por paixão, mas por obrigação, o que o torna um combatente pragmático, brutal e extremamente resistente.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.png',
    },
    abilities: [{
      name:"Ruptura",
      description:"Caso gunther acerte seu alvo uma primeira vez ele cria um ponto fraco em seu adversário, que no próximo ataque se o concede +2 de dano e +2 de chance de acerto e caso gunther opte pelo 3 ataque ele tem um bônus de +7 de dano e -5 de acerto. ",
      image:"/ruptura.png"
    },{
      name:"Pressão",
      description:"Gunther por ser constantemente levado ao limite em suas lutas tem a habilidade de caso chegue a metade de sua vida pode fazer uma troca equivalente, ganhando +7 de dano e tomando +7 de dano caso o inimigo o acerte",
      image:"/pressao.png"
    }, {
      name:"Quebra de postura",
      description:"Gunther consegue quebrar a postura de seu adversário, limitando seu uso de energia folclórica, é efetivo somente com inimigos materiais e de pequeno porte",
      image:"/quebra-de-postura.png"
    }, {
      name:"Pulso predatório",
      description:"Gunther libera rajadas de vento que atravessam o ar pela pressão de seus punhos causando dano ao oponente.",
      image:"/pulso-predatorio.png"
    }],
    history: "Gunther era um celebridade mundial, um boxeador peso-pesado invicto. Sua queda não veio de um nocaute no ringue, mas de um exame de sangue da Federação após uma luta onde ele 'acidentalmente' demoliu o crânio de um oponente com uma força impossível. Detectado como um usuário latente de energia folclórica em esportes mundanos (um crime grave), ele recebeu um ultimato: prisão perpétua em uma cela anti-magia ou serviço militar obrigatório caçando lendas. Ele escolheu a liberdade vigiada.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Punhos",
      imageURI: "/punhos.png",
      description: "Gunther usa seus próprios punhos em batalhas."
    },
    age: 45,
    height: 1.94
  },
  {
    codename: 'Xamã',
    imageURI: '/maria-torino.png',
    name: 'Maria Torino',
    country: 'México',
    description: "Maria é uma bateria viva de energia folclórica, uma invocadora prodígio que comanda entidades antigas. Devido a restrições místicas, ela atua como uma general na retaguarda, controlando o campo de batalha através de seus avatares e totens, sem nunca sujar suas próprias mãos de sangue.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.png',
    },
    abilities: [{
      name:"Campos de prova de xibalba",
      description:"Maria força a criatura adversária a entrar em um combate de vontade através de um ritual feito por ela, seria uma rolagem de vontade com a Maria tendo vantagem de +2 de dado, caso Maria vença a criatura na rolagem ela faria com que a criatura perca o próximo turno, caso ela falhe Maria perde o próximo turno e 2 de vida",
      image:"/campos-xibalba.png"
    }, {
      name:"Gêmeos heroicos",
      description:"Maria invoca os gêmeos do submundo Hunahpú & Xbalanqué para o combate, os 2 somente são derrotados caso morram juntos.",
      image:"/gemeos-heroicos.png"
    }, {
      name:"Animal totemico",
      description:"Maria pode invocar animais puramente feitos de energia folclórica para auxiliar em seus combates e investigações:\n" +
        "Aguia - concede Maria a visão sobre uma águia que auxilia a investigação de perímetros.\n" +
        "Serpente - consegue invocar uma serpente que causa dano venenoso a seu adversário.\n" +
        "Urso - invoca um urso que seria voltado ao combate.",
      image:"/animal-totemico.png"
    }, {
      name:"A reescrita do primeiro homem.",
      description:"Maria por sua tremenda quantidade de energia consegue reescrever a ideia de um ser humanoide \"perfeito\" como está no livro de popol vuh, esse ser humanoide tem força física monstruosa mas por ser extremamente forte fisicamente não é controlável por Maria, ele ataca qualquer um dentro de sua área, somente deixa de existir no nosso plano caso seja morto.",
      image:"/primeiro-homem.png"
    }, ],
    history: "Nascida em um sítio arqueológico próximo ao local de repouso do Popol Vuh original, Maria foi exposta a níveis letais de radiação folclórica ainda no útero. Ela é considerada uma anomalia estatística pela Federação, possuindo mais energia bruta que veteranos de guerra. No entanto, tal poder veio com um preço: um antigo pacto maia a proíbe de causar dano direto a qualquer criatura viva, forçando-a a dominar a arte da invocação para sobreviver neste mundo hostil.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Popol Vuh",
      imageURI: "/popol-vuh.png",
      description: "Um livro que é sagrado no México, desde sua nascença Maria o tem como arma, é capaz de invocar lendas e espíritos."
    },
    age: 18,
    height: 1.64
  },
  {
    codename: 'Açougueiro',
    imageURI: '/klaus-hoffman.png',
    name: 'Klaus Hoffman',
    country: 'Alemanha',
    description: "Klaus é um berserker sádico que caminha na linha tênue entre caçador e monstro. Ele não busca justiça, busca sofrimento. Em combate, ele ignora a dor e a morte, rindo enquanto fatia seus inimigos, alimentado por um ódio que transcende a autopreservação.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.png',
    },
    abilities: [{
      name:"Fúria interminável",
      description:"Klaus se enche de fúria e parte pra cima das criaturas sem medo algum, não recebe nenhum tipo de controle de grupo e nem mental.",
      image:"/furia-interminavel.png"
    }, {
      name:"Carnificina",
      description:"Ao dar o golpe final em uma lenda Klaus absorve sua alma em seu cutelo, o fortalecendo o restante do combate conforme o nível dessa lenda.",
      image:"/carnificina.png"
    }, {
      name:"Espírito indomavel",
      description:"Klaus se recusa a morrer em combate para uma lenda, durante o combate mesmo que o HP do jogador chegue a -5 Klaus se recusa a morrer, somente após o combate acabar Klaus é dado como oficialmente morto.",
      image:"/fe.png"
    }, {
      name:"Fé",
      description:"Klaus acredita que é a cura desse mundo doentio e é obrigado a se vangloriar durante os combates a cada dano ou morte causada, caso não faça pode tomar 1d6 de dano pelo seu pacto restritivo.",
      image:"/espirito-indomavel.png"
    },],
    history: "A vida de Klaus acabou no dia em que ele e sua família entraram inadvertidamente em um território de caça na Floresta Negra. Ele foi o único a sobreviver, forçado a assistir ao massacre de sua esposa e filhos por uma lenda local. A mente de Klaus quebrou, sendo reconstruída apenas com ódio puro. Ele se juntou à Federação não para salvar vidas, mas para ter permissão legal de torturar e massacrar o máximo de criaturas possível. Seu 'Pacto de Fé' é uma manifestação distorcida de seu trauma.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Cutelo lamentoso",
      imageURI: "/cutelo.png",
      description: "Klaus absorve as almas das lendas em seu cutelo, mesmo sendo um cutelo normal acredita-se que Klaus fez uma arma mítica apartar de seu ódio contra as criaturas. "
    },
    age: 22,
    height: 1.70
  },
  {
    codename: 'Musashi',
    imageURI: '/emma-katowo.png',
    name: 'Emma Katowo',
    country: 'Japão',
    description: "Emma é a busca pela perfeição marcial encarnada. Uma duelista genial que vê cada monstro não como uma ameaça, mas como um teste para sua lâmina. Calma, precisa e letal, ela combina a disciplina dos samurais com uma curiosidade quase infantil sobre os limites de sua própria força.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.png',
    },
    abilities: [{
      name:"Benção de ashura",
      description:"Emma infunde energia em qualquer arma branca e por 1 round sua arma tem um acerto garantido, porém sua arma quebrará após o ataque.",
      image:"/bencao-de-ashura.png"
    }, {
      name:"Genialidade",
      description:"Emma por ser uma das pessoas mais versáteis em lutas corpo a corpo sempre tem a possibilidade de contra-atacar golpes sofridos, com uma penalidade de -1 caso erre seu golpe o adversário terá outra chance.",
      image:"/genialidade.png"
    }, {
      name:"Corte translucido",
      description:"Emma se prepara por um turno para lançar seu corte reunindo uma boa quantidade de energia folclórica, caso seja interrompida durante o turno de preparação sua ação é perdida, caso consiga se preparar e acertar o ataque no próximo turno com +3 de vantagem seu dano é de dobrado.",
      image:"/corte-translucido.png"
    }, {
      name:"Um com a espada",
      description:"Emma se corta com sua espada sacrificando 5 de vida para se concentrar e entrar em comunhão com sua arma, durante o resto da batalha Emma causará 1,3x de dano em todos ataques.",
      image:"/um-com-a-espada.png"
    }],
    history: "Treinada desde a infância em um dojo isolado nas montanhas por seu tio, um mestre espadachim recluso, Emma rapidamente superou todos os desafios humanos. Aos 12 anos derrotava mestres; aos 18, o tédio era seu maior inimigo. Ao descobrir a existência das Lendas, Emma viu um novo horizonte: oponentes que não morrem com um único golpe comum. Ela viajou para o ocidente e ingressou na Federação para afiar sua arte, buscando o 'Corte Translucido' perfeito que as lendas dizem poder cortar a própria realidade.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Katana ou qualquer tipo de espada",
      imageURI: "/katana.png",
      description: "Emma consegue infundir com energia folclórica de uma maneira excelente deixando suas armas estupidamente letais."
    },
    age: 25,
    height: 1.80
  },
  {
    codename: 'Enforcado',
    imageURI: '/marcus-balar.png',
    name: 'Marcus Balar',
    country: 'Estados Unidos',
    description: "Marcus é um malandro carismático que trata a vida e a morte como um jogo de pôquer. Imprevisível e adaptável, ele usa magia baseada em sorte e cartas de tarot para virar o jogo a seu favor. Ele é o coringa do grupo: pode salvar o dia ou causar o caos, dependendo de como as cartas caem.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.png',
    },
    abilities: [{
      name:"Ler o futuro",
      description:"Marcus joga 3 cartas de tarot para cima que quando caem revelam a ação de seu adversário na próxima rodada, conforme a força do adversário o teste será mais difícil. ",
      image:"/ler-o-futuro.png"
    }, {
      name:"Carteado magico",
      description:"Marcus rola um d6 e dependendo do número que cair será um buff ou debuff a seu adversário. ",
      image:"/carteado-magico.png"
    }, {
      name:"Cartas flutuantes",
      description:"Marcus consegue alterar a gravidade de suas cartas, podendo fazer arremessos impossíveis se feitos comumente causando dano ao inimigo.",
      image: "/cartas-flutuantes.png"
    }, {
      name:"Destino do apostador",
      description:"Marcus rola um d6 e se transforma na carta de tarot que receber recebendo seus buffs ou seus debuffs, exemplo caso caia \"o louco\" markus perde o controle de seu corpo porém causa dano dobrado.",
      image:"/destino.png"
    }],
    history: "Nascido nas ruas e criado em cassinos clandestinos, Marcus sempre teve uma sorte sobrenatural — literalmente. Ele despertou sua energia folclórica cedo, usando-a para trapacear em jogos de azar e escapar de agiotas. Aos 30 anos, após limpar a mesa de um figurão que acabou se revelando um recrutador da Federação, ele descobriu a verdade sobre o mundo. Percebendo que caçar monstros pagava muito melhor que pequenos golpes (e oferecia uma adrenalina viciante), ele trocou os becos pela caçada global.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Baralho enfeitiçado",
      imageURI: "/baralho-enfeiticado.png",
      description: "Marcus usa um baralho de tarot reforçado com energia folclórica como arma dependendo extremamente de sua sorte."
    },
    age: 35,
    height: 1.84
  },
  {
    codename: 'Seiva',
    imageURI: '/dante-mora.jpeg',
    name: 'Dante Mora',
    country: 'Espanha',
    description: "Dante é um híbrido entre homem e planta, um guardião resistente que usa a própria biologia como arma. Ele atua na linha de frente, absorvendo danos e devolvendo espinhos, enquanto regenera seus aliados. Sua presença é inquietante, uma mistura de serenidade natural e perigo biológico.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.png',
    },
    abilities: [{
      name:"Mutação genética",
      description:"Transforma flores e materiais orgânicos em espinhos que podem ser lançados a seus oponentes.",
      image:"/mutacao-genetica.png"
    }, {
      name:"Casca grossa",
      description:"Toda vez que markus é atingido por qualquer criatura devolve 1 terço do dano recebido, por conta de sua genética estranha consegue mutar seu corpo na hora do impacto devolvendo espinhos ao adversário.",
      image:"/casca-grossa.png"
    }, {
      name:"Energia vital",
      description:"Dante envolve toda sua pele em vinhas diminuído o dano de cortes em 10 pontos.",
      image:"/energia-vital.png"
    }, {
      name:"Simbiose",
      description:"Dante por ter um corpo diferente consegue armazenar energia vital em deu corpo, conseguindo curar a si ou a seus aliados 1d6 +1por habilidade.",
      image:"/simbiose.png"
    }],
    history: "Dante sempre preferiu a companhia das plantas à das pessoas. Um botânico brilhante, porém obsessivo, ele encontrou um grimório druídico antigo durante uma expedição aos Pireneus. Decidido a 'sentir' a natureza de verdade, ele realizou um ritual proibido de transmutação em si mesmo. O processo foi agonizante e irreversível, fundindo seu DNA com a flora local. Agora, ele vaga pelo mundo buscando proteger o equilíbrio natural, vendo as Lendas malignas como pragas invasoras que precisam ser podadas.",
    deeds: ["Nenhum até o momento."],
    weapons: {
      name: "Chicotes de vinha",
      imageURI: "/chicotes-de-vinha.png",
      description: "Dante utiliza 2 chicotes espinhosos reforçados com energia folclórica."
    },
    age: 29,
    height: 1.81
  }
]
