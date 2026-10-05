import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Cabecera from '@/components/cabecera'
import Pie from '@/components/pie'
import Cargando from '@/components/cargando'
import Cursor from '@/components/cursor'
import RutaPrivada from '@/components/ruta-privada'
import { useSubirArriba } from '@/hooks/use-subir-arriba'
import { PATRONES } from '@/config/rutas'

// Cada página se descarga solo cuando hace falta (React.lazy) y mientras
// tanto <Suspense> enseña el indicador de carga.
const Viajes = lazy(() => import('@/pages/viajes'))
const Viaje = lazy(() => import('@/pages/viaje'))
const Destinos = lazy(() => import('@/pages/destinos'))
const Destino = lazy(() => import('@/pages/destino'))
const Nuevo = lazy(() => import('@/pages/nuevo'))
const Editar = lazy(() => import('@/pages/editar'))
const Entrar = lazy(() => import('@/pages/entrar'))
const Diario = lazy(() => import('@/pages/diario'))
const Cronica = lazy(() => import('@/pages/cronica'))
const NuevaCronica = lazy(() => import('@/pages/nueva-cronica'))
const EditarCronica = lazy(() => import('@/pages/editar-cronica'))
const Reservas = lazy(() => import('@/pages/reservas'))
const Panel = lazy(() => import('@/pages/panel'))
const Legal = lazy(() => import('@/pages/legal'))
const NoEncontrada = lazy(() => import('@/pages/no-encontrada'))

// Las páginas que piden sesión van envueltas en <RutaPrivada>. La API vuelve a
// comprobarlo en cada petición: esto es para que no se vea un formulario que
// luego no se va a poder enviar.
export default function App() {
  useSubirArriba()

  return (
    <div>
      <Cursor />

      {/* Lo primero que alcanza el tabulador: quien navega con teclado o con
          lector de pantalla se salta la cabecera y entra directo al contenido.
          Solo se ve mientras tiene el foco. */}
      <a href="#principal" className="EnlaceDeSalto">
        Saltar al contenido
      </a>

      <Cabecera />

      <main id="principal">
        <Suspense fallback={<Cargando texto="Preparando la página…" />}>
          <Routes>
            {/* Abiertas a cualquiera */}
            <Route path={PATRONES.inicio} element={<Viajes />} />
            <Route path={PATRONES.viaje} element={<Viaje />} />
            <Route path={PATRONES.destinos} element={<Destinos />} />
            <Route path={PATRONES.destino} element={<Destino />} />
            <Route path={PATRONES.diario} element={<Diario />} />
            <Route path={PATRONES.cronica} element={<Cronica />} />
            <Route path={PATRONES.entrar} element={<Entrar />} />
            <Route path={PATRONES.legal} element={<Legal />} />

            {/* Solo con la sesión iniciada */}
            <Route
              path={PATRONES.nuevo}
              element={
                <RutaPrivada>
                  <Nuevo />
                </RutaPrivada>
              }
            />
            <Route
              path={PATRONES.editar}
              element={
                <RutaPrivada>
                  <Editar />
                </RutaPrivada>
              }
            />
            <Route
              path={PATRONES.nuevaCronica}
              element={
                <RutaPrivada>
                  <NuevaCronica />
                </RutaPrivada>
              }
            />
            <Route
              path={PATRONES.editarCronica}
              element={
                <RutaPrivada>
                  <EditarCronica />
                </RutaPrivada>
              }
            />
            <Route
              path={PATRONES.reservas}
              element={
                <RutaPrivada>
                  <Reservas />
                </RutaPrivada>
              }
            />
            <Route
              path={PATRONES.panel}
              element={
                <RutaPrivada>
                  <Panel />
                </RutaPrivada>
              }
            />

            <Route path={PATRONES.noEncontrada} element={<NoEncontrada />} />
          </Routes>
        </Suspense>
      </main>

      <Pie />
    </div>
  )
}
