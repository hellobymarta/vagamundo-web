import { useNavigate, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import FormularioViaje from '@/components/formulario-viaje'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { FOTOS, IMAGEN_POR_DEFECTO, TONOS } from '@/config/constantes'
import { VIAJE_VACIO } from '@/config/constantes'
import type { ViajeNuevo } from '@/tipos'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

// Edición de un viaje: el mismo formulario, pero mandando PUT.
export default function Editar() {
  const { id } = useParams()
  const { viajes, cargando, guardando, error, actualizarViaje } = useViajes()
  const navegar = useNavigate()

  const viaje = viajes.find((item) => item.id === id)

  useCabeceraDocumento({
    titulo: viaje ? `Editar ${viaje.nombre}` : 'Editar viaje',
    descripcion: 'Corregir los datos de un viaje del catálogo de Vagamundo.',
  })


  if (cargando) return <Cargando texto="Buscando el viaje…" />

  if (!viaje) {
    return (
      <Portada
        imagen={FOTOS.PLAYA}
        alt="La playa de Atrani"
        etiqueta="Vagamundo"
        titulo="Ese viaje ya no está en el catálogo"
        alto="h-[72vh]"
      >
        <Boton a={RUTAS.inicio} variante="claro">
          Volver al catálogo
        </Boton>
      </Portada>
    )
  }

  async function enviar(datos: ViajeNuevo) {
    if (!id) return

    const actualizado = await actualizarViaje(id, datos)
    if (actualizado) navegar(RUTAS.viaje(id))
  }

  return (
    <>
      <Portada
        imagen={viaje.imagen || IMAGEN_POR_DEFECTO}
        alt={viaje.nombre}
        etiqueta="Editar viaje"
        titulo={viaje.nombre}
        cursiva
        texto="Los cambios se envían a la API con una petición PUT."
        alto="h-[62vh]"
      />

      <Seccion tono={TONOS.CREMA} ancho="max-w-3xl">
        <div className="mb-12">
          <Aviso tono="error">{error}</Aviso>
        </div>

        <FormularioViaje
          // El viaje viene de la API con los números como números; el
          // formulario los maneja como texto, que es lo que da un <input>.
          viajeInicial={{
            ...VIAJE_VACIO,
            ...viaje,
            precio: String(viaje.precio),
            duracionDias: String(viaje.duracionDias),
            plazas: String(viaje.plazas ?? VIAJE_VACIO.plazas),
          }}
          onEnviar={enviar}
          enviando={guardando}
          textoBoton="Guardar cambios"
        />
      </Seccion>
    </>
  )
}
