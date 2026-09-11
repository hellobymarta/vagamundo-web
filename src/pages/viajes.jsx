import { useSearchParams } from 'react-router-dom'

import PortadaRotativa from '@/components/portada-rotativa'
import Marca from '@/components/marca'
import Destacados from '@/components/destacados'
import Explorador from '@/components/explorador'
import Maneras from '@/components/maneras'
import Medida from '@/components/medida'
import Marquesina from '@/components/marquesina'
import TodosDestinos from '@/components/todos-destinos'
import BandaOscura from '@/components/banda-oscura'
import Boletin from '@/components/boletin'
import Seccion from '@/components/seccion'
import Motivaciones from '@/components/motivaciones'
import Testimonios from '@/components/testimonios'
import Preguntas from '@/components/preguntas'
import ListaViajes from '@/components/lista-viajes'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { useAncla } from '@/hooks/use-ancla'
import { enPalabras } from '@/formato'
import { MOTIVACIONES, viajesDeMotivacion } from '@/config/motivaciones'
import {
  CUANTOS_DESTACADOS,
  FOTOS,
  MENSAJES,
  PARAMETRO_MOTIVACION,
  TONOS,
} from '@/config/constantes'

// Página principal. El esqueleto es el de NUBA (portada rotativa, bloque de
// marca, plazas que se acaban, experiencias, boletín y pie a columnas) y
// dentro van las dos piezas de Utópica: el explorador con la silueta del
// país y la marquesina de nombres.
export default function Viajes() {
  const { viajes, cargando, error, aviso, cargarViajes } = useViajes()

  // Al llegar con un ancla en la dirección («/#catalogo», o el filtro de una
  // motivación) la página baja sola hasta el catálogo.
  useAncla()

  // El filtro se guarda en la URL, no en el estado: así se puede compartir
  // el enlace y el botón de atrás funciona solo.
  const [parametros] = useSearchParams()
  const motivacion = parametros.get(PARAMETRO_MOTIVACION)

  const elegida = MOTIVACIONES.find(({ id }) => id === motivacion)
  const visibles = viajesDeMotivacion(viajes, motivacion)

  const destacados = viajes.slice(0, CUANTOS_DESTACADOS)
  const paraExplorar = viajes.slice(0, 6)

  return (
    <>
      <PortadaRotativa />

      <Marca cuantos={viajes.length} />

      {!cargando && destacados.length > 0 && (
        <Seccion
          tono={TONOS.HUESO}
          etiqueta="Plazas que se acaban"
          titulo="Reserva tu plaza antes de que se agote"
          texto="Son los cuatro que cerramos primero cada temporada. Las salidas llevan de cinco a ocho personas, así que cuando quedan dos plazas quedan dos de verdad."
          centrado
        >
          <Destacados viajes={destacados} />
        </Seccion>
      )}

      {!cargando && <Explorador viajes={paraExplorar} />}

      <Seccion
        tono={TONOS.CREMA}
        etiqueta="Viajes Vagamundo"
        titulo="Un día cualquiera, en tres viajes distintos"
        texto="La manera de viajar no se explica con adjetivos, así que aquí van tres jornadas reales de tres rutas que no se parecen en nada."
      >
        <Maneras />
      </Seccion>

      <Seccion
        tono={TONOS.HUESO}
        etiqueta="Imagina tu viaje"
        titulo="¿Qué te apetece esta vez?"
        texto="Tres maneras de mirar el catálogo. Elige una y abajo se queda solo lo que encaja."
        centrado
      >
        <Motivaciones activa={motivacion} viajes={viajes} />
      </Seccion>

      <section id="catalogo" className="scroll-mt-24 bg-crema px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="etiqueta text-terracota-acento">El catálogo</p>

              <h2 className="titular t-seccion mt-6">
                {elegida
                  ? elegida.tituloCatalogo
                  : `Los ${enPalabras(viajes.length)} viajes, uno por uno`}
              </h2>

              <p className="mt-6 max-w-lg text-suave">
                {cargando
                  ? 'Consultando la API…'
                  : `${visibles.length} ${visibles.length === 1 ? 'viaje' : 'viajes'} con las plazas actualizadas.`}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {elegida && (
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

      <Medida />

      {/* La marquesina hace de respiro entre la banda de color de los viajes
          a medida y las opiniones, que vuelven al fondo claro. */}
      <Marquesina />

      <Seccion
        tono={TONOS.HUESO}
        etiqueta="Lo que cuentan"
        titulo="Cuatro que han vuelto"
        texto="Dos a la vista; para ver las demás, arrastra hacia la derecha."
        centrado
        aireArriba
      >
        <Testimonios />
      </Seccion>

      <Seccion
        tono={TONOS.CREMA}
        etiqueta="Todos los destinos"
        titulo="Donde estamos y donde queremos estar"
        texto="En negro, los que tienen plazas abiertas ahora mismo. En gris, los que estamos preparando para 2027: no aparecen hasta que los hemos hecho enteros nosotras."
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
        texto="Lo que nos preguntáis por teléfono antes de decidiros, contestado igual que lo contestamos allí."
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
