import { Link } from 'react-router-dom'

import { MOTIVACIONES, PARAMETRO_MOTIVACION } from '@/config/constantes'

// Rejilla de motivaciones, como el «Imagina tu viaje» de Utópica.
// Cada baldosa filtra el catálogo por su categoría escribiéndola en la URL,
// así el filtro se puede compartir y no hace falta guardar nada en estado.
// El número de viajes de cada una sale del catálogo real.
export default function Motivaciones({ activa, viajes }) {
  return (
    <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {MOTIVACIONES.map(({ id, titulo, pie }) => {
        const seleccionada = activa === id
        const cuantos = viajes.filter(({ categoria }) => categoria === id).length

        return (
          <Link
            key={id}
            to={seleccionada ? '/#catalogo' : `/?${PARAMETRO_MOTIVACION}=${id}#catalogo`}
            className="group block"
          >
            <div
              className={`filete transition-all duration-500 ${
                seleccionada ? 'bg-terracota-acento' : 'group-hover:bg-terracota-acento'
              }`}
            />

            <div className="flex items-baseline justify-between gap-4 pt-6">
              <h3
                className={`titular text-2xl transition ${
                  seleccionada ? 'text-terracota-acento' : 'group-hover:text-terracota-acento'
                }`}
              >
                {titulo}
              </h3>

              <p className="etiqueta cifras text-suave">
                {cuantos} {cuantos === 1 ? 'viaje' : 'viajes'}
              </p>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-suave">{pie}</p>

            <p
              className={`etiqueta mt-5 transition duration-300 ${
                seleccionada
                  ? 'text-terracota-acento'
                  : 'text-suave/50 group-hover:text-terracota-acento'
              }`}
            >
              {seleccionada ? 'Quitar filtro' : 'Saber más'}
            </p>
          </Link>
        )
      })}
    </div>
  )
}
