import { Link } from 'react-router-dom'

import { IMAGEN_POR_DEFECTO } from '@/config/constantes'
import { fotoAlternativa } from '@/config/destinos'
import { formatearPrecio, contarNoches } from '@/formato'

// Los viajes que se cierran antes. Misma retícula de fichas que NUBA, pero
// con dos diferencias respecto al catálogo de abajo:
//
//  · la fotografía NO es la del viaje, es otra del mismo sitio (la primera
//    de su galería), para que las dos secciones no se repitan;
//  · lleva encima el aviso de plazas, que es lo que da la urgencia.
//
// Deconstruimos cada viaje dentro del map y esparcimos el resto aquí.
function Destacado({ id, nombre, destino, imagen, precio, duracionDias, disponible }) {
  return (
    <article className="group flex h-full flex-col">
      <Link to={`/viaje/${id}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={fotoAlternativa(destino, imagen || IMAGEN_POR_DEFECTO)}
            alt={`${nombre}, en ${destino}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.06]"
          />

          <p className="absolute left-0 top-0 bg-crema px-4 py-2">
            <span className="etiqueta text-terracota-acento">
              {disponible ? 'Últimas plazas' : 'Lista de espera'}
            </span>
          </p>
        </div>
      </Link>

      <p className="etiqueta mt-6 text-suave">{destino}</p>

      <h3 className="titular mt-3 text-2xl leading-snug">
        <Link to={`/viaje/${id}`} className="transition group-hover:text-terracota-acento">
          {nombre}
        </Link>
      </h3>

      {/* mt-auto baja el pie: las cuatro columnas acaban a la misma altura. */}
      <div className="mt-auto pt-7">
        <div className="filete" />
        <p className="etiqueta cifras mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-suave">
          <span className="text-tinta">Desde {formatearPrecio(precio)} €</span>
          <span aria-hidden="true">·</span>
          <span>{duracionDias} días · {contarNoches(duracionDias)} noches</span>
        </p>
      </div>
    </article>
  )
}

export default function Destacados({ viajes }) {
  return (
    <div className="grid items-stretch gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
      {viajes.map(({ _id, ...resto }) => (
        <Destacado key={_id} id={_id} {...resto} />
      ))}
    </div>
  )
}
