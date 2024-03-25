import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import PortfolioProjects from "../util/projects.util";
import { Categories } from "../util/projects.util";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav.component";
import { ReactComponent as CloseIcon } from "../assests/CloseIcon.svg";
import { useState } from "react";
import Icons from "../assests";

function Projects() {
  //TODO: Add project filtering by category
  const [filteredProjects, setFilteredProjects] = useState([
    ...PortfolioProjects,
  ]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="grid grid-cols-10 gap-3">
      <div className="col-span-10 ">
        <Nav />
      </div>

      <div className="col-span-10 flex justify-center gap-3">
        <h1 className="text-3xl">Portfolio</h1>
        {/* </div>

        {/* <div className="col-span-10 flex justify-center gap-3">
          {Categories.map((category) => (
            <Chip key={category} color="primary" className="rounded-full">
              <div className="flex flex-row ">
                {category}
                <CloseIcon />
              </div>
            </Chip>
          ))} */}
      </div>
      <div className="col-span-10 flex justify-center gap-3">
        {Categories.map((category) => (
          <Button>{category}</Button>
        ))}
      </div>

      <div className=" flex flex-wrap justify-center gap-3 p-4 sm:flex-col md:flex-row col-span-8 col-start-2">
        {filteredProjects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <Card
              key={project.id}
              isFooterBlurred
              isPressable
              className="bg-primary  rounded-full shadow-primary shadow-xl hover:shadow-none"
            >
              {/* <CardHeader>
                <h3>{project.ProjectName}</h3>
              </CardHeader> */}
              <Image
                className="rounded-full"
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
