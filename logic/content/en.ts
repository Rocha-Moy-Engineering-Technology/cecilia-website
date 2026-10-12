import type { ProductContent } from '../../types/site';

export const en: ProductContent = {
  language: 'en',
  title: 'Cecilia — Get to know your cycle',
  description:
    'Understand your cycle and fertility signs with Cecilia. Explore daily guidance, cycle logging, a calendar, and temperature charts. Join the iOS open beta.',
  skip: 'Skip to content',
  nav: {
    features: 'The app',
    methods: 'The methods',
    beta: 'Join the beta',
    language: 'Choose language',
  },
  hero: {
    first: 'Your cycle.',
    second: 'A clearer picture.',
    body: 'A little more understanding, day by day. Cecilia brings your cycle and fertility signs together, so you can see what they mean for today.',
    action: 'Join the open beta',
    note: 'For iOS · Available through TestFlight',
  },
  example: 'Example screens · Illustrative cycle data',
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
    title: 'Get to know Cecilia.',
    body: 'The iOS open beta is ready for you to explore. Join through Apple TestFlight and start with your own cycle.',
    steps: [
      'Install Apple TestFlight on your iOS device.',
      'Open the beta invitation and install Cecilia.',
      'Sign in, set up your profile, and start recording your signs.',
    ],
    note: 'This is a beta version. Features and the experience may change as the app develops.',
  },
  faqTitle: 'A few things to know.',
  faq: [
    {
      question: 'What is Cecilia for?',
      answer:
        'Cecilia helps you record your menstrual cycle and body signs and understand a daily fertility forecast. It brings daily guidance, a calendar, and temperature charts into one app.',
    },
    {
      question: 'Do I need to track my temperature?',
      answer:
        'The calendar method uses cycle timing. The symptothermal method also uses temperature and cervical mucus signs to confirm the post-ovulation phase. You can choose and change your method in Settings.',
    },
    {
      question: 'Can I change my records and language?',
      answer:
        'Yes. You can add, edit, or clear observations for today and past days. Cecilia supports English, Spanish, and Brazilian Portuguese, and lets you change your language and temperature unit in Settings.',
    },
    {
      question: 'Does Cecilia guarantee contraception?',
      answer:
        'No. Fertility awareness methods can fail, and forecasts depend on the information available. Consult a health professional about contraception and your health.',
    },
  ],
  disclaimerTitle: 'Before you begin',
  disclaimer:
    'Cecilia is not a contraceptive guarantee. Fertility awareness methods can fail, so consult a health professional about your contraception and your health.',
  footer: 'Cycle awareness, day by day.',
};
