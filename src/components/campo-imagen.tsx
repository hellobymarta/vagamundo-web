import { useRef, useState } from 'react'
import type { ChangeEvent } from 'react'

import { mensajeDeError } from '@/errores'
import { LADO_MAXIMO_IMAGEN, MAXIMO_IMAGEN } from '@/config/constantes'

// La fotografía de una crónica se guarda dentro del documento de Mongo en
// Base64, y una foto de móvil puede ocupar varios megas. Antes de convertirla
// la encojo con un canvas: la dibujo más pequeña y la vuelvo a sacar en JPEG,
// bajando la calidad hasta que cabe. Si mandara el archivo tal cual, la API
// la rechazaría por tamaño.
async function aBase64(archivo: File): Promise<string> {
  const imagen = await new Promise<HTMLImageElement>((listo, fallo) => {
    const lector = new FileReader()

    lector.onload = () => {
      const elemento = new Image()
      elemento.onload = () => listo(elemento)
      elemento.onerror = () => fallo(new Error('No he podido leer esa imagen.'))
      elemento.src = String(lector.result)
    }

    lector.onerror = () => fallo(new Error('No he podido leer ese archivo.'))
    lector.readAsDataURL(archivo)
  })

  const escala = Math.min(1, LADO_MAXIMO_IMAGEN / Math.max(imagen.width, imagen.height))
  const lienzo = document.createElement('canvas')

  lienzo.width = Math.round(imagen.width * escala)
  lienzo.height = Math.round(imagen.height * escala)
  const pincel = lienzo.getContext('2d')
  if (!pincel) throw new Error('Este navegador no puede preparar la fotografía.')

  pincel.drawImage(imagen, 0, 0, lienzo.width, lienzo.height)

  for (const calidad of [0.82, 0.7, 0.6, 0.5, 0.4]) {
    const datos = lienzo.toDataURL('image/jpeg', calidad)
    if (datos.length <= MAXIMO_IMAGEN) return datos
  }

  throw new Error('Esa fotografía pesa demasiado incluso después de reducirla.')
}

interface PropsDeCampoImagen {
  valor?: string
  onCambiar: (imagen: string) => void
  error?: string
}

export default function CampoImagen({ valor, onCambiar, error }: PropsDeCampoImagen) {
  const entrada = useRef<HTMLInputElement>(null)
  const [estado, setEstado] = useState({ preparando: false, fallo: '' })

  const { preparando, fallo } = estado

  const cambiar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  async function elegir(evento: ChangeEvent<HTMLInputElement>) {
    const archivo = evento.target.files?.[0]
    if (!archivo) return

    cambiar({ preparando: true, fallo: '' })

    try {
      onCambiar(await aBase64(archivo))
    } catch (problema) {
      cambiar({ fallo: mensajeDeError(problema) })
      onCambiar('')
    } finally {
      cambiar({ preparando: false })
      // Dejo el input vacío para poder volver a elegir el mismo archivo.
      evento.target.value = ''
    }
  }

  return (
    <div className="space-y-6">
      <p id="rotulo-fotografia" className="u-etiqueta text-suave">
        Fotografía
      </p>

      {valor && (
        <img
          src={valor}
          alt="La fotografía elegida para la crónica"
          className="max-h-80 w-full border border-borde object-cover"
        />
      )}

      {/* El input va escondido porque el botón de abajo es el que se pulsa,
          pero sigue siendo el campo de verdad, así que lleva su propio nombre
          para quien navegue con lector de pantalla. */}
      <input
        ref={entrada}
        id="fotografia"
        name="fotografia"
        type="file"
        accept="image/jpeg,image/png,image/webp"
        aria-labelledby="rotulo-fotografia"
        onChange={elegir}
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="button"
          disabled={preparando}
          onClick={() => entrada.current?.click()}
          className="u-etiqueta cursor-pointer border border-tinta/25 px-6 py-2.5 transition duration-500 hover:bg-tinta hover:text-crema disabled:opacity-40"
        >
          {preparando ? 'Preparando…' : valor ? 'Cambiar la fotografía' : 'Elegir una fotografía'}
        </button>

        {valor && (
          <p className="text-sm text-suave">
            Ocupa {Math.round(valor.length / 1024)} kB una vez convertida
          </p>
        )}
      </div>

      {(fallo || error) && <p className="text-sm text-rosa-acento">{fallo || error}</p>}
    </div>
  )
}
