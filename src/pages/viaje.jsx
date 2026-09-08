import { useNavigate, useParams } from 'react-router-dom'

import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { IMAGEN_POR_DEFECTO } from '@/config/constantes'

// Ficha de un viaje. Lo buscamos en el catálogo que ya tenemos en el contexto,
// así no repetimos una llamada que la app ya ha hecho.
export default function Viaje() {
  const { id } = useParams()
  const { viajes, cargando, guardando, error, eliminarViaje } = useViajes()
  const navegar = useNavigate()

  const viaje = viajes.find((item) => item._id === id)

  if (cargando) return <Cargando texto="Abriendo el viaje…" />

  if (!viaje) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Aviso tono="error">No hemos encontrado ese viaje.</Aviso>
        <div className="mt-6">
          <Boton a="/" variante="contorno">
            Volver al catálogo
          </Boton>
        </div>
      </section>
    )
  }

  const { nombre, destino, descripcion, precio, duracionDias, itinerario, imagen, categoria, disponible } = viaje

  async function eliminar() {
    const borrado = await eliminarViaje(id)
    if (borrado) navegar('/')
  }

  return (
    <>
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={imagen || IMAGEN_POR_DEFECTO}
          alt={nombre}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-azul/55" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-12 text-crema">
          {categoria && (
            <p className="text-xs uppercase tracking-[0.3em] text-amarillo">{categoria}</p>
          )}
          <h1 className="mt-3 font-titulo text-5xl">{nombre}</h1>
          <p className="mt-2 text-crema/85">{destino}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-6 space-y-3">
          <Aviso tono="error">{error}</Aviso>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div>
            {descripcion && <p className="text-lg leading-relaxed">{descripcion}</p>}

            {itinerario && (
              <>
                <h2 className="mt-10 font-titulo text-2xl">El itinerario</h2>
                <p className="mt-3 whitespace-pre-line leading-relaxed text-humo">{itinerario}</p>
              </>
            )}
          </div>

          <aside className="h-fit rounded-3xl border border-arena bg-rosa/60 p-7">
            <p className="cifras font-titulo text-4xl">{precio} €</p>
            <p className="text-sm text-humo">por persona</p>

            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-humo">Duración</dt>
                <dd className="cifras">{duracionDias} días</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-humo">Plazas</dt>
                <dd>{disponible ? 'Disponibles' : 'Agotadas'}</dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-col gap-3">
              <Boton a={`/editar/${id}`} variante="principal">
                Editar viaje
              </Boton>
              <Boton variante="peligro" onClick={eliminar} disabled={guardando}>
                {guardando ? 'Eliminando…' : 'Eliminar del catálogo'}
              </Boton>
              <Boton a="/" variante="contorno">
                Volver al catálogo
              </Boton>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
