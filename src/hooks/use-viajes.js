import { useContext } from 'react'

import { ViajesContext } from '@/context/viajes-context'

// Atajo para leer el contexto del catálogo desde cualquier componente,
// y avisa si se usa fuera del Provider.
export function useViajes() {
  const contexto = useContext(ViajesContext)

  if (!contexto) {
    throw new Error('useViajes tiene que usarse dentro de <ViajesProvider>')
  }

  return contexto
}
