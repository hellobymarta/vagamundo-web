import { useNavigate } from 'react-router-dom'

import FormularioViaje from '@/components/formulario-viaje'
import Aviso from '@/components/aviso'
import { useViajes } from '@/hooks/use-viajes'

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
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-titulo text-4xl">Añadir un viaje</h1>
      <p className="mt-2 text-humo">
        Se guarda en MongoDB a través de la API y aparece en el catálogo al momento.
      </p>

      <div className="mt-6">
        <Aviso tono="error">{error}</Aviso>
      </div>

      <div className="mt-6">
        <FormularioViaje onEnviar={enviar} enviando={guardando} textoBoton="Publicar viaje" />
      </div>
    </section>
  )
}
