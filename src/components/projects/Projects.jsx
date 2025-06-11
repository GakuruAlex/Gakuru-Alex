import './Projects.css'
import FlashCardApp from "./flashcard app.png"
import QuizApp from "./quiz app.png"
import Passwordmanager from "./password manager.png"
import Project from "./Project"
const Projects = () => {
    return (
        <>
        <h2>Projects</h2>
        <div className="projects-container">
        <Project  name="FlashCard App"  description="" image_url={FlashCardApp} />
        <Project name="Quiz App" description="" image_url={QuizApp}/>
        <Project name="PasswordManager" description="" image_url={Passwordmanager}/>
        </div>

        </>
    )
}

export default Projects;