import Boton from '@/components/boton'
import { CORREO } from '@/config/constantes'
import { RUTAS } from '@/config/rutas'
import type { SalidasDeDestino } from '@/config/destinos'
import type { Viaje } from '@/tipos'

// Las salidas de un destino: la ventana en la que se viaja, por qué es esa y
// las fechas concretas con las plazas que quedan.
//
// Las plazas son un número del 0 al 8. Cero significa completa, y entonces la
// fila no ofrece reservar: propone la lista de espera, que es lo honesto.
//
// Si el destino tiene varios viajes, cada fecha lleva encima el nombre del
// suyo: con tres itinerarios distintos, una lista de fechas sueltas no se
// entiende.
//
// Cada fila es una rejilla de tres columnas iguales y centradas, no un
// justify-between: con justify-between la columna del medio se movía según lo
// larga que fuera la fecha y las filas parecían colocadas cada una por su
// cuenta. En el móvil las tres se apilan y siguen centradas.
function estado(plazas: number) {
  if (plazas === 0) return { texto: 'Completa', clase: 'text-suave' }
  if (plazas === 1) return { texto: 'Última plaza', clase: 'text-terracota-acento' }
  if (plazas === 2) return { texto: 'Últimas dos plazas', clase: 'text-terracota-acento' }
  return { texto: `${plazas} plazas`, clase: 'text-suave' }
}

// A qué viaje del catálogo pertenece una fecha. Cuando el destino tiene un
// solo viaje, es ese. Cuando tiene varios, la fecha lleva escrito el nombre
// corto del suyo («Cinque Terre») y se busca dentro del nombre completo
// («Cinque Terre y el golfo de los Poetas»).
function viajeDeLaFecha(viajes: Viaje[], etiqueta?: string): Viaje | undefined {
  if (!etiqueta) return viajes.length === 1 ? viajes[0] : undefined

  const buscado = etiqueta.toLowerCase()
  return viajes.find(({ nombre }) => nombre.toLowerCase().includes(buscado))
}

export default function Salidas({
  nombre,
  salidas,
  viajes = [],
}: {
  nombre: string
  salidas: SalidasDeDestino
  /** Los viajes que el catálogo tiene en este destino, para enlazar cada fecha con el suyo. */
  viajes?: Viaje[]
}) {
  const { temporada, porque, fechas } = salidas

  // El correo es para las salidas completas y para las fechas de un viaje que
  // ya no está en el catálogo: en los dos casos no hay nada que reservar aquí.
  const correo = (dia: string) =>
    `mailto:${CORREO}?subject=${encodeURIComponent(`Lista de espera · ${nombre}, ${dia}`)}`

  return (
    <div>
      <div className="grid gap-x-20 gap-y-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div>
          <p className="u-etiqueta text-terracota-acento">Se viaja</p>
          <p className="u-titular mt-5 text-2xl leading-snug md:text-3xl">{temporada}</p>
        </div>

        <p className="leading-relaxed text-suave md:text-lg">{porque}</p>
      </div>

      {/* Las tres columnas van rotuladas y centradas: salidas, plazas y
          reservas, con el mismo peso y la misma separación. */}
      <ul className="mt-16 md:mt-20">
        <li className="hidden pb-5 text-center md:grid md:grid-cols-3 md:gap-x-10">
          <p className="u-etiqueta text-suave">Salidas</p>
          <p className="u-etiqueta text-suave">Plazas</p>
          <p className="u-etiqueta text-suave">Reservas</p>
        </li>

        {fechas.map(({ id, viaje, dia, plazas }) => {
          const { texto, clase } = estado(plazas)
          const completa = plazas === 0

          // La reserva se hace en la ficha del viaje, que es donde está el
          // formulario que llama a la API. El botón lleva hasta ese bloque.
          const suyo = viajeDeLaFecha(viajes, viaje)
          const reservable = !completa && suyo

          return (
            <li
              key={id}
              className="grid gap-y-4 border-t border-tinta/12 py-8 text-center md:grid-cols-3 md:items-center md:gap-x-10"
            >
              <div>
                {/* Cuando un destino tiene más de un viaje, la fecha sola no
                    dice bastante: hay que saber a cuál pertenece. */}
                {viaje && <p className="u-etiqueta text-suave">{viaje}</p>}

                <p className="u-titular text-xl md:text-2xl">{dia}</p>
              </div>

              <p className={`u-etiqueta u-cifras ${clase}`}>{texto}</p>

              <p className="justify-self-center">
                <Boton
                  a={reservable ? RUTAS.reservarViaje(suyo.id) : correo(dia)}
                  variante={reservable ? 'principal' : 'contorno'}
                  compacto
                >
                  {reservable ? 'Reservar plaza' : 'Lista de espera'}
                </Boton>
              </p>
            </li>
          )
        })}
      </ul>

      <p className="mt-10 text-sm leading-relaxed text-suave">
        Las salidas se confirman con cinco viajeros y no pasan de ocho. Si una fecha no os encaja,
        escribidnos: el mismo itinerario se monta en privado para vuestro grupo.
      </p>
    </div>
  )
}
