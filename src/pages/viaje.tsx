import { Link, useNavigate, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Silueta from '@/components/silueta'
import Itinerario from '@/components/itinerario'
import BandaOscura from '@/components/banda-oscura'
import TarjetaViaje from '@/components/tarjeta-viaje'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import ReservarPlazas from '@/components/reservar-plazas'
import { useViajes } from '@/hooks/use-viajes'
import { useAncla } from '@/hooks/use-ancla'
import { useSesion } from '@/hooks/use-sesion'
import { buscarDestino, fotoDeDestino, textoDeFoto } from '@/config/destinos'
import { CORREO, FOTOS, IMAGEN_POR_DEFECTO, PLAZAS_MAXIMAS, TONOS } from '@/config/constantes'
import { contarNoches, enPalabras, formatearPrecio } from '@/formato'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { ANCLAS, RUTAS } from '@/config/rutas'

// Ficha de un viaje. Lo buscamos en el catálogo que ya tenemos en el contexto,
// así no repetimos una llamada que la app ya ha hecho.
//
// Lo que viene de la API: nombre, destino, descripción, precio, duración e
// itinerario. Lo que viene de config/destinos.js: la historia del sitio, sus
// datos y su galería de fotos. Así el modelo de la PEC 3 se queda como está.
export default function Viaje() {
  const { id } = useParams()
  const { viajes, cargando, guardando, error, eliminarViaje } = useViajes()
  const { haEntrado } = useSesion()
  const navegar = useNavigate()

  const viaje = viajes.find((item) => item.id === id)

  // Se llega aquí desde las fechas de salida de la página del país, con
  // «#reservar» en la dirección. La página baja sola hasta el bloque de
  // reserva, pero no antes de que el viaje esté cargado.
  useAncla(Boolean(viaje))

  useCabeceraDocumento({
    titulo: viaje ? viaje.nombre : 'Viaje',
    descripcion:
      viaje?.descripcion ||
      'Un viaje del catálogo de Vagamundo, con su itinerario día a día y sus plazas.',
    imagen: viaje?.imagen || undefined,
  })


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
        <Boton a={RUTAS.inicio} variante="claro">
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

  // Las plazas de la salida. Los viajes antiguos no guardan el campo, así que
  // si no viene se usa el máximo con el que trabajamos, que es el mismo que
  // aplica la API por defecto.
  const plazas = viaje.plazas || PLAZAS_MAXIMAS

  // El sitio al que pertenece: de aquí sale la historia, los datos y las fotos.
  const sitio = buscarDestino(destino)

  // La fotografía de la portada y su texto alternativo, que tiene que describir
  // esta foto y no la del país: se usan los dos juntos, arriba y en la banda
  // del final.
  const portada = imagen || fotoDeDestino(destino, IMAGEN_POR_DEFECTO)
  const textoDeLaPortada = textoDeFoto(sitio, portada) || nombre

  // Otros viajes para el carril del final, sin repetir el que se está viendo.
  const otros = viajes.filter((item) => item.id !== id).slice(0, 6)

  async function eliminar() {
    if (!id) return

    const borrado = await eliminarViaje(id)
    if (borrado) navegar(RUTAS.inicio)
  }

  return (
    <>
      <Portada
        imagen={portada}
        alt={textoDeLaPortada}
        etiqueta={categoria ? `${categoria} · ${destino}` : destino}
        titulo={nombre}
        cursiva
        dato={`${duracionDias} días · ${contarNoches(duracionDias)} noches · ${enPalabras(plazas)} plazas por salida`}
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
              <p className="u-titular mt-10 text-2xl leading-snug md:text-3xl">{descripcion}</p>
            )}

            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              <div>
                <div className="Filete" />
                <p className="u-etiqueta mt-5 text-suave">Duración</p>
                <p className="u-titular u-cifras mt-3 text-2xl">{duracionDias} días</p>
              </div>
              <div>
                <div className="Filete" />
                <p className="u-etiqueta mt-5 text-suave">Plazas</p>
                <p className="u-titular u-cifras mt-3 text-2xl">{enPalabras(plazas)}</p>
              </div>
              <div>
                <div className="Filete" />
                <p className="u-etiqueta mt-5 text-suave">Destino</p>
                <p className="u-titular mt-3 text-2xl">
                  {sitio ? (
                    <Link
                      to={RUTAS.destino(sitio.id)}
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
          {/* Las fechas de salida de la página del país enlazan a este bloque,
              que es donde se reserva de verdad. */}
          <aside id={ANCLAS.reserva} className="h-fit border border-borde bg-crema-hueso p-10">
            <p className="u-etiqueta text-terracota-acento">Desde</p>
            <p className="u-titular u-cifras mt-4 text-5xl">{formatearPrecio(precio)} €</p>
            <p className="mt-2 text-sm text-suave">por persona</p>

            <div className="Filete my-9" />

            {disponible ? (
              <ReservarPlazas viaje={viaje} />
            ) : (
              <p className="u-etiqueta text-suave">Plazas agotadas</p>
            )}

            <div className="Filete my-9" />

            {/* Editar y borrar solo se enseñan con la sesión abierta. La API
                lo vuelve a comprobar, pero no tiene sentido ofrecer un botón
                que va a devolver un 401. */}
            <div className="mt-8 flex flex-col gap-3">
              {haEntrado && (
                <>
                  <Boton a={RUTAS.editar(viaje.id)} variante="principal">
                    Editar viaje
                  </Boton>
                  <Boton variante="peligro" onClick={eliminar} disabled={guardando}>
                    {guardando ? 'Eliminando…' : 'Eliminar del catálogo'}
                  </Boton>
                </>
              )}
              <Boton a={RUTAS.inicio} variante="contorno">
                Volver al catálogo
              </Boton>
            </div>

            <div className="mt-7">
              <Aviso tono="error">{error}</Aviso>
            </div>
          </aside>
        </div>
      </Seccion>

      {/* La historia, los datos y la galería del sitio viven en la página del
          destino y no se repiten aquí: esta página es el viaje (precio,
          itinerario y reserva) y aquella es el país. Desde aquí se va allí. */}
      {sitio && (
        <Seccion
          tono={TONOS.HUESO}
          etiqueta={`Sobre ${sitio.nombre}`}
          titulo={sitio.titular}
          texto={sitio.entradilla}
        >
          <p className="u-etiqueta">
            <Link
              to={RUTAS.destino(sitio.id)}
              className="border-b border-tinta/25 pb-1 transition hover:border-tinta"
            >
              Ver la página de {sitio.nombre}
            </Link>
          </p>
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

      {otros.length > 0 && (
        <Seccion tono={TONOS.HUESO} etiqueta="Sigue mirando" titulo="Otros viajes del catálogo">
          {/* Carril horizontal con parada en cada ficha, como el carrusel
              de campamentos de Wilderness pero solo con CSS. */}
          <div className="Carril -mx-6 flex scroll-pl-6 gap-10 overflow-x-auto px-6 pb-4 md:-mx-10 md:scroll-pl-10 md:px-10">
            {otros.map(({ id, ...resto }) => (
              <div key={id} className="w-[300px] shrink-0 md:w-[380px]">
                <TarjetaViaje id={id} {...resto} />
              </div>
            ))}
          </div>

          <p className="u-etiqueta mt-12">
            <Link
              to={RUTAS.catalogo}
              className="border-b border-tinta/25 pb-1 transition hover:border-tinta"
            >
              Ver el catálogo completo
            </Link>
          </p>
        </Seccion>
      )}

      <BandaOscura
        imagen={portada}
        pregunta={sitio ? `¿Nos vamos a ${sitio.nombre}?` : '¿Nos vamos?'}
        etiqueta="Te contestamos"
        texto="¿Lo queréis con otras fechas o solo para vuestro grupo? Escribidnos y os preparamos la propuesta completa: casas, guías y horarios con nombre propio."
        accion="Escríbenos"
        enlace={`mailto:${CORREO}?subject=${encodeURIComponent(nombre)}`}
      />
    </>
  )
}
