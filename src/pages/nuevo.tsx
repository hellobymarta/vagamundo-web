import { useNavigate, useSearchParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import FormularioViaje from '@/components/formulario-viaje'
import Aviso from '@/components/aviso'
import { useViajes } from '@/hooks/use-viajes'
import { FOTOS, TONOS, VIAJE_VACIO, PARAMETRO_PROPUESTA } from '@/config/constantes'
import type { ViajeNuevo } from '@/tipos'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

// Alta de un viaje: formulario controlado que hace POST contra la API.
export default function Nuevo() {
  const { crearViaje, guardando, error } = useViajes()
  useCabeceraDocumento({
    titulo: 'Añadir un viaje',
    descripcion:
      'Dar de alta un viaje en el catálogo de Vagamundo.',
  })

  const navegar = useNavigate()

  // Si se llega desde «Solicitar propuesta» la dirección trae el destino,
  // así que el formulario abre con ese campo puesto.
  const [parametros] = useSearchParams()
  const destino = parametros.get(PARAMETRO_PROPUESTA)

  async function enviar(viaje: ViajeNuevo) {
    const creado = await crearViaje(viaje)

    // Si la API lo ha guardado, volvemos al catálogo, donde ya aparece.
    if (creado) navegar(RUTAS.catalogo)
  }

  return (
    <>
      <Portada
        imagen={FOTOS.PLAYA}
        alt="La playa de Atrani a primera hora"
        etiqueta={destino ? `Propuesta · ${destino}` : 'Nuevo en el catálogo'}
        titulo="Cuenta el viaje que tienes en la cabeza"
        texto="Se guarda en MongoDB a través de la API y aparece en el catálogo al momento."
        alto="h-[62vh]"
      />

      <Seccion tono={TONOS.CREMA} ancho="max-w-3xl">
        <div className="mb-12">
          <Aviso tono="error">{error}</Aviso>
        </div>

        <FormularioViaje
          viajeInicial={destino ? { ...VIAJE_VACIO, destino } : VIAJE_VACIO}
          onEnviar={enviar}
          enviando={guardando}
          textoBoton="Publicar viaje"
        />
      </Seccion>
    </>
  )
}
