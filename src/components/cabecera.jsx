import { Link, NavLink } from 'react-router-dom'

const ENLACES = [
  { destino: '/', texto: 'Catálogo' },
  { destino: '/nuevo', texto: 'Añadir viaje' },
]

export default function Cabecera() {
  const clase = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm transition ${
      isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white'
    }`

  return (
    <header className="bg-azul text-crema">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
            <circle cx="16" cy="16" r="14" fill="none" stroke="#e6cf9c" strokeWidth="2" />
            <path d="M4 16 H28 M16 2.5 C 22 9, 22 23, 16 29.5 C 10 23, 10 9, 16 2.5"
              fill="none" stroke="#e6cf9c" strokeWidth="1.6" />
          </svg>
          <span className="font-titulo text-2xl tracking-wide">Vagamundo</span>
        </Link>

        <nav className="flex items-center gap-1">
          {ENLACES.map(({ destino, texto }) => (
            <NavLink key={destino} to={destino} className={clase} end>
              {texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
