import { FILAS_MARQUESINA } from '@/config/constantes'

// Marquesina de Utópica: tres filas de nombres enormes en serif que se
// deslizan despacio sobre un fondo oscuro, cada una a su ritmo y en su
// sentido. La animación es CSS pura (ver .marquesina-fila en index.css).
//
// Cada fila repite su lista dos veces porque el desplazamiento es del 50 %:
// cuando la primera copia se ha ido, la segunda está justo en su sitio. La
// duplicación se prepara aquí, con la copia marcada como dato, para que el
// map no tenga que recorrerse con la posición.
function duplicar(nombres) {
  return [
    ...nombres.map((nombre) => ({ id: `${nombre}-a`, nombre })),
    ...nombres.map((nombre) => ({ id: `${nombre}-b`, nombre })),
  ]
}

export default function Marquesina() {
  return (
    <section className="overflow-hidden bg-noche py-16" aria-hidden="true">
      <div className="space-y-2">
        {FILAS_MARQUESINA.map(({ id, ritmo, nombres }) => (
          <div key={id} className={`marquesina-fila ${ritmo}`}>
            {duplicar(nombres).map(({ id: idCopia, nombre }) => (
              <span
                key={idCopia}
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
