import "./Project.css"
const Project = ({image_url, name, description, github_link})=>{
return (
<div class="card">
  <img src={image_url} alt={name} />
  <div class="container">
    <h4><b>{name}</b></h4>
    <p>{description}</p>
    <a href={github_link} target="_blank">View on GitHub</a>
  </div>
</div>
)
}

export default Project;