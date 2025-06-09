import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from '/src/nav/NavBar'
import Footer from '/src/footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Footer />
  </StrictMode>,
)
