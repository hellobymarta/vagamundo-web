import { CATEGORIAS } from '@/config/constantes'

// Campo de formulario reutilizable. Según "tipo" dibuja un input,
// un textarea, el desplegable de categorías o una casilla.
const CLASES = `w-full rounded-xl border border-[#d9cdb6] bg-white/80 px-4 py-3
  text-sm outline-none transition focus:border-terracota`

export default function Campo({ etiqueta, nombre, tipo = 'text', ...resto }) {
  const comunes = { id: nombre, name: nombre, className: CLASES, ...resto }

  if (tipo === 'checkbox') {
    // En una casilla el valor no va en "value", va en "checked".
    const { value, ...limpio } = resto

    return (
      <label htmlFor={nombre} className="flex items-center gap-3 text-sm">
        <input
          {...limpio}
          id={nombre}
          name={nombre}
          type="checkbox"
          checked={value}
          className="h-4 w-4 accent-[#1f3a5f]"
        />
        {etiqueta}
      </label>
    )
  }

  return (
    <div>
      <label htmlFor={nombre} className="mb-1.5 block text-sm text-humo">
        {etiqueta}
      </label>

      {tipo === 'textarea' && <textarea {...comunes} rows={4} />}

      {tipo === 'categoria' && (
        <select {...comunes}>
          {CATEGORIAS.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      )}

      {tipo !== 'textarea' && tipo !== 'categoria' && <input {...comunes} type={tipo} />}
    </div>
  )
}
