import { Link, NavLink } from 'react-router-dom'

import { useCabeceraSolida } from '@/hooks/use-cabecera-solida'

// Cabecera calcada de NUBA, con su efecto de scroll medido en su propia web:
//
//   arriba de la página  ->  fija, 90 px de alto, fondo transparente,
//                            enlaces y logotipo en blanco sobre la foto
//   al bajar             ->  75 px, fondo crema, texto en negro y un filete
//                            de 1 px abajo, con una transición de 0,6 s
//
// Ellos lo hacen poniendo la clase .did-scroll en el body; aquí lo resuelve
// el hook useCabeceraSolida. Igual que en su web, el menú también se vuelve
// sólido al pasar el ratón por encima (group-hover).
const IZQUIERDA = [
  { destino: '/', texto: 'Viajes' },
  { destino: '/?motivacion=Costa', texto: 'Destinos' },
]

const DERECHA = [{ destino: '/nuevo', texto: 'Añadir viaje' }]

export default function Cabecera() {
  const solida = useCabeceraSolida()

  // Los enlaces cambian de color con el fondo. En transparente van en blanco;
  // en sólido, en negro. Y el activo va a plena opacidad.
  const clase = ({ isActive }) =>
    `etiqueta transition-colors duration-500 ${
      solida
        ? isActive
          ? 'text-tinta'
          : 'text-tinta/55 hover:text-tinta'
        : isActive
          ? 'text-white'
          : 'text-white/70 hover:text-white'
    } group-hover:!text-tinta`

  return (
    <header
      className={`group fixed inset-x-0 top-0 z-40 transition-[height,background-color,border-color] duration-[600ms] ease-out ${
        solida
          ? 'h-[75px] border-b border-tinta/10 bg-crema'
          : 'h-[90px] border-b border-transparent bg-transparent hover:bg-crema'
      }`}
    >
      {/* Cuando la cabecera es transparente, un degradado finísimo por debajo
          asegura que el texto blanco se lea sobre cualquier fotografía. */}
      {!solida && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[150px] bg-gradient-to-b from-black/35 to-transparent transition-opacity duration-500 group-hover:opacity-0"
        />
      )}

      <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-6 md:px-10">
        <nav className="hidden flex-1 items-center gap-9 md:flex">
          {IZQUIERDA.map(({ destino, texto }) => (
            <NavLink key={destino} to={destino} className={clase} end>
              {texto}
            </NavLink>
          ))}
        </nav>

        {/* NUBA centra el logotipo en absoluto, no con el flex: así no se
            mueve aunque los menús de los lados cambien de ancho. */}
        <Link
          to="/"
          className={`titular absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-[0.38em] transition-all duration-500 group-hover:text-tinta ${
            solida ? 'text-xl text-tinta md:text-2xl' : 'text-2xl text-white md:text-3xl'
          }`}
        >
          VAGAMUNDO
        </Link>

        <nav className="flex flex-1 items-center justify-end gap-9">
          {DERECHA.map(({ destino, texto }) => (
            <NavLink key={destino} to={destino} className={clase} end>
              {texto}
            </NavLink>
          ))}
          <span
            className={`etiqueta hidden transition-colors duration-500 group-hover:text-tinta/40 lg:block ${
              solida ? 'text-tinta/35' : 'text-white/45'
            }`}
          >
            ES
          </span>
        </nav>
      </div>
    </header>
  )
}
