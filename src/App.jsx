import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Cabecera from '@/components/cabecera'
import Pie from '@/components/pie'
import Cargando from '@/components/cargando'

// Cada página se descarga solo cuando hace falta (React.lazy) y mientras
// tanto <Suspense> enseña el indicador de carga.
const Viajes = lazy(() => import('@/pages/viajes'))
const Viaje = lazy(() => import('@/pages/viaje'))
const Nuevo = lazy(() => import('@/pages/nuevo'))
const Editar = lazy(() => import('@/pages/editar'))
const NoEncontrada = lazy(() => import('@/pages/no-encontrada'))

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Cabecera />

      <main className="flex-1">
        <Suspense fallback={<Cargando texto="Preparando la página…" />}>
          <Routes>
            <Route path="/" element={<Viajes />} />
            <Route path="/viaje/:id" element={<Viaje />} />
            <Route path="/nuevo" element={<Nuevo />} />
            <Route path="/editar/:id" element={<Editar />} />
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
        </Suspense>
      </main>

      <Pie />
    </div>
  )
}
