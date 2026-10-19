export type Locale = 'en' | 'es' | 'pt';
export interface BrowserLanguagePort {
  readonly languages: readonly string[];
  replace(url: string): void;
}
export interface Feature {
  title: string;
  body: string;
  screen: 'today' | 'calendar' | 'chart';
  alt: string;
}
export interface ProductContent {
  language: string;
  title: string;
  description: string;
  skip: string;
  nav: { features: string; methods: string; beta: string; language: string };
  hero: {
    first: string;
    second: string;
    body: string;
    action: string;
    note: string;
  };
  example: string;
  goals: {
    title: string;
    change: string;
    limit: string;
    source: string;
    items: [
      { id: 'trying_to_conceive'; title: string; body: string; alt: string },
      { id: 'avoiding_pregnancy'; title: string; body: string; alt: string },
    ];
  };
  intro: { title: string; body: string };
  features: [Feature, Feature, Feature];
  observations: string;
  methods: {
    title: string;
    body: string;
    calendar: string;
    calendarBody: string;
    symptothermal: string;
    symptothermalBody: string;
  };
  beta: {
    title: string;
    body: string;
    webTitle: string;
    webBody: string;
    androidTitle: string;
    androidBody: string;
    androidPending: string;
    setup: string;
    ios: string;
    note: string;
  };
  faqTitle: string;
  faq: [
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
  ];
  disclaimerTitle: string;
  disclaimer: string;
  footer: string;
}
