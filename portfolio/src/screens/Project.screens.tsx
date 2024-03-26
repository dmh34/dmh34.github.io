import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioProjects from "../util/projects.util";
import Nav from "../components/Nav.component";
import { Button, Chip, Divider, Image, Link } from "@nextui-org/react";
import { ReactComponent as GithubIcon } from "../assests/GithubIcon.svg";
import { ReactComponent as AppIcon } from "../assests/AppIcon.svg";
import TechStack from "../components/TechStack.component";
import Icons from "../assests";

interface ProjectState {
  id: string;
  ProjectName: string;
  Language: string;
  TechStack: string[];
  ProjectDescription: string;
  Links: string[];
  ProjectImage: string[];
}
//TODO: Display error if project is not found
function Project() {
  const [project, setProject] = useState<ProjectState>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const current = PortfolioProjects.find((project) => project.id === id);
    console.info(`${current?.id} is the current project`);
    if (!current) {
      navigate("/Error");
    }
    setProject(current);
  });
  return (
    <div>
      <div className=" grid grid-cols-10 gap-4">
        <div className="col-span-10">
          <Nav />
        </div>
        <div className=" col-span-10 flex justify-center">
          <h1 className="text-3xl">{project?.ProjectName}</h1>
        </div>
        <div className="col-span-10 flex justify-center gap-2">
          <Chip color="primary" className="rounded-full">
            {project?.Language ? project?.Language : null}
          </Chip>

          <TechStack TechStack={project?.TechStack} />
        </div>
        <div className="col-span-10 flex justify-center gap-2">
          <Link href={project?.Links[0]} target="_blank">
            <Button
              isIconOnly
              className=" bg-primary shadow-primary rounded-full shadow-lg hover:shadow-none"
            >
              {Icons.GithubIcon}
            </Button>
          </Link>
          <Link href={project?.Links[1]} target="_blank">
            <Button
              isIconOnly
              className="bg-primary  shadow-primary rounded-full shadow-lg hover:shadow-none"
            >
              {Icons.AppIcon}
            </Button>
          </Link>
        </div>
        <div className="col-span-10">
          <Divider className="bg-primary w-full" />
        </div>
        <div className="col-span-10">
          <div className="flex justify-center gap-3">
            <h2 className="text-xl">About Project</h2>
          </div>
        </div>
        <div className="col-span-10 flex justify-center">
          <p>{project?.ProjectDescription}</p>
        </div>

        <div className=" col-span-10 flex justify-center gap-4">
          {project?.ProjectImage.map((image) => (
            <Image className="rounded-md" src={image} alt="project" />
          ))}
        </div>
        <div className=" col-span-10 flex justify-center gap-3">
          <Button
            className="bg-primary shadow-primary rounded-full shadow-lg hover:shadow-none"
            onClick={() => navigate("/projects")}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Project;
