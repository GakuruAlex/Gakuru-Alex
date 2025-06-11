import './CertificationComp.css'
const CertificationComp = (props) => {
;
return (
    <>
    <div className="responsive">
  <div className="certificates">
    
      <img src={props.img_link} alt={props.name}  className="certificate_img"/>
    <div className="desc">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <a href={props.verification_link} className="verify_link" target="_blank">Verify {props.name} </a>
      <ul className='skills'>
        <h3>Skills gained</h3>
        {props.skills.map((skill, index)=><li key={index}>{skill}</li>)}
      </ul>
      </div>
      
  </div>
</div>

    </>
)
}

export default CertificationComp