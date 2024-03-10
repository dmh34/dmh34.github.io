import PortfolioProjects from "../util/projects.util";

function Projects() {
  //TODO: Replace placeholder code with actual project UI
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {PortfolioProjects.map((project) => (
          <div key={project.id}>
            <h2>{project.ProjectName}</h2>
            <p>{project.ProjectDescription}</p>
            <a href={project.Links[0]}>{project.Links[1]}</a>
            <img src={project.ProjectImage[0]} alt={project.ProjectImage[1]} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
