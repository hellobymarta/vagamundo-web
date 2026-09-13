// La galería de un destino: «Lo que vas a ver».
//
// Aquí la fotografía manda y ocupa el ancho entero de la pantalla, de borde a
// borde. No se usan unidades vw para conseguirlo: el bloque se saca del
// contenedor con el margen negativo exacto del padding de la sección, así que
// mide justo lo que mide el viewport y no aparece la barra de desplazamiento
// horizontal que provoca el 100vw cuando hay barra vertical.
//
// La imagen nunca se deforma: siempre object-fit: cover. Lo que se ajusta es
// el encuadre. Por defecto se recorta por el centro, pero una foto vertical
// metida en una franja apaisada pierde la cabeza del motivo, así que esas
// tiran hacia arriba. Y cualquier foto puede llevar su propio `foco` escrito
// en config/destinos.js cuando el motivo no está donde se espera.
//
// Alturas: en el escritorio la primera y una de cada tres van casi a pantalla
// completa; en el móvil todas bajan bastante, para que la página no se
// convierta en un scroll interminable.
const ALTO = {
  destacada: 'h-[56vh] min-h-[340px] md:h-[86vh]',
  normal: 'h-[46vh] min-h-[280px] md:h-[68vh]',
  vertical: 'h-[68vh] min-h-[420px] md:h-[92vh]',
}

// El número de cada bloque y su formato dependen del orden, así que se
// calculan aquí, en un bucle, y no dentro del map: en el map no se usa la
// posición para nada.
function preparar(fotos) {
  const bloques = []

  for (const foto of fotos) {
    const posicion = bloques.length
    const destacada = posicion === 0 || posicion % 3 === 2

    bloques.push({
      ...foto,
      numero: String(posicion + 1).padStart(2, '0'),
      primera: posicion === 0,
      alto: foto.vertical ? ALTO.vertical : destacada ? ALTO.destacada : ALTO.normal,
      // Las verticales se recortan por arriba: en una franja apaisada, el
      // motivo de una foto vertical casi siempre está en el tercio superior.
      encuadre: foto.foco || (foto.vertical ? '50% 32%' : '50% 50%'),
    })
  }

  return bloques
}

export default function Galeria({ fotos }) {
  if (!fotos || fotos.length === 0) return null

  return (
    <div className="space-y-6 md:space-y-10">
      {preparar(fotos).map(({ id, foto, alt, rotulo, pie, numero, primera, alto, encuadre }) => (
        <figure key={id} className={`group relative w-full overflow-hidden ${alto}`}>
          <img
            src={foto}
            alt={alt}
            loading={primera ? 'eager' : 'lazy'}
            style={{ objectPosition: encuadre }}
            className="absolute inset-0 h-full w-full object-cover transition duration-[1600ms] ease-out group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

          <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-10 text-white md:px-14 md:pb-16">
            <div className="mx-auto max-w-[1440px]">
              <p className="etiqueta text-white/70">{numero}</p>

              <p className="titular mt-3 text-3xl leading-tight md:mt-4 md:text-6xl">{rotulo}</p>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
                {pie}
              </p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
