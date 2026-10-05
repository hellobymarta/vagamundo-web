import { Link } from 'react-router-dom'

import { CORREO, TELEFONO } from '@/config/constantes'
import { PAGINAS_LEGALES } from '@/config/legal'
import { RUTAS } from '@/config/rutas'

// Pie a varias columnas, como el de NUBA: la marca a la izquierda
// y tres bloques de enlaces e información al lado.
//
// Los enlaces, los de navegación y los legales, comparten el mismo estilo:
// cambio de color al pasar por encima y contorno visible al llegar con el
// tabulador, igual que en el resto de la web.
const NAVEGAR = [
  { texto: 'Viajes', destino: RUTAS.inicio },
  { texto: 'Destinos', destino: RUTAS.destinos },
  { texto: 'Diario', destino: RUTAS.diario },
  { texto: 'Zona del equipo', destino: RUTAS.entrar },
]

// Sin dirección postal: no tenemos oficina abierta al público, así que
// ponerla sería decir algo que no es.
const CONTACTO = [
  { texto: CORREO, enlace: `mailto:${CORREO}` },
  { texto: TELEFONO, enlace: `tel:${TELEFONO.replace(/\s/g, '')}` },
]

const ENLACE = `u-zonaTactil inline-block transition hover:text-azul-claro
  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-claro`

export default function Pie() {
  return (
    <footer className="bg-azul text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10">
        <div className="grid gap-14 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="u-titular text-2xl tracking-[0.3em]">VAGAMUNDO</p>
            <p className="u-titularCursiva mt-4 text-xl text-azul-claro">Más allá del folleto</p>
            <p className="mt-7 max-w-sm leading-relaxed text-azul-claro">
              Montamos viajes de cinco a ocho personas por sitios que hemos recorrido antes
              nosotras, en la misma época del año y con el mismo presupuesto. Sin autocares, sin
              paradas comerciales y con un guía de allí en cada salida.
            </p>
            <p className="u-etiqueta mt-9 text-white/70">Grupos de cinco a ocho</p>
          </div>

          <div>
            <p className="u-etiqueta text-white/70">Viaja con Vagamundo</p>
            <ul className="mt-7 space-y-3">
              {NAVEGAR.map(({ texto, destino }) => (
                <li key={texto}>
                  <Link to={destino} className={ENLACE}>
                    {texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="u-etiqueta text-white/70">Escríbenos</p>
            <ul className="mt-7 space-y-3">
              {CONTACTO.map(({ texto, enlace }) => (
                <li key={texto}>
                  <a href={enlace} className={ENLACE}>
                    {texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="u-etiqueta text-white/70">Información</p>
            <ul className="mt-7 space-y-3 text-azul-claro">
              {PAGINAS_LEGALES.map(({ id, texto }) => (
                <li key={id}>
                  <Link to={RUTAS.legal(id)} className={`${ENLACE} hover:text-white`}>
                    {texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8">
          <p className="u-etiqueta text-white/70">
            Proyecto final · React y Vite sobre la API de Vagamundo
          </p>
          <p className="u-etiqueta text-white/70">Vagamundo · Marta Alarcón</p>
        </div>
      </div>
    </footer>
  )
}
