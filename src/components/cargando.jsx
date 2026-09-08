import { MENSAJES } from '@/config/constantes'

// Lo que se ve mientras la API responde. También lo usa <Suspense>.
export default function Cargando({ texto = MENSAJES.CARGANDO }) {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-humo">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-arena border-t-terracota" />
      <p className="text-sm">{texto}</p>
    </div>
  )
}
