import { useRef } from 'react'

import { TESTIMONIOS } from '@/config/constantes'
import { useArrastrar } from '@/hooks/use-arrastrar'

// Las estrellas se dibujan a partir del número, no se escriben a mano: así
// la valoración es un dato del catálogo y no un adorno del maquetador.
const TOTAL_ESTRELLAS = 5

function Estrellas({ cuantas }) {
  return (
    <p className="flex items-center justify-center gap-1 text-sm text-terracota-acento">
      <span className="sr-only">
        {cuantas} de {TOTAL_ESTRELLAS}
      </span>

      {Array.from({ length: TOTAL_ESTRELLAS }, (nada, posicion) => posicion + 1).map((numero) => (
        <span key={numero} aria-hidden="true" className={numero > cuantas ? 'text-suave/30' : ''}>
          ★
        </span>
      ))}
    </p>
  )
}

// Carril de opiniones: se ven tres y el resto se descubre desplazando.
//
// El desplazamiento es del navegador (overflow-x y scroll-snap, ya en
// index.css), así que en el móvil funciona con el dedo sin escribir nada.
// Encima va useArrastrar para poder tirar con el ratón, y dos flechas que
// mueven una tarjeta, que son las que responden al teclado.
export default function Testimonios() {
  const carril = useRef(null)
  const { arrastrando, gestos } = useArrastrar()

  function mover(sentido) {
    const caja = carril.current

    if (!caja) return

    // Una tarjeta: lo que mide la primera más el hueco entre ellas.
    const tarjeta = caja.firstElementChild

    // El hueco entre tarjetas sale del propio carril, no de un número escrito
    // a mano: así sigue moviéndose una tarjeta exacta en cualquier ancho.
    const hueco = parseFloat(getComputedStyle(caja).columnGap) || 0

    caja.scrollBy({
      left: sentido * (tarjeta ? tarjeta.offsetWidth + hueco : caja.clientWidth),
      behavior: 'smooth',
    })
  }

  return (
    // El bloque se queda muy por dentro del ancho de la sección: dos citas
    // estiradas de borde a borde no se leen, y el aire de los lados es lo que
    // hace que esto parezca una página y no un widget de reseñas.
    <div className="mx-auto max-w-3xl lg:max-w-[1100px]">
      <div
        ref={carril}
        {...gestos}
        tabIndex={0}
        role="group"
        aria-label="Opiniones de viajeras y viajeros"
        className={`carril -mx-6 flex scroll-pl-6 gap-10 overflow-x-auto px-6 pb-2 sm:mx-0 sm:scroll-pl-0 sm:px-0 lg:gap-12 ${
          arrastrando ? 'select-none' : ''
        }`}
      >
        {TESTIMONIOS.map(({ id, estrellas, cita, firma, lugar }) => (
          <blockquote
            key={id}
            // Tres por pantalla en el ordenador contando los dos huecos, dos
            // en tableta y, en el móvil, una entera con el borde de la
            // siguiente asomando, que es lo que invita a seguir tirando.
            className="flex w-[80vw] shrink-0 flex-col items-center text-center sm:w-[calc((100%-2.5rem)/2)] lg:w-[calc((100%-6rem)/3)]"
          >
            <Estrellas cuantas={estrellas} />

            <p className="titular mt-6 text-2xl leading-snug">«{cita}»</p>

            {/* mt-auto alinea las firmas aunque las citas midan distinto. */}
            <footer className="mt-auto w-full pt-8">
              <div className="filete mx-auto w-16" />
              <p className="etiqueta mt-5">{firma}</p>
              <p className="mt-2 text-sm text-suave">{lugar}</p>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-8">
        <button
          type="button"
          onClick={() => mover(-1)}
          aria-label="Ver las opiniones anteriores"
          className="cursor-pointer text-2xl font-light text-suave transition hover:text-tinta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
        >
          ←
        </button>

        <p className="etiqueta text-suave">
          {TESTIMONIOS.length} opiniones
        </p>

        <button
          type="button"
          onClick={() => mover(1)}
          aria-label="Ver las opiniones siguientes"
          className="cursor-pointer text-2xl font-light text-suave transition hover:text-tinta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota-acento"
        >
          →
        </button>
      </div>
    </div>
  )
}
