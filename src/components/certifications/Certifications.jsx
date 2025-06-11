import CertificationComp from './CertificationComp'
import CSharpCertificate from './my_certificates/FoundationalCSharp.png'
import SoftwareEngineeringCert from './my_certificates/Moringa Software Engineering.png'
import './CertificationComp.css'
import { useState } from 'react'


const Certifications = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Store certificate components in an array
  const slides = [
    <CertificationComp
      img_link={CSharpCertificate}
      name="Foundational C# with Microsoft"
      description="An introductory course covering C# fundamentals, object-oriented concepts, and essential coding practices."
    />,
    <CertificationComp
      img_link={SoftwareEngineeringCert}
      name="Foundational C# with Microsoft"
      description="A Software Engineering Course covering both front-end and back-end technologies."
    />,
    
  ];

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow">
      <button onClick={prevSlide}>❮ Prev</button>
      <div className="slide">{slides[slideIndex]}</div>
      <button onClick={nextSlide}>Next ❯</button>
    </div>
  );
};

export default Certifications;