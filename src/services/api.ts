// Único punto de contacto con la API de Vagamundo.
// Si mañana cambia la dirección o el formato, solo se toca este archivo.

import type {
  Borrado,
  Comentario,
  Credenciales,
  Cronica,
  CronicaNueva,
  DatosDeRegistro,
  ErrorDeApi,
  Estadisticas,
  PaginaDeCronicas,
  Reserva,
  ReservaNueva,
  RespuestaDeSesion,
  Usuario,
  Viaje,
  ViajeNuevo,
} from '@/tipos'
import {
  API_URL,
  CLAVE_TOKEN,
  RUTA_AUTH,
  RUTA_COMENTARIOS,
  RUTA_CRONICAS,
  RUTA_ESTADISTICAS,
  RUTA_RESERVAS,
  RUTA_VIAJES,
} from '@/config/constantes'

// El token de sesión se guarda en localStorage para que la sesión siga abierta
// al cerrar el navegador. Las lecturas van protegidas porque en navegación
// privada el acceso puede lanzar.
export function leerToken(): string | null {
  try {
    return localStorage.getItem(CLAVE_TOKEN)
  } catch {
    return null
  }
}

export function guardarToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(CLAVE_TOKEN, token)
    else localStorage.removeItem(CLAVE_TOKEN)
  } catch {
    // Si no se puede guardar, la sesión dura lo que dure la pestaña.
  }
}

// Envoltorio de fetch: monta la URL, añade el token si lo hay, manda el JSON y
// traduce los errores a algo que se pueda enseñar en pantalla.
async function peticion<T>(ruta: string, opciones: RequestInit = {}): Promise<T> {
  const token = leerToken()
  const cabeceras: Record<string, string> = {}

  if (opciones.body) cabeceras['Content-Type'] = 'application/json'
  if (token) cabeceras.Authorization = `Bearer ${token}`

  let respuesta: Response

  try {
    respuesta = await fetch(`${API_URL}${ruta}`, { ...opciones, headers: cabeceras })
  } catch {
    // Aquí se cae tanto si la API no está levantada como si el navegador ha
    // cortado la petición por CORS: desde JavaScript las dos se ven igual.
    throw new Error(
      `No ha habido respuesta de la API (${API_URL || 'sin dirección configurada'}).`
    )
  }

  // Si el servidor devuelve algo que no es JSON, no queremos que reviente aquí.
  const datos: unknown = await respuesta.json().catch(() => null)

  if (!respuesta.ok) {
    const cuerpo = datos as { mensaje?: string; message?: string } | null
    const fallo: ErrorDeApi = new Error(
      cuerpo?.mensaje || cuerpo?.message || `Error ${respuesta.status}`
    )
    fallo.estado = respuesta.status
    throw fallo
  }

  return datos as T
}

const conCuerpo =
  (metodo: 'POST' | 'PUT') =>
  <T>(ruta: string, cuerpo: unknown): Promise<T> =>
    peticion<T>(ruta, { method: metodo, body: JSON.stringify(cuerpo) })

const enviar = conCuerpo('POST')
const actualizar = conCuerpo('PUT')
const borrar = (ruta: string) => peticion<Borrado>(ruta, { method: 'DELETE' })

export const api = {
  // ---- Sesión ----
  entrar: (credenciales: Credenciales) =>
    enviar<RespuestaDeSesion>(`${RUTA_AUTH}/login`, credenciales),
  registrar: (datos: DatosDeRegistro) =>
    enviar<RespuestaDeSesion>(`${RUTA_AUTH}/register`, datos),
  comprobarSesion: () => peticion<{ usuario: Usuario }>(`${RUTA_AUTH}/me`),

  // ---- Catálogo de viajes ----
  listarViajes: () => peticion<Viaje[]>(RUTA_VIAJES),
  obtenerViaje: (id: string) => peticion<Viaje>(`${RUTA_VIAJES}/${id}`),
  crearViaje: (viaje: ViajeNuevo) => enviar<Viaje>(RUTA_VIAJES, viaje),
  actualizarViaje: (id: string, viaje: Partial<ViajeNuevo>) =>
    actualizar<Viaje>(`${RUTA_VIAJES}/${id}`, viaje),
  eliminarViaje: (id: string) => borrar(`${RUTA_VIAJES}/${id}`),

  // ---- Diario ----
  listarCronicas: (pagina = 1) =>
    peticion<PaginaDeCronicas>(`${RUTA_CRONICAS}?pagina=${pagina}`),
  obtenerCronica: (id: string) => peticion<Cronica>(`${RUTA_CRONICAS}/${id}`),
  crearCronica: (cronica: CronicaNueva) => enviar<Cronica>(RUTA_CRONICAS, cronica),
  actualizarCronica: (id: string, cronica: Partial<CronicaNueva>) =>
    actualizar<Cronica>(`${RUTA_CRONICAS}/${id}`, cronica),
  eliminarCronica: (id: string) => borrar(`${RUTA_CRONICAS}/${id}`),

  // ---- Comentarios ----
  comentar: (idCronica: string, comentario: { texto: string }) =>
    enviar<Comentario>(`${RUTA_CRONICAS}/${idCronica}/comments`, comentario),
  actualizarComentario: (id: string, comentario: { texto: string }) =>
    actualizar<Comentario>(`${RUTA_COMENTARIOS}/${id}`, comentario),
  eliminarComentario: (id: string) => borrar(`${RUTA_COMENTARIOS}/${id}`),

  // ---- Reservas ----
  listarReservas: () => peticion<Reserva[]>(RUTA_RESERVAS),
  crearReserva: (reserva: ReservaNueva) => enviar<Reserva>(RUTA_RESERVAS, reserva),
  actualizarReserva: (id: string, reserva: Partial<ReservaNueva>) =>
    actualizar<Reserva>(`${RUTA_RESERVAS}/${id}`, reserva),
  anularReserva: (id: string) => borrar(`${RUTA_RESERVAS}/${id}`),

  // ---- Panel ----
  estadisticas: () => peticion<Estadisticas>(RUTA_ESTADISTICAS),
}
