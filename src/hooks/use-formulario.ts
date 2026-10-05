import { useCallback, useState } from 'react'
import type { ChangeEvent } from 'react'

// Hook propio para formularios controlados.
// Guarda todos los campos juntos en el estado y devuelve el manejador que
// sirve para inputs, selects y checkboxes.
// El genérico hace que `valores` tenga exactamente la forma del objeto que
// se le pasa, así que si un campo no existe el compilador lo dice.
type CampoDeFormulario = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export function useFormulario<T extends Record<string, unknown>>(valoresIniciales: T) {
  const [valores, setValores] = useState<T>(valoresIniciales)

  const cambiar = useCallback((evento: ChangeEvent<CampoDeFormulario>) => {
    const { name, value, type } = evento.target
    const checked = 'checked' in evento.target ? evento.target.checked : false

    setValores((previos) => ({
      ...previos,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }, [])

  const reiniciar = useCallback(
    (nuevos: T = valoresIniciales) => setValores(nuevos),
    [valoresIniciales]
  )

  return { valores, cambiar, reiniciar }
}
