import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import FormularioCronica from '@/components/formulario-cronica'
import { api } from '@/services/api'
import { useSesion } from '@/hooks/use-sesion'
import { TONOS } from '@/config/constantes'
import { mensajeDeError } from '@/errores'
import type { Cronica as CronicaDeApi, CronicaNueva } from '@/tipos'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

// Corregir una crónica propia. La API comprueba de nuevo que es tuya, pero sin
// esta comprobación se vería el formulario relleno de una ajena antes de que
// contestara que no.
export default function EditarCronica() {
  const { id } = useParams()
  const navegar = useNavigate()
  const { esMio } = useSesion()

  const [estado, setEstado] = useState<{
    cronica: CronicaDeApi | null
    error: string
    guardando: boolean
  }>({ cronica: null, error: '', guardando: false })

  const { cronica, error, guardando } = estado

  useCabeceraDocumento({
    titulo: cronica ? `Editar ${cronica.titulo}` : 'Editar la crónica',
    descripcion: 'Corregir una crónica del diario de Vagamundo.',
  })


  const cambiar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  const cargando = !error && cronica?.id !== id

  useEffect(() => {
    if (!id) return undefined

    let vigente = true

    api
      .obtenerCronica(id)
      .then((llega) => {
        if (vigente) cambiar({ cronica: llega })
      })
      .catch((fallo) => {
        if (vigente) cambiar({ error: mensajeDeError(fallo) })
      })

    return () => {
      vigente = false
    }
  }, [id])

  async function enviar(datos: CronicaNueva) {
    if (!id) return

    cambiar({ guardando: true, error: '' })

    try {
      await api.actualizarCronica(id, datos)
      navegar(RUTAS.cronica(id), { replace: true })
    } catch (fallo) {
      cambiar({ error: mensajeDeError(fallo), guardando: false })
    }
  }

  if (cargando) return <Cargando texto="Buscando la crónica…" />

  if (!cronica) {
    return (
      <Seccion tono={TONOS.CREMA} ancho="max-w-2xl">
        <Aviso tono="error">{error}</Aviso>
      </Seccion>
    )
  }

  if (!esMio(cronica)) {
    return (
      <Seccion tono={TONOS.CREMA} ancho="max-w-2xl">
        <Aviso tono="error">Esta crónica la escribió otra persona del equipo.</Aviso>
      </Seccion>
    )
  }

  return (
    <>
      <Portada
        imagen={cronica.imagen}
        alt={cronica.titulo}
        etiqueta="Editar"
        titulo={cronica.titulo}
        cursiva
        alto="h-[58vh]"
      />

      <Seccion tono={TONOS.CREMA} ancho="max-w-3xl">
        <div className="mb-12">
          <Aviso tono="error">{error}</Aviso>
        </div>

        <FormularioCronica
          cronicaInicial={{
            titulo: cronica.titulo,
            destino: cronica.destino,
            contenido: cronica.contenido,
            imagen: cronica.imagen,
          }}
          onEnviar={enviar}
          enviando={guardando}
          textoBoton="Guardar los cambios"
        />
      </Seccion>
    </>
  )
}
