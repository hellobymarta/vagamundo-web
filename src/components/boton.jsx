import { Link } from 'react-router-dom'

// Botón reutilizable, con la forma de píldora y las mayúsculas espaciadas
// que usan las webs de viajes de referencia.
// Si le pasas "a", se dibuja como enlace de React Router; si no, como <button>.
const VARIANTES = {
  principal: 'bg-azul text-white border-azul hover:bg-azul-medio hover:border-azul-medio',
  terracota:
    'bg-terracota-acento text-white border-terracota-acento hover:bg-[#96562f] hover:border-[#96562f]',
  contorno: 'border-tinta/25 text-tinta hover:bg-tinta hover:text-white hover:border-tinta',
  claro: 'border-white/60 text-white hover:bg-white hover:text-tinta hover:border-white',
  peligro: 'border-rosa-acento text-rosa-acento hover:bg-rosa-acento hover:text-white',
}

export default function Boton({ variante = 'principal', a, className = '', children, ...resto }) {
  const estilo = `etiqueta inline-flex items-center justify-center rounded-full border px-8 py-3.5
    transition duration-300 disabled:cursor-not-allowed disabled:opacity-40
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
