// La galería de un destino: «Lo que vas a ver».
//
// Aquí la fotografía manda. Cada bloque es la imagen a sangre y el texto va
// encima, no al lado: el texto al lado convertía la foto en una ilustración
// de acompañamiento y lo que se quiere es lo contrario.
//
// La legibilidad no se deja al azar. Sobre cada foto van dos velos, uno de
// abajo arriba y otro desde la izquierda, que garantizan contraste tanto si
// la imagen es una duna clara como si es una cueva. El pie nunca se estira
// más de lo que se lee cómodo, y en el móvil sube el velo para compensar la
// menor altura.
//
// El ritmo lo da la altura: la primera foto y luego una de cada tres van más
// altas, y las demás quedan en formato apaisado. Deconstruimos cada foto
// dentro del map y la key es su id, nunca la posición.
const ALTA = 'h-[78vh] min-h-[460px] md:h-[86vh]'
const NORMAL = 'h-[58vh] min-h-[360px] md:h-[66vh]'

export default function Galeria({ fotos }) {
  if (!fotos || fotos.length === 0) return null

  return (
    <div className="space-y-8 md:space-y-12">
      {fotos.map(({ id, foto, alt, rotulo, pie }, posicion) => {
        const destacada = posicion === 0 || posicion % 3 === 2

        return (
          <figure
            key={id}
            className={`group relative -mx-6 overflow-hidden md:-mx-10 ${destacada ? ALTA : NORMAL}`}
          >
            <img
              src={foto}
              alt={alt}
              loading={posicion === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 h-full w-full object-cover transition duration-[1600ms] ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

            <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-10 text-white md:px-14 md:pb-14">
              <p className="etiqueta text-white/70">
                {String(posicion + 1).padStart(2, '0')}
              </p>

              <p className="titular mt-4 text-3xl leading-tight md:text-5xl">{rotulo}</p>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
                {pie}
              </p>
            </figcaption>
          </figure>
        )
      })}
    </div>
  )
}
