import Boton from '@/components/boton'

// La banda azul noche con la que Utópica cierra su home:
// una pregunta grande en serif a la izquierda y la llamada a la acción
// a la derecha, con su etiqueta encima.
export default function BandaOscura({ pregunta, etiqueta, texto, accion, enlace, imagen }) {
  return (
    <section className="relative overflow-hidden bg-noche px-6 py-28 md:px-10 md:py-36">
      {imagen && (
        <>
          <img
            src={imagen}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-noche via-noche/85 to-noche/50" />
        </>
      )}

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 md:grid-cols-2 md:gap-24">
        <h2 className="titular t-seccion text-white">{pregunta}</h2>

        <div>
          <p className="etiqueta text-white/45">{etiqueta}</p>
          <p className="mt-5 max-w-md leading-relaxed text-white/80">{texto}</p>
          <div className="mt-9">
            <Boton a={enlace} variante="claro">
              {accion}
            </Boton>
          </div>
        </div>
      </div>
    </section>
  )
}
