import { useContext } from 'react'

import { ViajesContext } from '@/context/viajes-context'

// Atajo para leer el contexto del catálogo desde cualquier componente,
// con un aviso claro si alguien se olvida del Provider.
export function useViajes() {
  const contexto = useContext(ViajesContext)

  if (!contexto) {
    throw new Error('useViajes tiene que usarse dentro de <ViajesProvider>')
  }

  return contexto
}
