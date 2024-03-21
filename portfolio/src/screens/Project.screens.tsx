import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioProjects from "../util/projects.util";
import Nav from "../components/Nav.component";
import { Button, Chip, Divider, Image } from "@nextui-org/react";
import { ReactComponent as GithubIcon } from "../assests/GithubIcon.svg";

import { ReactComponent as AppIcon } from "../assests/AppIcon.svg";

interface ProjectState {
  id: string;
  ProjectName: string;
  Language: string;
  TechStack: string[];
  ProjectDescription: string;
  Links: string[];
  ProjectImage: string[];
}

function Project() {
  const [project, setProject] = useState<ProjectState>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const current = PortfolioProjects.find((project) => project.id === id);
    console.info(`${current?.id} is the current project`);
    setProject(current);
  }, [id]);
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
            {project?.Language}
          </Chip>
          {project?.TechStack.map((tech) => (
            <Chip color="primary" className="rounded-full">
              {tech}
            </Chip>
          ))}
        </div>
        <div className="col-span-10 flex justify-center gap-2">
          <Button className=" bg-primary   rounded-full ">
            <GithubIcon />
          </Button>
          <Button className="bg-primary  rounded-full ">
            <AppIcon />
          </Button>
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
        {/* <div className="col-span-2 col-start-6">
          <p className="block">Tech Stack:</p>
          <ul className="text-right">
            {project?.TechStack.map((tech) => (
              <li key={project?.id}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 col-start-8">
          <p className="block">Languages:</p>
          <ul className="text-right">
            <li key={project?.id}>{project?.Language}</li>
          </ul>
        </div> */}

        <div className=" col-span-10 flex justify-center gap-4">
          {project?.ProjectImage.map((image) => (
            <Image className="rounded-md" src={image} alt="project" />
          ))}
        </div>
        <div className=" col-span-10 flex justify-center gap-3">
          <Button
            className="bg-primary rounded-full"
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
