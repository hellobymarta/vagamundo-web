import { useCallback, useState } from 'react'

// Hook propio para formularios controlados.
// Guarda todos los campos en un único useState (son datos relacionados)
// y devuelve el manejador que sirve para inputs, selects y checkboxes.
export function useFormulario(valoresIniciales) {
  const [valores, setValores] = useState(valoresIniciales)

  const cambiar = useCallback((evento) => {
    const { name, value, type, checked } = evento.target

    setValores((previos) => ({
      ...previos,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }, [])

  const reiniciar = useCallback(
    (nuevos = valoresIniciales) => setValores(nuevos),
    [valoresIniciales]
  )

  return { valores, cambiar, reiniciar }
}
