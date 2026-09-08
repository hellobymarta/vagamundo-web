// Franja fotográfica con una frase encima, para dar aire entre secciones.
export default function Franja({ imagen, alt, cita, firma }) {
  return (
    <section className="relative h-[440px] overflow-hidden">
      <img src={imagen} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-azul/45" />

      <div className="relative mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-8 text-center text-white">
        <p className="titular text-3xl md:text-4xl">«{cita}»</p>
        {firma && <p className="etiqueta mt-8 text-azul-claro">{firma}</p>}
      </div>
    </section>
  )
}
