// Mensaje de estado reutilizable: error, éxito o información.
const TONOS = {
  error: 'bg-rosa text-rosa-acento border-rosa-acento/30',
  exito: 'bg-oliva text-oliva-acento border-oliva-acento/30',
  info: 'bg-amarillo text-amarillo-acento border-amarillo-acento/30',
}

export default function Aviso({ tono = 'info', children }) {
  if (!children) return null

  return (
    <p className={`border-l-2 px-5 py-4 text-sm font-light ${TONOS[tono]}`} role="status">
      {children}
    </p>
  )
}
