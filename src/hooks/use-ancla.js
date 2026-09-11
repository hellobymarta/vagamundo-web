import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router cambia la dirección pero no mueve el scroll: un enlace a
// «/#catalogo» actualizaba la barra del navegador y dejaba al usuario donde
// estaba, así que parecía que el botón no hacía nada.
//
// El hueco de la cabecera fija lo resuelve el CSS con scroll-margin-top, así
// que aquí solo hay que llevar la página hasta el elemento.
export function desplazarHasta(hash = '') {
  const id = hash.replace('#', '')

  if (!id) return false

  const destino = document.getElementById(id)

  if (!destino) return false

  // Si alguien tiene desactivadas las animaciones del sistema, salto seco.
  const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  destino.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' })

  return true
}

// Para las páginas: cuando se llega con un ancla en la URL, baja hasta ella.
// Depende también de `key`, que cambia en cada navegación aunque la dirección
// sea la misma, para que el filtro del catálogo vuelva a bajar cada vez.
export function useAncla() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return undefined

    // El contenido puede estar montándose todavía: esperamos un fotograma.
    const cuadro = requestAnimationFrame(() => desplazarHasta(hash))

    return () => cancelAnimationFrame(cuadro)
  }, [hash, key])
}
