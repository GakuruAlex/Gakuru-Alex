import "../css/resume.css"
import "../css/profile.css"
import Profile from "./Profile"
const Resume = ()=>{
    return (
        <>
        <div className="container">
        
        <div className="profile-container"><Profile/></div>
        <div className="content">
            <div className="professional-summary">
                <h2 className="professional-summary-title">Professional Sumary:</h2>
           
                <p className="professional-summary-body">   Computer Scientist passionate about software development, with a strong focus on software security. 
                </p>
            </div>
            <div className="education">
                <h2>Education</h2>
                <div> <p> School: Karatina University</p>
                 <p className="degree-date">Aug 2017 -  Dec 2021</p>
                    
            
                </div>
                <p className="degree-course"> Degree: BSc in Computer Science</p>
            </div>
            <div className="professional-experience">
                <h2 className="work-experience-title">Work Experience:</h2>

          
             </div>

        </div>
        </div>
        </>
    )

}
export default Resume