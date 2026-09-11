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

// Cuántos viajes se enseñan en el bloque de destacados.
export const CUANTOS_DESTACADOS = 3

// Fotografías. Las de la costa amalfitana son mías, de la PEC 1;
// las tres últimas salen de los catálogos de viajes de 2026.
export const FOTOS = {
  // Mías, de la PEC 1 (costa amalfitana)
  PORTADA: '/positano-atardecer.jpg',
  MANIFIESTO: '/amalfi-paseo.jpg',
  BARCA: '/positano-barca.jpg',
  NOCHE: '/positano-noche.jpg',
  PLAYA: '/atrani-playa.jpg',
  MAR: '/amalfi-mar.jpg',

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
  INDIA_TAJ: '/india-taj.jpg',
  UZBEKISTAN: '/uzbekistan-registan.jpg',
  GUATEMALA: '/guatemala-tikal.jpg',
  COSTARICA: '/costarica-tucan.jpg',
  COSTARICA_PICO: '/costarica-pico.jpg',
  COSTARICA_ARENAL: '/costarica-arenal.jpg',
  COSTARICA_CARIBE: '/costarica-costa.jpg',
  SALAR: '/salar-atardecer.jpg',
  AMAZONAS: '/amazonas-aereo.jpg',
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
    texto: 'Lo montamos entero para vosotros, con las mismas casas y los mismos guías.',
    accion: 'Empezar',
    enlace: '/nuevo',
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

// Las tres filas de la marquesina. Son sitios donde hemos estado o a los que
// vamos: la lista fija de Utópica, con nuestros nombres.
export const FILAS_MARQUESINA = [
  ['Positano', 'Amalfi', 'Ravello', 'Atrani', 'Apulia', 'Matera', 'Sicilia'],
  ['Namibia', 'Etosha', 'Sossusvlei', 'Kalahari', 'Botsuana', 'Zanzíbar'],
  ['Jericoacoara', 'Lençóis', 'Bahía', 'Patagonia', 'Atacama', 'Islandia'],
]

// Los pies de la rejilla de motivaciones, al modo de «Imagina tu viaje» de
// Utópica. La rejilla NO se construye con esta lista: se construye con las
// categorías que existen en el catálogo, así nunca sale una baldosa a cero
// ni falta una categoría nueva. Esto solo pone la frase de cada una.
export const PIES_MOTIVACION = {
  Costa: 'Pueblos colgados sobre el mar',
  Playa: 'Arena, y nada más que hacer',
  Islas: 'Llegar en barco y quedarse',
  Cultural: 'Piedra, mercado y sobremesa',
  Ciudad: 'Barrios, no monumentos',
  Naturaleza: 'Fauna, agua y silencio',
  Aventura: 'Se madruga y se llega lejos',
  Desierto: 'Dunas y noches sin luz',
  Montaña: 'Andar sin mirar el reloj',
}

// La que se usa si aparece una categoría que no está en la tabla.
export const PIE_MOTIVACION_POR_DEFECTO = 'Otra manera de mirar el mapa'


// Los tres pasos de «Tailor-made journeys» de Wilderness, a nuestra manera.
export const PASOS = [
  {
    numero: '01',
    titulo: 'Media hora al teléfono',
    texto:
      'Cuántos sois, cuántos días tenéis y qué queréis que os pase. No hay formulario de veinte campos.',
  },
  {
    numero: '02',
    titulo: 'Un itinerario con nombres',
    texto:
      'Hoteles con dirección, guías con nombre y horarios de barco de verdad. Se cambia tantas veces como haga falta.',
  },
  {
    numero: '03',
    titulo: 'Y allí, alguien de allí',
    texto:
      'Un guía por grupo, del sitio, que conoce al del puerto. Y un teléfono que se coge también en agosto.',
  },
]

// Dos testimonios, como el «Don't just take our word for it» de Wilderness.
export const TESTIMONIOS = [
  {
    id: 'elena',
    cita: 'Volvimos con la sensación de haber vivido allí una temporada, no de haber estado de paso.',
    firma: 'Elena y Marc',
    lugar: 'Costa amalfitana · mayo',
  },
  {
    id: 'nuria',
    cita: 'Cambiaron el itinerario a mitad de viaje porque había mar de fondo. Acertaron.',
    firma: 'Nuria D.',
    lugar: 'Apulia · septiembre',
  },
]

// Preguntas frecuentes, al modo del «All you need to know» de Wilderness.
export const PREGUNTAS = [
  {
    id: 'antelacion',
    pregunta: '¿Con cuánta antelación hay que reservar?',
    respuesta:
      'Cuatro meses para mayo y septiembre. Julio y agosto se cierran antes: las casas son pequeñas y no hay manera de estirarlas.',
  },
  {
    id: 'grupo',
    pregunta: '¿Cuánta gente va en cada viaje?',
    respuesta:
      'Ocho viajeros y un guía. Es lo que cabe en una barca y en la mesa de un restaurante sin tener que reservar el local entero.',
  },
  {
    id: 'incluido',
    pregunta: '¿Qué entra en el precio?',
    respuesta:
      'Alojamiento, desayunos, los traslados del itinerario, las entradas y el guía. Los vuelos y las comidas libres van aparte, y se dice desde el principio.',
  },
  {
    id: 'solo',
    pregunta: '¿Se puede ir sola?',
    respuesta:
      'Cuatro de cada diez plazas las ocupa alguien que viaja solo. No cobramos suplemento por habitación individual en los viajes de grupo.',
  },
  {
    id: 'medida',
    pregunta: '¿Podéis montar un viaje a medida?',
    respuesta:
      'Sí, y es la mitad de lo que hacemos: una familia o un grupo de amigos, con las mismas casas y los mismos guías.',
  },
]

// El listado de destinos por continente que NUBA despliega en su menú.
// Los que coinciden con el catálogo se vuelven enlaces; el resto quedan
// apagados, como la lista de "todos los destinos" de su web.
export const CONTINENTES = [
  {
    nombre: 'Europa',
    paises: [
      'Italia',
      'Grecia',
      'Portugal',
      'Croacia',
      'Islandia',
      'Noruega',
      'Turquía',
      'Montenegro',
    ],
  },
  {
    nombre: 'África y Oriente Medio',
    paises: ['Namibia', 'Botsuana', 'Tanzania', 'Kenia', 'Marruecos', 'Egipto', 'Jordania', 'Omán'],
  },
  {
    nombre: 'América',
    paises: ['Brasil', 'Perú', 'Argentina', 'Chile', 'Guatemala', 'Costa Rica', 'México', 'Cuba'],
  },
  {
    nombre: 'Asia y Oceanía',
    paises: [
      'India',
      'Uzbekistán',
      'Japón',
      'Tailandia',
      'Vietnam',
      'Nepal',
      'Indonesia',
      'Nueva Zelanda',
    ],
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
