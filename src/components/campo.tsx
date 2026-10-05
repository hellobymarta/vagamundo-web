import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { CATEGORIAS } from '@/config/constantes'

// Campo de formulario reutilizable. Según "tipo" dibuja un input,
// un textarea, el desplegable de categorías o una casilla.
// Sin cajas: solo una línea inferior, como los formularios de Utópica.
const CLASES = `w-full border-0 border-b border-borde bg-transparent px-0 py-3 text-lg
  outline-none transition placeholder:text-suave/60 focus:border-terracota-acento`

/** Los tipos propios se suman a los del HTML: «categoria» pinta el desplegable. */
export type TipoDeCampo = ComponentPropsWithoutRef<'input'>['type'] | 'textarea' | 'categoria'

type PropsPropias = {
  etiqueta: ReactNode
  nombre: string
  tipo?: TipoDeCampo
  filas?: number
  /**
   * El valor del campo. En una casilla llega un booleano, porque ahí el dato
   * no va en «value» sino en «checked», y el componente lo traduce.
   */
  value?: string | number | readonly string[] | boolean
}

// El resto son atributos de un campo de formulario corriente (value, onChange,
// required, placeholder…), así que al HTML solo llega lo que el HTML entiende.
type PropsDeCampo = PropsPropias &
  Omit<ComponentPropsWithoutRef<'input'>, keyof PropsPropias | 'type' | 'value' | 'ref'>

export default function Campo({
  etiqueta,
  nombre,
  tipo = 'text',
  filas = 4,
  value,
  ...resto
}: PropsDeCampo) {
  const comunes = {
    id: nombre,
    name: nombre,
    className: CLASES,
    ...resto,
    value: value as string | number | readonly string[] | undefined,
  }

  if (tipo === 'checkbox') {
    // En una casilla el valor no va en "value", va en "checked".
    return (
      <label htmlFor={nombre} className="flex cursor-pointer items-center gap-3 text-sm">
        <input
          {...resto}
          id={nombre}
          name={nombre}
          type="checkbox"
          checked={Boolean(value)}
          className="h-4 w-4 accent-[#1b4b7a]"
        />
        {etiqueta}
      </label>
    )
  }

  return (
    <div>
      <label htmlFor={nombre} className="u-etiqueta block text-suave">
        {etiqueta}
      </label>

      {/* Los tres campos comparten las mismas props. Van tipadas como las de
          un <input>, que es el caso corriente, y aquí se les dice a cuál de
          los tres elementos pertenecen. */}
      {tipo === 'textarea' && (
        <textarea
          {...(comunes as ComponentPropsWithoutRef<'textarea'>)}
          rows={filas}
        />
      )}

      {tipo === 'categoria' && (
        <select {...(comunes as ComponentPropsWithoutRef<'select'>)}>
          {/* Si el viaje ya tiene una categoría que no está en la lista
              (porque se creó antes, o desde Postman), la añadimos delante.
              Si no, el <select> enseñaría la primera opción y al guardar
              le cambiaría la categoría sin avisar. */}
          {CATEGORIAS.includes(String(value)) ? null : (
            <option value={String(value)}>{String(value)}</option>
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
