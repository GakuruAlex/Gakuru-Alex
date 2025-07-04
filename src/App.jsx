import { Route, Routes, HashRouter} from 'react-router-dom';
import "./typography.css";
import Certifications from './pages/Certifications';
import { createBrowserHistory } from "history";
import HomePage from './pages/HomePage';
import Projects from "./pages/Projects";
import About from "./pages/About";
import Labs from "./pages/Labs";
function App() {

  return (
<HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
    
  );

}

export default App
