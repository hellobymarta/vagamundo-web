import Silueta from '@/components/silueta'
import Boton from '@/components/boton'
import { useCarrusel } from '@/hooks/use-carrusel'
import { IMAGEN_POR_DEFECTO } from '@/config/constantes'

// Explorador de viajes, calcado del hero de destinos de Utópica: la foto a
// sangre, el contorno del país dibujándose arriba, el nombre en cursiva
// serif en el centro, los vecinos apagados a los lados y dos flechas abajo.
export default function Explorador({ viajes }) {
  const { indice, siguiente, anterior } = useCarrusel(viajes.length)

  if (viajes.length === 0) return null

  const viaje = viajes[indice]
  const anteriorViaje = viajes[(indice - 1 + viajes.length) % viajes.length]
  const siguienteViaje = viajes[(indice + 1) % viajes.length]

  const { _id, nombre, destino, descripcion, imagen } = viaje

  return (
    <section className="relative h-[92vh] min-h-[620px] overflow-hidden bg-tinta">
      {/* Las fotos van todas montadas y solo se enciende la que toca:
          así el cambio es un fundido y no un salto en blanco. */}
      {viajes.map(({ _id: id, imagen: foto, nombre: titulo }) => (
        <img
          key={id}
          src={foto || IMAGEN_POR_DEFECTO}
          alt={id === _id ? titulo : ''}
          aria-hidden={id !== _id}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            id === _id ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Utópica apaga mucho la foto: casi todo el peso lo lleva el texto. */}
      <div className="absolute inset-0 bg-tinta/66" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 md:px-10">
        {/* El contorno del país. La key hace que el trazo se vuelva a dibujar
            cada vez que cambia el destino. */}
        <div key={destino} className="text-white/80">
          <Silueta destino={destino} />
        </div>

        {/* Los tres nombres, con el actual grande en el centro. */}
        <div className="mt-14 grid w-full max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <button
            onClick={anterior}
            className="titular-cursiva hidden min-w-0 cursor-pointer whitespace-normal text-left text-2xl leading-tight text-white/50 transition hover:text-white/80 md:block"
            aria-label={`Ver ${anteriorViaje.nombre}`}
          >
            {anteriorViaje.nombre}
          </button>

          <h2 className="titular-cursiva t-destino px-4 text-center text-white md:px-10">
            {nombre}
          </h2>

          <button
            onClick={siguiente}
            className="titular-cursiva hidden min-w-0 cursor-pointer whitespace-normal text-right text-2xl leading-tight text-white/50 transition hover:text-white/80 md:block"
            aria-label={`Ver ${siguienteViaje.nombre}`}
          >
            {siguienteViaje.nombre}
          </button>
        </div>

        {descripcion && (
          <p className="mt-7 max-w-xl text-center leading-relaxed text-white/85">{descripcion}</p>
        )}

        <div className="mt-10">
          <Boton a={`/viaje/${_id}`} variante="claro">
            Explora
          </Boton>
        </div>

        {/* Solo dos flechas, muy separadas, como en Utópica. */}
        <div className="mt-16 flex items-center gap-14">
          <button
            onClick={anterior}
            className="cursor-pointer text-3xl font-light text-white/60 transition hover:text-white"
            aria-label="Viaje anterior"
          >
            ←
          </button>
          <button
            onClick={siguiente}
            className="cursor-pointer text-3xl font-light text-white/60 transition hover:text-white"
            aria-label="Viaje siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
