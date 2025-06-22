import "../css/resume.css"
import "../css/profile.css"
import Profile from "./Profile"
const Resume = ()=>{
    return (
        <>
        <div className="container">
        
        <div className="profile-container"><Profile/></div>
        <div className="content">
        <div className="education">
            <h2>Education</h2>
            <div> <p>Karatina University</p>
                 <p className="degree-date">Aug 2017 -  Dec 2021</p>
            </div>
           
            <p className="degree-course">BSc in Computer Science</p>
        </div>
        </div>
        </div>
        </>
    )

}
export default Resume