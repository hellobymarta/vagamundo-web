import Boton from '@/components/boton'
import { useCarrusel } from '@/hooks/use-carrusel'
import { PORTADAS, SEGUNDOS_PORTADA } from '@/config/constantes'

// Dos intensidades de velo. Las fotografías claras necesitan el fuerte para
// que se lea el titular; una nocturna con el velo fuerte se queda en negro,
// así que la campaña puede pedir el suave con velo: 'suave'.
const VELO_FUERTE = 'bg-gradient-to-t from-tinta/80 via-tinta/35 to-tinta/25'
const VELO_SUAVE = 'bg-gradient-to-t from-tinta/65 via-tinta/15 to-transparent'

// La portada de NUBA: ocupa la pantalla entera, va pasando sola de una
// campaña a otra y lleva la paginación en puntitos abajo. El texto va
// centrado, con el epígrafe en serif y un botón rectangular de contorno fino.
export default function PortadaRotativa() {
  const { indice, ir } = useCarrusel(PORTADAS.length, SEGUNDOS_PORTADA * 1000)
  const actual = PORTADAS[indice]
  const { etiqueta, titulo, texto, enlace, accion } = actual

  return (
    // h-dvh es la altura real de la ventana, también en el móvil, donde
    // la barra del navegador se come parte del 100vh.
    <section className="relative h-dvh min-h-[600px] overflow-hidden">
      {PORTADAS.map(({ id, imagen, alt }) => (
        <img
          key={id}
          src={imagen}
          alt={alt}
          aria-hidden={id !== actual.id}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${
            id === actual.id ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className={`absolute inset-0 ${actual.velo === 'suave' ? 'bg-tinta/10' : 'bg-tinta/32'}`} />
      <div
        className={`absolute inset-0 ${actual.velo === 'suave' ? VELO_SUAVE : VELO_FUERTE}`}
      />

      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col items-center justify-end px-6 pb-24 text-center text-white md:px-10">
        {/* NUBA pone el epígrafe en serif, no en mayúsculas. */}
        <p className="titular text-lg text-white/90 md:text-xl">{etiqueta}</p>

        <h1 className="titular t-portada mt-4 max-w-4xl">{titulo}</h1>

        <p className="mt-6 max-w-lg leading-relaxed text-white/75">{texto}</p>

        <div className="mt-10">
          <Boton a={enlace} variante="claro" forma="recto">
            {accion}
          </Boton>
        </div>

        <div className="mt-16 flex items-center gap-3">
          {PORTADAS.map(({ id, etiqueta: nombre }) => (
            <button
              key={id}
              onClick={() => ir(PORTADAS.findIndex((item) => item.id === id))}
              aria-label={`Ver ${nombre}`}
              aria-current={id === actual.id}
              className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-all duration-500 ${
                id === actual.id ? 'scale-[1.6] bg-white' : 'bg-white/45 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
