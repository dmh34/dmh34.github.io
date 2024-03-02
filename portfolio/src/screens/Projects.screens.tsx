import React, { useEffect } from "react";
import { useState } from "react";
import PortfolioProjects from "../util/project.util";

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  link: string[];
  image: string[];
}

function Project(projectProps: ProjectProps[]) {
  //TODO: Replace placeholder code with actual project UI
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projectProps.map((project) => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link[0]}>{project.link[1]}</a>
            <img src={project.image[0]} alt={project.image[1]} />
          </div>
        ))}
      </div>
    </div>
  );
}
