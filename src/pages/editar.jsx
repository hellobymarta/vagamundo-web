import { useNavigate, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import FormularioViaje from '@/components/formulario-viaje'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { FOTOS, IMAGEN_POR_DEFECTO, TONOS } from '@/config/constantes'

// Edición de un viaje: el mismo formulario, pero mandando PUT.
export default function Editar() {
  const { id } = useParams()
  const { viajes, cargando, guardando, error, actualizarViaje } = useViajes()
  const navegar = useNavigate()

  const viaje = viajes.find((item) => item._id === id)

  if (cargando) return <Cargando texto="Buscando el viaje…" />

  if (!viaje) {
    return (
      <Portada
        imagen={FOTOS.PLAYA}
        alt="La playa de Atrani"
        etiqueta="Vagamundo"
        titulo="Ese viaje ya no está en el catálogo"
        alto="h-[70vh]"
      >
        <Boton a="/" variante="claro">
          Volver al catálogo
        </Boton>
      </Portada>
    )
  }

  async function enviar(datos) {
    const actualizado = await actualizarViaje(id, datos)
    if (actualizado) navegar(`/viaje/${id}`)
  }

  return (
    <>
      <Portada
        imagen={viaje.imagen || IMAGEN_POR_DEFECTO}
        alt={viaje.nombre}
        etiqueta="Editar viaje"
        titulo={viaje.nombre}
        texto="Los cambios se envían a la API con una petición PUT."
        alto="h-[62vh]"
      />

      <Seccion tono={TONOS.TERRACOTA} ancho="max-w-3xl">
        <div className="mb-10">
          <Aviso tono="error">{error}</Aviso>
        </div>

        <FormularioViaje
          viajeInicial={viaje}
          onEnviar={enviar}
          enviando={guardando}
          textoBoton="Guardar cambios"
        />
      </Seccion>
    </>
  )
}
