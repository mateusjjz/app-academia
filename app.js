// ============================================================================
// REDLINE FIT - SISTEMA DE TREINO E PROGRESSÃO (CASA & ACADEMIA)
// ============================================================================

const STORAGE_KEY = 'redline_fit_state_v1';

// Base de Treinos Completa: Em Casa (Sem Equipamento) & Academia
const WORKOUT_DATABASE = {
  home: {
    label: 'Em Casa (Sem Equipamento)',
    shortBadge: 'EM CASA • SEM EQUIPAMENTO',
    splits: [
      {
        id: 'A',
        tabName: 'Treino A (Peito & Ombros)',
        title: 'Treino A — Peito, Ombros, Tríceps & Core',
        focus: 'EMPURRAR • FORÇA SUPERIOR SEM EQUIPAMENTO',
        description: 'Foco em construção de tronco e braços usando apenas o peso corporal e variações de ângulo.',
        exercises: [
          {
            id: 'home_a1',
            name: 'Flexão de Braços Tradicional (Push-up)',
            muscle: 'Peitoral & Tríceps',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 15 reps (cadência controlada)', weightloss: '15 a 20 reps (ritmo dinâmico)', conditioning: '12 a 15 reps' },
            restSeconds: 60,
            tip: 'Mantenha o abdômen contraído e desça até o peito quase tocar o chão. Se precisar, apoie os joelhos.'
          },
          {
            id: 'home_a2',
            name: 'Flexão Declinada (Pés elevados no sofá/cadeira)',
            muscle: 'Peitoral Superior & Ombros',
            baseSets: 3,
            repsByGoal: { hypertrophy: '8 a 12 reps', weightloss: '12 a 15 reps', conditioning: '10 a 12 reps' },
            restSeconds: 60,
            tip: 'Apoie os pés em uma superfície firme para focar na parte superior do peitoral e deltoide frontal.'
          },
          {
            id: 'home_a3',
            name: 'Pike Push-up (Flexão em V para Ombros)',
            muscle: 'Ombros (Deltoides)',
            baseSets: 3,
            repsByGoal: { hypertrophy: '8 a 12 reps', weightloss: '12 a 15 reps', conditioning: '10 a 12 reps' },
            restSeconds: 60,
            tip: 'Eleve o quadril formando um "V" invertido com o corpo e desça o topo da cabeça em direção ao chão.'
          },
          {
            id: 'home_a4',
            name: 'Flexão Diamante (Mãos próximas)',
            muscle: 'Tríceps & Miolo do Peito',
            baseSets: 3,
            repsByGoal: { hypertrophy: '8 a 12 reps', weightloss: '12 a 15 reps', conditioning: '10 a 12 reps' },
            restSeconds: 60,
            tip: 'Aproxime os indicadores e polegares formando um diamante; mantenha os cotovelos rentes ao tronco.'
          },
          {
            id: 'home_a5',
            name: 'Mergulho Tríceps apoiado na Cadeira/Sofá',
            muscle: 'Tríceps Braquial',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 a 20 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Desça dobrando os cotovelos a 90° mantendo as costas próximas à borda do assento.'
          },
          {
            id: 'home_a6',
            name: 'Prancha Isométrica com Toque no Ombro',
            muscle: 'Core & Estabilidade',
            baseSets: 3,
            repsByGoal: { hypertrophy: '40 segundos', weightloss: '45 segundos (ritmo rápido)', conditioning: '45 segundos' },
            restSeconds: 45,
            tip: 'Evite girar o quadril ao tocar cada ombro alternadamente com a mão oposta.'
          }
        ]
      },
      {
        id: 'B',
        tabName: 'Treino B (Pernas & Glúteos)',
        title: 'Treino B — Pernas Completas & Glúteos',
        focus: 'MEMBROS INFERIORES • PESO DO CORPO',
        description: 'Desenvolvimento de quadríceps, posteriores, glúteos e panturrilha sem precisar de cargas externas.',
        exercises: [
          {
            id: 'home_b1',
            name: 'Agachamento Livre Profundo (Air Squat)',
            muscle: 'Quadríceps & Glúteos',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 a 20 reps (descida em 3s)', weightloss: '20 a 25 reps (ritmo contínuo)', conditioning: '20 reps' },
            restSeconds: 60,
            tip: 'Pés na largura dos ombros, joelhos alinhados com a ponta dos pés e coluna neutra.'
          },
          {
            id: 'home_b2',
            name: 'Agachamento Búlgaro (Pé traseiro apoiado)',
            muscle: 'Quadríceps & Glúteo (Unilateral)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 12 reps por perna', weightloss: '12 a 15 reps por perna', conditioning: '12 reps por perna' },
            restSeconds: 60,
            tip: 'Excelente para gerar alta tensão muscular em casa. Desça o joelho de trás em direção ao solo.'
          },
          {
            id: 'home_b3',
            name: 'Afundo / Passada Alternada',
            muscle: 'Coxas & Glúteos',
            baseSets: 3,
            repsByGoal: { hypertrophy: '12 reps cada perna', weightloss: '16 reps cada perna', conditioning: '14 reps cada perna' },
            restSeconds: 60,
            tip: 'Dê um passo firme à frente e empurre o chão com o calcanhar da perna da frente para retornar.'
          },
          {
            id: 'home_b4',
            name: 'Elevação Pélvica Unilateral no Chão',
            muscle: 'Glúteos & Posterior de Coxa',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps por perna (segure 2s no topo)', weightloss: '15 a 20 reps por perna', conditioning: '15 reps por perna' },
            restSeconds: 45,
            tip: 'Deitado de costas, tire um pé do chão e eleve o quadril contraindo fortemente o glúteo.'
          },
          {
            id: 'home_b5',
            name: 'Cadeira Invisível (Isometria na Parede)',
            muscle: 'Quadríceps (Resistência)',
            baseSets: 3,
            repsByGoal: { hypertrophy: '45 a 60 segundos', weightloss: '45 segundos', conditioning: '60 segundos' },
            restSeconds: 45,
            tip: 'Encoste totalmente as costas na parede com os joelhos em 90 graus e segure firme.'
          },
          {
            id: 'home_b6',
            name: 'Panturrilha Unilateral em Pé',
            muscle: 'Panturrilhas',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 a 20 reps por perna', weightloss: '20 reps por perna', conditioning: '20 reps por perna' },
            restSeconds: 40,
            tip: 'Suba na ponta de um pé só até a contração máxima e controle a descida.'
          }
        ]
      },
      {
        id: 'C',
        tabName: 'Treino C (Costas & Core)',
        title: 'Treino C — Costas, Postura, Bíceps & Abdômen',
        focus: 'CADEIA POSTERIOR & CORE',
        description: 'Fortalecimento dorsal, lombar, estabilizadores da escápula e definição abdominal sem aparelhos.',
        exercises: [
          {
            id: 'home_c1',
            name: 'Superman Dorsal com Retração Escapular',
            muscle: 'Dorsal & Lombar',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 reps (segurando 2s no topo)', weightloss: '20 reps', conditioning: '15 a 18 reps' },
            restSeconds: 45,
            tip: 'Deitado de bruços, eleve o peito do chão puxando os cotovelos para trás como numa puxada.'
          },
          {
            id: 'home_c2',
            name: 'Empuxo Dorsal com Cotovelos no Chão (Reverse Push-up)',
            muscle: 'Costas (Romboides & Trapézio)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 a 18 reps', conditioning: '15 reps' },
            restSeconds: 60,
            tip: 'Deitado de barriga para cima, pressione os cotovelos contra o chão para desencostar as costas do solo.'
          },
          {
            id: 'home_c3',
            name: 'Rosca Bíceps Isométrica / Auto-Resistência com Perna',
            muscle: 'Bíceps Braquial',
            baseSets: 3,
            repsByGoal: { hypertrophy: '10 a 12 reps lentas por braço', weightloss: '15 reps por braço', conditioning: '12 reps por braço' },
            restSeconds: 45,
            tip: 'Sentado, passe a mão sob a coxa e puxe a perna para cima usando a força do bíceps enquanto a perna oferece resistência.'
          },
          {
            id: 'home_c4',
            name: 'Prancha Dinâmica (Comando / Sobe e Desce)',
            muscle: 'Core, Ombros & Braços',
            baseSets: 3,
            repsByGoal: { hypertrophy: '12 reps', weightloss: '16 reps', conditioning: '14 reps' },
            restSeconds: 60,
            tip: 'Alterne da posição de prancha baixa (antebraços) para a prancha alta (mãos).'
          },
          {
            id: 'home_c5',
            name: 'Abdominal Bicicleta (Alternado)',
            muscle: 'Abdômen & Oblíquos',
            baseSets: 4,
            repsByGoal: { hypertrophy: '20 reps totais', weightloss: '30 reps totais', conditioning: '24 reps totais' },
            restSeconds: 45,
            tip: 'Gire o tronco levando o cotovelo em direção ao joelho oposto sem puxar o pescoço.'
          },
          {
            id: 'home_c6',
            name: 'Abdominal Infra (Elevação de Pernas no Solo)',
            muscle: 'Abdômen Inferior',
            baseSets: 3,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 a 20 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Mantenha a lombar firme no chão ao descer as pernas estendidas ou semi-flexionadas.'
          }
        ]
      },
      {
        id: 'D',
        tabName: 'Treino D (HIIT & Cardio)',
        title: 'Treino D — HIIT Metabólico & Corpo Inteiro',
        focus: 'QUEIMA CALÓRICA & CONDICIONAMENTO EXTREMO',
        description: 'Circuito explosivo em casa para acelerar o metabolismo, queimar gordura e ganhar fôlego.',
        exercises: [
          {
            id: 'home_d1',
            name: 'Polichinelos em Ritmo Acelerado',
            muscle: 'Cardio & Corpo Inteiro',
            baseSets: 4,
            repsByGoal: { hypertrophy: '45 segundos', weightloss: '60 segundos', conditioning: '50 segundos' },
            restSeconds: 30,
            tip: 'Mantenha um ritmo constante na ponta dos pés para elevar a frequência cardíaca.'
          },
          {
            id: 'home_d2',
            name: 'Burpee Completo (ou Meio-Burpee sem salto)',
            muscle: 'Corpo Inteiro & Explosão',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 45,
            tip: 'Mãos no chão, jogue os pés para trás em prancha, volte os pés e salte verticalmente.'
          },
          {
            id: 'home_d3',
            name: 'Mountain Climbers (Escalador no Chão)',
            muscle: 'Core & Cardio',
            baseSets: 4,
            repsByGoal: { hypertrophy: '35 segundos', weightloss: '45 segundos', conditioning: '40 segundos' },
            restSeconds: 30,
            tip: 'Em posição de prancha alta, traga os joelhos alternadamente em direção ao peito em velocidade.'
          },
          {
            id: 'home_d4',
            name: 'Agachamento com Salto (Jump Squat)',
            muscle: 'Pernas & Potência',
            baseSets: 3,
            repsByGoal: { hypertrophy: '12 reps explosivas', weightloss: '15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 45,
            tip: 'Amorteça a queda pousando suavemente da ponta do pé para o calcanhar.'
          },
          {
            id: 'home_d5',
            name: 'Corrida Estacionária com Elevação de Joelhos (Skipping)',
            muscle: 'Cardio & Flexores do Quadril',
            baseSets: 4,
            repsByGoal: { hypertrophy: '40 segundos', weightloss: '50 segundos', conditioning: '45 segundos' },
            restSeconds: 30,
            tip: 'Eleve os joelhos até a linha da cintura coordenando com o movimento dos braços.'
          }
        ]
      }
    ]
  },

  gym: {
    label: 'Na Academia (Com Equipamentos)',
    shortBadge: 'NA ACADEMIA • EQUIPAMENTOS',
    splits: [
      {
        id: 'A',
        tabName: 'Treino A (Peito & Tríceps)',
        title: 'Treino A — Peito, Ombros & Tríceps (Push)',
        focus: 'HIPERTROFIA E FORÇA • EMPURRAR',
        description: 'Combinação de exercícios multiarticulares e isoladores em máquinas, polias e pesos livres.',
        exercises: [
          {
            id: 'gym_a1',
            name: 'Supino Reto com Barra ou Halteres',
            muscle: 'Peitoral Maior',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps (carga progressiva)', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 75,
            tip: 'Mantenha as escápulas retraídas no banco e pés firmes no chão.'
          },
          {
            id: 'gym_a2',
            name: 'Supino Inclinado com Halteres',
            muscle: 'Peitoral Superior',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps', weightloss: '12 a 15 reps', conditioning: '10 a 12 reps' },
            restSeconds: 60,
            tip: 'Ajuste o banco entre 30° e 45° e desça os halteres controladamente até a linha do peito.'
          },
          {
            id: 'gym_a3',
            name: 'Crucifixo na Polia (Crossover) ou Peck Deck',
            muscle: 'Peitoral (Isolamento)',
            baseSets: 3,
            repsByGoal: { hypertrophy: '12 a 15 reps (pico de contração)', weightloss: '15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 60,
            tip: 'Foque em esmagar as fibras do peitoral no final do movimento.'
          },
          {
            id: 'gym_a4',
            name: 'Desenvolvimento com Halteres ou Máquina',
            muscle: 'Ombros (Deltoide Anterior/Médio)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 60,
            tip: 'Evite arquear a lombar; suba os halteres sem bater um no outro no topo.'
          },
          {
            id: 'gym_a5',
            name: 'Elevação Lateral com Halteres',
            muscle: 'Deltoide Lateral',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 a 18 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Suba os braços até a linha dos ombros liderando o movimento pelos cotovelos.'
          },
          {
            id: 'gym_a6',
            name: 'Tríceps Pulley na Polia (Corda ou Barra)',
            muscle: 'Tríceps Braquial',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 45,
            tip: 'Trave os cotovelos ao lado do corpo e estenda totalmente o antebraço.'
          }
        ]
      },
      {
        id: 'B',
        tabName: 'Treino B (Costas & Bíceps)',
        title: 'Treino B — Costas, Trapézio & Bíceps (Pull)',
        focus: 'DORSAL LARGA & BRAÇOS • PUXAR',
        description: 'Construção de densidade e largura de costas com puxadas, remadas e trabalho direto de bíceps.',
        exercises: [
          {
            id: 'gym_b1',
            name: 'Puxada Frontal Aberta na Polia (Pulldown)',
            muscle: 'Grande Dorsal',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 60,
            tip: 'Puxe a barra em direção à parte alta do peito estufando o tórax.'
          },
          {
            id: 'gym_b2',
            name: 'Remada Baixa no Triângulo (Polia) ou Máquina',
            muscle: 'Meio das Costas & Dorsal',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 60,
            tip: 'Alongue bem as escápulas à frente e contraia as costas puxando o triângulo ao abdômen.'
          },
          {
            id: 'gym_b3',
            name: 'Remada Unilateral com Halter (Serrote)',
            muscle: 'Dorsal Unilateral',
            baseSets: 3,
            repsByGoal: { hypertrophy: '10 a 12 reps cada lado', weightloss: '12 a 15 reps cada lado', conditioning: '12 reps cada lado' },
            restSeconds: 60,
            tip: 'Traga o halter em direção ao quadril mantendo o tronco paralelo ao banco.'
          },
          {
            id: 'gym_b4',
            name: 'Crucifixo Inverso na Máquina ou Polia (Face Pull)',
            muscle: 'Deltoide Posterior & Trapézio',
            baseSets: 3,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Excelente para postura e estabilidade dos ombros.'
          },
          {
            id: 'gym_b5',
            name: 'Rosca Direta com Barra W ou Halteres',
            muscle: 'Bíceps Braquial',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 60,
            tip: 'Evite balançar o tronco; controle a fase excêntrica (descida).'
          },
          {
            id: 'gym_b6',
            name: 'Rosca Martelo com Halteres',
            muscle: 'Braquial & Antebraço',
            baseSets: 3,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 45,
            tip: 'Pegada neutra (palmas voltadas uma para a outra) durante todo o movimento.'
          }
        ]
      },
      {
        id: 'C',
        tabName: 'Treino C (Pernas & Glúteos)',
        title: 'Treino C — Pernas Completas (Quadríceps, Posterior & Glúteos)',
        focus: 'FORÇA E VOLUME DE MEMBROS INFERIORES',
        description: 'Treino estruturado com máquinas e pesos livres para máximo estímulo nas pernas.',
        exercises: [
          {
            id: 'gym_c1',
            name: 'Agachamento Livre na Barra ou Hack Machine',
            muscle: 'Quadríceps & Glúteos',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps', weightloss: '12 a 15 reps', conditioning: '10 a 12 reps' },
            restSeconds: 90,
            tip: 'Mantenha o core firme, desça com amplitude segura e empurre com toda a planta do pé.'
          },
          {
            id: 'gym_c2',
            name: 'Leg Press 45°',
            muscle: 'Quadríceps & Coxas',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 75,
            tip: 'Não trave totalmente os joelhos no topo e mantenha o quadril sempre apoiado no banco.'
          },
          {
            id: 'gym_c3',
            name: 'Cadeira Extensora',
            muscle: 'Quadríceps (Isolamento)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps (segure 1s no topo)', weightloss: '15 a 18 reps', conditioning: '15 reps' },
            restSeconds: 60,
            tip: 'Segure nas alças laterais para manter o quadril fixo durante a extensão.'
          },
          {
            id: 'gym_c4',
            name: 'Mesa Flexora ou Cadeira Flexora',
            muscle: 'Posterior de Coxa (Isquiotibiais)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 60,
            tip: 'Controle a volta do peso sem deixar as placas baterem.'
          },
          {
            id: 'gym_c5',
            name: 'Stiff com Barra ou Halteres',
            muscle: 'Posterior de Coxa & Glúteos',
            baseSets: 3,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 60,
            tip: 'Projete o quadril para trás mantendo a coluna reta e a barra rente às pernas.'
          },
          {
            id: 'gym_c6',
            name: 'Panturrilha no Leg Press ou Máquina em Pé',
            muscle: 'Panturrilhas',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 a 20 reps', weightloss: '20 reps', conditioning: '15 a 20 reps' },
            restSeconds: 45,
            tip: 'Alongue bem o calcanhar na descida e suba até a contração máxima.'
          }
        ]
      },
      {
        id: 'D',
        tabName: 'Treino D (Core & Cardio)',
        title: 'Treino D — Core, Abdômen & Condicionamento Metabólico',
        focus: 'DEFINIÇÃO ABDOMINAL & GASTO CALÓRICO',
        description: 'Sessão complementar de academia focada em abdômen com carga e cardio estruturado.',
        exercises: [
          {
            id: 'gym_d1',
            name: 'Abdominal Supra na Polia Alta (Crunch Corda)',
            muscle: 'Reto Abdominal',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 a 20 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Curve a coluna aproximando as costelas do quadril, sem sentar nos calcanhares.'
          },
          {
            id: 'gym_d2',
            name: 'Elevação de Pernas na Paralela / Barra',
            muscle: 'Abdômen Inferior',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 45,
            tip: 'Evite balançar o corpo; suba os joelhos contraindo o abdômen inferior.'
          },
          {
            id: 'gym_d3',
            name: 'Prancha Isométrica no Solo',
            muscle: 'Core Profundo',
            baseSets: 3,
            repsByGoal: { hypertrophy: '60 segundos', weightloss: '60 segundos', conditioning: '60 segundos' },
            restSeconds: 45,
            tip: 'Corpo alinhado da cabeça aos calcanhares, contraindo abdômen e glúteos.'
          },
          {
            id: 'gym_d4',
            name: 'HIIT na Esteira, Bike ou Escada Ergométrica',
            muscle: 'Cardiorrespiratório & Queima',
            baseSets: 1,
            repsByGoal: { hypertrophy: '15 min (moderado)', weightloss: '20 a 25 min (Tiros de 1 min forte / 1 min leve)', conditioning: '20 min contínuo' },
            restSeconds: 60,
            tip: 'Ajuste a intensidade para finalizar o treino com alto gasto energético.'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // TREINOS FEMININOS (BASEADOS EM TREINO MESTRE, HIPERTROFIA.ORG & MUSCLEWIKI)
  // Divisão recomendada: Lower/Upper 2x com ênfase em Glúteos, Coxas, Core & Tone
  // ==========================================================================
  female_home: {
    label: 'Em Casa Feminino (Sem Equipamento)',
    shortBadge: 'FEMININO • EM CASA',
    splits: [
      {
        id: 'A',
        tabName: 'Treino A (Glúteo & Coxa)',
        title: 'Treino A — Glúteo Máximo, Quadríceps & Pernas',
        focus: 'LOWER BODY 1 • BASE INFERIOR SEM EQUIPAMENTO (TREINO MESTRE)',
        description: 'Séries focadas em tensão mecânica, pausas isométricas e amplitude máxima para modelar coxas e glúteos em casa.',
        exercises: [
          {
            id: 'f_home_a1',
            name: 'Agachamento Sumô Profundo (Pés Afastados a 45°)',
            muscle: 'Glúteos, Quadríceps & Interno de Coxa',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 a 20 reps (descida controlada 3s)', weightloss: '20 a 25 reps (ritmo contínuo)', conditioning: '20 reps' },
            restSeconds: 60,
            tip: 'Afaste os pés além da largura dos ombros com pontas viradas para fora; contraia os glúteos ao subir.'
          },
          {
            id: 'f_home_a2',
            name: 'Elevação Pélvica no Solo com Pausa (Glute Bridge)',
            muscle: 'Glúteo Máximo (Alvo Principal)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 a 20 reps (segure 2s no topo)', weightloss: '20 a 25 reps', conditioning: '20 reps' },
            restSeconds: 45,
            tip: 'Empurre o chão com os calcanhares e segure 2 segundos de contração máxima no topo de cada repetição.'
          },
          {
            id: 'f_home_a3',
            name: 'Agachamento Búlgaro (Pé Traseiro no Sofá/Cadeira)',
            muscle: 'Glúteos & Quadríceps Unilateral',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 12 reps por perna', weightloss: '12 a 15 reps por perna', conditioning: '12 reps por perna' },
            restSeconds: 60,
            tip: 'Incline levemente o tronco à frente para aumentar o recrutamento do glúteo da perna da frente.'
          },
          {
            id: 'f_home_a4',
            name: 'Afundo / Passada Alternada Profunda',
            muscle: 'Coxas & Glúteos',
            baseSets: 3,
            repsByGoal: { hypertrophy: '12 reps cada perna', weightloss: '16 reps cada perna', conditioning: '14 reps cada perna' },
            restSeconds: 60,
            tip: 'Mantenha o joelho da frente alinhado com a ponta do pé e desça até quase tocar o joelho de trás no chão.'
          },
          {
            id: 'f_home_a5',
            name: 'Cadeira Invisível na Parede (Isometria)',
            muscle: 'Quadríceps (Definição & Resistência)',
            baseSets: 3,
            repsByGoal: { hypertrophy: '45 a 60 segundos', weightloss: '50 segundos', conditioning: '60 segundos' },
            restSeconds: 45,
            tip: 'Joelhos em 90°, costas coladas na parede e respiração controlada.'
          },
          {
            id: 'f_home_a6',
            name: 'Panturrilha Unilateral no Degrau / Em Pé',
            muscle: 'Panturrilhas',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 a 20 reps por perna', weightloss: '20 reps por perna', conditioning: '20 reps por perna' },
            restSeconds: 40,
            tip: 'Amplitude máxima para definir e melhorar o retorno venoso das pernas.'
          }
        ]
      },
      {
        id: 'B',
        tabName: 'Treino B (Superiores & Cintura)',
        title: 'Treino B — Superiores Tonificados, Postura & Cintura Fina',
        focus: 'UPPER BODY & CORE • DEFINIÇÃO SEM EQUIPAMENTO',
        description: 'Tonificação de braços, ombros e costas para postura elegante, combinada com trabalho intenso de linha de cintura.',
        exercises: [
          {
            id: 'f_home_b1',
            name: 'Flexão de Braços (Tradicional ou com Joelhos Apoiados)',
            muscle: 'Peitoral, Ombros & Firmeza de Braços',
            baseSets: 3,
            repsByGoal: { hypertrophy: '10 a 15 reps', weightloss: '15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 60,
            tip: 'Apoiar os joelhos permite manter a execução perfeita e trabalhar peito, ombros e tríceps sem sobrecarregar a lombar.'
          },
          {
            id: 'f_home_b2',
            name: 'Mergulho de Tríceps no Sofá ou Cadeira (Bench Dips)',
            muscle: 'Tríceps (Firmeza na Parte Posterior do Braço)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 a 18 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Exercício #1 em casa para combater a flacidez do tríceps ("tchauzinho"). Mantenha os cotovelos apontados para trás.'
          },
          {
            id: 'f_home_b3',
            name: 'Superman Dorsal com Puxada Escapular no Solo',
            muscle: 'Costas, Postura & Lombar',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 reps (segure 2s)', weightloss: '18 a 20 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Deitada de bruços, eleve o tronco puxando os cotovelos para trás, juntando as escápulas.'
          },
          {
            id: 'f_home_b4',
            name: 'Prancha Alta com Toque Alternado nos Ombros',
            muscle: 'Ombros (Deltoides) & Core Profundo',
            baseSets: 3,
            repsByGoal: { hypertrophy: '40 segundos', weightloss: '45 segundos', conditioning: '45 segundos' },
            restSeconds: 45,
            tip: 'Mantenha o abdômen travado evitando balançar o quadril de um lado para o outro.'
          },
          {
            id: 'f_home_b5',
            name: 'Abdominal Bicicleta (Foco em Oblíquos e Cintura)',
            muscle: 'Abdômen & Oblíquos',
            baseSets: 4,
            repsByGoal: { hypertrophy: '24 reps totais', weightloss: '30 reps totais', conditioning: '24 reps totais' },
            restSeconds: 45,
            tip: 'Gire bem o tronco aproximando o cotovelo do joelho oposto.'
          },
          {
            id: 'f_home_b6',
            name: 'Prancha Isométrica com Contração de Transverso (Vácuo)',
            muscle: 'Linha de Cintura & Core',
            baseSets: 3,
            repsByGoal: { hypertrophy: '45 a 60 segundos', weightloss: '60 segundos', conditioning: '60 segundos' },
            restSeconds: 45,
            tip: 'Puxe o umbigo em direção às costas enquanto sustenta a prancha para fortalecer a cinta abdominal natural.'
          }
        ]
      },
      {
        id: 'C',
        tabName: 'Treino C (Posterior & Glúteo)',
        title: 'Treino C — Posterior de Coxa & Glúteo Isolado (Contorno)',
        focus: 'LOWER BODY 2 • GLÚTEO MÉDIO, MÁXIMO E POSTERIORES',
        description: 'Segundo estímulo semanal de inferiores focado em isolamento de glúteos, lateral de quadril e posteriores de coxa.',
        exercises: [
          {
            id: 'f_home_c1',
            name: 'Elevação Pélvica Unilateral (Single-Leg Hip Thrust)',
            muscle: 'Glúteo Máximo & Posterior de Coxa',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps por perna (pausa 2s no topo)', weightloss: '15 reps por perna', conditioning: '15 reps por perna' },
            restSeconds: 60,
            tip: 'Fazer com uma perna só dobra a carga sobre o glúteo sem precisar de barra ou anilhas!'
          },
          {
            id: 'f_home_c2',
            name: 'Coice de Glúteo em 4 Apoios (Donkey Kicks)',
            muscle: 'Glúteo Máximo (Isolamento)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 a 20 reps por perna', weightloss: '20 reps por perna', conditioning: '18 reps por perna' },
            restSeconds: 45,
            tip: 'Empurre a sola do pé em direção ao teto mantendo o joelho dobrado em 90° e aperte o glúteo no topo.'
          },
          {
            id: 'f_home_c3',
            name: 'Abdução de Quadril Deitada de Lado (Elevação Lateral)',
            muscle: 'Glúteo Médio (Lateral do Glúteo)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '18 a 20 reps por lado', weightloss: '20 a 25 reps por lado', conditioning: '20 reps por lado' },
            restSeconds: 40,
            tip: 'Essencial para desenhar o contorno arredondado lateral do glúteo. Mantenha a ponta do pé levemente apontada para baixo.'
          },
          {
            id: 'f_home_c4',
            name: 'Stiff Unilateral Sem Peso (Aviãozinho / RDL Unilateral)',
            muscle: 'Posterior de Coxa & Glúteos',
            baseSets: 3,
            repsByGoal: { hypertrophy: '12 reps por perna', weightloss: '15 reps por perna', conditioning: '12 a 15 reps por perna' },
            restSeconds: 45,
            tip: 'Incline o tronco à frente elevando uma perna atrás até sentir alongar bem a parte de trás da coxa de apoio.'
          },
          {
            id: 'f_home_c5',
            name: 'Ponte de Glúteos com Pés Unidos (Frog Pump)',
            muscle: 'Glúteos (Pump Metabólico)',
            baseSets: 3,
            repsByGoal: { hypertrophy: '25 a 30 reps contínuas', weightloss: '30 reps', conditioning: '25 reps' },
            restSeconds: 45,
            tip: 'Una sola com sola dos pés deixando os joelhos caírem para os lados e eleve o quadril até queimar o glúteo.'
          },
          {
            id: 'f_home_c6',
            name: 'Abdominal Infra no Solo (Elevação de Pernas)',
            muscle: 'Abdômen Inferior',
            baseSets: 3,
            repsByGoal: { hypertrophy: '15 reps', weightloss: '18 a 20 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Foco direto na região inferior do abdômen. Desça as pernas sem desencostar a lombar do tapete.'
          }
        ]
      },
      {
        id: 'D',
        tabName: 'Treino D (HIIT & Abdômen)',
        title: 'Treino D — HIIT Queima de Gordura & Abdômen Definido',
        focus: 'METABÓLICO & DEFINIÇÃO CORPORAL',
        description: 'Circuito de alta intensidade recomendado para acelerar o gasto calórico e definir a musculatura.',
        exercises: [
          {
            id: 'f_home_d1',
            name: 'Agachamento Explosivo (Jump Squat ou Agachamento Rápido)',
            muscle: 'Glúteos, Coxas & Cardio',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 a 20 reps', conditioning: '15 reps' },
            restSeconds: 40,
            tip: 'Amorteça a descida mantendo o quadril projetado para trás.'
          },
          {
            id: 'f_home_d2',
            name: 'Mountain Climbers (Escalador no Solo)',
            muscle: 'Abdômen & Cardio',
            baseSets: 4,
            repsByGoal: { hypertrophy: '35 segundos', weightloss: '45 segundos', conditioning: '40 segundos' },
            restSeconds: 30,
            tip: 'Traga os joelhos em direção ao peito de forma dinâmica mantendo o abdômen firme.'
          },
          {
            id: 'f_home_d3',
            name: 'Polichinelos em Ritmo Acelerado',
            muscle: 'Cardiorrespiratório & Corpo Inteiro',
            baseSets: 4,
            repsByGoal: { hypertrophy: '45 segundos', weightloss: '60 segundos', conditioning: '50 segundos' },
            restSeconds: 30,
            tip: 'Excelente para manter a frequência cardíaca na zona de queima de gordura.'
          },
          {
            id: 'f_home_d4',
            name: 'Passada Alternada Dinâmica',
            muscle: 'Pernas, Glúteos & Resistência',
            baseSets: 3,
            repsByGoal: { hypertrophy: '16 reps totais', weightloss: '20 reps totais', conditioning: '18 reps totais' },
            restSeconds: 40,
            tip: 'Alterne as pernas mantendo o tronco ereto e abdômen ativado.'
          },
          {
            id: 'f_home_d5',
            name: 'Abdominal Canivete Alternado (Mão no Pé Oposto)',
            muscle: 'Abdômen Completo',
            baseSets: 4,
            repsByGoal: { hypertrophy: '16 reps', weightloss: '20 reps', conditioning: '18 reps' },
            restSeconds: 40,
            tip: 'Suba o tronco tocando a mão direita no pé esquerdo e vice-versa.'
          }
        ]
      }
    ]
  },

  female_gym: {
    label: 'Na Academia Feminino (Lower/Upper 2x)',
    shortBadge: 'FEMININO • ACADEMIA',
    splits: [
      {
        id: 'A',
        tabName: 'Treino A (Glúteo & Quads)',
        title: 'Treino A — Inferiores 1: Quadríceps & Glúteo Máximo',
        focus: 'PROTOCOLO HIPERTROFIA.ORG & TREINO MESTRE • LOWER 1',
        description: 'Seleção ouro de exercícios compostos e isoladores para construção de coxas torneadas e glúteo máximo.',
        exercises: [
          {
            id: 'f_gym_a1',
            name: 'Agachamento Livre na Barra ou Agachamento Sumô no Smith',
            muscle: 'Quadríceps & Glúteo Máximo',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps (amplitude profunda)', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 75,
            tip: 'Base dos melhores treinos femininos: desça abaixo da linha paralela mantendo a coluna neutra.'
          },
          {
            id: 'f_gym_a2',
            name: 'Elevação Pélvica na Barra ou Máquina (Hip Thrust)',
            muscle: 'Glúteo Máximo (Construtor #1)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps (segure 2s no topo)', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 75,
            tip: 'Apontado pela ciência esportiva como o exercício de maior ativação do glúteo máximo. Queixo no peito e olhar à frente.'
          },
          {
            id: 'f_gym_a3',
            name: 'Leg Press 45° (Pés na Largura dos Ombros)',
            muscle: 'Quadríceps & Glúteos',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 60,
            tip: 'Desça a plataforma até o máximo de amplitude sem tirar o quadril do encosto.'
          },
          {
            id: 'f_gym_a4',
            name: 'Agachamento Búlgaro com Halteres ou no Smith',
            muscle: 'Glúteos & Quadríceps Unilateral',
            baseSets: 3,
            repsByGoal: { hypertrophy: '8 a 10 reps por perna', weightloss: '12 reps por perna', conditioning: '10 a 12 reps por perna' },
            restSeconds: 60,
            tip: 'Corrige assimetrias entre as pernas e alonga profundamente as fibras do glúteo.'
          },
          {
            id: 'f_gym_a5',
            name: 'Cadeira Extensora (Com Pico de Contração)',
            muscle: 'Quadríceps (Definição da Coxa)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 a 18 reps', conditioning: '15 reps' },
            restSeconds: 60,
            tip: 'Segure 1 segundo no topo de cada repetição para desenhar os cortes do quadríceps.'
          },
          {
            id: 'f_gym_a6',
            name: 'Panturrilha no Leg Press ou Máquina Sentada',
            muscle: 'Panturrilhas',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 a 20 reps', weightloss: '20 reps', conditioning: '15 a 20 reps' },
            restSeconds: 45,
            tip: 'Controle a descida alongando bem o tendão e suba até a ponta máxima dos pés.'
          }
        ]
      },
      {
        id: 'B',
        tabName: 'Treino B (Superiores & Core)',
        title: 'Treino B — Superiores Definidos, Postura & Linha de Cintura',
        focus: 'UPPER BODY FEMININO • SIMETRIA E PROPORÇÃO (HIPERTROFIA.ORG)',
        description: 'Treino essencial para definir braços e ombros, melhorar a postura e valorizar o aspecto de cintura mais fina.',
        exercises: [
          {
            id: 'f_gym_b1',
            name: 'Puxada Alta Frontal na Polia (Pulldown)',
            muscle: 'Dorsal & Postura (Efeito Cintura Fina)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 60,
            tip: 'Tonificar as costas cria uma proporção visual que destaca ainda mais a curva da cintura e do quadril.'
          },
          {
            id: 'f_gym_b2',
            name: 'Remada Baixa no Triângulo (Polia)',
            muscle: 'Meio das Costas & Escápulas',
            baseSets: 3,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 60,
            tip: 'Mantenha o peito aberto e puxe o triângulo em direção ao abdômen.'
          },
          {
            id: 'f_gym_b3',
            name: 'Desenvolvimento com Halteres Sentada',
            muscle: 'Ombros (Deltoides)',
            baseSets: 3,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 60,
            tip: 'Suba os halteres acima da cabeça controlando o movimento sem arquear a lombar.'
          },
          {
            id: 'f_gym_b4',
            name: 'Elevação Lateral com Halteres',
            muscle: 'Ombro Lateral (Contorno dos Braços)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Dá aquele contorno bonito entre o ombro e o braço. Suba até a linha dos ombros.'
          },
          {
            id: 'f_gym_b5',
            name: 'Tríceps Pulley na Polia com Corda',
            muscle: 'Tríceps Braquial (Firmeza Posterior)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 45,
            tip: 'Abra levemente a corda no final da extensão mantendo os cotovelos fixos ao lado do tronco.'
          },
          {
            id: 'f_gym_b6',
            name: 'Abdominal Supra na Polia Alta ou Solo',
            muscle: 'Abdômen & Core',
            baseSets: 4,
            repsByGoal: { hypertrophy: '15 reps', weightloss: '15 a 20 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Solte todo o ar pela boca no momento de maior contração abdominal.'
          }
        ]
      },
      {
        id: 'C',
        tabName: 'Treino C (Posterior & Glúteo)',
        title: 'Treino C — Inferiores 2: Posterior de Coxa & Glúteo Médio/Máximo',
        focus: 'PROTOCOLO TREINO MESTRE & MUSCLEWIKI • LOWER 2',
        description: 'Foco intenso na cadeia posterior (isquiotibiais) e no glúteo médio/máximo para projeção e formato arredondado.',
        exercises: [
          {
            id: 'f_gym_c1',
            name: 'Stiff com Barra ou Levantamento Terra Romeno (RDL com Halteres)',
            muscle: 'Posterior de Coxa & Glúteos',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 75,
            tip: 'Jogue o quadril para trás mantendo os joelhos semi-flexionados e a barra colada nas coxas.'
          },
          {
            id: 'f_gym_c2',
            name: 'Elevação Pélvica na Máquina ou Barra (Hip Thrust)',
            muscle: 'Glúteo Máximo',
            baseSets: 4,
            repsByGoal: { hypertrophy: '8 a 12 reps (carga alta)', weightloss: '12 a 15 reps', conditioning: '12 reps' },
            restSeconds: 75,
            tip: 'Segundo estímulo semanal de elevação pélvica para máxima hipertrofia glútea.'
          },
          {
            id: 'f_gym_c3',
            name: 'Mesa Flexora ou Cadeira Flexora',
            muscle: 'Posterior de Coxa (Isolamento)',
            baseSets: 4,
            repsByGoal: { hypertrophy: '10 a 12 reps', weightloss: '12 a 15 reps', conditioning: '12 a 15 reps' },
            restSeconds: 60,
            tip: 'Mantenha o quadril pressionado contra o banco durante toda a flexão de joelhos.'
          },
          {
            id: 'f_gym_c4',
            name: 'Cadeira Abdutora (Tronco Levemente Inclinado à Frente)',
            muscle: 'Glúteo Médio & Superior',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps (segure 1s aberta)', weightloss: '15 a 20 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Inclinar suavemente o tronco à frente com coluna reta aumenta o recrutamento das fibras superiores do glúteo.'
          },
          {
            id: 'f_gym_c5',
            name: 'Glúteo Coice na Polia Baixa (Cabo com Caneleira)',
            muscle: 'Glúteo Máximo & Médio (Detalhe)',
            baseSets: 3,
            repsByGoal: { hypertrophy: '12 a 15 reps por perna', weightloss: '15 reps por perna', conditioning: '12 a 15 reps por perna' },
            restSeconds: 45,
            tip: 'Chute para trás e levemente em diagonal (30°) sem girar a lombar para ativar todas as fibras do glúteo.'
          },
          {
            id: 'f_gym_c6',
            name: 'Passada / Afundo com Halteres',
            muscle: 'Glúteos & Coxas',
            baseSets: 3,
            repsByGoal: { hypertrophy: '10 a 12 passos por perna', weightloss: '14 passos por perna', conditioning: '12 passos por perna' },
            restSeconds: 60,
            tip: 'Excelente finalizador para esgotar as fibras de glúteo e quadríceps.'
          }
        ]
      },
      {
        id: 'D',
        tabName: 'Treino D (Core & HIIT)',
        title: 'Treino D — Abdômen, Cintura & Condicionamento Cardio',
        focus: 'DEFINIÇÃO ABDOMINAL & ESCADA/ESTEIRA',
        description: 'Sessão focada em definição de abdômen inferior/oblíquos, retoque de glúteo médio e queima calórica.',
        exercises: [
          {
            id: 'f_gym_d1',
            name: 'Abdominal Infra no Banco ou Paralela (Elevação de Pernas)',
            muscle: 'Abdômen Inferior',
            baseSets: 4,
            repsByGoal: { hypertrophy: '12 a 15 reps', weightloss: '15 a 20 reps', conditioning: '15 reps' },
            restSeconds: 45,
            tip: 'Concentre a força na parte baixa do abdômen ao elevar os joelhos.'
          },
          {
            id: 'f_gym_d2',
            name: 'Prancha Isométrica + Prancha Lateral',
            muscle: 'Core Profundo & Linha de Cintura',
            baseSets: 3,
            repsByGoal: { hypertrophy: '45 segundos', weightloss: '60 segundos', conditioning: '50 segundos' },
            restSeconds: 45,
            tip: 'Fortalece o transverso abdominal mantendo a barriga firme e definida.'
          },
          {
            id: 'f_gym_d3',
            name: 'Abdução de Quadril na Polia Baixa em Pé',
            muscle: 'Glúteo Médio (Estímulo Extra)',
            baseSets: 3,
            repsByGoal: { hypertrophy: '15 reps por perna', weightloss: '15 a 18 reps por perna', conditioning: '15 reps por perna' },
            restSeconds: 45,
            tip: 'Estímulo metabólico extra sem sobrecarregar as articulações.'
          },
          {
            id: 'f_gym_d4',
            name: 'HIIT na Escada Ergométrica ou Esteira Inclinada',
            muscle: 'Cardio, Queima Calórica & Glúteos',
            baseSets: 1,
            repsByGoal: { hypertrophy: '15 a 20 min moderado', weightloss: '25 min (Alternando 1 min forte / 1 min moderado)', conditioning: '20 min contínuo' },
            restSeconds: 60,
            tip: 'A escada ergométrica e a caminhada inclinada queimam muitas calorias enquanto mantêm os glúteos ativados.'
          }
        ]
      }
    ]
  }
};

const GOAL_LABELS = {
  hypertrophy: 'Ganho de Massa & Força',
  weightloss: 'Emagrecimento & Definição',
  conditioning: 'Condicionamento & Saúde'
};

const MUSCLE_LABELS = {
  peitoral: 'Peitoral',
  ombros: 'Ombros (Deltoides)',
  triceps: 'Tríceps Braquial',
  biceps: 'Bíceps Braquial',
  antebraco: 'Antebraços',
  abdomen: 'Abdômen & Core',
  trapezio: 'Trapézio',
  dorsal: 'Grande Dorsal (Costas)',
  lombar: 'Lombar & Eretores',
  gluteos: 'Glúteos',
  quadriceps: 'Quadríceps (Coxas)',
  posterior: 'Posterior de Coxa',
  panturrilhas: 'Panturrilhas'
};

// Mapeamento Biomecânico de cada Exercício (Músculos Primários e Sinergistas)
const EXERCISE_MUSCLE_MAP = {
  // EM CASA - TREINO A
  home_a1: { primary: ['peitoral'], secondary: ['triceps', 'ombros', 'abdomen'] },
  home_a2: { primary: ['peitoral', 'ombros'], secondary: ['triceps'] },
  home_a3: { primary: ['ombros'], secondary: ['triceps', 'trapezio'] },
  home_a4: { primary: ['triceps', 'peitoral'], secondary: ['ombros'] },
  home_a5: { primary: ['triceps'], secondary: ['ombros', 'peitoral'] },
  home_a6: { primary: ['abdomen'], secondary: ['ombros', 'lombar'] },

  // EM CASA - TREINO B
  home_b1: { primary: ['quadriceps', 'gluteos'], secondary: ['posterior', 'abdomen'] },
  home_b2: { primary: ['quadriceps', 'gluteos'], secondary: ['posterior', 'panturrilhas'] },
  home_b3: { primary: ['quadriceps', 'gluteos'], secondary: ['posterior'] },
  home_b4: { primary: ['gluteos', 'posterior'], secondary: ['lombar'] },
  home_b5: { primary: ['quadriceps'], secondary: ['gluteos', 'panturrilhas'] },
  home_b6: { primary: ['panturrilhas'], secondary: [] },

  // EM CASA - TREINO C
  home_c1: { primary: ['lombar', 'dorsal'], secondary: ['gluteos', 'trapezio'] },
  home_c2: { primary: ['dorsal', 'trapezio'], secondary: ['ombros', 'biceps'] },
  home_c3: { primary: ['biceps'], secondary: ['antebraco'] },
  home_c4: { primary: ['abdomen', 'ombros'], secondary: ['triceps', 'lombar'] },
  home_c5: { primary: ['abdomen'], secondary: ['quadriceps'] },
  home_c6: { primary: ['abdomen'], secondary: ['quadriceps'] },

  // EM CASA - TREINO D (HIIT)
  home_d1: { primary: ['panturrilhas', 'ombros'], secondary: ['quadriceps', 'abdomen'] },
  home_d2: { primary: ['peitoral', 'quadriceps', 'abdomen'], secondary: ['ombros', 'triceps', 'gluteos'] },
  home_d3: { primary: ['abdomen'], secondary: ['ombros', 'quadriceps'] },
  home_d4: { primary: ['quadriceps', 'gluteos', 'panturrilhas'], secondary: ['posterior'] },
  home_d5: { primary: ['quadriceps', 'panturrilhas'], secondary: ['abdomen', 'gluteos'] },

  // ACADEMIA - TREINO A
  gym_a1: { primary: ['peitoral'], secondary: ['triceps', 'ombros'] },
  gym_a2: { primary: ['peitoral', 'ombros'], secondary: ['triceps'] },
  gym_a3: { primary: ['peitoral'], secondary: ['ombros'] },
  gym_a4: { primary: ['ombros'], secondary: ['triceps', 'trapezio'] },
  gym_a5: { primary: ['ombros'], secondary: ['trapezio'] },
  gym_a6: { primary: ['triceps'], secondary: ['antebraco'] },

  // ACADEMIA - TREINO B
  gym_b1: { primary: ['dorsal'], secondary: ['biceps', 'trapezio', 'antebraco'] },
  gym_b2: { primary: ['dorsal', 'trapezio'], secondary: ['biceps', 'lombar'] },
  gym_b3: { primary: ['dorsal'], secondary: ['biceps', 'trapezio', 'antebraco'] },
  gym_b4: { primary: ['ombros', 'trapezio'], secondary: ['dorsal'] },
  gym_b5: { primary: ['biceps'], secondary: ['antebraco'] },
  gym_b6: { primary: ['biceps', 'antebraco'], secondary: [] },

  // ACADEMIA - TREINO C
  gym_c1: { primary: ['quadriceps', 'gluteos'], secondary: ['posterior', 'lombar'] },
  gym_c2: { primary: ['quadriceps'], secondary: ['gluteos', 'posterior'] },
  gym_c3: { primary: ['quadriceps'], secondary: [] },
  gym_c4: { primary: ['posterior'], secondary: ['panturrilhas'] },
  gym_c5: { primary: ['posterior', 'gluteos'], secondary: ['lombar'] },
  gym_c6: { primary: ['panturrilhas'], secondary: [] },

  // ACADEMIA - TREINO D
  gym_d1: { primary: ['abdomen'], secondary: [] },
  gym_d2: { primary: ['abdomen'], secondary: ['antebraco', 'quadriceps'] },
  gym_d3: { primary: ['abdomen', 'lombar'], secondary: ['ombros', 'gluteos'] },
  gym_d4: { primary: ['quadriceps', 'panturrilhas'], secondary: ['gluteos', 'abdomen'] },

  // FEMININO EM CASA - TREINO A (Glúteos & Quadríceps)
  f_home_a1: { primary: ['gluteos', 'quadriceps'], secondary: ['posterior'] },
  f_home_a2: { primary: ['gluteos'], secondary: ['posterior', 'lombar'] },
  f_home_a3: { primary: ['gluteos', 'quadriceps'], secondary: ['posterior', 'panturrilhas'] },
  f_home_a4: { primary: ['quadriceps', 'gluteos'], secondary: ['posterior'] },
  f_home_a5: { primary: ['quadriceps'], secondary: ['gluteos'] },
  f_home_a6: { primary: ['panturrilhas'], secondary: [] },

  // FEMININO EM CASA - TREINO B (Superiores Tonificados & Cintura)
  f_home_b1: { primary: ['peitoral', 'ombros'], secondary: ['triceps', 'abdomen'] },
  f_home_b2: { primary: ['triceps'], secondary: ['ombros'] },
  f_home_b3: { primary: ['dorsal', 'lombar'], secondary: ['trapezio', 'gluteos'] },
  f_home_b4: { primary: ['ombros', 'abdomen'], secondary: ['triceps'] },
  f_home_b5: { primary: ['abdomen'], secondary: ['quadriceps'] },
  f_home_b6: { primary: ['abdomen'], secondary: ['lombar', 'ombros'] },

  // FEMININO EM CASA - TREINO C (Posterior & Glúteo Isolado)
  f_home_c1: { primary: ['gluteos', 'posterior'], secondary: ['lombar'] },
  f_home_c2: { primary: ['gluteos'], secondary: ['posterior', 'lombar'] },
  f_home_c3: { primary: ['gluteos'], secondary: ['abdomen'] },
  f_home_c4: { primary: ['posterior', 'gluteos'], secondary: ['lombar', 'panturrilhas'] },
  f_home_c5: { primary: ['gluteos'], secondary: ['posterior'] },
  f_home_c6: { primary: ['abdomen'], secondary: ['quadriceps'] },

  // FEMININO EM CASA - TREINO D (HIIT & Abdômen)
  f_home_d1: { primary: ['gluteos', 'quadriceps', 'panturrilhas'], secondary: ['posterior'] },
  f_home_d2: { primary: ['abdomen'], secondary: ['ombros', 'quadriceps'] },
  f_home_d3: { primary: ['panturrilhas', 'ombros'], secondary: ['quadriceps', 'abdomen'] },
  f_home_d4: { primary: ['quadriceps', 'gluteos'], secondary: ['panturrilhas', 'posterior'] },
  f_home_d5: { primary: ['abdomen'], secondary: ['quadriceps'] },

  // FEMININO ACADEMIA - TREINO A (Inferiores 1: Quads & Glúteo Máximo)
  f_gym_a1: { primary: ['quadriceps', 'gluteos'], secondary: ['posterior', 'lombar'] },
  f_gym_a2: { primary: ['gluteos'], secondary: ['posterior', 'quadriceps'] },
  f_gym_a3: { primary: ['quadriceps', 'gluteos'], secondary: ['posterior'] },
  f_gym_a4: { primary: ['gluteos', 'quadriceps'], secondary: ['posterior'] },
  f_gym_a5: { primary: ['quadriceps'], secondary: [] },
  f_gym_a6: { primary: ['panturrilhas'], secondary: [] },

  // FEMININO ACADEMIA - TREINO B (Superiores Definidos & Core)
  f_gym_b1: { primary: ['dorsal'], secondary: ['biceps', 'trapezio'] },
  f_gym_b2: { primary: ['dorsal', 'trapezio'], secondary: ['biceps', 'ombros'] },
  f_gym_b3: { primary: ['ombros'], secondary: ['triceps'] },
  f_gym_b4: { primary: ['ombros'], secondary: ['trapezio'] },
  f_gym_b5: { primary: ['triceps'], secondary: ['antebraco'] },
  f_gym_b6: { primary: ['abdomen'], secondary: [] },

  // FEMININO ACADEMIA - TREINO C (Inferiores 2: Posterior & Glúteo Médio/Máximo)
  f_gym_c1: { primary: ['posterior', 'gluteos'], secondary: ['lombar'] },
  f_gym_c2: { primary: ['gluteos'], secondary: ['posterior'] },
  f_gym_c3: { primary: ['posterior'], secondary: ['panturrilhas'] },
  f_gym_c4: { primary: ['gluteos'], secondary: [] },
  f_gym_c5: { primary: ['gluteos'], secondary: ['posterior'] },
  f_gym_c6: { primary: ['gluteos', 'quadriceps'], secondary: ['posterior'] },

  // FEMININO ACADEMIA - TREINO D (Core, Glúteo & HIIT)
  f_gym_d1: { primary: ['abdomen'], secondary: ['quadriceps'] },
  f_gym_d2: { primary: ['abdomen', 'lombar'], secondary: ['ombros', 'gluteos'] },
  f_gym_d3: { primary: ['gluteos'], secondary: ['abdomen'] },
  f_gym_d4: { primary: ['gluteos', 'quadriceps', 'panturrilhas'], secondary: ['abdomen'] }
};

// Base de Vídeos Explicativos Verificados + Guia Passo a Passo de Execução
const EXERCISE_VIDEO_GUIDE = {
  // EM CASA (MASCULINO)
  home_a1: {
    ytId: 'pRzxpe5_LLk',
    motion: 'push',
    steps: [
      'Posicione as mãos no chão ligeiramente mais afastadas que a largura dos ombros.',
      'Mantenha o corpo reto em prancha (abdômen e glúteos contraídos).',
      'Desça flexionando os cotovelos a ~45° do tronco até o peito quase tocar o chão e empurre de volta.'
    ]
  },
  home_a2: {
    ytId: 'xARTt_hMvj4',
    motion: 'push',
    steps: [
      'Apoie a ponta dos pés sobre um sofá, cadeira firme ou degrau e as mãos no chão.',
      'Mantenha o alinhamento da cabeça aos tornozelos sem deixar a lombar afundar.',
      'Desça controladamente focando na parte superior do peitoral e empurre até estender os braços.'
    ]
  },
  home_a3: {
    ytId: 'eG20L9cl81w',
    motion: 'push',
    steps: [
      'Inicie em posição de flexão e caminhe com os pés para frente elevando o quadril em formato de "V" invertido.',
      'Flexione os cotovelos descendo o topo da cabeça em direção ao chão (entre as mãos).',
      'Empurre o chão usando a força dos ombros até retornar ao topo.'
    ]
  },
  home_a4: {
    ytId: 'PY2zqP7D80Q',
    motion: 'push',
    steps: [
      'Apoie as mãos no chão aproximando os polegares e indicadores (formato de diamante).',
      'Desça mantendo os cotovelos colados ao tronco.',
      'Empurre focando na contração máxima do tríceps e miolo do peitoral.'
    ]
  },
  home_a5: {
    ytId: 'p_DeBmkbCUc',
    motion: 'push',
    steps: [
      'Sente na borda de uma cadeira ou sofá firme, apoie as mãos ao lado do quadril e projete o corpo à frente.',
      'Desça o quadril flexionando os cotovelos até formar 90 graus.',
      'Empurre com a palma das mãos estendendo os cotovelos sem jogar os ombros para frente.'
    ]
  },
  home_a6: {
    ytId: 'rkHEQ0L1HnU',
    motion: 'core',
    steps: [
      'Fique em posição de prancha alta (mãos abaixo dos ombros e pés afastados na largura do quadril).',
      'Trave o abdômen e toque a mão direita no ombro esquerdo sem deixar o quadril girar.',
      'Alterne o toque mantendo o tronco totalmente estável.'
    ]
  },

  home_b1: {
    ytId: 'O_GJf8G9cAI',
    motion: 'squat',
    steps: [
      'Afaste os pés na largura dos ombros com as pontas levemente voltadas para fora.',
      'Projete o quadril para trás e para baixo mantendo o peito aberto e joelhos alinhados aos pés.',
      'Empurre o chão com toda a planta do pé para subir.'
    ]
  },
  home_b2: {
    ytId: 'ZpIMkV6cf7c',
    motion: 'lunge',
    steps: [
      'De costas para um sofá ou cadeira, apoie o peito de um pé no assento e dê um passo à frente com a outra perna.',
      'Desça flexionando o joelho da frente até a coxa ficar paralela ao solo.',
      'Suba empurrando o chão com o calcanhar da perna da frente.'
    ]
  },
  home_b3: {
    ytId: 'poAnWrA7DSU',
    motion: 'lunge',
    steps: [
      'Em pé, dê um passo amplo à frente mantendo o tronco firme.',
      'Flexione ambos os joelhos a aproximadamente 90° até o joelho de trás quase tocar o solo.',
      'Retorne à posição inicial impulsionando pela perna da frente e alterne.'
    ]
  },
  home_b4: {
    ytId: '4AeXJJRhkMw',
    motion: 'hipthrust',
    steps: [
      'Deite de barriga para cima com um pé apoiado no chão e a outra perna elevada.',
      'Empurre o chão com o calcanhar elevando o quadril até alinhar joelho, quadril e ombros.',
      'Segure 2 segundos contraindo o glúteo no topo e desça devagar.'
    ]
  },
  home_b5: {
    ytId: 'sHxPFpaB6W4',
    motion: 'squat',
    steps: [
      'Apoie totalmente as costas na parede e deslize para baixo até os joelhos formarem 90°.',
      'Mantenha os calcanhares firmes no solo e mãos livres (sem apoiar nas coxas).',
      'Sustente a posição isométrica pelo tempo indicado respirando normalmente.'
    ]
  },
  home_b6: {
    ytId: 'Mq3kaStyiIs',
    motion: 'squat',
    steps: [
      'Apoie a ponta de um pé em um degrau (ou no solo) segurando na parede para equilíbrio.',
      'Suba na ponta do pé o máximo possível contraindo a panturrilha.',
      'Desça controladamente alongando bem o calcanhar.'
    ]
  },

  home_c1: {
    ytId: 'vDXe2eBowUg',
    motion: 'pull',
    steps: [
      'Deite de bruços no chão com os braços estendidos à frente.',
      'Eleve o peito do solo enquanto puxa os cotovelos para trás fechando as escápulas.',
      'Segure 2 segundos no topo sentindo a dorsal e a lombar e retorne devagar.'
    ]
  },
  home_c2: {
    ytId: 'Si0YL-m6DoI',
    motion: 'pull',
    steps: [
      'Deite de barriga para cima com os joelhos dobrados e cotovelos apoiados no chão ao lado do tronco.',
      'Empurre fortemente os cotovelos contra o chão para desencostar as costas e escápulas do solo.',
      'Segure a contração dorsal no topo e desça controladamente.'
    ]
  },
  home_c3: {
    ytId: 'FAKxZd-UzR0',
    motion: 'pull',
    steps: [
      'Sente em uma cadeira, passe a mão por baixo da própria coxa (pegada supinada).',
      'Puxe a perna para cima usando o bíceps enquanto a própria perna faz força para baixo como carga.',
      'Controle tanto a subida quanto a descida mantendo tensão constante no bíceps.'
    ]
  },
  home_c4: {
    ytId: '_SWAiU5uMVo',
    motion: 'core',
    steps: [
      'Comece em prancha baixa (apoiado nos antebraços).',
      'Apoie uma mão no chão, depois a outra, subindo para a prancha alta.',
      'Retorne aos antebraços de forma controlada mantendo o abdômen firme.'
    ]
  },
  home_c5: {
    ytId: '6s4cDQw1RwU',
    motion: 'core',
    steps: [
      'Deitado de costas, mãos atrás da cabeça (sem puxar o pescoço) e pernas fora do chão.',
      'Gire o tronco levando o cotovelo direito em direção ao joelho esquerdo enquanto estende a outra perna.',
      'Alterne os lados em movimento contínuo de pedalada.'
    ]
  },
  home_c6: {
    ytId: 'lsfYFbfE45o',
    motion: 'core',
    steps: [
      'Deitado de barriga para cima, apoie as mãos ao lado do quadril e mantenha a lombar firme no solo.',
      'Eleve as pernas unidas até 90° contraindo o abdômen inferior.',
      'Desça as pernas lentamente sem deixar a lombar arquear.'
    ]
  },

  home_d1: {
    ytId: 'EXPEtwwU-Vo',
    motion: 'cardio',
    steps: [
      'Em pé com pés juntos e braços ao lado do corpo.',
      'Salte afastando os pés e elevando os braços acima da cabeça simultaneamente.',
      'Retorne amortecendo na ponta dos pés em ritmo constante.'
    ]
  },
  home_d2: {
    ytId: 'aFSpzKujvZk',
    motion: 'cardio',
    steps: [
      'Agache apoiando as mãos no chão à frente dos pés.',
      'Jogue os pés para trás entrando em prancha (e faça a flexão se desejar maior intensidade).',
      'Traga os pés de volta para perto das mãos e finalize com um salto vertical.'
    ]
  },
  home_d3: {
    ytId: 'ywYRG1oBKWU',
    motion: 'cardio',
    steps: [
      'Posicione-se em prancha alta com mãos alinhadas aos ombros.',
      'Traga um joelho em direção ao peito e alterne rapidamente como se estivesse correndo no lugar.',
      'Mantenha o quadril baixo e o core travado.'
    ]
  },
  home_d4: {
    ytId: '36vnWAkL7ZQ',
    motion: 'squat',
    steps: [
      'Desça em um agachamento tradicional até as coxas ficarem paralelas ao solo.',
      'Impulsione com força saltando verticalmente.',
      'Amorteça a queda suavemente da ponta dos pés para os calcanhares já emendando a próxima repetição.'
    ]
  },
  home_d5: {
    ytId: 'hz2mGsMZDBY',
    motion: 'cardio',
    steps: [
      'Corra sem sair do lugar elevando os joelhos até a altura do quadril.',
      'Coordene o movimento dos braços com a perna oposta.',
      'Mantenha o tronco ereto e aterrisse na ponta dos pés.'
    ]
  },

  // ACADEMIA (MASCULINO)
  gym_a1: {
    ytId: 'Cjh2fIMQHk0',
    motion: 'push',
    steps: [
      'Deite no banco reto, retraia as escápulas (junte as costas) e firme os pés no chão.',
      'Desça a barra ou os halteres controladamente até a linha média do peitoral.',
      'Empurre para cima sem desencostar os ombros do banco.'
    ]
  },
  gym_a2: {
    ytId: 'wkUemXl4vFI',
    motion: 'push',
    steps: [
      'Ajuste o banco inclinado entre 30° e 45° e mantenha as escápulas firmes.',
      'Desça os halteres alongando o peitoral superior com cotovelos levemente abaixo da linha dos ombros.',
      'Empurre convergindo suavemente no topo sem bater os halteres.'
    ]
  },
  gym_a3: {
    ytId: '_hdQD_E3deE',
    motion: 'push',
    steps: [
      'Posicione-se no centro do Crossover com um pé à frente para estabilidade e tronco levemente inclinado.',
      'Com cotovelos semi-flexionados, feche os braços à frente do peito em formato de abraço.',
      'Segure 1 segundo esmagando o peitoral e retorne alongando de forma controlada.'
    ]
  },
  gym_a4: {
    ytId: 'DFXtzdXN_iY',
    motion: 'push',
    steps: [
      'Sentado no banco a 85°-90°, segure os halteres na altura das orelhas.',
      'Empurre os pesos para cima até quase estender totalmente os cotovelos.',
      'Desça controladamente até os cotovelos passarem ligeiramente da linha dos ombros.'
    ]
  },
  gym_a5: {
    ytId: 'Qy-zXcgZHWU',
    motion: 'push',
    steps: [
      'Em pé com tronco firme e cotovelos levemente destravados, segure os halteres ao lado do corpo.',
      'Eleve os braços lateralmente até a altura dos ombros liderando o movimento pelos cotovelos.',
      'Desça controlando o peso sem balançar o corpo.'
    ]
  },
  gym_a6: {
    ytId: 'CVrp2m_rBfs',
    motion: 'push',
    steps: [
      'Em frente à polia alta, trave os cotovelos colados à lateral das costelas.',
      'Estenda totalmente os antebraços para baixo contraindo fortemente o tríceps.',
      'Suba apenas o antebraço até ~90° sem deixar o cotovelo subir.'
    ]
  },

  gym_b1: {
    ytId: 'oF-RqXrkZHU',
    motion: 'pull',
    steps: [
      'Segure a barra da polia alta em pegada aberta e sente-se prendendo as coxas no apoio.',
      'Estufe o peito e puxe a barra em direção à parte superior do peitoral (levando os cotovelos para baixo).',
      'Retorne alongando toda a dorsal sem perder a postura.'
    ]
  },
  gym_b2: {
    ytId: '8Bsd6PySojo',
    motion: 'pull',
    steps: [
      'Sentado na remada baixa com joelhos semi-flexionados e coluna reta.',
      'Puxe o triângulo em direção ao umbigo retraindo fortemente as escápulas.',
      'Estenda os braços à frente controlando a carga.'
    ]
  },
  gym_b3: {
    ytId: 'mjFIZX68F_8',
    motion: 'pull',
    steps: [
      'Apoie uma mão e um joelho no banco mantendo a coluna paralela ao chão.',
      'Puxe o halter em direção ao quadril (como se estivesse guardando no bolso).',
      'Desça alongando bem a dorsal unilateralmente.'
    ]
  },
  gym_b4: {
    ytId: 'PB9JQt30GoA',
    motion: 'pull',
    steps: [
      'Ajuste o aparelho Peck Deck invertido (ou polia alta) na linha dos ombros.',
      'Abra os braços para trás focando no deltoide posterior e meio das costas.',
      'Retorne devagar mantendo a tensão muscular.'
    ]
  },
  gym_b5: {
    ytId: 'iA4RH6zDin0',
    motion: 'pull',
    steps: [
      'Em pé com postura firme, segure a barra W ou halteres com as palmas voltadas para cima.',
      'Flexione os cotovelos subindo o peso sem projetar os cotovelos para frente.',
      'Desça de forma lenta e controlada até estender quase totalmente os braços.'
    ]
  },
  gym_b6: {
    ytId: 'GilFwBs_kOs',
    motion: 'pull',
    steps: [
      'Segure os halteres em pegada neutra (palmas voltadas uma para a outra).',
      'Suba o peso mantendo os cotovelos fixos ao lado do tronco.',
      'Excelente para trabalhar o bíceps, braquial e antebraço.'
    ]
  },

  gym_c1: {
    ytId: '4L5nBs8Eq7g',
    motion: 'squat',
    steps: [
      'Posicione a barra sobre o trapézio (ou apoie as costas no Hack Machine) e pés na largura dos ombros.',
      'Inspire, trave o core e desça até quebrar a linha paralela com segurança.',
      'Empurre o chão com força mantendo os joelhos alinhados à ponta dos pés.'
    ]
  },
  gym_c2: {
    ytId: 'adPY6cd4h58',
    motion: 'squat',
    steps: [
      'Sente no Leg Press 45° com quadril e lombar totalmente colados no banco.',
      'Destrave a plataforma e desça flexionando os joelhos em direção ao peito.',
      'Empurre a plataforma sem travar totalmente os joelhos no final.'
    ]
  },
  gym_c3: {
    ytId: 'y6juG3XuRe4',
    motion: 'squat',
    steps: [
      'Ajuste o encosto da Cadeira Extensora para que seus joelhos fiquem alinhados ao eixo da máquina.',
      'Estenda as pernas até o topo e segure 1 segundo contraindo o quadríceps.',
      'Desça controladamente sem deixar os pesos baterem.'
    ]
  },
  gym_c4: {
    ytId: 'KIoiwCfcTXM',
    motion: 'pull',
    steps: [
      'Deite na Mesa Flexora alinhando os joelhos à borda do banco e o rolo acima dos calcanhares.',
      'Flexione os joelhos trazendo o rolo em direção aos glúteos sem levantar o quadril.',
      'Retorne devagar controlando a fase excêntrica.'
    ]
  },
  gym_c5: {
    ytId: '6ZbS3jXheMw',
    motion: 'hipthrust',
    steps: [
      'Em pé segurando a barra ou halteres rente às coxas, deixe os joelhos levemente destravados.',
      'Empurre o quadril para trás inclinando o tronco com a coluna 100% reta até sentir alongar os posteriores.',
      'Suba contraindo glúteos e posteriores de coxa.'
    ]
  },
  gym_c6: {
    ytId: 'Ua7jx6wKyMw',
    motion: 'squat',
    steps: [
      'Apoie apenas a parte da frente dos pés na plataforma mantendo os joelhos estendidos (mas não hiperestendidos).',
      'Desça o calcanhar alongando toda a panturrilha.',
      'Suba na ponta dos pés até a contração máxima.'
    ]
  },

  gym_d1: {
    ytId: '6Tf4tw8-bgw',
    motion: 'core',
    steps: [
      'Ajoelhe-se de frente ou de costas para a polia alta segurando a corda ao lado da cabeça.',
      'Curve a coluna para baixo aproximando as costelas do quadril (enrolando o tronco).',
      'Solte o ar no final e retorne controlando o peso.'
    ]
  },
  gym_d2: {
    ytId: '2U1t-R3QcnY',
    motion: 'core',
    steps: [
      'Apoie os antebraços nas almofadas da paralela e costas no encosto.',
      'Eleve os joelhos em direção ao peito enrolando levemente a pelve para cima.',
      'Desça controladamente evitando o balanço das pernas.'
    ]
  },
  gym_d3: {
    ytId: 'uxPlAbWFUDs',
    motion: 'core',
    steps: [
      'Apoie antebraços e pontas dos pés no solo alinhando todo o corpo.',
      'Contraia fortemente abdômen e glúteos sem deixar a lombar cair.',
      'Sustente a isometria pelo tempo determinado.'
    ]
  },
  gym_d4: {
    ytId: 'jX8AB308e04',
    motion: 'cardio',
    steps: [
      'Faça 3 minutos de aquecimento leve no aparelho escolhido.',
      'Alterne tiros de alta intensidade (1 minuto rápido/inclinado) com recuperação ativa (1 minuto leve).',
      'Finalize com 2 minutos leves para desacelerar a frequência cardíaca.'
    ]
  },

  // FEMININO EM CASA (SEM EQUIPAMENTO)
  f_home_a1: {
    ytId: 'hOhbaafYnr0',
    motion: 'squat',
    steps: [
      'Afaste os pés além da largura dos ombros com as pontas dos pés viradas para fora (45°).',
      'Desça o quadril profundamente mantendo a coluna ereta e abrindo os joelhos na direção dos pés.',
      'Suba empurrando pelos calcanhares e contraindo glúteos e interno de coxa.'
    ]
  },
  f_home_a2: {
    ytId: '6jS6aH-78w4',
    motion: 'hipthrust',
    steps: [
      'Deite de costas no colchonete com joelhos flexionados e pés apoiados na largura do quadril.',
      'Eleve o quadril empurrando com os calcanhares e aperte fortemente o glúteo por 2 segundos no topo.',
      'Desça devagar e repita sem relaxar totalmente no chão.'
    ]
  },
  f_home_a3: {
    ytId: 'ZpIMkV6cf7c',
    motion: 'lunge',
    steps: [
      'Apoie o peito do pé de trás no sofá ou cadeira e posicione o pé da frente firme no chão.',
      'Desça inclinando levemente o tronco à frente para focar no glúteo máximo.',
      'Suba empurrando o chão com o calcanhar da perna da frente.'
    ]
  },
  f_home_a4: {
    ytId: 'poAnWrA7DSU',
    motion: 'lunge',
    steps: [
      'Dê um passo largo à frente e flexione ambos os joelhos a 90°.',
      'Mantenha o joelho da frente alinhado ao pé sem deixá-lo cair para dentro.',
      'Empurre com força para voltar e alterne as pernas.'
    ]
  },
  f_home_a5: {
    ytId: 'sHxPFpaB6W4',
    motion: 'squat',
    steps: [
      'Encoste as costas na parede e desça até formar um ângulo de 90° nos joelhos.',
      'Mantenha o abdômen contraído e o peso nos calcanhares.',
      'Segure firme até completar o tempo da série.'
    ]
  },
  f_home_a6: {
    ytId: 'Mq3kaStyiIs',
    motion: 'squat',
    steps: [
      'Em um pé só, suba na ponta do pé o mais alto que conseguir.',
      'Segure 1 segundo no topo e desça alongando bem.',
      'Complete todas as repetições e troque de perna.'
    ]
  },

  f_home_b1: {
    ytId: 'pRzxpe5_LLk',
    motion: 'push',
    steps: [
      'Apoie as mãos no chão um pouco além da largura dos ombros (pode apoiar os joelhos no colchonete).',
      'Desça o peito em direção ao solo mantendo o abdômen firme.',
      'Empurre de volta tonificando peito, ombros e braços.'
    ]
  },
  f_home_b2: {
    ytId: 'p_DeBmkbCUc',
    motion: 'push',
    steps: [
      'Apoie as mãos na borda do sofá ou cadeira firme e deixe o quadril próximo ao assento.',
      'Flexione os cotovelos para trás descendo o corpo até 90°.',
      'Estenda os braços focando na parte de trás do braço (tríceps).'
    ]
  },
  f_home_b3: {
    ytId: 'vDXe2eBowUg',
    motion: 'pull',
    steps: [
      'Deitada de bruços, tire o peito do chão enquanto puxa os cotovelos para trás.',
      'Aperte o meio das costas (escápulas) por 2 segundos no topo.',
      'Excelente para alinhar a postura e tonificar as costas em casa.'
    ]
  },
  f_home_b4: {
    ytId: 'rkHEQ0L1HnU',
    motion: 'core',
    steps: [
      'Em posição de prancha alta, mantenha os pés afastados para dar estabilidade.',
      'Toque alternadamente cada mão no ombro oposto sem balançar o quadril.',
      'Trabalha ombros e deixa a cintura firme.'
    ]
  },
  f_home_b5: {
    ytId: '6s4cDQw1RwU',
    motion: 'core',
    steps: [
      'Deitada de costas, leve o cotovelo direito em direção ao joelho esquerdo girando o tronco.',
      'Alterne os lados de forma controlada focando nos oblíquos (lateral da cintura).',
      'Mantenha a respiração fluida.'
    ]
  },
  f_home_b6: {
    ytId: 'uxPlAbWFUDs',
    motion: 'core',
    steps: [
      'Sustente o corpo nos antebraços e pontas dos pés.',
      'Puxe o umbigo para dentro (ativando o transverso abdominal) durante toda a série.',
      'Não deixe o quadril cair nem subir demais.'
    ]
  },

  f_home_c1: {
    ytId: '4AeXJJRhkMw',
    motion: 'hipthrust',
    steps: [
      'Deitada de costas, apoie apenas um pé no chão e mantenha a outra perna elevada.',
      'Suba o quadril com força usando o glúteo da perna apoiada e segure 2s no topo.',
      'Conclua as repetições de um lado antes de trocar.'
    ]
  },
  f_home_c2: {
    ytId: 'wE2iG00C-ao',
    motion: 'hipthrust',
    steps: [
      'Em posição de 4 apoios (mãos e joelhos no colchonete) e abdômen contraído.',
      'Com o joelho dobrado em 90°, eleve a perna empurrando a sola do pé em direção ao teto.',
      'Aperte o glúteo no topo sem arquear a lombar e desça devagar.'
    ]
  },
  f_home_c3: {
    ytId: 'e9jmTvEwGqw',
    motion: 'hipthrust',
    steps: [
      'Deite de lado com o corpo alinhado e a perna de baixo levemente flexionada.',
      'Eleve a perna de cima lateralmente mantendo a ponta do pé reta ou levemente para baixo.',
      'Foco total no glúteo médio (contorno lateral do quadril).'
    ]
  },
  f_home_c4: {
    ytId: 'I68ZiOooyjE',
    motion: 'hipthrust',
    steps: [
      'Em pé em uma perna só (joelho levemente destravado), incline o tronco à frente enquanto a outra perna sobe atrás.',
      'Sinta alongar a parte posterior da coxa de apoio mantendo a coluna reta.',
      'Volte à posição em pé contraindo posterior e glúteo.'
    ]
  },
  f_home_c5: {
    ytId: 'rgljhH1X4vc',
    motion: 'hipthrust',
    steps: [
      'Deitada de costas, junte a sola dos dois pés (como uma borboleta) deixando os joelhos abertos.',
      'Eleve o quadril contraindo fortemente os glúteos em ritmo constante.',
      'Gera alto fluxo sanguíneo e pump metabólico nos glúteos.'
    ]
  },
  f_home_c6: {
    ytId: 'lsfYFbfE45o',
    motion: 'core',
    steps: [
      'Deitada de costas com as mãos sob o quadril ou ao lado do corpo.',
      'Eleve e desça as pernas controlando o movimento pela parte inferior do abdômen.',
      'Mantenha a lombar sempre pressionada contra o chão.'
    ]
  },

  f_home_d1: {
    ytId: '36vnWAkL7ZQ',
    motion: 'squat',
    steps: [
      'Agache profundamente e suba de forma explosiva (com salto ou na ponta dos pés).',
      'Mantenha os joelhos alinhados e amorteça a descida.',
      'Acelera o metabolismo enquanto trabalha pernas e glúteos.'
    ]
  },
  f_home_d2: {
    ytId: 'ywYRG1oBKWU',
    motion: 'cardio',
    steps: [
      'Em prancha alta, puxe os joelhos alternadamente em direção ao peito.',
      'Mantenha um ritmo intenso e constante pelo tempo indicado.',
      'Excelente para queima calórica e definição abdominal.'
    ]
  },
  f_home_d3: {
    ytId: 'EXPEtwwU-Vo',
    motion: 'cardio',
    steps: [
      'Salte abrindo pernas e braços de forma coordenada.',
      'Mantenha a respiração ritmada e aterrisse suavemente na ponta dos pés.'
    ]
  },
  f_home_d4: {
    ytId: 'poAnWrA7DSU',
    motion: 'lunge',
    steps: [
      'Alterne passadas à frente ou para trás em ritmo dinâmico.',
      'Mantenha o tronco firme e empurre com o calcanhar.'
    ]
  },
  f_home_d5: {
    ytId: 'yFKPFCnpFJs',
    motion: 'core',
    steps: [
      'Deitada de costas com braços e pernas estendidos.',
      'Suba o tronco e uma perna simultaneamente tocando a mão no pé oposto.',
      'Alterne os lados trabalhando todo o reto abdominal e oblíquos.'
    ]
  },

  // FEMININO ACADEMIA
  f_gym_a1: {
    ytId: '4L5nBs8Eq7g',
    motion: 'squat',
    steps: [
      'Apoie a barra no trapézio (ou no Smith), pés afastados e pontas levemente para fora.',
      'Desça com amplitude profunda jogando o quadril para trás.',
      'Suba empurrando pelos calcanhares e mantendo a coluna firme.'
    ]
  },
  f_gym_a2: {
    ytId: 'WA2Q1auA1zY',
    motion: 'hipthrust',
    steps: [
      'Apoie a linha inferior das escápulas no banco e posicione a barra acolchoada sobre o quadril.',
      'Com os pés firmes (canelas verticais no topo), suba o quadril até alinhar o tronco paralelo ao chão.',
      'Aperte o glúteo por 2 segundos no topo mantendo o queixo próximo ao peito.'
    ]
  },
  f_gym_a3: {
    ytId: 'adPY6cd4h58',
    motion: 'squat',
    steps: [
      'Posicione os pés na plataforma do Leg Press 45° na largura dos ombros.',
      'Desça o máximo possível sem que o quadril levante do assento.',
      'Empurre usando a força das coxas e glúteos.'
    ]
  },
  f_gym_a4: {
    ytId: 'ZpIMkV6cf7c',
    motion: 'lunge',
    steps: [
      'Segurando halteres (ou no Smith), apoie o pé de trás em um banco.',
      'Desça alongando profundamente o glúteo e o quadríceps da perna da frente.',
      'Suba controladamente sem girar o quadril.'
    ]
  },
  f_gym_a5: {
    ytId: 'y6juG3XuRe4',
    motion: 'squat',
    steps: [
      'Sentada na Cadeira Extensora, segure nas alças laterais mantendo o quadril colado.',
      'Estenda os joelhos totalmente, segure 1 segundo no topo e desça devagar.'
    ]
  },
  f_gym_a6: {
    ytId: 'Ua7jx6wKyMw',
    motion: 'squat',
    steps: [
      'Apoie a ponta dos pés na máquina e faça o movimento completo de alongar e subir na ponta dos pés.'
    ]
  },

  f_gym_b1: {
    ytId: 'oF-RqXrkZHU',
    motion: 'pull',
    steps: [
      'Segure a barra da polia alta um pouco além da largura dos ombros.',
      'Puxe a barra até a altura da clavícula abrindo o peito e descendo os ombros.',
      'Retorne controlando o peso.'
    ]
  },
  f_gym_b2: {
    ytId: '8Bsd6PySojo',
    motion: 'pull',
    steps: [
      'Com a coluna ereta, puxe o triângulo até o abdômen fechando as escápulas.',
      'Alongue os braços à frente mantendo a postura.'
    ]
  },
  f_gym_b3: {
    ytId: 'DFXtzdXN_iY',
    motion: 'push',
    steps: [
      'Sentada com as costas apoiadas, empurre os halteres acima da cabeça.',
      'Desça até a linha das orelhas com controle.'
    ]
  },
  f_gym_b4: {
    ytId: 'Qy-zXcgZHWU',
    motion: 'push',
    steps: [
      'Eleve os halteres lateralmente até a linha dos ombros com cotovelos levemente flexionados.',
      'Controle a descida para tonificar os deltoides.'
    ]
  },
  f_gym_b5: {
    ytId: 'CVrp2m_rBfs',
    motion: 'push',
    steps: [
      'Com os cotovelos fixos ao lado do corpo, empurre a corda para baixo abrindo as pontas no final.',
      'Excelente para deixar a parte posterior do braço firme e definida.'
    ]
  },
  f_gym_b6: {
    ytId: '6Tf4tw8-bgw',
    motion: 'core',
    steps: [
      'Flexione a coluna contraindo o abdômen e soltando todo o ar no ponto máximo.'
    ]
  },

  f_gym_c1: {
    ytId: '6ZbS3jXheMw',
    motion: 'hipthrust',
    steps: [
      'Segure a barra ou halteres rente às pernas e deixe os joelhos semi-flexionados.',
      'Projete o quadril lá atrás mantendo a coluna reta até sentir alongar os posteriores.',
      'Suba contraindo glúteos e posteriores.'
    ]
  },
  f_gym_c2: {
    ytId: 'WA2Q1auA1zY',
    motion: 'hipthrust',
    steps: [
      'Apoie as escápulas no banco e eleve o quadril com a barra.',
      'Trave o glúteo no topo por 2 segundos em cada repetição.'
    ]
  },
  f_gym_c3: {
    ytId: 'KIoiwCfcTXM',
    motion: 'pull',
    steps: [
      'Na Mesa ou Cadeira Flexora, flexione os joelhos com amplitude máxima.',
      'Controle a volta do peso para máximo estímulo nos posteriores de coxa.'
    ]
  },
  f_gym_c4: {
    ytId: 'GljAOyT5xLI',
    motion: 'hipthrust',
    steps: [
      'Sentada na Cadeira Abdutora, incline levemente o tronco à frente mantendo a coluna reta.',
      'Afaste as pernas contra o apoio lateral, segure 1 segundo aberta e volte devagar.',
      'Foco direto no glúteo médio e superior.'
    ]
  },
  f_gym_c5: {
    ytId: 'XYCCcD0MxN8',
    motion: 'hipthrust',
    steps: [
      'Prenda a caneleira na polia baixa, incline o tronco à frente e mantenha o abdômen firme.',
      'Chute a perna para trás e levemente em diagonal contraindo o glúteo sem arquear a lombar.'
    ]
  },
  f_gym_c6: {
    ytId: 'poAnWrA7DSU',
    motion: 'lunge',
    steps: [
      'Segurando um halter em cada mão, dê passos largos flexionando ambos os joelhos a 90°.',
      'Empurre pelo calcanhar da perna da frente para avançar.'
    ]
  },

  f_gym_d1: {
    ytId: '2U1t-R3QcnY',
    motion: 'core',
    steps: [
      'Eleve os joelhos ou pernas contraindo o abdômen inferior e controlando a descida.'
    ]
  },
  f_gym_d2: {
    ytId: 'uxPlAbWFUDs',
    motion: 'core',
    steps: [
      'Sustente a prancha contraindo profundamente o abdômen e a linha de cintura.'
    ]
  },
  f_gym_d3: {
    ytId: 'XUdKf7UMoq8',
    motion: 'hipthrust',
    steps: [
      'De lado para a polia baixa com caneleira presa no pé de fora.',
      'Eleve a perna lateralmente focando no contorno do glúteo médio.'
    ]
  },
  f_gym_d4: {
    ytId: 'jX8AB308e04',
    motion: 'cardio',
    steps: [
      'Na escada ergométrica ou esteira inclinada, mantenha postura ereta sem se pendurar nos apoios.',
      'Alterne períodos intensos e moderados para maximizar a queima de gordura.'
    ]
  }
};

let selectedMuscleFilter = null;

// Definição dos Dias da Semana (Segunda a Domingo) com ficha padrão sugerida
const WEEK_DAYS = [
  { key: 'seg', short: 'SEGUNDA', mini: 'SEG', label: 'Segunda-feira', defaultSplit: 'A', order: 1 },
  { key: 'ter', short: 'TERÇA',   mini: 'TER', label: 'Terça-feira',   defaultSplit: 'B', order: 2 },
  { key: 'qua', short: 'QUARTA',  mini: 'QUA', label: 'Quarta-feira',  defaultSplit: 'C', order: 3 },
  { key: 'qui', short: 'QUINTA',  mini: 'QUI', label: 'Quinta-feira',  defaultSplit: 'D', order: 4 },
  { key: 'sex', short: 'SEXTA',   mini: 'SEX', label: 'Sexta-feira',   defaultSplit: 'A', order: 5 },
  { key: 'sab', short: 'SÁBADO',  mini: 'SÁB', label: 'Sábado',        defaultSplit: 'B', order: 6 },
  { key: 'dom', short: 'DOMINGO', mini: 'DOM', label: 'Domingo',       defaultSplit: 'C', order: 7 }
];

function getCurrentSystemWeekdayKey() {
  const jsDay = new Date().getDay(); // 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sab
  const map = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  return map[jsDay] || 'seg';
}

function getDefaultDaySplitMap() {
  return {
    seg: 'A',
    ter: 'B',
    qua: 'C',
    qui: 'D',
    sex: 'A',
    sab: 'B',
    dom: 'C'
  };
}

// Usuários Autorizados do Sistema
const USERS_CREDENTIALS = {
  simone: {
    key: 'simone',
    displayName: 'Simone',
    password: '1234',
    defaultGender: 'female'
  },
  mateus: {
    key: 'mateus',
    displayName: 'Mateus',
    password: '1234',
    defaultGender: 'male'
  }
};

const ACTIVE_USER_SESSION_KEY = 'redline_fit_active_user_v1';
let currentLoggedUserKey = null; // 'simone' | 'mateus' | null

function getUserStorageKey(userKey = currentLoggedUserKey) {
  if (!userKey) return `${STORAGE_KEY}_guest`;
  return `${STORAGE_KEY}_user_${userKey}`;
}

function createDefaultStateForUser(userKey) {
  const userCfg = USERS_CREDENTIALS[userKey] || { displayName: '', defaultGender: 'male' };
  return {
    hasConfiguredProfile: false,
    profile: {
      name: userCfg.displayName,
      gender: userCfg.defaultGender, // 'male' | 'female'
      weight: '',
      height: '',
      location: 'home', // 'home' | 'gym'
      goal: 'hypertrophy' // 'hypertrophy' | 'weightloss' | 'conditioning'
    },
    activeDayKey: getCurrentSystemWeekdayKey(), // 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab' | 'dom'
    daySplitMap: getDefaultDaySplitMap(),
    // Status manual de cada dia: { [dayKey]: 'done' | 'missed' | 'pending' }
    dayStatusOverride: {},
    activeSplitId: 'A',
    activeFilter: 'all', // 'all' | 'pending' | 'done'
    // Mapa de progresso por dia e exercício: { ["qua__home_c1"]: { done: boolean, completedSets: [true, false, ...] } }
    exerciseProgress: {},
    weightHistory: [],
    workoutHistory: []
  };
}

// Estado Global da Aplicação
let appState = createDefaultStateForUser(null);

// Timer de descanso
let restTimerInterval = null;
let restSecondsRemaining = 0;

// ============================================================================
// INICIALIZAÇÃO, LOGIN POR USUÁRIO E PERSISTÊNCIA INDIVIDUAL
// ============================================================================

function loadState(userKey = currentLoggedUserKey) {
  const baseState = createDefaultStateForUser(userKey);
  if (!userKey) {
    appState = baseState;
    return;
  }

  try {
    const raw = localStorage.getItem(getUserStorageKey(userKey));
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = {
        ...baseState,
        ...parsed,
        profile: {
          ...baseState.profile,
          ...(parsed.profile || {}),
          name: (parsed.profile && parsed.profile.name) || baseState.profile.name
        },
        activeDayKey: parsed.activeDayKey || getCurrentSystemWeekdayKey(),
        daySplitMap: { ...getDefaultDaySplitMap(), ...(parsed.daySplitMap || {}) },
        dayStatusOverride: parsed.dayStatusOverride || {},
        exerciseProgress: parsed.exerciseProgress || {},
        weightHistory: Array.isArray(parsed.weightHistory) ? parsed.weightHistory : [],
        workoutHistory: Array.isArray(parsed.workoutHistory) ? parsed.workoutHistory : []
      };
      appState.activeSplitId = appState.daySplitMap[appState.activeDayKey] || 'A';
    } else {
      appState = baseState;
    }
  } catch (err) {
    console.error('Erro ao carregar dados salvos do usuário:', err);
    appState = baseState;
  }
}

function saveState() {
  if (!currentLoggedUserKey) return;
  try {
    localStorage.setItem(getUserStorageKey(currentLoggedUserKey), JSON.stringify(appState));
  } catch (err) {
    console.error('Erro ao salvar estado do usuário:', err);
  }
}

function applyLoggedUserSession(userKey, showWelcomeToast = false) {
  const userCfg = USERS_CREDENTIALS[userKey];
  if (!userCfg) return;

  currentLoggedUserKey = userKey;
  localStorage.setItem(ACTIVE_USER_SESSION_KEY, userKey);

  loadState(userKey);
  populateSetupFormFromState();
  selectedMuscleFilter = null;

  const loginOverlay = document.getElementById('loginOverlay');
  if (loginOverlay) loginOverlay.classList.add('hidden');

  const headerName = document.getElementById('headerActiveUserName');
  if (headerName) headerName.textContent = userCfg.displayName;

  if (appState.hasConfiguredProfile) {
    document.getElementById('setupSection').classList.add('hidden');
  } else {
    document.getElementById('setupSection').classList.remove('hidden');
  }

  renderDashboard();

  if (showWelcomeToast) {
    showToast(`👋 Bem-vindo(a), ${userCfg.displayName}! Seus dados e treinos foram carregados.`);
  }
}

function logoutCurrentUser() {
  stopRestTimer();
  currentLoggedUserKey = null;
  localStorage.removeItem(ACTIVE_USER_SESSION_KEY);

  const loginOverlay = document.getElementById('loginOverlay');
  if (loginOverlay) loginOverlay.classList.remove('hidden');

  const userInput = document.getElementById('loginUsername');
  if (userInput) userInput.value = '';
  const pwdInput = document.getElementById('loginPassword');
  if (pwdInput) pwdInput.value = '';
  const errEl = document.getElementById('loginErrorMsg');
  if (errEl) errEl.classList.add('hidden');
}

// ============================================================================
// CÁLCULO DE IMC E SUGESTÃO INTELIGENTE
// ============================================================================

function normalizeHeightCm(rawHeight) {
  let h = parseFloat(rawHeight);
  if (isNaN(h) || h <= 0) return null;
  // Caso o usuário digite em metros (ex: 1.75), converte para cm automaticamente
  if (h < 3.0) {
    h = Math.round(h * 100);
  }
  return h;
}

function calculateIMCData(weightKg, heightRaw) {
  const w = parseFloat(weightKg);
  const hCm = normalizeHeightCm(heightRaw);
  if (!w || !hCm || w < 20 || hCm < 90) {
    return null;
  }
  const hMeters = hCm / 100;
  const imc = w / (hMeters * hMeters);
  const imcFormatted = imc.toFixed(1);

  let classification = '';
  let recommendedGoal = 'hypertrophy';
  let advice = '';

  if (imc < 18.5) {
    classification = 'Abaixo do Peso';
    recommendedGoal = 'hypertrophy';
    advice = 'Sugestão: Foco em Ganho de Massa & Força (Hipertrofia) com progressão de repetições e boa ingestão calórica.';
  } else if (imc < 25) {
    classification = 'Peso Ideal';
    recommendedGoal = 'hypertrophy';
    advice = 'Excelente proporção! Sugerimos foco em Ganho de Massa & Força ou Condicionamento para evolução estética e performance.';
  } else if (imc < 30) {
    classification = 'Sobrepeso';
    recommendedGoal = 'weightloss';
    advice = 'Sugestão: Treino de Emagrecimento & Definição combinando força muscular e alto gasto calórico.';
  } else {
    classification = 'Obesidade';
    recommendedGoal = 'weightloss';
    advice = 'Sugestão: Emagrecimento & Condicionamento com ritmo progressivo, priorizando constância e saúde articular.';
  }

  return {
    imc,
    imcFormatted,
    heightCm: hCm,
    classification,
    recommendedGoal,
    advice
  };
}

// ============================================================================
// UI: FORMULÁRIO DE CONFIGURAÇÃO E PREVIEW DE IMC
// ============================================================================

function updateLiveImcPreview(autoSelectGoal = false) {
  const weightInput = document.getElementById('userWeight');
  const heightInput = document.getElementById('userHeight');
  const liveImcValue = document.getElementById('liveImcValue');
  const liveImcClassification = document.getElementById('liveImcClassification');
  const liveImcRecommendation = document.getElementById('liveImcRecommendation');
  const suggestedGoalHint = document.getElementById('suggestedGoalHint');

  const data = calculateIMCData(weightInput.value, heightInput.value);

  if (!data) {
    liveImcValue.textContent = '--';
    liveImcClassification.textContent = 'Preencha peso e altura';
    liveImcRecommendation.textContent = 'Digite seu peso e altura acima para ver a análise corporal e o treino recomendado.';
    suggestedGoalHint.classList.add('hidden');
    return;
  }

  liveImcValue.textContent = data.imcFormatted;
  liveImcClassification.textContent = data.classification;
  liveImcRecommendation.textContent = data.advice;
  suggestedGoalHint.classList.remove('hidden');
  suggestedGoalHint.textContent = `Sugerido para seu IMC: ${GOAL_LABELS[data.recommendedGoal]}`;

  if (autoSelectGoal) {
    const goalRadio = document.querySelector(`input[name="workoutGoal"][value="${data.recommendedGoal}"]`);
    if (goalRadio) {
      goalRadio.checked = true;
    }
  }
}

function populateSetupFormFromState() {
  document.getElementById('userName').value = appState.profile.name || '';
  document.getElementById('userWeight').value = appState.profile.weight || '';
  document.getElementById('userHeight').value = appState.profile.height || '';

  const genderVal = appState.profile.gender === 'female' ? 'female' : 'male';
  const genderRadio = document.querySelector(`input[name="workoutGender"][value="${genderVal}"]`);
  if (genderRadio) genderRadio.checked = true;

  const locRadio = document.querySelector(`input[name="workoutLocation"][value="${appState.profile.location}"]`);
  if (locRadio) locRadio.checked = true;

  const goalRadio = document.querySelector(`input[name="workoutGoal"][value="${appState.profile.goal}"]`);
  if (goalRadio) goalRadio.checked = true;

  updateLiveImcPreview(false);
}

// ============================================================================
// GERENCIAMENTO DE EXERCÍCIOS E DIAS DA SEMANA (FEZ vs NÃO FEZ)
// ============================================================================

function getActivePlan() {
  const isFemale = appState.profile.gender === 'female';
  const isGym = appState.profile.location === 'gym';

  if (isFemale) {
    return isGym ? WORKOUT_DATABASE.female_gym : WORKOUT_DATABASE.female_home;
  }
  return isGym ? WORKOUT_DATABASE.gym : WORKOUT_DATABASE.home;
}

function getActiveDayObj() {
  return WEEK_DAYS.find(d => d.key === appState.activeDayKey) || WEEK_DAYS[0];
}

function getSplitForDay(dayKey, plan = getActivePlan()) {
  const dayObj = WEEK_DAYS.find(d => d.key === dayKey) || WEEK_DAYS[0];
  const splitId = (appState.daySplitMap && appState.daySplitMap[dayKey]) || dayObj.defaultSplit;
  return plan.splits.find(s => s.id === splitId) || plan.splits[0];
}

function getActiveSplit() {
  return getSplitForDay(appState.activeDayKey);
}

function getProgressKey(exerciseId, dayKey = appState.activeDayKey) {
  return `${dayKey}__${exerciseId}`;
}

function getExerciseState(exercise, dayKey = appState.activeDayKey) {
  const key = getProgressKey(exercise.id, dayKey);
  const saved = appState.exerciseProgress[key];
  const totalSets = exercise.baseSets;

  if (!saved) {
    return {
      done: false,
      completedSets: Array(totalSets).fill(false)
    };
  }

  const setsArr = Array.from({ length: totalSets }, (_, idx) => Boolean(saved.completedSets && saved.completedSets[idx]));
  return {
    done: Boolean(saved.done),
    completedSets: setsArr
  };
}

function getDayStatusSummary(dayKey, plan = getActivePlan()) {
  const dayObj = WEEK_DAYS.find(d => d.key === dayKey) || WEEK_DAYS[0];
  const split = getSplitForDay(dayKey, plan);
  const total = split.exercises.length;
  let done = 0;
  let totalSets = 0;
  let completedSets = 0;

  split.exercises.forEach(ex => {
    const st = getExerciseState(ex, dayKey);
    if (st.done) done++;
    totalSets += ex.baseSets;
    completedSets += st.completedSets.filter(Boolean).length;
  });

  const todayKey = getCurrentSystemWeekdayKey();
  const todayObj = WEEK_DAYS.find(d => d.key === todayKey) || WEEK_DAYS[0];
  const isToday = dayKey === todayKey;
  const isPastDayInWeek = dayObj.order < todayObj.order;
  const override = appState.dayStatusOverride ? appState.dayStatusOverride[dayKey] : null;

  let status = 'pending'; // 'done' | 'partial' | 'missed' | 'pending'
  let statusLabel = '⏳ PARA FAZER';

  if (done === total && total > 0) {
    status = 'done';
    statusLabel = '✓ FEZ NO DIA';
  } else if (done > 0 && done < total) {
    status = 'partial';
    statusLabel = `⚡ ${done}/${total} FEITO`;
  } else {
    // done === 0
    if (override === 'missed' || (isPastDayInWeek && override !== 'pending')) {
      status = 'missed';
      statusLabel = '✗ NÃO FEZ';
    } else {
      status = 'pending';
      statusLabel = isToday ? '🔥 FAZER HOJE' : '⏳ PARA FAZER';
    }
  }

  return {
    dayObj,
    split,
    total,
    done,
    remaining: total - done,
    totalSets,
    completedSets,
    percent: total > 0 ? Math.round((done / total) * 100) : 0,
    isToday,
    status,
    statusLabel
  };
}

function toggleExerciseDone(exerciseId) {
  const dayKey = appState.activeDayKey;
  const dayObj = getActiveDayObj();
  const split = getActiveSplit();
  const exercise = split.exercises.find(e => e.id === exerciseId);
  if (!exercise) return;

  const current = getExerciseState(exercise, dayKey);
  const nextDone = !current.done;
  const key = getProgressKey(exerciseId, dayKey);

  appState.exerciseProgress[key] = {
    done: nextDone,
    completedSets: Array(exercise.baseSets).fill(nextDone)
  };

  if (nextDone && appState.dayStatusOverride[dayKey] === 'missed') {
    delete appState.dayStatusOverride[dayKey];
  }

  saveState();
  renderDashboard();

  if (nextDone) {
    showToast(`✓ [${dayObj.label}] "${exercise.name}" marcado como FEITO!`);
  }
}

function toggleExerciseSet(exerciseId, setIndex) {
  const dayKey = appState.activeDayKey;
  const dayObj = getActiveDayObj();
  const split = getActiveSplit();
  const exercise = split.exercises.find(e => e.id === exerciseId);
  if (!exercise) return;

  const current = getExerciseState(exercise, dayKey);
  const updatedSets = [...current.completedSets];
  updatedSets[setIndex] = !updatedSets[setIndex];

  const allCompleted = updatedSets.every(Boolean);
  const key = getProgressKey(exerciseId, dayKey);

  appState.exerciseProgress[key] = {
    done: allCompleted,
    completedSets: updatedSets
  };

  if (updatedSets.some(Boolean) && appState.dayStatusOverride[dayKey] === 'missed') {
    delete appState.dayStatusOverride[dayKey];
  }

  saveState();
  renderDashboard();

  // Se o usuário acabou de marcar uma série como feita, inicia o cronômetro de descanso
  if (updatedSets[setIndex]) {
    if (allCompleted) {
      showToast(`🔥 [${dayObj.label}] "${exercise.name}" concluído!`);
    } else {
      startRestTimer(exercise.restSeconds, exercise.name);
    }
  }
}

function markDayAsMissedOrReset(dayKey = appState.activeDayKey) {
  const dayObj = WEEK_DAYS.find(d => d.key === dayKey) || getActiveDayObj();
  const plan = getActivePlan();
  // Limpa os exercícios daquele dia específico e marca como "Não Fez"
  plan.splits.forEach(sp => {
    sp.exercises.forEach(ex => {
      delete appState.exerciseProgress[getProgressKey(ex.id, dayKey)];
    });
  });

  appState.dayStatusOverride[dayKey] = 'missed';
  saveState();
  renderDashboard();
  showToast(`✗ ${dayObj.label} marcado como "NÃO FEZ" (0 exercícios concluídos).`);
}

function resetEntireWeek() {
  appState.exerciseProgress = {};
  appState.dayStatusOverride = {};
  saveState();
  renderDashboard();
  showToast('🔄 Nova semana iniciada! Todos os dias (Segunda a Domingo) foram zerados.');
}

// ============================================================================
// RENDERIZAÇÃO DO DASHBOARD
// ============================================================================

function renderDashboard() {
  const setupSection = document.getElementById('setupSection');
  const dashboardSection = document.getElementById('dashboardSection');
  const btnCloseSetup = document.getElementById('btnCloseSetup');

  if (!appState.hasConfiguredProfile) {
    setupSection.classList.remove('hidden');
    dashboardSection.classList.add('hidden');
    btnCloseSetup.classList.add('hidden');
    return;
  }

  dashboardSection.classList.remove('hidden');
  btnCloseSetup.classList.remove('hidden');

  const plan = getActivePlan();
  const daySummary = getDayStatusSummary(appState.activeDayKey, plan);
  const { dayObj, split, total: totalExercises, done: doneExercises, remaining: remainingExercises, totalSets: totalSetsCount, completedSets: completedSetsCount, percent } = daySummary;
  appState.activeSplitId = split.id;

  const imcData = calculateIMCData(appState.profile.weight, appState.profile.height);
  const goalKey = appState.profile.goal || 'hypertrophy';

  // Topo: Streak
  document.getElementById('completedWorkoutsCount').textContent = appState.workoutHistory.length;

  // Card 1: Dados do Usuário, Gênero e Local
  const isFemale = appState.profile.gender === 'female';
  const genderLabel = isFemale ? 'Feminino' : 'Masculino';
  const userName = appState.profile.name ? appState.profile.name.toUpperCase() : 'ATLETA REDLINE';
  document.getElementById('dashUserGreeting').textContent = `${userName} • ${GOAL_LABELS[goalKey].toUpperCase()}`;
  document.getElementById('dashPlanTitle').textContent = plan.label;
  document.getElementById('dashLocationBadge').textContent = appState.profile.location === 'gym' ? 'ACADEMIA' : 'EM CASA';

  const dashGenderEl = document.getElementById('dashGender');
  if (dashGenderEl) dashGenderEl.textContent = genderLabel;
  document.getElementById('dashWeight').textContent = `${appState.profile.weight} kg`;
  document.getElementById('dashHeight').textContent = `${imcData ? imcData.heightCm : appState.profile.height} cm`;
  document.getElementById('dashImc').textContent = imcData ? imcData.imcFormatted : '--';
  document.getElementById('dashImcStatus').textContent = imcData ? imcData.classification : '--';

  const quickSwitchGenderText = document.getElementById('quickSwitchGenderText');
  if (quickSwitchGenderText) {
    quickSwitchGenderText.textContent = isFemale ? 'Mudar p/ Masculino' : 'Mudar p/ Feminino';
  }

  const quickSwitchText = document.getElementById('quickSwitchText');
  quickSwitchText.textContent = appState.profile.location === 'home'
    ? 'Mudar para Academia'
    : 'Mudar para Casa (Sem Equip.)';

  // Card 2: Progressão do Dia Selecionado
  const eyebrowEl = document.getElementById('progressCardEyebrow');
  if (eyebrowEl) {
    eyebrowEl.textContent = `PROGRESSÃO DE ${dayObj.label.toUpperCase()} (${daySummary.statusLabel})`;
  }
  document.getElementById('currentSplitName').textContent = `${dayObj.label} • ${split.tabName}`;
  document.getElementById('progressPercentBadge').textContent = `${percent}%`;
  document.getElementById('mainProgressBarFill').style.width = `${percent}%`;
  document.getElementById('countDoneExercises').textContent = doneExercises;
  document.getElementById('countRemainingExercises').textContent = remainingExercises;
  document.getElementById('countSetsProgress').textContent = `${completedSetsCount}/${totalSetsCount}`;

  // Cronograma Semanal (Segunda a Domingo)
  renderWeekDaysGrid(plan);

  // Label do Seletor de Ficha do Dia + Abas de Divisão (Treino A, B, C, D)
  const selectorDayLabel = document.getElementById('splitSelectorDayLabel');
  if (selectorDayLabel) {
    selectorDayLabel.textContent = `FICHA DE TREINO DE ${dayObj.label.toUpperCase()} (CLIQUE SE QUISER ALTERAR O TREINO DESTE DIA):`;
  }
  renderSplitTabs(plan);

  // Contadores das Pílulas de Filtro (Todos / Ainda Faltam / Feitos)
  document.getElementById('pillCountAll').textContent = totalExercises;
  document.getElementById('pillCountPending').textContent = remainingExercises;
  document.getElementById('pillCountDone').textContent = doneExercises;

  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === appState.activeFilter);
  });

  // Banner do Dia e Treino Selecionado
  document.getElementById('splitFocusTag').textContent = `📅 ${dayObj.label.toUpperCase()} • STATUS: ${daySummary.statusLabel} • ${split.focus}`;
  document.getElementById('splitBannerTitle').textContent = `${dayObj.label}: ${split.title}`;
  document.getElementById('splitBannerDesc').textContent = split.description;

  const btnResetDayText = document.getElementById('btnResetDayText');
  if (btnResetDayText) {
    btnResetDayText.textContent = `Não Fiz (${dayObj.short})`;
  }
  const btnFinishDayText = document.getElementById('btnFinishDayText');
  if (btnFinishDayText) {
    btnFinishDayText.textContent = daySummary.status === 'done'
      ? `✓ ${dayObj.label} Concluído`
      : `Concluir ${dayObj.label}`;
  }

  // Mapa Corporal Muscular em SVG + Barras de Carga Muscular
  renderMuscleMapHUD(split);

  // Lista de Exercícios do Dia Selecionado
  renderExercisesList(split, goalKey);

  // Histórico de Peso e de Treinos
  renderHistories();
}

function renderMuscleMapHUD(split) {
  // Calcula estatísticas de ativação de cada músculo neste split
  const muscleStats = {};

  split.exercises.forEach(ex => {
    const map = EXERCISE_MUSCLE_MAP[ex.id] || { primary: [], secondary: [] };
    const isDone = getExerciseState(ex).done;

    map.primary.forEach(m => {
      if (!muscleStats[m]) {
        muscleStats[m] = { role: 'primary', total: 0, done: 0 };
      } else if (muscleStats[m].role !== 'primary') {
        muscleStats[m].role = 'primary';
      }
      muscleStats[m].total++;
      if (isDone) muscleStats[m].done++;
    });

    map.secondary.forEach(m => {
      if (!muscleStats[m]) {
        muscleStats[m] = { role: 'secondary', total: 0, done: 0 };
      }
      muscleStats[m].total++;
      if (isDone) muscleStats[m].done++;
    });
  });

  // Atualiza todas as zonas do SVG (Frente e Costas)
  document.querySelectorAll('.muscle-zone').forEach(zone => {
    const mKey = zone.dataset.muscle;
    zone.classList.remove('muscle-active-primary', 'muscle-active-secondary', 'muscle-completed', 'muscle-spotlight');

    const stat = muscleStats[mKey];
    if (stat) {
      if (stat.done === stat.total && stat.total > 0) {
        zone.classList.add('muscle-completed');
      } else if (stat.role === 'primary') {
        zone.classList.add('muscle-active-primary');
      } else {
        zone.classList.add('muscle-active-secondary');
      }
    }

    if (selectedMuscleFilter && selectedMuscleFilter === mKey) {
      zone.classList.add('muscle-spotlight');
    }
  });

  // Renderiza as barras de diagnóstico muscular na direita do HUD
  const barsContainer = document.getElementById('muscleBarsList');
  if (!barsContainer) return;

  const sortedMuscles = Object.keys(muscleStats).sort((a, b) => {
    // Primários primeiro, depois maior número de exercícios
    if (muscleStats[a].role !== muscleStats[b].role) {
      return muscleStats[a].role === 'primary' ? -1 : 1;
    }
    return muscleStats[b].total - muscleStats[a].total;
  });

  barsContainer.innerHTML = sortedMuscles.map(mKey => {
    const st = muscleStats[mKey];
    const pct = st.total > 0 ? Math.round((st.done / st.total) * 100) : 0;
    const isAllDone = st.done === st.total && st.total > 0;
    const isSelected = selectedMuscleFilter === mKey;
    const roleLabel = isAllDone
      ? '✓ CONCLUÍDO'
      : (st.role === 'primary' ? 'ALVO PRINCIPAL' : 'SINERGISTA');

    return `
      <div class="muscle-stat-row ${isAllDone ? 'is-muscle-done' : ''} ${isSelected ? 'is-selected' : ''}" data-muscle-select="${mKey}">
        <div class="muscle-stat-top">
          <span class="muscle-stat-name">
            ${MUSCLE_LABELS[mKey] || mKey}
            <span class="muscle-role-tag">${roleLabel}</span>
          </span>
          <span class="muscle-stat-count">${st.done}/${st.total} Feitos (${pct}%)</span>
        </div>
        <div class="muscle-mini-track">
          <div class="muscle-mini-fill" style="width: ${pct === 0 ? 8 : pct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  // Atualiza barra de status do scanner
  const statusText = document.getElementById('scannerStatusText');
  if (statusText) {
    if (selectedMuscleFilter && muscleStats[selectedMuscleFilter]) {
      const st = muscleStats[selectedMuscleFilter];
      const falta = st.total - st.done;
      statusText.innerHTML = `🎯 <strong>${MUSCLE_LABELS[selectedMuscleFilter]}</strong> em destaque — ${st.total} exercício(s) (${st.done} Feito / ${falta} Falta). Clique novamente para limpar.`;
    } else {
      const primaryNames = sortedMuscles
        .filter(m => muscleStats[m].role === 'primary')
        .map(m => MUSCLE_LABELS[m])
        .join(', ');
      statusText.innerHTML = `🔥 <strong>Foco Principal:</strong> ${primaryNames || 'Corpo Inteiro'} • Passe o mouse em um exercício ou clique em um músculo`;
    }
  }
}

function highlightExerciseMusclesOnMap(exerciseId) {
  const map = EXERCISE_MUSCLE_MAP[exerciseId];
  if (!map) return;

  const split = getActiveSplit();
  const exercise = split.exercises.find(e => e.id === exerciseId);

  document.querySelectorAll('.muscle-zone').forEach(zone => {
    const mKey = zone.dataset.muscle;
    if (map.primary.includes(mKey) || map.secondary.includes(mKey)) {
      zone.classList.add('muscle-spotlight');
    } else {
      zone.classList.remove('muscle-spotlight');
    }
  });

  const statusText = document.getElementById('scannerStatusText');
  if (statusText && exercise) {
    const pNames = map.primary.map(m => MUSCLE_LABELS[m]).join(', ');
    const sNames = map.secondary.map(m => MUSCLE_LABELS[m]).join(', ');
    statusText.innerHTML = `⚡ <strong>${exercise.name}</strong> → Principal: <span class="text-red">${pNames}</span>${sNames ? ` | Sinergistas: ${sNames}` : ''}`;
  }
}

function restoreMapFromHover() {
  const split = getActiveSplit();
  renderMuscleMapHUD(split);
}

function renderWeekDaysGrid(plan) {
  const gridEl = document.getElementById('weekDaysGrid');
  if (!gridEl) return;
  gridEl.innerHTML = '';

  let daysDoneCount = 0;
  let daysMissedCount = 0;

  WEEK_DAYS.forEach(day => {
    const summary = getDayStatusSummary(day.key, plan);
    if (summary.status === 'done') daysDoneCount++;
    if (summary.status === 'missed') daysMissedCount++;

    const isSelected = day.key === appState.activeDayKey;
    const shortFocus = summary.split.tabName.replace(/^Treino\s+[A-D]\s*/i, '').replace(/[()]/g, '') || summary.split.tabName;

    const card = document.createElement('div');
    card.className = `week-day-card day-status-${summary.status} ${isSelected ? 'is-active-day' : ''} ${summary.isToday ? 'is-today-day' : ''}`;
    card.setAttribute('role', 'tab');
    card.setAttribute('aria-selected', isSelected ? 'true' : 'false');

    card.innerHTML = `
      <div class="week-day-top">
        <span class="week-day-name">${day.short}</span>
        ${summary.isToday ? '<span class="today-pill">HOJE</span>' : `<span class="week-day-split-tag">TREINO ${summary.split.id}</span>`}
      </div>

      <div class="week-day-body">
        <strong class="week-day-focus">${shortFocus}</strong>
        <span class="week-day-count">${summary.done}/${summary.total} exercícios</span>
        <div class="week-day-mini-bar">
          <div class="week-day-mini-fill" style="width: ${summary.percent}%"></div>
        </div>
      </div>

      <div class="week-day-status-badge status-pill-${summary.status}">
        ${summary.statusLabel}
      </div>

      <div class="week-day-quick-actions">
        <button type="button" class="day-quick-btn day-quick-done ${summary.status === 'done' ? 'active' : ''}" data-day-action="mark-done" data-day="${day.key}" title="Marcar que FEZ o treino de ${day.label}">
          ✓ Fez
        </button>
        <button type="button" class="day-quick-btn day-quick-missed ${summary.status === 'missed' ? 'active' : ''}" data-day-action="mark-missed" data-day="${day.key}" title="Marcar que NÃO FEZ o treino de ${day.label}">
          ✗ Não
        </button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      const quickBtn = e.target.closest('[data-day-action]');
      if (quickBtn) {
        e.stopPropagation();
        const act = quickBtn.dataset.dayAction;
        const targetDayKey = quickBtn.dataset.day;
        if (act === 'mark-done') {
          completeAllExercisesForDay(targetDayKey);
        } else if (act === 'mark-missed') {
          markDayAsMissedOrReset(targetDayKey);
        }
        return;
      }

      appState.activeDayKey = day.key;
      appState.activeSplitId = summary.split.id;
      selectedMuscleFilter = null;
      saveState();
      renderDashboard();
    });

    gridEl.appendChild(card);
  });

  const summaryPill = document.getElementById('weeklySummaryPill');
  if (summaryPill) {
    const missedText = daysMissedCount > 0 ? ` • ${daysMissedCount} não feito(s)` : '';
    summaryPill.textContent = `${daysDoneCount} de 7 dias feitos${missedText}`;
  }
}

function completeAllExercisesForDay(dayKey = appState.activeDayKey) {
  const dayObj = WEEK_DAYS.find(d => d.key === dayKey) || getActiveDayObj();
  const plan = getActivePlan();
  const split = getSplitForDay(dayKey, plan);
  const totalCount = split.exercises.length;

  split.exercises.forEach(ex => {
    appState.exerciseProgress[getProgressKey(ex.id, dayKey)] = {
      done: true,
      completedSets: Array(ex.baseSets).fill(true)
    };
  });

  appState.dayStatusOverride[dayKey] = 'done';

  const nowStr = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  appState.workoutHistory.unshift({
    title: `${dayObj.label} — ${split.title}`,
    locationLabel: plan.label,
    date: nowStr,
    doneCount: totalCount,
    totalCount
  });

  saveState();
  renderDashboard();
  showToast(`🏆 ${dayObj.label} (${split.tabName}) marcado como FEITO!`);
}

function renderSplitTabs(plan) {
  const container = document.getElementById('splitTabs');
  container.innerHTML = '';

  const activeDayKey = appState.activeDayKey;
  const currentSplit = getSplitForDay(activeDayKey, plan);

  plan.splits.forEach(sp => {
    const total = sp.exercises.length;
    const done = sp.exercises.filter(ex => getExerciseState(ex, activeDayKey).done).length;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `split-tab-btn ${sp.id === currentSplit.id ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="split-tab-label">${sp.tabName}</span>
      <span class="split-tab-progress">${done}/${total}</span>
    `;
    btn.addEventListener('click', () => {
      appState.daySplitMap[activeDayKey] = sp.id;
      appState.activeSplitId = sp.id;
      selectedMuscleFilter = null;
      saveState();
      renderDashboard();
    });
    container.appendChild(btn);
  });
}

function renderExercisesList(split, goalKey) {
  const listEl = document.getElementById('exercisesList');
  listEl.innerHTML = '';

  const filteredExercises = split.exercises.filter(ex => {
    const st = getExerciseState(ex);
    if (appState.activeFilter === 'done') return st.done;
    if (appState.activeFilter === 'pending') return !st.done;
    return true;
  });

  if (filteredExercises.length === 0) {
    const emptyMsg = appState.activeFilter === 'pending'
      ? '🎉 Parabéns! Não falta nenhum exercício neste treino — tudo foi FEITO!'
      : 'Nenhum exercício marcado como "Feito" ainda. Comece marcando suas séries ou concluindo o primeiro exercício!';
    listEl.innerHTML = `<div class="empty-filter-state">${emptyMsg}</div>`;
    return;
  }

  filteredExercises.forEach((ex) => {
    const originalIndex = split.exercises.findIndex(item => item.id === ex.id) + 1;
    const st = getExerciseState(ex);
    const repsText = ex.repsByGoal[goalKey] || ex.repsByGoal.hypertrophy;
    const map = EXERCISE_MUSCLE_MAP[ex.id] || { primary: [], secondary: [] };
    const matchesMuscleFilter = selectedMuscleFilter && (
      map.primary.includes(selectedMuscleFilter) || map.secondary.includes(selectedMuscleFilter)
    );

    const card = document.createElement('article');
    card.className = `exercise-card ${st.done ? 'is-done' : ''} ${matchesMuscleFilter ? 'muscle-highlighted' : ''}`;
    card.dataset.exerciseId = ex.id;

    card.addEventListener('mouseenter', () => highlightExerciseMusclesOnMap(ex.id));
    card.addEventListener('mouseleave', () => restoreMapFromHover());

    const setsButtonsHtml = st.completedSets.map((isSetDone, idx) => `
      <button
        type="button"
        class="set-circle-btn ${isSetDone ? 'set-completed' : ''}"
        data-action="toggle-set"
        data-id="${ex.id}"
        data-set="${idx}"
        title="Marcar ${idx + 1}ª série como feita"
      >
        ${idx + 1}ª
      </button>
    `).join('');

    card.innerHTML = `
      <div class="exercise-left">
        <button
          type="button"
          class="exercise-check-btn"
          data-action="toggle-done"
          data-id="${ex.id}"
          title="${st.done ? 'Desmarcar exercício' : 'Marcar exercício como FEITO'}"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="20" height="20">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </button>

        <div class="exercise-info">
          <div class="exercise-top-row">
            <span class="exercise-order">#${String(originalIndex).padStart(2, '0')}</span>
            <span class="exercise-muscle">${ex.muscle}</span>
            <span class="status-badge ${st.done ? 'badge-done' : 'badge-pending'}">
              ${st.done ? '✓ FEITO' : '⏳ AINDA FALTA'}
            </span>
          </div>

          <h4 class="exercise-name">${ex.name}</h4>

          <div class="exercise-specs">
            <span class="spec-pill">Séries: <strong>${ex.baseSets}x</strong></span>
            <span class="spec-pill">Repetições: <strong>${repsText}</strong></span>
            <span class="spec-pill">Descanso: <strong>${ex.restSeconds}s</strong></span>
          </div>

          <div class="exercise-tip">
            💡 <strong>Execução:</strong> ${ex.tip}
          </div>
        </div>
      </div>

      <div class="exercise-right">
        <span class="sets-tracker-label">MARCAR SÉRIES FEITAS:</span>
        <div class="sets-Row">
          ${setsButtonsHtml}
        </div>
        <div class="exercise-actions-row">
          <button
            type="button"
            class="btn-watch-video"
            data-action="watch-video"
            data-id="${ex.id}"
            title="Assistir vídeo explicativo de como executar este exercício"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>Vídeo Explicativo</span>
          </button>
        </div>
        <button
          type="button"
          class="btn-toggle-done"
          data-action="toggle-done"
          data-id="${ex.id}"
        >
          ${st.done ? '✓ Concluído (Desmarcar)' : 'Marcar como FEITO'}
        </button>
      </div>
    `;

    listEl.appendChild(card);
  });
}

// ============================================================================
// MODAL DE VÍDEO EXPLICATIVO & ANIMAÇÃO BIOMECÂNICA DE EXECUÇÃO
// ============================================================================

function getBiomechSvgAnimation(motionType) {
  // Gera uma animação vetorial 2D em SVG demonstrando o vetor biomecânico do movimento
  switch (motionType) {
    case 'squat':
      return `
        <svg viewBox="0 0 100 100" width="110" height="110">
          <circle cx="50" cy="20" r="8" fill="#ff1e38">
            <animate attributeName="cy" values="20;38;20" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <line x1="50" y1="28" x2="45" y2="55" stroke="#fff" stroke-width="4" stroke-linecap="round">
            <animate attributeName="y1" values="28;46;28" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="x2" values="48;36;48" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="y2" values="55;64;55" dur="2.2s" repeatCount="indefinite" />
          </line>
          <polyline points="48,55 52,72 48,90" fill="none" stroke="#ff1e38" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <animate attributeName="points" values="48,55 52,72 48,90; 36,64 62,66 48,90; 48,55 52,72 48,90" dur="2.2s" repeatCount="indefinite" />
          </polyline>
          <line x1="25" y1="92" x2="75" y2="92" stroke="#444" stroke-width="2" />
        </svg>
      `;
    case 'hipthrust':
      return `
        <svg viewBox="0 0 100 100" width="110" height="110">
          <rect x="12" y="58" width="18" height="26" rx="3" fill="#2a2a38" stroke="#555" />
          <circle cx="24" cy="48" r="6" fill="#ff1e38" />
          <polyline points="26,55 54,55 76,56 78,84" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <animate attributeName="points" values="26,55 54,74 76,58 78,84; 26,55 54,52 76,54 78,84; 26,55 54,74 76,58 78,84" dur="2.2s" repeatCount="indefinite" />
          </polyline>
          <circle cx="54" cy="52" r="5" fill="#ff1e38">
            <animate attributeName="cy" values="74;52;74" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <line x1="10" y1="85" x2="90" y2="85" stroke="#444" stroke-width="2" />
        </svg>
      `;
    case 'push':
      return `
        <svg viewBox="0 0 100 100" width="110" height="110">
          <circle cx="76" cy="44" r="6" fill="#ff1e38">
            <animate attributeName="cy" values="44;64;44" dur="2s" repeatCount="indefinite" />
          </circle>
          <line x1="18" y1="76" x2="72" y2="48" stroke="#fff" stroke-width="4" stroke-linecap="round">
            <animate attributeName="y2" values="48;68;48" dur="2s" repeatCount="indefinite" />
          </line>
          <polyline points="66,50 66,64 68,76" fill="none" stroke="#ff1e38" stroke-width="3.5" stroke-linecap="round">
            <animate attributeName="points" values="66,50 66,64 68,76; 66,68 56,62 68,76; 66,50 66,64 68,76" dur="2s" repeatCount="indefinite" />
          </polyline>
          <line x1="10" y1="78" x2="90" y2="78" stroke="#444" stroke-width="2" />
        </svg>
      `;
    case 'pull':
      return `
        <svg viewBox="0 0 100 100" width="110" height="110">
          <line x1="25" y1="14" x2="75" y2="14" stroke="#555" stroke-width="3" />
          <line x1="50" y1="14" x2="50" y2="34" stroke="#ff1e38" stroke-width="2.5">
            <animate attributeName="y2" values="28;52;28" dur="2.1s" repeatCount="indefinite" />
          </line>
          <rect x="34" y="28" width="32" height="5" rx="2" fill="#fff">
            <animate attributeName="y" values="28;52;28" dur="2.1s" repeatCount="indefinite" />
          </rect>
          <circle cx="50" cy="46" r="7" fill="#ff1e38" />
          <line x1="50" y1="54" x2="50" y2="85" stroke="#fff" stroke-width="4" stroke-linecap="round" />
        </svg>
      `;
    default:
      return `
        <svg viewBox="0 0 100 100" width="110" height="110">
          <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,30,56,0.3)" stroke-width="4" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#ff1e38" stroke-width="4" stroke-dasharray="30 15">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="6" fill="#fff" />
        </svg>
      `;
  }
}

function openExerciseVideoModal(exerciseId) {
  const split = getActiveSplit();
  const exercise = split.exercises.find(e => e.id === exerciseId);
  if (!exercise) return;

  const guide = EXERCISE_VIDEO_GUIDE[exerciseId] || {
    ytId: 'pRzxpe5_LLk',
    motion: 'push',
    steps: [
      'Posicione o corpo com estabilidade e coluna neutra.',
      'Execute a fase concêntrica e excêntrica com amplitude completa.',
      'Mantenha a respiração contínua durante todas as repetições.'
    ]
  };

  document.getElementById('videoModalMuscleTag').textContent = `GUIA DE EXECUÇÃO • ${exercise.muscle.toUpperCase()}`;
  document.getElementById('videoModalTitle').textContent = exercise.name;

  // Configura o iframe do YouTube com o vídeo explicativo verificado
  const iframe = document.getElementById('videoPlayerIframe');
  iframe.src = `https://www.youtube.com/embed/${guide.ytId}?rel=0&modestbranding=1&autoplay=1`;

  // Configura o link externo caso o usuário queira abrir direto no YouTube
  const extLink = document.getElementById('btnOpenYoutubeExternal');
  extLink.href = `https://www.youtube.com/watch?v=${guide.ytId}`;

  // Vetor Biomecânico Animado
  document.getElementById('biomechSvgStage').innerHTML = getBiomechSvgAnimation(guide.motion);

  // Passo a Passo Técnico
  const stepsListEl = document.getElementById('videoExecutionSteps');
  stepsListEl.innerHTML = guide.steps.map((stepText, idx) => `
    <li>
      <span class="step-bullet">${idx + 1}</span>
      <span>${stepText}</span>
    </li>
  `).join('');

  document.getElementById('videoModalTipBox').innerHTML = `💡 <strong>Dica Principal:</strong> ${exercise.tip}`;

  document.getElementById('videoModal').classList.remove('hidden');
}

function closeExerciseVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoPlayerIframe');
  iframe.src = ''; // Para a reprodução do vídeo ao fechar
  modal.classList.add('hidden');
}

// ============================================================================
// HISTÓRICO DE PESO & HISTÓRICO DE TREINOS CONCLUÍDOS
// ============================================================================

function recordWeightIfChanged(newWeightKg) {
  const w = parseFloat(newWeightKg);
  if (isNaN(w) || w <= 0) return;

  const imcData = calculateIMCData(w, appState.profile.height);
  const nowStr = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const lastEntry = appState.weightHistory[0];
  if (!lastEntry || parseFloat(lastEntry.weight) !== w) {
    appState.weightHistory.unshift({
      date: nowStr,
      weight: w.toFixed(1),
      imc: imcData ? imcData.imcFormatted : '--'
    });
  }
}

function renderHistories() {
  const weightListEl = document.getElementById('weightHistoryList');
  const weightSummaryEl = document.getElementById('weightProgressionSummary');
  const workoutListEl = document.getElementById('workoutHistoryList');

  // Resumo da evolução de peso
  if (appState.weightHistory.length >= 2) {
    const latest = parseFloat(appState.weightHistory[0].weight);
    const oldest = parseFloat(appState.weightHistory[appState.weightHistory.length - 1].weight);
    const diff = (latest - oldest).toFixed(1);
    const sign = diff > 0 ? `+${diff}` : `${diff}`;
    weightSummaryEl.innerHTML = `Variação total desde o início: <strong class="text-red">${sign} kg</strong> (Inicial: ${oldest} kg → Atual: ${latest} kg)`;
  } else {
    weightSummaryEl.textContent = 'Atualize seu peso sempre que se pesar para visualizar sua curva de evolução.';
  }

  // Lista de Peso
  if (appState.weightHistory.length === 0) {
    weightListEl.innerHTML = `<div class="history-item"><span class="history-item-sub">Nenhum registro de peso ainda.</span></div>`;
  } else {
    weightListEl.innerHTML = appState.weightHistory.map((item, idx) => `
      <div class="history-item">
        <div>
          <div class="history-item-title">${item.weight} kg ${idx === 0 ? '(Atual)' : ''}</div>
          <div class="history-item-sub">Registrado em ${item.date}</div>
        </div>
        <span class="history-badge">IMC ${item.imc}</span>
      </div>
    `).join('');
  }

  // Lista de Treinos Concluídos
  if (appState.workoutHistory.length === 0) {
    workoutListEl.innerHTML = `<div class="history-item"><span class="history-item-sub">Nenhum treino finalizado ainda. Marque seus exercícios como "FEITO" e clique em "Registrar Treino Concluído"!</span></div>`;
  } else {
    workoutListEl.innerHTML = appState.workoutHistory.map(w => `
      <div class="history-item">
        <div>
          <div class="history-item-title">${w.title}</div>
          <div class="history-item-sub">${w.locationLabel} • ${w.date}</div>
        </div>
        <span class="history-badge">${w.doneCount}/${w.totalCount} FEITOS</span>
      </div>
    `).join('');
  }
}

// ============================================================================
// CRONÔMETRO DE DESCANSO ENTRE SÉRIES
// ============================================================================

function formatSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function startRestTimer(seconds, exerciseName) {
  const bar = document.getElementById('restTimerBar');
  const countdownEl = document.getElementById('restTimerCountdown');
  const exLabel = document.getElementById('restTimerExercise');

  if (restTimerInterval) clearInterval(restTimerInterval);

  restSecondsRemaining = seconds;
  exLabel.textContent = `Recuperando de: ${exerciseName}`;
  countdownEl.textContent = formatSeconds(restSecondsRemaining);
  bar.classList.remove('hidden');

  restTimerInterval = setInterval(() => {
    restSecondsRemaining--;
    if (restSecondsRemaining <= 0) {
      stopRestTimer();
      showToast('⚡ Tempo de descanso finalizado! Bora para a próxima série!');
      return;
    }
    countdownEl.textContent = formatSeconds(restSecondsRemaining);
  }, 1000);
}

function stopRestTimer() {
  if (restTimerInterval) {
    clearInterval(restTimerInterval);
    restTimerInterval = null;
  }
  document.getElementById('restTimerBar').classList.add('hidden');
}

// ============================================================================
// TOAST NOTIFICATION
// ============================================================================

function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 3200);
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de Login por Usuário (Simone / Mateus)
  const savedUserKey = localStorage.getItem(ACTIVE_USER_SESSION_KEY);
  if (savedUserKey && USERS_CREDENTIALS[savedUserKey]) {
    applyLoggedUserSession(savedUserKey, false);
  } else {
    logoutCurrentUser();
  }

  // Botões de seleção rápida de usuário na tela de Login (Simone / Mateus)
  const loginUserInput = document.getElementById('loginUsername');
  const loginPassInput = document.getElementById('loginPassword');
  const loginErrorMsg = document.getElementById('loginErrorMsg');

  document.querySelectorAll('.user-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.user-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (loginUserInput) {
        loginUserInput.value = btn.dataset.presetUser;
      }
      if (loginErrorMsg) {
        loginErrorMsg.classList.add('hidden');
      }
      if (loginPassInput) {
        loginPassInput.focus();
      }
    });
  });

  // Submissão do Formulário de Login
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawUser = (loginUserInput ? loginUserInput.value : '').trim().toLowerCase();
      const rawPass = (loginPassInput ? loginPassInput.value : '').trim();

      const matchedUser = USERS_CREDENTIALS[rawUser];
      if (!matchedUser || matchedUser.password !== rawPass) {
        if (loginErrorMsg) loginErrorMsg.classList.remove('hidden');
        return;
      }

      if (loginErrorMsg) loginErrorMsg.classList.add('hidden');
      applyLoggedUserSession(matchedUser.key, true);
    });
  }

  // Botão Sair / Trocar Usuário no Header
  const btnLogout = document.getElementById('btnLogout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      logoutCurrentUser();
    });
  }

  // Live IMC preview ao digitar peso ou altura
  const weightInput = document.getElementById('userWeight');
  const heightInput = document.getElementById('userHeight');

  weightInput.addEventListener('input', () => updateLiveImcPreview(true));
  heightInput.addEventListener('input', () => updateLiveImcPreview(true));

  // Submissão do formulário principal
  document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = document.getElementById('userName').value.trim();
    const weightVal = parseFloat(weightInput.value);
    const heightCm = normalizeHeightCm(heightInput.value);
    const genderVal = document.querySelector('input[name="workoutGender"]:checked')?.value || 'male';
    const locVal = document.querySelector('input[name="workoutLocation"]:checked')?.value || 'home';
    const goalVal = document.querySelector('input[name="workoutGoal"]:checked')?.value || 'hypertrophy';

    if (!weightVal || !heightCm) {
      showToast('Por favor, informe um peso e altura válidos.');
      return;
    }

    appState.profile = {
      name: nameVal,
      gender: genderVal,
      weight: weightVal.toFixed(1),
      height: heightCm,
      location: locVal,
      goal: goalVal
    };
    appState.hasConfiguredProfile = true;

    recordWeightIfChanged(weightVal);
    saveState();

    document.getElementById('setupSection').classList.add('hidden');
    renderDashboard();
    showToast('🔥 Plano de treino personalizado gerado com sucesso!');
  });

  // Botão Editar Perfil / Medidas no Header
  document.getElementById('btnEditProfile').addEventListener('click', () => {
    populateSetupFormFromState();
    const setupSec = document.getElementById('setupSection');
    setupSec.classList.toggle('hidden');
    if (!setupSec.classList.contains('hidden')) {
      setupSec.scrollIntoView({ behavior: 'smooth' });
    }
  });

  document.getElementById('btnCloseSetup').addEventListener('click', () => {
    document.getElementById('setupSection').classList.add('hidden');
  });

  // Alternar rapidamente entre Masculino e Feminino no HUD
  document.getElementById('btnQuickSwitchGender').addEventListener('click', () => {
    appState.profile.gender = appState.profile.gender === 'female' ? 'male' : 'female';
    appState.activeSplitId = 'A';
    selectedMuscleFilter = null;
    saveState();
    renderDashboard();
    const gLabel = appState.profile.gender === 'female'
      ? 'Protocolo Feminino (Lower/Upper 2x)'
      : 'Protocolo Masculino (PPL / Upper-Lower)';
    showToast(`Gênero do treino alterado para: ${gLabel}`);
  });

  // Alternar rapidamente entre Casa e Academia
  document.getElementById('btnQuickSwitchLocation').addEventListener('click', () => {
    appState.profile.location = appState.profile.location === 'home' ? 'gym' : 'home';
    appState.activeSplitId = 'A';
    selectedMuscleFilter = null;
    saveState();
    renderDashboard();
    const label = appState.profile.location === 'home' ? 'Treino em Casa (Sem Equipamento)' : 'Treino na Academia';
    showToast(`Modalidade alterada para: ${label}`);
  });

  // Clique nos músculos do Mapa Corporal SVG ou na lista de Diagnóstico Muscular
  document.getElementById('muscleHudCard').addEventListener('click', (e) => {
    const zone = e.target.closest('.muscle-zone');
    const row = e.target.closest('[data-muscle-select]');
    const mKey = zone ? zone.dataset.muscle : (row ? row.dataset.muscleSelect : null);
    if (!mKey) return;

    selectedMuscleFilter = selectedMuscleFilter === mKey ? null : mKey;
    renderDashboard();
  });

  // Filtros: Todos / Ainda Faltam / Feitos
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.activeFilter = btn.dataset.filter;
      saveState();
      renderDashboard();
    });
  });

  // Delegação de eventos na lista de exercícios (Marcar Feito / Marcar Série / Assistir Vídeo)
  document.getElementById('exercisesList').addEventListener('click', (e) => {
    const btnVideo = e.target.closest('[data-action="watch-video"]');
    if (btnVideo) {
      openExerciseVideoModal(btnVideo.dataset.id);
      return;
    }

    const btnDone = e.target.closest('[data-action="toggle-done"]');
    if (btnDone) {
      toggleExerciseDone(btnDone.dataset.id);
      return;
    }

    const btnSet = e.target.closest('[data-action="toggle-set"]');
    if (btnSet) {
      toggleExerciseSet(btnSet.dataset.id, parseInt(btnSet.dataset.set, 10));
    }
  });

  // Fechar Modal de Vídeo Explicativo
  document.getElementById('btnCloseVideoModal').addEventListener('click', closeExerciseVideoModal);
  document.getElementById('btnGotItVideoModal').addEventListener('click', closeExerciseVideoModal);
  document.getElementById('videoModal').addEventListener('click', (e) => {
    if (e.target.id === 'videoModal') {
      closeExerciseVideoModal();
    }
  });

  // Botão Iniciar Nova Semana (zerar todos os dias da semana)
  const btnResetWeek = document.getElementById('btnResetWeek');
  if (btnResetWeek) {
    btnResetWeek.addEventListener('click', () => {
      resetEntireWeek();
    });
  }

  // Marcar dia selecionado como "Não Fiz" / Reiniciar dia atual
  document.getElementById('btnResetCurrentSplit').addEventListener('click', () => {
    markDayAsMissedOrReset(appState.activeDayKey);
  });

  // Concluir dia selecionado e registrar no Histórico
  document.getElementById('btnFinishWorkout').addEventListener('click', () => {
    completeAllExercisesForDay(appState.activeDayKey);
  });

  // Modal de Atualizar Peso
  const weightModal = document.getElementById('weightModal');
  const newWeightInput = document.getElementById('newWeightInput');

  function openWeightModal() {
    newWeightInput.value = appState.profile.weight || '';
    weightModal.classList.remove('hidden');
    newWeightInput.focus();
  }

  function closeWeightModal() {
    weightModal.classList.add('hidden');
  }

  document.getElementById('btnLogWeight').addEventListener('click', openWeightModal);
  document.getElementById('btnAddWeightEntry').addEventListener('click', openWeightModal);
  document.getElementById('btnCloseWeightModal').addEventListener('click', closeWeightModal);
  document.getElementById('btnCancelWeightModal').addEventListener('click', closeWeightModal);

  document.getElementById('weightUpdateForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const w = parseFloat(newWeightInput.value);
    if (!w || w < 25) return;

    appState.profile.weight = w.toFixed(1);
    recordWeightIfChanged(w);
    saveState();
    closeWeightModal();
    renderDashboard();
    showToast(`⚖️ Peso atualizado para ${w.toFixed(1)} kg!`);
  });

  // Limpar histórico de treinos
  document.getElementById('btnClearHistory').addEventListener('click', () => {
    appState.workoutHistory = [];
    saveState();
    renderDashboard();
    showToast('Histórico de treinos limpo.');
  });

  // Controles do Timer de Descanso
  document.getElementById('btnTimerAdd15').addEventListener('click', () => {
    restSecondsRemaining += 15;
    document.getElementById('restTimerCountdown').textContent = formatSeconds(restSecondsRemaining);
  });

  document.getElementById('btnTimerStop').addEventListener('click', () => {
    stopRestTimer();
  });
});
