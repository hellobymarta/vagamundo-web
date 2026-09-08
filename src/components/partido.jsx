// Bloque partido en dos: fotografía a un lado y texto al otro.
// Con `invertido` se cambia el orden, para ir alternando izquierda y derecha
// a lo largo de la página.
export default function Partido({ imagen, alt, pie, invertido = false, children }) {
  return (
    <div className="grid items-center gap-14 md:grid-cols-2">
      <figure className={`relative h-[460px] overflow-hidden ${invertido ? 'md:order-2' : ''}`}>
        <img src={imagen} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
        {pie && (
          <figcaption className="etiqueta absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-5 pt-12 text-white/80">
            {pie}
          </figcaption>
        )}
      </figure>

      <div className={invertido ? 'md:order-1' : ''}>{children}</div>
    </div>
  )
}
