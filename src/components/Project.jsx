import "../css/project.css";
import { useState } from "react";
const Project = ({name, details, stacks, image_urls})=> {
const [imgIndex, setImgIndex] = useState(0);
const [currentImg, setCurrentImg] = useState(image_urls[imgIndex]);
    
    return (
        <div className="project">

                <div className="image-carousel">
                    <img src={currentImg} alt={name } />
    
                </div>
                <div className="project-details">
                    <h2>{name}</h2>
                    <p>{details}</p>


                </div>
        </div>
    )
} 
export default Project;