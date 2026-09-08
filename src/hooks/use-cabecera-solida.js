import { useEffect, useState } from 'react'

// Las tres webs de referencia hacen lo mismo: la cabecera empieza
// transparente sobre la foto y, al bajar, se vuelve sólida.
// Este hook solo dice si ya hemos bajado del umbral.
export function useCabeceraSolida(umbral = 90) {
  const [solida, setSolida] = useState(false)

  useEffect(() => {
    function alHacerScroll() {
      setSolida(window.scrollY > umbral)
    }

    alHacerScroll()
    window.addEventListener('scroll', alHacerScroll, { passive: true })

    // Muy importante: al desmontar, quitamos el oyente.
    return () => window.removeEventListener('scroll', alHacerScroll)
  }, [umbral])

  return solida
}
