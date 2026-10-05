import { useState } from 'react'

import Campo from '@/components/campo'
import Boton from '@/components/boton'
import Aviso from '@/components/aviso'
import CampoImagen from '@/components/campo-imagen'
import { useFormulario } from '@/hooks/use-formulario'
import type { FormEvent } from 'react'
import type { CronicaNueva } from '@/tipos'

/** Un mensaje por campo que no pasa la validación. */
type ErroresDeCronica = Partial<Record<keyof CronicaNueva, string>>

const CRONICA_VACIA: CronicaNueva = { titulo: '', destino: '', contenido: '', imagen: '' }

// Las mismas reglas que comprueba la API, repetidas aquí para avisar sin
// esperar a la red. No sustituyen a las de la API: a los endpoints se les
// puede escribir desde fuera del formulario.
function validar({ titulo, destino, contenido, imagen }: CronicaNueva): ErroresDeCronica {
  const errores: ErroresDeCronica = {}

  if (titulo.trim().length < 3) errores.titulo = 'El título es demasiado corto.'
  if (!destino.trim()) errores.destino = 'Escribe el destino.'
  if (contenido.trim().length < 20) errores.contenido = 'Cuenta un poco más, al menos veinte caracteres.'
  if (!imagen) errores.imagen = 'La crónica necesita una fotografía.'

  return errores
}

// Formulario controlado, el mismo para publicar (POST) y para corregir (PUT).
interface PropsDeFormularioCronica {
  cronicaInicial?: CronicaNueva
  onEnviar: (cronica: CronicaNueva) => void
  enviando?: boolean
  textoBoton?: string
}

interface EstadoDelFormulario {
  errores: ErroresDeCronica
  aviso: string
}

export default function FormularioCronica({
  cronicaInicial = CRONICA_VACIA,
  onEnviar,
  enviando,
  textoBoton = 'Publicar crónica',
}: PropsDeFormularioCronica) {
  const { valores, cambiar, reiniciar } = useFormulario<CronicaNueva & Record<string, unknown>>({
    ...CRONICA_VACIA,
    ...cronicaInicial,
  })
  const [estado, setEstado] = useState<EstadoDelFormulario>({ errores: {}, aviso: '' })

  const { errores, aviso } = estado

  const actualizar = (parcial: Partial<EstadoDelFormulario>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    const encontrados = validar(valores)

    if (Object.keys(encontrados).length > 0) {
      actualizar({ errores: encontrados, aviso: '' })
      return
    }

    actualizar({ errores: {} })
    onEnviar(valores)
  }

  return (
    <form onSubmit={enviar} className="space-y-16">
      <fieldset className="space-y-10 border-0 p-0">
        <legend className="u-etiqueta text-terracota-acento">La crónica</legend>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <Campo
              etiqueta="Título"
              nombre="titulo"
              value={valores.titulo}
              onChange={cambiar}
              placeholder="Kirkjufell, la montaña de las fotos"
            />
            {errores.titulo && <p className="mt-3 text-sm text-rosa-acento">{errores.titulo}</p>}
          </div>

          <div>
            <Campo
              etiqueta="Destino"
              nombre="destino"
              value={valores.destino}
              onChange={cambiar}
              placeholder="Islandia"
            />
            {errores.destino && <p className="mt-3 text-sm text-rosa-acento">{errores.destino}</p>}
          </div>
        </div>

        <div>
          <Campo
            etiqueta="Qué pasó"
            nombre="contenido"
            tipo="textarea"
            filas={10}
            value={valores.contenido}
            onChange={cambiar}
            placeholder="Llegamos de noche y no se veía nada…"
          />
          {errores.contenido && (
            <p className="mt-3 text-sm text-rosa-acento">{errores.contenido}</p>
          )}
        </div>
      </fieldset>

      <CampoImagen
        valor={valores.imagen}
        error={errores.imagen}
        onCambiar={(imagen) => {
          reiniciar({ ...valores, imagen })
          setEstado((previo) => ({ ...previo, errores: { ...previo.errores, imagen: undefined } }))
        }}
      />

      <Aviso tono="error">{aviso}</Aviso>

      <Boton type="submit" variante="terracota" disabled={enviando}>
        {enviando ? 'Guardando…' : textoBoton}
      </Boton>
    </form>
  )
}
