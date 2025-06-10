import { useState } from 'react'
import NavBar from '/src/nav/NavBar'
import Footer from '/src/footer/Footer'
import MainSection from '/src/body/MainSection'
import Certifications from '/src/components/certifications/Certifications'
import Projects from '/src/components/projects/Projects'


function App() {
   const [current_page, setCurrentPage] = useState('Home'); // Default to 'home'

  // Function to handle navigation clicks
  const navigate_to = (page) => {
    setCurrentPage(page);
  };

  // Function to render the appropriate component based on currentPage state
  const renderPage = () => {
    switch (current_page) {
      case 'Home':
        return <MainSection />;
      case 'Projects':
        return <Projects />;
      case 'Certifications':
        return <Certifications />;
      case 'Labs':
        return <Labs />;
      case 'Contact':
        return <Contact />;
    }
  };
  return (
    <>
    <NavBar  current_page={current_page} navigate_to={navigate_to} />
    {renderPage()}
    <Footer />
    </>
  )

}

export default App
