import { useEffect, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { api } from '@/services/api'
import { useSesion } from '@/hooks/use-sesion'
import { formatearPrecio } from '@/formato'
import { FOTOS, TONOS } from '@/config/constantes'
import { mensajeDeError } from '@/errores'
import type { Estadisticas } from '@/tipos'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

// Una cifra grande con su rótulo. Se repite seis veces arriba del panel.
function Dato({
  titulo,
  valor,
  pie,
}: {
  titulo: string
  valor: ReactNode
  pie?: ReactNode
}) {
  return (
    <div className="Dato">
      <p className="u-etiqueta text-suave">{titulo}</p>
      <p className="u-titular u-cifras mt-4 text-4xl">{valor}</p>
      {pie && <p className="mt-2 text-sm text-suave">{pie}</p>}
    </div>
  )
}

// El panel privado: los números de la agencia. Da contexto al catálogo, que si
// no sería solo una lista de fichas. Los cálculos los hace la base de datos con
// el pipeline de agregación; aquí solo se pintan.
export default function Panel() {
  const { usuario } = useSesion()
  useCabeceraDocumento({
    titulo: 'Panel',
    descripcion:
      'El estado de la temporada: viajes en catálogo, plazas comprometidas y reservas.',
  })


  const [estado, setEstado] = useState<{ datos: Estadisticas | null; error: string }>({
    datos: null,
    error: '',
  })

  const { datos, error } = estado

  const cambiar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  useEffect(() => {
    let vigente = true

    api
      .estadisticas()
      .then((llegan) => {
        if (vigente) cambiar({ datos: llegan })
      })
      .catch((fallo) => {
        if (vigente) cambiar({ error: mensajeDeError(fallo) })
      })

    return () => {
      vigente = false
    }
  }, [])

  // Para que las barras se comparen entre sí, la más alta marca el 100 %.
  const tope = Math.max(1, ...(datos?.porDestino || []).map((uno) => uno.viajes))

  return (
    <>
      <Portada
        imagen={FOTOS.PLAYA}
        alt="La playa de Atrani a primera hora"
        etiqueta="Panel del equipo"
        titulo="Cómo va la temporada"
        texto={`Sesión iniciada como ${usuario?.nombre || ''}. Estos números salen de la base de datos en el momento de abrir la página.`}
        alto="h-[58vh]"
      />

      <Seccion tono={TONOS.CREMA}>
        {!datos && !error && <Cargando texto="Haciendo cuentas…" />}

        <Aviso tono="error">{error}</Aviso>

        {datos && (
          <>
            <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              <Dato
                titulo="Viajes en catálogo"
                valor={datos.viajes}
                pie={`${datos.disponibles} con plazas abiertas`}
              />
              <Dato
                titulo="Plazas totales"
                valor={datos.plazas}
                pie={`${datos.plazasLibres} todavía libres`}
              />
              <Dato
                titulo="Ocupación"
                valor={`${datos.ocupacion} %`}
                pie={`${datos.plazasReservadas} plazas comprometidas`}
              />
              <Dato
                titulo="Reservas"
                valor={datos.reservas}
                pie="Pendientes y confirmadas"
              />
              <Dato
                titulo="Precio medio"
                valor={`${formatearPrecio(datos.precioMedio)} €`}
                pie="Por persona"
              />
              <Dato
                titulo="Crónicas publicadas"
                valor={datos.cronicas}
                pie={`Duración media de ${datos.duracionMedia} días`}
              />
            </div>

            <div className="mt-24">
              <h2 className="u-titular u-tituloSeccion">Dónde está el catálogo</h2>

              <p className="mt-6 max-w-xl leading-relaxed text-suave">
                Viajes por destino. Las barras están dibujadas con CSS a partir de los
                porcentajes, sin ninguna librería de gráficos.
              </p>

              <ul className="mt-14 space-y-7">
                {datos.porDestino.map((fila) => (
                  <li key={fila.destino} className="Barra">
                    <p className="Barra-nombre">{fila.destino}</p>

                    <div
                      className="Barra-pista"
                      role="img"
                      aria-label={`${fila.destino}: ${fila.viajes} viajes`}
                    >
                      <span
                        className="Barra-relleno"
                        // La anchura de la barra entra como variable de CSS,
                        // que es lo que lee .Barra-relleno en index.css.
                        style={
                          { '--parte': `${(fila.viajes / tope) * 100}%` } as CSSProperties
                        }
                      />
                    </div>

                    <p className="Barra-cifra u-cifras">
                      {fila.viajes} · {formatearPrecio(fila.precioMedio)} €
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-24 flex flex-wrap gap-6 border-t border-borde pt-14">
              <Boton a={RUTAS.nuevo} variante="terracota" compacto>
                Añadir un viaje
              </Boton>
              <Boton a={RUTAS.nuevaCronica} variante="contorno" compacto>
                Escribir una crónica
              </Boton>
              <Boton a={RUTAS.reservas} variante="contorno" compacto>
                Mis reservas
              </Boton>
            </div>
          </>
        )}
      </Seccion>
    </>
  )
}
