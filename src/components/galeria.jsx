// La galería de un destino: «Lo que vas a ver».
//
// Aquí la fotografía manda. El texto va encima de la imagen, no al lado: al
// lado, la foto se convierte en una ilustración de acompañamiento y lo que se
// quiere es lo contrario.
//
// Hay dos formatos, y no es un capricho de maquetación. Una fotografía
// vertical metida a la fuerza en un bloque apaisado se recorta por arriba y
// por abajo, y eso se comía la corona y el pedestal de la Estatua de la
// Libertad, la pagoda de Nara o las terrazas de Pamukkale. Las verticales van
// en su propio marco, centradas y enteras; las apaisadas van a sangre, de
// borde a borde. De paso, alternar los dos formatos rompe la monotonía de una
// galería en la que todas las fotos tienen la misma proporción.
//
// Qué foto es vertical no se decide a ojo: está medido sobre el archivo y
// anotado en config/destinos.js con «vertical: true».
//
// La legibilidad no se deja al azar. Sobre cada foto van dos velos, uno de
// abajo arriba y otro desde la izquierda, que garantizan contraste tanto si
// la imagen es una duna clara como si es una cueva.
//
// Deconstruimos cada foto dentro del map y la key es su id, nunca la posición.
const ALTA = 'h-[78vh] min-h-[460px] md:h-[86vh]'
const NORMAL = 'h-[58vh] min-h-[360px] md:h-[66vh]'

// El número de cada bloque y su formato dependen del orden, así que se
// calculan aquí, en un bucle, y no dentro del map: en el map no se usa la
// posición para nada.
function preparar(fotos) {
  const bloques = []

  for (const foto of fotos) {
    const posicion = bloques.length

    bloques.push({
      ...foto,
      numero: String(posicion + 1).padStart(2, '0'),
      destacada: posicion === 0 || posicion % 3 === 2,
      primera: posicion === 0,
    })
  }

  return bloques
}

export default function Galeria({ fotos }) {
  if (!fotos || fotos.length === 0) return null

  return (
    <div className="space-y-8 md:space-y-12">
      {preparar(fotos).map(({ id, foto, alt, rotulo, pie, vertical, numero, destacada, primera }) => {

        // La vertical no sangra: se queda en una columna centrada con su
        // propia proporción, así se ve la fotografía entera.
        const marco = vertical
          ? 'mx-auto aspect-[4/5] w-full max-w-[34rem] md:max-w-[42rem]'
          : `-mx-6 md:-mx-10 ${destacada ? ALTA : NORMAL}`

        return (
          <figure key={id} className={`group relative overflow-hidden ${marco}`}>
            <img
              src={foto}
              alt={alt}
              loading={primera ? 'eager' : 'lazy'}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-[1600ms] ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

            <figcaption
              className={`absolute inset-x-0 bottom-0 pb-10 text-white md:pb-14 ${
                vertical ? 'px-6 md:px-10' : 'px-6 md:px-14'
              }`}
            >
              <p className="etiqueta text-white/70">{numero}</p>

              <p
                className={`titular mt-4 leading-tight ${
                  vertical ? 'text-3xl md:text-4xl' : 'text-3xl md:text-5xl'
                }`}
              >
                {rotulo}
              </p>

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
