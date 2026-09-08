import { useNavigate, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Partido from '@/components/partido'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { FOTOS, IMAGEN_POR_DEFECTO, TONOS } from '@/config/constantes'

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
      <Portada
        imagen={FOTOS.PLAYA}
        alt="Playa de Atrani"
        etiqueta="Vagamundo"
        titulo="No hemos encontrado ese viaje"
        texto="Puede que se haya retirado del catálogo."
        alto="h-[70vh]"
      >
        <Boton a="/" variante="claro">
          Volver al catálogo
        </Boton>
      </Portada>
    )
  }

  const {
    nombre,
    destino,
    descripcion,
    precio,
    duracionDias,
    itinerario,
    imagen,
    categoria,
    disponible,
  } = viaje

  async function eliminar() {
    const borrado = await eliminarViaje(id)
    if (borrado) navegar('/')
  }

  return (
    <>
      <Portada
        imagen={imagen || IMAGEN_POR_DEFECTO}
        alt={nombre}
        etiqueta={categoria ? `${categoria} · ${destino}` : destino}
        titulo={nombre}
        alto="h-[78vh]"
      />

      <Seccion tono={TONOS.ROSA} ancho="max-w-[1400px]">
        <div className="grid gap-16 md:grid-cols-[1.5fr_1fr]">
          <div>
            {descripcion && (
              <p className="titular text-3xl leading-snug md:text-4xl">{descripcion}</p>
            )}

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div>
                <div className="filete" />
                <p className="etiqueta mt-4 text-suave">Duración</p>
                <p className="titular cifras mt-2 text-2xl">{duracionDias} días</p>
              </div>
              <div>
                <div className="filete" />
                <p className="etiqueta mt-4 text-suave">Grupo</p>
                <p className="titular mt-2 text-2xl">8 viajeros</p>
              </div>
              <div>
                <div className="filete" />
                <p className="etiqueta mt-4 text-suave">Plazas</p>
                <p className="titular mt-2 text-2xl">
                  {disponible ? 'Abiertas' : 'Agotadas'}
                </p>
              </div>
            </div>
          </div>

          {/* Columna de reserva: precio grande y las acciones sobre la API. */}
          <aside className="h-fit border border-rosa-acento/25 bg-white/60 p-9">
            <p className="etiqueta text-rosa-acento">Desde</p>
            <p className="titular cifras mt-3 text-5xl">{precio} €</p>
            <p className="mt-1 text-sm font-light text-suave">por persona, todo incluido</p>

            <div className="filete my-8" />

            <div className="flex flex-col gap-3">
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

            <div className="mt-6">
              <Aviso tono="error">{error}</Aviso>
            </div>
          </aside>
        </div>
      </Seccion>

      {itinerario && (
        <Seccion tono={TONOS.OLIVA} etiqueta="El itinerario">
          <Partido
            imagen={FOTOS.MAR}
            alt="El mar de Amalfi desde el camino alto"
            pie="Amalfi · el camino alto"
            invertido
          >
            <h2 className="titular text-4xl">Día a día</h2>
            <p className="mt-7 whitespace-pre-line text-lg font-light leading-relaxed text-suave">
              {itinerario}
            </p>
          </Partido>
        </Seccion>
      )}
    </>
  )
}
