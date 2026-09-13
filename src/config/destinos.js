// Los destinos, como los plantea NUBA: cada uno es una ficha con su
// continente, su fotografía y su entradilla, y tiene su propia página.
//
// El modelo de la API solo guarda un campo `destino` de texto libre
// («Costa amalfitana, Italia»), así que aquí está la tabla que lo traduce
// a un destino de verdad, igual que hacemos con las siluetas de los mapas.

import { FOTOS, TONOS } from '@/config/constantes'
import { contienePalabra } from '@/formato'

export const DESTINOS = [
  {
    id: 'italia',
    nombre: 'Italia',
    continente: 'Europa',
    foto: FOTOS.PORTADA,
    fotoAlt: 'Positano al atardecer sobre el mar',
    titular: 'Tres viajes y tres Italias',
    entradilla:
      'La costa amalfitana en mayo, los cinco pueblos de Liguria a pie en junio y el campo toscano en octubre. No se recorre entera: se elige una y se hace bien.',
    // Ventana: los ferris de la Costiera solo navegan de finales de marzo a
    // finales de octubre, los senderos de las Cinque Terre se andan mal con
    // calor y la Val d'Orcia pasa de los treinta y cinco grados en agosto.

    // La historia del sitio. Fuentes:
    //  · Costa Amalfitana y Val d'Orcia (Wikipedia), para las declaraciones
    //    de la Unesco, los municipios y las cifras de la SS163
    //  · la ficha 826 de la lista del Patrimonio Mundial, para la inscripción
    //    de Portovenere, las Cinque Terre y las islas
    //  · parks.it y el Parco Nazionale delle Cinque Terre, para la superficie
    //    del parque y los kilómetros de muro de piedra seca
    //  · el Parco Naturale Regionale di Portovenere, para las fechas de la
    //    iglesia de San Pedro
    //  · tempiosanbiagio.it, para la obra de Sangallo el Viejo en Montepulciano
    //  · el folleto de Italia 2026 de Viajes El Corte Inglés
    historia: [
      'Italia no se recorre entera, y por eso aquí son tres viajes y no uno. La costa amalfitana, los cinco pueblos de Liguria y el campo toscano están a cientos de kilómetros unos de otros y piden cosas distintas: barco, sendero y carretera de curvas. Lo que comparten es la manera de estar hechos, que es la de un sitio donde el paisaje lo levantó alguien a mano y lleva siglos sosteniéndose.',
      'La costa amalfitana es la cara sur de la península sorrentina: de cero a 1.444 metros en poco más de cinco kilómetros, y por eso los pueblos no están junto al mar sino metidos en la desembocadura de los barrancos. Es Patrimonio Mundial desde 1997, y no como monumento sino como paisaje cultural: once mil doscientas hectáreas de bancales de limonero sobre muros de piedra seca. Amalfi fue la primera de las repúblicas marineras, antes que Pisa, Génova y Venecia, y por allí entró en Europa el papel hecho a mano. A una hora quedan Herculano, Pompeya y Paestum.',
      'Las Cinque Terre son cinco pueblos en quince kilómetros de costa ligur, y ninguno está donde estaría si hubiera podido elegir: Monterosso ocupa la única playa, Vernazza el único puerto natural, y Corniglia ni siquiera baja, se queda a cien metros de altura. Entraron en la lista de la Unesco el mismo año, 1997, junto con Portovenere y las islas Palmaria, Tino y Tinetto. Encima se creó en 1999 el parque nacional más pequeño de Italia, 3.860 hectáreas, y la cifra que lo explica todo está en los muros: unas dos mil hectáreas abancaladas sostenidas por 6.729 kilómetros de piedra seca colocada sin mortero. Cuando se abandona un bancal, el agua se lleva la ladera, y la riada de octubre de 2011 enterró Vernazza y Monterosso en barro.',
      'La Toscana es lo contrario de la costa: allí el paisaje se pintó antes de existir. Los fondos del Quattrocento son estas colinas, y las colinas se ordenaron después a imagen de los cuadros, con el ciprés marcando el camino. La Val d\'Orcia es Patrimonio Mundial desde 2004 por eso mismo, como paisaje cultural. Florencia cerró la cúpula de Brunelleschi en 1436 sin cimbra y sigue siendo la mayor de fábrica del mundo; Siena se quedó gótica porque la peste de 1348 se llevó a más de media ciudad y paró la ampliación de la catedral; y el Chianti lleva el gallo negro en el cuello de la botella desde que Cosme III delimitó la zona en 1716.',
      'Los tres se hacen en la misma ventana, primavera y principio de otoño, y por el mismo motivo: en agosto la carretera de la Costiera se colapsa, el Sentiero Azzurro se anda en fila india con treinta grados y la Val d\'Orcia pasa de los treinta y cinco. En mayo el mar ya se baña; en octubre está la vendimia y se puede andar a mediodía.',
    ],
    datos: [
      { etiqueta: 'Capital', valor: 'Roma' },
      { etiqueta: 'Cuándo ir', valor: 'De mayo a junio y en octubre' },
      { etiqueta: 'Patrimonio', valor: 'Amalfi y Cinque Terre, desde 1997' },
      { etiqueta: 'Plazas', valor: 'De cinco a ocho por salida' },
    ],
    galeria: [
      {
        id: 'pompeya',
        foto: FOTOS.AMALFI_POMPEYA,
        alt: 'La calzada de Pompeya con el Vesubio al fondo',
        rotulo: 'Pompeya',
        pie: 'Se entra por Porta Marina a la hora de apertura, que son tres horas largas de calzada y de casas. Al fondo de la calle está el Vesubio, el mismo que la enterró en el año 79 y al que se sube la víspera, por el sendero de ceniza hasta el borde del cráter.',
      },
      {
        id: 'ravello',
        foco: '50% 45%',
        foto: FOTOS.AMALFI_RAVELLO,
        vertical: true,
        alt: 'El jardín de Villa Rufolo en Ravello, con un pino sobre el mar',
        rotulo: 'Ravello',
        pie: 'Villa Rufolo cuelga trescientos metros por encima del mar, y su jardín es el que Wagner visitó en 1880. De ahí viene el festival que monta cada verano el escenario sobre el acantilado. Enfrente queda la Terrazza dell\'Infinito de Villa Cimbrone.',
      },
      {
        id: 'amalfi',
        foto: FOTOS.AMALFI_MAR,
        alt: 'Amalfi visto desde el mar, con las casas subiendo por el barranco',
        rotulo: 'Amalfi',
        pie: 'La primera de las repúblicas marineras italianas, antes que Pisa, Génova y Venecia. Del puerto sube la escalinata del Duomo de San Andrés y detrás queda el Chiostro del Paradiso, de 1266.',
      },
      {
        id: 'atrani',
        foto: FOTOS.PLAYA,
        vertical: true,
        alt: 'La playa y la iglesia de Atrani entre acantilados',
        rotulo: 'Atrani',
        pie: 'A media hora andando de Amalfi por el camino de la costa. Ocupa entero la desembocadura del torrente Dragone: una plaza bajo los soportales, una playa y nada más.',
      },
      {
        id: 'positano',
        foco: '50% 48%',
        foto: FOTOS.BARCA,
        vertical: true,
        alt: 'Una barca de madera fondeada frente a las casas de Positano',
        rotulo: 'Positano',
        pie: 'El final del Sentiero degli Dei: se baja de Nocelle y se entra al pueblo por arriba. De aquí sale el ferry de línea que devuelve a Amalfi en media hora.',
      },
      {
        id: 'marina',
        foto: FOTOS.AMALFI_MARINA,
        alt: 'La playa de Amalfi vista desde una terraza con macetas',
        rotulo: 'La Marina Grande de Amalfi',
        pie: 'De aquí salían las galeras de la república y de aquí sale ahora el ferry de línea. En la Costiera se vive en vertical y todo el mundo tiene una terraza como esta.',
      },
      {
        id: 'positano-noche',
        foto: FOTOS.NOCHE,
        alt: 'Positano encendido al anochecer, con el pueblo subiendo por la ladera',
        rotulo: 'Positano de noche',
        pie: 'La pendiente se entiende mejor cuando se encienden las luces: son escaleras, no calles, y por eso no hay un solo coche dentro del pueblo. El ferry de línea deja de navegar al caer la tarde.',
      },
      {
        id: 'paestum',
        foto: FOTOS.AMALFI_PAESTUM,
        alt: 'Los templos dóricos de Paestum vistos desde el aire',
        rotulo: 'Paestum',
        pie: 'Tres templos dóricos en pie, de los siglos VI y V antes de Cristo, de una colonia griega que se llamó Poseidonia. En el museo está la Tumba del Nadador. Es el último día, de camino al aeropuerto de Nápoles.',
      },
      {
        id: 'monterosso',
        foto: FOTOS.CT_MONTEROSSO,
        alt: 'La playa de Monterosso al Mare con sombrillas y el peñón al fondo',
        rotulo: 'Monterosso al Mare',
        pie: 'El único de los cinco con playa de verdad y el más llano. Por eso es la base: se duerme aquí y se sale cada mañana en el tren regional, que tarda entre dos y cuatro minutos hasta el pueblo siguiente.',
      },
      {
        id: 'vernazza',
        foto: FOTOS.CT_VERNAZZA,
        alt: 'El puerto natural de Vernazza y su iglesia al atardecer',
        rotulo: 'Vernazza',
        pie: 'El único puerto natural de los cinco, y por eso fue el más rico: aquí está la iglesia de Santa Margarita de Antioquía, del siglo XIII, con los pies literalmente en el agua. El tramo del Sentiero Azzurro que llega desde Monterosso son 3,5 kilómetros y unas dos horas.',
      },
      {
        id: 'corniglia',
        foto: FOTOS.CT_CORNIGLIA,
        alt: 'Corniglia sobre su promontorio, con el mar cien metros más abajo',
        rotulo: 'Corniglia',
        pie: 'El único que no toca el agua: está a cien metros de altura sobre un promontorio de viñas. Desde la estación se sube por la Lardarina, 33 tramos y 382 escalones, o en el autobús que enlaza con el tren.',
      },
      {
        id: 'manarola',
        foto: FOTOS.CINQUETERRE,
        alt: 'Las casas de colores de Manarola sobre la roca negra',
        rotulo: 'Manarola',
        pie: 'El más fotografiado y el más vertical: las casas se apilan sobre una lengua de roca y el pueblo entero cabe en una calle. El tramo de sendero hasta Corniglia sigue cerrado desde 2012, así que se rodea por Volastra, por arriba, entre bancales.',
      },
      {
        id: 'riomaggiore',
        foto: FOTOS.CT_RIOMAGGIORE,
        alt: 'Las barcas varadas en la calle del puerto de Riomaggiore',
        rotulo: 'Riomaggiore',
        pie: 'Las barcas se varan en mitad de la calle porque no hay puerto donde dejarlas. De aquí arranca la Via dell\'Amore, reabierta en 2024 con reserva de franja horaria y sentido único: veinte minutos de paseo colgado sobre el agua.',
      },
      {
        id: 'portovenere',
        foto: FOTOS.CT_PORTOVENERE,
        alt: 'La iglesia de San Pedro de Portovenere sobre la roca, al atardecer',
        rotulo: 'Portovenere',
        pie: 'La iglesia de San Pedro está en el filo de la roca: la parte gótica se levantó entre 1256 y 1277 sobre una románica anterior. Debajo se abre la gruta de Byron y enfrente queda la isla Palmaria. Entra en la misma declaración de la Unesco que los cinco pueblos.',
      },
      {
        id: 'florencia',
        foto: FOTOS.TOSCANA_FLORENCIA,
        alt: 'La cúpula de Brunelleschi sobre los tejados de Florencia',
        rotulo: 'Florencia',
        pie: 'La cúpula se cerró en 1436 sin cimbra, con más de cuatro millones de ladrillos en espiga, y sigue siendo la mayor de fábrica del mundo. Subir son 463 escalones y hora reservada: se coge la primera de la mañana.',
      },
      {
        id: 'sangimignano',
        foto: FOTOS.TOSCANA_SANGIMIGNANO,
        vertical: true,
        alt: 'El campo toscano visto desde una puerta de la muralla de San Gimignano',
        rotulo: 'San Gimignano',
        pie: 'De las setenta y dos torres que levantaron las familias para mirarse por encima quedan catorce. Se duerme dentro de la muralla a propósito: a partir de las seis se van los autocares y el pueblo se queda para quien se queda.',
      },
      {
        id: 'valorcia',
        foco: '50% 72%',
        foto: FOTOS.TOSCANA,
        vertical: true,
        alt: 'Carretera de tierra flanqueada por cipreses en la Val d\'Orcia',
        rotulo: 'La Val d\'Orcia',
        pie: 'Patrimonio Mundial desde 2004 como paisaje cultural: lo que se protege es el trabajo agrícola que lo ordenó, no el campo en bruto. Los cipreses marcan los caminos de las casas de labranza y llevan ahí desde el Renacimiento.',
      },
      {
        id: 'colinas',
        foco: '50% 62%',
        foto: FOTOS.TOSCANA_COLINAS,
        vertical: true,
        alt: 'Colinas y viñedos toscanos con niebla al amanecer',
        rotulo: 'El Chianti',
        pie: 'Cosme III delimitó la zona en 1716, de las primeras denominaciones del mundo, y de ahí viene el gallo negro del cuello de la botella. Se sale de amanecida, que es cuando la niebla se queda enganchada en las vaguadas.',
      },
      {
        id: 'montepulciano',
        // El templo queda en la parte baja de la foto: el encuadre se va
        // hasta el pie para que entre entero y no lo tape el rótulo.
        foco: '50% 100%',
        foto: FOTOS.TOSCANA_MONTEPULCIANO,
        alt: 'El templo de San Biagio entre la niebla, a los pies de Montepulciano',
        rotulo: 'Montepulciano',
        pie: 'El templo de San Biagio lo levantó Antonio da Sangallo el Viejo entre 1518 y 1545, todo en travertino y en planta de cruz griega. Está abajo, a un kilómetro del pueblo, y se baja andando. Arriba se cata el Vino Nobile.',
      },
      {
        id: 'siena',
        foto: FOTOS.TOSCANA_SIENA,
        alt: 'La basílica de San Domenico sobre los tejados de Siena',
        rotulo: 'Siena',
        pie: 'Se quedó gótica porque la peste de 1348 se llevó a más de la mitad de la ciudad y paró la ampliación de la catedral. La fachada inacabada del Duomo Nuovo sigue en pie, enseñando lo que iba a ser.',
      },
    ],

    salidas: {
      temporada: 'De mayo a junio y en octubre',
      porque:
        'Los tres viajes esquivan agosto por el mismo motivo: la carretera de la Costiera se colapsa, el Sentiero Azzurro se anda en fila india con treinta grados y la Val d\'Orcia pasa de los treinta y cinco. En mayo y junio el mar ya se baña, y en octubre está la vendimia y a mediodía se puede andar.',
      fechas: [
        { id: 'toscana-2705', viaje: 'Toscana', dia: '9 de mayo de 2027', plazas: 8 },
        { id: 'italia-2705', viaje: 'Costa amalfitana', dia: '10 de mayo de 2027', plazas: 6 },
        { id: 'ct-2705', viaje: 'Cinque Terre', dia: '17 de mayo de 2027', plazas: 8 },
        { id: 'italia-2706', viaje: 'Costa amalfitana', dia: '7 de junio de 2027', plazas: 3 },
        { id: 'ct-2706', viaje: 'Cinque Terre', dia: '14 de junio de 2027', plazas: 5 },
        { id: 'italia-2709', viaje: 'Costa amalfitana', dia: '13 de septiembre de 2027', plazas: 8 },
        { id: 'ct-2709', viaje: 'Cinque Terre', dia: '20 de septiembre de 2027', plazas: 8 },
        { id: 'toscana-2710', viaje: 'Toscana', dia: '3 de octubre de 2027', plazas: 6 },
        { id: 'toscana-2710b', viaje: 'Toscana', dia: '17 de octubre de 2027', plazas: 8 },
      ],
    },
    pistas: [
      'italia',
      'amalfi',
      'amalfitana',
      'positano',
      'atrani',
      'ravello',
      'apulia',
      'matera',
      'bari',
      'cinque terre',
      'cinqueterre',
      'liguria',
      'monterosso',
      'vernazza',
      'corniglia',
      'manarola',
      'riomaggiore',
      'portovenere',
      'levanto',
      'toscana',
      'florencia',
      'siena',
      'san gimignano',
      'val d\'orcia',
      'chianti',
      'montalcino',
      'pienza',
      'montepulciano',
    ],
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
        foto: FOTOS.ATENAS_ACROPOLIS,
        alt: 'Las cariátides del Erecteión entre flores silvestres',
        rotulo: 'La Acrópolis',
        pie: 'Se entra a la apertura, a las ocho: a mediodía el mármol devuelve todo el calor y la roca no tiene una sombra. Las cariátides que están en pie son copias; cinco de las seis originales se ven a cubierto en el Museo de la Acrópolis.',
      },
      {
        id: 'plaka',
        foto: FOTOS.GRECIA_PLAKA,
        vertical: true,
        alt: 'Una calle de Plaka cubierta de sombrillas de colores',
        rotulo: 'Plaka y Anafiotika',
        pie: 'El barrio viejo al pie de la Acrópolis, y encima Anafiotika, las casas que levantaron los canteros de la isla de Anafi cuando vinieron a construir la Atenas del rey Otón. Es el paseo del primer día, sin prisa.',
      },
      {
        id: 'herodes',
        foco: '50% 78%',
        foto: FOTOS.GRECIA_HERODES,
        vertical: true,
        alt: 'Las gradas del Odeón de Herodes Ático',
        rotulo: 'El Odeón de Herodes Ático',
        pie: 'Un teatro romano del siglo II en la ladera de la Acrópolis que sigue programando ópera y conciertos cada verano. Está en el paseo que baja hacia el Areópago, donde se ve el atardecer.',
      },
      {
        id: 'atenas',
        foto: FOTOS.GRECIA_ATENAS,
        vertical: true,
        alt: 'La Acrópolis sobre los tejados de Atenas',
        rotulo: 'Atenas desde el Licabeto',
        pie: 'Cuatro millones de personas alrededor de una roca de 156 metros. Se sube al final del día dos, cuando ya se ha bajado de la Acrópolis y se ha visto el Templo de Zeus Olímpico y el Estadio Panatenaico.',
      },
      {
        id: 'sarakiniko',
        foto: FOTOS.MILOS_SARAKINIKO,
        alt: 'La roca blanca de Sarakiniko sobre el agua turquesa',
        rotulo: 'Sarakiniko',
        pie: 'Ceniza volcánica compactada y blanqueada por el sol y la sal hasta parecer otro planeta. No hay una sombra ni un chiringuito: se va a primera hora o al final de la tarde, y se entra al agua por la ensenada.',
      },
      {
        id: 'firopotamos',
        foto: FOTOS.MILOS_FIROPOTAMOS,
        alt: 'La cala de Firopotamos con sus casas blancas y las barcas fondeadas',
        rotulo: 'Firopotamos',
        pie: 'Una cala con veinte casas, una capilla y los syrmata, los garajes de barca excavados en la roca con la puerta pintada. Se llega por pista de tierra y se queda uno a comer.',
      },
      {
        id: 'plaka-milos',
        foto: FOTOS.MILOS_PLAKA,
        alt: 'Una calle empedrada de Plaka, en Milos, con fachadas de colores',
        rotulo: 'Plaka y el Kastro',
        pie: 'La capital de la isla, colgada a 220 metros. Por encima está el Kastro, la fortaleza veneciana del siglo XIII, y desde ahí se ve el golfo entero. Es donde se sube a ver la puesta de sol y donde se cena.',
      },
      {
        id: 'pollonia',
        foco: '50% 62%',
        foto: FOTOS.MILOS_POLLONIA,
        vertical: true,
        alt: 'Una capilla blanca de cúpula azul sobre el mar, en Milos',
        rotulo: 'Pollonia',
        pie: 'El pueblo de pescadores del noreste, con el ferry a Kímolos saliendo cada poco. Aquí se come pescado a mediodía, después de la ruta de la costa norte.',
      },
      {
        id: 'kleftiko',
        foco: '50% 72%',
        foto: FOTOS.MILOS_KLEFTIKO,
        vertical: true,
        alt: 'Los farallones blancos y el arco de Kleftiko sobre el agua turquesa',
        rotulo: 'Kleftiko',
        pie: 'Farallones de roca blanca, arcos y cuevas en los que se escondían los piratas, de donde viene el nombre. No hay carretera: se llega solo por mar, se entra en las cuevas con la barca y se hace snorkel dentro. Si sopla el meltemi, se cambia de día.',
      },
      {
        id: 'klima',
        foto: FOTOS.MILOS_KLIMA,
        alt: 'Los syrmata de colores de Klima, a pie de agua',
        rotulo: 'Klima',
        pie: 'La fila de syrmata más conocida de Milos: garajes de barca de dos alturas con la puerta y el balcón pintados de un color distinto cada uno. Se llega al final de la tarde, cuando la luz les da de frente.',
      },
      {
        id: 'fira',
        foto: FOTOS.SANTORINI_FIRA,
        alt: 'Los tejados encalados de Fira sobre la caldera de Santorini',
        rotulo: 'Fira, Firostefani e Imerovigli',
        pie: 'Los tres pueblos van seguidos por el borde de la caldera y se recorren andando en poco más de una hora, con el volcán siempre a la izquierda. Es el paseo del primer día en la isla.',
      },
      {
        id: 'oia',
        foto: FOTOS.SANTORINI_OIA,
        alt: 'Las cúpulas azules de Oía sobre la caldera',
        rotulo: 'Oía',
        pie: 'Las cúpulas son de mampostería encalada y el azul se repinta cada año. Abajo está Ammoudi Bay, a 300 escalones, donde se come pescado con los pies casi en el agua antes de subir a ver el atardecer.',
      },
      {
        id: 'pyrgos',
        foto: FOTOS.SANTORINI_PYRGOS,
        vertical: true,
        alt: 'Una capilla de cúpula azul en una calle estrecha de Pyrgos',
        rotulo: 'Pyrgos y Megalochori',
        pie: 'La otra Santorini, la de tierra adentro: pueblos de callejas y casas encaladas donde no para ningún autocar. Pyrgos fue la capital hasta el siglo XIX y desde su castillo se ve la isla entera.',
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
      'Nueve días dando la vuelta entera a la isla por la carretera de circunvalación, en septiembre: con el norte y los fiordos del este todavía abiertos y con noche suficiente para que salga la aurora.',

    // La historia del sitio. Fuentes:
    //  · Islandia y Jökulsárlón (Wikipedia), para superficie, población,
    //    energía y las cifras de la laguna
    //  · Gullfoss y Skógafoss (Wikipedia), para los saltos, la escalera y
    //    la historia de Sigríður Tómasdóttir
    //  · nuba.com y utopica.travel, para la manera de plantear el viaje
    historia: [
      'Islandia está partida por la mitad. En Thingvellir se camina por dentro de la falla de Almannagjá, que es el borde de la placa norteamericana, con la euroasiática al otro lado del valle. Se separan unos dos centímetros al año.',
      'El Vatnajökull es Patrimonio Mundial desde 2019 por un criterio estrictamente geológico: más de 1.400.000 hectáreas, casi el catorce por ciento del país, con ocho volcanes debajo del hielo. Cuando uno de ellos entra en erupción bajo el glaciar, el deshielo baja de golpe y se lleva por delante lo que encuentra.',
      'La laguna de Jökulsárlón no existía hace un siglo. Empezó a formarse hacia 1935, cuando el glaciar Breiðamerkurjökull inició su retroceso, y desde los años setenta se ha cuadruplicado. Es geología en tiempo real, no un paisaje quieto.',
      'La vuelta a la isla son unos 1.300 kilómetros por la carretera de circunvalación, y la fecha lo decide todo. En pleno invierno los tramos del este se cierran con las tormentas y quedan cuatro horas de luz, así que la vuelta completa no se sostiene; en pleno verano hay carretera y luz de sobra, pero no hay noche y no se ve una aurora. Septiembre es el mes en que coinciden las dos cosas.',
      'Y la aurora, cuando sale, no se reserva: se produce cuando el viento solar excita el oxígeno y el nitrógeno entre cien y trescientos kilómetros de altura, y hacen falta actividad geomagnética suficiente y cielo abierto, dos cosas que van por su cuenta. La oficina meteorológica islandesa publica las dos cada día, en una escala de cero a nueve y un mapa de nubes. Se mira cada noche, pero el viaje no depende de ella.',
      'Thingvellir es además Patrimonio Mundial desde 2004 por otro motivo: allí se reunía el Althingi, la asamblea al aire libre fundada en el año 930, y allí se acordó en el año 1000 la conversión al cristianismo sin llegar a la guerra. Y la institución social del país no es la Laguna Azul, es la piscina geotérmica de barrio, abierta todo el año, con una norma innegociable: ducha completa y sin bañador antes de entrar.',
    ],

    datos: [
      { etiqueta: 'Capital', valor: 'Reikiavik' },
      { etiqueta: 'Cuándo ir', valor: 'En septiembre' },
      { etiqueta: 'Energía renovable', valor: '100 % de la luz' },
      { etiqueta: 'Plazas', valor: 'Ocho por salida' },
    ],

    galeria: [
      {
        id: 'thingvellir',
        foco: '50% 55%',
        foto: FOTOS.ISLANDIA_THINGVELLIR,
        vertical: true,
        alt: 'La pared de basalto de la falla de Almannagjá, con el río Öxará al pie',
        rotulo: 'Þingvellir',
        pie: 'Se camina por dentro de la falla de Almannagjá, que es el borde de la placa norteamericana, con la euroasiática al otro lado del valle. Aquí se reunía el Althingi al aire libre desde el año 930, y aquí se acordó en el 1000 la conversión al cristianismo sin llegar a la guerra.',
      },
      {
        id: 'strokkur',
        foco: '50% 45%',
        foto: FOTOS.ISLANDIA_STROKKUR,
        vertical: true,
        alt: 'La columna de agua de Strokkur saliendo del suelo, con su piedra rotulada delante',
        rotulo: 'Geysir',
        pie: 'El Geysir que dio nombre a todos los demás lleva décadas casi dormido, así que el que se ve es Strokkur, a cincuenta metros: revienta cada pocos minutos y la burbuja azul que se hincha antes del chorro avisa con un segundo de margen.',
      },
      {
        id: 'gullfoss',
        foto: FOTOS.ISLANDIA_GULLFOSS,
        alt: 'Los dos saltos de Gullfoss cayendo al cañón, con un arcoíris sobre el agua',
        rotulo: 'Gullfoss',
        pie: 'Dos saltos, de once y de veintiún metros, que se meten en una grieta de treinta y dos metros de hondo y dos kilómetros y medio de largo. Se salvó de una hidroeléctrica y el mérito se le atribuye a Sigríður Tómasdóttir, hija del copropietario; es sitio protegido desde 1979.',
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
        pie: 'Se entra por un sendero de piedra mojada y se sale por el otro lado. Se vuelve empapado y merece la pena. Al lado, escondido en una grieta, está Gljúfrabúi, que casi nadie busca.',
      },
      {
        id: 'skogafoss',
        foto: FOTOS.ISLANDIA_SKOGAFOSS,
        alt: 'Skógafoss cayendo recta sobre el río, con la pared verde a los lados',
        rotulo: 'Skógafoss',
        pie: 'Sesenta metros de alto por veinticinco de ancho, y una escalera de 527 escalones por el lado. Arriba empieza el Fimmvörðuháls, el sendero que cruza entre el Eyjafjallajökull y el Mýrdalsjökull hasta Þórsmörk.',
      },
      {
        id: 'dyrholaey',
        foto: FOTOS.ISLANDIA_DYRHOLAEY,
        alt: 'La playa negra y los acantilados vistos desde el promontorio de Dyrhólaey',
        rotulo: 'Dyrhólaey',
        pie: 'Un promontorio con un arco de roca por el que cabe un barco pequeño, y desde arriba la costa sur entera de una vista. En primavera y principio de verano cría el frailecillo y hay tramos cerrados.',
      },
      {
        id: 'reynisfjara',
        foto: FOTOS.ISLANDIA_PLAYA,
        vertical: true,
        alt: 'Los farallones de Reynisdrangar sobre la arena negra de Reynisfjara',
        rotulo: 'Reynisfjara',
        pie: 'Basalto molido por el Atlántico hasta convertirse en arena. Enfrente están los farallones de Reynisdrangar. Nunca se da la espalda al agua: las olas de resaca entran mucho más arriba de lo que parece.',
      },
      {
        id: 'svartifoss',
        foto: FOTOS.ISLANDIA_SVARTIFOSS,
        alt: 'Svartifoss cayendo delante de una pared de columnas de basalto negro',
        rotulo: 'Svartifoss',
        pie: 'La cascada negra de Skaftafell, dentro del Parque Nacional Vatnajökull, con la pared de columnas hexagonales que se formaron al enfriarse la lava despacio. De esas columnas sale la fachada de la Hallgrímskirkja de Reikiavik.',
      },
      {
        id: 'jokulsarlon',
        foto: FOTOS.ISLANDIA_GLACIAR,
        alt: 'Icebergs flotando en la laguna glaciar de Jökulsárlón',
        rotulo: 'Jökulsárlón',
        pie: 'No existía hace un siglo: empezó a formarse hacia 1935, cuando el glaciar Breiðamerkurjökull inició su retroceso, y desde los años setenta se ha cuadruplicado. Se recorre en lancha entre los bloques de hielo.',
      },
      {
        id: 'diamantes',
        foto: FOTOS.ISLANDIA_DIAMANTES,
        alt: 'Bloques de hielo transparente varados en la arena negra de Diamond Beach',
        rotulo: 'Diamond Beach',
        pie: 'El hielo que sale de la laguna cruza el canal, llega al mar y la marea lo devuelve a la arena negra. Está enfrente de Jökulsárlón, cruzando la carretera, y cambia de un día para otro.',
      },
      {
        id: 'seydisfjordur',
        // La calle pintada es la mitad del motivo, y va por debajo de la
        // iglesia: el encuadre baja para que entren las dos.
        foco: '50% 72%',
        foto: FOTOS.ISLANDIA_SEYDISFJORDUR,
        vertical: true,
        alt: 'La iglesia azul de Seyðisfjörður al final de la calle pintada de colores',
        rotulo: 'Seyðisfjörður',
        pie: 'Al final de un fiordo de diecisiete kilómetros, con la iglesia azul y la calle pintada delante. Es el único puerto de Islandia con ferry a Europa continental, y de ahí vienen las casas de madera noruegas que se montaron aquí a piezas.',
      },
      {
        id: 'myvatn',
        foco: '50% 50%',
        foto: FOTOS.ISLANDIA_MYVATN,
        vertical: true,
        alt: 'Una persona bañándose en el agua caliente de los baños naturales de Mývatn',
        rotulo: 'Los baños de Mývatn',
        pie: 'Agua geotérmica a unos cuarenta grados al final del día, después de Hverir y de Dimmuborgir. La norma islandesa no se negocia: ducha completa y sin bañador antes de entrar, y no es un trámite, es la razón de que el agua esté como está.',
      },
      {
        id: 'godafoss',
        foto: FOTOS.ISLANDIA_GODAFOSS,
        alt: 'La herradura de Goðafoss con el agua cayendo entre rocas oscuras',
        rotulo: 'Goðafoss',
        pie: 'La cascada de los dioses: cuenta la saga que al volver del Althingi del año 1000, donde se acordó la conversión, el legislador del norte tiró aquí las figuras de los antiguos. Es ancha y baja, y se ve desde las dos orillas.',
      },
      {
        id: 'akureyri',
        foto: FOTOS.ISLANDIA_AKUREYRI,
        alt: 'Akureyri al fondo del fiordo de Eyjafjörður, con las montañas nevadas detrás',
        rotulo: 'Akureyri',
        pie: 'La segunda ciudad del país al fondo del fiordo más largo de Islandia, a menos de cien kilómetros del círculo polar. Tiene un jardín botánico que no debería salir adelante a esta latitud y sale, y de aquí se sube a Húsavík a ver ballenas.',
      },
      {
        id: 'kirkjufell',
        foto: FOTOS.ISLANDIA_KIRKJUFELL,
        alt: 'El monte Kirkjufell detrás de los saltos de Kirkjufellsfoss',
        rotulo: 'Kirkjufell',
        pie: 'Una montaña de poco más de cuatrocientos metros que quedó suelta cuando el hielo se llevó todo lo que tenía alrededor. La foto se hace desde Kirkjufellsfoss, los saltos que tiene enfrente, y hay que cruzar el aparcamiento y poco más.',
      },
      {
        id: 'arnarstapi',
        foco: '50% 60%',
        foto: FOTOS.ISLANDIA_ARNARSTAPI,
        vertical: true,
        alt: 'El arco de basalto de Gatklettur en la costa de Arnarstapi',
        rotulo: 'Arnarstapi',
        pie: 'El arco de Gatklettur y los acantilados donde crían las gaviotas tridáctilas. De aquí sale el sendero de la costa hasta Hellnar, dos kilómetros y medio por el borde, con el Snæfellsjökull a la espalda.',
      },
    ],

    // Ventana: la temporada de auroras va de finales de septiembre a abril
    // (Islandia360), pero en diciembre y enero las tormentas cierran tramos
    // de la carretera de circunvalación y quedan cuatro horas de luz.
    salidas: {
      temporada: 'En septiembre',
      porque:
        'La vuelta entera pide carretera abierta y noche a la vez, y eso solo pasa al principio del otoño. En septiembre los fiordos del este se cruzan sin problema, en Húsavík todavía salen los barcos de ballenas y ya oscurece lo bastante para mirar al cielo. En invierno el este se cierra y en julio no hay noche.',
      fechas: [
        { id: 'islandia-2709a', dia: '5 de septiembre de 2027', plazas: 8 },
        { id: 'islandia-2709b', dia: '19 de septiembre de 2027', plazas: 5 },
        { id: 'islandia-2710', dia: '3 de octubre de 2027', plazas: 8 },
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
      'thingvellir',
      'gullfoss',
      'myvatn',
      'akureyri',
      'snaefellsnes',
      'kirkjufell',
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
        id: 'ankara',
        foto: FOTOS.TURQUIA_ANKARA,
        alt: 'La columnata del mausoleo de Atatürk en Ankara',
        rotulo: 'Ankara',
        pie: 'El Anıtkabir, el mausoleo de Atatürk, se levantó entre 1944 y 1953 sobre una colina y se entra por una avenida de leones hititas. Enfrente, el Museo de las Civilizaciones de Anatolia guarda lo que se sacó de Çatalhöyük y de Hattusa: nueve mil años en dos plantas.',
      },
      {
        id: 'kirkgoz',
        foto: FOTOS.TURQUIA_KIRKGOZ,
        alt: 'Chimeneas de hadas de Capadocia con un globo al fondo',
        rotulo: 'Los valles de Capadocia',
        pie: 'Tres volcanes dejaron la toba y el agua la talló en chimeneas. Se andan el Valle Rosa, el de las Palomas y el de Ihlara, catorce kilómetros de garganta junto al río con iglesias rupestres a los lados.',
      },
      {
        id: 'saratli',
        foto: FOTOS.TURQUIA_SARATLI,
        alt: 'Una escalera de madera bajando por un túnel excavado en la roca',
        rotulo: 'La ciudad subterránea de Saratlı',
        pie: 'Kırkgöz tiene siete pisos estimados, de los que se visitan tres, con cuarenta salas, catorce pesebres y las puertas de piedra que se hacían rodar desde dentro. Elegimos esta y no Derinkuyu porque con ocho personas se recorre sin cola y sin empujones.',
      },
      {
        id: 'frescos',
        foto: FOTOS.TURQUIA_FRESCOS,
        alt: 'Frescos bizantinos en el arco de una iglesia rupestre',
        rotulo: 'Las iglesias rupestres',
        pie: 'De las más de trescientas sesenta que hay en Capadocia solo se visitan unas treinta, y las que conservan los frescos completos se cuentan con los dedos. Muchas se pintaron en el siglo XI, cuando la zona era un refugio monástico.',
      },
      {
        id: 'uchisar',
        foto: FOTOS.TURQUIA_UCHISAR,
        alt: 'La fortaleza natural de Uçhisar, agujereada de cuevas',
        rotulo: 'Uçhisar',
        pie: 'Un peñón de toba agujereado como un panal, el punto más alto de Capadocia. Aquí se duerme, en hotel cueva, porque desde la terraza se ven despegar los globos sin salir de casa.',
      },
      {
        id: 'santasofia',
        foto: FOTOS.TURQUIA_SANTASOFIA,
        alt: 'Santa Sofía con sus minaretes al atardecer',
        rotulo: 'Santa Sofía',
        pie: 'Cinco años de obra, del 532 al 537, y una cúpula de treinta y un metros que se vino abajo veintiún años después de inaugurarse. La proyectaron dos matemáticos, Antemio de Tralles e Isidoro de Mileto.',
      },
      {
        id: 'mezquitaazul',
        foto: FOTOS.TURQUIA_ESTAMBUL,
        alt: 'Interior de la Mezquita Azul de Estambul',
        rotulo: 'La Mezquita Azul',
        pie: 'Lo azul son unos veinte mil azulejos de Iznik repartidos por la galería alta. Se entra fuera de las horas de oración, descalzos, y conviene llevar un pañuelo en la mochila.',
      },
      {
        id: 'pamukkale',
        foco: '50% 55%',
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
        id: 'esmirna',
        foco: '50% 70%',
        foto: FOTOS.TURQUIA_ESMIRNA,
        vertical: true,
        alt: 'Barcas de madera en la orilla de Esmirna al atardecer',
        rotulo: 'Esmirna',
        pie: 'Dos noches aquí, que es lo que pide la ciudad: el bazar de Kemeraltı, abierto desde el siglo XVII, el ágora romana y el paseo del Kordon, donde Esmirna entera sale a andar cuando baja el sol.',
      },
      {
        id: 'sultanahmet',
        foto: FOTOS.TURQUIA_SULTANAHMET,
        vertical: true,
        alt: 'Gente cruzando la plaza de Sultanahmet con las mezquitas al fondo',
        rotulo: 'Sultanahmet',
        pie: 'La plaza es el antiguo hipódromo de Constantinopla, y por eso es alargada. Entre Santa Sofía y la Mezquita Azul quedan el obelisco de Teodosio y la Cisterna Basílica, con sus 336 columnas reaprovechadas de edificios anteriores.',
      },
      {
        id: 'cuerno',
        foto: FOTOS.TURQUIA_CUERNO,
        alt: 'Un vapor cruzando el Cuerno de Oro de noche',
        rotulo: 'El Cuerno de Oro',
        pie: 'La última tarde se cruza en el vapor de línea a Üsküdar, veinte minutos por el precio de un billete de metro, y de paso se pasa de Europa a Asia. Es la despedida del viaje.',
      },
      {
        id: 'desayuno',
        foco: '50% 64%',
        foto: FOTOS.TURQUIA_DESAYUNO,
        vertical: true,
        alt: 'Una mesa de desayuno turco en una terraza de Capadocia',
        rotulo: 'El desayuno en Capadocia',
        pie: 'El kahvaltı no es un desayuno, es una mesa: queso blanco, aceitunas, tomate, pepino, menemen, miel con nata y pan recién hecho. Se toma en la terraza del hotel cueva mientras bajan los globos.',
      },
      {
        id: 'egeo',
        foco: '50% 55%',
        foto: FOTOS.TURQUIA_EGEO,
        vertical: true,
        alt: 'Un pueblo de casas bajas sobre el agua en la costa del Egeo',
        rotulo: 'La costa del Egeo',
        pie: 'Después de Éfeso se baja al mar: casas de pescadores, pulpo a la brasa y rakı con hielo, a media hora de un yacimiento que recibe dos millones de visitas al año.',
      },
      {
        id: 'troya',
        // La foto es apaisada y el caballo cabe entero, pero mide 1440 de
        // ancho: en una pantalla mayor la imagen se amplía y el recorte se
        // come la cabeza. Por eso el encuadre se pega arriba.
        foco: '50% 4%',
        foto: FOTOS.TURQUIA_TROYA,
        alt: 'La réplica del caballo de madera de Troya, con visitantes subiendo por la escalera',
        rotulo: 'Troya',
        pie: 'Nueve ciudades superpuestas en la misma colina, excavadas desde 1871. El museo que abrió en 2018, un cubo de acero oxidado medio enterrado, explica el yacimiento mejor que el yacimiento mismo.',
      },
      {
        id: 'bursa',
        foco: '50% 60%',
        foto: FOTOS.TURQUIA_BURSA,
        vertical: true,
        alt: 'Un patio con mesas y edificios otomanos de madera en Bursa',
        rotulo: 'Bursa y Cumalıkızık',
        pie: 'La primera capital otomana, al pie del monte Uludağ. Aquí están la Mezquita Verde y el mercado de la seda, y a diez kilómetros Cumalıkızık, un pueblo otomano de casas de adobe y madera que entró en la lista de la UNESCO en 2014.',
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
    //  · visitpetra.jo, para los días y la hora de Petra by Night
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
        id: 'aman',
        foco: '50% 75%',
        foto: FOTOS.JORDANIA_AMAN,
        vertical: true,
        alt: 'Las casas blancas de Amán subiendo por las colinas',
        rotulo: 'Amán',
        pie: 'Blanca, en cuesta y mucho más grande de lo que nadie espera. Se reparte por diecinueve colinas, y de una a otra se baja y se sube: aquí no hay manera de andar en llano.',
      },
      {
        id: 'ciudadela',
        foto: FOTOS.JORDANIA_CIUDADELA,
        alt: 'Las columnas del templo de Hércules en la Ciudadela de Amán, con la ciudad detrás',
        rotulo: 'La Ciudadela de Amán',
        pie: 'Lo que queda en pie del templo de Hércules, levantado bajo Marco Aurelio, y a su lado la mano de mármol que es lo único que se conserva de la estatua que hubo dentro. Detrás está el palacio omeya, y la ciudad entera desde arriba.',
      },
      {
        id: 'especias',
        foco: '50% 55%',
        foto: FOTOS.JORDANIA_ZOCO,
        vertical: true,
        alt: 'Cuencos de especias en un puesto del mercado',
        rotulo: 'El mercado de especias de Amán',
        pie: 'Zaatar, sumac, flor de hibisco y canela en rama. Se compra donde compran los de allí, en el centro, y se cena mansaf, que está en la lista de patrimonio inmaterial de la UNESCO.',
      },
      {
        id: 'jerash',
        foco: '50% 62%',
        foto: FOTOS.JORDANIA_JERASH,
        alt: 'La plaza Oval de Jerash rodeada por su columnata',
        rotulo: 'Jerash',
        pie: 'La plaza Oval, con las columnas cerrándose en herradura, y de ahí arranca el Cardo Máximo con las rodadas de los carros todavía marcadas en la piedra. Se entra por el arco de Adriano, levantado para su visita del año 129.',
      },
      {
        id: 'ajloun',
        foco: '50% 55%',
        foto: FOTOS.JORDANIA_AJLOUN,
        alt: 'Una escalera abovedada en el interior del castillo de Ajloun',
        rotulo: 'El castillo de Ajloun',
        pie: 'Lo mandó levantar en 1184 un comandante de Saladino, y no contra el desierto sino contra los castillos cruzados del otro lado del valle. Por dentro es un laberinto de rampas y bóvedas pensado para defenderse escalón a escalón.',
      },
      {
        id: 'madaba',
        foto: FOTOS.JORDANIA_MADABA,
        alt: 'El mosaico del mapa de Madaba, con letras griegas sobre las teselas',
        rotulo: 'El mapa de Madaba',
        pie: 'En el suelo de la iglesia de San Jorge, del siglo VI: la representación cartográfica más antigua que se conserva de Tierra Santa. Está en griego y Jerusalén sale en el centro, con su calle porticada, tal como era entonces.',
      },
      {
        id: 'nebo',
        foto: FOTOS.JORDANIA_NEBO,
        alt: 'La cruz serpentiforme del monte Nebo sobre el valle del Jordán',
        rotulo: 'El monte Nebo',
        pie: 'Desde aquí, dice el Deuteronomio, vio Moisés la tierra prometida sin llegar a entrar. Se ve el valle del Jordán entero y, con el día limpio, hasta el mar Muerto. La cruz retorcida de la explanada es una obra moderna, de Giovanni Fantoni.',
      },
      {
        id: 'marmuerto',
        foco: '50% 78%',
        foto: FOTOS.JORDANIA_MAR_MUERTO,
        alt: 'La orilla del mar Muerto con la costra de sal blanca sobre las piedras',
        rotulo: 'El mar Muerto',
        pie: 'Cuatrocientos treinta metros por debajo del nivel del mar, que es el punto más bajo de tierra firme del planeta, y casi diez veces más salado que el océano. La sal se cristaliza en la orilla y cruje al pisarla. No se nada: se flota, y con la barba o las rodillas raspadas escuece.',
      },
      {
        id: 'dana',
        foto: FOTOS.JORDANIA_DANA,
        alt: 'El valle de la reserva de Dana abriéndose entre paredes de arenisca',
        rotulo: 'La reserva de Dana',
        pie: 'La mayor reserva natural del país, y la única que baja de los mil quinientos metros al desierto: cuatro pisos de vegetación en una sola ladera. Se duerme aquí, en el pueblo viejo colgado del borde, para poder andarla por la mañana.',
      },
      {
        id: 'tesoro',
        foco: '50% 45%',
        foto: FOTOS.JORDANIA_SIQ,
        vertical: true,
        alt: 'La fachada del Tesoro de Petra excavada en la roca rosa, vista desde la salida del Siq',
        pie: 'Cuarenta metros de fachada excavados en la arenisca en el siglo I. No es un edificio: es una pared vaciada. Se llega por el Siq, un kilómetro y medio de desfiladero con las canalizaciones nabateas talladas a media altura, y al final se abre de golpe y está enfrente.',
        rotulo: 'El Tesoro de Petra',
      },
      {
        id: 'mirador',
        foto: FOTOS.JORDANIA_TESORO,
        alt: 'El Tesoro de Petra visto desde arriba, con el desfiladero alrededor',
        rotulo: 'El mirador del Tesoro',
        pie: 'Se sube por el camino de Al-Khubtha, casi una hora de escalones tallados, y desde el saliente se ve la fachada entera desde arriba, con la explanada y la gente del tamaño de un dedo. Petra es Patrimonio Mundial desde 1985 y de la ciudad solo se ha excavado una parte pequeña.',
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
        foco: '50% 75%',
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
        pie: 'Puentes de roca que la erosión ha dejado en pie. Se sube a alguno a pie, sin cuerdas, con el conductor beduino delante enseñando dónde pisar.',
      },
      {
        id: 'campamento',
        foto: FOTOS.JORDANIA_CAMPAMENTO,
        alt: 'Las tiendas de un campamento beduino sobre la arena roja de Wadi Rum',
        rotulo: 'El campamento de Wadi Rum',
        pie: 'Se duerme dos noches en el desierto, con cena hecha en el zarb, el horno enterrado en la arena. Lo que se viene a ver es lo de arriba: sin una sola luz alrededor, la Vía Láctea se ve a simple vista.',
      },
      {
        id: 'aqaba',
        foco: '50% 65%',
        foto: FOTOS.JORDANIA_AQABA,
        alt: 'La orilla del mar Rojo en Aqaba al atardecer, con una barca fondeada',
        rotulo: 'Aqaba',
        pie: 'Los veintisiete kilómetros de costa que tiene Jordania, y el único puerto del país. El arrecife empieza a pocos metros de la orilla, así que el último baño del viaje se hace con tubo y sin botella.',
      },
    ],

    // Ventana: más de 300 días de sol al año y las lluvias concentradas de
    // diciembre a febrero (jordania.com). Amán promedia 33 grados en agosto,
    // y Wadi Rum y el mar Muerto van bastante por encima.
    salidas: {
      temporada: 'De marzo a mayo y de septiembre a octubre',
      porque:
        'Petra son ocho horas andando y Wadi Rum, dos noches en el desierto: en verano no se puede, y en invierno la noche del campamento baja de cuatro grados. En primavera y otoño se camina cómodo de la mañana a la noche. Las salidas van en domingo y no por casualidad: Petra by Night solo se celebra de domingo a jueves, y saliendo en domingo la noche del quinto día siempre cae dentro.',
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
    // Corporation: Kioto abre el 23 de marzo y llega a plena flor el 30, y la
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

    // La historia del sitio. Las cifras salen de:
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
    titular: 'Cuatro ciudades que no se parecen en nada',
    entradilla:
      'Brooklyn y el Bronx antes que Times Square, el metro en vez del autocar y Coney Island un domingo. Después, si queda cuerpo, la otra costa: Los Ángeles y el Pacífico.',
    // Ventana: mayo y junio son los dos meses de menos sol en la costa del sur
    // de California (el June Gloom, un 64 % de sol posible en Los Ángeles,
    // según Wikipedia) y en enero Nueva York se mueve entre cinco bajo cero y dos.

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
        foco: '50% 42%',
        foto: FOTOS.EEUU_CENTRAL,
        alt: 'Barcas de remos en el lago de Central Park',
        rotulo: 'Central Park',
        pie: 'No es un parque dentro de la ciudad: la ciudad creció a su alrededor. Se alquila una barca en el Loeb Boathouse, y el follaje cae entre finales de octubre y la primera semana de noviembre.',
      },
      {
        id: 'libertad',
        foco: '50% 60%',
        foto: FOTOS.EEUU_LIBERTAD,
        alt: 'La Estatua de la Libertad vista desde el sur',
        rotulo: 'La Estatua de la Libertad',
        pie: 'Se sube al pedestal con billete reservado, y al lado está Ellis Island, que funcionó del 1 de enero de 1892 a noviembre de 1954. Por allí pasaron más de doce millones de personas.',
      },
      {
        id: 'midtown',
        foto: FOTOS.EEUU_TAXI,
        alt: 'Un taxi amarillo y vapor saliendo del asfalto en Midtown',
        rotulo: 'Midtown',
        pie: 'El vapor sale de la red que calienta media ciudad desde 1882 y que sigue funcionando bajo el asfalto. Es lo más neoyorquino que hay y casi nadie sabe lo que es.',
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
        id: 'capitolio',
        foto: FOTOS.EEUU_CAPITOLIO,
        alt: 'La cúpula del Capitolio de Estados Unidos',
        rotulo: 'El Capitolio',
        pie: 'La cúpula de hierro fundido se montó durante la guerra civil, entre 1855 y 1866, y Lincoln insistió en no parar la obra para que se viera que la Unión seguía en pie. Se visita por dentro con pase reservado.',
      },
      {
        id: 'mall',
        foto: FOTOS.EEUU_MALL,
        alt: 'El obelisco del Monumento a Washington reflejado en el estanque',
        rotulo: 'El National Mall',
        pie: 'Tres kilómetros y medio en línea recta del Capitolio al Lincoln Memorial, con el obelisco de 169 metros en medio y los museos del Smithsonian a los lados, todos con entrada gratuita. Se recorre andando o en bici.',
      },
      {
        id: 'lincoln',
        foto: FOTOS.EEUU_LINCOLN,
        alt: 'El Lincoln Memorial al amanecer, reflejado en el estanque',
        rotulo: 'El Lincoln Memorial',
        pie: 'Treinta y seis columnas, una por cada estado que había cuando murió Lincoln. En sus escaleras, el 28 de agosto de 1963, Martin Luther King dijo lo que dijo delante de doscientas mil personas. Está marcado en el suelo.',
      },
      {
        id: 'casablanca',
        foto: FOTOS.EEUU_CASA_BLANCA,
        alt: 'La fachada sur de la Casa Blanca desde el jardín',
        rotulo: 'La Casa Blanca',
        pie: 'Se ve desde la verja del Ellipse, al sur, que es donde sale la foto. Al lado están el Tesoro y el edificio Eisenhower, y enfrente el Lafayette Square, donde se manifiesta media ciudad.',
      },
      {
        id: 'oceandrive',
        foto: FOTOS.EEUU_OCEAN_DRIVE,
        vertical: true,
        alt: 'Un coche clásico aparcado frente a un hotel art déco de Ocean Drive',
        rotulo: 'Ocean Drive',
        pie: 'El South Beach Art Deco District reúne más de ochocientos edificios de los años treinta protegidos desde 1979, el conjunto art déco más denso del mundo. Se recorre a pie y de mañana, antes de que apriete.',
      },
      {
        id: 'artdeco',
        foto: FOTOS.EEUU_ART_DECO,
        alt: 'Fachadas art déco iluminadas de neón al anochecer en Miami Beach',
        rotulo: 'Miami Beach de noche',
        pie: 'Los neones son originales o restaurados con el mismo tubo de vidrio soplado, y por eso el barrio cambia por completo al anochecer. La hora buena es la media hora justo después de la puesta de sol.',
      },
      {
        id: 'littlehavana',
        foto: FOTOS.EEUU_LITTLE_HAVANA,
        alt: 'Una fachada azul con el rótulo de Little Havana',
        rotulo: 'Little Havana',
        pie: 'La Calle Ocho, el parque del dominó, las ventanitas de café y las fábricas de puros donde se sigue liando a mano. Se come aquí y se habla español todo el rato.',
      },
      {
        id: 'wynwood',
        foto: FOTOS.EEUU_WYNWOOD,
        alt: 'Un mural de colores con la palabra Miami',
        rotulo: 'Wynwood',
        pie: 'Un polígono de naves que en 2009 se convirtió en museo de muralismo al aire libre. Los muros se repintan, así que nunca se ve lo mismo dos años seguidos.',
      },
      {
        id: 'miamibeach',
        foto: FOTOS.EEUU_MIAMI_BEACH,
        alt: 'La franja de Miami Beach y sus torres vista desde el aire',
        rotulo: 'Miami Beach',
        pie: 'Una barra de arena separada del continente por la bahía de Biscayne, unida por seis puentes. Se cruza a Key Biscayne o se sale en barco por la bahía, que es como se entiende la ciudad.',
      },
      {
        id: 'hollywood',
        // El cartel queda alto en la foto, asi que el encuadre sube.
        foco: '50% 32%',
        foto: FOTOS.EEUU_HOLLYWOOD,
        alt: 'El cartel de Hollywood en la ladera de las colinas',
        rotulo: 'El cartel de Hollywood',
        pie: 'Se puso en 1923 y decía Hollywoodland: era el anuncio de una promoción inmobiliaria. Se ve de cerca desde el Griffith Observatory, que es donde se sube la última mañana del viaje.',
      },
      {
        id: 'venice',
        foto: FOTOS.EEUU_ANGELES,
        alt: 'Palmeras y fachadas bajas en Venice Beach, Los Ángeles',
        rotulo: 'Venice Beach',
        pie: 'El último tramo cambia de costa otra vez: sin centro, en coche y con el Pacífico a media hora. Vamos en otoño porque en mayo y junio esa costa amanece tapada casi todos los días.',
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
const ORDEN_CONTINENTES = ['Europa', 'África', 'Oriente Medio', 'Asia', 'Oceanía', 'América']

// El fondo de cada sección va alternando crema y hueso, y queda resuelto aquí,
// al construir la lista.
function continentesConDestinos() {
  const lista = []

  for (const nombre of ORDEN_CONTINENTES) {
    const destinos = DESTINOS.filter((destino) => destino.continente === nombre)

    if (destinos.length === 0) continue

    lista.push({ nombre, destinos, tono: lista.length % 2 === 0 ? TONOS.CREMA : TONOS.HUESO })
  }

  return lista
}

export const CONTINENTES_CON_DESTINOS = continentesConDestinos()
