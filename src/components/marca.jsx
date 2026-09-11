import { useState } from 'react'

import Boton from '@/components/boton'
import { MANIFIESTO } from '@/config/constantes'
import { enPalabras } from '@/formato'

// El bloque con el que se explica la casa, justo después de la portada.
// Arriba, el titular largo centrado de NUBA; debajo, dos párrafos que se ven
// siempre y cuatro que se despliegan al pulsar «Leer más».
//
// Un solo useState para abrir y cerrar. El contenido está SIEMPRE en el DOM
// y se oculta con `hidden`, no se desmonta: así lo encuentra el buscador y
// el lector de pantalla sabe, por aria-expanded, que hay más debajo.
export default function Marca({ cuantos }) {
  const [abierto, setAbierto] = useState(false)

  const { entrada, bloques } = MANIFIESTO

  return (
    <section className="bg-crema px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="etiqueta text-terracota-acento">Desde 1994</p>

          <h2 className="titular t-seccion mt-6">
            Viajes <em className="titular-cursiva">de autor</em> por el Mediterráneo, y algunos
            bastante más lejos
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
              <div className="filete" />
              <h3 className="titular mt-6 text-xl leading-snug">{titulo}</h3>
              <p className="mt-4 leading-relaxed text-suave">{texto}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            aria-expanded={abierto}
            aria-controls="manifiesto"
            className="etiqueta cursor-pointer border-b border-tinta/25 pb-1 transition hover:border-tinta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
          >
            {abierto ? 'Leer menos' : 'Leer más'}
          </button>

          <p className="etiqueta text-suave">
            {enPalabras(cuantos)} {cuantos === 1 ? 'viaje abierto' : 'viajes abiertos'} · de cinco a
            ocho plazas
          </p>
        </div>

        {abierto && (
          <div className="mt-12 text-center">
            <Boton a="/#catalogo" variante="contorno">
              Ver el catálogo
            </Boton>
          </div>
        )}
      </div>
    </section>
  )
}
