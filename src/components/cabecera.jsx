import { Link, NavLink } from 'react-router-dom'

const ENLACES = [
  { destino: '/', texto: 'Catálogo' },
  { destino: '/nuevo', texto: 'Añadir viaje' },
]

// Cabecera transparente: va montada encima de la portada de cada página,
// con el nombre de la marca centrado y los enlaces a los lados.
export default function Cabecera() {
  const clase = ({ isActive }) =>
    `etiqueta transition duration-300 ${
      isActive ? 'text-white' : 'text-white/60 hover:text-white'
    }`

  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/40 to-transparent pb-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-8 py-7">
        <nav className="flex flex-1 items-center gap-8">
          {ENLACES.map(({ destino, texto }) => (
            <NavLink key={destino} to={destino} className={clase} end>
              {texto}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="titular text-3xl tracking-[0.18em] text-white">
          VAGAMUNDO
        </Link>

        <div className="flex flex-1 justify-end">
          <span className="etiqueta hidden text-white/60 sm:block">Costa amalfitana</span>
        </div>
      </div>
    </header>
  )
}
