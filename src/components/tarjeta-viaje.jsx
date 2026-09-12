import { Link } from 'react-router-dom'

import { IMAGEN_POR_DEFECTO } from '@/config/constantes'
import { fotoDeDestino } from '@/config/destinos'
import { contarNoches, formatearPrecio } from '@/formato'

// Ficha del catálogo: foto, etiqueta de categoría, título serif, filete y el
// precio en el formato de Wilderness («Desde X € por persona»).
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
    // El id hace de ancla: las portadas del hero enlazan con la ficha de su
    // destino, no con el principio del catálogo. El hueco de la cabecera fija
    // lo pone el scroll-margin-top que index.css aplica a todo [id].
    <article id={`viaje-${id}`} className="group flex flex-col">
      <Link to={`/viaje/${id}`} className="block">
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={imagen || fotoDeDestino(destino, IMAGEN_POR_DEFECTO)}
            alt={nombre}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.07]"
          />

          {/* Un velo que se va al pasar por encima: la foto "despierta". */}
          <div className="absolute inset-0 bg-tinta/10 transition duration-700 group-hover:bg-transparent" />

          {!disponible && (
            <p className="etiqueta absolute left-5 top-5 bg-crema/95 px-3 py-1.5 text-tinta">
              Plazas agotadas
            </p>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-7">
        <p className="etiqueta text-suave">{categoria || 'Viaje'}</p>

        <h3 className="titular mt-4 text-2xl">
          <Link to={`/viaje/${id}`} className="transition group-hover:text-terracota-acento">
            {nombre}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-suave">{destino}</p>

        {descripcion && (
          <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-suave">{descripcion}</p>
        )}

        {/* mt-auto empuja el precio abajo: así todas las fichas
            de la fila acaban a la misma altura. */}
        <div className="mt-auto pt-8">
          <div className="filete" />

          <p className="cifras mt-4 text-sm text-suave">
            Desde <span className="titular text-lg text-tinta">{formatearPrecio(precio)} €</span> por persona
          </p>
          <p className="etiqueta cifras mt-2 text-suave">
            {duracionDias} días · {contarNoches(duracionDias)} noches
          </p>
        </div>
      </div>
    </article>
  )
}
