// Pequeñas ayudas, en un solo sitio para no repetirlas.

// Los precios con el separador de miles español: 2450 -> "2.450".
//
// El punto se pone a mano y no con toLocaleString por lo mismo que las fechas
// de más abajo: esa función depende de los datos de idioma que tenga instalado
// el navegador, y en los que vienen recortados devolvía «2450», sin separador.
export function formatearPrecio(precio: number | string): string {
  const numero = Math.round(Number(precio) || 0)
  const signo = numero < 0 ? '-' : ''

  return signo + String(Math.abs(numero)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

// Las noches son siempre un día menos, pero nunca menos de cero.
export function contarNoches(dias: number | string): number {
  return Math.max(0, Number(dias) - 1)
}

// ¿Aparece esta palabra dentro del texto?
//
// Con includes() no basta: «Polinesia Francesa» contiene la cadena «france»
// y nos salía el mapa de Francia. Aquí exigimos que la palabra empiece y
// acabe donde toca, así que «france» ya no encaja dentro de «francesa».
// La \p{L} de la expresión regular es "cualquier letra", tildes incluidas.
export function contienePalabra(texto = '', palabra = ''): boolean {
  const limpia = palabra.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(^|[^\\p{L}])${limpia}([^\\p{L}]|$)`, 'iu').test(texto)
}

// Los números pequeños, escritos. «7 lugares» suena a lista de internet;
// «siete lugares», a folleto bien hecho.
const PALABRAS = [
  'cero',
  'uno',
  'dos',
  'tres',
  'cuatro',
  'cinco',
  'seis',
  'siete',
  'ocho',
  'nueve',
  'diez',
  'once',
  'doce',
  'trece',
  'catorce',
  'quince',
  'dieciséis',
  'diecisiete',
  'dieciocho',
  'diecinueve',
  'veinte',
]

export function enPalabras(numero: number): string {
  return PALABRAS[numero] || String(numero)
}


// Las fechas, escritas a mano y no con toLocaleDateString: esa función usa el
// idioma y la zona horaria de quien la ejecuta, y en la práctica del día 33 me
// dejó la misma fecha distinta según dónde se pintara.
const MESES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

export function formatearFecha(fecha?: string | Date | null): string {
  if (!fecha) return ''

  const dia = new Date(fecha)

  if (Number.isNaN(dia.getTime())) return ''

  return `${dia.getDate()} de ${MESES[dia.getMonth()]} de ${dia.getFullYear()}`
}
