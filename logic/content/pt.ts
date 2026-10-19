import type { ProductContent } from '../../types/site';

export const pt: ProductContent = {
  language: 'pt-BR',
  title: 'Cecilia — Um app para mulheres. Seu ciclo. Seus planos.',
  description:
    'Para mulheres que querem engravidar e mulheres que buscam planejamento familiar. Acompanhe seus sinais, a janela fértil estimada e seu ciclo. Conheça a Cecilia no navegador.',
  skip: 'Ir para o conteúdo',
  nav: {
    features: 'O aplicativo',
    methods: 'Os métodos',
    beta: 'Conheça',
    language: 'Escolha o idioma',
  },
  hero: {
    first: 'Seu ciclo.',
    second: 'Seus planos.',
    positioning: 'Um aplicativo para mulheres.',
    body: 'Para mulheres que querem engravidar e mulheres que buscam planejamento familiar.',
    action: 'Abrir o app web',
    note: 'Use no navegador, sem instalar. Testes no iOS em breve.',
  },
  example: 'Telas de exemplo · Dados ilustrativos de ciclo',
  goals: {
    title: 'Um ciclo. Dois objetivos.',
    change:
      'Escolha seu objetivo ao começar e mude quando quiser nas Configurações. Os mesmos sinais e previsões, com orientações para seus planos.',
    limit:
      'As previsões são estimativas, e nenhum dia é garantia de segurança. Aprenda o método com um profissional qualificado. A Cecilia não substitui a contracepção nem protege contra ISTs.',
    source: 'Entenda os cuidados com os métodos (NHS, em inglês).',
    items: [
      {
        id: 'trying_to_conceive',
        title: 'Quero engravidar',
        body: 'Acompanhar os sinais e a janela fértil estimada para planejar as tentativas.',
        alt: 'Tela Hoje real da Cecilia no objetivo Quero engravidar, com dados ilustrativos.',
      },
      {
        id: 'avoiding_pregnancy',
        title: 'Quero fazer o meu planejamento familiar',
        body: 'Apoiar meu planejamento familiar com métodos de percepção da fertilidade.',
        alt: 'Tela Hoje real da Cecilia no objetivo Quero fazer o meu planejamento familiar, com dados ilustrativos.',
      },
    ],
  },
  intro: {
    title: 'Um espaço para se conhecer.',
    body: 'Um espaço para mulheres conhecerem melhor o próprio ciclo. Registre o que você percebe, observe seus padrões e consulte uma visão diária baseada no seu histórico e nos sinais que você registra.',
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
    body: 'Escolha como testar a Cecilia: direto no navegador ou no aplicativo para Android.',
    webTitle: 'No navegador',
    webBody: 'Acesse a Cecilia agora, sem baixar ou instalar um aplicativo.',
    androidTitle: 'Android',
    androidBody:
      'Instale a versão de teste pelo Firebase App Distribution. Abra o convite com sua conta Google e siga as instruções no celular.',
    androidAction: 'Testar no Android',
    setup:
      'Ao entrar, escolha seu objetivo, configure seu perfil e comece a registrar seus sinais.',
    ios: 'Testes no iOS estarão disponíveis em breve. Enquanto isso, use o app web no seu iPhone ou iPad.',
    note: 'Esta é uma versão de teste. As funcionalidades e a experiência podem mudar à medida que o aplicativo evolui.',
  },
  faqTitle: 'Algumas coisas para saber.',
  faq: [
    {
      question: 'Para quem é a Cecilia?',
      answer:
        'A Cecilia acompanha o ciclo de mulheres que querem engravidar e de mulheres que buscam planejamento familiar com métodos de percepção da fertilidade. Ela reúne sinais, previsões estimadas, calendário e temperatura. Dados insuficientes ou ovulação não confirmada são incerteza, não indicação do melhor dia para engravidar.',
    },
    {
      question: 'Preciso registrar minha temperatura?',
      answer:
        'O método do calendário usa as datas do ciclo. O método sintotérmico também usa a temperatura e o muco cervical para confirmar a fase após a ovulação. Você pode escolher e mudar seu método em Configurações.',
    },
    {
      question: 'Posso mudar meu objetivo, meus registros e o idioma?',
      answer:
        'Sim. Escolha seu objetivo ao começar e mude nas Configurações. A mudança adapta a orientação e mantém os registros, o método e a previsão. Você também pode editar registros e escolher inglês, espanhol ou português do Brasil.',
    },
    {
      question: 'A Cecilia garante a contracepção?',
      answer:
        'Não. Nenhum dia tem garantia de segurança. As previsões dependem dos dados e podem falhar; não confirmam ovulação nem garantem uma gravidez. Para evitar uma gravidez, aprenda seu método com um profissional qualificado. O app não protege contra ISTs.',
    },
  ],
  disclaimerTitle: 'Antes de começar',
  disclaimer:
    'A Cecilia não é uma garantia contraceptiva. Os métodos de percepção da fertilidade podem falhar; por isso, consulte um profissional de saúde sobre sua contracepção e sua saúde.',
  footer: 'Para mulheres. Para seu ciclo e seus planos.',
};
