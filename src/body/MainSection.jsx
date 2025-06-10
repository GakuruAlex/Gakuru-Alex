import  './Main.css'
import RightSection from './Section'
import Resume from './Resume'
const MainSection = () => {
    return (
        <div className="main">
            <RightSection class_name= 'right'
            heading = "Alex Gakuru"
            sub_heading = "Computer Scientist"
            content_text ="
            I specialize in software development and cybersecurity, 
            with expertise in Python, Django, and cloud application development (AZ-204).
            Certified in Microsoft Identity and Compliance Solutions (SC-900), 
            I build secure, scalable software that integrates best practices in cybersecurity and network security.
            Passionate about innovation,
            I create solutions that are both resilient and forward-thinking.
            "
            />
            <Resume />
        </div>
    )
}

export default MainSection;