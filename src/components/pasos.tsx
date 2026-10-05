import styled from 'styled-components'

import { PASOS } from '@/config/constantes'

// Los tres pasos numerados, como el «Tailor-made journeys» de Wilderness:
// número grande en serif, título y una línea de explicación. Stateless, así
// que va con styled-components y su CSS al lado.
const Lista = styled.ol`
  display: grid;
  gap: 3.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`

const Numero = styled.p`
  font-family: var(--font-titulo);
  font-variant-numeric: lining-nums tabular-nums;
  font-size: 3rem;
  line-height: 1;
  color: color-mix(in srgb, var(--color-terracota-acento) 35%, transparent);
  margin: 0;
`

const Titulo = styled.h3`
  font-family: var(--font-titulo);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  margin: 1.5rem 0 0;
`

const Texto = styled.p`
  margin: 1rem 0 0;
  line-height: 1.7;
  color: var(--color-suave);
`

export default function Pasos() {
  return (
    <Lista>
      {PASOS.map(({ numero, titulo, texto }) => (
        <li key={numero}>
          <Numero aria-hidden="true">{numero}</Numero>
          <Titulo>{titulo}</Titulo>
          <Texto>{texto}</Texto>
        </li>
      ))}
    </Lista>
  )
}
