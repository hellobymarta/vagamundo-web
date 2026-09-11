// Todas las constantes de configuración viven aquí, en UPPER_SNAKE_CASE.
// Ningún componente escribe una URL, un color ni un texto fijo a mano.

// La URL de la API viene de la variable de entorno VITE_API_URL (.env).
export const API_URL = import.meta.env.VITE_API_URL

// Recurso principal de la API de la PEC 3.
export const RUTA_VIAJES = '/api/travels'

// Categorías del catálogo, para el desplegable del formulario.
export const CATEGORIAS = [
  'Costa',
  'Playa',
  'Islas',
  'Cultural',
  'Ciudad',
  'Naturaleza',
  'Aventura',
  'Desierto',
]

// Nombre del parámetro con el que se filtra el catálogo desde la URL.
export const PARAMETRO_MOTIVACION = 'motivacion'

// Cada cuántos segundos pasa sola la portada, como el hero de NUBA.
export const SEGUNDOS_PORTADA = 7

// Cuántos viajes se enseñan en el bloque de plazas que se agotan.
export const CUANTOS_DESTACADOS = 4

// Fotografías. Las de la costa amalfitana son mías, de la PEC 1;
// las tres últimas salen de los catálogos de viajes de 2026.
export const FOTOS = {
  // Mías, de la PEC 1 (costa amalfitana)
  PORTADA: '/positano-atardecer.jpg',
  BARCA: '/positano-barca.jpg',
  NOCHE: '/positano-noche.jpg',
  PLAYA: '/atrani-playa.jpg',
  // Reservadas para la ficha de Italia, que todavía está por escribir.
  AMALFI_PASEO: '/amalfi-paseo.jpg',
  AMALFI_MAR: '/amalfi-mar.jpg',

  // De los catálogos de viajes de 2026
  APULIA: '/apulia-vieste.jpg',
  BRASIL: '/brasil-lencois.jpg',
  NAMIBIA: '/namibia-elefantes.jpg',
  NAMIBIA_ARCO: '/namibia-arco.jpg',
  NAMIBIA_DESIERTO: '/namibia-desert.jpg',
  NAMIBIA_FLORA: '/namibia-flora.jpg',
  NAMIBIA_SAFARI: '/namibia-safari.jpg',
  JAPON: '/japon-kioto.jpg',
  JAPON_INARI: '/kioto-arqui.jpg',
  JAPON_MIYAJIMA: '/hosima-japon.jpg',
  JAPON_NARA: '/japon-nara.jpg',
  JAPON_NOCHE: '/japon-lights.jpg',
  JAPON_CEREZOS: '/japon-osaka.jpg',
  JAPON_SANTUARIO: '/japon-red.jpg',
  JAPON_SENSOJI: '/kioto-flora.jpg',
  INDIA: '/india-palacio.jpg',
  INDIA_HAWA: '/india-arqu.jpg',
  INDIA_JAIPUR: '/india-mov.jpg',
  INDIA_GANESHA: '/india-cultura.jpg',
  INDIA_AMRITSAR: '/india-watter.jpg',
  INDIA_CALLE: '/india-tuktuk.jpg',
  COSTARICA: '/costarica-tucan.jpg',
  COSTARICA_PICO: '/costarica-pico.jpg',
  COSTARICA_ARENAL: '/costarica-arenal.jpg',
  COSTARICA_CARIBE: '/costarica-costa.jpg',
  SALAR: '/salar-atardecer.jpg',
  GRECIA: '/grecia-mikonos.jpg',
  JORDANIA: '/petra-patrimonio.jpg',
  JORDANIA_TESORO: '/petra-jordania.jpg',
  JORDANIA_WADIRUM: '/jordania-desert.jpg',
  JORDANIA_AMAN: '/amman-jordania.jpg',
  JORDANIA_ZOCO: '/jordania-gastro.jpg',
  JORDANIA_BANDERA: '/jordania-bandera.jpg',
  ISLANDIA: '/islandia-auroras.jpg',
  ISLANDIA_SELJALANDSFOSS: '/islandia.jpg',
  ISLANDIA_DETRAS: '/islandia-natura.jpg',
  ISLANDIA_GLACIAR: '/islandia-glaciar.jpg',
  ISLANDIA_PLAYA: '/islandia-playa.jpg',
  POLINESIA: '/polinesia-borabora.jpg',
  POLINESIA_BUNGALOS: '/polinesia-bungalos.jpg',
  POLINESIA_TIBURONES: '/polinesia-tiburones.jpg',
  POLINESIA_GRUTA: '/polinesia-gruta.jpg',
  POLINESIA_ARRECIFE: '/polinesia-arrecife.jpg',
  POLINESIA_MOTUS: '/polinesia-motus.jpg',
  POLINESIA_PLAYA: '/polinesia-playa.jpg',
  POLINESIA_ATARDECER: '/polinesia-atardecer.jpg',
}

// Las tres campañas que rotan en la portada, como el hero de NUBA.
export const PORTADAS = [
  {
    id: 'amalfi',
    imagen: FOTOS.PORTADA,
    alt: 'Positano al atardecer, con las casas encendidas sobre el mar',
    etiqueta: 'Costa amalfitana · siete días en mayo',
    titulo: 'Once años volviendo al mismo trozo de costa',
    texto: 'Positano cuando las escaleras están vacías y los limones pesan en el árbol.',
    accion: 'Ver el viaje',
    enlace: '/#catalogo',
  },
  {
    id: 'namibia',
    imagen: FOTOS.NAMIBIA,
    alt: 'Arco de piedra en el desierto de Namibia',
    etiqueta: 'Namibia · once días de Etosha al Kalahari',
    titulo: 'Donde el desierto llega hasta el mar',
    texto: 'Dunas de trescientos metros, y once días en los que casi no se ve un coche.',
    accion: 'Solicitar propuesta',
    enlace: '/#catalogo',
  },
  {
    id: 'india',
    imagen: FOTOS.INDIA,
    alt: 'El Taj Mahal visto desde el arco de la Gran Puerta de Agra',
    etiqueta: 'Nuevo · Norte de la India',
    titulo: 'Agra a las seis de la mañana',
    texto: 'Entramos antes que nadie, con el mármol todavía frío y sin una sola cola.',
    accion: 'Descubrir',
    enlace: '/#catalogo',
  },
  {
    id: 'medida',
    imagen: FOTOS.ISLANDIA,
    alt: 'Una aurora boreal sobre un 4x4 parado en la nieve, en Islandia',
    // La foto ya es nocturna: con el velo fuerte se queda en negro.
    velo: 'suave',
    etiqueta: 'Viajes a medida',
    titulo: 'O cuéntanos el que llevas años imaginando',
    texto: 'Lo montamos entero para vosotros con las mismas ganas.',
    accion: 'Empezar',
    enlace: '/nuevo',
  },
]

// De dónde sale Vagamundo, contado en primera persona. Dos párrafos que se
// ven siempre y cuatro bloques que se despliegan. El componente Marca decide
// qué enseña y qué esconde; aquí solo está el texto.
export const MANIFIESTO = {
  entrada: [
    'Nací en 1994 y no recuerdo un momento en el que no quisiera saber cómo era el resto del mundo. Vagamundo sale de ahí: de una curiosidad que, en vez de pasárseme con los años, se me ha ido haciendo más grande.',
    'Cuando preparo un viaje ya estoy viajando. Me paso semanas leyendo sobre un sitio —blogs, foros, artículos, folletos viejos, mapas, fotografías de gente que estuvo allí hace años— hasta que puedo cerrar los ojos y recorrerlo. Esa parte me gusta tanto como llegar, y es la que quería compartir con alguien.',
  ],
  bloques: [
    {
      id: 'mirar',
      titulo: 'Dos cosas que me cambiaron la manera de mirar',
      texto:
        'La primera, un amanecer en el Serengeti con la migración delante: un millón y medio de ñus y doscientas cincuenta mil cebras haciendo los ochocientos kilómetros que repiten cada año entre Tanzania y el Masai Mara keniano. La segunda, casi mil kilómetros al este y ya en el Índico: perderse en Stone Town, la ciudad vieja de Zanzíbar, la isla de especias que también es Tanzania y donde en cinco calles se mezclan África, Arabia y la India. El mismo país, y no se parecen en nada. Desde entonces no me interesa tanto ir a un país como entender qué guarda dentro.',
    },
    {
      id: 'itinerario',
      titulo: 'De dónde sale un itinerario',
      texto:
        'Nunca empiezo eligiendo un destino y rellenando luego los días. Empiezo al revés: qué tiene ese sitio que merezca doce horas de avión. Meses leyendo, descartando y preguntando a gente de allí, y después un viaje entero para comprobarlo en la misma época del año en que lo vamos a ofrecer. Lo que no aguanta esa prueba se cae, y si se cae demasiado, el destino espera un año más.',
    },
    {
      id: 'grupo',
      titulo: 'De cinco a ocho personas, ni una más',
      texto:
        'Cinco para que el viaje salga, ocho como tope. Ni una más, aunque haya lista de espera: en cuanto sois nueve hace falta un autocar, un micrófono y un horario, y se acabó lo de comer donde come la gente del pueblo o cambiar el plan a media mañana porque ha salido el sol. El grupo pequeño no es un detalle del folleto, es la mitad de lo que estáis comprando.',
    },
    {
      id: 'trato',
      titulo: 'Con quién habláis, de principio a fin',
      texto:
        'Con la misma persona siempre: quien escribe el itinerario es quien contesta los correos, quien coge el teléfono cuando tenéis dudas antes de salir y quien está localizable mientras estáis fuera. Sin centralita, sin números de expediente y sin comerciales por medio. Y al volver preguntamos qué tal fue, porque de esas respuestas sale el viaje del año siguiente.',
    },
  ],
}

// Tres días de tres viajes distintos, para la sección «Viajes Vagamundo».
// Son ejemplos concretos a propósito: explicar cómo trabajamos con una frase
// general no dice nada, y con una jornada de verdad se entiende sola.
export const MANERAS = [
  {
    id: 'costa',
    foto: FOTOS.BARCA,
    fotoAlt: 'Barca de madera fondeada frente a Positano',
    lugar: 'Costa amalfitana · día 6',
    titulo: 'El mar se ve mejor desde una barca de madera',
    texto:
      'Salvatore sale a las siete, antes de que se levante el viento, y para donde no llega el ferry. Ese día no hay nada más apuntado: el que quiera quedarse durmiendo, se queda.',
  },
  {
    id: 'fauna',
    foto: FOTOS.NAMIBIA_SAFARI,
    fotoAlt: 'Cebras cruzando una pista de grava bajo un cielo de tormenta',
    lugar: 'Namibia · día 4',
    titulo: 'Hora y media parados mirando una manada',
    texto:
      'En Etosha el horario lo pone la fauna. Como vamos seis o siete en un 4x4 y no treinta en un autocar, quedarse es una decisión del grupo y no un problema de logística.',
  },
  {
    id: 'ciudad',
    foto: FOTOS.JAPON_NARA,
    fotoAlt: 'La pagoda de cinco pisos de Nara entre los árboles',
    lugar: 'Japón · día 9',
    titulo: 'A Nara se llega antes de que abran los autobuses',
    texto:
      'Primer tren, desayuno en la estación y la pagoda reflejada en el estanque con el parque todavía vacío. A las once, cuando llega todo el mundo, nosotras ya estamos comiendo en otro sitio.',
  },
]

// Un color por sección. Cada tono trae su fondo, su acento y su borde.
export const TONOS = {
  CREMA: { fondo: 'bg-crema', acento: 'text-suave', borde: 'border-borde' },
  HUESO: { fondo: 'bg-crema-hueso', acento: 'text-suave', borde: 'border-borde' },
  ROSA: { fondo: 'bg-rosa', acento: 'text-rosa-acento', borde: 'border-rosa-acento/25' },
  TERRACOTA: {
    fondo: 'bg-terracota',
    acento: 'text-terracota-acento',
    borde: 'border-terracota-acento/25',
  },
  AMARILLO: {
    fondo: 'bg-amarillo',
    acento: 'text-amarillo-acento',
    borde: 'border-amarillo-acento/25',
  },
  OLIVA: { fondo: 'bg-oliva', acento: 'text-oliva-acento', borde: 'border-oliva-acento/25' },
}

// Las tres filas de la marquesina. Nombres que se reconocen de un vistazo:
// pasa deprisa y en letra enorme, así que no es el sitio para los matices.
export const FILAS_MARQUESINA = [
  ['Positano', 'Santorini', 'Amalfi', 'Sicilia', 'Estambul', 'Reikiavik'],
  ['Marrakech', 'Petra', 'Wadi Rum', 'Etosha', 'Fez', 'Namibia'],
  ['Kioto', 'Bora Bora', 'Tokio', 'Río de Janeiro', 'Hanói', 'Sídney'],
]



// Los tres pasos del viaje a medida. El «dato» es la letra pequeña de cada
// paso: lo que de verdad tranquiliza a quien está decidiendo.
export const PASOS = [
  {
    numero: '01',
    titulo: 'Media hora al teléfono',
    texto:
      'Cuántos sois, cuántos días tenéis y qué queréis que os pase. Nada de formularios de veinte campos ni de cuestionarios de perfil.',
    dato: 'Sin compromiso',
  },
  {
    numero: '02',
    titulo: 'Un itinerario con nombres propios',
    texto:
      'Hoteles con dirección, guías con nombre y horarios de barco reales. Se reescribe tantas veces como haga falta hasta que os lo imaginéis.',
    dato: 'En cinco días hábiles',
  },
  {
    numero: '03',
    titulo: 'Y allí, alguien de allí',
    texto:
      'Un guía del sitio solo para vuestro grupo, que conoce a la gente del puerto y del museo. Mientras estáis fuera tenéis además un teléfono directo con nosotras, para lo que surja.',
    dato: 'Asistencia durante todo el viaje',
  },
]

// Cuatro testimonios. Las estrellas son un número del 1 al 5 y el componente
// las dibuja: así la valoración es un dato y no un adorno escrito a mano.
export const TESTIMONIOS = [
  {
    id: 'elena',
    estrellas: 5,
    cita: 'Volvimos con la sensación de haber vivido allí una temporada, no de haber estado de paso.',
    firma: 'Elena y Marc',
    lugar: 'Costa amalfitana · mayo',
  },
  {
    id: 'nuria',
    estrellas: 5,
    cita: 'Cambiaron el itinerario a mitad de viaje porque había mar de fondo. Acertaron.',
    firma: 'Nuria D.',
    lugar: 'Apulia · septiembre',
  },
  {
    id: 'javier',
    estrellas: 5,
    cita: 'Éramos seis y un guía. En Etosha paramos hora y media a mirar una manada porque nos apetecía, y nadie protestó.',
    firma: 'Javier R.',
    lugar: 'Namibia · julio',
  },
  {
    id: 'carmen',
    estrellas: 4,
    cita: 'Fui sola y no me sentí sola ni un día. Tampoco tuve que pagar el suplemento de siempre.',
    firma: 'Carmen L.',
    lugar: 'Japón · abril',
  },
]

// Las preguntas que de verdad se hacen antes de reservar, agrupadas para
// que el bloque se pueda leer por partes y no como un muro. Las respuestas
// están escritas como se contestarían por teléfono, no como un contrato.
export const PREGUNTAS = [
  {
    id: 'incluido',
    grupo: 'El viaje',
    pregunta: '¿Qué incluye el precio?',
    respuesta:
      'El alojamiento con desayuno, todos los traslados del itinerario, las entradas de lo que aparece en el programa y el guía, que es la misma persona de principio a fin. También las comidas que van señaladas día a día, que suelen ser la mitad.',
  },
  {
    id: 'no-incluido',
    grupo: 'El viaje',
    pregunta: '¿Y qué no está incluido?',
    respuesta:
      'Los vuelos, las comidas libres, las propinas y lo que os apetezca hacer por vuestra cuenta en los huecos. Lo decimos desde el primer correo y va con una cifra aproximada al lado, para que nadie eche cuentas al llegar.',
  },
  {
    id: 'grupos',
    grupo: 'El viaje',
    pregunta: '¿Cómo funcionan los grupos?',
    respuesta:
      'De cinco a ocho viajeros y un guía. Si a quince días de la salida no llegamos a cinco, os avisamos y elegís: cambiar de fecha o recuperar todo el dinero. Nunca juntamos dos grupos para llenar.',
  },
  {
    id: 'fisico',
    grupo: 'El viaje',
    pregunta: '¿Hay que estar en forma?',
    respuesta:
      'Para casi todos, no: se anda bastante, pero a ritmo de conversación y con paradas. Los que piden algo más —Corcovado, el Siq de Petra en un día completo, subir a la duna antes del amanecer— llevan un aviso claro en la ficha con los kilómetros y el desnivel. Si tenéis dudas, preguntad antes de reservar y os lo decimos sin adornos.',
  },
  {
    id: 'seguro',
    grupo: 'Papeleo',
    pregunta: '¿Necesito seguro de viaje?',
    respuesta:
      'Va incluido uno básico de asistencia y de cancelación por causas justificadas. Si queréis cubrir cancelación por cualquier motivo, equipaje o material caro, os pasamos la ampliación antes de pagar. No os la vamos a colar en la factura sin decíroslo.',
  },
  {
    id: 'medico',
    grupo: 'Papeleo',
    pregunta: '¿Y seguro médico?',
    respuesta:
      'La asistencia médica en viaje está dentro del seguro incluido, con su teléfono de urgencias en varios idiomas. En Europa conviene llevar además la Tarjeta Sanitaria Europea, que es gratuita. Para los destinos que piden alguna vacuna o profilaxis os lo decimos con meses de margen, porque algunas llevan su tiempo.',
  },
  {
    id: 'documentacion',
    grupo: 'Papeleo',
    pregunta: '¿Qué documentación necesito?',
    respuesta:
      'Depende del destino, y os mandamos la lista concreta al reservar. La regla que sirve casi siempre: pasaporte con seis meses de validez por delante. India, Jordania y algún otro piden visado, y lo tramitamos con vosotros en vez de mandaros a una web.',
  },
  {
    id: 'cancelar',
    grupo: 'Papeleo',
    pregunta: '¿Qué pasa si tengo que cancelar?',
    respuesta:
      'Hasta sesenta días antes se devuelve todo menos la señal. Entre sesenta y treinta, la mitad. A partir de ahí depende de lo que ya esté pagado a las casas, y os enseñamos el desglose real, no un porcentaje inventado. Si la causa está cubierta por el seguro, lo gestionamos nosotras.',
  },
]

// Un viaje recién empezado: de aquí parte el formulario de creación.
export const VIAJE_VACIO = {
  nombre: '',
  destino: '',
  descripcion: '',
  precio: '',
  duracionDias: '',
  itinerario: '',
  imagen: '',
  categoria: 'Costa',
  disponible: true,
}

// Textos que se repiten en varias pantallas.
export const MENSAJES = {
  CARGANDO: 'Preparando el catálogo…',
  SIN_VIAJES: 'Todavía no hay viajes en el catálogo. Añade el primero.',
  SIN_RESULTADOS: 'Ningún viaje de esta categoría, por ahora.',
  ERROR_GENERICO: 'No hemos podido hablar con la API. Inténtalo de nuevo.',
  CREADO: 'Viaje añadido al catálogo.',
  ACTUALIZADO: 'Viaje actualizado.',
  ELIMINADO: 'Viaje eliminado del catálogo.',
}

// Imagen de reserva para los viajes que no traen foto ni destino conocido.
// A propósito no es de Amalfi: ilustrar un viaje a Kioto con la costa
// italiana es peor que no decir nada.
export const IMAGEN_POR_DEFECTO = FOTOS.SALAR
