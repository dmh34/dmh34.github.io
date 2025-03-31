import { Chip } from "@heroui/react";
import React from "react";

interface TechStackProps {
  TechStack?: string[];
}

function TechStack(teckStack: TechStackProps) {
  return (
    <>
      {teckStack.TechStack?.map((tech) => (
        <Chip key={tech} className="bg-primary text-black">
          {tech}
        </Chip>
      ))}
    </>
  );
}

export default TechStack;
