import { useRef, useState } from 'react'

// Arrastrar con el ratón un carril que ya se puede desplazar con el dedo y
// con la rueda. En el móvil no hace falta, porque el navegador lo hace solo,
// pero en el ordenador nadie encuentra una barra de scroll horizontal
// escondida.
//
// En el estado solo guardo si se está arrastrando, que es lo que cambia el
// cursor. Las medidas del gesto van en refs, porque cambian en cada
// movimiento del ratón y no tienen que repintar nada.
export function useArrastrar() {
  const [arrastrando, setArrastrando] = useState(false)

  const carril = useRef(null)
  const inicio = useRef({ x: 0, scroll: 0 })

  function alBajar(evento) {
    // Solo el botón principal, y nunca sobre un enlace o un botón.
    if (evento.button !== 0) return

    carril.current = evento.currentTarget
    inicio.current = { x: evento.clientX, scroll: evento.currentTarget.scrollLeft }

    setArrastrando(true)
  }

  function alMover(evento) {
    if (!arrastrando || !carril.current) return

    carril.current.scrollLeft = inicio.current.scroll - (evento.clientX - inicio.current.x)
  }

  function alSoltar() {
    if (arrastrando) setArrastrando(false)
  }

  // Estos gestos se aplican sobre el carril.
  const gestos = {
    onPointerDown: alBajar,
    onPointerMove: alMover,
    onPointerUp: alSoltar,
    onPointerLeave: alSoltar,
    onPointerCancel: alSoltar,
  }

  return { arrastrando, gestos }
}
