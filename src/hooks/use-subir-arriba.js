import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Al cambiar de página el navegador conserva el scroll donde estaba,
// y en una web con portadas a pantalla completa queda raro.
// Este hook la sube arriba cada vez que cambia la ruta.
export function useSubirArriba() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
}
