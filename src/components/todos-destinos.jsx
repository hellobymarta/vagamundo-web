import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CONTINENTES_CON_DESTINOS, viajesDeDestino } from '@/config/destinos'

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
export default function TodosDestinos({ viajes }) {
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
        {CONTINENTES_CON_DESTINOS.map(({ nombre }, posicion) => (
          <div key={nombre} className="flex shrink-0 items-center gap-6 md:gap-8">
            {/* El punto separador va entre continentes, nunca delante del
                primero, y no lo lee el lector de pantalla. */}
            {posicion > 0 && (
              <span aria-hidden="true" className="text-suave/40">
                ·
              </span>
            )}

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
          </div>
        ))}
      </div>

      {/* Los sitios del continente abierto. La key del contenedor es su
          nombre, así que al cambiar de pestaña React rehace el bloque. */}
      <div
        key={elegido.nombre}
        className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-5 md:mt-16 md:gap-x-14"
      >
        {elegido.destinos.map(({ id, nombre: pais }) => {
          const cuantos = viajesDeDestino(viajes, id).length

          return (
            <Link
              key={id}
              to={`/destinos/${id}`}
              className="group flex items-baseline gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
            >
              <span
                className={`titular text-2xl transition group-hover:text-terracota-acento md:text-3xl ${
                  cuantos > 0 ? 'text-tinta' : 'text-suave/45'
                }`}
              >
                {pais}
              </span>

              <span className="etiqueta cifras text-suave/70">
                {cuantos > 0 ? cuantos : '—'}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
