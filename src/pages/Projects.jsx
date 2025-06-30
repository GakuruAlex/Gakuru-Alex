import Profile from "./Profile";
import NavBar from "../components/NavBar";
import "../css/projects.css";
import allProjects from "../resources/allProjects";
import { useState, useEffect } from "react";
import Project from "../components/Project";

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
                <button className="next" onClick={()=>setCurrentIndex((Index) => Index + 1)}>&#10095;</button>
                 

                <Project 
                key={currentIndex}
                name={currentProject["projectName"]}
                details={currentProject["details"]}
                image_urls = {currentProject["image_urls"]}
                git_url = {currentProject["git_url"]}
                stacks={currentProject["stacks"]}
                />

              <a className="prev" onClick={()=>setCurrentIndex((currentIndex) => currentIndex - 1)}>&#10094;</a>




            </div>
        </div>
    )
}
export default Projects;