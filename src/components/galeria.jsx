import Partido from '@/components/partido'

// La galería de un destino. No es una rejilla de miniaturas: son bloques
// grandes que van alternando lado, con su rótulo y su pie encima de la foto,
// como los de Utópica. Cada dos bloques, uno a sangre de ancho completo,
// para que la página respire.
//
// Deconstruimos cada foto dentro del map y la key es su id, nunca la posición.
export default function Galeria({ fotos }) {
  if (!fotos || fotos.length === 0) return null

  return (
    <div className="space-y-20 md:space-y-28">
      {fotos.map(({ id, foto, alt, rotulo, pie }, posicion) => {
        // Las de posición par van a sangre; las impares, partidas.
        const aSangre = posicion % 3 === 2

        if (aSangre) {
          return (
            <figure key={id} className="relative -mx-6 h-[420px] overflow-hidden md:-mx-10 md:h-[560px]">
              <img src={foto} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              {/* Dos velos: uno de abajo arriba y otro desde la izquierda, para que
                  el pie se lea igual sobre una foto oscura que sobre una de arena. */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 px-8 pb-8 text-white md:px-14">
                <p className="titular text-3xl">{rotulo}</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">{pie}</p>
              </figcaption>
            </figure>
          )
        }

        return (
          <Partido
            key={id}
            imagen={foto}
            alt={alt}
            rotulo={rotulo}
            invertido={posicion % 3 === 1}
          >
            <p className="etiqueta text-terracota-acento">{rotulo}</p>
            <p className="titular mt-6 text-2xl leading-snug md:text-3xl">{pie}</p>
          </Partido>
        )
      })}
    </div>
  )
}
