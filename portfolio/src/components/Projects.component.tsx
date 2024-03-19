import { Button, Divider, Image } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ProjectsProps {
  project: {
    ProjectName: string;
    ProjectDescription: string;
    TechStack: string[];
    Language: string;
    ProjectImage: string[];
  };
}

function Projects(projects: ProjectsProps) {
  const navigate = useNavigate();
  return (
    <div className="z grid grid-cols-10 gap-4">
      {/* <div className="col-span-10"></div>
      <div className="col-span-10 flex justify-center gap-2">
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
      <div className="col-span-2 col-start-6">
        <p className="block">Tech Stack:</p>
        <ul className="text-right">
          {project?.TechStack.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
      <div className="col-span-2 col-start-8">
        <p className="block">Languages:</p>
        <ul className="text-right">
          <li>{project?.Language}</li>
        </ul>
      </div>

      <div className=" col-span-5 col-start-6 flex justify-center">
        {project?.ProjectImage.map((image) => (
          <Image className="rounded-md" src={image} alt="project" />
        ))}
      </div>
      <div className="col-span-10 flex justify-center gap-3">
        <Button onClick={() => navigate("/projects")}>Back</Button> */}
      {/* </div> */}
    </div>
  );
}

export default Projects;
