import type { ReactNode } from 'react'

import Boton from '@/components/boton'

// La banda azul noche con la que Utópica cierra su home:
// una pregunta grande en serif a la izquierda y la llamada a la acción
// a la derecha, con su etiqueta encima.
interface PropsDeBandaOscura {
  pregunta: ReactNode
  etiqueta: ReactNode
  texto: ReactNode
  accion: ReactNode
  enlace: string
  imagen?: string
}

export default function BandaOscura({
  pregunta,
  etiqueta,
  texto,
  accion,
  enlace,
  imagen,
}: PropsDeBandaOscura) {
  return (
    <section className="relative overflow-hidden bg-noche px-6 py-28 md:px-10 md:py-36">
      {imagen && (
        <>
          <img
            src={imagen}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-noche via-noche/85 to-noche/50" />
        </>
      )}

      {/* Mismo contenedor y mismos huecos que el boletín, que es la sección de
          justo encima: así las dos columnas de las dos secciones caen en la
          misma vertical y los bloques se leen como una sola composición. El
          ancho lo marca el contenedor, no un margen escrito a mano, de modo
          que se adapta solo en cualquier pantalla.

          Las dos columnas arrancan arriba, no centradas: la pregunta ocupa una
          línea y el bloque de la derecha tres, así que centrando cada una por
          su cuenta la pregunta caía más abajo que su etiqueta y la composición
          se veía descolgada. Compartiendo la línea de arriba se leen como un
          solo bloque. */}
      <div className="relative mx-auto grid max-w-[1440px] items-start gap-16 md:grid-cols-2 md:gap-24">
        <h2 className="u-titular u-tituloSeccion text-white">{pregunta}</h2>

        <div>
          <p className="u-etiqueta text-white/70">{etiqueta}</p>
          <p className="mt-5 max-w-md leading-relaxed text-white/80">{texto}</p>
          <div className="mt-9">
            <Boton a={enlace} variante="claro">
              {accion}
            </Boton>
          </div>
        </div>
      </div>
    </section>
  )
}
