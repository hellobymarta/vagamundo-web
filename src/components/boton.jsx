import { Link } from 'react-router-dom'

// Botón reutilizable. Si le pasas "a", se dibuja como enlace de React Router;
// si no, como <button>. Así no repetimos los estilos en cada pantalla.
const VARIANTES = {
  principal: 'bg-azul text-crema hover:bg-azul-claro',
  terracota: 'bg-terracota text-white hover:bg-[#a86440]',
  contorno: 'border border-azul text-azul hover:bg-arena',
  peligro: 'border border-[#b45746] text-[#b45746] hover:bg-[#f6e0da]',
}

export default function Boton({ variante = 'principal', a, className = '', children, ...resto }) {
  const estilo = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5
    text-sm transition disabled:cursor-not-allowed disabled:opacity-50
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
