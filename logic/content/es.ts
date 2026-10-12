import type { ProductContent } from '../../types/site';

export const es: ProductContent = {
  language: 'es',
  title: 'Cecilia — Conoce tu ciclo',
  description:
    'Conoce tu ciclo y tus signos de fertilidad con Cecilia. Orientación diaria, registro del ciclo, calendario y gráficas de temperatura. Únete a la beta para iOS.',
  skip: 'Ir al contenido',
  nav: {
    features: 'La app',
    methods: 'Los métodos',
    beta: 'Únete a la beta',
    language: 'Elige el idioma',
  },
  hero: {
    first: 'Tu ciclo.',
    second: 'Más claridad, cada día.',
    body: 'Un poco más de comprensión, día a día. Cecilia reúne tu ciclo y tus signos de fertilidad para ayudarte a entender lo que significan hoy.',
    action: 'Únete a la beta abierta',
    note: 'Para iOS · Disponible en TestFlight',
  },
  example: 'Pantallas de ejemplo · Datos ilustrativos del ciclo',
  intro: {
    title: 'Un espacio para conocerte.',
    body: 'Tu ciclo es más que una fecha en el calendario. Registra lo que observas. Identifica patrones. Consulta una visión diaria basada en tu historial y en los signos que registras.',
  },
  features: [
    {
      title: 'Un punto de partida para hoy.',
      body: 'Consulta tu estado de fertilidad diario, sus motivos y el día de tu ciclo. Tu panorama reúne la ovulación estimada, la ventana fértil y el próximo período, con el nivel de confianza y las advertencias pertinentes.',
      screen: 'today',
      alt: 'Pantalla Hoy de Cecilia con estado fértil, día del ciclo y orientación diaria con datos de ejemplo',
    },
    {
      title: 'Cada día, en contexto.',
      body: 'Explora tu ciclo en un calendario con colores. Los días registrados y previstos se distinguen claramente, y puedes volver a un día anterior para agregar o editar tus observaciones.',
      screen: 'calendar',
      alt: 'Calendario mensual de Cecilia con días de período, días fértiles y ovulación estimada',
    },
    {
      title: 'Sigue tu patrón de temperatura.',
      body: 'Consulta tu temperatura basal durante el ciclo actual, junto con la línea de referencia y el cambio térmico cuando la app los identifica. Elige Celsius o Fahrenheit en Ajustes.',
      screen: 'chart',
      alt: 'Gráfica de temperatura de Cecilia con datos de ejemplo, línea de referencia y cambio térmico',
    },
  ],
  observations:
    'Reúne tus observaciones: fechas del período, temperatura basal, moco cervical, resultados de pruebas de ovulación, relaciones sexuales y notas.',
  methods: {
    title: 'Dos métodos. Un lugar para entenderlos.',
    body: 'Elige tu método en Ajustes. Cecilia explica el estado diario e indica cuándo necesita más información.',
    calendar: 'Método del calendario',
    calendarBody:
      'Usa tu historial y la duración habitual del ciclo para estimar la ventana fértil. Las predicciones son estimaciones, y la variabilidad del ciclo importa.',
    symptothermal: 'Método sintotérmico',
    symptothermalBody:
      'Combina las fechas del ciclo con el moco cervical y la temperatura. Espera a que se cumplan las reglas del cambio térmico y del pico de moco antes de confirmar la fase posterior a la ovulación.',
  },
  beta: {
    title: 'Conoce a Cecilia.',
    body: 'La beta abierta para iOS está lista para explorar. Únete a través de Apple TestFlight y comienza con tu propio ciclo.',
    steps: [
      'Instala Apple TestFlight en tu dispositivo iOS.',
      'Abre la invitación a la beta e instala Cecilia.',
      'Inicia sesión, configura tu perfil y empieza a registrar tus signos.',
    ],
    note: 'Esta es una versión beta. Las funciones y la experiencia pueden cambiar a medida que se desarrolla la app.',
  },
  faqTitle: 'Algunas cosas que debes saber.',
  faq: [
    {
      question: '¿Para qué sirve Cecilia?',
      answer:
        'Cecilia te ayuda a registrar tu ciclo menstrual y tus signos corporales y a entender un pronóstico diario de fertilidad. Reúne orientación diaria, un calendario y gráficas de temperatura en una sola app.',
    },
    {
      question: '¿Necesito registrar mi temperatura?',
      answer:
        'El método del calendario usa las fechas del ciclo. El método sintotérmico también usa la temperatura y el moco cervical para confirmar la fase posterior a la ovulación. Puedes elegir y cambiar tu método en Ajustes.',
    },
    {
      question: '¿Puedo cambiar mis registros y el idioma?',
      answer:
        'Sí. Puedes agregar, editar o borrar las observaciones de hoy y de días pasados. Cecilia está disponible en inglés, español y portugués de Brasil, y puedes cambiar el idioma y la unidad de temperatura en Ajustes.',
    },
    {
      question: '¿Cecilia garantiza la anticoncepción?',
      answer:
        'No. Los métodos de conocimiento de la fertilidad pueden fallar y los pronósticos dependen de la información disponible. Consulta a un profesional de la salud sobre tu anticoncepción y tu salud.',
    },
  ],
  disclaimerTitle: 'Antes de empezar',
  disclaimer:
    'Cecilia no es una garantía anticonceptiva. Los métodos de conocimiento de la fertilidad pueden fallar; por eso, consulta a un profesional de la salud sobre tu anticoncepción y tu salud.',
  footer: 'Conoce tu ciclo, día a día.',
};
