import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from '/src/nav/NavBar'
import Footer from '/src/footer/Footer'
import MainSection from '/src/body/MainSection'
import App from "./App"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  </StrictMode>,
)
