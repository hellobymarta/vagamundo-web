import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { api } from '@/services/api'
import { useSesion } from '@/hooks/use-sesion'
import { formatearPrecio, formatearFecha } from '@/formato'
import { fotoDeDestino } from '@/config/destinos'
import {
  ESTADOS_RESERVA,
  FOTOS,
  IMAGEN_POR_DEFECTO,
  MENSAJES,
  TONOS,
} from '@/config/constantes'
import { mensajeDeError } from '@/errores'
import type { Reserva } from '@/tipos'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

// Las reservas de quien ha entrado: cuántas plazas tiene cogidas en cada
// viaje, lo que suma y la opción de anularlas.
export default function Reservas() {
  const { usuario } = useSesion()
  useCabeceraDocumento({
    titulo: 'Mis reservas',
    descripcion:
      'Las plazas que tienes cogidas, con su estado y su importe.',
  })


  // Las reservas y los mensajes que las acompañan son el mismo asunto, así
  // que van en un único useState y se actualizan con spread.
  const [estado, setEstado] = useState<{
    reservas: Reserva[] | null
    error: string
    aviso: string
    ocupadaId: string | null
  }>({ reservas: null, error: '', aviso: '', ocupadaId: null })

  const { reservas, error, aviso, ocupadaId } = estado

  const cambiar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  useEffect(() => {
    let vigente = true

    api
      .listarReservas()
      .then((llegan) => {
        if (vigente) cambiar({ reservas: llegan })
      })
      .catch((fallo) => {
        if (vigente) cambiar({ error: mensajeDeError(fallo) })
      })

    return () => {
      vigente = false
    }
  }, [])

  async function anular(id: string) {
    cambiar({ ocupadaId: id, error: '' })

    try {
      await api.anularReserva(id)
      setEstado((previo) => ({
        ...previo,
        reservas: (previo.reservas || []).filter((una) => una.id !== id),
        aviso: MENSAJES.RESERVA_ANULADA,
      }))
    } catch (fallo) {
      cambiar({ error: mensajeDeError(fallo) })
    } finally {
      cambiar({ ocupadaId: null })
    }
  }

  const personas = (reservas || []).reduce((suma, una) => suma + una.personas, 0)
  const importe = (reservas || []).reduce(
    (suma, una) => suma + una.personas * (una.viaje?.precio || 0),
    0
  )

  return (
    <>
      <Portada
        imagen={FOTOS.PLAYA}
        alt="La playa de Atrani a primera hora"
        etiqueta="Tus reservas"
        titulo={`Hola, ${usuario?.nombre?.split(' ')[0] || 'viajero'}`}
        texto="Las plazas que tienes cogidas. Mientras estén pendientes puedes cambiarlas o anularlas."
        alto="h-[58vh]"
      />

      <Seccion tono={TONOS.CREMA}>
        {!reservas && !error && <Cargando texto="Buscando tus reservas…" />}

        <div className="space-y-8">
          <Aviso tono="error">{error}</Aviso>
          <Aviso tono="exito">{aviso}</Aviso>
        </div>

        {reservas && reservas.length === 0 && (
          <div className="space-y-10">
            <Aviso>{MENSAJES.SIN_RESERVAS}</Aviso>
            <Boton a={RUTAS.catalogo} variante="contorno" compacto>
              Ver el catálogo
            </Boton>
          </div>
        )}

        {reservas && reservas.length > 0 && (
          <>
            <ul className="space-y-10">
              {reservas.map((reserva) => (
                <li key={reserva.id} className="FichaReserva">
                  {/* Si el viaje no trae fotografía propia se usa la de su
                      destino, igual que en las tarjetas del catálogo: así la
                      ficha nunca se queda con la columna de la foto vacía. */}
                  <img
                    src={
                      reserva.viaje?.imagen ||
                      fotoDeDestino(reserva.viaje?.destino || '', IMAGEN_POR_DEFECTO)
                    }
                    alt={reserva.viaje?.nombre || 'Viaje reservado'}
                    loading="lazy"
                    className="FichaReserva-foto"
                  />

                  <div>
                    <p className="u-etiqueta text-terracota-acento">{reserva.viaje?.destino}</p>

                    <h2 className="u-titular mt-3 text-2xl">
                      {/* Si el viaje se retiró del catálogo ya no hay ficha a la
                          que ir, así que el título se queda sin enlace en vez de
                          llevar a una página que no existe. */}
                      {reserva.viaje ? (
                        <Link
                          to={RUTAS.viaje(reserva.viaje.id)}
                          className="transition hover:text-terracota-acento"
                        >
                          {reserva.viaje.nombre}
                        </Link>
                      ) : (
                        'Viaje retirado del catálogo'
                      )}
                    </h2>

                    <p className="mt-4 text-suave">
                      {reserva.personas} {reserva.personas === 1 ? 'persona' : 'personas'} ·{' '}
                      <span className="u-cifras">
                        {formatearPrecio(reserva.personas * (reserva.viaje?.precio || 0))} €
                      </span>{' '}
                      · reservada el {formatearFecha(reserva.createdAt)}
                    </p>

                    {reserva.notas && <p className="mt-4 text-sm text-suave">{reserva.notas}</p>}

                    <div className="mt-6 flex flex-wrap items-center gap-6">
                      <span className={`Estado Estado--${reserva.estado}`}>
                        {ESTADOS_RESERVA[reserva.estado]}
                      </span>

                      <button
                        type="button"
                        disabled={ocupadaId === reserva.id}
                        onClick={() => anular(reserva.id)}
                        className="EnlaceAccion"
                      >
                        {ocupadaId === reserva.id ? 'Anulando…' : 'Anular'}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-16 border-t border-borde pt-10 text-suave">
              En total, <span className="u-cifras text-tinta">{personas}</span> plazas y{' '}
              <span className="u-cifras text-tinta">{formatearPrecio(importe)} €</span>.
            </p>
          </>
        )}
      </Seccion>
    </>
  )
}
