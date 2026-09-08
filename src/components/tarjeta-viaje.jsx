import { Link } from 'react-router-dom'

import { IMAGEN_POR_DEFECTO } from '@/config/constantes'

// Tarjeta del catálogo. Recibe las props ya deconstruidas, así en el listado
// basta con esparcir cada viaje del map sobre este componente.
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
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-arena bg-white/70 transition hover:shadow-lg">
      <Link to={`/viaje/${id}`} className="block overflow-hidden">
        <img
          src={imagen || IMAGEN_POR_DEFECTO}
          alt={nombre}
          loading="lazy"
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-humo">
          {categoria && <span>{categoria}</span>}
          {categoria && <span>·</span>}
          <span>{destino}</span>
        </div>

        <h3 className="mt-2 font-titulo text-2xl">
          <Link to={`/viaje/${id}`} className="hover:text-terracota">
            {nombre}
          </Link>
        </h3>

        {descripcion && (
          <p className="mt-2 line-clamp-3 text-sm text-humo">{descripcion}</p>
        )}

        <div className="mt-auto flex items-end justify-between pt-5">
          <p className="cifras font-titulo text-2xl">
            {precio} €
            <span className="ml-1 text-sm text-humo">/ persona</span>
          </p>
          <p className="cifras text-sm text-humo">{duracionDias} días</p>
        </div>

        {!disponible && (
          <p className="mt-3 rounded-full bg-rosa px-3 py-1 text-center text-xs text-[#8a3f2a]">
            Plazas agotadas
          </p>
        )}
      </div>
    </article>
  )
}
