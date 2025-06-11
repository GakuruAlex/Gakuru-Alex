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
        <Project  
        name="FlashCard App"
        description="A FlashCardApp is a digital tool designed to help users create, study, and review flashcards for learning and memorization." 
        image_url={FlashCardApp} 
        github_link= "https://github.com/GakuruAlex/FlashCardApp"
        />
        <Project 
        name="Quiz App" 
        description="A Quiz App is an interactive application designed to test users' knowledge on various topics through true/false statements." 
        image_url={QuizApp}
        github_link = "https://github.com/GakuruAlex/quiz_app_v_2"
        />
        <Project
         name="PasswordManager" 
         description="A password manager is a software tool designed to securely store, manage, and autofill user credentials for various online accounts. " 
         image_url={Passwordmanager}
         github_link ="https://github.com/GakuruAlex/PasswordManager"
         />
        </div>

        </>
    )
}

export default Projects;