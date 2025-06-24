const Certification = ({course, school, skills, credential_link, image_url}) =>{
    
return (
    <div className="certification">
     <img src={image_url} alt={course} />
     <div className="certification-details">
        <h2>{course}</h2>
        <h3>{school}</h3>
        <a href={credential_link}>{course} verification link</a>
        <ul>
            {skills.map((skill, index)=>(
                <li key={index}>{skill}</li>
        ))}
        </ul>
       
     </div>
    </div>
)
}

export default Certification;