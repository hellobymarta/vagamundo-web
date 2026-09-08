import { Link } from 'react-router-dom'

import { IMAGEN_POR_DEFECTO } from '@/config/constantes'

// Ficha del catálogo, con el aire editorial de las webs de referencia:
// foto vertical, etiqueta de categoría, título serif, filete y precio.
// Recibe las props ya deconstruidas, así en el listado basta con esparcir
// cada viaje del map sobre este componente.
export default function TarjetaViaje({
  id,
  nombre,
  destino,
  descripcion,
  precio,
  duracionDias,
  imagen,
  categoria,
  disponible,
}) {
  return (
    <article className="group">
      <Link to={`/viaje/${id}`} className="block overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={imagen || IMAGEN_POR_DEFECTO}
            alt={nombre}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]"
          />

          {!disponible && (
            <p className="etiqueta absolute left-5 top-5 bg-white/90 px-3 py-1.5 text-tinta">
              Plazas agotadas
            </p>
          )}
        </div>
      </Link>

      <div className="pt-6">
        <p className="etiqueta text-suave">
          {categoria ? `${categoria} · ${destino}` : destino}
        </p>

        <h3 className="titular mt-3 text-2xl">
          <Link to={`/viaje/${id}`} className="transition group-hover:text-terracota-acento">
            {nombre}
          </Link>
        </h3>

        {descripcion && (
          <p className="mt-3 line-clamp-2 text-sm font-light leading-relaxed text-suave">
            {descripcion}
          </p>
        )}

        <div className="filete mt-6" />

        <div className="mt-4 flex items-baseline justify-between">
          <p className="etiqueta cifras text-suave">{duracionDias} días</p>
          <p className="titular cifras text-xl">{precio} €</p>
        </div>
      </div>
    </article>
  )
}
