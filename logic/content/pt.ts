import type { ProductContent } from '../../types/site';

export const pt: ProductContent = {
  language: 'pt-BR',
  title: 'Cecilia — Conheça seu ciclo',
  description:
    'Entenda seu ciclo e seus sinais de fertilidade com a Cecilia. Orientação diária, registros, calendário e gráficos de temperatura. Participe da beta para iOS.',
  skip: 'Ir para o conteúdo',
  nav: {
    features: 'O aplicativo',
    methods: 'Os métodos',
    beta: 'Entre na beta',
    language: 'Escolha o idioma',
  },
  hero: {
    first: 'Seu ciclo.',
    second: 'Mais clareza, a cada dia.',
    body: 'Um pouco mais de compreensão, dia após dia. A Cecilia reúne seu ciclo e seus sinais de fertilidade para ajudar você a entender o que eles significam hoje.',
    action: 'Participe da beta aberta',
    note: 'Para iOS · Se você ainda não tem o TestFlight, instale-o primeiro. Depois, volte aqui e toque neste botão novamente para instalar a Cecilia.',
  },
  example: 'Telas de exemplo · Dados ilustrativos de ciclo',
  intro: {
    title: 'Um espaço para se conhecer.',
    body: 'Seu ciclo é mais do que uma data no calendário. Registre o que você percebe. Observe os padrões. Consulte uma visão diária baseada no seu histórico e nos sinais que você registra.',
  },
  features: [
    {
      title: 'Um ponto de partida para hoje.',
      body: 'Veja seu estado diário de fertilidade, os motivos por trás dele e o dia do seu ciclo. Seu panorama reúne a ovulação estimada, a janela fértil e a próxima menstruação, com o nível de confiança e os avisos pertinentes.',
      screen: 'today',
      alt: 'Tela Hoje da Cecilia mostrando estado fértil, dia do ciclo e orientação diária com dados de exemplo',
    },
    {
      title: 'Cada dia, em contexto.',
      body: 'Explore seu ciclo em um calendário com cores. Os dias registrados e previstos são claramente identificados, e você pode voltar a um dia anterior para adicionar ou editar suas observações.',
      screen: 'calendar',
      alt: 'Calendário mensal da Cecilia com dias de menstruação, dias férteis e ovulação estimada',
    },
    {
      title: 'Acompanhe seu padrão de temperatura.',
      body: 'Veja sua temperatura basal ao longo do ciclo atual, com a linha de referência e a mudança térmica quando o aplicativo as identifica. Escolha Celsius ou Fahrenheit em Configurações.',
      screen: 'chart',
      alt: 'Gráfico de temperatura da Cecilia com dados de exemplo, linha de referência e mudança térmica',
    },
  ],
  observations:
    'Reúna suas observações: datas da menstruação, temperatura basal, muco cervical, resultados de testes de ovulação, relações sexuais e notas.',
  methods: {
    title: 'Dois métodos. Um lugar para entendê-los.',
    body: 'Escolha o método que você usa em Configurações. A Cecilia explica o estado diário e mostra quando precisa de mais informações.',
    calendar: 'Método do calendário',
    calendarBody:
      'Usa seu histórico e a duração habitual do ciclo para estimar a janela fértil. As previsões são estimativas, e a variação dos ciclos importa.',
    symptothermal: 'Método sintotérmico',
    symptothermalBody:
      'Combina as datas do ciclo com o muco cervical e a temperatura. Aguarda a confirmação pelas regras da mudança térmica e do pico de muco antes de confirmar a fase após a ovulação.',
  },
  beta: {
    title: 'Conheça a Cecilia.',
    body: 'A beta aberta para iOS está pronta para você explorar. Entre pelo Apple TestFlight e comece com o seu próprio ciclo.',
    steps: [
      'Toque em “Participe da beta aberta” e instale o TestFlight, se solicitado.',
      'Após instalar o TestFlight, volte a esta página e toque em “Participe da beta aberta” novamente para instalar a Cecilia.',
      'Entre na sua conta, configure seu perfil e comece a registrar seus sinais.',
    ],
    note: 'Esta é uma versão beta. As funcionalidades e a experiência podem mudar à medida que o aplicativo evolui.',
  },
  faqTitle: 'Algumas coisas para saber.',
  faq: [
    {
      question: 'Para que serve a Cecilia?',
      answer:
        'A Cecilia ajuda você a registrar seu ciclo menstrual e seus sinais corporais e a entender uma previsão diária de fertilidade. Ela reúne orientação diária, calendário e gráficos de temperatura em um aplicativo.',
    },
    {
      question: 'Preciso registrar minha temperatura?',
      answer:
        'O método do calendário usa as datas do ciclo. O método sintotérmico também usa a temperatura e o muco cervical para confirmar a fase após a ovulação. Você pode escolher e mudar seu método em Configurações.',
    },
    {
      question: 'Posso mudar meus registros e o idioma?',
      answer:
        'Sim. Você pode adicionar, editar ou apagar observações de hoje e de dias passados. A Cecilia está disponível em inglês, espanhol e português do Brasil, e permite mudar o idioma e a unidade de temperatura em Configurações.',
    },
    {
      question: 'A Cecilia garante a contracepção?',
      answer:
        'Não. Os métodos de percepção da fertilidade podem falhar, e as previsões dependem das informações disponíveis. Consulte um profissional de saúde sobre sua contracepção e sua saúde.',
    },
  ],
  disclaimerTitle: 'Antes de começar',
  disclaimer:
    'A Cecilia não é uma garantia contraceptiva. Os métodos de percepção da fertilidade podem falhar; por isso, consulte um profissional de saúde sobre sua contracepção e sua saúde.',
  footer: 'Conheça seu ciclo, dia após dia.',
};
