import { useContext } from 'react'

import { SesionContext } from '@/context/sesion-context'

// Atajo para leer el contexto de la sesión desde cualquier componente,
// y avisa si se usa fuera del Provider.
export function useSesion() {
  const contexto = useContext(SesionContext)

  if (!contexto) {
    throw new Error('useSesion tiene que usarse dentro de <SesionProvider>')
  }

  return contexto
}
