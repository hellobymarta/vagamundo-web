import { MENSAJES } from '@/config/constantes'

// En TypeScript lo que llega a un `catch` es `unknown`, porque se puede lanzar
// cualquier cosa, no solo un Error. Esta función es el único sitio donde se
// comprueba, y devuelve siempre un texto que se puede enseñar en pantalla.
export function mensajeDeError(fallo: unknown, porDefecto: string = MENSAJES.ERROR_GENERICO): string {
  if (fallo instanceof Error && fallo.message) return fallo.message
  if (typeof fallo === 'string' && fallo) return fallo

  return porDefecto
}
