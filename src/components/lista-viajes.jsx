import TarjetaViaje from '@/components/tarjeta-viaje'
import Aviso from '@/components/aviso'
import { MENSAJES } from '@/config/constantes'

// Recorre el catálogo. Deconstruimos cada viaje dentro del map y pasamos
// el resto de sus datos a la tarjeta con el operador spread.
export default function ListaViajes({ viajes }) {
  if (viajes.length === 0) {
    return <Aviso tono="info">{MENSAJES.SIN_VIAJES}</Aviso>
  }

  return (
    <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {viajes.map(({ _id, ...viaje }) => (
        <TarjetaViaje key={_id} id={_id} {...viaje} />
      ))}
    </div>
  )
}
