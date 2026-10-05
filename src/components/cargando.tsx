import styled from 'styled-components'

import { MENSAJES } from '@/config/constantes'

// Lo que se ve mientras la API responde. También lo usa <Suspense>.
//
// Este es uno de los componentes stateless escritos con styled-components en
// vez de con clases de Tailwind: no recibe estado de nadie, solo pinta, y así
// su CSS vive en el mismo archivo que él. Los colores no se repiten aquí: se
// leen de las variables que declara el tema en index.css, para que no haya dos
// sitios donde cambiar un color.
const Caja = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 12rem 1.5rem 8rem;
  color: var(--color-suave);
`

const Rueda = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-borde);
  border-top-color: var(--color-terracota-acento);
  border-radius: 50%;
  animation: girar 0.9s linear infinite;

  @keyframes girar {
    to {
      transform: rotate(360deg);
    }
  }

  /* Si en el sistema está pedido que no se mueva nada, la rueda se queda
     quieta y se distingue igual por el color del borde de arriba. */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const Texto = styled.p`
  font-family: var(--font-etiqueta);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

export default function Cargando({ texto = MENSAJES.CARGANDO }) {
  return (
    <Caja>
      <Rueda aria-hidden="true" />
      <Texto>{texto}</Texto>
    </Caja>
  )
}
