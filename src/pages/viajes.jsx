import ListaViajes from '@/components/lista-viajes'
import Cargando from '@/components/cargando'
import Aviso from '@/components/aviso'
import Boton from '@/components/boton'
import { useViajes } from '@/hooks/use-viajes'

// Página principal: el catálogo que llega de MongoDB a través de la API.
export default function Viajes() {
  const { viajes, cargando, error, aviso, cargarViajes } = useViajes()

  return (
    <>
      <section className="bg-azul text-crema">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-amarillo">Temporada 2026</p>
          <h1 className="mt-4 max-w-2xl font-titulo text-5xl leading-tight">
            Viajes que se recuerdan por lo que pasó, no por lo que se visitó.
          </h1>
          <p className="mt-5 max-w-xl text-crema/80">
            Grupos pequeños por el Mediterráneo. Cada ruta la diseñamos entera, del primer café
            al último atardecer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Boton a="/nuevo" variante="terracota">
              Añadir un viaje
            </Boton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-titulo text-3xl">El catálogo</h2>
            <p className="mt-1 text-sm text-humo">
              {cargando ? 'Consultando la API…' : `${viajes.length} viajes disponibles ahora mismo.`}
            </p>
          </div>

          <Boton variante="contorno" onClick={cargarViajes} disabled={cargando}>
            Actualizar
          </Boton>
        </div>

        <div className="mt-6 space-y-3">
          <Aviso tono="error">{error}</Aviso>
          <Aviso tono="exito">{aviso}</Aviso>
        </div>

        <div className="mt-8">
          {cargando ? <Cargando /> : <ListaViajes viajes={viajes} />}
        </div>
      </section>
    </>
  )
}
