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
    codename: 'Franz',
    imageURI: '/Franz.webp',
    name: 'Franz Blackwood',
    country: 'Inglaterra',
    description: "Caçador britânico da expedição Inverno de Ossos. Especialista em duelo e abordagem estratégica em frentes hostis. Dossiê em processo de compilação pelo Alto Comando.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [
      {
        name: "Investigação Tática",
        description: "Análise dedutiva rápida de padrões de ataque e fraquezas biomecânicas ou sobrenaturais dos oponentes.",
        image: "/ponto-fraco.webp"
      },
      {
        name: "Postura de Duelo",
        description: "Técnica britânica de esgrima de alta velocidade com foco em contra-ataques precisos e estocadas letais.",
        image: "/corte-translucido.webp"
      },
      {
        name: "Frio Calculista",
        description: "Controle emocional absoluto em momentos de crise, ignorando intimidações e penalidades climáticas severas.",
        image: "/espirito-indomavel.webp"
      },
      {
        name: "Xeque-Mate da Rainha",
        description: "Estocada cirúrgica de energia concentrada que perfura pontos vitais com precisão milimétrica.",
        image: "/ruptura.webp"
      }
    ],
    history: "Franz Blackwood foi convocado para integrar as forças expedicionárias da Federação nas frentes polares da Cordilheira dos Esquecidos. De postura aristocrática e métodos cirúrgicos, seus relatórios de campo demonstram uma frieza inabalável mesmo diante de horrores que abalam mentes comuns.",
    deeds: [
      "Convocado para o contingente da expedição Inverno de Ossos.",
      "Comandou incursões de reconhecimento em zonas de permafrost."
    ],
    weapons: {
      name: "Sabre de Duelo e Bastão Oculto",
      imageURI: "/katana.webp",
      description: "Armamento refinado em liga de aço temperado e prata, balanceado para precisão cirúrgica."
    },
    age: 24,
    height: 1.90,
    campaign: 'inverno-de-ossos'
  },
  {
    codename: 'Pelucido',
    imageURI: '/pelucido.webp',
    name: 'Pelucido Petrov',
    country: 'Rússia',
    description: "Jovem prodígio russo recrutado para a campanha Inverno de Ossos. Especialista em sobrevivência, reconhecimento furtivo e apoio tático no relevo congelado.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [
      {
        name: "Passos Fantasmas",
        description: "Movimenta-se com leveza sobrenatural sobre neve fofa e gelo fino sem deixar marcas ou emitir ruído perceptível.",
        image: "/invisible-hunter.webp"
      },
      {
        name: "Agilidade Ártica",
        description: "Aproveita sua baixa estatura e flexibilidade incomum para esquivas acrobáticas e manobras em frestas estreitas.",
        image: "/trap.webp"
      },
      {
        name: "Olhar de Nevasca",
        description: "Acuidade visual aguda que detecta calor e assinaturas de energia folclórica em meio a nevascas severas.",
        image: "/ponto-fraco.webp"
      },
      {
        name: "Flechada Perfurante do Alvorecer",
        description: "Disparo concentrado em ponto cego que quebra escudos e congelamentos adversários com impacto massivo.",
        image: "/corte-translucido.webp"
      }
    ],
    history: "Nascido nas províncias geladas do leste russo, Pelucido Petrov demonstrou desde muito cedo uma agilidade impressionante e afinidade natural com as forças primordiais do inverno. Apesar da pouca idade e baixa estatura, sua coragem e tenacidade o garantiram na linha de frente da expedição polar.",
    deeds: [
      "Recrutado pelo comitê de reconhecimento para as frentes glaciais.",
      "Sobreviveu a semanas de isolamento em tundra congelada."
    ],
    weapons: {
      name: "Carabina de Precisão e Adaga Glacial",
      imageURI: "/rifle-espiritual.webp",
      description: "Armamento leve e compacto adaptado para condições árticas extremas e tiros de alta precisão."
    },
    age: 19,
    height: 1.50,
    campaign: 'inverno-de-ossos'
  },
  {
    codename: 'Exodus',
    imageURI: '/exodus.webp',
    name: 'Amenhotep II',
    country: 'Egito',
    description: "O Rei do Sangue e da Cinza. Antigo faraó imortalizado como o receptáculo vivo das dez pragas do Egito, transformado em uma força de calamidade ambiental silenciosa e opressiva contra déspotas e entidades corrompidas.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [
      {
        name: "O Sopro dos Gafanhotos e Moscas",
        description: "Por frestas em sua armadura de linho negro e betume, projeta rajadas compactas de insetos necrófagos que cegam adversários, roem escudos de madeira e devoram correias de armaduras.",
        image: "/pulso-predatorio.webp"
      },
      {
        name: "A Ferida do Nilo",
        description: "Ao ser cortado, seu sangue é uma gosma preta e espessa que corrompe imediatamente fontes de água doce, tornando-as veneno intragável e ácido contra inimigos.",
        image: "/carnificina.webp"
      },
      {
        name: "A Pústula e a Febre",
        description: "O contato direto de sua pele enfaixada transmite dores lancinantes nas juntas e febres súbitas nos oponentes, minando severamente a força dos combatentes mais robustos.",
        image: "/mutacao-genetica.webp"
      },
      {
        name: "A Praga das Trevas (Choshech)",
        description: "Técnica Suprema: Suprime a luz ao seu redor, criando uma penumbra espessa e asfixiante onde apenas ele consegue enxergar, simulando a nona praga que cegou o Egito por três dias.",
        image: "/corte-translucido.webp"
      }
    ],
    history: "Considerado um deus vivo na Terra, Amenhotep II governava o Egito com punho de ferro. Quando um profeta exigiu a libertação dos escravos em nome de um Deus desconhecido, o faraó recusou por orgulho, desafiando a divindade rival. Em resposta, as dez pragas arrasaram o império: águas vermelhas de sangue, enxames vorazes, tempestades de fogo, peste no gado e úlceras no povo. O golpe final foi a morte de todos os primogênitos — incluindo o próprio filho do faraó, seu único herdeiro e a única pessoa que amava. Em vez de morrer no colapso do Mar Vermelho, ele foi resgatado com vida, mas seus deuses haviam sido humilhados e o abandonaram. Como punição final, a divindade inimiga não permitiu que ele descansasse. O faraó tornou-se o receptáculo vivo das dez pragas: condenado à imortalidade para que jamais se esquecesse do preço de sua arrogância. Vestindo faixas de linho embebidas em betume negro e uma máscara mortuária de bronze corroído pelo fogo, ele não é um vilão caótico, mas um homem consumido pelo luto e pela vergonha que vaga caçando déspotas e horrores sobrenaturais numa tentativa desesperada de pagar uma dívida moral impossível de quitar.",
    deeds: [
      "Receptáculo imortal das dez pragas bíblicas.",
      "Sobrevivente do colapso cataclísmico do Mar Vermelho.",
      "Caçador penitente de tiranos e déspotas através dos milênios."
    ],
    weapons: {
      name: "Khopesh Real de Bronze Enegrecido",
      imageURI: "/katana.webp",
      description: "A tradicional espada curva egípcia de bronze escurecido. A lâmina nunca foi limpa após os eventos do Êxodo; seu metal carrega o lodo ressecado do Nilo transformado em sangue, causando ferimentos que apodrecem instantaneamente."
    },
    age: 44,
    height: 1.67,
    campaign: 'inverno-de-ossos'
  },
  {
    codename: 'Fumegant',
    imageURI: '/yassuf.webp',
    name: 'Yusuf ibn Khalil',
    country: 'Marrocos',
    description: "Conhecido como 'Fumegant'. Calmo, observador e enigmático. Nascido nas rotas caravaneiras do deserto, Yusuf domina os segredos da fumaça e canaliza os poderes de um narguilé ancestral herdado de sua linhagem.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [
      {
        name: "Segredos da Fumaça",
        description: "Manipula véus densos e aromáticos de fumaça que mascaram a presença do grupo, alteram o ar circundante e confundem a percepção sensorial dos adversários.",
        image: "/invisible-hunter.webp"
      },
      {
        name: "Ritual de Clareza",
        description: "Acende seu narguilé ritual antes de qualquer decisão crucial, alcançando um estado transcendental de clareza mental e percepção tática aprimorada.",
        image: "/ler-o-futuro.webp"
      },
      {
        name: "Essências Proibidas",
        description: "Queima misturas alquímicas raras de ervas sagradas que enfraquecem criaturas folclóricas e desfazem miasmas com vapores purificadores.",
        image: "/energia-vital.webp"
      },
      {
        name: "Espírito das Brasas e Fumaça",
        description: "Técnica Suprema: Desperta a essência primordial do gênio contido no narguilé, projetando torrentes rodopiantes de fumaça incandescente e brasas vorazes.",
        image: "/furia-interminavel.webp"
      }
    ],
    history: "Nascido numa movimentada cidade de caravanas no deserto marroquino, cruzamento de rotas comerciais milenares, Yusuf cresceu em uma tradicional casa de chá onde viajantes de todos os reinos paravam para descansar, fumar narguilé e trocar histórias. Foi lá que aprendeu que a fumaça guarda segredos — dos aromas às formas voláteis que ela desenha no ar. Calmo, observador, fala pouco mas quando fala é para dizer algo com peso. Ele carrega um narguilé antigo, herdado de seu avô, que dizem ter pertencido a um gênio ou espírito do deserto, abastecido com ervas raras de origens lendárias.",
    deeds: [
      "Guardião do narguilé ancestral do espírito do deserto.",
      "Navegador lendário das rotas de tempestade de areia do Saara."
    ],
    weapons: {
      name: "Narguilé Ancestral do Espírito do Deserto",
      imageURI: "/rifle-espiritual.webp",
      description: "Artefato de latão trabalhado com filigranas e gemas do deserto. Serve tanto como canalizador de fumaça e essências quanto como arma contundente."
    },
    age: 23,
    height: 1.79,
    campaign: 'inverno-de-ossos'
  },
  {
    codename: 'Andri',
    imageURI: '/andri.webp',
    name: 'Andri Ásgeirsson',
    country: 'Islândia',
    description: "Colosso nórdico de mais de dois metros de altura oriundo das terras vulcânicas e glaciais da Islândia. Combatente de impacto maciço que quebra as linhas de frente das entidades do permafrost.",
    actor: {
      name: 'Rony Rustico',
      imageURI: '/rony.webp',
    },
    abilities: [
      {
        name: "Força dos Fiordes",
        description: "Golpes pesados de impacto colossal que rompem carapaças de gelo maciço e desestabilizam o equilíbrio de adversários gigantescos.",
        image: "/quebra-de-postura.webp"
      },
      {
        name: "Casca de Gelo e Rocha",
        description: "Sua compleição titânica forjada no frio extremo absorve impactos brutais e concede resistência natural contra intempéries árticas.",
        image: "/casca-grossa.webp"
      },
      {
        name: "Fúria do Norte",
        description: "Canaliza a obstinação lendária dos antigos navegadores escandinavos, aumentando seu ímpeto à medida que o confronto se intensifica.",
        image: "/furia-interminavel.webp"
      },
      {
        name: "Impacto Glacial Sísmico",
        description: "Técnica Suprema: Golpeteia o solo congelado com toda a sua massa, abrindo fissuras no gelo e arremessando fragmentos pontiagudos contra todos os inimigos.",
        image: "/ruptura.webp"
      }
    ],
    history: "Andri Ásgeirsson nasceu sob as auroras boreais nos fiordes mais inóspitos da Islândia. Com mais de dois metros de estatura, ele cresceu enfrentando nevascas e explorando geleiras milenares onde o homem comum sucumbiria em minutos. Convocado para a linha de vanguarda da expedição Inverno de Ossos, Andri atua como a âncora viva do esquadrão, capaz de encarar de frente qualquer titã sepultado sob o gelo.",
    deeds: [
      "Ponta de lança e pilar de vanguarda na expedição Inverno de Ossos.",
      "Desbravador das geleiras esquecidas do Ártico."
    ],
    weapons: {
      name: "Machado de Guerra de Ferro Islandês",
      imageURI: "/cutelo.webp",
      description: "Um machado de batalha pesado, balanceado para as mãos de um gigante e forjado para fender pedra e gelo com um único golpe."
    },
    age: 25,
    height: 2.02,
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
    campaign: 'vida-e-morte',
    rank: 'A',
    federation: 'Federação dos Guardiões da Selva',
    physicalSpecialties: ['Força Colossal (Nível 2)', 'Passos do Relâmpago (Nível 2)'],
    domainName: 'Mano a Mano',
    relations: [
      { role: 'Instruído por', targetCodename: 'Stateham', targetName: 'Professor Stateham' },
      { role: 'Aliado de Vanguarda de', targetCodename: 'Markus-Wolf', targetName: 'Markus Wolf' }
    ]
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
    campaign: 'vida-e-morte',
    rank: 'A',
    federation: 'Federação dos Guardiões da Selva',
    physicalSpecialties: ['Passos do Relâmpago (Nível 2)', 'Percepção Espiritual (Nível 2)'],
    domainName: 'Lua Vermelha',
    relations: [
      { role: 'Instruído por', targetCodename: 'Stateham', targetName: 'Professor Stateham' },
      { role: 'Aliado de Vanguarda de', targetCodename: 'Markus-Wolf', targetName: 'Markus Wolf' }
    ]
  },
  {
    codename: 'Professor',
    imageURI: '/professor.webp',
    name: 'Sem registro oficial',
    title: 'Agente de Risco Existencial Controlado',
    country: 'Desconhecida // Federação Global',
    age: 33,
    classification: 'Ameaça Existencial // Nível Ômega',
    threatLevel: 'Catastrófico / Incalculável',
    quote: 'Para ele, o impossível nunca existiu. Para muitos, ele é uma ameaça maior do que qualquer lenda.',
    isCanonical: true,
    campaign: 'vida-e-morte',
    appearanceCampaigns: ['vida-e-morte', 'canon-global'],
    rank: 'SS',
    federation: 'Comando Supremo da Federação Global',
    physicalSpecialties: ['Força Mítica (Nível 3)', 'Visão Mítica (Nível 3)'],
    domainName: 'Reino da Criação Infinita / Mundo Perfeito',
    domainChant: [
      '"Do pó ao ser, da mente à criação,',
      'Neste domínio, sou pura ascensão.',
      'Tudo que existe, moldo à minha mão,',
      'Matéria e vida, em perfeita união."'
    ],
    description: "Com 33 anos de idade e sem um nome oficial registrado, o Professor é considerado unanimemente o caçador mais forte da história. Desde o momento de seu nascimento, sua presença abalou o equilíbrio do mundo das lendas. Criaturas ancestrais despertaram, selos ruíram e antigas profecias passaram a citá-lo como um erro — ou uma correção — da realidade.",
    history: "Datado pela Federação como o indivíduo com a maior quantidade de Energia Folclórica já registrada, o Professor sempre viveu à frente de seu tempo. Para ele, o impossível nunca existiu. Missões que exigiriam esquadrões inteiros eram resolvidas sozinho, com uma frieza quase didática, como se estivesse apenas demonstrando uma lição.\n\nApesar de seu poder absoluto, nunca buscou cargos, títulos ou reconhecimento dentro da Federação de Caçadores. Recusou posições de comando, ignorou honrarias e permaneceu à margem das decisões políticas. Ninguém sabe ao certo o que ele pensa ou o que deseja. Alguns acreditam que ele luta apenas por curiosidade; outros dizem que ele observa o mundo como um experimento.\n\nO fato é que, embora tenha sido responsável pela eliminação de incontáveis criaturas de nível catastrófico, o Professor não é visto como um salvador. Para muitos, ele é uma ameaça maior do que qualquer lenda.",
    deeds: [
      "Eliminou definitivamente a divindade primordial Anúbis durante a campanha Vida e Morte.",
      "Registrado como o portador da maior quantidade de Energia Folclórica de toda a história.",
      "Completou missões de nível catastrófico solitariamente com frieza estritamente didática.",
      "Sua presença abalou selos milenares e despertou entidades ancestrais desde o nascimento."
    ],
    abilities: [
      {
        name: "Expansão de Domínio: Mundo Perfeito",
        description: "Expande um domínio absoluto onde o usuário possui total controle sobre a matéria da criação. Permite manipular em nível atômico a criação e destruição de qualquer elemento e estrutura física. Na campanha Vida e Morte, utilizou este domínio para exterminar a divindade Anúbis.",
        image: "/campos-xibalba.webp"
      },
      {
        name: "Desintegração",
        description: "Canalizando energia entrópica por meio de seu braço de antimatéria, projeta um raio colateral de destruição absoluta que decompõe e evapora qualquer matéria ou lenda instantaneamente.",
        image: "/ruptura.webp"
      }
    ],
    weapons: {
      name: "Braço de Antimatéria",
      imageURI: "/punhos.webp",
      description: "Membro anômalo transmutado em condutor entrópico e gerador de aniquilação atômica."
    },
    equipmentSummary: "Braço de Antimatéria e Emissor de Desintegração",
    relations: [
      { role: 'Eliminou em Vida e Morte', targetCodename: 'Anubis', targetName: 'Divindade Anúbis' }
    ]
  },
  {
    codename: 'Stateham',
    imageURI: '/professor-stateham.webp',
    name: 'Professor Stateham',
    title: 'Mentor Primordial & Artífice do Tempo',
    country: 'Reino Unido // Federação Central',
    classification: 'Instrutor Emérito // Cronometria Arcana',
    threatLevel: 'Genialidade Tática Absoluta',
    quote: 'O tempo é a única engrenagem que não tolera hesitações nem amadores.',
    isCanonical: true,
    campaign: 'vida-e-morte',
    appearanceCampaigns: ['vida-e-morte', 'canon-global'],
    rank: 'A',
    federation: 'Círculo de Avalon',
    physicalSpecialties: ['Percepção Espiritual (Nível 2)', 'Canalização Rítmica (Nível 2)'],
    description: "Homem de idade avançada, profundamente aficionado por relógios, cadência rítmica e mecanismos rúnicos. Embora rotulado por muitos como excêntrico e beirando a loucura, Stateham é detentor de uma genialidade incomparável na manipulação e ensino de energia folclórica.",
    history: "Professor Stateham foi o instrutor fundamental que ensinou o básico e forjou o alicerce de combate e canalização de Sen e Josh. Com métodos nada convencionais e uma paixão obsessiva pela precisão do tempo, moldou dois dos combatentes mais temidos da história.\n\nSua mente trabalha como uma intrincada caixa de engrenagens: enxerga conexões invisíveis no fluxo da batalha e decifra fraquezas que outros levariam anos para notar. Mesmo fora das linhas de frente ativas, seu conhecimento é considerado patrimônio vitalício da Federação.",
    deeds: [
      "Mentor e instrutor responsável pela formação e sobrevivência inicial de Sen e Josh.",
      "Criador de métodos de canalização energética fundamentados em cronometria e pulso rítmico.",
      "Engenheiro responsável por calibrar relógios rúnicos de contenção durante crises de fissura dimensional."
    ],
    abilities: [
      {
        name: "Engenharia Cronometrada",
        description: "Leitura analítica milimétrica dos intervalos e tempos de reação do oponente, prevendo golpes com precisão cronométrica.",
        image: "/ler-o-futuro.webp"
      },
      {
        name: "Didática Esotérica",
        description: "Habilidade de diagnosticar e harmonizar o fluxo de energia folclórica de seus pupilos em tempo real, desbloqueando potência latente.",
        image: "/genialidade.webp"
      }
    ],
    weapons: {
      name: "Mecanismo Cronológico Rúnico",
      imageURI: "/rifle-espiritual.webp",
      description: "Instrumento de precisão relojoeira com ponteiros arcanos afinados para medir ressonâncias folclóricas."
    },
    equipmentSummary: "Cronômetros Arcanos, Lentes de Precisão e Relógios de Bolso",
    relations: [
      { role: 'Mentor de', targetCodename: 'Sen', targetName: 'Sen' },
      { role: 'Mentor de', targetCodename: 'Josh', targetName: 'Josh' }
    ]
  },
  {
    codename: 'Markus-Wolf',
    imageURI: '/markus-wolf.webp',
    name: 'Markus Wolf',
    title: 'O Arqueiro da Vanguarda Medieval',
    country: 'Alemanha // Federação Central',
    classification: 'Veterano de Guerra // Linha de Frente',
    threatLevel: 'Precisão Balística Pesada',
    quote: 'Na escuridão da vanguarda, o arco não treme e a armadura não cede.',
    isCanonical: true,
    campaign: 'vida-e-morte',
    appearanceCampaigns: ['vida-e-morte', 'canon-global'],
    rank: 'B',
    federation: 'Liga dos Titãs Esquecidos',
    physicalSpecialties: ['Força Colossal (Nível 2)', 'Corpo de Aço (Nível 2)'],
    description: "Caçador destemido e veterano de incontáveis embates, Markus Wolf combateu na vanguarda mais impiedosa da Federação. Equipado com um poderoso arco de caça e protegido por uma couraça de armadura medieval, destacou-se por sua determinação implacável ao lado de Sen e Josh.",
    history: "Markus Wolf lutou lado a lado com Sen e Josh durante as horas mais desesperadoras da campanha Vida e Morte. Os arquivos centrais da Federação guardam poucos registros biográficos pregressos sobre ele — muitos documentos daquela época foram selados ou extraviados em combate.\n\nEntretanto, um dos seus maiores feitos reverbera com força entre os sobreviventes: Markus encarou e combateu diretamente uma colossal e desconhecida lenda de três cabeças, desferindo disparos críticos que abriram brechas vitais para a contenção da monstruosidade.",
    deeds: [
      "Lutou diretamente ao lado de Sen e Josh na linha de frente da campanha Vida e Morte.",
      "Enfrentou heroicamente em combate singular uma colossal lenda desconhecida de três cabeças.",
      "Pioneiro no uso de armaduras de placas medievais reforçadas por encantamentos folclóricos."
    ],
    abilities: [
      {
        name: "Disparo Crítico de Vanguarda",
        description: "Disparo com tensão máxima em seu arco medieval, canalizando energia folclórica perfurante capaz de quebrar couraças pesadas de abominações gigantes.",
        image: "/corte-translucido.webp"
      },
      {
        name: "Baluarte de Aço",
        description: "Postura sólida sob a armadura de placas medieval, defletindo investidas titânicas e dispersando o impacto cinético de golpes colossais.",
        image: "/casca-grossa.webp"
      }
    ],
    weapons: {
      name: "Arco Longo da Vanguarda & Armadura Medieval",
      imageURI: "/rifle-espiritual.webp",
      description: "Arco longo reforçado com fibras de alta resistência e couraça completa forjada para suportar impacto folclórico."
    },
    equipmentSummary: "Arco Longo de Guerra, Flechas Espirituais e Armadura Medieval",
    relations: [
      { role: 'Aliado de Combate de', targetCodename: 'Sen', targetName: 'Sen' },
      { role: 'Aliado de Combate de', targetCodename: 'Josh', targetName: 'Josh' }
    ]
  }
];

export const ONE_SHOT_CHARACTERS: Character[] = CHARACTERS.filter(c => !c.isCanonical && (!c.campaign || c.campaign === 'one-shot'));
export const INVERNO_CHARACTERS: Character[] = CHARACTERS.filter(c => !c.isCanonical && c.campaign === 'inverno-de-ossos');
export const VIDA_E_MORTE_CHARACTERS: Character[] = CHARACTERS.filter(c => !c.isCanonical && c.campaign === 'vida-e-morte');

export const CANON_CHARACTERS: Character[] = CHARACTERS.filter(c => c.isCanonical);
export const VIDA_E_MORTE_CANON_CHARACTERS: Character[] = CHARACTERS.filter(
  c => c.isCanonical && (c.campaign === 'vida-e-morte' || c.appearanceCampaigns?.includes('vida-e-morte'))
);


