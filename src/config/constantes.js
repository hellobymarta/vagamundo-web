// Todas las constantes de configuración viven aquí, en UPPER_SNAKE_CASE.
// Ningún componente escribe una URL a mano: la lee de este archivo.

// La URL de la API viene de la variable de entorno VITE_API_URL (.env).
export const API_URL = import.meta.env.VITE_API_URL

// Recurso principal de la API de la PEC 3.
export const RUTA_VIAJES = '/api/travels'

// Categorías del catálogo, para el desplegable del formulario.
export const CATEGORIAS = ['Costa', 'Ciudad', 'Montaña', 'Islas', 'Cultural']

// Un viaje recién empezado: de aquí parte el formulario de creación.
export const VIAJE_VACIO = {
  nombre: '',
  destino: '',
  descripcion: '',
  precio: '',
  duracionDias: '',
  itinerario: '',
  imagen: '',
  categoria: 'Costa',
  disponible: true,
}

// Textos que se repiten en varias pantallas.
export const MENSAJES = {
  CARGANDO: 'Cargando viajes…',
  SIN_VIAJES: 'Todavía no hay viajes en el catálogo.',
  ERROR_GENERICO: 'No hemos podido hablar con la API. Inténtalo de nuevo.',
  CREADO: 'Viaje añadido al catálogo.',
  ACTUALIZADO: 'Viaje actualizado.',
  ELIMINADO: 'Viaje eliminado del catálogo.',
}

// Imagen de reserva para los viajes que no traen foto.
export const IMAGEN_POR_DEFECTO =
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=70'
