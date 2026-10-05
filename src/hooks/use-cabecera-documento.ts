import { useEffect } from 'react'

// El título y la descripción de cada página.
//
// Es una aplicación de una sola página: el navegador carga `index.html` una vez
// y a partir de ahí todo lo pinta React, así que sin esto las catorce rutas
// comparten el mismo título y la misma descripción. Eso se nota en la pestaña
// del navegador, en los marcadores, en lo que se ve al compartir un enlace y en
// lo que indexa un buscador.
//
// No hace falta ninguna librería: basta con escribir en `document` cuando la
// página se monta o cambia su contenido.

const MARCA = 'Vagamundo'
const SITIO = 'https://vagamundo-web.vercel.app'

/** Pone o actualiza una etiqueta <meta>, buscándola por `name` o por `property`. */
function meta(clave: 'name' | 'property', valor: string, contenido: string) {
  let etiqueta = document.head.querySelector<HTMLMetaElement>(`meta[${clave}="${valor}"]`)

  if (!etiqueta) {
    etiqueta = document.createElement('meta')
    etiqueta.setAttribute(clave, valor)
    document.head.appendChild(etiqueta)
  }

  etiqueta.content = contenido
}

/** Lo mismo con el enlace canónico, que es uno solo y siempre el mismo nodo. */
function canonica(url: string) {
  let enlace = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!enlace) {
    enlace = document.createElement('link')
    enlace.rel = 'canonical'
    document.head.appendChild(enlace)
  }

  enlace.href = url
}

export interface CabeceraDeDocumento {
  /** Lo que va antes de «· Vagamundo». Sin él, queda solo la marca. */
  titulo?: string
  descripcion: string
  /** La fotografía que se enseña al compartir el enlace, como ruta de `public`. */
  imagen?: string
}

export function useCabeceraDocumento({ titulo, descripcion, imagen }: CabeceraDeDocumento) {
  useEffect(() => {
    const completo = titulo ? `${titulo} · ${MARCA}` : `${MARCA} · atelier de viajes`
    const url = SITIO + window.location.pathname

    document.title = completo
    meta('name', 'description', descripcion)
    canonica(url)

    meta('property', 'og:site_name', MARCA)
    meta('property', 'og:type', 'website')
    meta('property', 'og:title', completo)
    meta('property', 'og:description', descripcion)
    meta('property', 'og:url', url)
    meta('property', 'og:locale', 'es_ES')
    if (imagen) meta('property', 'og:image', SITIO + imagen)

    meta('name', 'twitter:card', imagen ? 'summary_large_image' : 'summary')
    meta('name', 'twitter:title', completo)
    meta('name', 'twitter:description', descripcion)
    if (imagen) meta('name', 'twitter:image', SITIO + imagen)
  }, [titulo, descripcion, imagen])
}

