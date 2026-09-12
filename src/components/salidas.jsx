import Boton from '@/components/boton'
import { PARAMETRO_PROPUESTA } from '@/config/constantes'

// Las salidas de un destino: la ventana en la que se viaja, por qué es esa y
// las fechas concretas con las plazas que quedan.
//
// Las plazas son un número del 0 al 8. Cero significa completa, y entonces la
// fila no ofrece reservar: propone la lista de espera, que es lo honesto.
//
// Deconstruimos cada fecha dentro del map y la key es su id, nunca la posición.
//
// Cada fila es una rejilla de tres columnas iguales y centradas, no un
// justify-between: con justify-between la columna del medio se movía según lo
// larga que fuera la fecha y las filas parecían colocadas cada una por su
// cuenta. En el móvil las tres se apilan y siguen centradas.
function estado(plazas) {
  if (plazas === 0) return { texto: 'Completa', clase: 'text-suave/60' }
  if (plazas === 1) return { texto: 'Última plaza', clase: 'text-terracota-acento' }
  if (plazas === 2) return { texto: 'Últimas dos plazas', clase: 'text-terracota-acento' }
  return { texto: `${plazas} plazas`, clase: 'text-suave' }
}

export default function Salidas({ nombre, salidas }) {
  const { temporada, porque, fechas } = salidas
  const destino = encodeURIComponent(nombre)

  return (
    <div>
      <div className="grid gap-x-20 gap-y-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div>
          <p className="etiqueta text-terracota-acento">Se viaja</p>
          <p className="titular mt-5 text-2xl leading-snug md:text-3xl">{temporada}</p>
        </div>

        <p className="leading-relaxed text-suave md:text-lg">{porque}</p>
      </div>

      {/* Las tres columnas van rotuladas y centradas: salidas, plazas y
          reservas, con el mismo peso y la misma separación. */}
      <ul className="mt-16 md:mt-20">
        <li className="hidden pb-5 text-center md:grid md:grid-cols-3 md:gap-x-10">
          <p className="etiqueta text-suave">Salidas</p>
          <p className="etiqueta text-suave">Plazas</p>
          <p className="etiqueta text-suave">Reservas</p>
        </li>

        {fechas.map(({ id, dia, plazas }) => {
          const { texto, clase } = estado(plazas)
          const completa = plazas === 0

          return (
            <li
              key={id}
              className="grid gap-y-4 border-t border-tinta/12 py-8 text-center md:grid-cols-3 md:items-center md:gap-x-10"
            >
              <p className="titular text-xl md:text-2xl">{dia}</p>

              <p className={`etiqueta cifras ${clase}`}>{texto}</p>

              <p className="justify-self-center">
                <Boton
                  a={`/nuevo?${PARAMETRO_PROPUESTA}=${destino}`}
                  variante={completa ? 'contorno' : 'principal'}
                  compacto
                >
                  {completa ? 'Lista de espera' : 'Reservar plaza'}
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
