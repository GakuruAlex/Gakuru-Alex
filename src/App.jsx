import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import MainSection from '/src/body/MainSection'
import Certifications from '/src/components/certifications/Certifications'
import Projects from '/src/components/projects/Projects'
import Contact from '/src/components/contact/Contact'
import Labs from '/src/components/labs/Labs'
import './App.css'
import  homeIcon from './icons/home.svg';
import certificateIcon from './icons/certificate.svg'
import projectIcon from './icons/projects.svg'
import contactIcon from './icons/contact.svg'
import labsIcon from './icons/labs.svg'
function App() {
  return (
    <Router>
      <nav >
        <ul>
          <li>
            <NavLink to="/"  
             className={({isActive})=>(isActive ? "active_link": "inactive")} >
            <div className='nav-item'><img src={homeIcon} alt="Home"  className='icons'/>
             <span>Home</span></div></NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({isActive})=>(isActive ? "active_link": "inactive")}>
              <div className='nav-item'><img src={projectIcon} alt="Home"  className='icons'/>
             <span>Projects</span></div></NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({isActive})=>(isActive ? "active_link": "inactive")}>
              <div className='nav-item'><img src={certificateIcon} alt="Home"  className='icons'/>
             <span>Certifications</span></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/labs" className={({isActive})=>(isActive ? "active_link": "inactive")}>
            <div className='nav-item'><img src={labsIcon} alt="Home"  className='icons'/>
             <span>Labs</span></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive})=>(isActive ? "active_link": "inactive")}>
            <div className='nav-item'><img src={contactIcon} alt="Home"  className='icons'/>
             <span>Contact</span></div>
            </NavLink>
          </li>


        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );

}

export default App
