import { PREGUNTAS } from '@/config/constantes'

// Preguntas frecuentes en dos columnas por tema: «El viaje» y «Papeleo».
// Siguen siendo <details>, así que se abren y se cierran sin una línea de
// JavaScript, funcionan con teclado desde el primer día y el buscador lee
// las respuestas aunque estén cerradas.
//
// Un Set sobre los grupos da los temas en el orden en que aparecen escritos.
export default function Preguntas() {
  const grupos = [...new Set(PREGUNTAS.map(({ grupo }) => grupo))]

  return (
    <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
      {grupos.map((grupo) => (
        <div key={grupo}>
          {/* El rótulo del tema va centrado sobre su columna, para que la
              sección se lea centrada de arriba abajo. Las preguntas, en
              cambio, siguen alineadas a la izquierda: son una lista que se
              recorre con la vista y centrarlas dificultaría leerlas. */}
          <p className="u-etiqueta text-center text-amarillo-acento">{grupo}</p>

          <div className="mt-8">
            {PREGUNTAS.filter((pregunta) => pregunta.grupo === grupo).map(
              ({ id, pregunta, respuesta }) => (
                <details key={id} className="Pregunta border-t border-tinta/12">
                  <summary className="u-titular py-5 pr-8 text-lg leading-snug">{pregunta}</summary>
                  <p className="pb-6 pr-8 leading-relaxed text-suave">{respuesta}</p>
                </details>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
