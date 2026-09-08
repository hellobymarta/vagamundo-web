// Pequeñas ayudas de formato, en un solo sitio para no repetirlas.

// Los precios con el separador de miles español: 2450 -> "2.450".
export function formatearPrecio(precio) {
  return Number(precio).toLocaleString('es-ES')
}

// Las noches son siempre un día menos, pero nunca menos de cero.
export function contarNoches(dias) {
  return Math.max(0, Number(dias) - 1)
}
