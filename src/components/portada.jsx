// Portada a sangre: una fotografía a pantalla completa con el título encima,
// que es como abren NUBA y Utópica. La usan todas las páginas, cambiando
// la foto y la altura.
export default function Portada({ imagen, alt, etiqueta, titulo, texto, alto = 'h-[86vh]', children }) {
  return (
    <section className={`relative ${alto} min-h-[420px] overflow-hidden`}>
      <img src={imagen} alt={alt} className="absolute inset-0 h-full w-full object-cover" />

      {/* Dos capas: un velo azul de marca y un degradado que oscurece
          la parte de abajo para que el texto se lea siempre. */}
      <div className="absolute inset-0 bg-azul/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/25" />

      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-8 pb-16 text-white">
        {etiqueta && <p className="etiqueta text-azul-claro">{etiqueta}</p>}

        <h1 className="titular mt-5 max-w-3xl text-5xl md:text-6xl">{titulo}</h1>

        {texto && <p className="mt-6 max-w-xl text-lg font-light text-white/85">{texto}</p>}

        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  )
}
