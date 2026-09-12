import Boton from '@/components/boton'
import { FOTOS, PASOS } from '@/config/constantes'

// Viajes a medida. Es la mitad de lo que hace la casa, así que ocupa una
// sección entera a sangre y no una lista de tres puntos al final de la página.
//
// La sección NO habla de un destino concreto: se puede montar cualquiera,
// esté o no en el catálogo. Los ejemplos van marcados como ejemplos, que es
// lo que faltaba: antes el epígrafe decía Namibia y la cita hablaba de
// Jordania, y no había manera de entender de qué iba esto.
//
// Deconstruimos cada paso dentro del map y la key es su número.
export default function Medida() {
  return (
    <section id="a-medida" className="scroll-mt-24 bg-terracota px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <p className="etiqueta text-terracota-acento">Viajes a medida</p>

          <h2 className="titular t-seccion mt-6">
            Cualquier sitio del mundo, escrito{' '}
            <em className="titular-cursiva">para vosotros solos</em>
          </h2>

          <p className="mt-7 leading-relaxed text-suave md:text-lg">
            No hace falta que esté en el catálogo. Decidnos el sitio —uno de los nuestros o el que
            lleváis años dándole vueltas— y lo montamos entero: solo vuestro grupo, vuestras
            fechas, vuestro ritmo y las paradas que os apetezcan. Con el mismo trabajo de detrás
            que cualquier salida: gente de allí, casas probadas y ninguna parada comercial.
          </p>

          <p className="mt-7 leading-relaxed text-suave md:text-lg">
            Una familia, cuatro amigas, un grupo que ya viaja junto desde hace años o dos personas
            que quieren ir por libre con alguien que conozca el terreno.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
          {/* La fotografía ocupa toda la altura de la columna de pasos. El pie
              deja claro que es un ejemplo, no el destino de la sección. */}
          <figure className="relative min-h-[380px] overflow-hidden md:min-h-full">
            <img
              src={FOTOS.JORDANIA_WADIRUM}
              alt="Las montañas de Wadi Rum sobre la arena naranja"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-tinta/80 via-tinta/15 to-transparent" />

            <figcaption className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
              <p className="etiqueta text-white/60">Un ejemplo · Jordania</p>

              <p className="titular mt-5 text-xl leading-snug md:text-2xl">
                «Éramos cinco y queríamos dormir dos noches en el desierto en vez de una. Nos
                dijeron que sí y nos cambiaron el resto del viaje alrededor.»
              </p>

              <p className="etiqueta mt-6 text-white/65">Familia Ortiz</p>
            </figcaption>
          </figure>

          {/* Los tres pasos, cada uno con su letra pequeña debajo. */}
          <ol className="flex flex-col justify-between gap-12">
            {PASOS.map(({ numero, titulo, texto, dato }) => (
              <li key={numero} className="border-t border-terracota-acento/25 pt-7">
                <p className="titular cifras text-4xl text-terracota-acento/45">{numero}</p>

                <h3 className="titular mt-5 text-2xl leading-snug">{titulo}</h3>

                <p className="mt-3 leading-relaxed text-suave">{texto}</p>

                <p className="etiqueta mt-5 flex items-center gap-3 text-terracota-acento">
                  <span aria-hidden="true" className="h-px w-6 bg-terracota-acento/50" />
                  {dato}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 md:mt-16">
          <Boton a="/nuevo">Contadnos vuestro viaje</Boton>

          <p className="etiqueta text-suave">
            O al teléfono: <span className="cifras text-tinta">+34 900 000 000</span>
          </p>
        </div>
      </div>
    </section>
  )
}
