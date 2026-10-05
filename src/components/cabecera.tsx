import { Link, NavLink } from 'react-router-dom'

import { useCabeceraSolida } from '@/hooks/use-cabecera-solida'
import { useSesion } from '@/hooks/use-sesion'
import { RUTAS } from '@/config/rutas'

// Cabecera al modo de NUBA, con su efecto de scroll:
//
//   arriba de la página  ->  fija, 90 px de alto, fondo transparente,
//                            enlaces y logotipo en blanco sobre la foto
//   al bajar             ->  75 px, fondo crema, texto en negro y un filete
//                            de 1 px abajo, con una transición de 0,6 s
//
// Lo resuelve el hook useCabeceraSolida. Igual que en su web, el menú también
// se vuelve sólido al pasar el ratón por encima (group-hover).
//
// Los enlaces de la derecha cambian según haya sesión o no: sin entrar se ve
// «Entrar», y con la sesión abierta aparecen el panel y el nombre.
const IZQUIERDA = [
  { destino: RUTAS.inicio, texto: 'Viajes' },
  { destino: RUTAS.destinos, texto: 'Destinos' },
  { destino: RUTAS.diario, texto: 'Diario' },
]

const PRIVADOS = [
  { destino: RUTAS.panel, corto: 'Panel', texto: 'Panel' },
  { destino: RUTAS.nuevo, corto: 'Añadir', texto: 'Añadir viaje' },
]

export default function Cabecera() {
  const solida = useCabeceraSolida()
  const { haEntrado, usuario, salir } = useSesion()

  // Los enlaces cambian de color con el fondo. En transparente van en blanco;
  // en sólido, en negro. Y el activo va a plena opacidad.
  const clase = ({ isActive }: { isActive: boolean }) =>
    `u-etiqueta u-zonaTactil transition-colors duration-500 ${
      solida
        ? isActive
          ? 'text-tinta'
          : 'text-tinta/55 hover:text-tinta'
        : isActive
          ? 'text-white'
          : 'text-white/70 hover:text-white'
    } group-hover:!text-tinta`

  const apagado = solida ? 'text-tinta/35' : 'text-white/45'

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

      {/* En el móvil el logotipo y los enlaces comparten la misma línea, así
          que necesitan una separación propia: sin ella se tocaban. El hueco
          desaparece a partir de md, donde el logotipo va centrado en absoluto
          y no ocupa sitio en el flujo. */}
      <div className="Cabecera-barra relative mx-auto flex h-full max-w-[1440px] items-center gap-x-5 px-5 md:gap-x-0 md:px-10">
        <nav aria-label="Secciones" className="hidden flex-1 items-center gap-9 md:flex">
          {IZQUIERDA.map(({ destino, texto }) => (
            <NavLink key={destino} to={destino} className={clase} end={destino === '/'}>
              {texto}
            </NavLink>
          ))}
        </nav>

        {/* NUBA centra el logotipo en absoluto, no con el flex: así no se
            mueve aunque los menús de los lados cambien de ancho. En el móvil
            no hay menú a la izquierda que compensar, así que va en el flujo:
            centrado se le echaban encima los enlaces de la derecha. */}
        <Link
          to={RUTAS.inicio}
          className={`Cabecera-marca u-titular shrink-0 whitespace-nowrap tracking-[0.18em] transition-all duration-500 group-hover:text-tinta md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:tracking-[0.38em] ${
            solida ? 'text-base text-tinta md:text-2xl' : 'text-base text-white md:text-3xl'
          }`}
        >
          VAGAMUNDO
        </Link>

        <nav aria-label="Tu cuenta" className="Cabecera-cuenta flex flex-1 items-center justify-end gap-4 md:gap-9">
          {/* En el móvil, Destinos y Diario se quedan aquí: son las otras
              páginas abiertas y sin esto no habría manera de llegar a ellas. */}
          <NavLink to={RUTAS.destinos} className={`${clase({ isActive: false })} md:hidden`} end>
            Destinos
          </NavLink>
          <NavLink to={RUTAS.diario} className={`${clase({ isActive: false })} md:hidden`}>
            Diario
          </NavLink>

          {haEntrado ? (
            <>
              {PRIVADOS.map(({ destino, corto, texto }) => (
                <NavLink key={destino} to={destino} className={clase} end>
                  <span className="md:hidden">{corto}</span>
                  <span className="hidden md:inline">{texto}</span>
                </NavLink>
              ))}

              <span className={`u-etiqueta hidden transition-colors duration-500 lg:block ${apagado}`}>
                {usuario?.nombre.split(' ')[0]}
              </span>

              <button
                type="button"
                onClick={salir}
                className={`${clase({ isActive: false })} cursor-pointer`}
              >
                Salir
              </button>
            </>
          ) : (
            <NavLink to={RUTAS.entrar} className={clase} end>
              Entrar
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}
