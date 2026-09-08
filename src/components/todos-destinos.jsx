import { Link } from 'react-router-dom'

import { CONTINENTES_CON_DESTINOS, viajesDeDestino } from '@/config/destinos'

// El listado de destinos por continente que NUBA despliega en su menú:
// columnas, el continente en serif con mayúsculas espaciadas y los sitios
// debajo. Los que ya tienen plazas van en negro; los que estamos preparando
// quedan apagados, igual que en su web.
export default function TodosDestinos({ viajes }) {
  return (
    <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
      {CONTINENTES_CON_DESTINOS.map(({ nombre, destinos }) => (
        <div key={nombre}>
          <h3 className="titular text-lg tracking-[0.12em]">{nombre.toUpperCase()}</h3>

          <ul className="mt-6 space-y-3.5 text-sm">
            {destinos.map(({ id, nombre: pais }) => {
              const cuantos = viajesDeDestino(viajes, id).length

              return (
                <li key={id}>
                  <Link
                    to={`/destinos/${id}`}
                    className={`transition hover:text-terracota-acento ${
                      cuantos > 0 ? 'text-tinta' : 'text-suave/45'
                    }`}
                  >
                    {pais}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
