// Envoltorio de sección: aplica el color del tono que le toque y coloca
// la etiqueta y el título siempre con el mismo ritmo.
export default function Seccion({ tono, etiqueta, titulo, texto, ancho = 'max-w-[1400px]', children }) {
  return (
    <section className={`${tono.fondo} px-8 py-24`}>
      <div className={`mx-auto ${ancho}`}>
        {etiqueta && <p className={`etiqueta ${tono.acento}`}>{etiqueta}</p>}

        {titulo && <h2 className="titular mt-5 max-w-2xl text-4xl md:text-5xl">{titulo}</h2>}

        {texto && <p className="mt-6 max-w-xl text-lg font-light text-suave">{texto}</p>}

        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  )
}
