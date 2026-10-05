// Los tipos del dominio, en un solo sitio. Son la forma exacta en la que la
// API devuelve cada cosa, así que si un día cambia el backend, el compilador
// señala todos los puntos de la web que hay que tocar.

export type Rol = 'admin' | 'editor'

export type EstadoReserva = 'pendiente' | 'confirmada' | 'cancelada'

export interface Usuario {
  id: string
  nombre: string
  email: string
  rol: Rol
}

/** Lo mínimo que acompaña a una crónica o a un comentario para firmarlo. */
export interface Autor {
  id: string
  nombre: string
}

export interface Viaje {
  id: string
  nombre: string
  destino: string
  descripcion?: string
  itinerario?: string
  precio: number
  duracionDias: number
  categoria?: string
  imagen?: string
  disponible: boolean
  plazas: number
  /** Las calcula la API sumando las reservas; no siempre vienen en el listado. */
  plazasReservadas?: number
  plazasLibres?: number
  creadoPor?: string | Autor
  createdAt?: string
  updatedAt?: string
}

/** Lo que se manda al crear o editar un viaje: sin id ni campos calculados. */
export type ViajeNuevo = Omit<
  Viaje,
  'id' | 'plazasReservadas' | 'plazasLibres' | 'creadoPor' | 'createdAt' | 'updatedAt'
>

export interface Comentario {
  id: string
  texto: string
  post?: string
  autor?: Autor
  createdAt?: string
}

export interface Cronica {
  id: string
  titulo: string
  destino: string
  contenido: string
  /** La fotografía va en Base64 dentro del propio documento. */
  imagen: string
  autor?: Autor
  comentarios?: Comentario[]
  createdAt?: string
  updatedAt?: string
}

export type CronicaNueva = Pick<Cronica, 'titulo' | 'destino' | 'contenido' | 'imagen'>

export interface PaginaDeCronicas {
  posts: Cronica[]
  pagina: number
  paginas: number
  total: number
  porPagina: number
}

export interface Reserva {
  id: string
  viaje: Viaje | null
  usuario?: string | Autor
  personas: number
  notas?: string
  estado: EstadoReserva
  createdAt?: string
}

export interface ReservaNueva {
  viaje: string
  personas: number
  notas?: string
}

export interface ViajesPorDestino {
  destino: string
  viajes: number
  plazas: number
  precioMedio: number
}

export interface Estadisticas {
  viajes: number
  disponibles: number
  plazas: number
  plazasReservadas: number
  plazasLibres: number
  ocupacion: number
  precioMedio: number
  duracionMedia: number
  reservas: number
  cronicas: number
  porDestino: ViajesPorDestino[]
}

export interface Credenciales {
  email: string
  password: string
}

export interface DatosDeRegistro extends Credenciales {
  nombre: string
}

export interface RespuestaDeSesion {
  token: string
  usuario: Usuario
}

/** Lo que devuelven los endpoints de borrado. */
export interface Borrado {
  mensaje: string
  id: string
}

/** Un error de la API trae además el código de estado HTTP. */
export interface ErrorDeApi extends Error {
  estado?: number
}
