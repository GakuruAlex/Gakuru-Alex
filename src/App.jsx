import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import MainSection from '/src/body/MainSection'
import Certifications from '/src/components/certifications/Certifications'
import Projects from '/src/components/projects/Projects'
import Contact from '/src/components/contact/Contact'
import LabsProject from '/src/components/labs/LabsProject'
import './App.css'
import  homeIcon from './icons/home.svg';
import certificateIcon from './icons/certificate.svg'
import projectIcon from './icons/projects.svg'
import contactIcon from './icons/contact.svg'
import labsIcon from './icons/labs.svg'
import { createBrowserHistory } from "history";
import projects from  "/src/components/labs/projects"

const history = createBrowserHistory({ basename: "/Gakuru-Alex" });
function App() {
  return (
    <Router history={history}>
      <nav >
        <ul>
          <li>
            <NavLink to="/Gakuru-Alex/"  className={({isActive})=>(isActive ? "active_link": "inactive")} >
            <div className='nav-item'><img src={homeIcon} alt="Home"  className='icons'/>
             <span>Home</span></div></NavLink>
          </li>
          <li>
            <NavLink to="/Gakuru-Alex/projects" className={({isActive})=>(isActive ? "active_link": "inactive")}>
              <div className='nav-item'><img src={projectIcon} alt="Home"  className='icons'/>
             <span>Projects</span></div></NavLink>
          </li>
          <li>
            <NavLink to="/Gakuru-Alex/certifications" className={({isActive})=>(isActive ? "active_link": "inactive")}>
              <div className='nav-item'><img src={certificateIcon} alt="Home"  className='icons'/>
             <span>Certifications</span></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Gakuru-Alex/labs" className={({isActive})=>(isActive ? "active_link": "inactive")}>
            <div className='nav-item'><img src={labsIcon} alt="Home"  className='icons'/>
             <span>Labs</span></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Gakuru-Alex/contact" className={({isActive})=>(isActive ? "active_link": "inactive")}>
            <div className='nav-item'><img src={contactIcon} alt="Home"  className='icons'/>
             <span>Contact</span></div>
            </NavLink>
          </li>


        </ul>
      </nav>

      <Routes>
        <Route path="/Gakuru-Alex/" element={<MainSection />} />
        <Route path="/Gakuru-Alex/projects" element={<Projects />} />
        <Route path="/Gakuru-Alex/certifications" element={<Certifications />} />
        <Route path="/Gakuru-Alex/labs" element={<LabsProject projects= {projects} />} />
        <Route path="/Gakuru-Alex/contact" element={<Contact />} />

      </Routes>
    </Router>
  );

}

export default App
