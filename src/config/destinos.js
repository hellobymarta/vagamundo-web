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
      'La costa amalfitana es la cara sur de la península sorrentina, un espolón de caliza y dolomía de origen marino que se hunde en el Tirreno. De cero a 1.444 metros en poco más de cinco kilómetros: esa cifra explica todo lo demás. Aquí no hay llanura, y por eso los pueblos no están junto al mar sino metidos en la desembocadura de los barrancos. Amalfi ocupa el valle de los molinos, Atrani el del Dragone y Positano el del Grarrone.',
      'Es Patrimonio Mundial desde 1997, pero no como monumento: como paisaje cultural. Son 11.231 hectáreas y quince municipios, y lo que se protege es justamente el trabajo de siglos que convirtió una pared vertical en bancales de limonero sostenidos por muros de piedra seca.',
      'Amalfi fue la primera de las repúblicas marineras italianas, antes que Pisa, Génova y Venecia, y su código de derecho marítimo rigió el Mediterráneo durante siglos. De aquella ciudad quedan el Duomo de San Andrés sobre su escalinata, el Chiostro del Paradiso que se levantó entre 1266 y 1268 como cementerio de nobles, con arcos entrecruzados de matriz árabe, y el arsenal donde se armaban las galeras.',
      'El papel a mano llegó a Europa por aquí, aprendido del mundo árabe: las fábricas del Valle dei Mulini molieron trapo desde la Edad Media y el Museo del Papel sigue enseñando cómo se hacía. En Vietri siguen abiertos los talleres de cerámica. Y se come scialatielli, que es pasta inventada en los años sesenta y no en la Antigüedad, colatura de anchoa de Cetara, que desciende del garum romano, y mozzarella de búfala de la llanura del Sele.',
      'Al lado están Herculano y Pompeya, inscritas el mismo año. Herculano es la que conserva plantas altas, puertas y vigas de madera carbonizada, porque no la enterró la ceniza sino un flujo piroclástico. Y sesenta kilómetros al sur está Paestum, con tres templos dóricos en pie de los mejor conservados del mundo griego. Ninguna otra costa italiana tiene todo eso a una hora de coche.',
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
        foto: FOTOS.AMALFI_MAR,
        alt: 'Amalfi visto desde el mar, con las casas subiendo por el barranco',
        rotulo: 'Amalfi',
        pie: 'La primera de las repúblicas marineras italianas, antes que Pisa, Génova y Venecia. Del puerto sube la escalinata del Duomo de San Andrés, y detrás queda el Chiostro del Paradiso, de 1266. Se ve así, desde el agua, porque así se llegaba.',
      },
      {
        id: 'marina',
        foto: FOTOS.AMALFI_MARINA,
        alt: 'La playa de Amalfi vista desde una terraza con macetas',
        rotulo: 'La Marina Grande de Amalfi',
        pie: 'De aquí salían las galeras de la república y de aquí sale ahora el ferry de línea. La terraza es de una casa del pueblo: en la Costiera se vive en vertical y todo el mundo tiene una.',
      },
      {
        id: 'atrani',
        foto: FOTOS.PLAYA,
        vertical: true,
        alt: 'La playa y la iglesia de Atrani entre acantilados',
        rotulo: 'Atrani',
        pie: 'A media hora andando de Amalfi por el camino de la costa. Es el municipio más pequeño del sur de Italia y ocupa entero la desembocadura del torrente Dragone: una plaza bajo los soportales, una playa y nada más.',
      },
      {
        id: 'positano',
        foto: FOTOS.BARCA,
        vertical: true,
        alt: 'Una barca de madera fondeada frente a las casas de Positano',
        rotulo: 'Positano',
        pie: 'El final del Sentiero degli Dei: se baja de Nocelle y se llega al pueblo por arriba. De aquí sale el ferry de línea que devuelve a Amalfi en media hora, que es como mejor se ve la costa entera.',
      },
      {
        id: 'positano-noche',
        foto: FOTOS.NOCHE,
        alt: 'Positano iluminado al anochecer desde el acantilado',
        rotulo: 'Positano, al encenderse',
        pie: 'La Spiaggia Grande se vacía sobre las siete y el pueblo cambia de luz. Es la hora de cenar en una terraza de la parte alta, cuando ya no queda nadie de paso.',
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
      'Atenas no se entiende sin la roca. La Acrópolis está protegida como yacimiento desde 1833, cuatro años después de la independencia, y es Patrimonio Mundial desde 1987. El Partenón se levantó en quince años, hace dos mil cuatrocientos, y se entra a primera hora porque a mediodía el mármol devuelve todo el calor que ha cogido.',
      'Las Cícladas son las cumbres emergidas de un macizo de mármol y esquisto. De ahí sale el mármol de Paros y de Naxos con el que se talló media escultura griega, incluida la Venus de Milo, y por eso el monte Zas de Naxos llega a 1.004 metros mientras la isla de al lado es una loma. Antes que los templos están los ídolos cicládicos de brazos cruzados, de hace cinco mil años, que fascinaron a Brancusi y a Modigliani.',
      'Santorini es el borde de una caldera. Los pueblos están construidos justo en el filo, y debajo de la ceniza está Akrotiri, una ciudad de la Edad del Bronce con casas de varias plantas, calles empedradas y red de saneamiento, que se excava desde 1967.',
      'Delos, Patrimonio Mundial desde 1990, fue santuario de Apolo desde al menos el siglo IX antes de Cristo y después puerto franco del Egeo; hoy no vive nadie en ella. Y en 1207 un veneciano, Marco Sanudo, fundó en Naxos un ducado feudal que gobernó las islas más de trescientos años: de ahí vienen los castillos y los apellidos italianos que todavía se oyen.',
      'La fava de Santorini no es haba ni guisante partido, sino la semilla de una leguminosa trepadora que solo se cultiva allí y en siete islotes de alrededor. Las viñas se conducen en cesto, a ras de suelo, para protegerse del viento, y dan un assyrtiko de suelo volcánico. En los islotes cría el halcón de Eleonora, que retrasa la puesta hasta julio para alimentar a los pollos con los pájaros que cruzan el Egeo en migración.',
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
        alt: 'Columnas del Partenón vistas desde abajo',
        rotulo: 'El Partenón',
        pie: 'Quince años de obra, hace dos mil cuatrocientos. Se entra a la apertura, a las ocho: a mediodía el mármol devuelve todo el calor que ha cogido y la roca no tiene una sombra.',
      },
      {
        id: 'cariatides',
        foto: FOTOS.GRECIA_CARIATIDES,
        vertical: true,
        alt: 'Las cariátides del Erecteión sobre la Acrópolis',
        rotulo: 'Las cariátides',
        pie: 'Seis mujeres de mármol sosteniendo el pórtico sur del Erecteión. Las que están en pie son copias; cinco de las originales se ven a cubierto en el Museo de la Acrópolis, y la sexta está en Londres.',
      },
      {
        id: 'herodes',
        foto: FOTOS.GRECIA_HERODES,
        vertical: true,
        alt: 'Las gradas del Odeón de Herodes Ático',
        rotulo: 'El Odeón de Herodes Ático',
        pie: 'Un teatro romano del siglo II en la ladera de la Acrópolis que sigue programando ópera y conciertos cada verano. Si hay función la noche que estamos en Atenas, vamos.',
      },
      {
        id: 'plaka',
        foto: FOTOS.GRECIA_PLAKA,
        vertical: true,
        alt: 'Una calle de Plaka cubierta de sombrillas de colores',
        rotulo: 'Plaka',
        pie: 'El barrio viejo, al pie de la Acrópolis, con las casas que levantaron los canteros de Naxos cuando llegaron a construir la Atenas del rey Otón. Se cena aquí el primer día, andando desde el hotel.',
      },
      {
        id: 'atenas',
        foto: FOTOS.GRECIA_ATENAS,
        vertical: true,
        alt: 'La Acrópolis sobre los tejados de Atenas',
        rotulo: 'Atenas',
        pie: 'Cuatro millones de personas alrededor de una roca de 156 metros. La vista es del Licabeto, que es a donde se sube al atardecer cuando ya se ha bajado de la Acrópolis.',
      },
      {
        id: 'mikonos',
        foto: FOTOS.GRECIA_MIKONOS,
        alt: 'Casas con balcones sobre el agua en la Pequeña Venecia de Míkonos',
        rotulo: 'La Pequeña Venecia',
        pie: 'Una hilera de casas de armadores con los balcones colgados sobre el agua. El callejero de Míkonos se trazó a propósito para despistar a los piratas, y todavía funciona: nadie encuentra la salida a la primera.',
      },
      {
        id: 'molinos',
        foto: FOTOS.GRECIA_MOLINOS,
        vertical: true,
        alt: 'Molino de viento encalado en Míkonos',
        rotulo: 'Los molinos de Kato Mili',
        pie: 'Molieron grano para los barcos que cruzaban el Egeo hasta bien entrado el siglo XX. Están donde están porque ahí pega el meltemi, el viento del norte que en verano no para.',
      },
      {
        id: 'chora',
        foto: FOTOS.GRECIA_CHORA,
        alt: 'Buganvilla sobre una fachada encalada de la Chora de Míkonos',
        rotulo: 'La Chora de Míkonos',
        pie: 'La cal se da cada primavera y el azul de las puertas lo pone cada casa. Fuera de las dos calles comerciales no hay nadie, y ese es el plan: perderse a media tarde, cuando la piedra ya no quema.',
      },
      {
        id: 'oia',
        foto: FOTOS.GRECIA_OIA_CERCA,
        alt: 'Cúpulas azules y campanarios de Oía sobre el mar',
        rotulo: 'Oía',
        pie: 'Las cúpulas son de mampostería encalada y el azul se repinta cada año. El pueblo está construido en el filo de la caldera, y por eso todas las casas miran al mismo sitio.',
      },
      {
        id: 'callejon',
        foto: FOTOS.GRECIA_CALLEJON,
        alt: 'Buganvilla sobre una fachada encalada con contraventanas azules',
        rotulo: 'Los pueblos encalados de las Cícladas',
        pie: 'La cal se da cada primavera y el azul de las contraventanas lo pone cada casa. Se anda por aquí a media tarde, cuando la piedra ya no quema y las puertas se abren para que corra el aire.',
      },
      {
        id: 'terraza',
        foto: FOTOS.GRECIA_TERRAZA,
        alt: 'Terraza encalada con vistas a la caldera de Santorini',
        rotulo: 'Santorini, en el filo de la caldera',
        pie: 'Lo que se ve enfrente es el borde del volcán que reventó hace tres mil quinientos años. La casa está construida justo en el corte, y por eso la terraza cuelga.',
      },
      {
        id: 'navagio',
        foto: FOTOS.GRECIA_NAVAGIO_BARCO,
        vertical: true,
        alt: 'El carguero encallado de Navagio visto desde un barco fondeado',
        rotulo: 'Navagio',
        pie: 'Una cala encerrada entre paredes de doscientos metros a la que solo se llega en barco. El carguero lleva encallado desde 1980. Se entra temprano, antes de que fondeen las excursiones grandes, y se ve así: desde cubierta.',
      },
      {
        id: 'keri',
        foto: FOTOS.GRECIA_KERI,
        vertical: true,
        alt: 'Un arco de roca sobre el agua turquesa en la costa de Zante',
        rotulo: 'Los arcos de Keri',
        pie: 'Al sur de Zante la caliza está agujereada por cuevas y arcos que solo se ven desde el agua. Se entra en barca pequeña, con motor parado, y el azul de dentro es el que da nombre a las cuevas azules.',
      },
      {
        id: 'creta',
        foto: FOTOS.GRECIA_CRETA,
        alt: 'Arena y agua turquesa en una playa de Creta',
        rotulo: 'Creta',
        pie: 'La isla grande, que es casi otro país: montañas de dos mil metros, gargantas que se cruzan andando y un final de viaje sin prisa a pie de agua.',
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
      'Islandia está partida por la mitad. En Thingvellir se camina por dentro de la falla de Almannagjá, que es el borde de la placa norteamericana, con la euroasiática al otro lado del valle. Se separan unos dos centímetros al año.',
      'El Vatnajökull es Patrimonio Mundial desde 2019 por un criterio estrictamente geológico: más de 1.400.000 hectáreas, casi el catorce por ciento del país, con ocho volcanes debajo del hielo. Cuando uno de ellos entra en erupción bajo el glaciar, el deshielo baja de golpe y se lleva por delante lo que encuentra.',
      'La laguna de Jökulsárlón no existía hace un siglo. Empezó a formarse hacia 1935, cuando el glaciar Breiðamerkurjökull inició su retroceso, y desde los años setenta se ha cuadruplicado. Es geología en tiempo real, no un paisaje quieto.',
      'La aurora no se reserva. Se produce cuando el viento solar excita el oxígeno y el nitrógeno entre cien y trescientos kilómetros de altura, y para verla tienen que alinearse dos cosas que van por su cuenta: actividad geomagnética suficiente y cielo abierto. La oficina meteorológica islandesa publica las dos cada día, en una escala de cero a nueve y un mapa de nubes. Por eso se sale cada noche y por eso el viaje dura nueve días.',
      'Thingvellir es además Patrimonio Mundial desde 2004 por otro motivo: allí se reunía el Althingi, la asamblea al aire libre fundada en el año 930, y allí se acordó en el año 1000 la conversión al cristianismo sin llegar a la guerra. Y la institución social del país no es la Laguna Azul, es la piscina geotérmica de barrio, abierta todo el año, con una norma innegociable: ducha completa y sin bañador antes de entrar.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Reikiavik' },
      { etiqueta: 'Cuándo ir', valor: 'De septiembre a abril' },
      { etiqueta: 'Energía renovable', valor: '100 % de la luz' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    galeria: [
      {
        id: 'jokulsarlon',
        foto: FOTOS.ISLANDIA_GLACIAR,
        alt: 'Icebergs flotando en la laguna glaciar de Jökulsárlón',
        rotulo: 'Jökulsárlón',
        pie: 'No existía hace un siglo: empezó a formarse hacia 1935, cuando el glaciar Breiðamerkurjökull inició su retroceso, y desde los años setenta se ha cuadruplicado. Se recorre en lancha entre los bloques de hielo.',
      },
      {
        id: 'reynisfjara',
        foto: FOTOS.ISLANDIA_PLAYA,
        vertical: true,
        alt: 'Los farallones de Reynisdrangar sobre la arena negra de Reynisfjara',
        rotulo: 'Reynisfjara',
        pie: 'Basalto molido por el Atlántico hasta convertirse en arena. Enfrente están los farallones de Reynisdrangar y al lado el cabo de Dyrhólaey. Nunca se da la espalda al agua: las olas de resaca entran mucho más arriba de lo que parece.',
      },
      {
        id: 'seljalandsfoss',
        foto: FOTOS.ISLANDIA_SELJALANDSFOSS,
        alt: 'La cascada de Seljalandsfoss cayendo sobre el valle al atardecer',
        rotulo: 'Seljalandsfoss',
        pie: 'Sesenta metros de caída por el borde de lo que fue la línea de costa antes de que el mar se retirara. Cae desde un saliente, no desde una pared, y por eso se puede rodear.',
      },
      {
        id: 'detras',
        foto: FOTOS.ISLANDIA_DETRAS,
        alt: 'El valle visto desde detrás de la cortina de agua de Seljalandsfoss',
        rotulo: 'Detrás de Seljalandsfoss',
        pie: 'Se entra por un sendero de piedra mojada y se sale por el otro lado. En invierno el suelo se hiela y se cruza con crampones; se vuelve empapado y merece la pena.',
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
      'Santa Sofía se construyó entre 532 y 537 y se consagró el 27 de diciembre de aquel año. La proyectaron Antemio de Tralles e Isidoro de Mileto, que eran matemáticos antes que constructores, y la cúpula se les vino abajo veintiún años después de inaugurarla. La que se ve hoy es la segunda.',
      'La Cisterna Basílica es del mismo año y del mismo emperador: 138 por 65 metros, 336 columnas de nueve metros en doce filas de veintiocho, casi todas reaprovechadas de edificios griegos y romanos anteriores. Topkapi no es un palacio sino una ciudad de patios, y fue la residencia de los sultanes durante casi cuatro siglos.',
      'La Süleymaniye la levantó Mimar Sinan entre 1550 y 1557. Sus mezquitas no son edificios sueltos: son külliye, complejos con medersa, hospital, cocina de pobres y baño. Construir una mezquita era organizar un barrio entero.',
      'Capadocia es uno de los pocos bienes mixtos de la UNESCO, inscrito por el paisaje y por lo que la gente hizo con él. Tres volcanes dejaron la toba, alguien descubrió que se excava con las manos y se endurece al aire, y quedaron más de trescientas sesenta iglesias rupestres de las que solo se visitan unas treinta. En Pamukkale el agua termal baja de la montaña dejando la cal en terrazas, y encima está Hierápolis con una necrópolis de más de dos kilómetros. En Éfeso sigue en pie la fachada de la biblioteca de Celso, del año 117.',
      'El café turco y el sema de los derviches están en la lista de patrimonio inmaterial, y el baklava de Gaziantep fue el primer producto turco con denominación europea protegida. Una advertencia de método: el circuito clásico de Turquía es un maratón de autocar con etapas de seiscientos kilómetros. Con ocho personas se vuelan los tramos largos, y eso convierte tres días de carretera en tres días de destino.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Ankara' },
      { etiqueta: 'Cuándo ir', valor: 'En abril y mayo, y de septiembre a octubre' },
      { etiqueta: 'Pamukkale', valor: 'Patrimonio desde 1988' },
      { etiqueta: 'Plazas', valor: 'De cinco a ocho por salida' },
    ],

    galeria: [
      {
        id: 'santasofia',
        foto: FOTOS.TURQUIA_SANTASOFIA,
        alt: 'Santa Sofía con sus minaretes al atardecer',
        rotulo: 'Santa Sofía',
        pie: 'Cinco años de obra, del 532 al 537, y una cúpula de treinta y un metros que se vino abajo veintiún años después de inaugurarse. La proyectaron Antemio de Tralles e Isidoro de Mileto, que eran matemáticos antes que constructores.',
      },
      {
        id: 'mezquitaazul',
        foto: FOTOS.TURQUIA_ESTAMBUL,
        alt: 'Interior de la Mezquita Azul de Estambul',
        rotulo: 'La Mezquita Azul',
        pie: 'Lo azul son unos veinte mil azulejos de Iznik repartidos por la galería alta. Se entra fuera de las horas de oración, descalzos, y conviene llevar un pañuelo en la mochila.',
      },
      {
        id: 'sultanahmet',
        foto: FOTOS.TURQUIA_SULTANAHMET,
        vertical: true,
        alt: 'Gente cruzando la plaza de Sultanahmet con las mezquitas al fondo',
        rotulo: 'Sultanahmet',
        pie: 'La plaza es el antiguo hipódromo de Constantinopla, y por eso es alargada. Entre Santa Sofía y la Mezquita Azul quedan el obelisco de Teodosio y la Cisterna Basílica, con sus 336 columnas reaprovechadas.',
      },
      {
        id: 'cuerno',
        foto: FOTOS.TURQUIA_CUERNO,
        alt: 'Un vapor cruzando el Cuerno de Oro de noche',
        rotulo: 'El Cuerno de Oro',
        pie: 'La ciudad se entiende desde el agua. El vapor de línea cruza a Üsküdar en veinte minutos por el precio de un billete de metro, y de paso se pasa de Europa a Asia.',
      },
      {
        id: 'doncella',
        foto: FOTOS.TURQUIA_DONCELLA,
        alt: 'La Torre de la Doncella sobre el Bósforo al anochecer',
        rotulo: 'La Torre de la Doncella',
        pie: 'Un islote en mitad del Bósforo que ha sido aduana, faro y cuarentena. Está ahí porque ahí cambia de sentido la corriente, y eso se sabe desde la Antigüedad.',
      },
      {
        id: 'goreme',
        foto: FOTOS.TURQUIA_GOREME,
        vertical: true,
        alt: 'Viviendas excavadas en la toba de Göreme',
        rotulo: 'Göreme',
        pie: 'Tres volcanes dejaron la toba y la gente descubrió que se excava con las manos y se endurece al aire. Quedan más de trescientas sesenta iglesias rupestres, de las que solo se visitan unas treinta.',
      },
      {
        id: 'desayuno',
        foto: FOTOS.TURQUIA_DESAYUNO,
        vertical: true,
        alt: 'Una mesa de desayuno turco en una terraza de Capadocia',
        rotulo: 'El desayuno en Capadocia',
        pie: 'El kahvaltı no es un desayuno, es una mesa: queso blanco, aceitunas, tomate, pepino, menemen, miel con nata y pan recién hecho. Se toma en la terraza del hotel cueva, cuando todavía están bajando los globos.',
      },
      {
        id: 'pamukkale',
        foto: FOTOS.TURQUIA_POZAS,
        vertical: true,
        alt: 'Las pozas turquesa de las terrazas de Pamukkale vistas desde arriba',
        rotulo: 'Pamukkale',
        pie: 'El agua termal baja de la montaña y va dejando la cal en terrazas. Se cruza descalzo por obligación, para no rayar el travertino, y el suelo está caliente.',
      },
      {
        id: 'hierapolis',
        foto: FOTOS.TURQUIA_HIERAPOLIS,
        vertical: true,
        alt: 'Ruinas romanas de Hierápolis sobre Pamukkale',
        rotulo: 'Hierápolis',
        pie: 'Encima de las terrazas hay una ciudad romana entera, con su teatro y una necrópolis de más de dos kilómetros, de los cementerios grecorromanos mejor conservados del Mediterráneo.',
      },
      {
        id: 'efeso',
        foto: FOTOS.TURQUIA_EFESO,
        alt: 'Fachada de la biblioteca de Celso en Éfeso',
        rotulo: 'Éfeso',
        pie: 'Doce mil rollos guardaba la biblioteca de Celso, del año 117, levantada como mausoleo de un gobernador romano. Se entra por la puerta alta para bajar andando la calle de los Curetes.',
      },
      {
        id: 'egeo',
        foto: FOTOS.TURQUIA_EGEO,
        vertical: true,
        alt: 'Un pueblo de casas bajas sobre el agua en la costa del Egeo',
        rotulo: 'La costa del Egeo',
        pie: 'Después de Éfeso se baja al mar. Es la Turquía de las casas de pescadores, el pulpo a la brasa y el rakı con hielo, a media hora de un yacimiento que recibe dos millones de visitas al año.',
      },
      {
        id: 'esmirna',
        foto: FOTOS.TURQUIA_ESMIRNA,
        vertical: true,
        alt: 'Barcas de madera en la orilla de Esmirna al atardecer',
        rotulo: 'Esmirna',
        pie: 'La última mañana es aquí: el bazar de Kemeraltı, que lleva abierto desde el siglo XVII, y el paseo del Kordon, donde la ciudad entera sale a andar cuando baja el sol.',
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
        vertical: true,
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
      'Petra la levantaron los nabateos, que eran caravaneros y sobre todo ingenieros del agua. Por las paredes del Siq corren las canalizaciones talladas que abastecían la ciudad, y alrededor hay presas para desviar las crecidas. Es Patrimonio Mundial desde 1985 y se ha excavado una parte pequeña de lo que hay.',
      'Wadi Rum es Patrimonio Mundial mixto desde 2011, por el paisaje y por lo que está escrito en él: veinticinco mil petroglifos y veinte mil inscripciones catalogadas, con doce mil años de ocupación continua. Se duerme en campamento y la arena es de verdad naranja.',
      'Jerash es de las ciudades romanas de provincias mejor conservadas que quedan en pie, con su foro ovalado y su calle de columnas. En Madaba está el mapa en mosaico de Tierra Santa del siglo VI, entre setecientas mil y ochocientas mil teselas, que es el documento cartográfico más antiguo que se conserva de la región.',
      'El mar Muerto está a cuatrocientos treinta y cinco metros bajo el nivel del mar, es el punto más bajo de la tierra firme del planeta, tiene nueve veces la sal del océano y baja un metro al año.',
      'El mansaf, cordero cocido en yogur fermentado sobre pan y arroz, está en la lista de patrimonio inmaterial de la UNESCO: se come con la mano derecha y de una fuente común, y es la comida con la que se recibe a alguien. En la reserva de Shaumari se reintrodujo el oryx de Arabia, que llegó a estar extinguido en libertad.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Amán' },
      { etiqueta: 'Cuándo ir', valor: 'De marzo a mayo y de septiembre a noviembre' },
      { etiqueta: 'Petra', valor: 'Patrimonio desde 1985' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    galeria: [
      {
        id: 'siq',
        foto: FOTOS.JORDANIA_SIQ,
        vertical: true,
        alt: 'El Tesoro de Petra asomando al final del desfiladero del Siq',
        rotulo: 'El Siq',
        pie: 'Un kilómetro y medio de desfiladero con las canalizaciones nabateas talladas en la pared, las que traían el agua a la ciudad. Al final se abre de golpe, y lo que hay enfrente es el Tesoro.',
      },
      {
        id: 'tesoro',
        foto: FOTOS.JORDANIA_TESORO,
        alt: 'La fachada del Tesoro de Petra excavada en la roca rosa',
        rotulo: 'El Tesoro de Petra',
        pie: 'Cuarenta metros de fachada excavados en la arenisca en el siglo I. No es un edificio: es una pared vaciada. Patrimonio Mundial desde 1985, y de la ciudad entera solo se ha excavado una parte pequeña.',
      },
      {
        id: 'monasterio',
        foto: FOTOS.JORDANIA_MONASTERIO,
        alt: 'El Monasterio de Petra al final de la escalera tallada',
        rotulo: 'El Monasterio (Ad Deir)',
        pie: 'Ochocientos escalones tallados por encima de la ciudad, y arriba una fachada aún mayor que la del Tesoro. Casi nadie sube, y por eso hay que subir. Se hace a primera hora o al final del día.',
      },
      {
        id: 'wadirum',
        foto: FOTOS.JORDANIA_WADIRUM,
        alt: 'Las montañas de Wadi Rum sobre la arena naranja',
        rotulo: 'Wadi Rum',
        pie: 'Patrimonio Mundial mixto desde 2011, por el paisaje y por lo que está escrito en él: veinticinco mil petroglifos y veinte mil inscripciones catalogadas, con doce mil años de ocupación continua.',
      },
      {
        id: 'arco',
        foto: FOTOS.JORDANIA_ARCO,
        alt: 'Un arco de roca natural sobre el desierto de Wadi Rum',
        rotulo: 'Los arcos de Wadi Rum',
        pie: 'Puentes de roca que la erosión ha dejado en pie. Se sube a alguno a pie, sin cuerdas, con el conductor beduino delante enseñando dónde pisar. Debajo se duerme en campamento.',
      },
      {
        id: 'aman',
        foto: FOTOS.JORDANIA_AMAN,
        vertical: true,
        alt: 'Las casas blancas de Amán subiendo por las colinas',
        rotulo: 'Amán',
        pie: 'Blanca, en cuesta y mucho más grande de lo que nadie espera. Arriba está la ciudadela, con el templo de Hércules y el palacio omeya, y abajo el teatro romano encajado entre los edificios.',
      },
      {
        id: 'especias',
        foto: FOTOS.JORDANIA_ZOCO,
        vertical: true,
        alt: 'Cuencos de especias en un puesto del mercado',
        rotulo: 'El mercado de especias de Amán',
        pie: 'Zaatar, sumac, flor de hibisco y canela en rama. Se compra donde compran los de allí, en el centro, y se cena mansaf, que está en la lista de patrimonio inmaterial de la UNESCO.',
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
      'El Namib es el desierto más antiguo de la Tierra, unos cincuenta y cinco millones de años, y el único desierto costero cuyas dunas se alimentan de la niebla que trae la corriente de Benguela. El mar de arena es Patrimonio Mundial desde 2013. Solo la región de Sossusvlei ocupa ochenta y un mil kilómetros cuadrados de llanuras, salinas y montañas de arena.',
      'En Deadvlei hay acacias muertas hace novecientos años que siguen de pie. El aire es tan seco que no han llegado a pudrirse.',
      'Etosha se organiza alrededor de una llanura salina que se ve desde el espacio. En estación seca la fauna depende de las charcas, y eso convierte el safari en una cuestión de hora y de paciencia: las tres primeras horas del día y el final de la tarde. Entre las doce y las tres no se mueve nada, y quien diga lo contrario no ha estado.',
      'En Kunene sobrevive la última población de rinoceronte negro que vive fuera de un área protegida y sin vallas, en veinticinco mil kilómetros cuadrados. Por ahí andan también los elefantes del desierto, que se buscan con rastreador local y no siempre aparecen, y los leones del Hoanib, de los que un estudio documentó que tres leonas sacaban del mar el ochenta y seis por ciento de lo que comían.',
      'Twyfelfontein es Patrimonio Mundial desde 2007 y reúne más de dos mil grabados rupestres. Namibia es el país más joven de África, independiente desde 1990, y el segundo menos densamente poblado del mundo después de Mongolia: tres millones de habitantes y 3,7 por kilómetro cuadrado. Se conduce por pista de grava, a sesenta o setenta por hora de media real, y nunca de noche.',
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
        alt: 'Acacias secas sobre el barro blanco de Deadvlei',
        rotulo: 'Deadvlei',
        pie: 'Acacias muertas hace novecientos años que nunca llegaron a pudrirse: el aire es tan seco que siguen de pie. Se llega andando, 1,1 kilómetros de arena blanda, antes de las nueve.',
      },
      {
        id: 'etosha',
        foto: FOTOS.NAMIBIA_SAFARI,
        alt: 'Cebras cruzando una pista de grava en el parque de Etosha',
        rotulo: 'Etosha',
        pie: 'El parque se organiza alrededor de una llanura salina que se ve desde el espacio. En seco la fauna depende de las charcas, así que el safari es cuestión de hora: las tres primeras del día y el final de la tarde.',
      },
      {
        id: 'damaraland',
        foto: FOTOS.NAMIBIA_FLORA,
        alt: 'Dunas rojas y hierba amarilla al pie de las montañas del Damaraland',
        rotulo: 'Damaraland',
        pie: 'Montañas volcánicas, bosque petrificado y los grabados de Twyfelfontein, Patrimonio Mundial desde 2007. Aquí sobrevive la última población de rinoceronte negro sin vallas del continente.',
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
    titular: 'El Atlas por dentro, no el zoco de siempre',
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
      'Nara fue capital entre 710 y 794 y el Todai-ji nació como un proyecto político: un templo colosal para un budismo de Estado. El Daibutsuden que se ve hoy es la reconstrucción de época Edo, con siete vanos en lugar de los once originales, y aun así sigue siendo uno de los mayores edificios de madera del mundo.',
      'La capital se trasladó a Kioto en 794 y allí se quedó mil años. Cuando Edo le quitó el poder político, Kioto conservó el prestigio ritual y los oficios, y de ahí vienen los talleres que siguen abiertos: el teñido yuzen, los cuchillos forjados, la cerámica.',
      'Koyasan lo fundó Kukai en 816, cuando el emperador Saga le dio la montaña para el monasterio Shingon. Se duerme en un shukubo, se cena shojin ryori sobre el tatami y se puede asistir al oficio del amanecer. El Okunoin, con sus tumbas entre cedros de siglos, es un sitio de noche con linterna y otro completamente distinto a plena luz.',
      'En 1868 la Restauración Meiji separó por decreto el sintoísmo y el budismo y desmontó buena parte de los recintos mixtos. Que en Koyasan y en Kumano todavía se lea la mezcla es excepcional, y es parte de la razón por la que están en la lista de la UNESCO desde 2004.',
      'Los cerezos de Kioto abren de media el 26 de marzo y llegan a plena floración el 4 de abril, según la serie de treinta años del servicio meteorológico japonés, pero la fecha se mueve casi dos semanas de un año a otro: se puede apuntar, no prometer. Los ciervos de Nara descienden de la manada del santuario de Kasuga y solo se les puede dar la galleta autorizada, de una en una y sin levantarla en el aire.',
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
        id: 'fushimi',
        foto: FOTOS.JAPON_INARI,
        alt: 'El túnel de puertas torii rojas de Fushimi Inari',
        rotulo: 'Fushimi Inari',
        pie: 'Miles de puertas rojas monte arriba, donadas una a una por comercios y familias, con el nombre del donante escrito en la cara de dentro. Vacío se ve solo a una hora: a las siete de la mañana.',
      },
      {
        id: 'nara',
        foto: FOTOS.JAPON_NARA,
        alt: 'Una pagoda de cinco pisos reflejada en el estanque del parque de Nara',
        rotulo: 'Nara',
        pie: 'La capital anterior a Kioto, a cuarenta y cinco minutos en tren. Aquí está el Daibutsuden del Todai-ji, uno de los mayores edificios de madera del mundo aun reconstruido a siete vanos de los once originales.',
      },
      {
        id: 'ema',
        foto: FOTOS.JAPON_EMA,
        vertical: true,
        alt: 'Tablillas de madera colgadas a la entrada de un santuario de Kioto',
        rotulo: 'Los ema de Kioto',
        pie: 'Tablillas de madera donde se escribe una petición y se cuelgan a la entrada del santuario. Se queman en fin de año, todas a la vez. Kioto tiene más de mil seiscientos templos budistas y cuatrocientos santuarios sintoístas.',
      },
      {
        id: 'pontocho',
        foto: FOTOS.JAPON_NOCHE,
        alt: 'Un callejón de Kioto con faroles rojos encendidos',
        rotulo: 'Pontochō',
        pie: 'El callejón de madera entre el río Kamo y Kiyamachi donde se cena de verdad: locales de siete asientos, carta en japonés y reserva por teléfono. Se entra con alguien de allí o no se entra.',
      },
      {
        id: 'cerezos',
        foto: FOTOS.JAPON_CEREZOS,
        vertical: true,
        alt: 'Cerezos en flor sobre un puente rojo y un estanque',
        rotulo: 'Los cerezos de Kansai',
        pie: 'En Kioto abren de media el 26 de marzo y llegan a plena floración el 4 de abril, según la serie de treinta años del servicio meteorológico japonés. La fecha se mueve casi dos semanas de un año a otro: se puede apuntar, no prometer.',
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
      'El norte de la India se recorre siguiendo a los mogoles. Akbar levantó Fatehpur Sikri entre 1571 y 1585 y la abandonó catorce años después por falta de agua. Fue el emperador de la síntesis: se inventó una religión propia y sentó en su corte a jesuitas portugueses a discutir con brahmanes y musulmanes.',
      'El Taj Mahal se construyó entre 1632 y 1653 y cierra el ciclo. Shah Jahan acabó depuesto por su hijo Aurangzeb y preso en el fuerte de Agra, desde cuyo mirador se ve el mausoleo de su mujer. La cúpula mide cincuenta y ocho metros según la ficha de la UNESCO, no los setenta y tres que se repiten por todas partes.',
      'Jaipur la fundó Jai Singh II entre 1727 y 1731 siguiendo el Vastu Shastra, con la ciudad trazada en cuadrícula antes de construirla, y levantó los observatorios del Jantar Mantar: instrumentos astronómicos de obra, a escala de edificio, que siguen midiendo.',
      'Khajuraho lo levantaron los Chandela entre los años 950 y 1050, en el apogeo de su poder. Y Delhi enseña otras capas: el Qutb Minar del sultanato, construido con piedra de templos hindúes desmontados, y la Nueva Delhi que proyectaron Lutyens y Baker y se inauguró en 1931.',
      'Al final está Benarés, que no es un monumento sino una ciudad haciendo lo que hace desde hace milenios. Los ghats se ven al amanecer desde una barca, cuando la ciudad entera baja al río, y por la tarde está el aarti. Es donde este viaje se decide.',
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
        vertical: true,
        alt: 'La fachada de arenisca rosa del Hawa Mahal de Jaipur',
        rotulo: 'El Hawa Mahal',
        pie: 'Novecientas cincuenta y tres ventanas caladas en arenisca rosa para que las mujeres de la corte vieran la calle sin ser vistas. La fachada mira al este: se fotografía a primera hora.',
      },
      {
        id: 'jaipur',
        foto: FOTOS.INDIA_JAIPUR,
        alt: 'Caballos enjaezados y rickshaws delante del Hawa Mahal, en Jaipur',
        rotulo: 'Jaipur',
        pie: 'Jai Singh II la trazó en cuadrícula entre 1727 y 1731, siguiendo el Vastu Shastra, antes de levantar una sola casa. Aquí están también los instrumentos astronómicos de obra del Jantar Mantar.',
      },
      {
        id: 'delhi',
        foto: FOTOS.INDIA_CALLE,
        vertical: true,
        alt: 'Un rickshaw amarillo en un callejón estrecho de la ciudad vieja',
        rotulo: 'La vieja Delhi',
        pie: 'Chandni Chowk y los callejones de alrededor no admiten coche: se entra en rickshaw y se sigue a pie. Es el segundo día del viaje y el primer choque, y por eso va al principio y no al final.',
      },
      {
        id: 'ganesha',
        foto: FOTOS.INDIA_GANESHA,
        vertical: true,
        alt: 'Una figura de Ganesha cubierta de guirnaldas y ofrendas',
        rotulo: 'Ganesha',
        pie: 'Oro, perlas y guirnaldas que se cambian cada mañana. No es un museo: es un altar en uso, y en el norte hay uno en cada esquina. Se entra descalzo y sin prisa.',
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
    titular: 'De norte a sur, en tren y sin prisa',
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
      'Costa Rica cabe entre dos océanos con ciento veinte kilómetros de tierra y tiene una cordillera volcánica en medio. De ahí salen microclimas que cambian en media hora de coche: bosque nuboso arriba, bosque lluvioso en el Pacífico sur y llanura de canales en el Caribe.',
      'Corcovado no es un parque al que se entra: es un permiso. Desde 2014 el guía certificado es obligatorio y el cupo diario de la estación Sirena se agota semanas antes. A cambio, es de los pocos sitios donde conviven las cuatro especies de monos del país, el tapir y el guacamayo rojo.',
      'En Tortuguero anida la tortuga verde entre junio y noviembre. Las crías salen unos cuarenta y cinco a sesenta días después de cada puesta, así que el máximo de nacimientos cae entre septiembre y noviembre. Se llega en lancha por los canales o en avioneta, porque carretera no hay.',
      'El Arenal estuvo en erupción continua desde 1968, pero el periodo eruptivo terminó en diciembre de 2010. Lo que hay ahora es el cono, los puentes colgantes por encima del dosel y las termales que calienta el propio volcán. Quien vaya buscando lava se va a llevar un chasco, y preferimos decirlo antes de que reserve.',
      'El país abolió el ejército en 1948 y puso ese dinero en educación y en salud. No es una anécdota para folletos: es la razón estructural de que exista un modelo de conservación que hoy cubre más de la cuarta parte del territorio. Del café vienen las casas del valle central y el Teatro Nacional de San José, inaugurado en 1897. Y se desayuna gallo pinto, que en el Caribe se hace con leche de coco y sale más oscuro y más dulce.',
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
        alt: 'El cono del volcán Arenal entre palmeras',
        rotulo: 'El volcán Arenal',
        pie: 'Estuvo cuarenta y dos años en erupción continua, de 1968 a 2010. Ya no hay lava, y lo decimos antes de que nadie reserve: hay un cono perfecto, termales calentadas por el propio volcán y noches sin una nube.',
      },
      {
        id: 'puentes',
        foto: FOTOS.COSTARICA_PUENTES,
        vertical: true,
        alt: 'Puente colgante sobre el dosel del bosque del Arenal',
        rotulo: 'Los puentes colgantes del Arenal',
        pie: 'Cruzan a la altura de las copas, que es donde pasa casi todo: tucanes, monos y perezosos viven arriba, no abajo. Se anda despacio y en silencio, y el naturalista va delante con el telescopio.',
      },
      {
        id: 'fortuna',
        foto: FOTOS.COSTARICA_FORTUNA,
        alt: 'Una catarata cayendo en una poza de agua turquesa dentro de la selva',
        rotulo: 'La catarata de La Fortuna',
        pie: 'Setenta metros de caída en una garganta del antiguo cauce del Arenal. Se bajan quinientos escalones hasta la poza y se sube otra vez: esa es toda la letra pequeña. El agua sale de la roca filtrada por el volcán.',
      },
      {
        id: 'tucan',
        foto: FOTOS.COSTARICA_PICO,
        alt: 'Tucán de pico castaño posado en una rama',
        rotulo: 'El tucán de pico castaño',
        pie: 'Vive en las tierras bajas del Caribe y se le oye antes de verlo. En Monteverde se busca además el quetzal, que baja a los aguacatillos entre febrero y julio.',
      },
      {
        id: 'tortuguero',
        foto: FOTOS.COSTARICA_TORTUGA,
        alt: 'Una cría de tortuga verde cruzando la arena negra de Tortuguero',
        rotulo: 'Tortuguero',
        pie: 'Se llega en lancha por los canales o en avioneta, porque carretera no hay. La tortuga verde anida de junio a noviembre y las crías salen unos cuarenta y cinco a sesenta días después de cada puesta.',
      },
      {
        id: 'cano',
        foto: FOTOS.COSTARICA_CANO,
        alt: 'Agua turquesa y un islote boscoso frente a la costa',
        rotulo: 'La isla del Caño',
        pie: 'Reserva biológica a veinte kilómetros de Osa, con una de las mejores visibilidades del Pacífico costarricense. Se hace snorkel el penúltimo día y no se toca nada: el fondo es coral vivo.',
      },
      {
        id: 'osa',
        foto: FOTOS.COSTARICA_COSTA,
        alt: 'Playa de la península de Osa con la selva llegando hasta la arena',
        rotulo: 'La península de Osa',
        pie: 'El bosque baja hasta la arena y no hay una sola torre. Desde aquí se entra en Corcovado, que no es un parque al que se pasa sino un permiso: guía certificado obligatorio y cupo diario en la estación Sirena.',
      },
    ],

    // Ventana: estación seca en el Pacífico de diciembre a abril. Septiembre y
    // octubre son los meses más lluviosos justo en Osa y el Pacífico, que es
    // donde está Corcovado.
    salidas: {
      temporada: 'De diciembre a abril, y en julio',
      porque:
        'La estación seca del Pacífico, que es donde están Corcovado y la costa. En julio hay un paréntesis, el veranillo, que además cae en plena temporada de anidación en Tortuguero. Septiembre y octubre los dejamos fuera: es cuando más llueve justo por donde pasa la ruta.',
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
      'Son ciento dieciocho islas y atolones, de los que solo sesenta y siete están habitados, repartidos en cinco archipiélagos. Toda la tierra firme junta suma 4.167 kilómetros cuadrados, menos que la provincia de Guipúzcoa, esparcidos por dos millones y medio de kilómetros cuadrados de Pacífico. Doscientas setenta mil personas, y una sola ciudad.',
      'Las islas altas y los atolones son el mismo sitio en dos momentos distintos. Un volcán emerge, se rodea de coral y luego se hunde bajo su propio peso; cuando la montaña desaparece bajo el agua, el anillo de coral sigue creciendo hacia la luz y lo que queda es el atolón.',
      'Taputapuatea, en Raiatea, es Patrimonio Mundial desde 2017: 2.124 hectáreas y mil años de civilización maohi. De aquí salieron las canoas que poblaron el triángulo polinesio, y el paso de Te Ava Moa es por donde entraban las que volvían de Hawái y de Nueva Zelanda.',
      'En el paso sur de Fakarava, el CNRS ha contado cerca de setecientos tiburones grises de arrecife en un canal de un kilómetro: la mayor concentración conocida del planeta. De treinta y ocho ejemplares marcados, solo dos se fueron en seis meses. Están ahí porque en la luna llena de junio se juntan unos dieciocho mil meros a desovar.',
      'El rahui es la veda tradicional: se cierra una zona de pesca, se deja descansar y se reabre. En 2016 se aplicó a los dos millones y medio de kilómetros cuadrados de la zona económica exclusiva del país. No es una política importada, es como se ha gestionado este océano desde siempre. Las ballenas jorobadas pasan de julio a noviembre, y la ley marca cien metros de distancia y tres nudos para los barcos autorizados.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Papeete' },
      { etiqueta: 'Cuándo ir', valor: 'De mayo a octubre' },
      { etiqueta: 'Islas', valor: '118, 67 habitadas' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    galeria: [
      {
        id: 'fakarava',
        foto: FOTOS.POLINESIA_TIBURONES,
        alt: 'Una apneísta rodeada de tiburones de arrecife en aguas transparentes',
        rotulo: 'El paso sur de Fakarava',
        pie: 'El CNRS ha contado aquí cerca de setecientos tiburones grises de arrecife en un canal de un kilómetro: la mayor concentración conocida del planeta. Los titulados bucean a la deriva y el resto lo ve en apnea con guía.',
      },
      {
        id: 'taputapuatea',
        foto: FOTOS.POLINESIA_MOTUS,
        vertical: true,
        alt: 'Motus de arena y cocoteros sobre el anillo de coral',
        rotulo: 'Los motus de Taha’a',
        pie: 'Lenguas de arena y cocoteros sobre el anillo de coral, separadas del agua abierta por la barrera. Entre dos de ellos, Tautau y Maharare, se deriva en apnea por el Jardín de Coral.',
      },
      {
        id: 'arrecife',
        foto: FOTOS.POLINESIA_ARRECIFE,
        alt: 'Coral vivo y peces de arrecife bajo el agua',
        rotulo: 'El Jardín de Coral de Taha’a',
        pie: 'Poco más de un metro de agua sobre coral vivo, y la corriente hace el trabajo. Se entra con licra larga, calzado de agua y crema mineral, porque la química corriente mata lo que se viene a ver.',
      },
      {
        id: 'apnea',
        foto: FOTOS.POLINESIA_APNEA,
        alt: 'Dos apneístas bajo una bóveda de coral con la luz entrando desde arriba',
        rotulo: 'La apnea en Fakarava',
        pie: 'Dos días de iniciación antes de bajar aquí. No hace falta título ni botella: se baja con la corriente entrante, se mira y se sube. Es la manera de ver el paso sin equipo y sin ruido.',
      },
      {
        id: 'moorea',
        foto: FOTOS.POLINESIA_PLAYA,
        vertical: true,
        alt: 'Playa de arena blanca y cocoteros inclinados en Moorea',
        rotulo: 'Moorea',
        pie: 'Sesenta kilómetros de circunferencia, dos bahías y el Rotui en medio. En el lagón hay rayas látigo y tiburones de puntas negras en un metro de agua, y de julio a noviembre pasan las ballenas jorobadas.',
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
    titular: 'La isla sur, de Wanaka a los fiordos',
    entradilla:
      'La isla sur entera, de Wanaka a los fiordos. Son tres semanas largas y estamos viendo cómo hacerlas caber en dos.',
    pistas: ['nueva zelanda', 'nuevazelanda', 'wanaka', 'queenstown', 'milford', 'auckland'],
  },
  {
    id: 'australia',
    proximamente: true,
    nombre: 'Australia',
    continente: 'Oceanía',
    titular: 'El centro rojo contado por quien vive en él',
    entradilla:
      'El centro rojo y el arrecife, con comunidades aborígenes que llevan la visita ellas mismas. Es la parte que estamos cerrando.',
    pistas: ['australia', 'uluru', 'sidney', 'sydney', 'cairns', 'tasmania'],
  },
  {
    id: 'mexico',
    proximamente: true,
    nombre: 'México',
    continente: 'América',
    titular: 'Oaxaca en noviembre y el Yucatán de tierra adentro',
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
      'El plano de Nueva York no es casual. El Commissioners Plan de 1811 impuso la retícula sobre casi toda la isla al norte de Houston Street: doce avenidas, ciento cincuenta y cinco calles numeradas y casi ninguna plaza. Broadway la cruza en diagonal porque es anterior a ella: era un camino.',
      'Entre 1890 y 1940 la ciudad inventó el rascacielos moderno. El Flatiron en 1902, el Woolworth en 1913, el Chrysler en 1930, con la aguja de acero inoxidable montada en secreto dentro del edificio para ganar la carrera de altura, y el Empire State. Y no se levantaron donde la roca era mejor: que no haya torres entre Canal y la calle 14 es un asunto económico, no geológico, por mucho que se repita lo contrario.',
      'Ellis Island funcionó del 1 de enero de 1892 a noviembre de 1954 y por ella pasaron más de doce millones de personas. En 1907, más de un millón en un solo año. Se rechazó a cerca del dos por ciento.',
      'La ciudad se ve por barrios y no por monumentos: Harlem con su misa de gospel del domingo y el Apollo, el Lower East Side y el museo del Tenement, el Village con su plano medieval anterior a la cuadrícula, y Queens, que es el distrito con más diversidad lingüística del mundo. El ferry de Staten Island es gratis, funciona las veinticuatro horas y da la mejor vista de la bahía.',
      'Se come bagel hervido antes de hornear con salmón curado, pastrami cortado a cuchillo en una casa que abrió en 1888, y arroz con pollo de un carrito de la calle, que es el almuerzo real de media ciudad. Vamos en otoño por dos motivos: el follaje de Central Park cae entre finales de octubre y la primera semana de noviembre, y en la otra costa mayo y junio amanecen tapados casi todos los días.',
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
        alt: 'El puente de Manhattan encuadrado entre almacenes de ladrillo en Dumbo',
        rotulo: 'Dumbo',
        pie: 'Una calle de adoquines entre almacenes de ladrillo y, al fondo, el puente de Manhattan encajado entre dos edificios. Se llega en metro y se vuelve a pie por el puente de Brooklyn al atardecer.',
      },
      {
        id: 'manhattan',
        foto: FOTOS.EEUU_MANHATTAN,
        alt: 'El sur de Manhattan visto desde el East River',
        rotulo: 'Manhattan desde el East River',
        pie: 'Entre 1890 y 1940 aquí se inventó el rascacielos moderno. El hueco que se ve en mitad de la isla no es por la roca, como se repite siempre: es por dónde estaba el dinero.',
      },
      {
        id: 'central',
        foto: FOTOS.EEUU_CENTRAL,
        alt: 'Barcas de remos en el lago de Central Park',
        rotulo: 'Central Park',
        pie: 'No es un parque dentro de la ciudad: la ciudad creció a su alrededor. Se alquila una barca en el Loeb Boathouse, y el follaje cae entre finales de octubre y la primera semana de noviembre.',
      },
      {
        id: 'libertad',
        foto: FOTOS.EEUU_LIBERTAD,
        vertical: true,
        alt: 'La Estatua de la Libertad vista desde el sur',
        rotulo: 'La Estatua de la Libertad',
        pie: 'Se sube al pedestal con billete reservado, y al lado está Ellis Island, que funcionó del 1 de enero de 1892 a noviembre de 1954. Por allí pasaron más de doce millones de personas; en 1907, más de un millón en un solo año.',
      },
      {
        id: 'midtown',
        foto: FOTOS.EEUU_TAXI,
        alt: 'Un taxi amarillo y vapor saliendo del asfalto en Midtown',
        rotulo: 'Midtown',
        pie: 'El vapor sale de la red que calienta media ciudad desde 1882 y que sigue funcionando bajo el asfalto. Es lo más neoyorquino que hay y casi nadie sabe lo que es.',
      },
      {
        id: 'times',
        foto: FOTOS.EEUU_TIMES_SQUARE,
        alt: 'Las pantallas encendidas de Times Square de noche',
        rotulo: 'Times Square',
        pie: 'Una vez, de noche, y ya está. Las pantallas consumen lo que un pueblo entero y la plaza recibe unas trescientas mil personas al día. Se ve, se entiende y se sale hacia el Village a cenar.',
      },
      {
        id: 'coney',
        foto: FOTOS.EEUU_CONEY,
        vertical: true,
        alt: 'El puesto de perritos calientes de Coney Island',
        rotulo: 'Coney Island',
        pie: 'Una hora de metro y merece la pena: el paseo de tablas, la torre del paracaídas, la noria de 1920 y el puesto que abrió en 1916. El Nueva York de domingo.',
      },
      {
        id: 'boardwalk',
        foto: FOTOS.EEUU_BOARDWALK,
        alt: 'El paseo de tablas y la torre del paracaídas de Coney Island',
        rotulo: 'El paseo de Coney Island',
        pie: 'La torre del paracaídas es de la Exposición Universal de 1939 y ya no funciona: se quedó ahí, de faro. Debajo, tres kilómetros de tablas y una playa donde se baña media Brooklyn.',
      },
      {
        id: 'hollywood',
        foto: FOTOS.EEUU_HOLLYWOOD,
        vertical: true,
        alt: 'El cartel de Hollywood en la ladera de las colinas',
        rotulo: 'El cartel de Hollywood',
        pie: 'Se puso en 1923 y decía Hollywoodland: era el anuncio de una promoción inmobiliaria. Se ve de cerca desde el Griffith Observatory, que es donde se sube la última mañana del viaje.',
      },
      {
        id: 'venice',
        foto: FOTOS.EEUU_ANGELES,
        alt: 'Palmeras y fachadas bajas en Venice Beach, Los Ángeles',
        rotulo: 'Venice Beach',
        pie: 'El último tramo del viaje cambia de costa: sin centro, en coche y con el Pacífico a media hora. Vamos en otoño porque en mayo y junio esa costa amanece tapada casi todos los días.',
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

// Los destinos que todavía no hemos abierto. Es la única lista de la que
// tiran el catálogo y el índice, para que no haya dos versiones de la verdad.
export const DESTINOS_PROXIMAMENTE = DESTINOS.filter(({ proximamente }) => proximamente)

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
