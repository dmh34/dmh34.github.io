import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import PortfolioProjects from "../util/projects.util";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav.component";

function Projects() {
  //TODO: Add project filtering by category

  return (
    <div className="">
      <Nav />

      <div className=" flex flex-wrap gap-3 p-4 sm:flex-col md:flex-row">
        {PortfolioProjects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <Card
              key={project.id}
              isFooterBlurred
              isPressable
              className="bg-secondary "
            >
              <CardHeader>
                <h3>{project.ProjectName}</h3>
              </CardHeader>
              <Image
                src={project.ProjectImage[0]}
                alt={project.ProjectImage[1]}
                width={300}
                height={300}
              />
              {/* <CardFooter className="">
                <h4>{project.ProjectName}</h4>
              </CardFooter> */}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Projects;
