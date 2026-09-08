import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Partido from '@/components/partido'
import Franja from '@/components/franja'
import ListaViajes from '@/components/lista-viajes'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { FOTOS, TONOS } from '@/config/constantes'

// Tres apuntes de la sección amarilla. Al ser una lista fija, la key
// es el propio título: nunca la posición del elemento.
const APUNTES = [
  {
    titulo: 'Grupos de ocho',
    texto:
      'Ni uno más. Cabemos todos en la misma mesa y en la misma barca, y eso cambia el viaje entero.',
  },
  {
    titulo: 'Casas, no hoteles',
    texto:
      'Dormimos en casas con nombre y con dueño. Algunas llevan tres generaciones recibiendo gente.',
  },
  {
    titulo: 'Huecos a propósito',
    texto:
      'Dejamos tardes sin plan. Son las que después se recuerdan, aunque no aparezcan en el folleto.',
  },
]

// Página principal: el catálogo que llega de MongoDB a través de la API.
export default function Viajes() {
  const { viajes, cargando, error, aviso, cargarViajes } = useViajes()

  return (
    <>
      <Portada
        imagen={FOTOS.PORTADA}
        alt="Positano al atardecer, con las casas encendidas sobre el mar"
        etiqueta="Temporada 2026 · Mediterráneo"
        titulo="Viajes que se recuerdan por lo que pasó, no por lo que se visitó."
        texto="Un atelier pequeño de rutas por la costa amalfitana. Diseñamos cada viaje entero, del primer café al último atardecer."
      >
        <Boton a="/nuevo" variante="claro">
          Añadir un viaje
        </Boton>
      </Portada>

      <Seccion tono={TONOS.ROSA} etiqueta="Quiénes somos">
        <Partido
          imagen={FOTOS.MANIFIESTO}
          alt="Paseo de Amalfi entre buganvillas"
          pie="Amalfi · el paseo de la mañana"
        >
          <h2 className="titular text-4xl md:text-5xl">
            No vendemos destinos. Vendemos el tiempo que se pasa en ellos.
          </h2>
          <p className="mt-7 text-lg font-light leading-relaxed text-suave">
            Llevamos años volviendo al mismo trozo de costa, y cada vez encontramos algo que no
            estaba en la guía. De ahí salen nuestras rutas: de conocer a la gente que vive allí y
            de haberse perdido lo suficiente.
          </p>
          <p className="mt-5 text-lg font-light leading-relaxed text-suave">
            Todo lo que ves en el catálogo lo hemos hecho antes nosotras, en la misma época del
            año y con la misma gente que te va a recibir.
          </p>
        </Partido>
      </Seccion>

      <section id="catalogo" className="bg-fondo px-8 py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="etiqueta text-oliva-acento">El catálogo</p>
              <h2 className="titular mt-5 max-w-2xl text-4xl md:text-5xl">
                Rutas abiertas ahora mismo
              </h2>
              <p className="mt-6 max-w-lg font-light text-suave">
                {cargando
                  ? 'Consultando la API…'
                  : `${viajes.length} ${viajes.length === 1 ? 'viaje' : 'viajes'} en el catálogo, con las plazas actualizadas.`}
              </p>
            </div>

            <Boton variante="contorno" onClick={cargarViajes} disabled={cargando}>
              Actualizar
            </Boton>
          </div>

          <div className="mt-10 space-y-3">
            <Aviso tono="error">{error}</Aviso>
            <Aviso tono="exito">{aviso}</Aviso>
          </div>

          <div className="mt-14">
            {cargando ? <Cargando /> : <ListaViajes viajes={viajes} />}
          </div>
        </div>
      </section>

      <Seccion tono={TONOS.TERRACOTA} etiqueta="Cómo viajamos">
        <Partido
          imagen={FOTOS.BARCA}
          alt="Barca de madera fondeada frente a Positano"
          pie="Positano · la barca de Salvatore"
          invertido
        >
          <h2 className="titular text-4xl md:text-5xl">
            El mar se ve mejor desde una barca de madera
          </h2>
          <p className="mt-7 text-lg font-light leading-relaxed text-suave">
            Nos movemos como se mueve la gente de allí: en barca cuando hay mar, andando cuando la
            carretera no merece la pena, y en el autobús de línea sin ninguna vergüenza.
          </p>
          <div className="mt-9 space-y-4">
            <div className="filete" />
            <p className="etiqueta text-suave">Ocho viajeros · un solo guía · sin autocares</p>
            <div className="filete" />
          </div>
        </Partido>
      </Seccion>

      <Franja
        imagen={FOTOS.NOCHE}
        alt="Positano de noche desde el agua"
        cita="Volvimos con la sensación de haber vivido allí una temporada, no de haber estado de paso."
        firma="Elena y Marc · Amalfi, mayo"
      />

      <Seccion tono={TONOS.AMARILLO} etiqueta="Antes de decidir">
        <div className="grid gap-12 md:grid-cols-3">
          {APUNTES.map(({ titulo, texto }) => (
            <div key={titulo}>
              <div className="filete" />
              <h3 className="titular mt-6 text-2xl">{titulo}</h3>
              <p className="mt-4 font-light leading-relaxed text-suave">{texto}</p>
            </div>
          ))}
        </div>
      </Seccion>

      <Seccion
        tono={TONOS.OLIVA}
        etiqueta="Tu propia ruta"
        titulo="¿Tienes un viaje en la cabeza que no está aquí?"
        texto="Añádelo al catálogo con sus fechas, su precio y su itinerario. Se guarda en la base de datos y aparece arriba al momento."
      >
        <Boton a="/nuevo" variante="principal">
          Añadir un viaje
        </Boton>
      </Seccion>
    </>
  )
}
