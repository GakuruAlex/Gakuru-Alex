
const CertificationComp = (props) => {
return (
    <>
    <div className="responsive">
  <div className="certificates">
    
      <img src={props.img_link} alt={props.name} width="900" height="550"/>
    <div className="desc">{props.description}</div>
  </div>
</div>

    </>
)
}

export default CertificationComp