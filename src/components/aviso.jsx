// Mensaje de estado reutilizable: error, éxito o información.
const TONOS = {
  error: 'border-rosa-acento text-rosa-acento',
  exito: 'border-oliva-acento text-oliva-acento',
  info: 'border-borde text-suave',
}

export default function Aviso({ tono = 'info', children }) {
  if (!children) return null

  return (
    <p className={`border-l-2 px-5 py-4 text-sm ${TONOS[tono]}`} role="status">
      {children}
    </p>
  )
}
