// La fila de datos del destino: capital, idioma, moneda y cuándo ir.
// Filete arriba, etiqueta pequeña y el dato en serif, como las fichas
// de Wilderness.
export default function DatosDestino({ datos }) {
  if (!datos || datos.length === 0) return null

  return (
    <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {datos.map(({ etiqueta, valor }) => (
        <div key={etiqueta}>
          <div className="filete" />
          <dt className="etiqueta mt-5 text-suave">{etiqueta}</dt>
          <dd className="titular mt-3 text-2xl">{valor}</dd>
        </div>
      ))}
    </dl>
  )
}
