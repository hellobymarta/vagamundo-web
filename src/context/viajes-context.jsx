import { createContext, useCallback, useEffect, useState } from 'react'

import { api } from '@/services/api'
import { MENSAJES } from '@/config/constantes'

// Contexto global del catálogo: los viajes se piden una vez y los comparten
// todas las páginas, en lugar de que cada una repita la misma llamada.
export const ViajesContext = createContext(null)

// Un único useState para todo el estado del catálogo, porque son datos
// relacionados entre sí: la lista, si está cargando y qué ha pasado.
const ESTADO_INICIAL = {
  viajes: [],
  cargando: true,
  guardando: false,
  error: '',
  aviso: '',
}

export function ViajesProvider({ children }) {
  const [estado, setEstado] = useState(ESTADO_INICIAL)

  // Cambia solo las claves que le pasamos y deja el resto como estaba.
  const cambiar = useCallback((cambios) => {
    setEstado((previo) => ({ ...previo, ...cambios }))
  }, [])

  // GET: trae el catálogo desde MongoDB a través de la API.
  const cargarViajes = useCallback(async () => {
    cambiar({ cargando: true, error: '' })

    try {
      const viajes = await api.listarViajes()
      cambiar({ viajes, cargando: false })
    } catch (error) {
      cambiar({ error: error.message || MENSAJES.ERROR_GENERICO, cargando: false })
    }
  }, [cambiar])

  // Al montar la app pedimos los datos una sola vez.
  useEffect(() => {
    cargarViajes()
  }, [cargarViajes])

  // POST: crea el viaje y lo pone el primero de la lista, sin recargar todo.
  const crearViaje = useCallback(
    async (viaje) => {
      cambiar({ guardando: true, error: '', aviso: '' })

      try {
        const creado = await api.crearViaje(viaje)

        setEstado((previo) => ({
          ...previo,
          viajes: [creado, ...previo.viajes],
          guardando: false,
          aviso: MENSAJES.CREADO,
        }))

        return creado
      } catch (error) {
        cambiar({ error: error.message || MENSAJES.ERROR_GENERICO, guardando: false })
        return null
      }
    },
    [cambiar]
  )

  // PUT: sustituye en la lista solo el viaje editado.
  const actualizarViaje = useCallback(
    async (id, viaje) => {
      cambiar({ guardando: true, error: '', aviso: '' })

      try {
        const actualizado = await api.actualizarViaje(id, viaje)

        setEstado((previo) => ({
          ...previo,
          viajes: previo.viajes.map((item) => (item._id === id ? actualizado : item)),
          guardando: false,
          aviso: MENSAJES.ACTUALIZADO,
        }))

        return actualizado
      } catch (error) {
        cambiar({ error: error.message || MENSAJES.ERROR_GENERICO, guardando: false })
        return null
      }
    },
    [cambiar]
  )

  // DELETE: lo quita de la API y de la lista.
  const eliminarViaje = useCallback(
    async (id) => {
      cambiar({ guardando: true, error: '', aviso: '' })

      try {
        await api.eliminarViaje(id)

        setEstado((previo) => ({
          ...previo,
          viajes: previo.viajes.filter((item) => item._id !== id),
          guardando: false,
          aviso: MENSAJES.ELIMINADO,
        }))

        return true
      } catch (error) {
        cambiar({ error: error.message || MENSAJES.ERROR_GENERICO, guardando: false })
        return false
      }
    },
    [cambiar]
  )

  const limpiarAvisos = useCallback(() => cambiar({ aviso: '', error: '' }), [cambiar])

  const valor = {
    ...estado,
    cargarViajes,
    crearViaje,
    actualizarViaje,
    eliminarViaje,
    limpiarAvisos,
  }

  return <ViajesContext.Provider value={valor}>{children}</ViajesContext.Provider>
}
