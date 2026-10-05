// El contenido de las tres páginas de información legal.
//
// Vive aquí y no dentro del componente por lo mismo que el resto de textos
// largos de la web: la página solo se ocupa de pintarlo, y así se corrige un
// párrafo sin tocar una sola línea de JSX.
//
// Vagamundo es el proyecto de un máster, no una agencia dada de alta, así que
// cada documento lo dice en su primera línea y no se inventa ningún número de
// registro ni de licencia. Cuando la actividad exista, esos datos entran en el
// apartado que ya está preparado para ellos.

export interface ApartadoLegal {
  id: string
  titulo: string
  parrafos: string[]
  lista?: string[]
}

export interface PaginaLegal {
  id: string
  texto: string
  titulo: string
  entradilla: string
  aviso: string
  apartados: ApartadoLegal[]
}

export const PAGINAS_LEGALES: PaginaLegal[] = [
  {
    id: 'aviso-legal',
    texto: 'Aviso legal',
    titulo: 'Aviso legal',
    entradilla: 'Quién está detrás de esta web y en qué condiciones se usa.',
    aviso:
      'Vagamundo es el proyecto final de un máster de desarrollo web. La agencia no está dada de alta y por esta web no se contrata ningún viaje de verdad.',
    apartados: [
      {
        id: 'titular',
        titulo: 'Quién es la titular',
        parrafos: [
          'Esta web la ha hecho y la mantiene Marta Alarcón Rodríguez como proyecto académico. Para cualquier cosa relacionada con ella, el correo es hola@vagamundo.travel.',
          'La Ley 34/2002 de servicios de la sociedad de la información obliga a toda web a identificar a quien está detrás, y a una agencia de viajes le pide además el código que le asigna el registro de turismo de su comunidad autónoma. Vagamundo todavía no tiene esos datos porque no está dada de alta, y no se inventan. Cuando lo esté, en este apartado irán:',
        ],
        lista: [
          'La razón social y el NIF.',
          'El domicilio y los datos del Registro Mercantil: tomo, folio, hoja e inscripción.',
          'El código de agencia de viajes del registro de turismo de la comunidad autónoma, que es el que permite comprobar que la agencia existe.',
          'El correo y el teléfono de contacto, que son los que ya figuran en el pie de esta web.',
        ],
      },
      {
        id: 'objeto',
        titulo: 'Para qué sirve',
        parrafos: [
          'La web enseña un catálogo de viajes, un diario de crónicas y una zona privada desde la que el equipo publica y corrige ese contenido. Quien tiene cuenta puede además apuntarse a las plazas de un viaje.',
          'Las reservas que se hacen aquí quedan anotadas en la base de datos del proyecto. No son un contrato de viaje, no generan ningún cobro y no obligan a nada a ninguna de las dos partes.',
        ],
      },
      {
        id: 'uso',
        titulo: 'Cómo se puede usar',
        parrafos: [
          'El catálogo, los destinos y el diario se leen sin cuenta y sin condiciones. Para publicar, corregir o reservar hace falta entrar, y cada cual responde de lo que escriba con su cuenta y de guardar bien su contraseña.',
        ],
        lista: [
          'No publiques contenido de otros sin permiso ni fotografías que no sean tuyas.',
          'No publiques nada que insulte, señale o perjudique a nadie.',
          'No intentes acceder a partes de la web que no te corresponden ni alterar su funcionamiento.',
          'Los textos que se salten lo anterior se retiran, y la cuenta desde la que se publicaron se puede cerrar.',
        ],
      },
      {
        id: 'propiedad',
        titulo: 'De quién es lo que se ve',
        parrafos: [
          'El diseño, los textos de los viajes, los itinerarios y el código son de la titular de la web. Las fotografías de Positano, Amalfi y Atrani también son suyas.',
          'El resto de fotografías están tomadas de catálogos de viajes de 2026 y se usan únicamente con fines académicos dentro de esta práctica, sin ánimo de lucro. Si eres el titular de alguna y quieres que se retire, escribe a hola@vagamundo.travel y se retira.',
          'Los contornos de los países se han generado a partir del atlas de world-atlas, con datos de Natural Earth, que son de dominio público.',
        ],
      },
      {
        id: 'responsabilidad',
        titulo: 'Hasta dónde responde esta web',
        parrafos: [
          'Se pone cuidado en que lo que se publica esté bien, pero no se garantiza que la web esté disponible sin interrupciones ni que todo el contenido esté siempre actualizado.',
          'Cuando desde aquí se enlaza a otra web, esa otra web es responsabilidad de quien la tenga, no de Vagamundo.',
        ],
      },
      {
        id: 'ley',
        titulo: 'Qué ley se aplica',
        parrafos: [
          'Todo lo anterior se rige por la legislación española. Si hubiera una discrepancia, se resolvería ante los juzgados que correspondan según la normativa de consumidores y usuarios.',
        ],
      },
    ],
  },
  {
    id: 'privacidad',
    texto: 'Política de privacidad',
    titulo: 'Política de privacidad',
    entradilla: 'Qué datos se guardan, para qué, y cómo pedir que se borren.',
    aviso:
      'Vagamundo es un proyecto académico. Los datos que se introduzcan aquí viven en la base de datos de la práctica y no se usan para nada más.',
    apartados: [
      {
        id: 'quien',
        titulo: 'Quién trata los datos',
        parrafos: [
          'Marta Alarcón Rodríguez, como responsable del proyecto. Para cualquier asunto relacionado con tus datos, el correo es hola@vagamundo.travel.',
        ],
      },
      {
        id: 'que',
        titulo: 'Qué se guarda',
        parrafos: ['Solo lo que hace falta para que la web funcione, y nada más:'],
        lista: [
          'Al crear una cuenta: el nombre, el correo y la contraseña. La contraseña no se guarda tal cual, se guarda cifrada, y nadie puede leerla, tampoco quien administra la web.',
          'Al reservar plazas: el viaje, cuántas personas sois y las notas que escribas.',
          'Al publicar en el diario: el título, el destino, el texto y la fotografía que subas, con tu nombre al lado.',
          'Al comentar: el texto del comentario y tu nombre.',
          'Al apuntarte al boletín: el nombre y el correo.',
        ],
      },
      {
        id: 'para-que',
        titulo: 'Para qué',
        parrafos: [
          'Los datos de la cuenta sirven para identificarte al entrar y para firmar lo que publicas. Los de la reserva, para saber cuántas plazas quedan en cada viaje. Los del diario y los comentarios, para enseñarlos en la web, que es justo para lo que los escribes.',
          'No se usan para hacer perfiles, no se venden a nadie y no se mandan correos comerciales salvo que te apuntes tú al boletín.',
        ],
      },
      {
        id: 'base',
        titulo: 'Con qué base legal',
        parrafos: [
          'Tu consentimiento, que das al crear la cuenta, al reservar, al publicar o al apuntarte al boletín. Puedes retirarlo cuando quieras, y retirarlo no tiene ninguna consecuencia más allá de que dejas de usar esa parte de la web.',
        ],
      },
      {
        id: 'donde',
        titulo: 'Dónde se guardan',
        parrafos: [
          'En una base de datos MongoDB Atlas, y la web se sirve desde Vercel. Son los dos únicos proveedores que intervienen, y actúan como encargados del tratamiento. Los dos tienen cláusulas contractuales tipo para las transferencias internacionales de datos.',
          'No hay analítica, ni píxeles de seguimiento, ni publicidad, ni cookies de terceros. Lo único que esta web guarda en tu navegador es el testigo de sesión, para que no tengas que volver a entrar cada vez que abres una página. Se borra al cerrar sesión y caduca por su cuenta a los siete días.',
        ],
      },
      {
        id: 'cuanto',
        titulo: 'Cuánto tiempo',
        parrafos: [
          'Mientras tengas la cuenta abierta. Si pides que se borre, se borra, y con ella se van tus reservas y tus comentarios. Las crónicas que hayas publicado también, si así lo pides.',
        ],
      },
      {
        id: 'derechos',
        titulo: 'Qué puedes pedir',
        parrafos: [
          'Lo que te reconocen el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018 de protección de datos, escribiendo a hola@vagamundo.travel:',
        ],
        lista: [
          'Acceder a los datos que hay sobre ti.',
          'Corregir los que estén mal.',
          'Que se borren.',
          'Que se limite su uso, o oponerte a él.',
          'Que te los demos en un archivo para llevártelos a otro sitio.',
          'Y si crees que no se ha hecho bien, reclamar ante la Agencia Española de Protección de Datos.',
        ],
      },
    ],
  },
  {
    id: 'condiciones',
    texto: 'Condiciones generales',
    titulo: 'Condiciones generales',
    entradilla: 'Cómo funcionan las plazas, los grupos y las reservas.',
    aviso:
      'Vagamundo es un proyecto académico. Estas condiciones describen cómo está pensada la agencia, pero por esta web no se vende ni se contrata ningún viaje.',
    apartados: [
      {
        id: 'viajes',
        titulo: 'Qué es un viaje de Vagamundo',
        parrafos: [
          'Una salida en grupo pequeño por un itinerario escrito de antemano, recorrido antes por nosotras en la misma época del año, con alojamientos probados y un guía de allí. Cada viaje tiene su destino, su duración, su precio por persona y su número de plazas, y todo eso está en su ficha.',
        ],
      },
      {
        id: 'grupo',
        titulo: 'El grupo',
        parrafos: [
          'De cinco a ocho personas. Cinco es el mínimo para que la salida se haga y ocho el tope, aunque haya lista de espera. Si una fecha no llega a cinco, se avisa y se ofrece otra fecha o la devolución de lo que se hubiera pagado.',
        ],
      },
      {
        id: 'reserva',
        titulo: 'Cómo se reserva',
        parrafos: [
          'Desde la ficha del viaje, indicando cuántas personas sois. La reserva queda en estado pendiente de confirmar: significa que las plazas están apuntadas, no que el viaje esté cerrado.',
          'Las plazas se descuentan en el momento, así que el número que ves en la ficha es el que queda de verdad. Si pides más de las que hay, la web lo dice y no deja seguir.',
          'Una reserva pendiente se puede anular desde «Mis reservas» sin dar explicaciones y sin coste.',
        ],
      },
      {
        id: 'precio',
        titulo: 'El precio',
        parrafos: [
          'Siempre por persona y siempre en euros. En la ficha de cada viaje está lo que incluye y lo que no, y las dudas de siempre están contestadas en la portada, en «Las dudas de siempre».',
          'Los vuelos internacionales no van incluidos salvo que la ficha diga lo contrario. Tampoco las comidas que no figuren en el itinerario, las entradas opcionales ni los gastos personales.',
        ],
      },
      {
        id: 'norma',
        titulo: 'Bajo qué norma',
        parrafos: [
          'Una salida de Vagamundo es un viaje combinado: junta transporte, alojamiento y actividades en un mismo precio. Eso lo regula el Real Decreto Legislativo 1/2007, con las reglas que introdujo el Real Decreto-ley 23/2018, y es lo que da al viajero una protección bastante más fuerte que la de contratar cada cosa por separado.',
          'De ahí salen dos obligaciones que no son optativas: antes de pagar nada hay que recibir por escrito toda la información del viaje y las condiciones de anulación, y la agencia tiene que tener contratados un seguro de responsabilidad civil y una garantía frente a la insolvencia, para que si la agencia quiebra el viajero recupere su dinero y pueda volver a casa.',
          'Vagamundo no está dada de alta, así que no tiene ninguna de las dos. Cuando lo esté, aquí irán los números de ambas pólizas y la entidad que las cubre.',
        ],
      },
      {
        id: 'cancelacion',
        titulo: 'Si hay que cancelar',
        parrafos: [
          'Cuando la agencia esté en activo, las condiciones de anulación y las penalizaciones se detallarán aquí y se entregarán por escrito antes de cualquier pago, como exige la normativa de viajes combinados.',
          'Si somos nosotras las que cancelamos, por no llegar al grupo mínimo o por una causa de fuerza mayor, se devuelve todo lo pagado o se ofrece una fecha alternativa, a elección de quien viaja.',
        ],
      },
      {
        id: 'seguro',
        titulo: 'Seguros y documentación',
        parrafos: [
          'El seguro de viaje no va incluido y se recomienda contratarlo. Cada viajero se ocupa de llevar en regla el pasaporte, los visados y las vacunas que pida el destino. En la ficha de cada destino está lo que hace falta, pero la información oficial es la del Ministerio de Asuntos Exteriores.',
        ],
      },
      {
        id: 'reclamaciones',
        titulo: 'Si algo no ha ido bien',
        parrafos: [
          'Escribe a hola@vagamundo.travel y te contesta la misma persona que preparó el viaje. Al volver preguntamos siempre qué tal fue, y de esas respuestas sale el viaje del año siguiente.',
        ],
      },
    ],
  },
]
