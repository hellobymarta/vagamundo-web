import { useEffect, useState } from 'react'

// Sigue el ratón para el cursor propio, como el de travelmachine.es.
// El estado lleva todo lo que necesita el punto: dónde está, si está encima
// de algo pulsable y si hay que dibujarlo.
const FUERA = { x: -100, y: -100, sobrePulsable: false, visible: false }

export function useRaton() {
  const [raton, setRaton] = useState(FUERA)

  useEffect(() => {
    // Si el dispositivo no tiene ratón (móvil, tablet), no hacemos nada.
    if (!window.matchMedia('(hover: hover)').matches) return

    function alMover(evento: MouseEvent) {
      // ¿Está encima de un botón, un enlace, un campo o un desplegable?
      const sobre = evento.target instanceof Element ? evento.target : null
      const pulsable = sobre?.closest(
        'a, button, input, select, textarea, summary, [role="button"]'
      )

      setRaton({
        x: evento.clientX,
        y: evento.clientY,
        sobrePulsable: Boolean(pulsable),
        visible: true,
      })
    }

    function alSalir() {
      setRaton((previo) => ({ ...previo, visible: false }))
    }

    window.addEventListener('mousemove', alMover)
    document.addEventListener('mouseleave', alSalir)

    return () => {
      window.removeEventListener('mousemove', alMover)
      document.removeEventListener('mouseleave', alSalir)
    }
  }, [])

  return raton
}
