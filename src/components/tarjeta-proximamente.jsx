import { Link } from 'react-router-dom'

import Silueta from '@/components/silueta'

// La ficha de un destino que todavía no hemos abierto, para que el catálogo
// los enseñe sin dar a entender que se pueden reservar.
//
// Comparte medidas y ritmo con TarjetaViaje —misma proporción de imagen,
// mismos huecos— pero no lleva precio, ni duración, ni enlace a un viaje que
// no existe: lleva a la página del destino.
//
// No tienen fotografía a propósito: en su hueco va el contorno del país.
export default function TarjetaProximamente({ id, nombre, continente, titular, entradilla, foto, fotoAlt }) {
  return (
    <article className="group flex flex-col">
      <Link
        to={`/destinos/${id}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-noche">
          {foto ? (
            <img
              src={foto}
              alt={fotoAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-[1400ms] ease-out group-hover:opacity-80"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/25 transition duration-700 group-hover:text-white/40">
              <Silueta destino={nombre} tamano={110} />
            </div>
          )}

          <p className="etiqueta absolute left-3 top-3 bg-crema/95 px-2 py-1 text-tinta sm:left-5 sm:top-5 sm:px-3 sm:py-1.5">
            Próximamente
          </p>
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-4 sm:pt-7">
        {/* El continente, no el año: el año ya lo dicen la chapa de la foto
            y el pie de la ficha, y repetirlo tres veces no informa de nada. */}
        <p className="etiqueta text-suave">{continente}</p>

        <h3 className="titular mt-3 text-lg leading-snug sm:mt-4 sm:text-2xl">
          <Link to={`/destinos/${id}`} className="transition group-hover:text-terracota-acento">
            {nombre}
          </Link>
        </h3>

        <p className="mt-1.5 text-xs text-suave sm:mt-2 sm:text-sm">{titular}</p>

        <p className="mt-4 hidden line-clamp-2 text-sm leading-relaxed text-suave sm:block">{entradilla}</p>

        {/* mt-auto deja el pie a la altura del de las demás fichas. */}
        <div className="mt-auto pt-5 sm:pt-8">
          <div className="filete" />
          <p className="etiqueta mt-4 text-suave">Abre en 2027 · Te avisamos</p>
        </div>
      </div>
    </article>
  )
}
