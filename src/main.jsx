import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App'
import { ViajesProvider } from '@/context/viajes-context'
import '@/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ViajesProvider>
        <App />
      </ViajesProvider>
    </BrowserRouter>
  </StrictMode>
)
