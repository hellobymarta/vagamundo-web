// Los destinos, como los plantea NUBA: cada uno es una ficha con su
// continente, su fotografía y su entradilla, y tiene su propia página.
//
// El modelo de la API solo guarda un campo `destino` de texto libre
// («Costa amalfitana, Italia»), así que aquí está la tabla que lo traduce
// a un destino de verdad, igual que hacemos con las siluetas de los mapas.

import { FOTOS } from '@/config/constantes'
import { contienePalabra } from '@/formato'

export const DESTINOS = [
  {
    id: 'italia',
    nombre: 'Italia',
    continente: 'Europa',
    foto: FOTOS.PORTADA,
    fotoAlt: 'Positano al atardecer sobre el mar',
    titular: 'El país al que siempre volvemos',
    entradilla:
      'Empezamos aquí, y aquí seguimos. La costa amalfitana en mayo y el tacón de la bota en septiembre, cuando el sur vuelve a ser de los del sur.',
    pistas: ['italia', 'amalfi', 'amalfitana', 'apulia', 'positano', 'matera', 'bari', 'atrani', 'ravello'],
  },
  {
    id: 'grecia',
    nombre: 'Grecia',
    continente: 'Europa',
    foto: FOTOS.GRECIA,
    fotoAlt: 'Casas blancas sobre las rocas en Mikonos',
    titular: 'Primero las piedras, después el mar',
    entradilla:
      'Micenas, Delfos y Meteora entre semana, con las excavaciones casi vacías, y las Cícladas al final, cuando ya te has ganado el baño.',
    pistas: ['grecia', 'santorini', 'atenas', 'mikonos', 'cicladas', 'creta'],
  },
  {
    id: 'jordania',
    nombre: 'Jordania',
    continente: 'Oriente Medio',
    foto: FOTOS.JORDANIA,
    fotoAlt: 'Arco de roca en el desierto de Wadi Rum',
    titular: 'Un país entero en ocho días',
    entradilla:
      'Cabe en una semana y no se parece a nada: una ciudad romana, otra tallada en la roca, dos noches de desierto y un mar en el que no te hundes.',
    pistas: ['jordania', 'petra', 'wadi rum', 'amman', 'aqaba'],
  },
  {
    id: 'namibia',
    nombre: 'Namibia',
    continente: 'África',
    foto: FOTOS.NAMIBIA,
    fotoAlt: 'Una manada de elefantes alejándose por la llanura de Etosha',
    titular: 'La tierra más antigua de África',
    entradilla:
      'El desierto más antiguo de la Tierra, el país más joven de África y el segundo menos densamente poblado del mundo. Se conduce durante horas sin cruzarse con nadie: no es una incomodidad del viaje, es el privilegio.',

    // La historia del sitio. Las cifras y los nombres salen de tres fuentes:
    //  · el folleto de África y Oriente Medio 2026 de Viajes El Corte Inglés
    //  · la ficha de Namibia de safaris.wildernessdestinations.com
    //  · la ficha de Namibia de nuba.com
    historia: [
      'El Namib es el desierto más antiguo de la Tierra: cincuenta y cinco millones de años. Solo la región de Sossusvlei ocupa ochenta y un mil kilómetros cuadrados de llanuras, salinas y montañas de arena. Namibia, en cambio, es el país más joven de África —independiente desde 1990— y el segundo menos densamente poblado del mundo después de Mongolia: tres millones de habitantes y 3,7 por kilómetro cuadrado.',
      'Aquí la fauna no vive en una reserva vallada, sino en un país entero, y ha tenido que aprender a hacerlo. Los elefantes del desierto recorren hasta setenta kilómetros diarios en busca de agua. Los órix resisten temperaturas muy por encima de lo que tolera casi cualquier otro mamífero. Del rinoceronte negro quedan alrededor de cinco mil ejemplares en el mundo, y Namibia conserva una de las mayores poblaciones en libertad que existen. Casi todos viven en Etosha, uno de los parques más extensos de África: allí están también el guepardo y el impala de cara blanca, y el día completo se recorre en 4x4 abierto, con un guía para ocho personas.',
      'Damaraland es el África antigua en estado puro: montañas volcánicas, un bosque petrificado y la welwitschia mirabilis, la «planta fósil», capaz de vivir milenios. En Twyfelfontein hay grabados en la roca de hasta seis mil años de antigüedad. Y en la costa, la niebla del Atlántico entra en las dunas y deja la Costa de los Esqueletos.',
      'Después está Deadvlei. Las acacias que siguen en pie llevan unos novecientos años muertas, desde que las dunas cortaron el paso del río que las alimentaba, y no se han descompuesto porque no hay humedad suficiente para que la madera se pudra. Detrás, dunas de más de trescientos metros. Se suben antes del amanecer, descalza, y a las nueve ya no se puede pisar la arena.',
    ],

    // Datos de cabecera. La época la recomienda NUBA; el resto, el folleto.
    datos: [
      { etiqueta: 'Capital', valor: 'Windhoek' },
      { etiqueta: 'Cuándo ir', valor: 'De abril a noviembre' },
      { etiqueta: 'Densidad', valor: '3,7 hab/km²' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    // La galería del destino: cada foto con su rótulo y su pie, así el bloque
    // cuenta algo y no es solo decoración.
    galeria: [
      {
        id: 'deadvlei',
        foto: FOTOS.NAMIBIA_DESIERTO,
        alt: 'Acacias secas sobre el barro blanco de Deadvlei, con una duna naranja detrás',
        rotulo: 'Deadvlei',
        pie: 'Acacias muertas hace novecientos años que nunca llegaron a podrirse: no hay humedad. Detrás, dunas de más de trescientos metros.',
      },
      {
        id: 'carretera',
        foto: FOTOS.NAMIBIA_SAFARI,
        alt: 'Cebras cruzando una carretera de grava bajo un cielo de tormenta',
        rotulo: 'La grava',
        pie: 'De Etosha a Twyfelfontein hay 484 kilómetros de pista y seis horas de conducción. La prioridad nunca es tuya.',
      },
      {
        id: 'damaraland',
        foto: FOTOS.NAMIBIA_FLORA,
        alt: 'Dunas rojas con hierba dorada y montañas al fondo, en Damaraland',
        rotulo: 'Damaraland',
        pie: 'Montañas volcánicas, bosque petrificado y la welwitschia, la «planta fósil» que vive milenios. Un guía de la zona y ningún otro vehículo a la vista.',
      },
      {
        id: 'spitzkoppe',
        foto: FOTOS.NAMIBIA_ARCO,
        alt: 'El arco de granito del Spitzkoppe al atardecer',
        rotulo: 'Spitzkoppe',
        pie: 'El antiguo santuario bosquimano y sus pinturas en la roca. Se llega al atardecer, cuando el granito se vuelve naranja y no queda nadie.',
      },
    ],

    pistas: [
      'namibia',
      'etosha',
      'sossusvlei',
      'deadvlei',
      'windhoek',
      'kalahari',
      'damaraland',
      'twyfelfontein',
      'spitzkoppe',
      'swakopmund',
      'namib',
    ],
  },
  {
    id: 'japon',
    nombre: 'Japón',
    continente: 'Asia',
    foto: FOTOS.JAPON,
    fotoAlt: 'La pagoda de Yasaka al atardecer, en el barrio de Higashiyama de Kioto',
    titular: 'El umbral de otro mundo',
    entradilla:
      'Dieciséis días de Kioto a Tokio en tren bala, con una noche en un monasterio budista y otra en un ryokan sobre el río. El equipaje viaja aparte: uno se mueve por Japón con una bolsa de mano.',

    // La historia del sitio. Fuentes:
    //  · el folleto de Asia y Oceanía 2026 de Viajes El Corte Inglés
    //    (programa «Gran Tour de Japón», 16 días)
    //  · la ficha de Japón de nuba.com
    historia: [
      'Un arco torii señala el umbral de un templo: a partir de ahí, el suelo que se pisa es otro. Japón entero funciona igual. Es la armonía difícil entre una tradición milenaria y una modernidad de vanguardia, y esa frontera se cruza varias veces al día sin darse cuenta —del tren bala al tatami, del rascacielos al jardín seco.',
      'Kioto fue la capital durante más de mil años y conserva lo que eso deja: el Pabellón Dorado, el castillo de Nijo, los mil y una estatuas del Sanjusangen-do, el jardín del Tenryu-ji y el bosque de bambú de Arashiyama. En Fushimi Inari hay miles de puertas rojas encadenadas monte arriba; a las seis de la mañana no hay absolutamente nadie, y esa es la única hora en que merece la pena.',
      'El viaje entra después en el Japón que no sale en las guías. Koyasan es una montaña sagrada con un mausoleo, el Okunoin, entre cedros de siglos: se duerme en un shukubo —un templo budista—, se cena vegetariano y se asiste a las oraciones del amanecer si uno quiere. Al día siguiente se camina tres kilómetros de la antigua ruta de peregrinación de Kumano y se duerme en un ryokan a pie de río.',
      'Y al norte, Shirakawa-go y sus casas de tejado de paja, patrimonio de la humanidad; Kanazawa, con el jardín Kenroku-en y la residencia de los samuráis Nomura; el lago Ashi y el monte Fuji desde el teleférico, si el tiempo acompaña. Se termina en Tokio, en el Sensoji de Asakusa, que en primavera se llena de cerezos.',
    ],

    // Datos de cabecera. La época la recomienda NUBA; el resto, el folleto.
    datos: [
      { etiqueta: 'Capital', valor: 'Tokio' },
      { etiqueta: 'Cuándo ir', valor: 'De marzo a noviembre' },
      { etiqueta: 'Traslados', valor: 'Tren bala' },
      { etiqueta: 'Noches', valor: 'Trece' },
    ],

    galeria: [
      {
        id: 'inari',
        foto: FOTOS.JAPON_INARI,
        alt: 'El túnel de puertas torii rojas de Fushimi Inari, completamente vacío',
        rotulo: 'Fushimi Inari',
        pie: 'Miles de puertas rojas monte arriba. Vacío se ve solo a una hora, y no es la que dicen las guías.',
      },
      {
        id: 'santuario',
        foto: FOTOS.JAPON_SANTUARIO,
        alt: 'Farolillos colgados bajo el tejado de un santuario, con una mujer en kimono',
        rotulo: 'Los ritos',
        pie: 'Antes de entrar se lavan las manos y la boca en la fuente. Nadie lo explica: se observa y se imita.',
      },
      {
        id: 'miyajima',
        foto: FOTOS.JAPON_MIYAJIMA,
        alt: 'El torii flotante del santuario de Itsukushima, en la isla de Miyajima',
        rotulo: 'Miyajima',
        pie: 'El torii del santuario de Itsukushima queda dentro del agua cuando sube la marea. Se visita el mismo día que Hiroshima.',
      },
      {
        id: 'nara',
        foto: FOTOS.JAPON_NARA,
        alt: 'Una pagoda de cinco pisos reflejada en un estanque, en Nara',
        rotulo: 'Nara',
        pie: 'La capital anterior a Kioto, a media hora en tren. La pagoda tiene cinco pisos y se ve entera en el estanque.',
      },
      {
        id: 'sensoji',
        foto: FOTOS.JAPON_SENSOJI,
        alt: 'La pagoda del templo Sensoji entre cerezos en flor',
        rotulo: 'Asakusa',
        pie: 'El Sensoji y la arcada de Nakamise, en Tokio. En primavera el barrio entero se tiñe de rosa.',
      },
      {
        id: 'noche',
        foto: FOTOS.JAPON_NOCHE,
        alt: 'Un callejón estrecho de noche con farolillos rojos y carteles luminosos',
        rotulo: 'De noche',
        pie: 'Los callejones de madera donde se cena de verdad: siete asientos, un cocinero y ningún menú escrito.',
      },
      {
        id: 'cerezos',
        foto: FOTOS.JAPON_CEREZOS,
        alt: 'Cerezos en flor sobre un puente rojo en un jardín japonés',
        rotulo: 'Los cerezos',
        pie: 'La floración dura diez días y se mueve de sur a norte. Acertar con la fecha es medio oficio.',
      },
    ],

    pistas: [
      'japon',
      'japón',
      'japan',
      'kioto',
      'kyoto',
      'tokio',
      'osaka',
      'nara',
      'hiroshima',
      'miyajima',
      'koyasan',
      'takayama',
      'kanazawa',
      'hakone',
    ],
  },
  {
    id: 'brasil',
    nombre: 'Brasil',
    continente: 'América',
    foto: FOTOS.BRASIL,
    fotoAlt: 'Lagunas de agua de lluvia entre las dunas de los Lençóis',
    titular: 'El nordeste, no las postales',
    entradilla:
      'Ni Río ni el Cristo. Mil kilómetros de dunas, lagunas que solo existen medio año y pueblos de pescadores a los que se llega en 4x4.',
    pistas: ['brasil', 'brazil', 'lencois', 'lençóis', 'jericoacoara', 'fortaleza', 'bahia'],
  },
  {
    id: 'guatemala',
    nombre: 'Guatemala',
    continente: 'América',
    foto: FOTOS.GUATEMALA,
    fotoAlt: 'El templo del Gran Jaguar en Tikal',
    titular: 'Tres volcanes desde el desayuno',
    entradilla:
      'Un lago con doce pueblos alrededor, el mercado más ruidoso de Centroamérica y una ciudad maya que la selva se tragó durante mil años.',
    pistas: ['guatemala', 'tikal', 'antigua', 'atitlan', 'atitlán', 'chichicastenango'],
  },
  {
    id: 'india',
    nombre: 'India',
    continente: 'Asia',
    foto: FOTOS.INDIA,
    fotoAlt: 'El Taj Mahal reflejado en el agua al amanecer',
    titular: 'De Delhi al Ganges',
    entradilla:
      'El norte, en el orden que aguanta el cuerpo: las ciudades primero, el mármol de Agra a las seis de la mañana y Benarés al final.',
    pistas: ['india', 'delhi', 'jaipur', 'agra', 'benares', 'varanasi', 'rajastan'],
  },
  {
    id: 'uzbekistan',
    nombre: 'Uzbekistán',
    continente: 'Asia',
    foto: FOTOS.UZBEKISTAN,
    fotoAlt: 'La plaza del Registán en Samarcanda',
    titular: 'La Ruta de la Seda, en tren',
    entradilla:
      'Samarcanda, Bujará y Jiva. Cúpulas de azulejo turquesa, melón en cada comida y trenes de alta velocidad entre oasis, que nadie se espera.',
    pistas: ['uzbekistan', 'uzbekistán', 'samarcanda', 'bujara', 'bukhara', 'tashkent', 'jiva'],
  },
  {
    id: 'costarica',
    nombre: 'Costa Rica',
    continente: 'América',
    foto: FOTOS.COSTARICA,
    fotoAlt: 'Un tucán pico iris posado en una rama cubierta de musgo',
    titular: 'Naturaleza y aventura en estado puro',
    entradilla:
      'Un país del tamaño de Aragón que guarda el seis por ciento de la biodiversidad del planeta. Diez días de bosque nuboso, canales y Pacífico, con un naturalista que lleva veinte años mirando las mismas ramas y sigue encontrando cosas.',

    // La historia del sitio. Las cifras están verificadas una a una:
    //  · biodiversidad, superficie y número de especies: Biodiversidad de
    //    Costa Rica (Wikipedia, con fuente en el SINAC y el INBio)
    //  · deforestación y áreas protegidas: Deforestación en Costa Rica
    //    (Wikipedia) y el informe de la FAO sobre superficie forestal
    //  · Corcovado y la península de Osa: la ficha del parque en costarica.org
    //  · el tono y la manera de contar el destino: nuba.com y
    //    safaris.wildernessdestinations.com
    historia: [
      'Costa Rica ocupa 51.100 kilómetros cuadrados, una milésima de la superficie terrestre del planeta, y dentro de ese pañuelo vive alrededor del seis por ciento de todas las especies conocidas. Hay más de ochocientas aves, doscientos veintisiete mamíferos y ciento ochenta y tres anfibios censados, y unas noventa y una mil especies registradas en total, que los biólogos calculan que son apenas la quinta parte de las que quedan por describir. Sale a 1,8 especies por kilómetro cuadrado: no existe otro país con esa densidad.',
      'No siempre fue así, y esa es la parte que casi nadie cuenta. Después de la Segunda Guerra Mundial el país taló cerca del ochenta por ciento de su bosque para abrir potreros. La vuelta atrás empezó en los años ochenta, pagando a los propietarios por conservar en pie lo que les rentaba más talado, y hoy el veinticinco por ciento del territorio nacional tiene alguna figura de protección y más de la mitad del bosque que queda está dentro de un parque, una reserva biológica o un refugio. Costa Rica es de los poquísimos países que han conseguido revertir su propia deforestación.',
      'El extremo de todo eso está en la península de Osa, al sur del Pacífico. Corcovado son cuatrocientos veinticuatro kilómetros cuadrados que National Geographic describió como el lugar biológicamente más intenso de la Tierra: trece ecosistemas, más de cuatrocientas aves, los cuatro monos del país y los seis felinos, el tapir y el guacamayo rojo. Se entra en barco desde bahía Drake y no se entra solo: el guía es obligatorio, y con razón.',
      'Lo demás es un país que cambia cada dos horas de carretera. El Arenal y sus aguas termales al pie del volcán; el bosque nuboso de Monteverde, donde se camina por encima de las copas y donde está el quetzal; los canales de Tortuguero, que se recorren en lancha al amanecer, cuando bajan los monos aulladores a beber; y el Caribe sur, que es otro idioma, otra comida y otro ritmo. Lo llaman pura vida y no es una frase de folleto: es literalmente cómo se saluda y cómo se despide.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'San José' },
      { etiqueta: 'Cuándo ir', valor: 'De diciembre a abril' },
      { etiqueta: 'Territorio protegido', valor: '25 %' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    galeria: [
      {
        id: 'tucan',
        foto: FOTOS.COSTARICA_PICO,
        alt: 'Un tucán pico iris posado en una rama con musgo y una bromelia',
        rotulo: 'El pico iris',
        pie: 'Vive en las tierras bajas del Caribe y se le oye antes de verlo: un croar seco, más de rana que de pájaro. El pico mide un tercio de su cuerpo y pesa casi nada; por dentro está hueco.',
      },
      {
        id: 'caribe',
        foto: FOTOS.COSTARICA_CARIBE,
        alt: 'Playa de arena con palmeras y un islote de roca sobre el arrecife, en el Caribe sur',
        rotulo: 'El Caribe sur',
        pie: 'Manzanillo y Punta Uva, donde el arrecife llega hasta la orilla y el país cambia de idioma. Dos días sin plan, que en un viaje así son los que más se agradecen.',
      },
    ],

    pistas: ['costa rica', 'arenal', 'monteverde', 'tortuguero', 'corcovado', 'osa', 'manzanillo', 'san jose', 'san josé'],
  },
  {
    id: 'bolivia',
    nombre: 'Bolivia',
    continente: 'América',
    foto: FOTOS.SALAR,
    fotoAlt: 'Un salar al atardecer',
    titular: 'En preparación para 2027',
    entradilla:
      'El salar de Uyuni sin caravana de todoterrenos, que es más difícil de lo que parece. Estamos buscando la manera.',
    pistas: ['bolivia', 'uyuni', 'la paz'],
  },
]

// De un texto libre («Nordeste de Brasil») al destino que le toca.
// Compara por palabras completas, no por trozos: «Polinesia Francesa» no
// puede acabar clasificada como Francia.
export function buscarDestino(texto = '') {
  return (
    DESTINOS.find(({ pistas }) => pistas.some((pista) => contienePalabra(texto, pista))) || null
  )
}

// El nombre corto de un destino, para los títulos grandes.
//
// Utópica no pone en su hero el nombre del viaje, sino el del sitio: «Chile»,
// «Omán», «Maldivas». Dos palabras como mucho. Aquí hacemos lo mismo:
//   «Costa amalfitana, Italia» -> «Italia»   (lo dice la tabla de destinos)
//   «Kioto, Japón»             -> «Japón»
//   «Polinesia Francesa»       -> «Polinesia Francesa»  (se queda tal cual)
export function nombreCorto(texto = '') {
  const encontrado = buscarDestino(texto)
  if (encontrado) return encontrado.nombre

  // Si no está en la tabla, nos quedamos con lo que va después de la última
  // coma, que en un «Ciudad, País» es justo el país.
  const trozos = texto.split(',')
  return trozos[trozos.length - 1].trim() || texto
}

// Todos los viajes que caen en un destino.
export function viajesDeDestino(viajes, id) {
  return viajes.filter(({ destino }) => buscarDestino(destino)?.id === id)
}

// La fotografía que le corresponde a un destino, para no acabar poniendo
// una foto de Amalfi en un viaje a Namibia.
export function fotoDeDestino(texto, porDefecto) {
  return buscarDestino(texto)?.foto || porDefecto
}

// Los continentes en el orden de NUBA, con sus destinos dentro.
export const CONTINENTES_CON_DESTINOS = ['Europa', 'África', 'Oriente Medio', 'Asia', 'América']
  .map((nombre) => ({
    nombre,
    destinos: DESTINOS.filter((destino) => destino.continente === nombre),
  }))
  .filter(({ destinos }) => destinos.length > 0)
