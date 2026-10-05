import { useCallback, useEffect, useState } from 'react'

// El carrusel guarda en qué posición estamos y devuelve las funciones para
// moverse. Da la vuelta por los dos lados,
// así nunca se queda sin sitio donde ir.
//
// Con `automatico` en milisegundos avanza solo, como el hero de NUBA.
// Cada vez que se mueve a mano, el reloj vuelve a empezar.
export function useCarrusel(cuantos: number, automatico = 0) {
  const [indice, setIndice] = useState(0)

  const ir = useCallback(
    (nuevo: number) => {
      if (cuantos === 0) return
      // El módulo con el ajuste de arriba hace que -1 se convierta en el último.
      setIndice(((nuevo % cuantos) + cuantos) % cuantos)
    },
    [cuantos]
  )

  const siguiente = useCallback(() => setIndice((previo) => (previo + 1) % cuantos), [cuantos])

  const anterior = useCallback(
    () => setIndice((previo) => (previo - 1 + cuantos) % cuantos),
    [cuantos]
  )

  // El paso automático. Depende de `indice`, así que al pulsar un punto
  // el intervalo se limpia y se crea de nuevo: el reloj se reinicia.
  useEffect(() => {
    if (!automatico || cuantos < 2) return

    const reloj = setInterval(siguiente, automatico)
    return () => clearInterval(reloj)
  }, [automatico, cuantos, siguiente, indice])

  // Si la lista se encoge, el índice podría quedarse fuera: lo acotamos aquí.
  const seguro = cuantos > 0 ? Math.min(indice, cuantos - 1) : 0

  return { indice: seguro, ir, siguiente, anterior }
}
