import { Card, CardFooter, Image } from "@nextui-org/react";
import PortfolioProjects from "../util/projects.util";

function Projects() {
  //TODO: Replace placeholder code with actual project UI
  return (
    <div className=" flex gap-3 sm:flex-col md:flex-row">
      {PortfolioProjects.map((project) => (
        <Card key={project.id} isFooterBlurred isHoverable>
          <Image
            src={project.ProjectImage[0]}
            alt={project.ProjectImage[1]}
            width={300}
            height={300}
          />
          <CardFooter>
            <h4>{project.ProjectName}</h4>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
export default Projects;
