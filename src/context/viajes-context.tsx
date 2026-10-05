import { createContext, useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { api } from '@/services/api'
import { mensajeDeError } from '@/errores'
import { MENSAJES } from '@/config/constantes'
import type { Viaje, ViajeNuevo } from '@/tipos'

/** Todo el estado del catálogo, que se mueve junto. */
export interface EstadoDelCatalogo {
  viajes: Viaje[]
  cargando: boolean
  guardando: boolean
  error: string
  aviso: string
}

/** Lo que el contexto ofrece: el estado más las cuatro operaciones del CRUD. */
export interface ValorDeViajes extends EstadoDelCatalogo {
  cargarViajes: () => Promise<void>
  crearViaje: (viaje: ViajeNuevo) => Promise<Viaje | null>
  actualizarViaje: (id: string, viaje: Partial<ViajeNuevo>) => Promise<Viaje | null>
  eliminarViaje: (id: string) => Promise<boolean>
  limpiarAvisos: () => void
}

// Contexto global del catálogo: los viajes se piden una vez y los comparten
// todas las páginas, en lugar de que cada una repita la misma llamada.
export const ViajesContext = createContext<ValorDeViajes | null>(null)

const ESTADO_INICIAL: EstadoDelCatalogo = {
  viajes: [],
  cargando: true,
  guardando: false,
  error: '',
  aviso: '',
}

export function ViajesProvider({ children }: { children: ReactNode }) {
  const [estado, setEstado] = useState<EstadoDelCatalogo>(ESTADO_INICIAL)

  // Cambia solo las claves que le pasamos y deja el resto como estaba.
  const cambiar = useCallback((cambios: Partial<EstadoDelCatalogo>) => {
    setEstado((previo) => ({ ...previo, ...cambios }))
  }, [])

  // GET: trae el catálogo desde MongoDB a través de la API.
  const cargarViajes = useCallback(async () => {
    cambiar({ cargando: true, error: '' })

    try {
      const viajes = await api.listarViajes()
      cambiar({ viajes, cargando: false })
    } catch (error) {
      cambiar({ error: mensajeDeError(error), cargando: false })
    }
  }, [cambiar])

  // Al montar la app pedimos los datos una sola vez.
  useEffect(() => {
    cargarViajes()
  }, [cargarViajes])

  // POST: crea el viaje y lo pone el primero de la lista, sin recargar todo.
  const crearViaje = useCallback(
    async (viaje: ViajeNuevo) => {
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
        cambiar({ error: mensajeDeError(error), guardando: false })
        return null
      }
    },
    [cambiar]
  )

  // PUT: sustituye en la lista solo el viaje editado.
  const actualizarViaje = useCallback(
    async (id: string, viaje: Partial<ViajeNuevo>) => {
      cambiar({ guardando: true, error: '', aviso: '' })

      try {
        const actualizado = await api.actualizarViaje(id, viaje)

        setEstado((previo) => ({
          ...previo,
          viajes: previo.viajes.map((item) => (item.id === id ? actualizado : item)),
          guardando: false,
          aviso: MENSAJES.ACTUALIZADO,
        }))

        return actualizado
      } catch (error) {
        cambiar({ error: mensajeDeError(error), guardando: false })
        return null
      }
    },
    [cambiar]
  )

  // DELETE: lo quita de la API y de la lista.
  const eliminarViaje = useCallback(
    async (id: string) => {
      cambiar({ guardando: true, error: '', aviso: '' })

      try {
        await api.eliminarViaje(id)

        setEstado((previo) => ({
          ...previo,
          viajes: previo.viajes.filter((item) => item.id !== id),
          guardando: false,
          aviso: MENSAJES.ELIMINADO,
        }))

        return true
      } catch (error) {
        cambiar({ error: mensajeDeError(error), guardando: false })
        return false
      }
    },
    [cambiar]
  )

  const limpiarAvisos = useCallback(() => cambiar({ aviso: '', error: '' }), [cambiar])

  const valor: ValorDeViajes = {
    ...estado,
    cargarViajes,
    crearViaje,
    actualizarViaje,
    eliminarViaje,
    limpiarAvisos,
  }

  return <ViajesContext.Provider value={valor}>{children}</ViajesContext.Provider>
}
