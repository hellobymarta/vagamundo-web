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
    // Ventana: los ferris entre pueblos de la costa solo navegan de finales
    // de marzo a finales de octubre (costa-amalfitana.com), y julio y agosto
    // colapsan la carretera SS163.

    // La historia del sitio. Fuentes:
    //  · Costa Amalfitana (Wikipedia) para la declaración de la Unesco, los
    //    trece municipios y los cuarenta kilómetros de la SS163
    //  · el folleto de Italia 2026 de Viajes El Corte Inglés
    historia: [
      'Trece pueblos colgados de cuarenta kilómetros de acantilado, y una sola carretera para todos: la SS163, que va de Vietri sul Mare a Positano por el borde del precipicio y que en agosto se convierte en un atasco con vistas. La Unesco declaró la costa Patrimonio de la Humanidad en 1997 y no lo hizo solo por el paisaje: la citó como un ejemplo de territorio mediterráneo trabajado durante siglos, con sus bancales, sus limoneros y su arquitectura.',
      'Amalfi no fue siempre un pueblo bonito. Fue una república marinera que compitió con Venecia, Génova y Pisa, con su propia flota, su propio código de navegación y su propia moneda. De aquella ciudad queda la catedral, con el claustro del Paraíso, que se construyó en el siglo XIII y que es árabe, normando y bizantino a la vez, según qué arco mires.',
      'Lo que hacemos aquí es movernos como se mueve la gente de allí. En barca cuando hay mar —y hay mar casi siempre desde abril—, andando por los caminos de bancal cuando la carretera no merece la pena, y en el autobús de línea sin ninguna vergüenza. Los senderos que unen los pueblos por arriba llevan siglos ahí: eran el único camino antes de que existiera la carretera.',
      'Y después está el otro sur, el que casi nadie pisa: Apulia, Matera, la Toscana de campo. Aunque la casa empezó en esta costa, Italia nunca ha sido solo esta costa, y las salidas de junio y septiembre alargan la ruta tierra adentro.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Roma' },
      { etiqueta: 'Cuándo ir', valor: 'De mayo a junio y en septiembre' },
      { etiqueta: 'Patrimonio', valor: 'Desde 1997' },
      { etiqueta: 'Plazas', valor: 'De cinco a ocho por salida' },
    ],

    galeria: [
      {
        id: 'amalfi',
        foto: FOTOS.AMALFI_PASEO,
        alt: 'El paseo de Amalfi desde una terraza con maceteros, con el mar al fondo',
        rotulo: 'Amalfi',
        pie: 'La república marinera que compitió con Venecia y Génova, hoy de tres mil habitantes. Se llega en el ferry de las nueve, antes que los autocares.',
      },
      {
        id: 'mar',
        foto: FOTOS.AMALFI_MAR,
        alt: 'El mar frente a la costa amalfitana en un día claro',
        rotulo: 'El mar',
        pie: 'Desde abril hay barca casi todos los días. Entre noviembre y marzo el ferry entre pueblos ni siquiera navega, y esta costa sin barco es otra cosa.',
      },
      {
        id: 'toscana',
        foto: FOTOS.ITALIA_TOSCANA,
        alt: 'Un caserío toscano entre cipreses al amanecer, con la niebla en los valles',
        rotulo: 'Tierra adentro',
        pie: 'Italia no es solo la costa. Las salidas de junio y septiembre suben al campo, donde a las siete de la mañana todavía hay niebla en los valles.',
      },
      {
        id: 'mesa',
        foto: FOTOS.ITALIA_GASTRO,
        alt: 'Una mesa italiana puesta con platos para compartir',
        rotulo: 'La mesa',
        pie: 'Se come donde comen los de allí, que casi nunca es donde está la carta en cuatro idiomas. Dos comidas del viaje son en casa de alguien.',
      },
    ],

    salidas: {
      temporada: 'De mayo a junio y en septiembre',
      porque:
        'Mayo y junio, con el mar ya bañable y las escaleras vacías; septiembre, cuando se ha ido agosto y el agua sigue caliente. Fuera de esa ventana el ferry entre pueblos ni siquiera navega, y sin ferry la costa se recorre por una carretera de un carril.',
      fechas: [
        { id: 'italia-2705', dia: '10 de mayo de 2027', plazas: 6 },
        { id: 'italia-2706', dia: '7 de junio de 2027', plazas: 3 },
        { id: 'italia-2709', dia: '13 de septiembre de 2027', plazas: 8 },
      ],
    },
    pistas: ['italia', 'amalfi', 'amalfitana', 'apulia', 'positano', 'matera', 'bari', 'atrani', 'ravello'],
  },
  {
    id: 'grecia',
    nombre: 'Grecia',
    continente: 'Europa',
    foto: FOTOS.GRECIA,
    fotoAlt: 'Las cúpulas azules de Oia sobre la caldera de Santorini',
    titular: 'Primero las piedras, después el mar',
    entradilla:
      'Micenas, Delfos y Meteora entre semana, con las excavaciones casi vacías, y las Cícladas al final, cuando ya te has ganado el baño.',
    // Ventana: el meltemi sopla sobre todo en julio y agosto, con rachas de
    // fuerza 7-8 que llegan a cerrar los puertos (Grecotour), y de noviembre
    // a marzo cierra media isla.

    // La historia del sitio. Fuentes:
    //  · Partenón y Acrópolis de Atenas (Wikipedia), para fechas y nombres
    //  · el folleto de Mediterráneo 2026 de Viajes El Corte Inglés
    //  · Grecotour, para el meltemi
    historia: [
      'El Partenón se levantó entre el 447 y el 432 antes de Cristo, en quince años, sobre una roca que ya llevaba mil ocupada. Lo mandó construir Pericles y lo hicieron Ictino y Calícrates con Fidias al frente de la escultura. Se sube a primera hora, cuando abre, porque a media mañana la Acrópolis es una fila y porque el mármol del Pentélico cambia de color según le da la luz: blanco a las ocho, dorado a las siete de la tarde.',
      'Después están las islas, que no son una sola cosa. Santorini es el borde de un volcán: lo que se ve desde Oía es la caldera que dejó una erupción enorme hace tres mil quinientos años, y los pueblos están construidos justo en el filo. Míkonos es otra historia —callejuelas encaladas hechas para despistar a los piratas y una hilera de casas con los balcones sobre el agua—, y Zante guarda una cala a la que solo se llega en barco.',
      'Hay que hablar del viento, porque manda más que el calendario. El meltemi sopla sobre todo en julio y agosto y alcanza con frecuencia fuerza siete u ocho: los días que arrecia, las capitanías cierran los puertos y las islas dejan de estar conectadas. Por eso vamos en mayo, en junio o en septiembre, cuando el mar está quieto y las excavaciones se caminan sin buscar la sombra.',
      'Y Creta al final, que es casi otro país: la isla más grande, con montañas de dos mil metros, gargantas que se bajan andando en cinco horas y pueblos donde todavía te ponen raki sin preguntarte si lo quieres.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Atenas' },
      { etiqueta: 'Cuándo ir', valor: 'De finales de abril a junio y en septiembre' },
      { etiqueta: 'El Partenón', valor: '447–432 a. C.' },
      { etiqueta: 'Plazas', valor: 'De cinco a ocho por salida' },
    ],

    galeria: [
      {
        id: 'acropolis',
        foto: FOTOS.GRECIA_ACROPOLIS,
        alt: 'Las columnas del Partenón vistas desde abajo contra el cielo',
        rotulo: 'La Acrópolis',
        pie: 'Quince años de obra, hace dos mil cuatrocientos. Entramos cuando abre: a las once hay cola y el mármol ya no tiene ese color.',
      },
      {
        id: 'mikonos',
        foto: FOTOS.GRECIA_MIKONOS,
        alt: 'Las casas de la Pequeña Venecia de Míkonos con las mesas frente al agua',
        rotulo: 'La Pequeña Venecia',
        pie: 'Balcones de madera colgados sobre el mar y un callejero hecho a propósito para que se perdieran los piratas. Funciona: todavía se pierde uno.',
      },
      {
        id: 'navagio',
        foto: FOTOS.GRECIA_NAVAGIO,
        alt: 'La cala de Navagio en Zante, con el barco varado en la arena entre acantilados',
        rotulo: 'Navagio',
        pie: 'Una cala encerrada entre paredes de doscientos metros a la que solo se llega en barco. El carguero lleva ahí desde los años ochenta.',
      },
      {
        id: 'creta',
        foto: FOTOS.GRECIA_CRETA,
        alt: 'Una playa de Creta con el agua clara y la costa al fondo',
        rotulo: 'Creta',
        pie: 'La isla grande, que es casi otro país: montañas de dos mil metros, gargantas de cinco horas y raki sin preguntar.',
      },
    ],

    salidas: {
      temporada: 'De finales de abril a junio y en septiembre',
      porque:
        'Las excavaciones se caminan sin buscar la sombra y el mar ya está para meterse. En julio y agosto, a los cuarenta grados y a los precios se les suma el meltemi, que algunos días deja los barcos en puerto y te cambia el viaje entero.',
      fechas: [
        { id: 'grecia-2704', dia: '26 de abril de 2027', plazas: 8 },
        { id: 'grecia-2705', dia: '31 de mayo de 2027', plazas: 5 },
        { id: 'grecia-2709', dia: '13 de septiembre de 2027', plazas: 8 },
      ],
    },
    pistas: ['grecia', 'santorini', 'atenas', 'mikonos', 'cicladas', 'creta'],
  },
  {
    id: 'islandia',
    nombre: 'Islandia',
    continente: 'Europa',
    foto: FOTOS.ISLANDIA,
    fotoAlt: 'Una aurora boreal verde sobre un 4x4 parado en la nieve',
    titular: 'Una isla que todavía se está haciendo',
    entradilla:
      'Nueve días de febrero dando la vuelta a la isla en 4x4, con conductor y con un cazador de auroras que decide cada noche adónde vamos según el parte. No se promete la aurora: se persigue.',

    // La historia del sitio. Fuentes:
    //  · Islandia y Jökulsárlón (Wikipedia), para superficie, población,
    //    energía y las cifras de la laguna
    //  · nuba.com y utopica.travel, para la manera de plantear el viaje
    historia: [
      'Islandia está justo encima de la dorsal mesoatlántica, la costura por la que se separan la placa norteamericana y la euroasiática. Por eso hay más de doscientos volcanes y una erupción cada cinco años de media: la isla no está terminada, se sigue haciendo. Ciento tres mil kilómetros cuadrados y poco más de trescientos sesenta mil habitantes, la mayoría en Reikiavik, que es la capital más al norte del mundo. Salir de la carretera principal es quedarse solo de verdad.',
      'Ese mismo calor de debajo es el que lo mueve todo. La geotermia y el agua de los ríos cubren el cien por cien de la electricidad del país y cerca del ochenta por ciento de toda la energía que consume: las casas se calientan con agua que sale hirviendo del suelo. Es lo que explica que en mitad de la nada, a diez bajo cero, haya una piscina al aire libre a treinta y ocho grados.',
      'La Jökulsárlón no existía hace un siglo. Apareció entre 1934 y 1935, cuando la lengua del Breiðamerkurjökull empezó a retirarse, y desde entonces no ha parado de crecer: de ocho kilómetros cuadrados en 1975 a dieciocho hoy. Los icebergs que se desprenden flotan doscientos metros sobre el fondo, salen al mar por un río de kilómetro y medio y vuelven con la marea a vararse en la arena negra, del otro lado de la carretera.',
      'Y luego está la aurora, que es lo que trae a casi todo el mundo en invierno. Aparece cuando las partículas del sol chocan con la atmósfera a cien kilómetros de altura y se ve solo si el cielo está despejado y lejos de las luces. No hay manera de reservarla: se sale de noche, se conduce hasta donde diga el parte y se espera. Las ocho plazas van en un solo vehículo precisamente por eso, porque hay que poder cambiar de idea a las once de la noche.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Reikiavik' },
      { etiqueta: 'Cuándo ir', valor: 'De septiembre a abril' },
      { etiqueta: 'Energía renovable', valor: '100 % de la luz' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    galeria: [
      {
        id: 'glaciar',
        foto: FOTOS.ISLANDIA_GLACIAR,
        alt: 'Icebergs azules flotando en la laguna glaciar de Jökulsárlón',
        rotulo: 'Jökulsárlón',
        pie: 'No existía hace un siglo: apareció en 1935 cuando el glaciar empezó a retirarse, y desde 1975 ha pasado de ocho kilómetros cuadrados a dieciocho.',
      },
      {
        id: 'playa',
        foto: FOTOS.ISLANDIA_PLAYA,
        alt: 'Un farallón de roca sobre la arena negra de una playa islandesa',
        rotulo: 'La arena negra',
        pie: 'Reynisfjara, donde el basalto molido hace de playa y el Atlántico entra sin avisar. Se mira desde arriba: aquí abajo no se le da la espalda al mar.',
      },
      {
        id: 'seljalandsfoss',
        foto: FOTOS.ISLANDIA_SELJALANDSFOSS,
        alt: 'La cascada de Seljalandsfoss cayendo sobre la llanura verde al atardecer',
        rotulo: 'Seljalandsfoss',
        pie: 'Sesenta metros de caída por el borde de lo que fue la línea de costa, antes de que la isla creciera. En junio esta luz dura hasta las dos de la mañana.',
      },
      {
        id: 'detras',
        foto: FOTOS.ISLANDIA_DETRAS,
        alt: 'La misma cascada vista desde la cueva que hay detrás de la cortina de agua',
        rotulo: 'Por detrás',
        pie: 'Se puede rodear entera y salir por el otro lado. Se vuelve empapado y merece la pena: es de las pocas cascadas del mundo que dejan pasar.',
      },
    ],

    // Ventana: la temporada de auroras va de finales de septiembre a abril
    // (Islandia360), pero en diciembre y enero las tormentas cierran tramos
    // de la carretera de circunvalación y quedan cuatro horas de luz.
    salidas: {
      temporada: 'De noviembre a marzo',
      porque:
        'Es cuando hay noche suficiente para que salgan las auroras. Elegimos noviembre y el final del invierno antes que diciembre o enero: con la vuelta completa a la isla por delante, conviene tener carretera abierta y algo de luz para ver el resto del país.',
      fechas: [
        { id: 'islandia-2611', dia: '16 de noviembre de 2026', plazas: 2 },
        { id: 'islandia-2702', dia: '8 de febrero de 2027', plazas: 6 },
        { id: 'islandia-2703', dia: '1 de marzo de 2027', plazas: 8 },
      ],
    },
    pistas: [
      'islandia',
      'reikiavik',
      'reykjavik',
      'jokulsarlon',
      'vatnajokull',
      'seljalandsfoss',
      'reynisfjara',
      'vik',
      'auroras',
      'aurora boreal',
    ],
  },
  {
    id: 'turquia',
    nombre: 'Turquía',
    continente: 'Europa',
    foto: FOTOS.TURQUIA,
    fotoAlt: 'Globos sobre los valles de la Capadocia al amanecer',
    titular: 'Dos continentes en un viaje',
    entradilla:
      'Estambul a un lado y al otro del Bósforo, la Capadocia en temporada tranquila y el Egeo en barco de madera, durmiendo a bordo. Se sale en primavera y en octubre, que es cuando se puede andar por Éfeso sin buscar la sombra.',
    // Ventana: los globos de la Capadocia se recomiendan de abril a noviembre;
    // entre diciembre y marzo se cancelan muchas mañanas (IATI). En enero la
    // Capadocia hace 7 grados de día y tres bajo cero de noche.

    // La historia del sitio. Fuentes:
    //  · Biblioteca de Celso y Pamukkale (Wikipedia), para fechas y cifras
    //  · IATI Seguros, para la temporada de los globos de la Capadocia
    //  · el folleto de Mediterráneo y Oriente Medio 2026 de Viajes El Corte Inglés
    historia: [
      'Estambul es la única ciudad del mundo que está en dos continentes, y lo bueno es que se cruza de uno a otro en un vapor de línea por el precio de un billete de autobús. Lo hacemos a diario: se desayuna en el lado europeo y se come en el asiático, donde no hay una sola tienda de alfombras y sí los mejores desayunos de la ciudad.',
      'De ahí a la Capadocia, que es un paisaje que hizo la ceniza. Tres volcanes cubrieron la llanura de toba, la lluvia y el viento la fueron cortando en chimeneas, y la gente descubrió que esa roca se excava con una cuchara: hay iglesias, palomares y casas enteras dentro de las agujas, algunas con los frescos todavía puestos. Los globos salen casi todas las mañanas de abril a noviembre; entre diciembre y marzo se cancelan más de las que vuelan.',
      'Después el Egeo, que es donde está la Roma que no se ve en Roma. En Éfeso sigue en pie la fachada de la biblioteca de Celso, terminada hacia el año 117: la levantó un hijo en honor a su padre, guardaba doce mil rollos y es además su tumba, porque Celso está enterrado en una cripta justo debajo. Y a tres horas, Pamukkale: terrazas de travertino blanco formadas por el agua termal que baja de la montaña, Patrimonio de la Humanidad desde 1988, con la ciudad romana de Hierápolis construida justo encima.',
      'Se acaba en el mar, en un barco de madera de los de toda la vida, durmiendo a bordo. No hay mejor manera de ver esta costa: los pueblos del Egeo están todos mirando al agua y casi todos dan la espalda a la carretera.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Ankara' },
      { etiqueta: 'Cuándo ir', valor: 'En abril y mayo, y de septiembre a octubre' },
      { etiqueta: 'Pamukkale', valor: 'Patrimonio desde 1988' },
      { etiqueta: 'Plazas', valor: 'De cinco a ocho por salida' },
    ],

    galeria: [
      {
        id: 'estambul',
        foto: FOTOS.TURQUIA_ESTAMBUL,
        alt: 'El interior de la Mezquita Azul de Estambul, con las cúpulas cubiertas de azulejos',
        rotulo: 'Estambul',
        pie: 'Lo azul de la Mezquita Azul son unos veinte mil azulejos de Iznik puestos uno a uno. Se entra a primera hora, y luego se cruza al lado asiático en el vapor de línea, con los demás.',
      },
      {
        id: 'goreme',
        foto: FOTOS.TURQUIA_GOREME,
        alt: 'Viviendas e iglesias excavadas en las agujas de toba de la Capadocia',
        rotulo: 'La Capadocia',
        pie: 'Tres volcanes dejaron la toba y la gente descubrió que se excava con una cuchara. Dentro de esas agujas hay iglesias con los frescos todavía puestos.',
      },
      {
        id: 'pamukkale',
        foto: FOTOS.TURQUIA_PAMUKKALE,
        alt: 'Las terrazas blancas de travertino de Pamukkale con el agua turquesa',
        rotulo: 'Pamukkale',
        pie: 'El agua termal baja de la montaña y va dejando la cal en terrazas. Patrimonio de la Humanidad desde 1988, con una ciudad romana construida encima.',
      },
      {
        id: 'efeso',
        foto: FOTOS.TURQUIA_EFESO,
        alt: 'La fachada de la biblioteca de Celso en Éfeso',
        rotulo: 'Éfeso',
        pie: 'Doce mil rollos guardaba esta biblioteca del año 117. La levantó un hijo por su padre y es también su tumba: Celso está en una cripta justo debajo.',
      },
    ],

    salidas: {
      temporada: 'En abril y mayo, y de septiembre a octubre',
      porque:
        'Es cuando coinciden las tres cosas: Estambul sin bochorno, la Capadocia templada y el Egeo antes o después del calor. Y es cuando los globos vuelan casi todas las mañanas, que en invierno se cancelan más de las que salen.',
      fechas: [
        { id: 'turquia-2610', dia: '5 de octubre de 2026', plazas: 2 },
        { id: 'turquia-2704', dia: '19 de abril de 2027', plazas: 8 },
        { id: 'turquia-2709', dia: '27 de septiembre de 2027', plazas: 8 },
      ],
    },
    pistas: ['turquia', 'turquía', 'estambul', 'capadocia', 'efeso', 'éfeso', 'bodrum', 'egeo'],
  },
  {
    id: 'jordania',
    nombre: 'Jordania',
    continente: 'Oriente Medio',
    foto: FOTOS.JORDANIA,
    fotoAlt: 'La fachada del Tesoro de Petra tallada en la roca rosa',
    titular: 'Petra, y todo lo que hay alrededor',
    entradilla:
      'Cabe en ocho días y no se parece a nada: una ciudad romana en pie, otra tallada en la roca, dos noches de desierto en campamento y un mar en el que no te hundes. Entramos en Petra dos veces, una de ellas de noche.',

    // La historia del sitio. Fuentes:
    //  · Petra y Mar Muerto (Wikipedia), para fechas, cifras y la ingeniería
    //    hidráulica nabatea
    //  · el folleto de África y Oriente Medio 2026 de Viajes El Corte Inglés
    //  · nuba.com, para la manera de plantear los días
    historia: [
      'Petra es Patrimonio de la Humanidad desde el 6 de diciembre de 1985 y una de las siete nuevas maravillas del mundo desde 2007, y aun así sigue sin parecerse a lo que uno se imagina. No es un monumento: es una ciudad entera excavada en la roca, capital de los nabateos, un pueblo de caravaneros que controló durante siglos la ruta del incienso y la mirra entre Arabia y el Mediterráneo.',
      'Se entra por el Siq, una grieta de kilómetro y medio con paredes de hasta doscientos metros que en algún punto se estrecha hasta los dos. Se camina esa grieta en penumbra, dando vueltas, sin ver nada, y al final se abre de golpe la fachada del Tesoro. Lo de Tesoro se lo pusieron los beduinos, que creían que dentro había oro escondido; en realidad es una tumba monumental del siglo I, probablemente la del rey Aretas IV.',
      'Lo que de verdad impresiona cuando te lo cuenta alguien que lo conoce no es la talla, es el agua. Los nabateos montaron una red de presas, cisternas y canalizaciones de cerámica que llevaba unos cuarenta millones de litros diarios hasta el centro de la ciudad, en mitad del desierto y sin una sola bomba. Por eso hubo aquí veinte o treinta mil personas. Europa no supo de Petra hasta 1812, cuando el suizo Burckhardt se hizo pasar por peregrino musulmán para poder entrar, y la mayor parte de la ciudad sigue todavía bajo la arena.',
      'Alrededor hay un país que se recorre en pocas horas de coche. Jerash, que es de las ciudades romanas de provincias mejor conservadas que quedan en pie. Wadi Rum, donde se duerme en campamento y la arena es literalmente naranja. Y el mar Muerto, a cuatrocientos treinta y cinco metros bajo el nivel del mar —el punto más bajo de la tierra firme del planeta—, nueve veces más salado que el océano y bajando un metro al año.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Amán' },
      { etiqueta: 'Cuándo ir', valor: 'De marzo a mayo y de septiembre a noviembre' },
      { etiqueta: 'Petra', valor: 'Patrimonio desde 1985' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    galeria: [
      {
        id: 'tesoro',
        foto: FOTOS.JORDANIA_TESORO,
        alt: 'El Tesoro de Petra visto desde lo alto del cañón, con la explanada al pie',
        rotulo: 'El Tesoro desde arriba',
        pie: 'Novecientos escalones hasta el mirador que casi nadie sube, y desde el que se entiende de una vez lo que es Petra: una grieta, una explanada y una fachada de cuarenta metros.',
      },
      {
        id: 'zoco',
        foto: FOTOS.JORDANIA_ZOCO,
        alt: 'Bandejas de especias, flores secas y hierbas en la puerta de una tienda del zoco',
        rotulo: 'El zoco',
        pie: 'Zaatar, sumac, flor de hibisco y canela en rama. Se compra donde compra el cocinero que nos da de cenar, que es la única manera de no comprar mal.',
      },
      {
        id: 'wadirum',
        foto: FOTOS.JORDANIA_WADIRUM,
        alt: 'Las montañas de Wadi Rum sobre la arena naranja, con bruma al fondo',
        rotulo: 'Wadi Rum',
        pie: 'Dos noches de campamento, cena bajo tierra —el zarb se cuece enterrado en la arena— y un cielo sin una sola luz alrededor.',
      },
      {
        id: 'aman',
        foto: FOTOS.JORDANIA_AMAN,
        alt: 'Los tejados de Amán extendiéndose hasta el horizonte con la bandera gigante al fondo',
        rotulo: 'Amán',
        pie: 'Blanca, en cuesta y mucho más grande de lo que nadie espera. Se sube a la ciudadela al atardecer, cuando empiezan las llamadas a la oración y se oyen unas encima de otras.',
      },
      {
        id: 'monasterio',
        foto: FOTOS.JORDANIA_MONASTERIO,
        alt: 'La fachada del Monasterio de Petra al sol de la tarde, con una persona diminuta al pie',
        rotulo: 'El Monasterio',
        pie: 'Ochocientos escalones tallados por encima de la ciudad, y arriba una fachada de cincuenta metros con una sola persona delante. Se sube a última hora, cuando el autobús ya se ha ido.',
      },
    ],

    // Ventana: más de 300 días de sol al año y las lluvias concentradas de
    // diciembre a febrero (jordania.com). Amán promedia 33 grados en agosto,
    // y Wadi Rum y el mar Muerto van bastante por encima.
    salidas: {
      temporada: 'De marzo a mayo y de septiembre a octubre',
      porque:
        'Petra son ocho horas andando y Wadi Rum, dos noches en el desierto: en verano no se puede, y en invierno la noche del campamento baja de cuatro grados. En primavera y otoño se camina cómodo de la mañana a la noche.',
      fechas: [
        { id: 'jordania-2610', dia: '18 de octubre de 2026', plazas: 1 },
        { id: 'jordania-2703', dia: '14 de marzo de 2027', plazas: 7 },
        { id: 'jordania-2704', dia: '25 de abril de 2027', plazas: 8 },
      ],
    },
    pistas: ['jordania', 'petra', 'wadi rum', 'amman', 'amán', 'aqaba', 'jerash', 'mar muerto', 'siq', 'nabateo'],
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
    ],

    // Ventana: Etosha recibe más de 400 mm al año, casi todos entre finales de
    // octubre y abril; junio y julio son los meses más secos y es cuando los
    // animales se concentran en las charcas permanentes (Wikipedia, Etosha).
    salidas: {
      temporada: 'De mayo a octubre',
      porque:
        'En la estación seca no queda agua suelta por el parque, así que la fauna baja a las charcas y se la ve sin perseguirla. En la de lluvias hay charcos por todas partes, los animales se dispersan y las pistas de grava se ponen imposibles.',
      fechas: [
        { id: 'namibia-2610', dia: '4 de octubre de 2026', plazas: 2 },
        { id: 'namibia-2706', dia: '6 de junio de 2027', plazas: 8 },
        { id: 'namibia-2709', dia: '5 de septiembre de 2027', plazas: 6 },
      ],
    },
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
    id: 'marruecos',
    proximamente: true,
    nombre: 'Marruecos',
    continente: 'África',
    titular: 'En preparación para 2027',
    entradilla:
      'El Atlas y el sur, sin la parada de la cooperativa de argán. Llevamos dos viajes de reconocimiento y falta uno.',
    pistas: ['marruecos', 'marrakech', 'fez', 'esauira', 'merzouga', 'atlas'],
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

    // Ventana: previsión de floración 2026 de la Japan Meteorological
    // Corporation — Kioto abre el 23 de marzo y llega a plena flor el 30, y la
    // plena flor dura cinco o siete días. Junio y la primera mitad de julio
    // son el tsuyu, la temporada de lluvias.
    salidas: {
      temporada: 'A finales de marzo y de octubre a noviembre',
      porque:
        'Los cerezos y el otoño rojo, que son dos viajes distintos al mismo sitio. La flor dura cinco o seis días y se mueve cada año, así que la salida de marzo se ajusta con la previsión en la mano. Evitamos junio, que es temporada de lluvias, y agosto, que es calor, humedad y tifones.',
      fechas: [
        { id: 'japon-2610', dia: '24 de octubre de 2026', plazas: 3 },
        { id: 'japon-2703', dia: '27 de marzo de 2027', plazas: 0 },
        { id: 'japon-2711', dia: '6 de noviembre de 2027', plazas: 8 },
      ],
    },
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
    proximamente: true,
    nombre: 'Brasil',
    continente: 'América',
    titular: 'El nordeste, no las postales',
    entradilla:
      'Ni Río ni el Cristo. Mil kilómetros de dunas, lagunas que solo existen medio año y pueblos de pescadores a los que se llega en 4x4.',
    pistas: ['brasil', 'brazil', 'lencois', 'lençóis', 'jericoacoara', 'fortaleza', 'bahia'],
  },
  {
    id: 'india',
    nombre: 'India',
    continente: 'Asia',
    foto: FOTOS.INDIA,
    fotoAlt: 'El Taj Mahal visto desde el arco de la Gran Puerta de Agra',
    titular: 'De Delhi al Ganges',
    entradilla:
      'El norte, en el orden que aguanta el cuerpo: las ciudades primero, el mármol de Agra a las seis de la mañana y Benarés al final. Vehículo y conductor propios los once días, y un guía distinto en cada ciudad.',

    // La historia del sitio. Fuentes:
    //  · el folleto de Asia y Oceanía 2026 de Viajes El Corte Inglés
    //  · Taj Mahal y Hawa Mahal (Wikipedia), para fechas y cifras
    //  · nuba.com, para la manera de plantear el Rajastán
    historia: [
      'El Taj Mahal se levantó entre 1632 y 1654 porque a Shah Jahan se le murió su mujer, Mumtaz Mahal, dando a luz. Trabajaron unos veinte mil obreros y más de mil elefantes acarreando material; el mármol blanco vino de las canteras de Makrana, en Rajastán, a más de trescientos kilómetros. La cúpula mide treinta y cinco metros y los cuatro minaretes que la rodean no están rectos: se construyeron ligeramente inclinados hacia fuera para que, si algún día temblara la tierra, cayeran hacia el jardín y no sobre la tumba.',
      'Se entra por la Gran Puerta, y esa es la única manera de verlo por primera vez: el arco recorta el mármol al fondo y lo va soltando conforme uno camina. Vamos a las seis de la mañana, cuando abre, porque a las nueve hay siete millones de personas al año repartiéndose el mismo patio y porque a esa hora el mármol todavía está rosa.',
      'Después viene el Rajastán, que es otra cosa. El Hawa Mahal de Jaipur lo mandó construir Sawai Pratap Singh en 1799 y lo diseñó Lal Chand Ustad: cinco plantas de arenisca rosa y novecientas cincuenta y tres ventanas caladas, los jharokhas, para que las mujeres de la corte pudieran mirar la calle sin ser vistas. De paso, el aire que pasa por esos novecientos cincuenta y tres agujeros se acelera y refresca las salas: un aire acondicionado de 1799.',
      'Y luego está el país que no cabe en ningún monumento. El dorado del Templo de Amritsar al atardecer y su cocina comunitaria, donde se come gratis y sin que nadie pregunte de dónde vienes. Un Ganesha vestido de oro y flores en un templo cualquiera un martes. Y el callejón, siempre el callejón: la vaca, el claxon, el tuk-tuk amarillo y el olor a cardamomo. Se viaja con chófer y con guía precisamente para poder mirar todo eso sin tener que resolverlo.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Nueva Delhi' },
      { etiqueta: 'Cuándo ir', valor: 'De octubre a marzo' },
      { etiqueta: 'El mármol', valor: '1632–1654' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    galeria: [
      {
        id: 'hawa',
        foto: FOTOS.INDIA_HAWA,
        alt: 'La fachada rosa del Hawa Mahal de Jaipur contra el cielo',
        rotulo: 'Hawa Mahal',
        pie: 'Novecientas cincuenta y tres ventanas caladas en arenisca rosa, 1799. Se visita a primera hora, desde la terraza del café de enfrente, con la ciudad todavía en silencio.',
      },
      {
        id: 'ganesha',
        foto: FOTOS.INDIA_GANESHA,
        alt: 'Una figura de Ganesha vestida de oro y guirnaldas de flores en un templo',
        rotulo: 'El templo',
        pie: 'Oro, perlas y guirnaldas que se cambian cada mañana. No es una atracción ni tiene horario de visita: es un martes cualquiera y hay que descalzarse.',
      },
      {
        id: 'amritsar',
        foto: FOTOS.INDIA_AMRITSAR,
        alt: 'El Templo Dorado de Amritsar al atardecer, con un barquero en el estanque',
        rotulo: 'Amritsar',
        pie: 'El Templo Dorado sobre el estanque, y al lado la cocina comunitaria más grande del mundo: se come gratis, sentado en el suelo y en fila, sin que nadie pregunte de dónde vienes.',
      },
      {
        id: 'callejon',
        foto: FOTOS.INDIA_CALLE,
        alt: 'Un tuk-tuk amarillo aparcado en un callejón estrecho de casas de colores',
        rotulo: 'El callejón',
        pie: 'Aquí el coche no entra. Se baja, se camina y el guía va delante: es la parte del viaje que no sale en ninguna lista y la que todo el mundo cuenta al volver.',
      },
    ],

    // Ventana: el monzón llega a Delhi hacia el 21 de junio y julio y agosto
    // son los meses más lluviosos; en verano se pasa de los 40 grados con
    // habitualidad (Wikipedia, Delhi). En diciembre y enero la niebla y la
    // contaminación llegan a suspender vuelos a centenares.
    salidas: {
      temporada: 'En noviembre y de febrero a marzo',
      porque:
        'Días templados, noches frescas y ni monzón ni calor de cuarenta grados. Nos saltamos diciembre y enero a propósito: son secos, pero la niebla de Delhi cancela vuelos internos y este viaje lleva dos.',
      fechas: [
        { id: 'india-2611', dia: '8 de noviembre de 2026', plazas: 4 },
        { id: 'india-2702', dia: '14 de febrero de 2027', plazas: 8 },
        { id: 'india-2703', dia: '7 de marzo de 2027', plazas: 8 },
      ],
    },
    pistas: ['india', 'delhi', 'jaipur', 'agra', 'benares', 'varanasi', 'rajastan', 'rajastán', 'amritsar', 'jodhpur', 'udaipur'],
  },
  {
    id: 'vietnam',
    proximamente: true,
    nombre: 'Vietnam',
    continente: 'Asia',
    titular: 'En preparación para 2027',
    entradilla:
      'De norte a sur en tren nocturno, con parada larga en Hoi An. Abrimos plazas cuando tengamos guía propio en las tres ciudades.',
    pistas: ['vietnam', 'hanoi', 'hoi an', 'saigon', 'halong', 'hue'],
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
        id: 'arenal',
        foto: FOTOS.COSTARICA_ARENAL,
        alt: 'El cono del volcán Arenal enmarcado por palmeras al amanecer',
        rotulo: 'El Arenal',
        pie: 'Estuvo cuarenta y dos años en erupción continua, de 1968 a 2010. Ahora está en reposo y lo que queda son las termales que calienta por debajo.',
      },
      {
        id: 'tucan',
        foto: FOTOS.COSTARICA_PICO,
        alt: 'Un tucán pico iris posado en una rama con musgo y una bromelia',
        rotulo: 'El pico iris',
        pie: 'Vive en las tierras bajas del Caribe y se le oye antes de verlo: un croar seco, más de rana que de pájaro. El pico mide un tercio de su cuerpo y pesa casi nada; por dentro está hueco.',
      },
      {
        id: 'costa',
        foto: FOTOS.COSTARICA_COSTA,
        alt: 'Playa de arena vista desde el aire, con el bosque llegando hasta la orilla',
        rotulo: 'La costa',
        pie: 'El bosque baja hasta la arena y no hay una sola torre. Dos días sin plan al final del viaje, que en una ruta así son los que más se agradecen.',
      },
    ],

    // Ventana: estación seca en el Pacífico de diciembre a abril. Septiembre y
    // octubre son los meses más lluviosos justo en Osa y el Pacífico, que es
    // donde está Corcovado.
    salidas: {
      temporada: 'De diciembre a abril, y en julio',
      porque:
        'La estación seca del Pacífico, que es donde están Corcovado y la costa. En julio hay un paréntesis —el veranillo— que además cae en plena temporada de anidación en Tortuguero. Septiembre y octubre los dejamos fuera: es cuando más llueve justo por donde pasa la ruta.',
      fechas: [
        { id: 'costarica-2701', dia: '10 de enero de 2027', plazas: 5 },
        { id: 'costarica-2702', dia: '21 de febrero de 2027', plazas: 8 },
        { id: 'costarica-2707', dia: '11 de julio de 2027', plazas: 8 },
      ],
    },
    pistas: ['costa rica', 'arenal', 'monteverde', 'tortuguero', 'corcovado', 'osa', 'manzanillo', 'san jose', 'san josé'],
  },
  {
    id: 'polinesia',
    nombre: 'Polinesia Francesa',
    continente: 'Oceanía',
    foto: FOTOS.POLINESIA,
    fotoAlt: 'Bora Bora desde el aire, con el Otemanu y la laguna turquesa',
    titular: 'El sitio más lejos al que se puede ir',
    entradilla:
      'Ciento dieciocho islas y atolones repartidos en dos millones y medio de kilómetros cuadrados de océano. Se tarda un día entero en llegar y por eso se va dos semanas, no una.',

    // La historia del sitio. Fuentes:
    //  · Polinesia Francesa y Geografía de Polinesia Francesa (Wikipedia),
    //    para las cifras de islas, superficie y océano
    //  · el folleto de Asia y Oceanía 2026 de Viajes El Corte Inglés
    //  · nuba.com y utopica.travel, para la manera de contar el archipiélago
    historia: [
      'Son ciento dieciocho islas y atolones, de los que solo sesenta y siete están habitados, repartidos en cinco archipiélagos: Sociedad, Tuamotu-Gambier, Marquesas y Australes. Toda la tierra firme junta suma 4.167 kilómetros cuadrados —menos que la provincia de Guipúzcoa— y está esparcida por dos millones y medio de kilómetros cuadrados de Pacífico. Doscientas setenta mil personas. Papeete es la única ciudad.',
      'Un atolón es un volcán que se hundió. El coral que le crecía alrededor siguió subiendo hacia la luz a la misma velocidad a la que la isla se iba al fondo, y cuando el volcán desapareció del todo quedó el anillo: la laguna en el centro, el arrecife fuera y, encima, los motus, esas lenguas de arena y cocoteros separadas por canales. En las Tuamotu, la meseta de basalto sobre la que se apoya todo eso está a mil quinientos o dos mil metros de profundidad.',
      'Dentro de la laguna el agua tiene dos metros y está a veintiocho grados. Los tiburones de puntas negras que se acercan miden metro y medio, comen peces pequeños y no tienen ningún interés en nadie: se nada entre ellos con un guía polinesio, sin jaula y sin cebo, y lo raro es lo poco que pasa. Fuera, en las pasas donde entra la corriente del océano, es donde está el otro buceo, el de las mantas y los bancos que no caben en el visor.',
      'Y hay una palabra que conviene aprender antes de ir: rāhui. Es la veda tradicional polinesia —se cierra una zona de pesca, se deja descansar, se reabre— y en 2016 la aplicaron a los dos millones y medio de kilómetros cuadrados de su zona económica exclusiva. No es una política importada: es cómo se ha gestionado este océano desde siempre.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Papeete' },
      { etiqueta: 'Cuándo ir', valor: 'De mayo a octubre' },
      { etiqueta: 'Islas', valor: '118, 67 habitadas' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    galeria: [
      {
        id: 'tiburones',
        foto: FOTOS.POLINESIA_TIBURONES,
        alt: 'Dos personas buceando a pulmón rodeadas de tiburones de puntas negras y una raya',
        rotulo: 'La laguna',
        pie: 'Dos metros de agua, veintiocho grados y tiburones de puntas negras alrededor. Sin jaula y sin cebo: con un guía polinesio que lleva toda la vida entrando ahí.',
      },
      {
        id: 'gruta',
        foto: FOTOS.POLINESIA_GRUTA,
        alt: 'Dos apneístas bajo la bóveda de una gruta de coral atravesada por rayos de luz',
        rotulo: 'A pulmón',
        pie: 'Dos días de iniciación a la apnea antes de bajar aquí. No hace falta ser nadie: hace falta aprender a estar quieto, que es lo difícil.',
      },
      {
        id: 'arrecife',
        foto: FOTOS.POLINESIA_ARRECIFE,
        alt: 'Un jardín de coral acropora con cientos de peces de colores sobre él',
        rotulo: 'El arrecife',
        pie: 'El coral crece hacia la luz a la misma velocidad a la que la isla se hunde. Esto es lo que queda cuando el volcán ya no está.',
      },
      {
        id: 'motus',
        foto: FOTOS.POLINESIA_MOTUS,
        alt: 'Vista aérea de una hilera de motus de cocoteros sobre la laguna, con Bora Bora al fondo',
        rotulo: 'Los motus',
        pie: 'Lenguas de arena y cocoteros sobre el anillo de coral, separadas por canales. Al fondo, a cuarenta kilómetros, el Otemanu de Bora Bora.',
      },
      {
        id: 'playa',
        foto: FOTOS.POLINESIA_PLAYA,
        alt: 'Playa de arena blanca con cocoteros inclinados sobre una laguna transparente',
        rotulo: 'Moorea',
        pie: 'La pensión familiar en la que dormimos: seis habitaciones, la cocina de la señora de la casa y el mismo trozo de laguna para todo el mundo.',
      },
      {
        id: 'bungalos',
        foto: FOTOS.POLINESIA_BUNGALOS,
        alt: 'Pasarela de madera entre bungalós sobre el agua, con la montaña detrás',
        rotulo: 'Sobre el agua',
        pie: 'Dos noches, no más: son caras y se disfrutan igual. El resto del viaje se duerme en pensiones familiares, que es donde se conoce a alguien.',
      },
      {
        id: 'atardecer',
        foto: FOTOS.POLINESIA_ATARDECER,
        alt: 'Un columpio colgado de una palmera inclinada sobre el agua, al atardecer',
        rotulo: 'Las siete',
        pie: 'A las siete se acaba la luz, de golpe, todos los días del año. Es la hora en la que no hay nada que hacer y en la que se entiende el viaje.',
      },
    ],

    // Ventana: la temporada de ciclones del Pacífico Sur va del 1 de noviembre
    // al 30 de abril (Wikipedia). El resto del año es la estación seca austral.
    salidas: {
      temporada: 'De junio a septiembre',
      porque:
        'Estación seca austral: menos lluvia, menos humedad y el agua transparente, que en un viaje que se hace dentro del agua lo es todo. De noviembre a abril es temporada oficial de ciclones y no programamos salidas.',
      fechas: [
        { id: 'polinesia-2706', dia: '26 de junio de 2027', plazas: 4 },
        { id: 'polinesia-2707', dia: '17 de julio de 2027', plazas: 0 },
        { id: 'polinesia-2709', dia: '4 de septiembre de 2027', plazas: 8 },
      ],
    },
    pistas: [
      'polinesia',
      'polinesia francesa',
      'tahiti',
      'tahití',
      'bora bora',
      'moorea',
      'rangiroa',
      'fakarava',
      'tuamotu',
      'marquesas',
      'papeete',
      'huahine',
      'taha',
    ],
  },
  {
    id: 'nuevazelanda',
    proximamente: true,
    nombre: 'Nueva Zelanda',
    continente: 'Oceanía',
    titular: 'En preparación para 2027',
    entradilla:
      'La isla sur entera, de Wanaka a los fiordos. Son tres semanas largas y estamos viendo cómo hacerlas caber en dos.',
    pistas: ['nueva zelanda', 'nuevazelanda', 'wanaka', 'queenstown', 'milford', 'auckland'],
  },
  {
    id: 'australia',
    proximamente: true,
    nombre: 'Australia',
    continente: 'Oceanía',
    titular: 'En preparación para 2027',
    entradilla:
      'El centro rojo y el arrecife, con comunidades aborígenes que llevan la visita ellas mismas. Es la parte que estamos cerrando.',
    pistas: ['australia', 'uluru', 'sidney', 'sydney', 'cairns', 'tasmania'],
  },
  {
    id: 'mexico',
    proximamente: true,
    nombre: 'México',
    continente: 'América',
    titular: 'En preparación para 2027',
    entradilla:
      'Oaxaca en noviembre y la península de Yucatán por dentro, no por la costa. Con cocinera en dos de los días.',
    pistas: ['mexico', 'méxico', 'oaxaca', 'yucatan', 'yucatán', 'merida', 'chiapas'],
  },
  {
    id: 'estadosunidos',
    nombre: 'Estados Unidos',
    continente: 'América',
    foto: FOTOS.ESTADOSUNIDOS,
    fotoAlt: 'El puente de Brooklyn al atardecer, con el sur de Manhattan al fondo',
    titular: 'Nueva York por barrios, y luego la costa',
    entradilla:
      'Brooklyn y el Bronx antes que Times Square, el metro en vez del autocar y Coney Island un domingo. Después, si queda cuerpo, la otra costa: Los Ángeles y el Pacífico.',
    // Ventana: mayo y junio son los dos meses de menos sol en la costa del sur
    // de California —el June Gloom, un 64 % de sol posible en Los Ángeles
    // (Wikipedia)— y en enero Nueva York se mueve entre cinco bajo cero y dos.

    // La historia del sitio. Fuentes:
    //  · Puente de Brooklyn (Wikipedia), para fechas y medidas
    //  · June Gloom (Wikipedia), para la niebla de mayo y junio en California
    //  · el folleto de América 2026 de Viajes El Corte Inglés
    historia: [
      'Nueva York se entiende por barrios o no se entiende. Por eso empezamos por Brooklyn y el Bronx y dejamos Times Square para el final, si es que da tiempo. El metro en vez del autocar, que además es más rápido, y las distancias andando: la ciudad se mide en manzanas y veinte manzanas son un paseo.',
      'El puente de Brooklyn se inauguró en 1883 después de trece años de obra, y en su momento fue el puente colgante más largo del mundo: un cincuenta por ciento más que cualquiera anterior, con un vano de 486 metros. Fue también el primero suspendido con cables de acero. Se cruza andando a primera hora, desde el lado de Brooklyn, que es como hay que cruzarlo: de frente se te viene encima el sur de Manhattan.',
      'Después está el otro Nueva York, el de domingo: Coney Island, con su paseo de tablas, su noria y el puesto de perritos que lleva ahí desde 1916. Y Central Park, que no es un parque dentro de la ciudad sino al revés — la ciudad creció alrededor de él, y eso se nota en cuanto entras.',
      'Si queda cuerpo, la otra costa. Los Ángeles no se parece a nada de lo anterior: no tiene centro, se vive en el coche y el Pacífico está siempre a media hora. Vamos en otoño a propósito: en mayo y junio esa costa amanece tapada casi todos los días —lo llaman June Gloom, y son los dos meses de menos sol del año allí—, y a nadie le apetece cruzar medio país para encontrarse una nube.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Washington D. C.' },
      { etiqueta: 'Cuándo ir', valor: 'De mayo a junio y de septiembre a octubre' },
      { etiqueta: 'El puente', valor: '486 m, de 1883' },
      { etiqueta: 'Plazas', valor: 'De cinco a ocho por salida' },
    ],

    galeria: [
      {
        id: 'dumbo',
        foto: FOTOS.EEUU_DUMBO,
        alt: 'El puente de Manhattan encajado entre los almacenes de ladrillo de Dumbo',
        rotulo: 'Dumbo',
        pie: 'Una calle de adoquines entre almacenes de ladrillo y, al fondo, el puente entero. Se llega a las ocho, antes de que la esquina se llene de cámaras.',
      },
      {
        id: 'central',
        foto: FOTOS.EEUU_CENTRAL,
        alt: 'Barcas de remos en el lago de Central Park, con las torres del San Remo al fondo',
        rotulo: 'Central Park',
        pie: 'No es un parque dentro de la ciudad: la ciudad creció a su alrededor. Se alquila una barca por horas y desde el agua no se oye un solo claxon.',
      },
      {
        id: 'coney',
        foto: FOTOS.EEUU_CONEY,
        alt: 'El paseo de tablas de Coney Island con el puesto de perritos y la noria al fondo',
        rotulo: 'Coney Island',
        pie: 'Se va en metro, un domingo, y se come de pie en el puesto que abrió en 1916. Es el Nueva York que no sale en las listas y el que todo el mundo recuerda.',
      },
      {
        id: 'angeles',
        foto: FOTOS.EEUU_ANGELES,
        alt: 'Los Ángeles con las palmeras y el perfil de la ciudad al fondo',
        rotulo: 'Los Ángeles',
        pie: 'Sin centro, en coche y con el Pacífico a media hora. Vamos en otoño: en mayo y junio esta costa amanece tapada casi todos los días.',
      },
    ],

    salidas: {
      temporada: 'De mayo a junio y de septiembre a octubre',
      porque:
        'Nueva York se anda bien y Los Ángeles ya tiene cielo limpio. Preferimos el tramo de otoño: en mayo y junio la costa de California amanece tapada casi todos los días y el mar todavía no acompaña.',
      fechas: [
        { id: 'eeuu-2610', dia: '3 de octubre de 2026', plazas: 3 },
        { id: 'eeuu-2705', dia: '16 de mayo de 2027', plazas: 8 },
        { id: 'eeuu-2709', dia: '25 de septiembre de 2027', plazas: 8 },
      ],
    },
    pistas: ['estados unidos', 'estadosunidos', 'utah', 'arizona', 'yosemite', 'california'],
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
// ¿Se puede reservar ya? Es un dato del destino, no algo que se deduzca de
// cuántos viajes haya en el catálogo: una salida puede estar cerrada por
// temporada sin que el destino deje de estar abierto.
export function estaAbierto(destino) {
  return !destino?.proximamente
}

export function fotoDeDestino(texto, porDefecto) {
  return buscarDestino(texto)?.foto || porDefecto
}

// Otra fotografía del mismo sitio, distinta de la que lleva el viaje en el
// catálogo. La primera de su galería sirve: es del destino y ya está elegida
// y escrita. Sin galería, cae en la portada del destino, y sin destino, en
// la imagen de reserva.
export function fotoAlternativa(texto, porDefecto) {
  const destino = buscarDestino(texto)

  return destino?.galeria?.[0]?.foto || destino?.foto || porDefecto
}

// Los continentes en el orden de NUBA, con sus destinos dentro.
export const CONTINENTES_CON_DESTINOS = ['Europa', 'África', 'Oriente Medio', 'Asia', 'Oceanía', 'América']
  .map((nombre) => ({
    nombre,
    destinos: DESTINOS.filter((destino) => destino.continente === nombre),
  }))
  .filter(({ destinos }) => destinos.length > 0)
