import styled from 'styled-components'

import type { DatoDeDestino } from '@/config/destinos'

// La fila de datos del destino: capital, idioma, moneda y cuándo ir.
// Filete arriba, etiqueta pequeña y el dato en serif, como las fichas
// de Wilderness. Escrito con styled-components, como el resto de los
// componentes que solo pintan.
const Lista = styled.dl`
  display: grid;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`


// El filete que va encima de cada etiqueta se dibuja con un pseudoelemento y
// no con un <div>: dentro de una <dl> solo pueden ir <dt>, <dd> y los <div>
// que los agrupan, así que un <div> decorativo rompía la lista.
const Etiqueta = styled.dt`
  position: relative;
  padding-top: 1.25rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 1px;
    background: var(--color-tinta);
    opacity: 0.35;
  }

  font-family: var(--font-etiqueta);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-suave);
`

// Los datos miden lo que miden: «Roma» cabe en una línea y «Amalfi y Cinque
// Terre, desde 1997» necesita dos, así que la fila quedaba descompensada,
// con unas celdas cortas y otras largas.
//
// La columna de texto se corta a veinte caracteres, que es el ancho con el
// que los datos largos caen en dos líneas parecidas en vez de estirarse de
// lado a lado, y se reserva el alto de esas dos líneas para todas las
// celdas. Así la fila entra y sale a la misma altura en todos los destinos.
const ANCHO_DEL_DATO = '20ch'
const DOS_LINEAS = '2 * 1.3 * 1.5rem'

const Dato = styled.dd`
  font-family: var(--font-titulo);
  font-size: 1.5rem;
  line-height: 1.3;
  margin: 0.75rem 0 0;
  max-width: ${ANCHO_DEL_DATO};
  min-height: calc(${DOS_LINEAS});
  text-wrap: balance;
`

export default function DatosDestino({ datos }: { datos?: DatoDeDestino[] }) {
  if (!datos || datos.length === 0) return null

  return (
    <Lista>
      {datos.map(({ etiqueta, valor }) => (
        <div key={etiqueta}>
          <Etiqueta>{etiqueta}</Etiqueta>
          <Dato>{valor}</Dato>
        </div>
      ))}
    </Lista>
  )
}
