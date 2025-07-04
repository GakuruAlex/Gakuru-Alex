import Profile from "./Profile";
import NavBar from "../components/NavBar";
import Page from "../components/Page";
import { useEffect, useState } from "react";
import Next from "../assets/next.png";
import Prev from "../assets/previous.png";
const Pages = ({resources, pageName})=>{
    const [currentIndex, setCurrentIndex] = useState(0)
    let currentObject = resources[currentIndex]
    useEffect(()=>{
        currentObject = resources[currentIndex]

    }, [currentIndex])
return (
    <div className="main-component">
        <div className='profile-${pageName}'>
            <Profile/>
        </div>
        <div className="content-component">
            <NavBar/>
            <div className='${pageName}-container'>
                 {
                currentIndex >= 0 &&  currentIndex < resources.length - 1 &&
                <a className="next-prev" onClick={()=>setCurrentIndex((Index) => Index + 1)}><img src={Next} alt="next" /></a>
                }

                <Page 
                page_name = {pageName}
                name = {resources.name}
                

                />
                {
                currentIndex >0 && currentIndex <= resources.length -1 &&
                <a className="next-prev" onClick={()=>setCurrentIndex((currentIndex) => currentIndex - 1)}><img src={Prev} alt="prev" /></a>

              }

            </div>

        </div>
    </div>
)
}
export default Pages;