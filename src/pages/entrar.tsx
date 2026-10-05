import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Campo from '@/components/campo'
import Boton from '@/components/boton'
import Aviso from '@/components/aviso'
import { useFormulario } from '@/hooks/use-formulario'
import { useSesion } from '@/hooks/use-sesion'
import { FOTOS, TONOS } from '@/config/constantes'
import { mensajeDeError } from '@/errores'
import type { FormEvent } from 'react'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { esRutaDeViaje, RUTAS } from '@/config/rutas'

const VACIO = { nombre: '', email: '', password: '' }

// Entrada a la zona de trabajo del equipo. No es una barrera suelta: cuenta
// para qué sirve y desde aquí se puede crear una cuenta nueva, que es la misma
// pantalla cambiando un campo.
export default function Entrar() {
  const { entrar, registrar } = useSesion()
  const { valores, cambiar } = useFormulario(VACIO)
  const navegar = useNavigate()
  const sitio = useLocation()

  // Un solo useState para el estado de la pantalla: si está en modo registro,
  // el error y si hay un envío en marcha.
  const [estado, setEstado] = useState({ creandoCuenta: false, error: '', enviando: false })
  useCabeceraDocumento({
    titulo: 'Entrar',
    descripcion:
      'El catálogo y el diario se leen sin cuenta. Para publicar, corregir o reservar plazas hace falta entrar.',
  })


  const { creandoCuenta, error, enviando } = estado

  // Desde la ficha de un viaje se llega aquí con la dirección de vuelta
  // guardada. Si viene de ahí, la portada habla de reservar, que es lo que la
  // persona ha venido a hacer; si no, del trabajo en el catálogo.
  const reservando = esRutaDeViaje(sitio.state?.volverA)

  const actualizar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    actualizar({ enviando: true, error: '' })

    try {
      if (creandoCuenta) await registrar(valores)
      else await entrar({ email: valores.email, password: valores.password })

      // Si venía de una página privada, la devuelvo allí.
      navegar(sitio.state?.volverA || RUTAS.panel, { replace: true })
    } catch (fallo) {
      actualizar({ error: mensajeDeError(fallo) })
    } finally {
      actualizar({ enviando: false })
    }
  }

  return (
    <>
      <Portada
        imagen={FOTOS.JAPON_MIYAJIMA}
        alt="El torii de Miyajima levantado sobre el agua, con las montañas al fondo"
        etiqueta={reservando ? 'Reserva de plazas' : 'Zona del equipo'}
        titulo={
          creandoCuenta
            ? 'Crea tu cuenta'
            : reservando
              ? 'Entra para reservar tus plazas'
              : 'Entra para trabajar en el catálogo'
        }
        texto={
          reservando
            ? 'Las plazas se guardan a nombre de una cuenta, así que primero entra o créate una. Al terminar vuelves al viaje y eliges cuántas quieres.'
            : 'El catálogo y el diario se leen sin cuenta. Para publicar, corregir o reservar plazas hace falta entrar.'
        }
        alto="h-[62vh]"
      />

      <Seccion tono={TONOS.CREMA} ancho="max-w-xl">
        <form onSubmit={enviar} className="space-y-12">
          {creandoCuenta && (
            <Campo
              etiqueta="Nombre"
              nombre="nombre"
              value={valores.nombre}
              onChange={cambiar}
              placeholder="Cómo firmas tus crónicas"
              autoComplete="name"
              required
            />
          )}

          <Campo
            etiqueta="Correo"
            nombre="email"
            tipo="email"
            value={valores.email}
            onChange={cambiar}
            placeholder="nombre@vagamundo.es"
            autoComplete="email"
            required
          />

          <div>
            <Campo
              etiqueta="Contraseña"
              nombre="password"
              tipo="password"
              value={valores.password}
              onChange={cambiar}
              autoComplete={creandoCuenta ? 'new-password' : 'current-password'}
              minLength={creandoCuenta ? 8 : undefined}
              required
            />

            {creandoCuenta && (
              <p className="mt-3 text-sm text-suave">Ocho caracteres como mínimo.</p>
            )}
          </div>

          <Aviso tono="error">{error}</Aviso>

          <div className="flex flex-wrap items-center gap-8">
            <Boton type="submit" variante="terracota" disabled={enviando}>
              {enviando ? 'Un momento…' : creandoCuenta ? 'Crear cuenta' : 'Entrar'}
            </Boton>

            <button
              type="button"
              onClick={() =>
                setEstado((previo) => ({
                  ...previo,
                  creandoCuenta: !previo.creandoCuenta,
                  error: '',
                }))
              }
              className="u-etiqueta u-zonaTactil cursor-pointer text-suave underline-offset-4 transition hover:text-tinta hover:underline"
            >
              {creandoCuenta ? 'Ya tengo cuenta' : 'Crear una cuenta'}
            </button>
          </div>
        </form>
      </Seccion>
    </>
  )
}
