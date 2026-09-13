import { Link, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Silueta from '@/components/silueta'
import Pasos from '@/components/pasos'
import Galeria from '@/components/galeria'
import Salidas from '@/components/salidas'
import DatosDestino from '@/components/datos-destino'
import Preguntas from '@/components/preguntas'
import BandaOscura from '@/components/banda-oscura'
import ListaViajes from '@/components/lista-viajes'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { DESTINOS, estaAbierto, viajesDeDestino } from '@/config/destinos'
import { FOTOS, TONOS, PARAMETRO_PROPUESTA } from '@/config/constantes'
import { enPalabras } from '@/formato'

// La página de cada destino, al modo de las de NUBA: portada a sangre con el
// nombre del sitio, el contorno del país, una entradilla, los viajes que
// tenemos allí, cómo trabajamos, las dudas y la llamada a la acción.
export default function Destino() {
  const { pais } = useParams()
  const { viajes, cargando } = useViajes()

  const destino = DESTINOS.find((item) => item.id === pais)

  if (!destino) {
    return (
      <Portada
        imagen={FOTOS.NOCHE}
        alt="Positano de noche"
        etiqueta="Destinos"
        titulo="Todavía no vamos a ese sitio"
        texto="Puede que lo estemos preparando. Echa un ojo a los que ya están abiertos."
        alto="h-[80vh]"
      >
        <Boton a="/destinos" variante="claro">
          Ver los destinos
        </Boton>
      </Portada>
    )
  }

  const { nombre, continente, foto, fotoAlt, titular, entradilla, historia, datos, galeria, salidas } =
    destino

  const abierto = estaAbierto(destino)
  const suyos = viajesDeDestino(viajes, pais)

  return (
    <>
      <Portada
        imagen={foto}
        alt={fotoAlt}
        fondo={<Silueta destino={nombre} tamano={300} />}
        etiqueta={continente}
        titulo={nombre}
        texto={titular}
        cursiva
        alto="h-[86vh]"
      />

      <Seccion tono={TONOS.CREMA}>
        <div className="grid items-start gap-16 md:grid-cols-[auto_1fr] md:gap-24">
          {/* El mismo contorno del explorador, aquí en tinta sobre el crema. */}
          <div className="text-tinta/20">
            <Silueta destino={nombre} tamano={170} />
          </div>

          <div>
            <p className="etiqueta text-terracota-acento">Por qué {nombre}</p>
            <p className="titular mt-6 text-2xl leading-snug md:text-3xl">{entradilla}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              {abierto ? (
                <p className="etiqueta cifras text-suave">
                  {salidas ? `Próxima salida · ${salidas.fechas[0].dia}` : 'Salidas a consultar'}
                </p>
              ) : (
                <p className="etiqueta text-terracota-acento">Próximamente · 2027</p>
              )}
              <p className="etiqueta text-suave">De cinco a ocho plazas por salida</p>
              <p className="etiqueta text-suave">Guía de allí en cada salida</p>
            </div>
          </div>
        </div>
      </Seccion>

      {historia && (
        <Seccion tono={TONOS.HUESO} etiqueta="El destino" titulo="Por qué merece el viaje">
          <div className="grid gap-x-20 gap-y-8 md:grid-cols-2">
            {historia.map((parrafo) => (
              <p key={parrafo.slice(0, 40)} className="leading-relaxed text-suave md:text-lg">
                {parrafo}
              </p>
            ))}
          </div>

          {datos && (
            <div className="mt-20">
              <DatosDestino datos={datos} />
            </div>
          )}
        </Seccion>
      )}

      {galeria && (
        <Seccion
          tono={TONOS.CREMA}
          etiqueta="Lo que vas a ver"
          titulo={`${nombre} en ${enPalabras(galeria.length)} lugares`}
          sangre={<Galeria fotos={galeria} />}
        />
      )}

      {abierto && salidas && (
        <Seccion
          tono={TONOS.ROSA}
          etiqueta="Salidas"
          titulo={`Cuándo se va a ${nombre}`}
        >
          <Salidas nombre={nombre} salidas={salidas} />
        </Seccion>
      )}

      <Seccion
        tono={TONOS.HUESO}
        etiqueta="Nuestros viajes"
        titulo={
          suyos.length > 0
            ? `Lo que tenemos en ${nombre}`
            : abierto
              ? `El itinerario de ${nombre}, a un correo`
              : `Todavía no abrimos ${nombre}`
        }
      >
        {cargando ? (
          <Cargando />
        ) : suyos.length > 0 ? (
          <ListaViajes viajes={suyos} />
        ) : (
          <>
            <Aviso tono="info">
              {abierto
                ? 'Las fechas están aquí arriba; el programa día a día todavía no está publicado en el catálogo. Escribidnos y os lo mandamos entero, con las casas y los horarios.'
                : 'Lo estamos recorriendo en este momento. No abrimos plazas hasta haber probado nosotras cada casa y cada guía.'}
            </Aviso>
            <p className="etiqueta mt-10">
              <Link
                to="/destinos"
                className="border-b border-tinta/25 pb-1 transition hover:border-tinta"
              >
                Ver los destinos abiertos
              </Link>
            </p>
          </>
        )}
      </Seccion>

      {abierto && (
        <Seccion
          tono={TONOS.TERRACOTA}
          etiqueta="Viajes a medida"
          titulo="O lo diseñamos en privado, solo para vosotros"
        >
          <Pasos />
        </Seccion>
      )}

      <Seccion
        tono={TONOS.AMARILLO}
        etiqueta="Todo lo que hay que saber"
        titulo="Las dudas de siempre"
        centrado
      >
        <Preguntas />
      </Seccion>

      {/* La llamada final cambia con el estado: a un destino que todavía no
          hemos abierto no se le puede pedir una propuesta. */}
      {abierto ? (
        <BandaOscura
          imagen={foto}
          pregunta={`¿Nos vamos a ${nombre}?`}
          etiqueta="Te llamamos"
          texto="Una conversación de media hora y os enviamos la propuesta completa: casas, guías y horarios con nombre propio."
          accion="Solicitar propuesta"
          enlace={`/nuevo?${PARAMETRO_PROPUESTA}=${encodeURIComponent(nombre)}`}
        />
      ) : (
        <BandaOscura
          imagen={foto}
          pregunta={`${nombre} abre en 2027`}
          etiqueta="Te avisamos"
          texto="Déjanos el correo y te escribimos en cuanto cerremos las fechas. No mandamos nada más."
          accion="Avisadme"
          enlace="/#boletin"
        />
      )}
    </>
  )
}
