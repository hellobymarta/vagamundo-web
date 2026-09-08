// Bloque partido en dos, como el «Tu viaje de novios» de Utópica:
// el texto a un lado y una fotografía a sangre al otro, con un rótulo
// encima de la foto abajo a la izquierda.
// Con `invertido` se cambia el orden, para ir alternando a lo largo de la web.
export default function Partido({ imagen, alt, rotulo, pie, invertido = false, children }) {
  return (
    <div className="grid items-stretch gap-12 md:grid-cols-2 md:gap-20">
      <figure
        className={`relative min-h-[420px] overflow-hidden md:min-h-[600px] ${
          invertido ? 'md:order-2' : ''
        }`}
      >
        <img src={imagen} alt={alt} className="absolute inset-0 h-full w-full object-cover" />

        {(rotulo || pie) && (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-8 pb-8 pt-24 text-white">
            {rotulo && <p className="titular text-3xl">{rotulo}</p>}
            {pie && <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">{pie}</p>}
          </figcaption>
        )}
      </figure>

      <div className={`flex flex-col justify-center ${invertido ? 'md:order-1' : ''}`}>
        {children}
      </div>
    </div>
  )
}
