import TarjetaViaje from '@/components/tarjeta-viaje'
import Aviso from '@/components/aviso'
import { MENSAJES } from '@/config/constantes'

// Recorre el catálogo. Deconstruimos cada viaje dentro del map y pasamos
// el resto de sus datos a la tarjeta con el operador spread.
//
// Dos columnas desde el móvil: en una sola, el catálogo entero pedía diez
// pantallas de scroll. La ficha se adapta encogiendo el titular y guardando
// la descripción, no la foto.
export default function ListaViajes({ viajes }) {
  if (viajes.length === 0) {
    return <Aviso tono="info">{MENSAJES.SIN_VIAJES}</Aviso>
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-10 sm:gap-y-20 lg:grid-cols-3">
      {viajes.map(({ _id, ...viaje }) => (
        <TarjetaViaje key={_id} id={_id} {...viaje} />
      ))}
    </div>
  )
}
