import { useNavigate } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import FormularioViaje from '@/components/formulario-viaje'
import Aviso from '@/components/aviso'
import { useViajes } from '@/hooks/use-viajes'
import { FOTOS, TONOS } from '@/config/constantes'

// Alta de un viaje: formulario controlado que hace POST contra la API.
export default function Nuevo() {
  const { crearViaje, guardando, error } = useViajes()
  const navegar = useNavigate()

  async function enviar(viaje) {
    const creado = await crearViaje(viaje)

    // Si la API lo ha guardado, volvemos al catálogo, donde ya aparece.
    if (creado) navegar('/')
  }

  return (
    <>
      <Portada
        imagen={FOTOS.PLAYA}
        alt="La playa de Atrani a primera hora"
        etiqueta="Nuevo en el catálogo"
        titulo="Cuenta el viaje que tienes en la cabeza"
        texto="Se guarda en MongoDB a través de la API y aparece en el catálogo al momento."
        alto="h-[62vh]"
      />

      <Seccion tono={TONOS.TERRACOTA} ancho="max-w-3xl">
        <div className="mb-10">
          <Aviso tono="error">{error}</Aviso>
        </div>

        <FormularioViaje onEnviar={enviar} enviando={guardando} textoBoton="Publicar viaje" />
      </Seccion>
    </>
  )
}
