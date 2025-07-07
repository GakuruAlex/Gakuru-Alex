import { useState, useEffect } from "react";
import "../css/certification.css";
import "../css/project.css";

const Page = ({skills, verify_link, name, details, image_urls, page_name})=>{
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
                    image_urls.length > 1 && <div className={`${page_name}-image`}> 
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
                <p>{details}</p>
                
                <ul className={`${page_name}-skills`}>
                    <h2>Skills</h2>
                    {
                        skills.map((skill, index)=>(
                            <li key={index}>{skill}</li>

                        ))
                    }
                </ul>
                {
                    verify_link && (<a href={verify_link} className={`${page_name}-verify-link`} target="_blank">Verify</a>)
                }


            </div>

        </div>
    )

}

export default Page;