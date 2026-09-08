import { MENSAJES } from '@/config/constantes'

// Lo que se ve mientras la API responde. También lo usa <Suspense>.
export default function Cargando({ texto = MENSAJES.CARGANDO }) {
  return (
    <div className="flex flex-col items-center gap-6 px-8 py-32 text-suave">
      <span className="h-10 w-10 animate-spin rounded-full border border-borde border-t-terracota-acento" />
      <p className="etiqueta">{texto}</p>
    </div>
  )
}
