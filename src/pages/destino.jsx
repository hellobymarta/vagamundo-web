import { Link, useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Silueta from '@/components/silueta'
import Pasos from '@/components/pasos'
import Galeria from '@/components/galeria'
import DatosDestino from '@/components/datos-destino'
import Preguntas from '@/components/preguntas'
import BandaOscura from '@/components/banda-oscura'
import ListaViajes from '@/components/lista-viajes'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'
import { DESTINOS, viajesDeDestino } from '@/config/destinos'
import { FOTOS, TONOS } from '@/config/constantes'
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

  const { nombre, continente, foto, fotoAlt, titular, entradilla, historia, datos, galeria } =
    destino
  const suyos = viajesDeDestino(viajes, pais)

  return (
    <>
      <Portada
        imagen={foto}
        alt={fotoAlt}
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
              <p className="etiqueta cifras text-suave">
                {suyos.length} {suyos.length === 1 ? 'viaje abierto' : 'viajes abiertos'}
              </p>
              <p className="etiqueta text-suave">Ocho plazas por salida</p>
              <p className="etiqueta text-suave">Guía privado de habla hispana</p>
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
        <Seccion tono={TONOS.CREMA} etiqueta="Lo que vas a ver" titulo={`${nombre} en ${enPalabras(galeria.length)} lugares`}>
          <Galeria fotos={galeria} />
        </Seccion>
      )}

      <Seccion
        tono={TONOS.HUESO}
        etiqueta="Nuestros viajes"
        titulo={suyos.length > 0 ? `Lo que tenemos en ${nombre}` : `Todavía no hay plazas en ${nombre}`}
      >
        {cargando ? (
          <Cargando />
        ) : suyos.length > 0 ? (
          <ListaViajes viajes={suyos} />
        ) : (
          <>
            <Aviso tono="info">
              Lo estamos recorriendo en este momento. No abrimos plazas hasta haber probado
              nosotras cada casa y cada guía.
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

      <Seccion
        tono={TONOS.TERRACOTA}
        etiqueta="Viajes a medida"
        titulo={`O lo diseñamos en privado, solo para vosotros`}
      >
        <Pasos />
      </Seccion>

      <Seccion
        tono={TONOS.AMARILLO}
        etiqueta="Todo lo que hay que saber"
        titulo="Las dudas de siempre"
        centrado
      >
        <Preguntas />
      </Seccion>

      <BandaOscura
        imagen={foto}
        pregunta={`¿Nos vamos a ${nombre}?`}
        etiqueta="Te llamamos"
        texto="Una conversación de media hora y os enviamos la propuesta completa: casas, guías y horarios con nombre propio."
        accion="Solicitar propuesta"
        enlace="/nuevo"
      />
    </>
  )
}
