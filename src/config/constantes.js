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

// Y el que arrastra el destino desde la portada hasta el formulario cuando
// alguien pide una propuesta a medida.
export const PARAMETRO_PROPUESTA = 'destino'

// Cada cuántos segundos pasa sola la portada, como el hero de NUBA.
export const SEGUNDOS_PORTADA = 7

// Cuántos viajes se enseñan en el bloque de plazas que se agotan.
export const CUANTOS_DESTACADOS = 4

// Fotografías. Viven en public/ agrupadas por destino, con los nombres en
// minúscula, sin tildes y sin espacios: una carpeta llamada «NY-WS-LA  » o
// «JAPÓN» obliga a codificar la ruta y falla en algunos servidores.
//
// Las de la costa amalfitana son mías, de la PEC 1; el resto salen de los
// catálogos de viajes de 2026 y se usan solo con fines académicos.
export const FOTOS = {
  // Italia · costa amalfitana
  PORTADA: '/italia-amalfi/positano-atardecer.jpg',
  BARCA: '/italia-amalfi/positano-barca.jpg',
  NOCHE: '/italia-amalfi/positano-noche.jpg',
  PLAYA: '/italia-amalfi/atrani-playa.jpg',
  ITALIA_CALLE: '/italia-amalfi/italia-colores.jpg',
  ITALIA_GASTRO: '/italia-amalfi/italia-gastro.jpg',
  ITALIA_TOSCANA: '/italia-amalfi/italia-toscana.jpg',
  AMALFI_PASEO: '/italia-amalfi/amalfi-paseo.jpg',
  // Libre: es de la PEC 1 y está esperando sitio.
  AMALFI_MAR: '/italia-amalfi/amalfi-mar.jpg',

  // Grecia
  GRECIA: '/grecia/grecia-santorini.jpg',
  GRECIA_ACROPOLIS: '/grecia/atenas-templo.jpg',
  GRECIA_MIKONOS: '/grecia/mykonos-venecia.jpg',
  GRECIA_NAVAGIO: '/grecia/zakynthos-naufragio.jpg',
  GRECIA_CRETA: '/grecia/creta-playa.jpg',
  GRECIA_CARIATIDES: '/grecia/grecia-templo.jpg',
  GRECIA_HERODES: '/grecia/atenas-rom.jpg',
  GRECIA_OIA: '/grecia/santorini-cup.jpg',
  GRECIA_MOLINOS: '/grecia/grecia-molinos.jpg',
  GRECIA_CHANIA: '/grecia/grecia-atardecer.jpg',
  GRECIA_KERI: '/grecia/zakynthos-beach.jpg',

  // Turquía
  TURQUIA: '/turquia/capadoccia.jpg',
  TURQUIA_ESTAMBUL: '/turquia/mezquita-azul.jpg',
  TURQUIA_GOREME: '/turquia/casa-cuevas.jpg',
  TURQUIA_PAMUKKALE: '/turquia/pamukkale.jpg',
  TURQUIA_EFESO: '/turquia/esmirna-arqu.jpg',
  TURQUIA_GLOBOS: '/turquia/capadoccia.jpg',
  TURQUIA_SANTASOFIA: '/turquia/estambul-mezq.jpg',
  TURQUIA_CUERNO: '/turquia/estambul-noche.jpg',
  TURQUIA_DONCELLA: '/turquia/estambul-torre.jpg',
  TURQUIA_HIERAPOLIS: '/turquia/arqu-turquia.jpg',
  TURQUIA_TERRAZAS: '/turquia/pamukkale-algodon.jpg',

  // Estados Unidos
  ESTADOSUNIDOS: '/nueva-york/brooklyn.jpg',
  EEUU_DUMBO: '/nueva-york/dumbo.jpg',
  EEUU_CENTRAL: '/nueva-york/parque-central.jpg',
  EEUU_CONEY: '/nueva-york/coney-island.jpg',
  EEUU_ANGELES: '/nueva-york/losangeles.jpg',
  EEUU_MANHATTAN: '/nueva-york/newyork.jpg',
  EEUU_TIMES: '/nueva-york/times-square.jpg',
  EEUU_LIBERTAD: '/nueva-york/statue.jpg',
  EEUU_TAXI: '/nueva-york/newyork-street.jpg',
  EEUU_VENICE: '/nueva-york/surbeach.jpg',

  // Namibia
  NAMIBIA: '/namibia/namibia-elefantes.jpg',
  NAMIBIA_DESIERTO: '/namibia/namibia-desert.jpg',
  NAMIBIA_FLORA: '/namibia/namibia-flora.jpg',
  NAMIBIA_SAFARI: '/namibia/namibia-safari.jpg',
  NAMIBIA_ELEFANTES: '/namibia/namibia-elefantes.jpg',

  // Jordania
  JORDANIA: '/jordania/petra-patrimonio.jpg',
  JORDANIA_TESORO: '/jordania/petra-jordania.jpg',
  JORDANIA_MONASTERIO: '/jordania/jordania-petra2.jpg',
  JORDANIA_WADIRUM: '/jordania/jordania-desert.jpg',
  JORDANIA_AMAN: '/jordania/amman-jordania.jpg',
  JORDANIA_ZOCO: '/jordania/jordania-gastro.jpg',

  // Japón
  JAPON: '/japon/japon-kioto.jpg',
  JAPON_INARI: '/japon/kioto-arqui.jpg',
  JAPON_MIYAJIMA: '/japon/hosima-japon.jpg',
  JAPON_NARA: '/japon/japon-nara.jpg',
  JAPON_NOCHE: '/japon/japon-lights.jpg',
  JAPON_CEREZOS: '/japon/japon-osaka.jpg',
  JAPON_SANTUARIO: '/japon/japon-red.jpg',
  JAPON_SENSOJI: '/japon/kioto-flora.jpg',

  // India
  INDIA: '/india/india-palacio.jpg',
  INDIA_HAWA: '/india/india-arqu.jpg',
  INDIA_JAIPUR: '/india/india-mov.jpg',
  INDIA_GANESHA: '/india/india-cultura.jpg',
  INDIA_AMRITSAR: '/india/india-watter.jpg',
  INDIA_CALLE: '/india/india-tuktuk.jpg',

  // Costa Rica
  COSTARICA: '/costa-rica/costarica-tucan.jpg',
  COSTARICA_PICO: '/costa-rica/costarica-pico.jpg',
  COSTARICA_ARENAL: '/costa-rica/costarica-arenal.jpg',
  COSTARICA_COSTA: '/costa-rica/costarica-beach.jpg',
  COSTARICA_PUENTES: '/costa-rica/costarica-selva.jpg',
  COSTARICA_TORTUGA: '/costa-rica/costarica-tort.jpg',
  COSTARICA_CASCADA: '/costa-rica/costarica-casc.jpg',
  COSTARICA_CARIBE: '/costa-rica/costarica-agua.jpg',

  // Islandia
  ISLANDIA: '/islandia/islandia-auroras.jpg',
  ISLANDIA_SELJALANDSFOSS: '/islandia/islandia.jpg',
  ISLANDIA_DETRAS: '/islandia/islandia-natura.jpg',
  ISLANDIA_GLACIAR: '/islandia/islandia-glaciar.jpg',
  ISLANDIA_PLAYA: '/islandia/islandia-playa.jpg',

  // Polinesia Francesa
  POLINESIA: '/polinesia/polinesia-borabora.jpg',
  POLINESIA_BUNGALOS: '/polinesia/polinesia-bungalos.jpg',
  POLINESIA_TIBURONES: '/polinesia/polinesia-tiburones.jpg',
  POLINESIA_GRUTA: '/polinesia/polinesia-gruta.jpg',
  POLINESIA_ARRECIFE: '/polinesia/polinesia-arrecife.jpg',
  POLINESIA_MOTUS: '/polinesia/polinesia-motus.jpg',
  POLINESIA_PLAYA: '/polinesia/polinesia-playa.jpg',
  POLINESIA_ATARDECER: '/polinesia/polinesia-atardecer.jpg',
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
    accion: 'Ver el viaje a Amalfi',
    // `destinoId` señala un destino: la portada busca qué viaje hay allí y
    // enlaza con SU PÁGINA, no con el catálogo. Si ese destino se quedara sin
    // viajes, el botón cae en el catálogo entero, que siempre existe.
    destinoId: 'italia',
  },
  {
    id: 'namibia',
    imagen: FOTOS.NAMIBIA,
    alt: 'Arco de piedra en el desierto de Namibia',
    etiqueta: 'Namibia · once días de Etosha al Kalahari',
    titulo: 'Donde el desierto llega hasta el mar',
    texto: 'Dunas de trescientos metros, y once días en los que casi no se ve un coche.',
    accion: 'Solicitar propuesta a Namibia',
    destinoId: 'namibia',
  },
  {
    id: 'india',
    imagen: FOTOS.INDIA,
    alt: 'El Taj Mahal visto desde el arco de la Gran Puerta de Agra',
    etiqueta: 'Nuevo · Norte de la India',
    titulo: 'Agra a las seis de la mañana',
    texto: 'Entramos antes que nadie, con el mármol todavía frío y sin una sola cola.',
    accion: 'Descubrir la India',
    destinoId: 'india',
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
    'Nací en 1994 y no recuerdo un momento en el que no quisiera saber cómo era el resto del mundo. Vagamundo sale de ahí: con los años, esa curiosidad no ha dejado de crecer.',
    'Cuando preparo un viaje ya estoy viajando. Me paso semanas leyendo sobre un sitio, entre blogs, foros, artículos, folletos viejos, mapas y fotografías de gente que estuvo allí hace años, hasta que puedo cerrar los ojos y recorrerlo. Esa parte me gusta tanto como llegar, y es la que quería compartir con alguien.',
  ],
  bloques: [
    {
      id: 'mirar',
      titulo: 'Dos cosas que me cambiaron la manera de mirar',
      texto:
        'Un amanecer en el Serengeti con la migración delante. Y perderme por las calles de Stone Town, en Zanzíbar. Dos sitios del mismo país que no se parecen en nada y que me enseñaron lo mismo: viajar no es llegar a un destino, es descubrir lo que guarda dentro.',
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
  ['Positano', 'Santorini', 'Amalfi', 'Capri', 'Estambul', 'Reikiavik'],
  ['Capadocia', 'Petra', 'Wadi Rum', 'Etosha', 'Sossusvlei', 'Jaipur'],
  ['Kioto', 'Bora Bora', 'Tokio', 'Benarés', 'Tortuguero', 'Manhattan'],
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
    lugar: 'Cícladas · septiembre',
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
  {
    id: 'alberto',
    estrellas: 5,
    cita: 'Nos avisaron a las once de la noche de que había aurora y salimos en pijama. Eso no lo organiza una agencia cualquiera.',
    firma: 'Alberto y Sofía',
    lugar: 'Islandia · febrero',
  },
  {
    id: 'marina',
    estrellas: 5,
    cita: 'Íbamos con dos niños y nadie nos miró mal en ningún momento. El guía se los ganó el primer día.',
    firma: 'Marina P.',
    lugar: 'Costa Rica · julio',
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
      'Para casi todos, no: se anda bastante, pero a ritmo de conversación y con paradas. Los que piden algo más, como Corcovado, el Siq de Petra en un día completo o subir a la duna antes del amanecer, llevan un aviso claro en la ficha con los kilómetros y el desnivel. Si tenéis dudas, preguntad antes de reservar y os lo decimos sin adornos.',
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
// italiana es peor que no decir nada. Una aérea de atolón no compromete.
export const IMAGEN_POR_DEFECTO = FOTOS.POLINESIA_MOTUS
