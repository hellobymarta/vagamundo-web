import type { ReactNode } from 'react'

import type { Tono } from '@/config/constantes'

// Envoltorio de sección: aplica el color del tono que le toque y coloca
// la etiqueta, el título y el texto siempre con el mismo ritmo.
// Con `centrado` se alinea todo al medio, como hace NUBA en sus bloques.
interface PropsDeSeccion {
  tono: Tono
  etiqueta?: string
  titulo?: ReactNode
  texto?: ReactNode
  id?: string
  centrado?: boolean
  aireArriba?: boolean
  ancho?: string
  sangre?: ReactNode
  children?: ReactNode
}

export default function Seccion({
  tono,
  etiqueta,
  titulo,
  texto,
  id,
  centrado = false,
  // Aire de más por arriba, para las secciones que vienen justo detrás de
  // una banda de color y necesitan separarse de ella.
  aireArriba = false,
  ancho = 'max-w-[1440px]',
  // Contenido que va de borde a borde del viewport. No entra en el contenedor
  // centrado: se saca con el margen negativo exacto del padding lateral de la
  // sección, así mide justo el ancho de la pantalla sin recurrir a 100vw, que
  // cuenta la barra de desplazamiento y provoca scroll horizontal.
  sangre,
  children,
}: PropsDeSeccion) {
  const alineado = centrado ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'
  const arriba = aireArriba ? 'pt-40 md:pt-56' : 'pt-28 md:pt-36'

  return (
    <section id={id} className={`${tono.fondo} px-6 pb-28 md:px-10 md:pb-36 ${arriba}`}>
      <div className={`mx-auto ${ancho}`}>
        <div className={alineado}>
          {etiqueta && <p className={`u-etiqueta ${tono.acento}`}>{etiqueta}</p>}

          {titulo && <h2 className="u-titular u-tituloSeccion mt-6">{titulo}</h2>}

          {texto && (
            <p
              className={`mt-6 leading-relaxed text-suave md:text-lg ${
                centrado ? '' : 'max-w-xl'
              }`}
            >
              {texto}
            </p>
          )}
        </div>

        {children && <div className="mt-16 md:mt-20">{children}</div>}
      </div>

      {sangre && <div className="-mx-6 mt-16 md:-mx-10 md:mt-20">{sangre}</div>}
    </section>
  )
}
