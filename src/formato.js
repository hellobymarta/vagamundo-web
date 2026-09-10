// Pequeñas ayudas, en un solo sitio para no repetirlas.

// Los precios con el separador de miles español: 2450 -> "2.450".
export function formatearPrecio(precio) {
  return Number(precio).toLocaleString('es-ES')
}

// Las noches son siempre un día menos, pero nunca menos de cero.
export function contarNoches(dias) {
  return Math.max(0, Number(dias) - 1)
}

// ¿Aparece esta palabra dentro del texto?
//
// Con includes() no basta: «Polinesia Francesa» contiene la cadena «france»
// y nos salía el mapa de Francia. Aquí exigimos que la palabra empiece y
// acabe donde toca, así que «france» ya no encaja dentro de «francesa».
// La \p{L} de la expresión regular es "cualquier letra", tildes incluidas.
export function contienePalabra(texto = '', palabra = '') {
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
]

export function enPalabras(numero) {
  return PALABRAS[numero] || String(numero)
}

// La primera letra en mayúscula, respetando el resto.
// En la base de datos las categorías están en minúscula («aventura») y en un
// título en serif eso canta. Se arregla al pintarlo, no tocando los datos.
export function capitalizar(texto = '') {
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}
