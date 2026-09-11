import { TESTIMONIOS } from '@/config/constantes'

// Las estrellas se dibujan a partir del número, no se escriben a mano: así
// la valoración es un dato del catálogo y no un adorno del maquetador.
// Van dentro de un <p> con texto alternativo para quien no ve el símbolo.
const TOTAL_ESTRELLAS = 5

function Estrellas({ cuantas }) {
  return (
    <p className="flex items-center gap-1 text-sm text-terracota-acento">
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

// Cuatro opiniones en dos columnas, al modo del «Don't just take our word
// for it» de Wilderness: la cita grande en serif y la firma debajo del
// filete. No es un widget de reseñas: no hay avatares ni fechas ni logos.
export default function Testimonios() {
  return (
    <div className="grid gap-x-16 gap-y-16 md:grid-cols-2 md:gap-x-24">
      {TESTIMONIOS.map(({ id, estrellas, cita, firma, lugar }) => (
        <blockquote key={id} className="flex h-full flex-col">
          <Estrellas cuantas={estrellas} />

          <p className="titular mt-6 text-2xl leading-snug">«{cita}»</p>

          {/* mt-auto alinea las firmas aunque las citas midan distinto. */}
          <footer className="mt-auto pt-8">
            <div className="filete w-16" />
            <p className="etiqueta mt-5">{firma}</p>
            <p className="mt-2 text-sm text-suave">{lugar}</p>
          </footer>
        </blockquote>
      ))}
    </div>
  )
}
