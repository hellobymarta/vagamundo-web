import { Link, NavLink } from 'react-router-dom'

// Cabecera calcada de NUBA: una barra sólida de color crema con el texto en
// negro, los enlaces repartidos a los dos lados y el nombre de la marca
// centrado, en serif fino y con mucho interletrado.
// No va encima de la foto: la foto empieza justo debajo.
const IZQUIERDA = [
  { destino: '/', texto: 'Viajes' },
  { destino: '/?motivacion=Costa', texto: 'Destinos' },
]

const DERECHA = [{ destino: '/nuevo', texto: 'Añadir viaje' }]

export default function Cabecera() {
  const clase = ({ isActive }) =>
    `etiqueta transition duration-300 ${isActive ? 'text-tinta' : 'text-tinta/60 hover:text-tinta'}`

  return (
    <header className="sticky top-0 z-30 border-b border-tinta/8 bg-crema">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        <nav className="hidden flex-1 items-center gap-9 md:flex">
          {IZQUIERDA.map(({ destino, texto }) => (
            <NavLink key={destino} to={destino} className={clase} end>
              {texto}
            </NavLink>
          ))}
        </nav>

        {/* El logotipo: serif fino, mayúsculas y el interletrado muy abierto. */}
        <Link
          to="/"
          className="titular text-2xl font-normal tracking-[0.38em] text-tinta md:text-3xl"
        >
          VAGAMUNDO
        </Link>

        <nav className="flex flex-1 items-center justify-end gap-9">
          {DERECHA.map(({ destino, texto }) => (
            <NavLink key={destino} to={destino} className={clase} end>
              {texto}
            </NavLink>
          ))}
          <span className="etiqueta hidden text-tinta/40 lg:block">ES</span>
        </nav>
      </div>
    </header>
  )
}
