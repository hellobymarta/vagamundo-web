import { Navigate, useLocation } from 'react-router-dom'
import type { ReactElement } from 'react'

import Cargando from '@/components/cargando'
import { useSesion } from '@/hooks/use-sesion'
import { RUTAS } from '@/config/rutas'

// Envuelve las páginas que piden sesión. Mientras se comprueba el token
// guardado no decide nada: si redirigiera ya, al recargar una página privada
// saldría disparada al formulario de entrada aunque la sesión fuese buena.
export default function RutaPrivada({ children }: { children: ReactElement }) {
  const { haEntrado, comprobando } = useSesion()
  const sitio = useLocation()

  if (comprobando) return <Cargando texto="Comprobando la sesión…" />

  if (!haEntrado) return <Navigate to={RUTAS.entrar} state={{ volverA: sitio.pathname }} replace />

  return children
}
