import { Link } from 'react-router-dom'

import {
  CATEGORIAS,
  PARAMETRO_MOTIVACION,
  PIES_MOTIVACION,
  PIE_MOTIVACION_POR_DEFECTO,
} from '@/config/constantes'

// Rejilla de motivaciones, como el «Imagina tu viaje» de Utópica.
//
// Se construye con las categorías que hay de verdad en el catálogo, no con
// una lista escrita a mano: así nunca aparece una baldosa con cero viajes,
// y si mañana se crea un viaje con una categoría nueva, sale sola.
//
// Cada baldosa filtra el catálogo escribiendo su categoría en la URL, de
// modo que el filtro se puede compartir y no hace falta guardar nada.
function ordenar(categorias) {
  // Primero las del orden de siempre; las que no estén, detrás y por alfabeto.
  return [...categorias].sort((una, otra) => {
    const posicionUna = CATEGORIAS.indexOf(una)
    const posicionOtra = CATEGORIAS.indexOf(otra)

    if (posicionUna !== -1 && posicionOtra !== -1) return posicionUna - posicionOtra
    if (posicionUna !== -1) return -1
    if (posicionOtra !== -1) return 1
    return una.localeCompare(otra, 'es')
  })
}

export default function Motivaciones({ activa, viajes }) {
  // Un Set quita las repetidas, y filtramos los viajes que vengan sin categoría.
  const categorias = ordenar(new Set(viajes.map(({ categoria }) => categoria).filter(Boolean)))

  if (categorias.length === 0) return null

  return (
    <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {categorias.map((categoria) => {
        const seleccionada = activa === categoria
        const cuantos = viajes.filter((viaje) => viaje.categoria === categoria).length
        const pie = PIES_MOTIVACION[categoria] || PIE_MOTIVACION_POR_DEFECTO

        return (
          <Link
            key={categoria}
            to={
              seleccionada ? '/#catalogo' : `/?${PARAMETRO_MOTIVACION}=${categoria}#catalogo`
            }
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
                {categoria}
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
