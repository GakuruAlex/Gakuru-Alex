import Profile from "./Profile";
import NavBar from "../components/NavBar"
import "../css/projects.css"

const Projects = () =>{
    return (
        <div className="global-container">
            <Profile/>

            <div className="projects-container">
                <NavBar/>


            </div>
        </div>
    )
}
export default Projects;