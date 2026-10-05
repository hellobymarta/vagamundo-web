import { Link, useLocation } from 'react-router-dom'
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from 'react'

import { desplazarHasta } from '@/hooks/use-ancla'

// Botón reutilizable. Las dos webs de referencia usan dos formas distintas:
// NUBA pone rectángulos de contorno fino sobre la foto («SOLICITAR
// PRESUPUESTO») y Utópica píldoras («TE LLAMAMOS», «EXPLORA»).
// Aquí están las dos, y se elige con `forma`.
export type VarianteDeBoton =
  | 'principal'
  | 'azul'
  | 'terracota'
  | 'contorno'
  | 'claro'
  | 'peligro'

export type FormaDeBoton = 'pildora' | 'recto'

const VARIANTES: Record<VarianteDeBoton, string> = {
  principal: 'bg-tinta text-crema border-tinta hover:bg-transparent hover:text-tinta',
  azul: 'bg-azul text-white border-azul hover:bg-azul-medio hover:border-azul-medio',
  terracota:
    'bg-terracota-acento text-white border-terracota-acento hover:bg-[#8a5030] hover:border-[#8a5030]',
  contorno: 'border-tinta/25 text-tinta hover:bg-tinta hover:text-crema hover:border-tinta',
  claro: 'border-white/70 text-white hover:bg-white hover:text-tinta hover:border-white',
  peligro: 'border-rosa-acento text-rosa-acento hover:bg-rosa-acento hover:text-white',
}

const FORMAS: Record<FormaDeBoton, string> = {
  pildora: 'rounded-full',
  recto: 'rounded-none',
}

// Las props propias del botón van primero y el resto se reparte entre el
// <Link> o el <button>, así que solo llegan al HTML atributos que existen.
type PropsPropias = {
  variante?: VarianteDeBoton
  forma?: FormaDeBoton
  compacto?: boolean
  /** Si viene, el botón es en realidad un enlace a esa dirección. */
  a?: string
  className?: string
  children: ReactNode
  /** Vale para las dos formas, porque el botón puede ser un <button> o un <a>. */
  onClick?: (evento: MouseEvent<HTMLElement>) => void
}

type PropsDeBoton = PropsPropias &
  Omit<ComponentPropsWithoutRef<'button'>, keyof PropsPropias | 'ref'>

export default function Boton({
  variante = 'principal',
  forma = 'pildora',
  compacto = false,
  a,
  className = '',
  children,
  onClick,
  ...resto
}: PropsDeBoton) {
  const { pathname } = useLocation()

  const tamano = compacto ? 'px-6 py-2.5' : 'px-10 py-4'

  const estilo = `u-etiqueta inline-flex items-center justify-center border ${FORMAS[forma]}
    ${tamano} transition duration-500 disabled:cursor-not-allowed disabled:opacity-40
    focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current
    ${VARIANTES[variante]} ${className}`

  // Un correo o un teléfono no son una ruta de la aplicación: se escriben con
  // una etiqueta <a> normal para que el navegador abra el programa de correo
  // en lugar de buscar esa dirección entre las páginas.
  if (a && /^(mailto:|tel:|https?:)/.test(a)) {
    return (
      <a href={a} className={estilo} onClick={onClick} {...(resto as ComponentPropsWithoutRef<'a'>)}>
        {children}
      </a>
    )
  }

  if (a) {
    // Enlaces a un ancla de la propia página («/#catalogo»): si ya estamos
    // ahí, React Router no navega y el scroll no se movería. Lo hacemos a
    // mano. Sigue siendo un <Link> de verdad, así que el clic con la rueda
    // o con Cmd abre en otra pestaña como cualquier enlace.
    const [ruta, ancla] = a.split('#')

    function alPulsar(evento: MouseEvent<HTMLElement>) {
      if (ancla && pathname === (ruta || '/')) {
        evento.preventDefault()
        desplazarHasta(ancla)
      }

      onClick?.(evento)
    }

    // El resto de props viene tipado como las de un <button>, que es la forma
    // habitual. Cuando el botón es un enlace se pasan al <Link>, y los pocos
    // atributos comunes (aria-*, title, tabIndex) valen igual en los dos.
    const paraElEnlace = resto as ComponentPropsWithoutRef<'a'>

    return (
      <Link to={a} className={estilo} onClick={alPulsar} {...paraElEnlace}>
        {children}
      </Link>
    )
  }

  // Sin `type`, un <button> dentro de un formulario envía el formulario. Casi
  // ninguno de los de la web quiere eso, así que por defecto es un botón normal
  // y quien necesite enviar lo pide con type="submit".
  return (
    <button type="button" className={`cursor-pointer ${estilo}`} onClick={onClick} {...resto}>
      {children}
    </button>
  )
}
