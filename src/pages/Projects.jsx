import Profile from "./Profile";
import NavBar from "../components/NavBar";
import "../css/projects.css";
import allProjects from "../resources/allProjects";
import { useState, useEffect } from "react";
import Project from "../components/Project";
import Next from "../assets/next.png";
import Prev from "../assets/previous.png";

const Projects = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);
    let currentProject = allProjects[currentIndex];
    useEffect(()=>{
        currentProject = allProjects[currentIndex]

    }, [currentIndex]);



    return (
        <div className="global-container">
            <Profile/>

            <div className="projects-container">
                <NavBar/>
                <div className="row-container">
                <a className="next-prev" onClick={()=>setCurrentIndex((Index) => Index + 1)}><img src={Next} alt="next" /></a>
                 

                <Project 
                key={currentIndex}
                name={currentProject["projectName"]}
                details={currentProject["details"]}
                image_urls = {currentProject["image_urls"]}
                git_url = {currentProject["git_url"]}
                stacks={currentProject["stacks"]}
                />

              <a className="next-prev" onClick={()=>setCurrentIndex((currentIndex) => currentIndex - 1)}><img src={Prev} alt="prev" /></a>

                </div>
               



            </div>
        </div>
    )
}
export default Projects;