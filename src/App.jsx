import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import MainSection from '/src/body/MainSection'
import Certifications from '/src/components/certifications/Certifications'
import Projects from '/src/components/projects/Projects'
import Contact from '/src/components/contact/Contact'
import Labs from '/src/components/labs/Labs'
import './App.css'
import  homeIcon from './icons/home.svg';
function App() {
  return (
    <Router>
      <nav >
        <ul>
          <li>
            <NavLink to="/Gakuru-Alex/"  
             className={({isActive})=>(isActive ? "active_link": "inactive")} >
            <div className='nav-item'><img src={homeIcon} alt="Home"  className='icons'/>
             <span>Home</span></div></NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({isActive})=>(isActive ? "active_link": "inactive")}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({isActive})=>(isActive ? "active_link": "inactive")}>Certifications</NavLink>
          </li>
          <li>
            <NavLink to="/labs" className={({isActive})=>(isActive ? "active_link": "inactive")}>Labs</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive})=>(isActive ? "active_link": "inactive")}>Contact</NavLink>
          </li>


        </ul>
      </nav>

      <Routes>
        <Route path="/Gakuru-Alex/" element={<MainSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );

}

export default App
