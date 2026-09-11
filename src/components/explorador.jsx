import Silueta from '@/components/silueta'
import Boton from '@/components/boton'
import { useCarrusel } from '@/hooks/use-carrusel'
import { IMAGEN_POR_DEFECTO } from '@/config/constantes'
import { fotoDeDestino, nombreCorto } from '@/config/destinos'

// Explorador de viajes, calcado del hero de destinos de Utópica.
//
// Lo importante, y lo que me faltaba: el título grande en cursiva es el
// nombre del SITIO («Chile», «Omán», «Maldivas»), no el del viaje. Por eso
// en su web nunca se descuadra: son una o dos palabras. El nombre del viaje
// va en pequeño encima, y a los lados van otra vez los sitios, no los viajes.
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
      {viajes.map(({ _id: id, imagen: foto, nombre: titulo, destino: sitio }) => (
        <img
          key={id}
          src={foto || fotoDeDestino(sitio, IMAGEN_POR_DEFECTO)}
          alt={id === _id ? titulo : ''}
          aria-hidden={id !== _id}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            id === _id ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Utópica apaga mucho la foto: casi todo el peso lo lleva el texto. */}
      <div className="absolute inset-0 bg-tinta/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-tinta/40 via-transparent to-tinta/45" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 md:px-10">
        {/* El contorno del país. La key hace que el trazo se vuelva a dibujar
            cada vez que cambia el destino. */}
        <div key={destino} className="text-white/80">
          <Silueta destino={destino} />
        </div>

        {/* Los tres sitios, con el actual grande en el centro. */}
        <div className="mt-12 grid w-full max-w-[1280px] grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <button
            onClick={anterior}
            className="titular-cursiva hidden min-w-0 cursor-pointer whitespace-normal text-left text-xl leading-tight text-white/45 transition hover:text-white/80 lg:block"
            aria-label={`Ver ${nombreCorto(anteriorViaje.destino)}`}
          >
            {nombreCorto(anteriorViaje.destino)}
          </button>

          {/* Altura fija. Los nombres miden lo que miden —«Namibia» y
              «Polinesia Francesa» no ocupan lo mismo— y sin reservar el
              hueco la sección entera daba un salto en cada cambio. */}
          <div className="flex min-h-[7.5rem] flex-col justify-center px-2 text-center md:min-h-[9.5rem] md:px-8">
            {/* El nombre del viaje, en pequeño y en mayúsculas espaciadas. */}
            <p className="etiqueta line-clamp-1 text-white/55">{nombre}</p>

            <h2 className="titular-cursiva t-destino mt-4 line-clamp-2 text-balance text-white">
              {nombreCorto(destino)}
            </h2>
          </div>

          <button
            onClick={siguiente}
            className="titular-cursiva hidden min-w-0 cursor-pointer whitespace-normal text-right text-xl leading-tight text-white/45 transition hover:text-white/80 lg:block"
            aria-label={`Ver ${nombreCorto(siguienteViaje.destino)}`}
          >
            {nombreCorto(siguienteViaje.destino)}
          </button>
        </div>

        {/* Lo mismo con la descripción: se recorta a tres líneas y el hueco
            está reservado, aunque el viaje venga sin ella. */}
        <p className="mt-8 line-clamp-4 min-h-[6.5rem] max-w-xl text-center leading-relaxed text-white/85 md:line-clamp-3 md:min-h-[5rem]">
          {descripcion}
        </p>

        <div className="mt-10">
          <Boton a={`/viaje/${_id}`} variante="claro">
            Explora
          </Boton>
        </div>

        {/* Solo dos flechas, muy separadas, como en Utópica. */}
        <div className="mt-14 flex items-center gap-14">
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
