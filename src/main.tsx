import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App'
import { SesionProvider } from '@/context/sesion-context'
import { ViajesProvider } from '@/context/viajes-context'
import '@/index.css'

// La sesión envuelve al catálogo porque el catálogo necesita saber si hay
// alguien dentro, y no al revés.
const raiz = document.getElementById('root')

if (!raiz) throw new Error('No está el div#root en index.html.')

createRoot(raiz).render(
  <StrictMode>
    <BrowserRouter>
      <SesionProvider>
        <ViajesProvider>
          <App />
        </ViajesProvider>
      </SesionProvider>
    </BrowserRouter>
  </StrictMode>
)
