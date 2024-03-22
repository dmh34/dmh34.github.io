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

      <div className=" flex flex-wrap justify-center gap-3 p-4 sm:flex-col md:flex-row">
        {PortfolioProjects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <Card
              key={project.id}
              isFooterBlurred
              isPressable
              className="bg-primary rounded-full shadow-primary shadow-xl hover:shadow-none"
            >
              {/* <CardHeader>
                <h3>{project.ProjectName}</h3>
              </CardHeader> */}
              <Image className="rounded-full"
                src={project.ProjectImage[0]}
                alt={project.ProjectImage[1]}
                width={300}
                height={300}
              />
              <CardFooter className="bg-primary  absolute bottom-3 z-10 justify-center rounded-md opacity-85">
                <h4>{project.ProjectName}</h4>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Projects;
