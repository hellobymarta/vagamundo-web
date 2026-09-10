import { CATEGORIAS } from '@/config/constantes'

// Campo de formulario reutilizable. Según "tipo" dibuja un input,
// un textarea, el desplegable de categorías o una casilla.
// Sin cajas: solo una línea inferior, como los formularios de Utópica.
const CLASES = `w-full border-0 border-b border-borde bg-transparent px-0 py-3 text-lg
  outline-none transition placeholder:text-suave/60 focus:border-terracota-acento`

export default function Campo({ etiqueta, nombre, tipo = 'text', ...resto }) {
  const comunes = { id: nombre, name: nombre, className: CLASES, ...resto }

  if (tipo === 'checkbox') {
    // En una casilla el valor no va en "value", va en "checked".
    const { value, ...limpio } = resto

    return (
      <label htmlFor={nombre} className="flex cursor-pointer items-center gap-3 text-sm">
        <input
          {...limpio}
          id={nombre}
          name={nombre}
          type="checkbox"
          checked={value}
          className="h-4 w-4 accent-[#1b4b7a]"
        />
        {etiqueta}
      </label>
    )
  }

  return (
    <div>
      <label htmlFor={nombre} className="etiqueta block text-suave">
        {etiqueta}
      </label>

      {tipo === 'textarea' && <textarea {...comunes} rows={4} />}

      {tipo === 'categoria' && (
        <select {...comunes}>
          {/* Si el viaje ya tiene una categoría que no está en la lista
              (porque se creó antes, o desde Postman), la añadimos delante.
              Si no, el <select> enseñaría la primera opción y al guardar
              le cambiaría la categoría sin avisar. */}
          {CATEGORIAS.includes(resto.value) ? null : (
            <option value={resto.value}>{resto.value}</option>
          )}

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
