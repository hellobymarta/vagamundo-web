// Envoltorio de sección: aplica el color del tono que le toque y coloca
// la etiqueta, el título y el texto siempre con el mismo ritmo.
// Con `centrado` se alinea todo al medio, como hace NUBA en sus bloques.
export default function Seccion({
  tono,
  etiqueta,
  titulo,
  texto,
  id,
  centrado = false,
  ancho = 'max-w-[1440px]',
  children,
}) {
  const alineado = centrado ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'

  return (
    <section id={id} className={`${tono.fondo} px-6 py-28 md:px-10 md:py-36`}>
      <div className={`mx-auto ${ancho}`}>
        <div className={alineado}>
          {etiqueta && <p className={`etiqueta ${tono.acento}`}>{etiqueta}</p>}

          {titulo && <h2 className="titular t-seccion mt-6">{titulo}</h2>}

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
    </section>
  )
}
