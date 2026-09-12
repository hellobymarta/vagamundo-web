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
  // Qué dibujar cuando no hay fotografía. Lo usan los destinos que todavía
  // estamos preparando, que enseñan el contorno del país.
  fondo,
  children,
}) {
  return (
    <section className={`relative ${alto} min-h-[460px] overflow-hidden`}>
      {/* Los destinos que todavía preparamos no tienen fotografía propia, y
          ponerles una de archivo sería justo lo contrario de lo que decimos.
          En su lugar, el fondo oscuro de la casa. */}
      {imagen ? (
        <img src={imagen} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-noche text-white/15">
          {fondo}
        </div>
      )}

      {/* El velo pesa donde va el texto y se levanta arriba, para no apagar el cielo. */}
      <div className="absolute inset-0 bg-azul/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

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
