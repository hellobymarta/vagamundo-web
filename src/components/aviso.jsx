// Mensaje de estado reutilizable: error, éxito o información.
const TONOS = {
  error: 'bg-[#f6e0da] text-[#8a3f2a] border-[#e2bfb3]',
  exito: 'bg-[#e4efdc] text-[#3d6134] border-[#c4dcb5]',
  info: 'bg-arena text-[#5a5136] border-[#d6c9a8]',
}

export default function Aviso({ tono = 'info', children }) {
  if (!children) return null

  return (
    <p className={`rounded-2xl border px-4 py-3 text-sm ${TONOS[tono]}`} role="status">
      {children}
    </p>
  )
}
