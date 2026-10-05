import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Aviso from '@/components/aviso'
import FormularioCronica from '@/components/formulario-cronica'
import { api } from '@/services/api'
import { mensajeDeError } from '@/errores'
import type { CronicaNueva } from '@/tipos'
import { FOTOS, TONOS } from '@/config/constantes'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

// Publicar una crónica en el diario. La página está protegida por RutaPrivada,
// y la API vuelve a comprobar la sesión antes de guardar nada.
export default function NuevaCronica() {
  useCabeceraDocumento({
    titulo: 'Escribir una crónica',
    descripcion:
      'Contar un viaje en el diario de Vagamundo.',
  })

  const navegar = useNavigate()
  const [estado, setEstado] = useState({ error: '', guardando: false })

  const { error, guardando } = estado

  const cambiar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  async function enviar(datos: CronicaNueva) {
    cambiar({ guardando: true, error: '' })

    try {
      const creada = await api.crearCronica(datos)
      navegar(RUTAS.cronica(creada.id), { replace: true })
    } catch (fallo) {
      cambiar({ error: mensajeDeError(fallo), guardando: false })
    }
  }

  return (
    <>
      <Portada
        imagen={FOTOS.PLAYA}
        alt="La playa de Atrani a primera hora"
        etiqueta="Diario"
        titulo="Cuenta cómo fue"
        texto="La fotografía se reduce en el navegador antes de guardarla, para que no pese de más."
        alto="h-[62vh]"
      />

      <Seccion tono={TONOS.CREMA} ancho="max-w-3xl">
        <div className="mb-12">
          <Aviso tono="error">{error}</Aviso>
        </div>

        <FormularioCronica onEnviar={enviar} enviando={guardando} />
      </Seccion>
    </>
  )
}
