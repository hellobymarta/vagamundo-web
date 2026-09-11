import { Link } from 'react-router-dom'

// Pie a varias columnas, como el de NUBA: la marca a la izquierda
// y tres bloques de enlaces e información al lado.
const NAVEGAR = [
  { texto: 'Viajes', destino: '/' },
  { texto: 'Destinos', destino: '/destinos' },
  { texto: 'Añadir viaje', destino: '/nuevo' },
]

const CONTACTO = ['hola@vagamundo.travel', '+34 900 000 000', 'Carrer de la Mar, 12 · Barcelona']

const LEGAL = ['Aviso legal', 'Política de privacidad', 'Condiciones generales']

export default function Pie() {
  return (
    <footer className="bg-azul text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10">
        <div className="grid gap-14 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="titular text-2xl tracking-[0.3em]">VAGAMUNDO</p>
            <p className="titular-cursiva mt-4 text-xl text-azul-claro">Más allá del folleto</p>
            <p className="mt-7 max-w-sm leading-relaxed text-azul-claro/80">
              Montamos viajes de cinco a ocho personas por sitios que hemos recorrido antes
              nosotras, en la misma época del año y con el mismo presupuesto. Sin autocares, sin
              paradas comerciales y con un guía de allí en cada salida.
            </p>
            <p className="mt-5 max-w-sm leading-relaxed text-azul-claro/80">
              Cada día está pensado para que algo se entienda, no solo se vea. Y siempre queda
              hueco para no hacer nada, que es la parte que más se agradece al volver.
            </p>
            <p className="etiqueta mt-9 text-white/40">Desde 1994</p>
          </div>

          <div>
            <p className="etiqueta text-white/45">Viaja con Vagamundo</p>
            <ul className="mt-7 space-y-3">
              {NAVEGAR.map(({ texto, destino }) => (
                <li key={texto}>
                  <Link to={destino} className="transition hover:text-azul-claro">
                    {texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="etiqueta text-white/45">Escríbenos</p>
            <ul className="mt-7 space-y-3">
              {CONTACTO.map((linea) => (
                <li key={linea}>{linea}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="etiqueta text-white/45">Información</p>
            <ul className="mt-7 space-y-3 text-azul-claro">
              {LEGAL.map((linea) => (
                <li key={linea}>{linea}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8">
          <p className="etiqueta text-white/40">
            PEC 4 · Frontend en React conectado a la API de la PEC 3
          </p>
          <p className="etiqueta text-white/40">Vagamundo · Marta Alarcón</p>
        </div>
      </div>
    </footer>
  )
}
