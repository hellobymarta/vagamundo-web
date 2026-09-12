import { Link, useNavigate, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Silueta from '@/components/silueta'
import Itinerario from '@/components/itinerario'
import Galeria from '@/components/galeria'
import DatosDestino from '@/components/datos-destino'
import BandaOscura from '@/components/banda-oscura'
import TarjetaViaje from '@/components/tarjeta-viaje'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { buscarDestino, fotoDeDestino } from '@/config/destinos'
import { FOTOS, IMAGEN_POR_DEFECTO, TONOS } from '@/config/constantes'
import { contarNoches, enPalabras, formatearPrecio } from '@/formato'

// Ficha de un viaje. Lo buscamos en el catálogo que ya tenemos en el contexto,
// así no repetimos una llamada que la app ya ha hecho.
//
// Lo que viene de la API: nombre, destino, descripción, precio, duración e
// itinerario. Lo que viene de config/destinos.js: la historia del sitio, sus
// datos y su galería de fotos. Así el modelo de la PEC 3 se queda como está.
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

  // El sitio al que pertenece: de aquí sale la historia, los datos y las fotos.
  const sitio = buscarDestino(destino)

  // Otros viajes para el carril del final, sin repetir el que se está viendo.
  const otros = viajes.filter((item) => item._id !== id).slice(0, 6)

  async function eliminar() {
    const borrado = await eliminarViaje(id)
    if (borrado) navegar('/')
  }

  return (
    <>
      <Portada
        imagen={imagen || fotoDeDestino(destino, IMAGEN_POR_DEFECTO)}
        alt={sitio ? sitio.fotoAlt : nombre}
        etiqueta={categoria ? `${categoria} · ${destino}` : destino}
        titulo={nombre}
        cursiva
        dato={`${duracionDias} días · ${contarNoches(duracionDias)} noches · ocho plazas por salida`}
        alto="h-[86vh]"
      />

      <Seccion tono={TONOS.CREMA}>
        <div className="grid gap-16 md:grid-cols-[1.5fr_1fr] md:gap-24">
          <div>
            {/* El contorno del país, el mismo recurso que en el explorador. */}
            <div className="text-tinta/20">
              <Silueta destino={destino} tamano={130} />
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
                <p className="etiqueta mt-5 text-suave">Plazas</p>
                <p className="titular mt-3 text-2xl">Ocho</p>
              </div>
              <div>
                <div className="filete" />
                <p className="etiqueta mt-5 text-suave">Destino</p>
                <p className="titular mt-3 text-2xl">
                  {sitio ? (
                    <Link
                      to={`/destinos/${sitio.id}`}
                      className="transition hover:text-terracota-acento"
                    >
                      {sitio.nombre}
                    </Link>
                  ) : (
                    destino
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Columna de reserva: el precio grande y las acciones sobre la API. */}
          <aside className="h-fit border border-borde bg-crema-hueso p-10">
            <p className="etiqueta text-terracota-acento">Desde</p>
            <p className="titular cifras mt-4 text-5xl">{formatearPrecio(precio)} €</p>
            <p className="mt-2 text-sm text-suave">por persona</p>

            <div className="filete my-9" />

            <p className="etiqueta text-suave">
              {disponible ? 'Plazas abiertas' : 'Plazas agotadas'}
            </p>

            <div className="mt-8 flex flex-col gap-3">
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

      {/* La historia del sitio: solo aparece si la tenemos escrita. */}
      {sitio?.historia && (
        <Seccion
          tono={TONOS.HUESO}
          etiqueta={`Sobre ${sitio.nombre}`}
          titulo={sitio.titular}
        >
          <div className="grid gap-x-20 gap-y-8 md:grid-cols-2">
            {sitio.historia.map((parrafo) => (
              // La key es el principio del párrafo, que no se repite.
              <p key={parrafo.slice(0, 40)} className="leading-relaxed text-suave md:text-lg">
                {parrafo}
              </p>
            ))}
          </div>

          {sitio.datos && (
            <div className="mt-20">
              <DatosDestino datos={sitio.datos} />
            </div>
          )}
        </Seccion>
      )}

      {itinerario && (
        <Seccion
          tono={TONOS.CREMA}
          etiqueta="El itinerario"
          titulo="Día a día"
          texto="El itinerario base, día por día. Se ajusta a lo que os apetezca: es lo primero que hablamos."
        >
          <Itinerario texto={itinerario} />
        </Seccion>
      )}

      {sitio?.galeria && (
        <Seccion
          tono={TONOS.TERRACOTA}
          etiqueta="Lo que vas a ver"
          titulo={`${sitio.nombre} en ${enPalabras(sitio.galeria.length)} lugares`}
        >
          <Galeria fotos={sitio.galeria} />
        </Seccion>
      )}

      {otros.length > 0 && (
        <Seccion tono={TONOS.HUESO} etiqueta="Sigue mirando" titulo="Otros viajes del catálogo">
          {/* Carril horizontal con parada en cada ficha, como el carrusel
              de campamentos de Wilderness pero solo con CSS. */}
          <div className="carril -mx-6 flex scroll-pl-6 gap-10 overflow-x-auto px-6 pb-4 md:-mx-10 md:scroll-pl-10 md:px-10">
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

      <BandaOscura
        imagen={imagen || fotoDeDestino(destino, IMAGEN_POR_DEFECTO)}
        pregunta={sitio ? `¿Nos vamos a ${sitio.nombre}?` : '¿Nos vamos?'}
        etiqueta="Te llamamos"
        texto="Una conversación de media hora y os enviamos la propuesta completa: casas, guías y horarios con nombre propio."
        accion="Solicitar propuesta"
        enlace="/nuevo"
      />
    </>
  )
}
