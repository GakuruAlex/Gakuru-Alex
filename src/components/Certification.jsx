import "../css/certification.css"
const Certification = ({course, school, skills, credential_link, image_url}) =>{
    
return (
    <div className="certification">
     <img src={image_url} alt={course} className="certificate-img"/>
     <div className="certification-details">
        <div className="details">
        <h2 className="course">Course: {course}</h2>
        <h3 className="school">Institution: {school}</h3>
        <p>Verification link <a href={credential_link} className="verify-link">{course} </a></p>
        </div>
       
        <ul className="skills">
            {skills.map((skill, index)=>(
                <li key={index}>{skill}</li>
        ))}
        </ul>
       
     </div>
    </div>
)
}

export default Certification;