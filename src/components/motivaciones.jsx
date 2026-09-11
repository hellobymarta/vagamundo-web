import { Link } from 'react-router-dom'

import { PARAMETRO_MOTIVACION } from '@/config/constantes'
import { MOTIVACIONES, esDeMotivacion } from '@/config/motivaciones'

// «Imagina tu viaje», reducido a tres puertas de entrada: playa, cultural y
// naturaleza. Cada una agrupa varias categorías de la base de datos, así que
// el catálogo se puede seguir guardando con el detalle que tenga.
//
// La motivación elegida se escribe en la URL, no en el estado: el enlace se
// puede compartir y el botón de atrás funciona solo.
//
// Deconstruimos cada motivación dentro del map y la key es su id.
export default function Motivaciones({ activa, viajes }) {
  return (
    <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
      {MOTIVACIONES.map(({ id, titulo, entradilla, texto, foto, fotoAlt }) => {
        const seleccionada = activa === id
        const cuantos = viajes.filter(({ categoria }) => esDeMotivacion(categoria, id)).length

        return (
          <Link
            key={id}
            to={seleccionada ? '/#catalogo' : `/?${PARAMETRO_MOTIVACION}=${id}#catalogo`}
            aria-pressed={seleccionada}
            className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
          >
            <div className="relative aspect-[5/6] overflow-hidden">
              <img
                src={foto}
                alt={fotoAlt}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.06] ${
                  seleccionada ? 'scale-[1.06]' : ''
                }`}
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t transition duration-700 ${
                  seleccionada
                    ? 'from-tinta/95 via-tinta/70 to-tinta/20'
                    : 'from-tinta/95 via-tinta/55 to-tinta/5 group-hover:via-tinta/65'
                }`}
              />

              <div className="absolute inset-x-0 bottom-0 px-7 pb-7 text-white">
                <p className="etiqueta text-white/60">{entradilla}</p>

                <h3 className="titular mt-3 text-3xl leading-tight">{titulo}</h3>

                {/* Altura fija: los tres pies ocupan dos líneas pasen las que
                    pasen, así las baldosas no bailan entre ellas. */}
                <p className="mt-4 min-h-[4.5rem] max-w-xs text-sm leading-relaxed text-white/75">
                  {texto}
                </p>

                <p className="etiqueta mt-5 flex items-center gap-3">
                  <span className={seleccionada ? 'text-white' : 'text-white/70'}>
                    {seleccionada ? 'Quitar filtro' : `Ver los ${cuantos}`}
                  </span>
                  <span aria-hidden="true" className="h-px w-8 bg-white/50" />
                </p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
