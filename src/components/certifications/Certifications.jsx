import CertificationComp from './CertificationComp'
import CSharpCertificate from './my_certificates/FoundationalCSharp.png'
import SoftwareEngineeringCert from './my_certificates/Moringa Software Engineering.png'
import Sc900 from './my_certificates/Microsoft Certified Security Compliance and Identity Fundamentals.png'
import CareerEssentialsInSoftEngineering from './my_certificates/Career Essential in Software Development.png'
import CareerEssentialsInCybersecurity from './my_certificates/Career Essentials in Cybersecurity.png'
import './CertificationComp.css'
import { useState } from 'react'
import certifications from './skills_gained'


const Certifications = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    <CertificationComp
      img_link={CSharpCertificate}
      name="Foundational C# with Microsoft"
      description="An introductory course covering C# fundamentals, object-oriented concepts, and essential coding practices."
      verification_link = "https://www.freecodecamp.org/certification/AlexGakuru/foundational-c-sharp-with-microsoft"
      skills = {certifications['Foundational C#']}
    />,
    <CertificationComp
      img_link={CareerEssentialsInSoftEngineering}
      name="Career Essentials in Software Engineering"
      description="The Career Essentials in Software Development course by Microsoft and LinkedIn teaches foundational skills for a career in software development."
      verification_link = "https://www.linkedin.com/learning/certificates/0a77de711e14c431fa8add9e3ca384b5a0252aa34e76beb3fa5e261692f0890b?trk=share_certificate"
      skills = {certifications['Career Essentials in Software Engineering']}
    />,
    <CertificationComp
      img_link={CareerEssentialsInCybersecurity}
      name="Career Essentials in Cybersecurity"
      description="The Career Essentials in Software Development course by Microsoft and LinkedIn teaches foundational skills for a career in software development."
      verification_link = "https://www.linkedin.com/learning/certificates/bb11927dbaeade946311b1a057747d864d1abadb0811b8d27227cef5552b0769?trk=share_certificate"
      skills = {certifications['Career Essentials in Cybersecurity']}
    />,
    
    <CertificationComp
      img_link={Sc900}
      name="Microsoft Certified Security Compliance and Identity Fundamentals"
      description="Covers the fundamentals of security, compliance, and identity in Microsoft cloud services."
      verification_link = "https://learn.microsoft.com/api/credentials/share/en-us/AlexGakuru-5788/84B4BFF580DFEE11?sharingId=BA9117F72F5AB5B5"
      skills = {certifications['SC-900']}
    />,
    <CertificationComp
      img_link={SoftwareEngineeringCert}
      name="Web Technologies"
      description="A Software Engineering Course covering both front-end and back-end technologies."
      verification_link = "#"
      skills = {certifications['Software Engineering']}

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