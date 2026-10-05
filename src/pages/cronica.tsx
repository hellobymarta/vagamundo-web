import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import Comentarios from '@/components/comentarios'
import { api } from '@/services/api'
import { useSesion } from '@/hooks/use-sesion'
import { formatearFecha } from '@/formato'
import { TONOS } from '@/config/constantes'
import { mensajeDeError } from '@/errores'
import type { Cronica as CronicaDeApi } from '@/tipos'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

// Una crónica entera, con su fotografía y sus comentarios.
export default function Cronica() {
  const { id } = useParams()
  const navegar = useNavigate()
  const { esMio } = useSesion()

  // La crónica y lo que está pasando con ella van juntos en un solo useState.
  const [estado, setEstado] = useState<{
    cronica: CronicaDeApi | null
    error: string
    borrando: boolean
    confirmando: boolean
  }>({ cronica: null, error: '', borrando: false, confirmando: false })

  const { cronica, error, borrando, confirmando } = estado

  const cambiar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  // Mientras la crónica que tengo no sea la que pide la dirección, está
  // cargando: así no hace falta un estado más solo para eso.
  const cargando = !error && cronica?.id !== id

  useCabeceraDocumento({
    titulo: cronica ? cronica.titulo : 'Diario',
    descripcion:
      cronica?.contenido?.slice(0, 180) ||
      'Una crónica del diario de Vagamundo, escrita por quien estuvo allí.',
    imagen: undefined,
  })


  useEffect(() => {
    if (!id) return undefined

    let vigente = true

    api
      .obtenerCronica(id)
      .then((llega) => {
        if (!vigente) return
        cambiar({ cronica: llega, error: '' })
      })
      .catch((fallo) => {
        if (vigente) cambiar({ error: mensajeDeError(fallo) })
      })

    return () => {
      vigente = false
    }
  }, [id])

  async function borrar() {
    if (!id) return

    cambiar({ borrando: true, error: '' })

    try {
      await api.eliminarCronica(id)
      navegar(RUTAS.diario)
    } catch (fallo) {
      cambiar({ error: mensajeDeError(fallo), borrando: false })
    }
  }

  if (cargando) return <Cargando texto="Abriendo la crónica…" />

  if (!cronica) {
    return (
      <Seccion tono={TONOS.CREMA} ancho="max-w-2xl">
        <Aviso tono="error">{error}</Aviso>

        <div className="mt-10">
          <Boton a={RUTAS.diario} variante="contorno" compacto>
            Volver al diario
          </Boton>
        </div>
      </Seccion>
    )
  }

  return (
    <>
      <Portada
        imagen={cronica.imagen}
        alt={cronica.titulo}
        etiqueta={cronica.destino}
        titulo={cronica.titulo}
        cursiva
        dato={`${cronica.autor?.nombre || 'El equipo'} · ${formatearFecha(cronica.createdAt)}`}
        alto="h-[78vh]"
      />

      <Seccion tono={TONOS.CREMA} ancho="max-w-2xl">
        <article className="whitespace-pre-line text-lg leading-loose">
          {cronica.contenido}
        </article>

        {esMio(cronica) && (
          <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-borde pt-10">
            <Boton a={RUTAS.editarCronica(cronica.id)} variante="contorno" compacto>
              Editar
            </Boton>

            {confirmando ? (
              <>
                <p className="text-sm text-suave">
                  Se borrará también con sus comentarios. ¿Seguro?
                </p>
                <Boton variante="peligro" compacto disabled={borrando} onClick={borrar}>
                  {borrando ? 'Eliminando…' : 'Sí, eliminar'}
                </Boton>
                <button
                  type="button"
                  onClick={() => cambiar({ confirmando: false })}
                  className="EnlaceAccion"
                >
                  No
                </button>
              </>
            ) : (
              <Boton variante="peligro" compacto onClick={() => cambiar({ confirmando: true })}>
                Eliminar
              </Boton>
            )}
          </div>
        )}

        {error && (
          <div className="mt-10">
            <Aviso tono="error">{error}</Aviso>
          </div>
        )}

        <div className="mt-20 border-t border-borde pt-16">
          <Comentarios
            idCronica={cronica.id}
            comentarios={cronica.comentarios || []}
            onCambio={(comentarios) => cambiar({ cronica: { ...cronica, comentarios } })}
          />
        </div>

        <div className="mt-20">
          <Link
            to={RUTAS.diario}
            className="u-etiqueta border-b border-tinta/30 pb-1 transition hover:border-tinta"
          >
            Volver al diario
          </Link>
        </div>
      </Seccion>
    </>
  )
}
