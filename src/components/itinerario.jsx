// El itinerario, día a día.
//
// En la base de datos es un solo campo de texto con un salto de línea por
// día («Día 1 · Vuelo a Windhoek.»). Aquí lo partimos y lo maquetamos: el
// número en serif grande a la izquierda y el texto al lado, con un filete
// entre días. Si el texto no viene con ese formato, se enseña tal cual.
function partirDias(texto) {
  return texto
    .split('\n')
    .map((linea) => linea.trim())
    .filter(Boolean)
    .map((linea) => {
      // Separamos por el primer · o el primer punto tras «Día N».
      const corte = linea.match(/^(D[ií]as?\s*[\d\sy-]+)[·.\-–—:]\s*(.*)$/i)

      if (!corte) return { dia: '', texto: linea }

      return { dia: corte[1].trim(), texto: corte[2].trim() }
    })
}

export default function Itinerario({ texto }) {
  if (!texto) return null

  const dias = partirDias(texto)

  // Si ninguna línea traía «Día N», no hay nada que maquetar.
  if (!dias.some(({ dia }) => dia)) {
    return <p className="whitespace-pre-line leading-relaxed text-suave md:text-lg">{texto}</p>
  }

  return (
    <ol className="max-w-3xl">
      {dias.map(({ dia, texto: linea }) => (
        // La key es el nombre del día, que no se repite dentro de un itinerario.
        <li key={dia || linea} className="grid gap-4 border-t border-borde py-7 sm:grid-cols-[110px_1fr] sm:gap-10">
          <p className="titular cifras text-lg text-terracota-acento">{dia}</p>
          <p className="leading-relaxed text-suave md:text-lg">{linea}</p>
        </li>
      ))}
    </ol>
  )
}
