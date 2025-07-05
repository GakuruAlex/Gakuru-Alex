import { useState, useEffect } from "react";
import "../css/certification.css";

const Page = ({skills, verify_link,  name, details, image_urls, page_name})=>{
    const [imgIndex, setImgIndex] = useState(0)
    let currentImg = image_urls[imgIndex]

    useEffect(()=>{
        currentImg = image_urls[imgIndex]
    }, [imgIndex])


    return(
        <div className={page_name}>
            <div className={`${page_name}-images`}>
                {
                    
                    image_urls.length === 1 && <img src={currentImg} key={imgIndex} />
                }

                {
                    image_urls.length > 1 && <div> 
                        <img src={currentImg} key={imgIndex} />
                        <div className="image-dots">
                        {image_urls.map((image, index)=>(
                        <span className="dot" onClick={()=>setImgIndex(index) } key={index}></span>
                        ))}
                        
                    </div>
                    </div>
                    
                }

            </div>
            <div className={`${page_name}-details`}>
                <h2>Name: {name}</h2>
                <p>Details: {details}</p>
                <a href={verify_link} className="verify-link">verify</a>
                <ul>
                    {
                        skills.map((skill, index)=>(
                            <li key={index}>{skill}</li>

                        ))
                    }
                </ul>


            </div>

        </div>
    )

}

export default Page;