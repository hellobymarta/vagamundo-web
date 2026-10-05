// Las direcciones de la aplicación, en un solo sitio.
//
// Las de la API ya vivían en `constantes.ts` (RUTA_VIAJES, RUTA_CRONICAS…),
// pero las de la web estaban escritas a mano en más de cuarenta sitios: la
// misma cadena `/viaje/${id}` repetida en ocho archivos, `/#catalogo` en siete,
// `/destinos/${id}` en seis. Cambiar una dirección obligaba a buscarla por todo
// el proyecto y confiar en no dejarse ninguna, y el compilador no avisaba
// porque para él son cadenas de texto cualesquiera.
//
// Aquí están las dos caras de cada dirección:
//
//  · PATRONES, que es lo que entiende el enrutador: '/viaje/:id'. Lo usa
//    App.tsx al declarar las rutas.
//  · RUTAS, que es la dirección ya montada: RUTAS.viaje('abc') -> '/viaje/abc'.
//    Lo usa todo lo demás, que es quien enlaza.
//
// Las dos salen del mismo sitio, así que no pueden separarse.

/** Los patrones que declara el enrutador, con sus parámetros. */
export const PATRONES = {
  inicio: '/',
  viaje: '/viaje/:id',
  destinos: '/destinos',
  destino: '/destinos/:pais',
  diario: '/diario',
  cronica: '/diario/:id',
  nuevaCronica: '/diario/nueva',
  editarCronica: '/diario/:id/editar',
  entrar: '/entrar',
  legal: '/legal/:documento',
  nuevo: '/nuevo',
  editar: '/editar/:id',
  reservas: '/reservas',
  panel: '/panel',
  noEncontrada: '*',
} as const

/** Los dos anclas de la web, para no escribirlos a mano cada vez. */
export const ANCLAS = {
  catalogo: 'catalogo',
  boletin: 'boletin',
  reserva: 'reservar',
} as const

/** Las direcciones ya montadas, que son las que se enlazan. */
export const RUTAS = {
  inicio: '/',
  catalogo: `/#${ANCLAS.catalogo}`,
  boletin: `/#${ANCLAS.boletin}`,

  viaje: (id: string) => `/viaje/${id}`,
  /** La ficha de un viaje, abierta directamente en el bloque de reserva. */
  reservarViaje: (id: string) => `/viaje/${id}#${ANCLAS.reserva}`,

  destinos: '/destinos',
  destino: (id: string) => `/destinos/${id}`,

  diario: '/diario',
  cronica: (id: string) => `/diario/${id}`,
  nuevaCronica: '/diario/nueva',
  editarCronica: (id: string) => `/diario/${id}/editar`,

  entrar: '/entrar',
  legal: (id: string) => `/legal/${id}`,

  nuevo: '/nuevo',
  editar: (id: string) => `/editar/${id}`,
  reservas: '/reservas',
  panel: '/panel',
} as const

/**
 * ¿Esta dirección es la ficha de un viaje?
 *
 * La pantalla de entrada cambia su texto según de dónde se venga, y antes lo
 * comprobaba con un `startsWith('/viaje/')` escrito a mano, que se rompe en
 * silencio si la ruta cambia de nombre.
 */
export function esRutaDeViaje(ruta: unknown): boolean {
  return typeof ruta === 'string' && ruta.startsWith(RUTAS.viaje(''))
}
