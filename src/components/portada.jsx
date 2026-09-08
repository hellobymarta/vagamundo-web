// Portada a sangre para las páginas interiores: la fotografía a pantalla
// completa con el título encima, que es como abren NUBA y Utópica.
export default function Portada({
  imagen,
  alt,
  etiqueta,
  titulo,
  texto,
  dato,
  cursiva = false,
  alto = 'h-[80vh]',
  children,
}) {
  return (
    <section className={`relative ${alto} min-h-[460px] overflow-hidden`}>
      <img src={imagen} alt={alt} className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-azul/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35" />

      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-16 text-white md:px-10 md:pb-24">
        {etiqueta && <p className="etiqueta text-azul-claro">{etiqueta}</p>}

        <h1 className={`${cursiva ? 'titular-cursiva' : 'titular'} t-portada mt-6 max-w-3xl`}>
          {titulo}
        </h1>

        {texto && (
          <p className="mt-6 max-w-xl leading-relaxed text-white/80 md:text-lg">{texto}</p>
        )}

        {(children || dato) && (
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            {children}
            {dato && <p className="etiqueta text-white/70">{dato}</p>}
          </div>
        )}
      </div>
    </section>
  )
}
