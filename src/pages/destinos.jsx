import { Link } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Cargando from '@/components/cargando'
import { useViajes } from '@/hooks/use-viajes'
import { CONTINENTES_CON_DESTINOS, viajesDeDestino } from '@/config/destinos'
import { FOTOS, TONOS } from '@/config/constantes'

// Índice de destinos, como el de NUBA: la lista agrupada por continente,
// con una ficha por sitio. Cada una lleva a la página de ese destino.
// Deconstruimos cada destino dentro del map y la key es su id, nunca la posición.
function FichaDestino({ id, nombre, foto, fotoAlt, titular, cuantos }) {
  return (
    <article className="group">
      <Link to={`/destinos/${id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={foto}
            alt={fotoAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-tinta/15 transition duration-700 group-hover:bg-tinta/5" />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-20 text-white">
            <h3 className="titular text-3xl">{nombre}</h3>
            <p className="etiqueta mt-2 text-white/70">
              {cuantos > 0
                ? `${cuantos} ${cuantos === 1 ? 'viaje' : 'viajes'}`
                : 'Próximamente'}
            </p>
          </div>
        </div>
      </Link>

      <p className="mt-5 text-sm leading-relaxed text-suave">{titular}</p>
    </article>
  )
}

export default function Destinos() {
  const { viajes, cargando } = useViajes()

  return (
    <>
      <Portada
        imagen={FOTOS.INDIA}
        alt="El Taj Mahal reflejado en el agua al amanecer"
        etiqueta="Destinos"
        titulo="Diez sitios, y ninguno elegido por casualidad"
        texto="Solo aparece aquí lo que hemos hecho antes nosotras. Cuando un destino todavía no está listo, lo decimos."
        alto="h-[72vh]"
      />

      {cargando ? (
        <Cargando texto="Consultando el catálogo…" />
      ) : (
        CONTINENTES_CON_DESTINOS.map(({ nombre, destinos }, posicion) => (
          <Seccion
            key={nombre}
            tono={posicion % 2 === 0 ? TONOS.CREMA : TONOS.HUESO}
            etiqueta={nombre}
            titulo={`${destinos.length} ${destinos.length === 1 ? 'destino' : 'destinos'}`}
          >
            <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {destinos.map(({ id, ...resto }) => (
                <FichaDestino
                  key={id}
                  id={id}
                  {...resto}
                  cuantos={viajesDeDestino(viajes, id).length}
                />
              ))}
            </div>
          </Seccion>
        ))
      )}
    </>
  )
}
