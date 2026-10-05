import styled, { css } from 'styled-components'
import type { ReactNode } from 'react'

// Mensaje de estado reutilizable: error, éxito o información.
//
// Escrito con styled-components. El tono entra como prop y decide el color del
// filete y del texto, que es justo para lo que sirven los estilos con props.
// La prop lleva el dólar delante ($tono) para que styled-components la use solo
// para elegir el estilo y no la escriba como atributo en el HTML.
export type TonoDeAviso = 'error' | 'exito' | 'info'

const TONOS: Record<TonoDeAviso, ReturnType<typeof css>> = {
  error: css`
    border-color: var(--color-rosa-acento);
    color: var(--color-rosa-acento);
  `,
  exito: css`
    border-color: var(--color-oliva-acento);
    color: var(--color-oliva-acento);
  `,
  info: css`
    border-color: var(--color-borde);
    color: var(--color-suave);
  `,
}

const Mensaje = styled.p<{ $tono: TonoDeAviso }>`
  border-left: 2px solid;
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  line-height: 1.6;

  ${({ $tono }) => TONOS[$tono] || TONOS.info}
`

export default function Aviso({
  tono = 'info',
  children,
}: {
  tono?: TonoDeAviso
  children?: ReactNode
}) {
  if (!children) return null

  return (
    <Mensaje $tono={tono} role="status">
      {children}
    </Mensaje>
  )
}
