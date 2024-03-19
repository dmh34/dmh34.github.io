import React from "react";
interface SkillDisplayProps {
  skill: string[];
  title?: string;
}
function SkillDisplay(skill: SkillDisplayProps) {
  return (
    <div>
      {skill.title ? <h1>{skill.title}</h1> : null}
      <ul>
        {skill.skill.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default SkillDisplay;
