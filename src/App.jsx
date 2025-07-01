import { Route, Routes, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import "./typography.css";
import Certifications from './pages/Certifications';
import { createBrowserHistory } from "history";
import HomePage from './pages/HomePage';
import Projects from "./pages/Projects";
import About from "./pages/About";
import Labs from "./pages/Labs";
const history = createBrowserHistory({ basename: "/Gakuru-Alex" });
function App() {
  return (
    <HistoryRouter history={history}>
       
        <Routes>
        <Route path="/Gakuru-Alex/" element={<HomePage />} />
        <Route path="/Gakuru-Alex/certifications" element={<Certifications />} />
        <Route path="/Gakuru-Alex/projects" element={<Projects />} />
        <Route path="/Gakuru-Alex/labs" element={<Labs />} />
        <Route path="/Gakuru-Alex/about" element={<About />} />



      </Routes>
        </HistoryRouter>
    

      
    
  );

}

export default App
