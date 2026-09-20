import { Mission } from './model/mission';

export const VIDA_E_MORTE_MISSIONS: Mission[] = [
  {
    id: 'missao-01-anubis',
    code: 'OP-VM-01',
    title: 'O Despertar de Anúbis',
    subtitle: 'Primeira Missão Oficial — O Batismo de Fogo no Egito',
    campaign: 'vida-e-morte',
    location: 'Bacia do Rio Nilo, Baixo Egito',
    territory: 'Confederação das Sombras do Deserto',
    status: 'Concluída',
    threatLevel: 'Ameaça Existencial // Nível Divino',
    primaryTarget: 'Divindade Anúbis & Domínio Inato',
    participants: [
      {
        codename: 'Professor',
        name: 'O Professor',
        role: 'Comando Supremo // Combate Direto',
        campaign: 'vida-e-morte',
        imageURI: '/professor.webp'
      },
      {
        codename: 'Sen',
        name: 'Sen',
        role: 'Novato de Vanguarda // Defesa dos Civis',
        campaign: 'vida-e-morte',
        imageURI: '/sen.webp'
      },
      {
        codename: 'Josh',
        name: 'Josh',
        role: 'Novato de Vanguarda // Contenção de Minions',
        campaign: 'vida-e-morte',
        imageURI: '/josh.webp'
      },
      {
        codename: 'Stateham',
        name: 'Professor Stateham',
        role: 'Mentor Inicial // Preparo Teórico & Alquímico',
        campaign: 'vida-e-morte',
        imageURI: '/professor-stateham.webp'
      }
    ],
    summary: 'A primeira grande missão da saga Vida e Morte. Convocados pessoalmente pelo Caçador Mais Forte em plena aula do Professor Stateham, os aprendizes Sen e Josh foram despachados ao Egito para investigar o sumiço massivo de civis. Ao cruzarem o enigma da ponte sobre as águas, foram lançados no aterrorizante Domínio Inato de Anúbis.',
    briefing: {
      incident: 'Pico anômalo catastrófico de Energia Folclórica detectado no Egito. Vilarejos inteiros começaram a desaparecer da realidade sem deixar vestígios.',
      objective: 'Localizar a origem da ruptura folclórica, resgatar civis aprisionados e neutralizar a entidade anômala antes do colapso do Véu na região.',
      anomalyType: 'Manifestação Divina Primordial com emanação de Domínio Inato territorial permanente.'
    },
    outcome: {
      result: 'Sucesso Total. A entidade divina Anúbis foi completamente pulverizada e extinta.',
      casualties: 'Zero baixas na equipe de caçadores. População civil aprisionada na vila resgatada com sucesso.',
      aftermath: 'O Véu foi restaurado na bacia do Nilo. Sen e Josh concluíram com êxito seu batismo de fogo e consolidaram seu status como caçadores operacionais de alto potencial.'
    },
    chapters: [
      {
        title: 'I. Os Novos Caçadores',
        content: [
          'Em um mundo onde as lendas deixaram de ser apenas histórias, Lendas é um lugar onde o folclore ganhou vida. Criaturas que antes pertenciam apenas a mitos agora caminham pelo mundo real. Algumas são inofensivas. Outras são capazes de destruir cidades inteiras.',
          'Para enfrentar essas ameaças existem os Caçadores, membros de uma poderosa associação responsável por investigar, combater e eliminar as lendas que ameaçam a humanidade. E é nesse mundo que começa a história de dois jovens caçadores.',
          'A primeira missão começa de uma maneira aparentemente comum. Sen e Josh, dois caçadores iniciantes, estão juntos em uma enorme sala de aula, cercados por dezenas de outros alunos que também estão começando sua jornada. O ambiente lembra uma grande faculdade: fileiras de cadeiras ocupam o salão, enquanto dezenas de jovens prestam atenção às explicações de um homem à frente da sala.',
          'O responsável pela aula é o Professor Stateham, antigo Pilar dos Cinco Punhos da Federação, hoje aposentado do campo e encarregado de instruir a nova geração nos fundamentos de sobrevivência. Apoiado em sua bengala mecânico-cronométrica devido à perna esquerda perdida em seu passado de caçadas, Stateham ensina com uma paciência quase penitente: detalha o funcionamento da energia folclórica, intervalos matemáticos de reação e princípios de alquimia tática, preparando os pupilos para recursos que decidem a vida e a morte em missão.'
        ]
      },
      {
        title: 'II. A Chegada do Mais Forte',
        content: [
          'Tudo seguia normalmente. Até que a porta da sala se abre.',
          'A presença dele é imediatamente percebida. O homem conhecido simplesmente como o Mais Forte entra na sala. Ele é considerado o maior caçador já registrado na história.',
          'Sem fazer qualquer anúncio grandioso, ele caminha tranquilamente em direção ao tablado e se aproxima do Professor Stateham. Entre o antigo mestre — que carregou a perda de sua perna no silêncio da academia — e o ex-aprendiz prodígio que aos 13 anos saiu ileso daquela mesma missão fatal, há uma troca de olhares rápida e silenciosa. Um respeito velado que nenhum outro aluno na sala é capaz de decifrar.',
          'Enquanto conversam em voz baixa, os olhos do Mais Forte percorrem lentamente a sala. Aluno por aluno. Até que seu olhar para em dois deles: Sen e Josh.',
          'Sentados lado a lado, os dois percebem que o Mais Forte está olhando diretamente para eles. Então ele simplesmente pede que os dois o acompanhem.',
          'A sala inteira fica em silêncio. Ninguém entende o motivo. Por que justamente eles? Dois caçadores iniciantes que sequer haviam terminado sua formação? Mas ninguém questiona. Afinal, quando o homem mais poderoso entre os caçadores faz um pedido, não é exatamente uma boa ideia recusá-lo.',
          'O Mais Forte não explica muita coisa. Na verdade, praticamente ignora todas as perguntas que Sen e Josh fazem. Durante o caminho, porém, ele age de maneira descontraída, fazendo algumas piadas como se aquilo fosse apenas mais um passeio comum. Até que os três chegam à Federação.'
        ]
      },
      {
        title: 'III. A Sede Viva da Federação',
        content: [
          'A Federação não é apenas um prédio. É praticamente um mundo próprio. Um lugar gigantesco e magnífico, construído através de uma magia que desafia tudo aquilo que os dois jovens conheciam.',
          'Os móveis se movem sozinhos. As salas mudam de posição. Corredores parecem se reorganizar enquanto as pessoas caminham por eles. O próprio prédio parece estar vivo.',
          'É ali que Sen e Josh finalmente recebem as informações sobre sua primeira missão. O destino? Egito. Uma região específica apresenta níveis anormalmente altos de energia folclórica. Mas esse não é o único problema: pessoas começaram a desaparecer nas proximidades. Muitas pessoas. Ninguém sabe exatamente para onde elas estão indo. Ninguém sabe o que está causando os desaparecimentos.',
          'E agora três caçadores estão sendo enviados para descobrir a verdade. Após receberem as instruções, Sen e Josh pegam seus equipamentos iniciais. Pouco tempo depois, embarcam em um avião rumo ao Egito.'
        ]
      },
      {
        title: 'IV. O Caminho até o Desconhecido',
        content: [
          'Depois de chegarem ao país, os três ainda precisam percorrer uma longa distância de carro. O aeroporto fica para trás enquanto eles avançam em direção à região indicada pela Federação.',
          'Até que encontram algo. Um enigma. Uma espécie de passagem que parece conduzi-los para algum lugar além da realidade comum.',
          'A resposta para o enigma está em um rio. Mais precisamente, em uma ponte que parece representar algo muito maior do que uma simples travessia: a passagem da vida.',
          'Sem muitas alternativas, Sen e Josh seguem o Mais Forte. E os três saltam. No instante em que seus corpos atravessam a água, a realidade muda. Eles não estão mais no mundo que conheciam. Eles entraram no Domínio de Anubis.'
        ]
      },
      {
        title: 'V. O Domínio Inato de Anúbis',
        content: [
          'O domínio é uma manifestação inata de Anubis. Diferente de um domínio criado especificamente para impor regras de combate, aquele lugar parece ser uma extensão da própria existência da entidade.',
          'Dentro dele existe uma vila. Pessoas vivem ali. Ou, pelo menos, tentam viver. Elas estão aterrorizadas: são pessoas que também caíram naquele lugar e agora estão presas dentro do domínio, sem encontrar uma maneira de escapar. O medo toma conta de todos.',
          'Até que ele aparece: Anubis. A presença da criatura muda completamente o ambiente. Sen e Josh percebem imediatamente a diferença de poder. Anubis está em um nível completamente diferente do deles. Não existe comparação: eles são apenas iniciantes; ele é uma lenda, uma entidade que existe em uma escala que os dois sequer conseguem compreender.',
          'Então o Mais Forte dá um passo à frente. Ele irá enfrentá-lo. Sozinho.'
        ]
      },
      {
        title: 'VI. O Confronto entre Deuses',
        content: [
          'O combate começa. De um lado, o Mais Forte. Do outro, Anubis. Os dois começam a disputar o controle de seus próprios domínios. É como se duas realidades estivessem tentando ocupar o mesmo espaço.',
          'Enquanto eles lutam, o domínio de Anubis começa a reagir. Criaturas menores surgem ao redor da vila: minions da entidade, criaturas feitas para proteger seu território e eliminar aqueles que invadiram seu domínio.',
          'E é nesse momento que Sen e Josh recebem sua própria missão. Eles não podem enfrentar Anubis — ainda não. Mas podem enfrentar aquilo que está entre eles e os sobreviventes.',
          'Os dois entram em combate contra as criaturas. Cada golpe é uma luta pela sobrevivência; cada criatura derrotada representa mais uma chance de manter as pessoas daquele lugar vivas.',
          'Enquanto isso, acima deles, a batalha entre o Mais Forte e Anubis continua. Turno após turno. Expansão após expansão. Os dois tentam sobrepor seus domínios. Até que, finalmente, algo muda.'
        ]
      },
      {
        title: 'VII. A Criação & O Mundo Perfeito',
        content: [
          'Sen e Josh conseguem derrotar as criaturas. Ao mesmo tempo, o Mais Forte consegue expandir seu próprio domínio.',
          'A paisagem ao redor deles se transforma. Aquela realidade sombria desaparece. No lugar dela surge uma área completamente diferente: verde, cheia de vida. Árvores, plantas e uma natureza exuberante tomam conta do espaço. É um domínio belo, quase perfeito.',
          'Mas sua beleza esconde algo muito mais perigoso: dentro daquele domínio, o Mais Forte possui controle sobre algo que ultrapassa a simples matéria. Ele consegue manipular os átomos da criação e da perfeição.',
          'E, naquele momento, Sen e Josh finalmente começam a compreender por que aquele homem é conhecido como... O Mais Forte.'
        ]
      }
    ]
  }
];
