import { Route, Routes, HashRouter} from 'react-router-dom';
import "./typography.css";

import HomePage from './pages/HomePage';

import About from "./pages/About";
import all_certificates from "./resources/certificates";
import allProjects from './resources/allProjects';
import labs from './resources/labs';

import Pages from './pages/Pages';

function App() {

  return (
<HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certifications" element={<Pages resources = {all_certificates}  pageName = "certifications"/> } />
        <Route path="/projects" element={<Pages resources={allProjects}  pageName="projects" />} />
        <Route path="/labs" element={<Pages resources={labs} pageName="labs" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
    
  );

}

export default App
