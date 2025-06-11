import "./Labs.css"; 

const LabProject = ({ name, description, image_link }) => {
  return (
    <div className="lab-project">
      <img src={image_link}  className="project-image" />
      <h2 className="project-name">{name}</h2>
      <p className="project-description">{description}</p>
    </div>
  );
};

const LabsProject = ({ projects }) => {
  return (
    <div className="lab-projects">
      {projects.map((project, index) => (
        <LabProject
          key={index}
          name={project.name}
          description={project.description}
          image_link={project.image_link}
        />
      ))}
    </div>
  );
};

export default LabsProject;
