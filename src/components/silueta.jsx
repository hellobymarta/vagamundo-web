import { buscarSilueta, LIENZO_SILUETA } from '@/config/siluetas'

// El contorno del país sobre la fotografía, como el mapa de Tailandia
// que Utópica dibuja en su explorador de destinos.
// Si no tenemos el país, dibuja una rosa de los vientos.
export default function Silueta({ destino, tamano = 190 }) {
  const trazo = buscarSilueta(destino)

  if (!trazo) {
    return (
      <svg
        viewBox="0 0 200 200"
        width={tamano}
        height={tamano}
        className="silueta"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <circle cx="100" cy="100" r="70" />
          <path d="M100 20 C 130 60, 130 140, 100 180 C 70 140, 70 60, 100 20 Z" />
          <path d="M30 100 H170" />
        </g>
      </svg>
    )
  }

  return (
    <svg
      viewBox={`0 0 ${LIENZO_SILUETA} ${LIENZO_SILUETA}`}
      width={tamano}
      height={tamano}
      className="silueta"
      role="img"
      aria-label={`Contorno de ${destino}`}
    >
      <path
        d={trazo}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}
