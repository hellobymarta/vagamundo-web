import Boton from '@/components/boton'
import { useFormulario } from '@/hooks/use-formulario'

// El formulario de contacto de Utópica: fondo oliva, título en serif con una
// palabra en cursiva y los campos sin caja, solo con la línea de abajo.
// No hay endpoint de boletín en la API, así que al enviar damos las gracias.
const CLASES = `w-full border-0 border-b border-white/40 bg-transparent px-0 py-3
  text-lg text-white outline-none transition placeholder:text-white/50 focus:border-white`

export default function Boletin() {
  const { valores, cambiar, reiniciar } = useFormulario({
    nombre: '',
    correo: '',
    enviado: false,
  })

  function enviar(evento) {
    evento.preventDefault()
    reiniciar({ nombre: '', correo: '', enviado: true })
  }

  return (
    <section id="boletin" className="scroll-mt-24 bg-caqui px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <h2 className="titular t-seccion text-white">
            Comparte tus <em className="titular-cursiva">sueños</em> con nosotras
          </h2>
          <p className="mt-7 max-w-sm leading-relaxed text-white/80">
            Déjanos tu correo y te escribimos cuatro veces al año, cuando abrimos temporada o
            cuando encontramos algo que merece el viaje.
          </p>
        </div>

        <form onSubmit={enviar} className="space-y-10">
          <div>
            <label htmlFor="nombre" className="etiqueta block text-white/60">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={valores.nombre}
              onChange={cambiar}
              placeholder="Cómo te llamas"
              required
              className={CLASES}
            />
          </div>

          <div>
            <label htmlFor="correo" className="etiqueta block text-white/60">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={valores.correo}
              onChange={cambiar}
              placeholder="hola@correo.com"
              required
              className={CLASES}
            />
          </div>

          <Boton type="submit" variante="claro">
            Enviar
          </Boton>

          {valores.enviado && (
            <p className="etiqueta text-white">Apuntada. Te escribimos en cuanto haya algo.</p>
          )}
        </form>
      </div>
    </section>
  )
}
