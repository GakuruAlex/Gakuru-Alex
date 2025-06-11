import "./Project.css"
const Project = ({image_url, name, description})=>{
return (
<div class="card">
  <img src={image_url} alt={name} />
  <div class="container">
    <h4><b>{name}</b></h4>
    <p>{description}</p>
  </div>
</div>
)
}

export default Project;