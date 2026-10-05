import { useState } from 'react'
import { Link } from 'react-router-dom'

import { api } from '@/services/api'
import { useSesion } from '@/hooks/use-sesion'
import { formatearFecha } from '@/formato'
import { mensajeDeError } from '@/errores'
import type { Comentario } from '@/tipos'
import type { FormEvent } from 'react'
import { RUTAS } from '@/config/rutas'

// Los comentarios de una crónica. Quien no ha entrado los lee; quien ha
// entrado puede escribir, y corregir o borrar los suyos.
interface PropsDeComentarios {
  idCronica: string
  comentarios: Comentario[]
  onCambio: (comentarios: Comentario[]) => void
}

export default function Comentarios({ idCronica, comentarios, onCambio }: PropsDeComentarios) {
  const { haEntrado, esMio } = useSesion()

  // Todo lo que pasa en este bloque es lo mismo: lo que se está escribiendo,
  // lo que se está editando y si hay algo en marcha. Van en un solo useState,
  // y se actualiza siempre con el argumento de función y el operador spread
  // para no mutar el estado anterior.
  const [estado, setEstado] = useState<{
    nuevo: string
    enviando: boolean
    fallo: string
    editandoId: string | null
    borrador: string
    ocupadoId: string | null
  }>({
    nuevo: '',
    enviando: false,
    fallo: '',
    editandoId: null,
    borrador: '',
    ocupadoId: null,
  })

  const { nuevo, enviando, fallo, editandoId, borrador, ocupadoId } = estado

  const cambiar = (parcial: Partial<typeof estado>) =>
    setEstado((previo) => ({ ...previo, ...parcial }))

  async function comentar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    if (nuevo.trim().length < 2) {
      cambiar({ fallo: 'Escribe el comentario.' })
      return
    }

    cambiar({ enviando: true, fallo: '' })

    try {
      const creado = await api.comentar(idCronica, { texto: nuevo })
      onCambio([...comentarios, creado])
      cambiar({ nuevo: '' })
    } catch (problema) {
      cambiar({ fallo: mensajeDeError(problema) })
    } finally {
      cambiar({ enviando: false })
    }
  }

  async function guardar(id: string) {
    if (borrador.trim().length < 2) {
      cambiar({ fallo: 'Escribe el comentario.' })
      return
    }

    cambiar({ ocupadoId: id, fallo: '' })

    try {
      const actualizado = await api.actualizarComentario(id, { texto: borrador })
      onCambio(comentarios.map((uno) => (uno.id === id ? actualizado : uno)))
      cambiar({ editandoId: null })
    } catch (problema) {
      cambiar({ fallo: mensajeDeError(problema) })
    } finally {
      cambiar({ ocupadoId: null })
    }
  }

  async function borrar(id: string) {
    cambiar({ ocupadoId: id, fallo: '' })

    try {
      await api.eliminarComentario(id)
      onCambio(comentarios.filter((uno) => uno.id !== id))
    } catch (problema) {
      cambiar({ fallo: mensajeDeError(problema) })
    } finally {
      cambiar({ ocupadoId: null })
    }
  }

  return (
    <section className="space-y-10">
      <p className="u-etiqueta text-suave">
        {comentarios.length === 0
          ? 'Sin comentarios'
          : `${comentarios.length} ${comentarios.length === 1 ? 'comentario' : 'comentarios'}`}
      </p>

      {comentarios.length > 0 && (
        <ul className="space-y-8">
          {comentarios.map((uno) => (
            <li key={uno.id} className="Comentario">
              {editandoId === uno.id ? (
                <div className="space-y-5">
                  <textarea
                    rows={3}
                    aria-label="Editar el comentario"
                    value={borrador}
                    onChange={(evento) => cambiar({ borrador: evento.target.value })}
                    className="w-full border-0 border-b border-borde bg-transparent px-0 py-3 outline-none transition focus:border-terracota-acento"
                  />

                  <div className="flex gap-6">
                    <button
                      type="button"
                      disabled={ocupadoId === uno.id}
                      onClick={() => guardar(uno.id)}
                      className="EnlaceAccion"
                    >
                      {ocupadoId === uno.id ? 'Guardando…' : 'Guardar'}
                    </button>
                    <button type="button" onClick={() => cambiar({ editandoId: null })} className="EnlaceAccion">
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="u-etiqueta text-suave">
                    {uno.autor?.nombre || 'Alguien'} · {formatearFecha(uno.createdAt)}
                  </p>

                  <p className="mt-4 leading-relaxed">{uno.texto}</p>

                  {esMio(uno) && (
                    <div className="mt-5 flex gap-6">
                      <button
                        type="button"
                        onClick={() => cambiar({ editandoId: uno.id, borrador: uno.texto })}
                        className="EnlaceAccion"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        disabled={ocupadoId === uno.id}
                        onClick={() => borrar(uno.id)}
                        className="EnlaceAccion"
                      >
                        {ocupadoId === uno.id ? 'Eliminando…' : 'Eliminar'}
                      </button>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {haEntrado ? (
        <form onSubmit={comentar} className="space-y-6">
          <label htmlFor="nuevo-comentario" className="u-etiqueta block text-suave">
            Deja tu comentario
          </label>

          <textarea
            id="nuevo-comentario"
            rows={3}
            value={nuevo}
            onChange={(evento) => cambiar({ nuevo: evento.target.value })}
            className="w-full border-0 border-b border-borde bg-transparent px-0 py-3 outline-none transition focus:border-terracota-acento"
          />

          <button
            type="submit"
            disabled={enviando}
            className="u-etiqueta cursor-pointer border border-tinta/25 px-6 py-2.5 transition duration-500 hover:bg-tinta hover:text-crema disabled:opacity-40"
          >
            {enviando ? 'Enviando…' : 'Comentar'}
          </button>
        </form>
      ) : (
        <p className="text-sm text-suave">
          <Link to={RUTAS.entrar} className="underline underline-offset-4 hover:text-tinta">
            Entra
          </Link>{' '}
          para dejar un comentario.
        </p>
      )}

      {fallo && <p className="text-sm text-rosa-acento">{fallo}</p>}
    </section>
  )
}
