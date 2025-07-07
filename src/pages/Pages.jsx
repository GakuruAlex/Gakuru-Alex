import Profile from "./Profile";
import NavBar from "../components/NavBar";
import Page from "../components/Page";
import { useEffect, useState } from "react";
import Next from "../assets/next.png";
import Prev from "../assets/previous.png";
import "../css/certifications.css";
import "../css/projects.css";
import "../css/labs.css";
const Pages = ({resources, pageName})=>{
    const [currentIndex, setCurrentIndex] = useState(0)
    const  currentObject = resources[currentIndex]
    useEffect(()=>{
        setCurrentIndex(0)
    }, [resources, pageName])

return (
    <div className="pages-component">
        <div className={`profile-${pageName}`}>
            <Profile/>
        </div>
        <div className="content-component">
            <NavBar/>
            <div className={`${pageName}-container`}>
                 {
                currentIndex >= 0 &&  currentIndex < resources.length - 1 &&
                <a className={`${pageName}-next-prev`} onClick={()=>setCurrentIndex((Index) => Index + 1)}><img src={Next} alt="next" key={currentIndex}/></a>
                }
                
                    <Page 
                    image_urls={currentObject["image_urls"]}
                    name={currentObject["name"]}
                    verify_link={currentObject["verify_url"]}
                    details={currentObject["details"]}
                    skills={currentObject["skills"]}
                    id = {currentObject["id"]}
                    page_name={pageName}
                    />
                
                {
                currentIndex >0 && currentIndex <= resources.length -1 &&
                <a className={`${pageName}-next-prev`} onClick={()=>setCurrentIndex((currentIndex) => currentIndex - 1)} key={currentIndex}><img src={Prev} alt="prev" /></a>

              }

            </div>

        </div>
    </div>
)
}
export default Pages;