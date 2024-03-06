import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PortfolioProjects from "../util/projects.util";

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
  useEffect(() => {
    const current = PortfolioProjects.find((project) => project.id === id);
    console.info(`{current} is the current project`);
    setProject(current);
  }, [id]);
  return (
    <div>
      <div>
        <h1>{project?.ProjectName}</h1>
      </div>
      <div>
        <h2>{project?.ProjectDescription}</h2>
      </div>
      <div>{project?.Links.map((link) => <a href={link}>{link}</a>)}</div>
      <div>
        {project?.ProjectImage.map((image) => (
          <img src={image} alt="project" />
        ))}
      </div>
    </div>
  );
}

export default Project;
