import type { ProductContent } from '../../types/site';

export const en: ProductContent = {
  language: 'en',
  title: 'Cecilia — Your cycle. Your plans.',
  description:
    'For people trying to conceive and people planning their families. Track your signs, estimated fertile window, and cycle. Meet Cecilia in your browser.',
  skip: 'Skip to content',
  nav: {
    features: 'The app',
    methods: 'The methods',
    beta: 'Meet Cecilia',
    language: 'Choose language',
  },
  hero: {
    first: 'Your cycle.',
    second: 'Your plans.',
    body: 'For people trying to conceive and people planning their families.',
    action: 'Open the web app',
    note: 'Use in your browser, with no installation. iOS testing available soon.',
  },
  example: 'Example screens · Illustrative cycle data',
  goals: {
    title: 'One cycle. Two goals.',
    change:
      'Choose your goal when you start and change it anytime in Settings. The same signs and forecasts, with guidance for your plans.',
    limit:
      'Forecasts are estimates; no day is guaranteed safe. Learn the method with a qualified professional. Cecilia does not replace contraception or protect against STIs.',
    source: 'Read about fertility-awareness precautions (NHS).',
    items: [
      {
        id: 'trying_to_conceive',
        title: 'I want to conceive',
        body: 'Track your signs and estimated fertile window to plan your attempts.',
        alt: 'Real Cecilia Today screen with the I want to conceive goal and illustrative data.',
      },
      {
        id: 'avoiding_pregnancy',
        title: 'I want to plan my family',
        body: 'Support my family planning with fertility-awareness methods.',
        alt: 'Real Cecilia Today screen with the I want to plan my family goal and illustrative data.',
      },
    ],
  },
  intro: {
    title: 'Make room for understanding.',
    body: 'Your cycle is more than a date on a calendar. Record what you notice. See the patterns. Get a daily view grounded in your cycle history and the signs you log.',
  },
  features: [
    {
      title: 'A starting point for today.',
      body: 'See your daily fertility status, the reasons behind it, and your cycle day. Your outlook brings together your estimated ovulation, fertile window, and next period, with confidence and warnings when relevant.',
      screen: 'today',
      alt: 'Cecilia Today screen showing a fertile status, cycle day, and daily guidance with example data',
    },
    {
      title: 'See the days in context.',
      body: 'Explore your cycle in a color-coded calendar. Recorded and predicted days are clearly marked, and you can return to an earlier day to add or edit your observations.',
      screen: 'calendar',
      alt: 'Cecilia monthly calendar with labeled period, fertile, and estimated ovulation days',
    },
    {
      title: 'Follow your temperature pattern.',
      body: 'View your basal body temperature across the current cycle, together with a coverline and temperature shift when the app identifies them. Choose Celsius or Fahrenheit in Settings.',
      screen: 'chart',
      alt: 'Cecilia temperature chart with example readings, a coverline, and a temperature shift',
    },
  ],
  observations:
    'Keep your observations together: period dates, basal body temperature, cervical mucus, ovulation test results, intercourse, and notes.',
  methods: {
    title: 'Two methods. One place to understand them.',
    body: 'Choose the approach you use in Settings. Cecilia explains the daily status and shows when more information is needed.',
    calendar: 'Calendar method',
    calendarBody:
      'Uses your cycle history and typical cycle length to estimate your fertile window. Predictions are estimates, and cycle variability matters.',
    symptothermal: 'Symptothermal method',
    symptothermalBody:
      'Combines cycle timing with cervical mucus and temperature signs. It waits for both the temperature shift and mucus peak rules before confirming the post-ovulation phase.',
  },
  beta: {
    title: 'Meet Cecilia.',
    body: 'Start with the web app. The test version opens directly in your phone or computer browser.',
    webTitle: 'In your browser',
    webBody: 'Open Cecilia now, with nothing to download or install.',
    androidTitle: 'Android',
    androidBody:
      'Mobile testing will use Firebase App Distribution. We’re preparing the invitation to download the app.',
    androidPending: 'Android invitation coming soon',
    setup:
      'Once you sign in, choose your goal, set up your profile, and start logging your signs.',
    ios: 'iOS testing will be available soon. Meanwhile, use the web app on your iPhone or iPad.',
    note: 'This is a test version. Features and the experience may change as the app develops.',
  },
  faqTitle: 'A few things to know.',
  faq: [
    {
      question: 'What is Cecilia for?',
      answer:
        'Cecilia supports cycle awareness for people trying to conceive and people planning their families through fertility-awareness methods. It brings signs, estimated forecasts, a calendar, and temperatures together. Insufficient data or unconfirmed ovulation means uncertainty, not advice about the best time to conceive.',
    },
    {
      question: 'Do I need to track my temperature?',
      answer:
        'The calendar method uses cycle timing. The symptothermal method also uses temperature and cervical mucus signs to confirm the post-ovulation phase. You can choose and change your method in Settings.',
    },
    {
      question: 'Can I change my goal, records, and language?',
      answer:
        'Yes. Choose your goal when you start and change it in Settings. Changing it adapts the guidance and keeps your records, method, and forecast. You can also edit records and choose English, Spanish, or Brazilian Portuguese.',
    },
    {
      question: 'Does Cecilia guarantee contraception?',
      answer:
        'No. No day is guaranteed safe. Forecasts depend on available data and can fail; they do not confirm ovulation or guarantee conception. To avoid pregnancy, learn your method with a qualified professional. The app does not protect against STIs.',
    },
  ],
  disclaimerTitle: 'Before you begin',
  disclaimer:
    'Cecilia is not a contraceptive guarantee. Fertility awareness methods can fail, so consult a health professional about your contraception and your health.',
  footer: 'Cycle awareness, day by day.',
};
