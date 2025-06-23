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
                location = "Naivasha, Kenya"
                cadre ="Information Communication technology Personnel"
                duties = {[

                    "Trained teachers from 30 primary schools on how to use  NetSupport in teaching.",
                    "Conducted 50+ in-classroom support sessions for teachers  on technology integration.",
                    "Achieved a 90% teacher satisfaction rate for in-classroom  technology support.",
                    "Provided direct support to 100% of schools participating in  the Digital Literacy Programme in the region.",
                    "Trained 50 teachers on best practices for safe and ethical  technology use.", 
                    "Resolved over 100 first-line ICT support requests for staff."
                ]}
            />,
            <Experience
            title=" Naivsaha Sub-County Referral Hospital"
            cadre = "ICT Officer"
            title_class="moh-experience"
            duration="June 2021 - Dec 2021"
            location="Naivasha, Kenya"
            duties = {
                [
                     "Successfully installed and configured 50+ new hardware devices (e.g., computers, printers, projectors) across various departments annually.",
                    " Completed software rollouts to 20+ users within 2 hours of request.",
                    "Ensured 99% uptime for all CCTV recording and monitoring systems through proactive maintenance.",
                    "Resolved an average of 15 software-related issues per week for end-users.",
                ]
            }

            />,
            <Experience 
            title="CynteQ Technologies"
            cadre="ICT Officer"
            title_class="cynteq-experience"
            duration="Aug 2018 - June 2021"
            location ="Nairobi, Kenya"
            duties ={
                [
                     "Maintained 99.9% network uptime for critical business operations.",
                     "Oversaw the installation of 10 new CCTV cameras, expanding surveillance coverage by 25%.",
                     "Maintained an average hardware setup time of under 30 minutes per workstation.",

            ]}
            />
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
            <h2 className="work-experience-title">Work Experience</h2>

            <div className="professional-experience">
                
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