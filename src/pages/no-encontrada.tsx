import Portada from '@/components/portada'
import Boton from '@/components/boton'
import { FOTOS } from '@/config/constantes'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

export default function NoEncontrada() {
  useCabeceraDocumento({
    titulo: 'Página no encontrada',
    descripcion:
      'Por aquí no pasa ninguna ruta. Vuelve al catálogo para ver los viajes abiertos.',
  })

  return (
    <Portada
      imagen={FOTOS.NOCHE}
      alt="Positano de noche"
      etiqueta="Error 404"
      titulo="Por aquí no pasa ninguna ruta"
      texto="La página que buscabas no existe."
      alto="h-[86vh]"
    >
      <Boton a={RUTAS.inicio} variante="claro">
        Ir al catálogo
      </Boton>
    </Portada>
  )
}
