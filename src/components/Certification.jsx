import "../css/certification.css"
const Certification = ({course, school, skills, credential_link, image_url, nextButton, prevButton}) =>{
    
return (
    <div className="certification-container">
    <div className="certification">
        {nextButton}
     <img src={image_url} alt={course} className="certificate-img"/>
     {prevButton}
    
          <ul className="skills">
             <p>Skills:</p>
            {skills.map((skill, index)=>(
                <li key={index}>{skill}</li>
        ))}
        </ul>

    </div>
         <div className="certification-details">
        <div className="details">
        <h2 className="course">Course: {course}</h2>
        <h3 className="school">Institution: {school}</h3>
        <a href={credential_link} className="verify-link" target="_blank"> Verification link</a>
        </div>
       
   
       
     </div>
    </div>
)
}

export default Certification;