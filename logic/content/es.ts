import type { ProductContent } from '../../types/site';

export const es: ProductContent = {
  language: 'es',
  title: 'Cecilia — Una app para mujeres. Tu ciclo. Tus planes.',
  description:
    'Para mujeres que quieren concebir y mujeres que buscan planificación familiar. Registra tus señales, la ventana fértil estimada y tu ciclo. Conoce a Cecilia en tu navegador.',
  skip: 'Ir al contenido',
  nav: {
    features: 'La app',
    methods: 'Los métodos',
    beta: 'Participa en la prueba abierta',
    language: 'Elige el idioma',
  },
  hero: {
    first: 'Tu ciclo.',
    second: 'Tus planes.',
    positioning: 'Una app para mujeres.',
    body: 'Para mujeres que quieren concebir y mujeres que buscan planificación familiar.',
    action: 'Abrir la app web',
    note: 'Úsala en el navegador, sin instalar. Pruebas en iOS próximamente.',
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
    body: 'Un espacio para que las mujeres conozcan mejor su ciclo. Registra lo que notas, observa tus patrones y consulta una visión diaria basada en tu historial y las señales que registras.',
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
    title: 'Participa en la prueba abierta de Cecilia.',
    body: 'Participa en la prueba abierta desde tu navegador o instala la versión de prueba para Android.',
    webTitle: 'En tu navegador',
    webBody: 'Abre Cecilia ahora, sin descargar ni instalar una aplicación.',
    androidTitle: 'Android',
    androidBody:
      'Instala la versión de prueba a través de Firebase App Distribution. Abre la invitación con tu cuenta de Google y sigue las instrucciones en tu celular.',
    androidAction: 'Probar en Android',
    setup:
      'Al iniciar sesión, elige tu objetivo, configura tu perfil y empieza a registrar tus señales.',
    ios: 'Las pruebas en iOS estarán disponibles pronto. Mientras tanto, usa la app web en tu iPhone o iPad.',
    note: 'Esta es una versión de prueba. Las funciones y la experiencia pueden cambiar a medida que se desarrolla la app.',
  },
  faqTitle: 'Algunas cosas que debes saber.',
  faq: [
    {
      question: '¿Para quién es Cecilia?',
      answer:
        'Cecilia apoya el conocimiento del ciclo para mujeres que quieren concebir y mujeres que buscan planificación familiar con métodos de percepción de la fertilidad. Reúne señales, predicciones estimadas, calendario y temperaturas. Los datos insuficientes o la ovulación no confirmada indican incertidumbre, no el mejor momento para concebir.',
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
  footer: 'Para mujeres. Para tu ciclo y tus planes.',
};
