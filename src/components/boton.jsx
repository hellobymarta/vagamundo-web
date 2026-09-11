import { Link } from 'react-router-dom'

// Botón reutilizable. Las dos webs de referencia usan dos formas distintas:
// NUBA pone rectángulos de contorno fino sobre la foto («SOLICITAR
// PRESUPUESTO») y Utópica píldoras («TE LLAMAMOS», «EXPLORA»).
// Aquí están las dos, y se elige con `forma`.
const VARIANTES = {
  principal: 'bg-tinta text-crema border-tinta hover:bg-transparent hover:text-tinta',
  azul: 'bg-azul text-white border-azul hover:bg-azul-medio hover:border-azul-medio',
  terracota:
    'bg-terracota-acento text-white border-terracota-acento hover:bg-[#8a5030] hover:border-[#8a5030]',
  contorno: 'border-tinta/25 text-tinta hover:bg-tinta hover:text-crema hover:border-tinta',
  claro: 'border-white/70 text-white hover:bg-white hover:text-tinta hover:border-white',
  peligro: 'border-rosa-acento text-rosa-acento hover:bg-rosa-acento hover:text-white',
}

const FORMAS = {
  pildora: 'rounded-full',
  recto: 'rounded-none',
}

export default function Boton({
  variante = 'principal',
  forma = 'pildora',
  compacto = false,
  a,
  className = '',
  children,
  ...resto
}) {
  const tamano = compacto ? 'px-6 py-2.5' : 'px-10 py-4'

  const estilo = `etiqueta inline-flex items-center justify-center border ${FORMAS[forma]}
    ${tamano} transition duration-500 disabled:cursor-not-allowed disabled:opacity-40
    focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current
    ${VARIANTES[variante]} ${className}`

  if (a) {
    return (
      <Link to={a} className={estilo} {...resto}>
        {children}
      </Link>
    )
  }

  return (
    <button className={`cursor-pointer ${estilo}`} {...resto}>
      {children}
    </button>
  )
}
