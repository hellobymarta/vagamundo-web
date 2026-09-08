import { TESTIMONIOS } from '@/config/constantes'

// Dos testimonios, al modo del «Don't just take our word for it»
// de Wilderness: la cita en serif y debajo quién la firma.
export default function Testimonios() {
  return (
    <div className="grid gap-16 md:grid-cols-2 md:gap-24">
      {TESTIMONIOS.map(({ id, cita, firma, lugar }) => (
        <blockquote key={id}>
          <p className="titular text-2xl leading-snug md:text-3xl">«{cita}»</p>
          <footer className="mt-8">
            <div className="filete w-16" />
            <p className="etiqueta mt-5">{firma}</p>
            <p className="mt-2 text-sm text-suave">{lugar}</p>
          </footer>
        </blockquote>
      ))}
    </div>
  )
}
