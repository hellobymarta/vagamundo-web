import { useEffect, useState } from 'react'

// El efecto de NUBA al hacer scroll: su cabecera empieza transparente y de
// 90 px de alto, y en cuanto bajas un poco se vuelve sólida, de 75 px y con
// el texto en negro. Aquí basta con saber si ya hemos bajado del umbral.
export function useCabeceraSolida(umbral = 40) {
  const [solida, setSolida] = useState(false)

  useEffect(() => {
    function alHacerScroll() {
      setSolida(window.scrollY > umbral)
    }

    alHacerScroll()
    window.addEventListener('scroll', alHacerScroll, { passive: true })

    // Al desmontar, quito el oyente.
    return () => window.removeEventListener('scroll', alHacerScroll)
  }, [umbral])

  return solida
}
