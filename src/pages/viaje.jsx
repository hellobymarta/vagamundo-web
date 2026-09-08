import { Link, useNavigate, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Partido from '@/components/partido'
import Silueta from '@/components/silueta'
import TarjetaViaje from '@/components/tarjeta-viaje'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { FOTOS, IMAGEN_POR_DEFECTO, TONOS } from '@/config/constantes'
import { contarNoches, formatearPrecio } from '@/formato'

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
        alto="h-[72vh]"
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

  // Otros viajes para el carril del final, sin repetir el que se está viendo.
  const otros = viajes.filter((item) => item._id !== id).slice(0, 6)

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
        cursiva
        dato={`${duracionDias} días · ${contarNoches(duracionDias)} noches · ocho viajeros`}
        alto="h-[84vh]"
      />

      <Seccion tono={TONOS.CREMA}>
        <div className="grid gap-16 md:grid-cols-[1.5fr_1fr] md:gap-24">
          <div>
            {/* El contorno del país, el mismo recurso que en el explorador. */}
            <div className="text-tinta/25">
              <Silueta destino={destino} tamano={120} />
            </div>

            {descripcion && (
              <p className="titular mt-10 text-2xl leading-snug md:text-3xl">{descripcion}</p>
            )}

            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              <div>
                <div className="filete" />
                <p className="etiqueta mt-5 text-suave">Duración</p>
                <p className="titular cifras mt-3 text-2xl">{duracionDias} días</p>
              </div>
              <div>
                <div className="filete" />
                <p className="etiqueta mt-5 text-suave">Grupo</p>
                <p className="titular mt-3 text-2xl">8 viajeros</p>
              </div>
              <div>
                <div className="filete" />
                <p className="etiqueta mt-5 text-suave">Plazas</p>
                <p className="titular mt-3 text-2xl">{disponible ? 'Abiertas' : 'Agotadas'}</p>
              </div>
            </div>
          </div>

          {/* Columna de reserva: el precio grande y las acciones sobre la API. */}
          <aside className="h-fit border border-borde bg-crema-hueso p-10">
            <p className="etiqueta text-terracota-acento">Desde</p>
            <p className="titular cifras mt-4 text-5xl">{formatearPrecio(precio)} €</p>
            <p className="mt-2 text-sm text-suave">por persona</p>

            <div className="filete my-9" />

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

            <div className="mt-7">
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
            pie="El camino alto"
            invertido
          >
            <h2 className="titular t-seccion">Día a día</h2>
            <p className="mt-8 whitespace-pre-line leading-relaxed text-suave md:text-lg">
              {itinerario}
            </p>
          </Partido>
        </Seccion>
      )}

      {otros.length > 0 && (
        <Seccion tono={TONOS.HUESO} etiqueta="Sigue mirando" titulo="Otros viajes del catálogo">
          {/* Carril horizontal con parada en cada ficha, como el carrusel
              de campamentos de Wilderness pero solo con CSS. */}
          <div className="carril -mx-6 flex gap-10 overflow-x-auto px-6 pb-4 md:-mx-10 md:px-10">
            {otros.map(({ _id, ...resto }) => (
              <div key={_id} className="w-[300px] shrink-0 md:w-[380px]">
                <TarjetaViaje id={_id} {...resto} />
              </div>
            ))}
          </div>

          <p className="etiqueta mt-12">
            <Link
              to="/#catalogo"
              className="border-b border-tinta/25 pb-1 transition hover:border-tinta"
            >
              Ver el catálogo completo
            </Link>
          </p>
        </Seccion>
      )}
    </>
  )
}
