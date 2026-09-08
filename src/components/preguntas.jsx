import { PREGUNTAS } from '@/config/constantes'

// Preguntas frecuentes con <details>: se abren y se cierran solas,
// sin una línea de JavaScript ni estado que mantener.
export default function Preguntas() {
  return (
    <div className="mx-auto max-w-3xl">
      {PREGUNTAS.map(({ id, pregunta, respuesta }) => (
        <details key={id} className="pregunta border-b border-tinta/10 py-7">
          <summary className="titular text-xl">{pregunta}</summary>
          <p className="mt-5 max-w-2xl leading-relaxed text-suave">{respuesta}</p>
        </details>
      ))}
    </div>
  )
}
