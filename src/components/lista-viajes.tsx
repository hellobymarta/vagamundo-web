import TarjetaViaje from '@/components/tarjeta-viaje'
import Aviso from '@/components/aviso'
import { MENSAJES } from '@/config/constantes'
import type { Viaje } from '@/tipos'

// Recorre el catálogo y monta una ficha por viaje.
//
// Dos columnas desde el móvil: en una sola, el catálogo entero pedía diez
// pantallas de scroll. La ficha se adapta encogiendo el titular y guardando
// la descripción, no la foto.
export default function ListaViajes({ viajes }: { viajes: Viaje[] }) {
  if (viajes.length === 0) {
    return <Aviso tono="info">{MENSAJES.SIN_VIAJES}</Aviso>
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-10 sm:gap-y-20 lg:grid-cols-3">
      {viajes.map(({ id, ...viaje }) => (
        <TarjetaViaje key={id} id={id} {...viaje} />
      ))}
    </div>
  )
}
