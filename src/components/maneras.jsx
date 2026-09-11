import Boton from '@/components/boton'
import { MANERAS } from '@/config/constantes'

// Cómo es un día en un viaje Vagamundo, contado con tres días de tres viajes
// distintos. Antes esta sección enseñaba solo Positano y sonaba a que la casa
// era una costa italiana y nada más.
//
// La segunda ficha baja un poco en pantalla grande: es el desajuste que usa
// NUBA para que tres fotos iguales no parezcan un catálogo de stock. En móvil
// vuelven a la misma línea.
export default function Maneras() {
  return (
    <div>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
        {MANERAS.map(({ id, foto, fotoAlt, lugar, titulo, texto }, posicion) => (
          <article key={id} className={posicion === 1 ? 'md:mt-20' : ''}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={foto}
                alt={fotoAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <p className="absolute bottom-0 left-0 bg-crema px-4 py-2">
                <span className="etiqueta text-terracota-acento">{lugar}</span>
              </p>
            </div>

            <h3 className="titular mt-7 text-2xl leading-snug">{titulo}</h3>

            <p className="mt-4 leading-relaxed text-suave">{texto}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-borde pt-10 md:mt-24 md:flex md:items-center md:justify-between md:gap-10">
        <p className="titular max-w-xl text-xl leading-snug md:text-2xl">
          Cambia el sitio y cambia todo menos la manera:{' '}
          <em className="titular-cursiva">de cinco a ocho personas</em>, un guía de allí y un día
          por semana sin nada apuntado.
        </p>

        <p className="mt-8 shrink-0 md:mt-0">
          <Boton a="/#catalogo" variante="contorno">
            Ver el catálogo
          </Boton>
        </p>
      </div>
    </div>
  )
}
