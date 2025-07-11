import "../css/certifications.css"
import Profile from "./Profile";
import Certification from "../components/Certification"
import Previous from "../assets/previous.png"
import Next from "../assets/next.png"
import { useState } from "react";
import all_certificates from "../resources/certificates";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

const handleClick=(index, button_name, setCurrentCertification, setCurrentIndex)=>{
    let new_index = index
    if (button_name === "next"){
        new_index = index + 1;
    }
    else if (button_name === "prev"){
        new_index = index - 1;   
    }
    setCurrentIndex(new_index);
    setCurrentCertification(all_certificates[new_index])
}



const Certifications = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCertification, setCurrentCertification] = useState(all_certificates[currentIndex]);
    const showNextButton =  (currentIndex >= 0 ) && (currentIndex < all_certificates.length - 1)
    const showPrevButton = (currentIndex > 0 ) && (currentIndex <= all_certificates.length - 1)
 
    return (
        <div className="certifications-container">

            <Profile/>
            


            <div className="certifications">
                    <NavBar/>

                    <Certification  
                    image_url={currentCertification["image_url"]}
                    course={currentCertification["course"]}
                    credential_link={currentCertification["credential_link"]}
                    school={currentCertification["school"]}
                    skills={currentCertification["skills"]}

                    nextButton = { showNextButton ?  (<Button index={currentIndex} button_icon={Next} 
                        setCurrentCertification={setCurrentCertification} 
                        button_name="next"
                        handleClick={handleClick}
                            setCurrentIndex = {setCurrentIndex}
                         />)  : null}
                    prevButton = { showPrevButton ? (<Button index={currentIndex} button_icon={Previous} 
                        setCurrentCertification={setCurrentCertification} 
                        button_name="prev"
                        handleClick={handleClick}
                            setCurrentIndex = {setCurrentIndex}
                         />) : null }

                    />

            </div>

        </div>
    )
}

export default Certifications;