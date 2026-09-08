// Los destinos, como los plantea NUBA: cada uno es una ficha con su
// continente, su fotografía y su entradilla, y tiene su propia página.
//
// El modelo de la API solo guarda un campo `destino` de texto libre
// («Costa amalfitana, Italia»), así que aquí está la tabla que lo traduce
// a un destino de verdad, igual que hacemos con las siluetas de los mapas.

import { FOTOS } from '@/config/constantes'
import { contienePalabra } from '@/formato'

export const DESTINOS = [
  {
    id: 'italia',
    nombre: 'Italia',
    continente: 'Europa',
    foto: FOTOS.PORTADA,
    fotoAlt: 'Positano al atardecer sobre el mar',
    titular: 'El país al que siempre volvemos',
    entradilla:
      'Empezamos aquí, y aquí seguimos. La costa amalfitana en mayo y el tacón de la bota en septiembre, cuando el sur vuelve a ser de los del sur.',
    pistas: ['italia', 'amalfi', 'amalfitana', 'apulia', 'positano', 'matera', 'bari', 'atrani', 'ravello'],
  },
  {
    id: 'grecia',
    nombre: 'Grecia',
    continente: 'Europa',
    foto: FOTOS.GRECIA,
    fotoAlt: 'Casas blancas sobre las rocas en Mikonos',
    titular: 'Primero las piedras, después el mar',
    entradilla:
      'Micenas, Delfos y Meteora entre semana, con las excavaciones casi vacías, y las Cícladas al final, cuando ya te has ganado el baño.',
    pistas: ['grecia', 'santorini', 'atenas', 'mikonos', 'cicladas', 'creta'],
  },
  {
    id: 'jordania',
    nombre: 'Jordania',
    continente: 'Oriente Medio',
    foto: FOTOS.JORDANIA,
    fotoAlt: 'Arco de roca en el desierto de Wadi Rum',
    titular: 'Un país entero en ocho días',
    entradilla:
      'Cabe en una semana y no se parece a nada: una ciudad romana, otra tallada en la roca, dos noches de desierto y un mar en el que no te hundes.',
    pistas: ['jordania', 'petra', 'wadi rum', 'amman', 'aqaba'],
  },
  {
    id: 'namibia',
    nombre: 'Namibia',
    continente: 'África',
    foto: FOTOS.NAMIBIA,
    fotoAlt: 'Arco de piedra en el desierto de Namibia',
    titular: 'Donde el desierto llega hasta el mar',
    entradilla:
      'Dos millones y medio de personas en un país el doble de grande que España. Se conduce durante horas sin ver a nadie, y eso es exactamente el viaje.',
    pistas: ['namibia', 'etosha', 'sossusvlei', 'windhoek', 'kalahari', 'damaraland'],
  },
  {
    id: 'brasil',
    nombre: 'Brasil',
    continente: 'América',
    foto: FOTOS.BRASIL,
    fotoAlt: 'Lagunas de agua de lluvia entre las dunas de los Lençóis',
    titular: 'El nordeste, no las postales',
    entradilla:
      'Ni Río ni el Cristo. Mil kilómetros de dunas, lagunas que solo existen medio año y pueblos de pescadores a los que se llega en 4x4.',
    pistas: ['brasil', 'brazil', 'lencois', 'lençóis', 'jericoacoara', 'fortaleza', 'bahia'],
  },
  {
    id: 'guatemala',
    nombre: 'Guatemala',
    continente: 'América',
    foto: FOTOS.GUATEMALA,
    fotoAlt: 'El templo del Gran Jaguar en Tikal',
    titular: 'Tres volcanes desde el desayuno',
    entradilla:
      'Un lago con doce pueblos alrededor, el mercado más ruidoso de Centroamérica y una ciudad maya que la selva se tragó durante mil años.',
    pistas: ['guatemala', 'tikal', 'antigua', 'atitlan', 'atitlán', 'chichicastenango'],
  },
  {
    id: 'india',
    nombre: 'India',
    continente: 'Asia',
    foto: FOTOS.INDIA,
    fotoAlt: 'El Taj Mahal reflejado en el agua al amanecer',
    titular: 'De Delhi al Ganges',
    entradilla:
      'El norte, en el orden que aguanta el cuerpo: las ciudades primero, el mármol de Agra a las seis de la mañana y Benarés al final.',
    pistas: ['india', 'delhi', 'jaipur', 'agra', 'benares', 'varanasi', 'rajastan'],
  },
  {
    id: 'uzbekistan',
    nombre: 'Uzbekistán',
    continente: 'Asia',
    foto: FOTOS.UZBEKISTAN,
    fotoAlt: 'La plaza del Registán en Samarcanda',
    titular: 'La Ruta de la Seda, en tren',
    entradilla:
      'Samarcanda, Bujará y Jiva. Cúpulas de azulejo turquesa, melón en cada comida y trenes de alta velocidad entre oasis, que nadie se espera.',
    pistas: ['uzbekistan', 'uzbekistán', 'samarcanda', 'bujara', 'bukhara', 'tashkent', 'jiva'],
  },
  {
    id: 'costarica',
    nombre: 'Costa Rica',
    continente: 'América',
    foto: FOTOS.COSTARICA,
    fotoAlt: 'Costa del Pacífico en Costa Rica',
    titular: 'En preparación para 2027',
    entradilla:
      'Estamos recorriéndolo ahora: el Arenal, Monteverde y la costa del Pacífico. Abrimos plazas cuando lo hayamos hecho enteras nosotras.',
    pistas: ['costa rica', 'arenal', 'monteverde', 'tortuguero'],
  },
  {
    id: 'bolivia',
    nombre: 'Bolivia',
    continente: 'América',
    foto: FOTOS.SALAR,
    fotoAlt: 'Un salar al atardecer',
    titular: 'En preparación para 2027',
    entradilla:
      'El salar de Uyuni sin caravana de todoterrenos, que es más difícil de lo que parece. Estamos buscando la manera.',
    pistas: ['bolivia', 'uyuni', 'la paz'],
  },
]

// De un texto libre («Nordeste de Brasil») al destino que le toca.
// Compara por palabras completas, no por trozos: «Polinesia Francesa» no
// puede acabar clasificada como Francia.
export function buscarDestino(texto = '') {
  return (
    DESTINOS.find(({ pistas }) => pistas.some((pista) => contienePalabra(texto, pista))) || null
  )
}

// El nombre corto de un destino, para los títulos grandes.
//
// Utópica no pone en su hero el nombre del viaje, sino el del sitio: «Chile»,
// «Omán», «Maldivas». Dos palabras como mucho. Aquí hacemos lo mismo:
//   «Costa amalfitana, Italia» -> «Italia»   (lo dice la tabla de destinos)
//   «Kioto, Japón»             -> «Japón»
//   «Polinesia Francesa»       -> «Polinesia Francesa»  (se queda tal cual)
export function nombreCorto(texto = '') {
  const encontrado = buscarDestino(texto)
  if (encontrado) return encontrado.nombre

  // Si no está en la tabla, nos quedamos con lo que va después de la última
  // coma, que en un «Ciudad, País» es justo el país.
  const trozos = texto.split(',')
  return trozos[trozos.length - 1].trim() || texto
}

// Todos los viajes que caen en un destino.
export function viajesDeDestino(viajes, id) {
  return viajes.filter(({ destino }) => buscarDestino(destino)?.id === id)
}

// La fotografía que le corresponde a un destino, para no acabar poniendo
// una foto de Amalfi en un viaje a Namibia.
export function fotoDeDestino(texto, porDefecto) {
  return buscarDestino(texto)?.foto || porDefecto
}

// Los continentes en el orden de NUBA, con sus destinos dentro.
export const CONTINENTES_CON_DESTINOS = ['Europa', 'África', 'Oriente Medio', 'Asia', 'América']
  .map((nombre) => ({
    nombre,
    destinos: DESTINOS.filter((destino) => destino.continente === nombre),
  }))
  .filter(({ destinos }) => destinos.length > 0)
