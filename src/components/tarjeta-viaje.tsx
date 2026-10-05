import { Link } from 'react-router-dom'

import { IMAGEN_POR_DEFECTO } from '@/config/constantes'
import { fotoDeDestino } from '@/config/destinos'
import { contarNoches, formatearPrecio } from '@/formato'
import type { Viaje } from '@/tipos'
import { RUTAS } from '@/config/rutas'

// Ficha del catálogo: foto, etiqueta de categoría, título serif, filete y el
// precio en el formato de Wilderness («Desde X € por persona»).
// Recibe los datos del viaje sueltos, uno por prop, para que el listado no
// tenga que armar nada antes de pintarlos.
// Recibe los campos del viaje sueltos, no el objeto entero: la lista los
// reparte con el operador spread y así la ficha declara justo lo que pinta.
type PropsDeTarjeta = Pick<
  Viaje,
  'id' | 'nombre' | 'destino' | 'precio' | 'duracionDias' | 'disponible'
> &
  Partial<Pick<Viaje, 'descripcion' | 'imagen' | 'categoria'>>

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
}: PropsDeTarjeta) {
  return (
    // El id hace de ancla: las portadas del hero enlazan con la ficha de su
    // destino, no con el principio del catálogo. El hueco de la cabecera fija
    // lo pone el scroll-margin-top que index.css aplica a todo [id].
    <article id={`viaje-${id}`} className="group flex flex-col">
      <Link to={RUTAS.viaje(id)} className="block">
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
            <p className="u-etiqueta absolute left-3 top-3 bg-crema/95 px-2 py-1 text-tinta sm:left-5 sm:top-5 sm:px-3 sm:py-1.5">
              Plazas agotadas
            </p>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-4 sm:pt-7">
        <p className="u-etiqueta text-suave">{categoria || 'Viaje'}</p>

        <h3 className="u-titular mt-3 text-lg leading-snug sm:mt-4 sm:text-2xl">
          <Link to={RUTAS.viaje(id)} className="transition group-hover:text-terracota-acento">
            {nombre}
          </Link>
        </h3>

        <p className="mt-1.5 text-xs text-suave sm:mt-2 sm:text-sm">{destino}</p>

        {descripcion && (
          <p className="mt-4 hidden line-clamp-2 text-sm leading-relaxed text-suave sm:block">{descripcion}</p>
        )}

        {/* mt-auto empuja el precio abajo: así todas las fichas
            de la fila acaban a la misma altura. */}
        <div className="mt-auto pt-5 sm:pt-8">
          <div className="Filete" />

          <p className="u-cifras mt-3 text-xs text-suave sm:mt-4 sm:text-sm">
            Desde <span className="u-titular text-base text-tinta sm:text-lg">{formatearPrecio(precio)} €</span> por persona
          </p>
          <p className="u-etiqueta u-cifras mt-2 text-suave">
            {duracionDias} días · {contarNoches(duracionDias)} noches
          </p>
        </div>
      </div>
    </article>
  )
}
