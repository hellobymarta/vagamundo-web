import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import Portada from '@/components/portada'
import Seccion from '@/components/seccion'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import Paginacion from '@/components/paginacion'
import { api } from '@/services/api'
import { useSesion } from '@/hooks/use-sesion'
import { formatearFecha } from '@/formato'
import { FOTOS, MENSAJES, TONOS } from '@/config/constantes'
import { mensajeDeError } from '@/errores'
import type { PaginaDeCronicas } from '@/tipos'
import { useCabeceraDocumento } from '@/hooks/use-cabecera-documento'
import { RUTAS } from '@/config/rutas'

// El diario de viajes: las crónicas que escribe el equipo al volver. Se leen
// sin cuenta; para escribir o comentar hay que entrar.
export default function Diario() {
  const { haEntrado } = useSesion()
  useCabeceraDocumento({
    titulo: 'Diario',
    descripcion:
      'Lo que contamos al volver: crónicas de los viajes escritas por quien estuvo allí, con sus fotografías y sus comentarios.',
  })

  const [parametros, setParametros] = useSearchParams()
  const pagina = Math.max(1, Number(parametros.get('pagina')) || 1)

  // Lo que devuelve la API, el error y el contador de reintentos son lo
  // mismo: el estado de esta petición. Un solo useState.
  const [estado, setEstado] = useState<{
    datos: PaginaDeCronicas | null
    error: string
    intento: number
  }>({ datos: null, error: '', intento: 0 })

  const { datos, error, intento } = estado

  const cambiar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  // «Cargando» no necesita un estado propio: lo sé comparando la página que
  // pide la dirección con la que tengo pintada.
  const cargando = !error && (!datos || datos.pagina !== pagina)

  // La página viaja en la dirección, no en el estado del componente: así se
  // puede compartir el enlace de la página 2 y el botón de atrás funciona.
  useEffect(() => {
    let vigente = true

    api
      .listarCronicas(pagina)
      .then((llegan) => {
        if (!vigente) return
        cambiar({ datos: llegan, error: '' })
      })
      .catch((fallo) => {
        if (vigente) cambiar({ error: mensajeDeError(fallo) })
      })

    // Si cambio de página antes de que conteste la anterior, descarto su
    // respuesta en vez de pintarla encima de la nueva.
    return () => {
      vigente = false
    }
  }, [pagina, intento])

  function irA(numero: number) {
    setParametros(numero === 1 ? {} : { pagina: String(numero) })
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <Portada
        imagen={FOTOS.ISLANDIA}
        alt="Una carretera vacía en Islandia"
        etiqueta="Diario"
        titulo="Lo que contamos al volver"
        texto="Crónicas escritas por quien estuvo allí: lo que salió bien, lo que no, y lo que haríamos distinto."
        alto="h-[70vh]"
      >
        {haEntrado && (
          <Boton a={RUTAS.nuevaCronica} variante="claro">
            Escribir una crónica
          </Boton>
        )}
      </Portada>

      <Seccion tono={TONOS.CREMA}>
        {cargando && <Cargando texto="Abriendo el diario…" />}

        {error && !cargando && (
          <div className="space-y-8">
            <Aviso tono="error">{error}</Aviso>
            <Boton variante="contorno" compacto onClick={() => setEstado((previo) => ({ ...previo, intento: previo.intento + 1 }))}>
              Reintentar
            </Boton>
          </div>
        )}

        {datos && !cargando && !error && datos.posts.length === 0 && (
          <Aviso>{MENSAJES.SIN_CRONICAS}</Aviso>
        )}

        {datos && !cargando && !error && datos.posts.length > 0 && (
          <>
            <ul className="grid gap-16 md:grid-cols-2">
              {datos.posts.map((cronica) => (
                <li key={cronica.id}>
                  <article className="flex h-full flex-col">
                    <Link to={RUTAS.cronica(cronica.id)} className="block overflow-hidden">
                      <img
                        src={cronica.imagen}
                        alt={cronica.titulo}
                        loading="lazy"
                        className="h-72 w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
                      />
                    </Link>

                    <p className="u-etiqueta mt-8 text-terracota-acento">{cronica.destino}</p>

                    <h2 className="u-titular mt-4 text-2xl">
                      <Link to={RUTAS.cronica(cronica.id)} className="transition hover:text-terracota-acento">
                        {cronica.titulo}
                      </Link>
                    </h2>

                    <p className="u-etiqueta mt-4 text-suave">
                      {cronica.autor?.nombre || 'El equipo'} · {formatearFecha(cronica.createdAt)} ·{' '}
                      {(cronica.comentarios?.length || 0) === 1
                        ? '1 comentario'
                        : `${(cronica.comentarios?.length || 0)} comentarios`}
                    </p>

                    <p className="mt-6 line-clamp-3 leading-relaxed text-suave">
                      {cronica.contenido}
                    </p>

                    <Link
                      to={RUTAS.cronica(cronica.id)}
                      className="u-etiqueta u-zonaTactil mt-8 self-start border-b border-tinta/30 pb-1 transition hover:border-tinta"
                    >
                      Seguir leyendo
                    </Link>
                  </article>
                </li>
              ))}
            </ul>

            <div className="mt-20">
              <Paginacion pagina={datos.pagina} paginas={datos.paginas} onCambiar={irA} />
            </div>
          </>
        )}
      </Seccion>
    </>
  )
}
