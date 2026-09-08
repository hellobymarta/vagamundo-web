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
    <form onSubmit={enviar} className="space-y-5 rounded-3xl border border-arena bg-white/70 p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <Campo
          etiqueta="Nombre del viaje"
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

      <div className="grid gap-5 sm:grid-cols-3">
        <Campo
          etiqueta="Precio (€)"
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
        etiqueta="Itinerario"
        nombre="itinerario"
        tipo="textarea"
        value={valores.itinerario}
        onChange={cambiar}
        placeholder="Día 1 Nápoles · Día 2 Positano · Día 3 Ravello…"
      />

      <Campo
        etiqueta="Imagen (URL)"
        nombre="imagen"
        tipo="url"
        value={valores.imagen}
        onChange={cambiar}
        placeholder="https://…"
      />

      <Campo
        etiqueta="Hay plazas disponibles"
        nombre="disponible"
        tipo="checkbox"
        value={valores.disponible}
        onChange={cambiar}
      />

      <Boton type="submit" disabled={enviando}>
        {enviando ? 'Guardando…' : textoBoton}
      </Boton>
    </form>
  )
}
