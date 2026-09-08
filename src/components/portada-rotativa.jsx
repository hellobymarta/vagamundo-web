import Boton from '@/components/boton'
import { useCarrusel } from '@/hooks/use-carrusel'
import { PORTADAS } from '@/config/constantes'

// La portada de NUBA no es una foto fija: son varias campañas que van
// rotando, con el texto centrado, un botón rectangular de contorno fino
// y la paginación en puntitos abajo.
export default function PortadaRotativa() {
  const { indice, ir } = useCarrusel(PORTADAS.length)
  const actual = PORTADAS[indice]
  const { etiqueta, titulo, texto, enlace, accion } = actual

  return (
    <section className="relative h-[88vh] min-h-[540px] overflow-hidden">
      {PORTADAS.map(({ id, imagen, alt }) => (
        <img
          key={id}
          src={imagen}
          alt={alt}
          aria-hidden={id !== actual.id}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
            id === actual.id ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-tinta/32" />
      <div className="absolute inset-0 bg-gradient-to-t from-tinta/80 via-tinta/35 to-tinta/25" />

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

        {/* Paginación en puntos, como la de NUBA. */}
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
