import React from "react";
interface ProjectProps {
  name: string;
  description: string;
  link: string[];
  image: string[];
}
function Project(projectProps: ProjectProps) {
  return (
    <div>
      <div>
        <h1>{projectProps.description}</h1>
      </div>
      <div>
        <h2>{projectProps.name}</h2>
      </div>
      <div>
        {projectProps.link.map((link) => (
          <a href={link}>{link}</a>
        ))}
      </div>
      <div>
        {projectProps.image.map((image) => (
          <img src={image} alt="project" />
        ))}
      </div>
    </div>
  );
}
