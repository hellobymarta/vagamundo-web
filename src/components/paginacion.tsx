import styled from 'styled-components'

// Paginación del diario. Cada crónica arrastra su fotografía en Base64, así
// que traerlas todas de golpe sería lentísimo: van de seis en seis.
//
// Otro stateless con styled-components. El botón de la página en la que
// estamos se distingue con la prop $activo.
const Barra = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

const BotonPagina = styled.button<{ $activo?: boolean }>`
  font-family: var(--font-etiqueta);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  min-width: 2.75rem;
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-borde);
  background: transparent;
  color: var(--color-suave);
  cursor: pointer;
  transition:
    background-color 0.4s ease,
    border-color 0.4s ease,
    color 0.4s ease;

  &:hover:not(:disabled) {
    border-color: var(--color-tinta);
    color: var(--color-tinta);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }

  ${({ $activo }) =>
    $activo &&
    `
      background: var(--color-tinta);
      border-color: var(--color-tinta);
      color: var(--color-crema);
    `}
`

interface PropsDePaginacion {
  pagina: number
  paginas: number
  onCambiar: (pagina: number) => void
}

export default function Paginacion({ pagina, paginas, onCambiar }: PropsDePaginacion) {
  if (paginas <= 1) return null

  const numeros = Array.from({ length: paginas }, (...[, posicion]) => posicion + 1)

  return (
    <Barra aria-label="Páginas del diario">
      <BotonPagina type="button" disabled={pagina === 1} onClick={() => onCambiar(pagina - 1)}>
        Anterior
      </BotonPagina>

      {numeros.map((numero) => (
        <BotonPagina
          key={numero}
          type="button"
          $activo={numero === pagina}
          aria-current={numero === pagina ? 'page' : undefined}
          onClick={() => onCambiar(numero)}
        >
          {numero}
        </BotonPagina>
      ))}

      <BotonPagina
        type="button"
        disabled={pagina === paginas}
        onClick={() => onCambiar(pagina + 1)}
      >
        Siguiente
      </BotonPagina>
    </Barra>
  )
}
