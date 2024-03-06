import React from "react";
import AboutData from "../util/about.util";
function About() {
  return (
    <div>
      <h1>About</h1>
      <p>{AboutData.Name}</p>
      <p>{AboutData.BrandStatment}</p>
      <p>{AboutData.ProgrammingLang}</p>
      <p>{AboutData.Frameworks}</p>
      <p>{AboutData.Skills}</p>
      <p>{AboutData.Contact}</p>
      <p>{AboutData.Resume}</p>
    </div>
  );
}

export default About;
