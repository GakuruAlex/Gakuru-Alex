import "../css/resume.css"
import "../css/profile.css"
import Profile from "./Profile"
import Experience from "../components/Experience"
const Resume = ()=>{
        const experiences = [
            <Experience 
                title="State Department for Basic Education"
                title_class= "moe-experience"
                duration= "May 2024 - May 2025"
                location = "Naivasha"
                duties = {[

                    "Trained teachers from 30 primary schools on how to use  NetSupport in teaching.",
                    "Conducted 50+ in-classroom support sessions for teachers  on technology integration.",
                    "Achieved a 90% teacher satisfaction rate for in-classroom  technology support.",
                    "Provided direct support to 100% of schools participating in  the Digital Literacy Programme in the region.",
                    "Trained 50 teachers on best practices for safe and ethical  technology use.", 
                    "Resolved over 100 first-line ICT support requests for staff."
                ]}
            />,
        ]
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
                
                    {experiences.map((experience, index) =>(
                        <div key={index}>
                        {experience}
                        </div>
                        ))
                        }
             </div>

        </div>
        </div>
        </>
    )

}
export default Resume