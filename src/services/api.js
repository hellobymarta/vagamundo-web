// Único punto de contacto con la API de la PEC 3.
// Si mañana cambia la dirección o el formato, solo se toca este archivo.

import { API_URL, RUTA_VIAJES } from '@/config/constantes'

// Envoltorio de fetch: monta la URL, manda el JSON y traduce los errores.
async function peticion(ruta, opciones = {}) {
  const respuesta = await fetch(`${API_URL}${ruta}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opciones,
  })

  // Si el servidor devuelve algo que no es JSON, no queremos que reviente aquí.
  const datos = await respuesta.json().catch(() => null)

  if (!respuesta.ok) {
    throw new Error(datos?.mensaje || datos?.message || `Error ${respuesta.status}`)
  }

  return datos
}

export const api = {
  // GET /api/travels
  listarViajes: () => peticion(RUTA_VIAJES),

  // GET /api/travels/:id
  obtenerViaje: (id) => peticion(`${RUTA_VIAJES}/${id}`),

  // POST /api/travels
  crearViaje: (viaje) =>
    peticion(RUTA_VIAJES, { method: 'POST', body: JSON.stringify(viaje) }),

  // PUT /api/travels/:id
  actualizarViaje: (id, viaje) =>
    peticion(`${RUTA_VIAJES}/${id}`, { method: 'PUT', body: JSON.stringify(viaje) }),

  // DELETE /api/travels/:id
  eliminarViaje: (id) => peticion(`${RUTA_VIAJES}/${id}`, { method: 'DELETE' }),
}
