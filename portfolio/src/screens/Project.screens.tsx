import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioProjects from "../util/projects.util";
import Nav from "../components/Nav.component";
import { Button, Divider, Image } from "@nextui-org/react";

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
      <div className="grid grid-cols-10 z gap-4">
        <div className="col-span-10">
          <Nav />
        </div>
        <div className="flex col-span-10 justify-center gap-2">
          <h1 className="text-2xl">{project?.ProjectName}</h1>
          <Button className="rounded-2xl"> Github</Button>{" "}
          {
            //TODO: Add link to github Replace with logo
          }
          <Button className="rounded-2xl">App</Button>{" "}
          {
            //TODO: Add link to live site Replace with logo
          }
        </div>
        <div className="col-span-10">
          <Divider className="w-full bg-white" />
        </div>
        <div className="col-span-10">
          <div className="flex justify-center gap-3">
            <h2>About Project</h2>
          </div>
        </div>
        <div className="col-span-5 flex justify-center">
          <p>{project?.ProjectDescription}</p>
        </div>
        <div className="col-start-6 col-span-2">
          <p className="block">Tech Stack:</p>
          <ul className="text-right">
            {project?.TechStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="col-start-8 col-span-2">
          <p className="block">Languages:</p>
          <ul className="text-right">
            <li>{project?.Language}</li>
          </ul>
          </div>

        <div className=" col-start-6 col-span-5 flex justify-center">
          {project?.ProjectImage.map((image) => (
            <Image className="rounded-md" src={image} alt="project" />
          ))}
        </div>
        <div className="flex col-span-10 justify-center gap-3">
          <Button onClick={() => navigate("/projects")}>Back</Button>
        </div>
      </div>
    </div>
  );
}

export default Project;
