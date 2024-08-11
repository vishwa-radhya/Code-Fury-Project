import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GeoLocationProvider } from './contexts/geo-loc.context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GeoLocationProvider>
    <App />
    </GeoLocationProvider>
  </StrictMode>,
)
