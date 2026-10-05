import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { api, guardarToken, leerToken } from '@/services/api'
import type { Credenciales, DatosDeRegistro, Usuario } from '@/tipos'

/** Lo que cualquier componente puede pedirle al contexto de sesión. */
export interface ValorDeSesion {
  usuario: Usuario | null
  comprobando: boolean
  haEntrado: boolean
  entrar: (credenciales: Credenciales) => Promise<Usuario>
  registrar: (datos: DatosDeRegistro) => Promise<Usuario>
  salir: () => void
  esMio: (cosa?: { autor?: { id: string } } | null) => boolean
}

interface EstadoDeSesion {
  usuario: Usuario | null
  comprobando: boolean
}

// Contexto global de la sesión: quién ha entrado. Lo saben todas las páginas
// sin ir pasando el usuario de padre a hijo.
//
// El token se guarda en localStorage para que la sesión siga abierta al cerrar
// el navegador. Al arrancar no me fío de lo que hay guardado: se lo pregunto a
// la API, que es quien sabe si sigue valiendo o ha caducado.
export const SesionContext = createContext<ValorDeSesion | null>(null)

export function SesionProvider({ children }: { children: ReactNode }) {
  // Quién ha entrado y si todavía se está comprobando el token son el mismo
  // dato: el estado de la sesión. Por eso van en un único useState.
  const [sesion, setSesion] = useState<EstadoDeSesion>(() => ({
    usuario: null,
    comprobando: Boolean(leerToken()),
  }))

  const { usuario, comprobando } = sesion

  const cambiar = (parcial: Partial<EstadoDeSesion>) =>
    setSesion((previo) => ({ ...previo, ...parcial }))

  useEffect(() => {
    if (!leerToken()) return undefined

    let vigente = true

    api
      .comprobarSesion()
      .then(({ usuario: suyo }) => {
        if (vigente) cambiar({ usuario: suyo })
      })
      .catch(() => {
        guardarToken(null)
        if (vigente) cambiar({ usuario: null })
      })
      .finally(() => {
        if (vigente) cambiar({ comprobando: false })
      })

    // Si el componente se desmonta antes de que conteste, no toco su estado.
    return () => {
      vigente = false
    }
  }, [])

  const entrar = useCallback(async (credenciales: Credenciales) => {
    const { token, usuario: suyo } = await api.entrar(credenciales)
    guardarToken(token)
    cambiar({ usuario: suyo })
    return suyo
  }, [])

  const registrar = useCallback(async (datos: DatosDeRegistro) => {
    const { token, usuario: suyo } = await api.registrar(datos)
    guardarToken(token)
    cambiar({ usuario: suyo })
    return suyo
  }, [])

  const salir = useCallback(() => {
    guardarToken(null)
    cambiar({ usuario: null })
  }, [])

  // Para saber si algo lo ha escrito quien está mirando la pantalla.
  const esMio = useCallback(
    (cosa?: { autor?: { id: string } } | null) =>
      Boolean(usuario) && cosa?.autor?.id === usuario?.id,
    [usuario]
  )

  const valor = useMemo<ValorDeSesion>(
    () => ({
      usuario,
      comprobando,
      haEntrado: Boolean(usuario),
      entrar,
      registrar,
      salir,
      esMio,
    }),
    [usuario, comprobando, entrar, registrar, salir, esMio]
  )

  return <SesionContext.Provider value={valor}>{children}</SesionContext.Provider>
}
