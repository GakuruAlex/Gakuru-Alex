import { Route, Routes, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import "./typography.css"
import Certifications from './pages/Certifications';
import { createBrowserHistory } from "history";
import HomePage from './pages/HomePage';
const history = createBrowserHistory({ basename: "/Gakuru-Alex" });
function App() {
  return (
    <HistoryRouter history={history}>
       
        <Routes>
        <Route path="/Gakuru-Alex/" element={<HomePage />} />
        <Route path="/Gakuru-Alex/certifications" element={<Certifications />} />
        {/* <Route path="/Gakuru-Alex/projects" element={<Projects />} />
        
        <Route path="/Gakuru-Alex/labs" element={<LabsProject projects= {projects} />} />
        <Route path="/Gakuru-Alex/contact" element={<Contact />} /> */}

      </Routes>
        </HistoryRouter>
    

      
    
  );

}

export default App
