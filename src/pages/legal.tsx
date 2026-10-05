import { useParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { PAGINAS_LEGALES } from '@/config/legal'
import { FOTOS, TONOS } from '@/config/constantes'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

// Las tres páginas de información legal comparten pantalla: lo único que
// cambia entre ellas es el título y los apartados, así que una sola ruta con
// el documento en la dirección evita repetir tres componentes iguales.
//
// El texto vive en config/legal.ts. Aquí solo se recorre y se pinta.
export default function Legal() {
  const { documento } = useParams()
  const pagina = PAGINAS_LEGALES.find((una) => una.id === documento)

  useCabeceraDocumento({
    titulo: pagina ? pagina.texto : 'Información legal',
    descripcion:
      pagina?.entradilla || 'Aviso legal, política de privacidad y condiciones generales.',
  })

  if (!pagina) {
    return (
      <Portada
        imagen={FOTOS.NOCHE}
        alt="Positano de noche"
        etiqueta="Información"
        titulo="Ese documento no existe"
        texto="Los tres que hay están enlazados en el pie de la página."
        alto="h-[72vh]"
      >
        <Boton a={RUTAS.inicio} variante="claro">
          Ir al catálogo
        </Boton>
      </Portada>
    )
  }

  return (
    <>
      <Portada
        imagen={FOTOS.NOCHE}
        alt="Positano de noche"
        etiqueta="Información"
        titulo={pagina.titulo}
        texto={pagina.entradilla}
        alto="h-[58vh]"
      />

      <Seccion tono={TONOS.CREMA} ancho="max-w-2xl">
        <Aviso tono="info">{pagina.aviso}</Aviso>

        <div className="mt-16 space-y-14">
          {pagina.apartados.map(({ id, titulo, parrafos, lista }) => (
            <section key={id}>
              <h2 className="u-titular border-t border-borde pt-8 text-2xl leading-snug">
                {titulo}
              </h2>

              <div className="mt-6 space-y-5">
                {parrafos.map((parrafo) => (
                  // La clave es el principio del párrafo, que no se repite.
                  <p key={parrafo.slice(0, 32)} className="leading-relaxed text-suave">
                    {parrafo}
                  </p>
                ))}
              </div>

              {lista && (
                <ul className="mt-6 space-y-3">
                  {lista.map((punto) => (
                    <li
                      key={punto.slice(0, 32)}
                      className="border-l-2 border-borde pl-5 leading-relaxed text-suave"
                    >
                      {punto}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap gap-6 border-t border-borde pt-12">
          {PAGINAS_LEGALES.filter(({ id }) => id !== pagina.id).map(({ id, texto }) => (
            <Boton key={id} a={RUTAS.legal(id)} variante="contorno" compacto>
              {texto}
            </Boton>
          ))}
        </div>
      </Seccion>
    </>
  )
}
