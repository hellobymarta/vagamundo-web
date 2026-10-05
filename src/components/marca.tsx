import { useState } from 'react'

import Boton from '@/components/boton'
import { MANIFIESTO } from '@/config/constantes'
import { RUTAS } from '@/config/rutas'

// El bloque con el que se explica la casa, justo después de la portada.
// Arriba, el titular largo centrado de NUBA; debajo, dos párrafos que se ven
// siempre y cuatro que se despliegan al pulsar «Leer más».
//
// El contenido está siempre en el DOM y se oculta con `hidden`, no se
// desmonta: así lo encuentra el buscador y el lector de pantalla sabe, por
// aria-expanded, que hay más debajo.
export default function Marca() {
  const [abierto, setAbierto] = useState(false)

  const { entrada, bloques } = MANIFIESTO

  return (
    <section className="bg-crema px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="u-etiqueta text-terracota-acento">Quién está detrás</p>

          <h2 className="u-titular u-tituloSeccion mt-6">
            Un viaje empieza <em className="u-titularCursiva">mucho antes</em> de subirse a un
            avión
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-6 leading-relaxed text-suave md:text-lg">
          {entrada.map((parrafo) => (
            // La key es el principio del párrafo, que no se repite.
            <p key={parrafo.slice(0, 24)}>{parrafo}</p>
          ))}
        </div>

        {/* Los cuatro bloques largos. Dos columnas en pantalla grande para que
            no se conviertan en una columna de texto interminable. */}
        <div
          id="manifiesto"
          hidden={!abierto}
          className="mx-auto mt-16 grid max-w-4xl gap-x-14 gap-y-12 md:grid-cols-2"
        >
          {bloques.map(({ id, titulo, texto }) => (
            <article key={id}>
              <div className="Filete" />
              <h3 className="u-titular mt-6 text-xl leading-snug">{titulo}</h3>
              <p className="mt-4 leading-relaxed text-suave">{texto}</p>
            </article>
          ))}
        </div>

        {/* El dato de las plazas va arriba y el botón debajo, los dos
            centrados en una sola columna: así se leen igual en el móvil y en
            el escritorio, sin depender de cómo reparta el espacio un flex. */}
        <div className="mt-14 flex flex-col items-center gap-5 text-center">
          <p className="u-etiqueta text-suave">De 5 a 8 plazas</p>

          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            aria-expanded={abierto}
            aria-controls="manifiesto"
            className="u-etiqueta u-zonaTactil cursor-pointer border-b border-tinta/25 pb-1 transition hover:border-tinta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
          >
            {abierto ? 'Leer menos' : 'Leer más'}
          </button>
        </div>

        {abierto && (
          <div className="mt-12 text-center">
            <Boton a={RUTAS.catalogo} variante="contorno">
              Ver el catálogo
            </Boton>
          </div>
        )}
      </div>
    </section>
  )
}
