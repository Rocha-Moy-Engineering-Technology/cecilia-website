import type { ProductContent } from '../../types/site';

export const es: ProductContent = {
  language: 'es',
  title: 'Cecilia — Tu ciclo. Tus planes.',
  description:
    'Para quienes quieren concebir y para quienes buscan planificación familiar. Registra tus señales, la ventana fértil estimada y tu ciclo. Conoce la versión de prueba para iOS.',
  skip: 'Ir al contenido',
  nav: {
    features: 'La app',
    methods: 'Los métodos',
    beta: 'Conoce',
    language: 'Elige el idioma',
  },
  hero: {
    first: 'Tu ciclo.',
    second: 'Tus planes.',
    body: 'Para quienes quieren concebir y para quienes buscan planificación familiar.',
    action: 'Conoce a Cecilia',
    note: 'Para iOS · Primero, instala TestFlight, la app de Apple para probar aplicaciones. Después, vuelve aquí y toca este botón otra vez para instalar Cecilia.',
  },
  example: 'Pantallas de ejemplo · Datos ilustrativos del ciclo',
  goals: {
    title: 'Un ciclo. Dos objetivos.',
    change:
      'Elige tu objetivo al empezar y cámbialo cuando quieras en Ajustes. Las mismas señales y predicciones, con orientación para tus planes.',
    limit:
      'Las predicciones son estimaciones; ningún día garantiza seguridad. Aprende el método con un profesional cualificado. Cecilia no sustituye la anticoncepción ni protege frente a las ITS.',
    source: 'Conoce las precauciones de estos métodos (NHS, en inglés).',
    items: [
      {
        id: 'trying_to_conceive',
        title: 'Quiero quedarme embarazada',
        body: 'Registrar las señales y la ventana fértil estimada para planificar los intentos.',
        alt: 'Pantalla Hoy real de Cecilia con el objetivo Quiero quedarme embarazada y datos ilustrativos.',
      },
      {
        id: 'avoiding_pregnancy',
        title: 'Quiero hacer mi planificación familiar',
        body: 'Apoyar mi planificación familiar con métodos de percepción de la fertilidad.',
        alt: 'Pantalla Hoy real de Cecilia con el objetivo Quiero hacer mi planificación familiar y datos ilustrativos.',
      },
    ],
  },
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
    body: 'Cecilia está en fase de pruebas y puedes participar. Instálala a través de TestFlight y empieza a seguir tu ciclo.',
    steps: [
      'Toca “Conoce a Cecilia” e instala TestFlight si se te solicita.',
      'Después de instalar TestFlight, vuelve a esta página y toca “Conoce a Cecilia” otra vez para instalar Cecilia.',
      'Inicia sesión, elige tu objetivo, configura tu perfil y empieza a registrar tus señales.',
    ],
    note: 'Esta es una versión de prueba. Las funciones y la experiencia pueden cambiar a medida que se desarrolla la app.',
  },
  faqTitle: 'Algunas cosas que debes saber.',
  faq: [
    {
      question: '¿Para qué sirve Cecilia?',
      answer:
        'Cecilia apoya el conocimiento del ciclo para quienes quieren concebir y quienes buscan planificación familiar con métodos de percepción de la fertilidad. Reúne señales, predicciones estimadas, calendario y temperaturas. Los datos insuficientes o la ovulación no confirmada indican incertidumbre, no el mejor momento para concebir.',
    },
    {
      question: '¿Necesito registrar mi temperatura?',
      answer:
        'El método del calendario usa las fechas del ciclo. El método sintotérmico también usa la temperatura y el moco cervical para confirmar la fase posterior a la ovulación. Puedes elegir y cambiar tu método en Ajustes.',
    },
    {
      question: '¿Puedo cambiar mi objetivo, mis registros y el idioma?',
      answer:
        'Sí. Elige tu objetivo al empezar y cámbialo en Ajustes. El cambio adapta la orientación y conserva tus registros, el método y la predicción. También puedes editar los registros y elegir inglés, español o portugués de Brasil.',
    },
    {
      question: '¿Cecilia garantiza la anticoncepción?',
      answer:
        'No. Ningún día garantiza seguridad. Las predicciones dependen de los datos disponibles y pueden fallar; no confirman la ovulación ni garantizan un embarazo. Para evitar un embarazo, aprende tu método con un profesional cualificado. La app no protege frente a las ITS.',
    },
  ],
  disclaimerTitle: 'Antes de empezar',
  disclaimer:
    'Cecilia no es una garantía anticonceptiva. Los métodos de conocimiento de la fertilidad pueden fallar; por eso, consulta a un profesional de la salud sobre tu anticoncepción y tu salud.',
  footer: 'Conoce tu ciclo, día a día.',
};
