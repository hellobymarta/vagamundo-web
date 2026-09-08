import { useNavigate, useParams } from 'react-router-dom'

import FormularioViaje from '@/components/formulario-viaje'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'

// Edición de un viaje: el mismo formulario, pero mandando PUT.
export default function Editar() {
  const { id } = useParams()
  const { viajes, cargando, guardando, error, actualizarViaje } = useViajes()
  const navegar = useNavigate()

  const viaje = viajes.find((item) => item._id === id)

  if (cargando) return <Cargando texto="Buscando el viaje…" />

  if (!viaje) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Aviso tono="error">Ese viaje ya no está en el catálogo.</Aviso>
        <div className="mt-6">
          <Boton a="/" variante="contorno">
            Volver al catálogo
          </Boton>
        </div>
      </section>
    )
  }

  async function enviar(datos) {
    const actualizado = await actualizarViaje(id, datos)
    if (actualizado) navegar(`/viaje/${id}`)
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-titulo text-4xl">Editar «{viaje.nombre}»</h1>
      <p className="mt-2 text-humo">Los cambios se envían a la API con una petición PUT.</p>

      <div className="mt-6">
        <Aviso tono="error">{error}</Aviso>
      </div>

      <div className="mt-6">
        <FormularioViaje
          viajeInicial={viaje}
          onEnviar={enviar}
          enviando={guardando}
          textoBoton="Guardar cambios"
        />
      </div>
    </section>
  )
}
