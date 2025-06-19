import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './typography.css'
import AppMain from "./AppMain"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppMain/>
  </StrictMode>,
)
