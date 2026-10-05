import { Link } from 'react-router-dom'

import { IMAGEN_POR_DEFECTO } from '@/config/constantes'
import { buscarDestino, fotoAlternativa, textoDeFoto } from '@/config/destinos'
import { formatearPrecio, contarNoches } from '@/formato'
import type { Viaje } from '@/tipos'
import { RUTAS } from '@/config/rutas'

// Los viajes que se cierran antes. Misma retícula de fichas que NUBA, pero
// con dos diferencias respecto al catálogo de abajo:
//
//  · la fotografía NO es la del viaje, es la que el destino tiene elegida
//    como destacada, para que las dos secciones no se repitan;
//  · lleva encima el aviso de plazas, que es lo que da la urgencia.
//
// El texto alternativo sale de esa misma fotografía en la galería del
// destino, no del nombre del viaje: quien usa un lector de pantalla tiene que
// oír lo que hay en la imagen.
type PropsDeDestacado = Pick<
  Viaje,
  'id' | 'nombre' | 'destino' | 'precio' | 'duracionDias' | 'disponible'
> &
  Partial<Pick<Viaje, 'imagen'>>

function Destacado({
  id,
  nombre,
  destino,
  imagen,
  precio,
  duracionDias,
  disponible,
}: PropsDeDestacado) {
  const suyo = buscarDestino(destino)
  const foto = fotoAlternativa(destino, imagen || IMAGEN_POR_DEFECTO, nombre)

  return (
    <article className="group flex h-full flex-col">
      <Link to={RUTAS.viaje(id)} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={foto}
            alt={textoDeFoto(suyo, foto) || `${nombre}, en ${destino}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.06]"
          />

          <p className="absolute left-0 top-0 bg-crema px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="u-etiqueta text-terracota-acento">
              {disponible ? 'Últimas plazas' : 'Lista de espera'}
            </span>
          </p>
        </div>
      </Link>

      <p className="u-etiqueta mt-4 text-suave sm:mt-6">{destino}</p>

      <h3 className="u-titular mt-2 text-lg leading-snug sm:mt-3 sm:text-2xl">
        <Link to={RUTAS.viaje(id)} className="transition group-hover:text-terracota-acento">
          {nombre}
        </Link>
      </h3>

      {/* mt-auto baja el pie: las cuatro columnas acaban a la misma altura. */}
      <div className="mt-auto pt-5 sm:pt-7">
        <div className="Filete" />
        <p className="u-etiqueta u-cifras mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-suave">
          <span className="text-tinta">Desde {formatearPrecio(precio)} €</span>
          <span aria-hidden="true">·</span>
          <span>{duracionDias} días · {contarNoches(duracionDias)} noches</span>
        </p>
      </div>
    </article>
  )
}

export default function Destacados({ viajes }: { viajes: Viaje[] }) {
  return (
    <div className="grid grid-cols-2 items-stretch gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
      {viajes.map(({ id, ...resto }) => (
        <Destacado key={id} id={id} {...resto} />
      ))}
    </div>
  )
}
