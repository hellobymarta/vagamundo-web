import { Link } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Silueta from '@/components/silueta'
import Cargando from '@/components/cargando'
import { useViajes } from '@/hooks/use-viajes'
import { CONTINENTES_CON_DESTINOS } from '@/config/destinos'
import { FOTOS, TONOS } from '@/config/constantes'

// Índice de destinos, como el de NUBA: la lista agrupada por continente,
// con una ficha por sitio. Cada una lleva a la página de ese destino.
function FichaDestino({ id, nombre, foto, fotoAlt, titular, proximamente, salidas }) {
  return (
    <article className="group">
      <Link
        to={`/destinos/${id}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* Los destinos en preparación no llevan fotografía: en su hueco se
              dibuja el contorno del país, que es lo único que tenemos de
              verdad de un sitio al que todavía no hemos llevado a nadie. */}
          {foto ? (
            <img
              src={foto}
              alt={fotoAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.06]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-noche text-white/25">
              <Silueta destino={nombre} tamano={150} />
            </div>
          )}

          <div className="absolute inset-0 bg-tinta/15 transition duration-700 group-hover:bg-tinta/5" />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-20 text-white">
            <h3 className="titular text-3xl">{nombre}</h3>
            {/* El estado sale del destino, no de cuántos viajes tenga: un
                sitio abierto puede estar entre temporadas. */}
            <p className="etiqueta mt-2 text-white/70">
              {proximamente
                ? 'Próximamente'
                : salidas
                  ? `Sale el ${salidas.fechas[0].dia}`
                  : 'Consultar salidas'}
            </p>
          </div>
        </div>
      </Link>

      <p className="mt-5 text-sm leading-relaxed text-suave">{titular}</p>
    </article>
  )
}

export default function Destinos() {
  const { cargando } = useViajes()

  return (
    <>
      <Portada
        imagen={FOTOS.INDIA}
        alt="El Taj Mahal visto desde el arco de la Gran Puerta de Agra"
        etiqueta="Destinos"
        titulo="Ninguno elegido por casualidad"
        texto="Solo se abre lo que hemos recorrido antes nosotras, entero y en la misma época del año. Cuando un destino todavía no está listo, lo decimos en vez de disimularlo."
        alto="h-[72vh]"
      />

      {cargando ? (
        <Cargando texto="Consultando el catálogo…" />
      ) : (
        CONTINENTES_CON_DESTINOS.map(({ nombre, destinos, tono }) => (
          <Seccion
            key={nombre}
            tono={tono}
            etiqueta={nombre}
            titulo={`${destinos.length} ${destinos.length === 1 ? 'destino' : 'destinos'}`}
          >
            <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {destinos.map(({ id, ...resto }) => (
                <FichaDestino
                  key={id}
                  id={id}
                  {...resto}
                />
              ))}
            </div>
          </Seccion>
        ))
      )}
    </>
  )
}
