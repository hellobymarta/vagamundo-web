import Portada from '@/components/portada'
import Boton from '@/components/boton'
import { FOTOS } from '@/config/constantes'

export default function NoEncontrada() {
  return (
    <Portada
      imagen={FOTOS.NOCHE}
      alt="Positano de noche"
      etiqueta="Error 404"
      titulo="Por aquí no pasa ninguna ruta"
      texto="La página que buscabas no existe."
      alto="h-[80vh]"
    >
      <Boton a="/" variante="claro">
        Ir al catálogo
      </Boton>
    </Portada>
  )
}
