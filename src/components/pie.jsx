import { Link } from 'react-router-dom'

export default function Pie() {
  return (
    <footer className="bg-azul text-white">
      <div className="mx-auto max-w-[1400px] px-8 py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="titular text-3xl tracking-[0.18em]">VAGAMUNDO</p>
            <p className="mt-5 max-w-sm font-light text-azul-claro">
              Atelier de viajes por el Mediterráneo. Grupos pequeños, casas con nombre y
              itinerarios que dejan hueco a no hacer nada.
            </p>
          </div>

          <div>
            <p className="etiqueta text-white/50">Navegar</p>
            <ul className="mt-5 space-y-2.5 font-light">
              <li>
                <Link to="/" className="hover:text-azul-claro">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/nuevo" className="hover:text-azul-claro">
                  Añadir viaje
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="etiqueta text-white/50">Escríbenos</p>
            <ul className="mt-5 space-y-2.5 font-light">
              <li>hola@vagamundo.travel</li>
              <li>+34 900 000 000</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-7">
          <p className="etiqueta text-white/40">
            PEC 4 · Frontend en React conectado a la API de la PEC 3
          </p>
        </div>
      </div>
    </footer>
  )
}
