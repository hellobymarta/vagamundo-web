import Silueta from '@/components/silueta'
import Boton from '@/components/boton'
import { useCarrusel } from '@/hooks/use-carrusel'
import { IMAGEN_POR_DEFECTO } from '@/config/constantes'
import { buscarDestino, fotoDeDestino, nombreCorto } from '@/config/destinos'
import type { Destino } from '@/config/destinos'
import type { Viaje } from '@/tipos'
import { RUTAS } from '@/config/rutas'

// Explorador de países, al modo del hero de destinos de Utópica.
//
// El título grande en cursiva es el nombre del SITIO («Chile», «Omán»,
// «Maldivas»), no el del viaje. Por eso en su web nunca se descuadra: son una
// o dos palabras. El nombre del viaje va en pequeño encima, y a los lados van
// otra vez los sitios.
//
// Cada diapositiva es un PAÍS, no un viaje. El modelo de la API guarda un
// `destino` de texto libre («Costa amalfitana, Italia», «Toscana», «Cinque
// Terre»), así que tres viajes distintos pueden caer en el mismo país: si se
// recorriera la lista de viajes, Italia saldría tres veces seguidas. Aquí se
// agrupan antes de pintar, con la misma tabla de destinos que usa el resto de
// la web, y los tres viajes italianos siguen estando, dentro de Italia.

/** Un país del explorador, con todos los viajes que caen dentro de él. */
interface PaisDelExplorador {
  clave: string
  nombre: string
  /** La ficha del destino, si ese país está en la tabla de destinos. */
  destino: Destino | null
  /** El texto de referencia para la silueta y la fotografía. */
  referencia: string
  viajes: Viaje[]
}

function agruparPorPais(viajes: Viaje[]): PaisDelExplorador[] {
  const paises: PaisDelExplorador[] = []

  for (const viaje of viajes) {
    const destino = buscarDestino(viaje.destino)

    // Si el país no está en la tabla, el nombre corto hace de clave: así un
    // viaje a un sitio que todavía no tiene ficha no desaparece del carrusel.
    const clave = destino ? destino.id : nombreCorto(viaje.destino)
    const encontrado = paises.find((uno) => uno.clave === clave)

    if (encontrado) {
      encontrado.viajes.push(viaje)
      continue
    }

    paises.push({
      clave,
      nombre: destino ? destino.nombre : nombreCorto(viaje.destino),
      destino,
      referencia: viaje.destino,
      viajes: [viaje],
    })
  }

  return paises
}

export default function Explorador({ viajes }: { viajes: Viaje[] }) {
  const paises = agruparPorPais(viajes)
  const { indice, siguiente, anterior } = useCarrusel(paises.length)

  if (paises.length === 0) return null

  const pais = paises[indice]
  const anteriorPais = paises[(indice - 1 + paises.length) % paises.length]
  const siguientePais = paises[(indice + 1) % paises.length]

  const { clave, nombre, destino, referencia } = pais
  const cuantos = pais.viajes.length
  const unico = cuantos === 1 ? pais.viajes[0] : null

  // Con un solo viaje se enseña el suyo; con varios, la entradilla del país,
  // que es la que habla del sitio y no de una salida concreta.
  const texto = unico ? unico.descripcion : destino?.entradilla

  // El botón dice siempre «Explora», igual en todas las diapositivas, y lo
  // que cambia es a dónde lleva: a la ficha del viaje cuando el país solo
  // tiene uno, y a la página del país cuando tiene varios, que es donde
  // están todos.
  const enlace = destino && !unico ? RUTAS.destino(destino.id) : RUTAS.viaje(pais.viajes[0].id)

  return (
    <section className="relative h-[92vh] min-h-[620px] overflow-hidden bg-tinta">
      {/* Las fotos van todas montadas y solo se enciende la que toca:
          así el cambio es un fundido y no un salto en blanco. */}
      {paises.map((uno) => (
        <img
          key={uno.clave}
          src={uno.viajes[0].imagen || fotoDeDestino(uno.referencia, IMAGEN_POR_DEFECTO)}
          alt={uno.clave === clave ? uno.nombre : ''}
          aria-hidden={uno.clave !== clave}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            uno.clave === clave ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Utópica apaga mucho la foto: casi todo el peso lo lleva el texto. */}
      <div className="absolute inset-0 bg-tinta/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-tinta/40 via-transparent to-tinta/45" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 md:px-10">
        {/* El contorno del país. La key hace que el trazo se vuelva a dibujar
            cada vez que cambia el país. */}
        <div key={clave} className="text-white/80">
          <Silueta destino={referencia} />
        </div>

        {/* Los tres sitios, con el actual grande en el centro. */}
        <div className="mt-12 grid w-full max-w-[1280px] grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <button
            type="button"
            onClick={anterior}
            className="u-titularCursiva u-zonaTactil hidden min-w-0 cursor-pointer whitespace-normal text-left text-xl leading-tight text-white/45 transition hover:text-white/80 lg:block"
            aria-label={`Ver ${anteriorPais.nombre}`}
          >
            {anteriorPais.nombre}
          </button>

          {/* Altura fija. Los nombres miden lo que miden («Namibia» y
              «Polinesia Francesa» no ocupan lo mismo) y sin reservar el
              hueco la sección entera daba un salto en cada cambio. */}
          <div className="flex min-h-[7.5rem] flex-col justify-center px-2 text-center md:min-h-[9.5rem] md:px-8">
            {/* Con un viaje, su nombre; con varios, cuántos hay dentro. */}
            <p className="u-etiqueta line-clamp-1 text-white/55">
              {unico ? unico.nombre : `${cuantos} viajes`}
            </p>

            {/* Sin line-clamp: recortar líneas obliga a overflow:hidden y eso
                es justo lo que cortaba el rabo de la J. El hueco ya lo reserva
                la altura mínima del contenedor. */}
            <h2 className="u-titularCursiva u-tituloDestino mt-4 text-balance text-white">{nombre}</h2>
          </div>

          <button
            type="button"
            onClick={siguiente}
            className="u-titularCursiva u-zonaTactil hidden min-w-0 cursor-pointer whitespace-normal text-right text-xl leading-tight text-white/45 transition hover:text-white/80 lg:block"
            aria-label={`Ver ${siguientePais.nombre}`}
          >
            {siguientePais.nombre}
          </button>
        </div>

        {/* Lo mismo con la descripción: se recorta a tres líneas y el hueco
            está reservado, aunque el país venga sin ella. */}
        <p className="mt-8 line-clamp-4 min-h-[6.5rem] max-w-xl text-center leading-relaxed text-white/85 md:line-clamp-3 md:min-h-[5rem]">
          {texto}
        </p>

        <div className="mt-10">
          <Boton a={enlace} variante="claro">
            Explora
          </Boton>
        </div>

        {/* Solo dos flechas, muy separadas, como en Utópica. */}
        <div className="mt-14 flex items-center gap-14">
          <button
            type="button"
            onClick={anterior}
            className="u-zonaTactil cursor-pointer text-3xl font-light text-white/60 transition hover:text-white"
            aria-label="País anterior"
          >
            ←
          </button>
          <button
            type="button"
            onClick={siguiente}
            className="u-zonaTactil cursor-pointer text-3xl font-light text-white/60 transition hover:text-white"
            aria-label="País siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
