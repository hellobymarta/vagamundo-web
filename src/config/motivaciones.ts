// Las tres maneras de entrar al catálogo, como el «Imagina tu viaje» de
// Utópica pero reducidas a lo que de verdad decide alguien que empieza:
// agua, cultura o naturaleza.
//
// Cada motivación agrupa varias de las categorías que guarda la API, porque
// en la base de datos conviven «playa», «costa» e «islas» y para quien mira
// la web son lo mismo. Así el filtro es simple por fuera y fiel por dentro.

import { FOTOS } from '@/config/constantes'

export const MOTIVACIONES = [
  {
    id: 'playa',
    titulo: 'Playa',
    // Cómo se llama el catálogo cuando está filtrado por esta motivación.
    tituloCatalogo: 'Viajes de playa',
    entradilla: 'Agua delante y ningún plan detrás',
    texto:
      'Costas donde todavía se puede aparcar, islas a las que se llega en el barco de línea y lagunas en las que el día lo decide la marea.',
    foto: FOTOS.POLINESIA_PLAYA,
    fotoAlt: 'Cocoteros inclinados sobre una laguna transparente',
    categorias: ['playa', 'costa', 'islas'],
  },
  {
    id: 'cultural',
    titulo: 'Cultural',
    tituloCatalogo: 'Viajes culturales',
    entradilla: 'Piedra, mercado y sobremesa',
    texto:
      'Ciudades que se entienden andando, con alguien de allí que abre las puertas que no salen en el plano y sabe a qué hora no hay nadie.',
    foto: FOTOS.JAPON_NOCHE,
    fotoAlt: 'Un callejón de Kioto iluminado al anochecer',
    categorias: ['cultural', 'ciudad'],
  },
  {
    id: 'naturaleza',
    titulo: 'Naturaleza y aventura',
    tituloCatalogo: 'Viajes de naturaleza y aventura',
    entradilla: 'Se madruga y se llega lejos',
    texto:
      'Fauna en libertad, desiertos sin una sola luz alrededor y días que empiezan antes del amanecer, que es cuando pasan las cosas.',
    foto: FOTOS.NAMIBIA_DESIERTO,
    fotoAlt: 'Acacias secas sobre el barro blanco de Deadvlei',
    categorias: ['naturaleza', 'aventura', 'desierto', 'montaña'],
  },
]

// ¿Encaja la categoría de este viaje en esta motivación? Comparamos en
// minúscula porque la base de datos no es consistente.
export function esDeMotivacion(categoria = '', id: string | null = '') {
  const motivacion = MOTIVACIONES.find((una) => una.id === id)

  return motivacion ? motivacion.categorias.includes(categoria.toLowerCase()) : false
}

// Los viajes de una motivación. Si el identificador no existe, devuelve la
// lista entera: es lo que hace falta cuando la URL no trae filtro.
export function viajesDeMotivacion<T extends { categoria?: string }>(
  viajes: T[] = [],
  id: string | null = ''
): T[] {
  if (!MOTIVACIONES.some((una) => una.id === id)) return viajes

  return viajes.filter(({ categoria }) => esDeMotivacion(categoria, id))
}
