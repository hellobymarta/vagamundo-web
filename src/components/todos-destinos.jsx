import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CONTINENTES_CON_DESTINOS } from '@/config/destinos'

// Los destinos por continente, en una sola línea.
//
// Antes eran seis columnas de listas, que en el ordenador ocupaban media
// pantalla de texto pequeño. Ahora los continentes van en una fila y debajo
// se abren los sitios del que esté elegido, como el menú desplegable de NUBA.
//
// Un solo useState, con el primer continente abierto de entrada: la sección
// nunca se ve vacía y no hace falta adivinar que hay que pulsar algo.
//
// En pantallas estrechas la fila no se parte en dos: se desplaza a lo ancho
// (.carril), que es lo que hacen las pestañas en el móvil.
export default function TodosDestinos() {
  const [abierto, setAbierto] = useState(CONTINENTES_CON_DESTINOS[0]?.nombre)

  const elegido =
    CONTINENTES_CON_DESTINOS.find(({ nombre }) => nombre === abierto) ||
    CONTINENTES_CON_DESTINOS[0]

  if (!elegido) return null

  return (
    <div>
      <div
        role="tablist"
        aria-label="Continentes"
        className="fila-scroll -mx-6 flex items-center gap-6 overflow-x-auto px-6 md:mx-0 md:justify-center md:gap-8 md:px-0"
      >
        {CONTINENTES_CON_DESTINOS.map(({ nombre }) => (
          <div key={nombre} className="group flex shrink-0 items-center gap-6 md:gap-8">
            <button
              type="button"
              role="tab"
              aria-selected={nombre === elegido.nombre}
              onClick={() => setAbierto(nombre)}
              className={`titular cursor-pointer whitespace-nowrap pb-2 text-lg tracking-[0.1em] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento md:text-xl ${
                nombre === elegido.nombre
                  ? 'border-b border-tinta text-tinta'
                  : 'border-b border-transparent text-suave hover:text-tinta'
              }`}
            >
              {nombre.toUpperCase()}
            </button>

            {/* El punto separador va entre continentes. Lo esconde el CSS en
                el último, así no hace falta saber en qué posición vamos, y el
                lector de pantalla no lo lee. */}
            <span aria-hidden="true" className="text-suave/40 group-last:hidden">
              ·
            </span>
          </div>
        ))}
      </div>

      {/* Los sitios del continente abierto. La key del contenedor es su
          nombre, así que al cambiar de pestaña React rehace el bloque. */}
      <div
        key={elegido.nombre}
        className="mt-14 flex flex-wrap items-baseline justify-center gap-x-12 gap-y-6 md:mt-16 md:gap-x-16"
      >
        {elegido.destinos.map(({ id, nombre: pais, proximamente }) => (
          <Link
            key={id}
            to={`/destinos/${id}`}
            className="group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
          >
            {/* Solo el nombre. En negro los abiertos y en gris los que todavía
                no lo están: el estado se ve sin tener que contar nada. */}
            <span
              className={`titular text-2xl transition group-hover:text-terracota-acento md:text-3xl ${
                proximamente ? 'text-suave/45' : 'text-tinta'
              }`}
            >
              {pais}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
