import { Link } from 'react-router-dom'

import { IMAGEN_POR_DEFECTO } from '@/config/constantes'
import { formatearPrecio } from '@/formato'

// Los tres destinos destacados de NUBA: foto grande, el destino en
// mayúsculas, un titular en serif, un párrafo y un enlace de contacto.
// Deconstruimos cada viaje dentro del map y esparcimos el resto aquí.
function Destacado({ id, nombre, destino, descripcion, imagen, precio }) {
  return (
    <article className="group flex h-full flex-col">
      <Link to={`/viaje/${id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={imagen || IMAGEN_POR_DEFECTO}
            alt={nombre}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.06]"
          />
        </div>
      </Link>

      <p className="etiqueta mt-7 text-suave">{destino}</p>

      <h3 className="titular mt-4 text-3xl">
        <Link to={`/viaje/${id}`} className="transition group-hover:text-terracota-acento">
          {nombre}
        </Link>
      </h3>

      {descripcion && (
        <p className="mt-4 line-clamp-3 leading-relaxed text-suave">{descripcion}</p>
      )}

      {/* mt-auto baja el enlace: las tres columnas acaban a la misma altura. */}
      <p className="etiqueta mt-auto pt-8">
        <Link
          to={`/viaje/${id}`}
          className="cifras border-b border-tinta/25 pb-1 transition hover:border-tinta"
        >
          Desde {formatearPrecio(precio)} € · Consultar
        </Link>
      </p>
    </article>
  )
}

export default function Destacados({ viajes }) {
  return (
    <div className="grid items-stretch gap-12 md:grid-cols-3 md:gap-10">
      {viajes.map(({ _id, ...resto }) => (
        <Destacado key={_id} id={_id} {...resto} />
      ))}
    </div>
  )
}
