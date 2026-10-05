import { useRaton } from '@/hooks/use-raton'

// Cursor propio, como el de travelmachine.es: un punto pequeño que sigue al
// ratón y que, al pasar por encima de algo pulsable, crece y se queda hueco.
// El cursor del sistema se esconde en index.css (cursor: none), y en pantallas
// táctiles no se dibuja nada y vuelve el de siempre.
const PUNTO = 12
const ANILLO = 44

export default function Cursor() {
  const { x, y, sobrePulsable, visible } = useRaton()

  const tamano = sobrePulsable ? ANILLO : PUNTO

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-difference"
      style={{
        width: `${tamano}px`,
        height: `${tamano}px`,
        // El punto se centra en la punta del ratón restando la mitad.
        transform: `translate3d(${x - tamano / 2}px, ${y - tamano / 2}px, 0)`,
        backgroundColor: sobrePulsable ? 'transparent' : '#ffffff',
        border: sobrePulsable ? '1px solid #ffffff' : '1px solid transparent',
        opacity: visible ? 1 : 0,
        transition:
          'width 0.28s ease, height 0.28s ease, background-color 0.28s ease, border-color 0.28s ease, opacity 0.3s ease',
      }}
    />
  )
}
