import { PASOS } from '@/config/constantes'

// Los tres pasos numerados, como el «Tailor-made journeys» de Wilderness:
// número grande en serif, título y una línea de explicación.
export default function Pasos() {
  return (
    <ol className="grid gap-14 md:grid-cols-3 md:gap-12">
      {PASOS.map(({ numero, titulo, texto }) => (
        <li key={numero}>
          <p className="titular cifras text-5xl text-terracota-acento/35">{numero}</p>
          <h3 className="titular mt-6 text-2xl">{titulo}</h3>
          <p className="mt-4 leading-relaxed text-suave">{texto}</p>
        </li>
      ))}
    </ol>
  )
}
