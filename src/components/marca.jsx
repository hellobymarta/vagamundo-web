import { Link } from 'react-router-dom'

// El bloque de marca con el que NUBA abre después de la portada: un título
// largo centrado, una coletilla y un «LEER MÁS» discreto.
// La cursiva metida dentro del titular es el recurso de Utópica
// («Tu *viaje de novios*, una experiencia única»).
export default function Marca() {
  return (
    <section className="bg-crema px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="titular t-seccion">
          Viajes <em className="titular-cursiva">de autor</em> por el Mediterráneo, y algunos
          bastante más lejos
        </h2>

        <p className="etiqueta mt-7 text-terracota-acento">Más allá del folleto</p>

        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-left leading-relaxed text-suave md:text-lg">
          <p>
            Somos un taller pequeño. Volvemos a los mismos sitios año tras año hasta que dejan de
            ser un destino y se convierten en un barrio: sabemos quién abre la panadería a las
            seis, qué día no hay barco y en qué terraza no hay que sentarse.
          </p>
          <p>
            Con eso montamos nueve rutas para ocho personas. Ni una más, porque a partir de ahí
            ya no entras en la cocina de nadie.
          </p>
        </div>

        <p className="etiqueta mt-12">
          <Link to="/#catalogo" className="border-b border-tinta/25 pb-1 hover:border-tinta">
            Leer más
          </Link>
        </p>
      </div>
    </section>
  )
}
