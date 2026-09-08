import { FILAS_MARQUESINA } from '@/config/constantes'

// Marquesina de Utópica: tres filas de nombres enormes en serif que se
// deslizan despacio sobre un fondo oscuro, cada una a su ritmo y en su
// sentido. La animación es CSS pura (ver .marquesina-fila en index.css).
//
// Cada fila repite su lista dos veces porque el desplazamiento es del 50 %:
// cuando la primera copia se ha ido, la segunda está justo en su sitio.
const RITMOS = ['', 'marquesina-fila--reves', 'marquesina-fila--lenta']

export default function Marquesina() {
  return (
    <section className="overflow-hidden bg-noche py-16" aria-hidden="true">
      <div className="space-y-2">
        {FILAS_MARQUESINA.map((fila, posicion) => (
          // La key es el primer nombre de la fila, que no se repite entre filas.
          <div key={fila[0]} className={`marquesina-fila ${RITMOS[posicion % RITMOS.length]}`}>
            {[...fila, ...fila].map((nombre, copia) => (
              <span
                // Aquí sí hace falta distinguir la copia: el nombre aparece
                // dos veces a propósito, así que va con el sufijo.
                key={`${nombre}-${copia < fila.length ? 'a' : 'b'}`}
                className="titular whitespace-nowrap px-6 text-[clamp(2.5rem,6vw,5.5rem)] text-white/12"
              >
                {nombre}
                <span className="px-6 text-white/8">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
