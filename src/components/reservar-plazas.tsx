import { useState } from 'react'
import { Link } from 'react-router-dom'

import Boton from '@/components/boton'
import Aviso from '@/components/aviso'
import { api } from '@/services/api'
import { useSesion } from '@/hooks/use-sesion'
import { MENSAJES, PLAZAS_MAXIMAS } from '@/config/constantes'
import { mensajeDeError } from '@/errores'
import type { Viaje } from '@/tipos'
import type { FormEvent } from 'react'
import { RUTAS } from '@/config/rutas'

// Bloque de reserva dentro de la ficha de un viaje. Quien no ha entrado ve las
// plazas que quedan y un enlace para entrar; quien ha entrado puede reservar.
export default function ReservarPlazas({ viaje }: { viaje: Viaje }) {
  const { haEntrado } = useSesion()

  // Un solo useState: los datos del formulario y el estado del envío son la
  // misma cosa, y se actualizan con el argumento de función y spread.
  const [estado, setEstado] = useState<{
    personas: number | string
    notas: string
    enviando: boolean
    error: string
    hecha: boolean
  }>({
    personas: 2,
    notas: '',
    enviando: false,
    error: '',
    hecha: false,
  })

  const { personas, notas, enviando, error, hecha } = estado

  const cambiar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  // El viaje puede venir de la lista del contexto, que no siempre trae las
  // plazas libres calculadas. Si falta el dato, no invento un número.
  const libres = typeof viaje.plazasLibres === 'number' ? viaje.plazasLibres : null
  const completo = libres === 0

  async function reservar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    cambiar({ enviando: true, error: '' })

    try {
      await api.crearReserva({ viaje: viaje.id, personas: Number(personas), notas })
      cambiar({ hecha: true })
    } catch (fallo) {
      cambiar({ error: mensajeDeError(fallo) })
    } finally {
      cambiar({ enviando: false })
    }
  }

  if (hecha) {
    return (
      <div className="space-y-8">
        <Aviso tono="exito">{MENSAJES.RESERVA_HECHA}</Aviso>
        <Boton a={RUTAS.reservas} variante="contorno" compacto>
          Ver mis reservas
        </Boton>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <p className="u-etiqueta text-suave">
        {libres === null
          ? 'Plazas limitadas'
          : completo
            ? 'Sin plazas por ahora'
            : `Quedan ${libres} de ${viaje.plazas} plazas`}
      </p>

      {haEntrado ? (
        <form onSubmit={reservar} className="space-y-8">
          <div className="flex flex-wrap items-end gap-8">
            <div>
              <label htmlFor="personas" className="u-etiqueta block text-suave">
                Personas
              </label>
              <input
                id="personas"
                name="personas"
                type="number"
                min="1"
                max={libres ?? PLAZAS_MAXIMAS}
                value={personas}
                onChange={(evento) => cambiar({ personas: evento.target.value })}
                className="w-28 border-0 border-b border-borde bg-transparent px-0 py-3 text-lg outline-none transition focus:border-terracota-acento"
              />
            </div>

            <div className="min-w-[220px] flex-1">
              <label htmlFor="notas" className="u-etiqueta block text-suave">
                Algo que debamos saber
              </label>
              <input
                id="notas"
                name="notas"
                value={notas}
                onChange={(evento) => cambiar({ notas: evento.target.value })}
                placeholder="Alergias, habitaciones, fechas…"
                className="w-full border-0 border-b border-borde bg-transparent px-0 py-3 outline-none transition placeholder:text-suave/60 focus:border-terracota-acento"
              />
            </div>
          </div>

          <Aviso tono="error">{error}</Aviso>

          <Boton type="submit" variante="azul" compacto disabled={enviando || completo}>
            {enviando ? 'Reservando…' : 'Reservar plazas'}
          </Boton>
        </form>
      ) : (
        <p className="text-suave">
          {/* El enlace lleva la ficha de ESTE viaje en «volverA», que es lo que
              lee RutaPrivada para devolver a quien entra a donde estaba. Sin
              esto, al iniciar sesión se acababa en el panel del equipo y había
              que buscar el viaje otra vez. */}
          <Link
            to={RUTAS.entrar}
            state={{ volverA: RUTAS.viaje(viaje.id) }}
            className="underline underline-offset-4 transition hover:text-tinta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
          >
            Entra para reservar plazas
          </Link>{' '}
          en {viaje.nombre}.
        </p>
      )}
    </div>
  )
}
