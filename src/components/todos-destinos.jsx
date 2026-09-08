import { Link } from 'react-router-dom'

import { CONTINENTES, PARAMETRO_MOTIVACION } from '@/config/constantes'

// El listado de destinos por continente que NUBA despliega en su menú:
// cuatro columnas, el continente en serif con mayúsculas espaciadas y los
// países debajo en sans. Los que ya tenemos en el catálogo van en negro y
// llevan a su viaje; el resto quedan apagados, como los que no vendemos aún.
export default function TodosDestinos({ viajes }) {
  return (
    <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
      {CONTINENTES.map(({ nombre, paises }) => (
        <div key={nombre}>
          <h3 className="titular text-xl tracking-[0.12em]">{nombre.toUpperCase()}</h3>

          <ul className="mt-7 space-y-3.5 text-sm">
            {paises.map((pais) => {
              // ¿Tenemos algún viaje cuyo destino mencione este país?
              const viaje = viajes.find(({ destino }) =>
                destino.toLowerCase().includes(pais.toLowerCase())
              )

              if (!viaje) {
                return (
                  <li key={pais} className="text-suave/45">
                    {pais}
                  </li>
                )
              }

              return (
                <li key={pais}>
                  <Link
                    to={`/viaje/${viaje._id}`}
                    className="text-tinta transition hover:text-terracota-acento"
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
