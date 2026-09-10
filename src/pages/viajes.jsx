import { useSearchParams } from 'react-router-dom'

import PortadaRotativa from '@/components/portada-rotativa'
import Marca from '@/components/marca'
import Destacados from '@/components/destacados'
import Explorador from '@/components/explorador'
import Marquesina from '@/components/marquesina'
import TodosDestinos from '@/components/todos-destinos'
import BandaOscura from '@/components/banda-oscura'
import Boletin from '@/components/boletin'
import Seccion from '@/components/seccion'
import Partido from '@/components/partido'
import Motivaciones from '@/components/motivaciones'
import Pasos from '@/components/pasos'
import Testimonios from '@/components/testimonios'
import Preguntas from '@/components/preguntas'
import ListaViajes from '@/components/lista-viajes'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { enPalabras } from '@/formato'
import {
  CUANTOS_DESTACADOS,
  FOTOS,
  MENSAJES,
  PARAMETRO_MOTIVACION,
  TONOS,
} from '@/config/constantes'

// Página principal. El esqueleto es el de NUBA (portada rotativa, bloque de
// marca, destinos destacados, experiencias, boletín y pie a columnas) y
// dentro van las dos piezas de Utópica: el explorador con la silueta del
// país y la marquesina de nombres.
export default function Viajes() {
  const { viajes, cargando, error, aviso, cargarViajes } = useViajes()

  // El filtro por motivación se guarda en la URL, no en el estado:
  // así se puede compartir el enlace y funciona el botón de atrás.
  const [parametros] = useSearchParams()
  const motivacion = parametros.get(PARAMETRO_MOTIVACION)

  const visibles = motivacion
    ? viajes.filter(({ categoria }) => categoria === motivacion)
    : viajes

  const destacados = viajes.slice(0, CUANTOS_DESTACADOS)
  const paraExplorar = viajes.slice(0, 6)

  return (
    <>
      <PortadaRotativa />

      <Marca cuantos={viajes.length} />

      {!cargando && destacados.length > 0 && (
        <Seccion
          tono={TONOS.HUESO}
          etiqueta="Destinos Vagamundo"
          titulo="Tres que se cierran antes que los demás"
          centrado
        >
          <Destacados viajes={destacados} />
        </Seccion>
      )}

      {!cargando && <Explorador viajes={paraExplorar} />}

      <Seccion tono={TONOS.CREMA} etiqueta="Viajes Vagamundo">
        <Partido
          imagen={FOTOS.BARCA}
          alt="Barca de madera fondeada frente a Positano"
          rotulo="Positano"
          pie="La barca de Salvatore sale a las siete, antes de que se levante el viento."
          invertido
        >
          <h2 className="titular t-seccion">
            El mar se ve mejor desde una <em className="titular-cursiva">barca de madera</em>
          </h2>
          <p className="mt-8 leading-relaxed text-suave md:text-lg">
            Nos movemos como se mueve la gente de allí: en barca cuando hay mar, andando cuando la
            carretera no merece la pena, y en el autobús de línea sin ninguna vergüenza.
          </p>
          <div className="mt-10">
            <div className="filete" />
            <p className="etiqueta mt-5 text-suave">
              Ocho viajeros · un solo guía · sin autocares
            </p>
          </div>
          <div className="mt-10">
            <Boton a="/#catalogo" variante="contorno">
              Ver el catálogo
            </Boton>
          </div>
        </Partido>
      </Seccion>

      <Seccion
        tono={TONOS.HUESO}
        etiqueta="Imagina tu viaje"
        titulo="¿Qué te apetece esta vez?"
        texto="Las maneras de mirar el catálogo. Elige una y abajo se queda solo lo que encaja."
        centrado
      >
        <Motivaciones activa={motivacion} viajes={viajes} />
      </Seccion>

      <Marquesina />

      <section id="catalogo" className="scroll-mt-24 bg-crema px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="etiqueta text-terracota-acento">El catálogo</p>
              <h2 className="titular t-seccion mt-6">
                {motivacion
                  ? `Viajes de ${motivacion.toLowerCase()}`
                  : `Los ${enPalabras(viajes.length)} viajes, uno por uno`}
              </h2>
              <p className="mt-6 max-w-lg text-suave">
                {cargando
                  ? 'Consultando la API…'
                  : `${visibles.length} ${visibles.length === 1 ? 'viaje' : 'viajes'} con las plazas actualizadas.`}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {motivacion && (
                <Boton a="/#catalogo" variante="contorno" compacto>
                  Ver todos
                </Boton>
              )}
              <Boton variante="contorno" compacto onClick={cargarViajes} disabled={cargando}>
                Actualizar
              </Boton>
            </div>
          </div>

          <div className="mt-10 space-y-3">
            <Aviso tono="error">{error}</Aviso>
            <Aviso tono="exito">{aviso}</Aviso>
          </div>

          <div className="mt-16">
            {cargando ? (
              <Cargando />
            ) : visibles.length === 0 && viajes.length > 0 ? (
              <Aviso tono="info">{MENSAJES.SIN_RESULTADOS}</Aviso>
            ) : (
              <ListaViajes viajes={visibles} />
            )}
          </div>
        </div>
      </section>

      <Seccion
        tono={TONOS.TERRACOTA}
        etiqueta="Viajes a medida"
        titulo="Y si lo preferís solo para vosotros, en tres pasos"
      >
        <Pasos />
      </Seccion>

      <Seccion tono={TONOS.HUESO} etiqueta="Lo que cuentan">
        <Testimonios />
      </Seccion>

      <Seccion
        tono={TONOS.CREMA}
        etiqueta="Todos los destinos"
        titulo="Donde estamos y donde queremos estar"
        texto="En negro, los nueve que están abiertos ahora mismo. En gris, los que estamos preparando para 2027."
      >
        <TodosDestinos viajes={viajes} />

        <p className="etiqueta mt-16">
          <Boton a="/destinos" variante="contorno">
            Ver todos los destinos
          </Boton>
        </p>
      </Seccion>

      <Seccion
        tono={TONOS.AMARILLO}
        etiqueta="Todo lo que hay que saber"
        titulo="Las dudas de siempre"
        centrado
      >
        <Preguntas />
      </Seccion>

      <Boletin />

      <BandaOscura
        imagen={FOTOS.SALAR}
        pregunta="¿Cuál es tu viaje soñado?"
        etiqueta="Cuéntanoslo"
        texto="Cuéntanoslo con sus fechas, su precio y su itinerario. Se guarda en la base de datos y aparece en el catálogo al momento."
        accion="Añadir un viaje"
        enlace="/nuevo"
      />
    </>
  )
}
