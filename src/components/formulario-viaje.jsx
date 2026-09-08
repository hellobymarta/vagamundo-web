import Campo from '@/components/campo'
import Boton from '@/components/boton'
import { useFormulario } from '@/hooks/use-formulario'
import { VIAJE_VACIO } from '@/config/constantes'

// Formulario controlado, el mismo para crear (POST) y para editar (PUT).
// Todo el estado de los campos vive en el hook useFormulario.
export default function FormularioViaje({
  viajeInicial = VIAJE_VACIO,
  onEnviar,
  enviando,
  textoBoton = 'Guardar viaje',
}) {
  const { valores, cambiar } = useFormulario(viajeInicial)

  function enviar(evento) {
    evento.preventDefault()

    // Los números llegan del input como texto: los convertimos antes de mandarlos.
    onEnviar({
      ...valores,
      precio: Number(valores.precio),
      duracionDias: Number(valores.duracionDias),
    })
  }

  return (
    <form onSubmit={enviar} className="space-y-12">
      <fieldset className="space-y-9 border-0 p-0">
        <legend className="etiqueta text-terracota-acento">El viaje</legend>

        <div className="grid gap-9 sm:grid-cols-2">
          <Campo
            etiqueta="Nombre"
            nombre="nombre"
            value={valores.nombre}
            onChange={cambiar}
            placeholder="Amalfi en primavera"
            required
          />
          <Campo
            etiqueta="Destino"
            nombre="destino"
            value={valores.destino}
            onChange={cambiar}
            placeholder="Costa amalfitana, Italia"
            required
          />
        </div>

        <Campo
          etiqueta="Descripción"
          nombre="descripcion"
          tipo="textarea"
          value={valores.descripcion}
          onChange={cambiar}
          placeholder="Qué hace especial a este viaje…"
        />
      </fieldset>

      <fieldset className="space-y-9 border-0 p-0">
        <legend className="etiqueta text-terracota-acento">Plazas y precio</legend>

        <div className="grid gap-9 sm:grid-cols-3">
          <Campo
            etiqueta="Precio por persona (€)"
            nombre="precio"
            tipo="number"
            min="0"
            value={valores.precio}
            onChange={cambiar}
            required
          />
          <Campo
            etiqueta="Duración (días)"
            nombre="duracionDias"
            tipo="number"
            min="1"
            value={valores.duracionDias}
            onChange={cambiar}
            required
          />
          <Campo
            etiqueta="Categoría"
            nombre="categoria"
            tipo="categoria"
            value={valores.categoria}
            onChange={cambiar}
          />
        </div>

        <Campo
          etiqueta="Hay plazas disponibles"
          nombre="disponible"
          tipo="checkbox"
          value={valores.disponible}
          onChange={cambiar}
        />
      </fieldset>

      <fieldset className="space-y-9 border-0 p-0">
        <legend className="etiqueta text-terracota-acento">El día a día</legend>

        <Campo
          etiqueta="Itinerario"
          nombre="itinerario"
          tipo="textarea"
          value={valores.itinerario}
          onChange={cambiar}
          placeholder="Nápoles · Positano · Ravello · Atrani…"
        />

        <Campo
          etiqueta="Fotografía (URL)"
          nombre="imagen"
          tipo="url"
          value={valores.imagen}
          onChange={cambiar}
          placeholder="Déjalo vacío y usaremos una de la costa"
        />
      </fieldset>

      <Boton type="submit" variante="terracota" disabled={enviando}>
        {enviando ? 'Guardando…' : textoBoton}
      </Boton>
    </form>
  )
}
