import "../css/project.css";
import { useState } from "react";
const Project = ({name, details, stacks, image_urls})=> {
const [currentImg, setCurrentImg] = useState(image_urls[0]);

const changeImage = (index) =>{
setCurrentImg([image_urls[index]])
}
    
    return (
        <div className="project">

                <div className="image-carousel">
                    <img src={currentImg} alt={name } />
                    <div className="image-dots">
                        {image_urls.map((image, index)=>(
                            <span className="dot" onClick={()=>changeImage(index) } key={index}></span>

                        ))}
                        
                    </div>
    
                </div>
                <div className="project-details">
                    <h2>{name}</h2>
                    <p>{details}</p>


                </div>
        </div>
    )
} 
export default Project;