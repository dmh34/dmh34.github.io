import AboutData from "../util/about.util";
import "../../src/output.css";
import Nav from "../components/Nav.component";
import SkillDisplay from "../components/SkillDisplay.component";

function About() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-full">
        <Nav />
      </div>
      <div className="col-span-5 flex justify-center"></div>
      <div className="col-span-5 flex justify-center">
        <h2>About</h2>
      </div>
      <div className="col-start-2 col-end-5 flex justify-center">
        <p>{AboutData.BrandStatment}</p>
      </div>
      <div className="col-start-2 col-end-2 flex justify-center">
        <SkillDisplay skill={AboutData.ProgrammingLang} />
      </div>
      <div className="col-start-3 col-end-3 flex justify-center">
        <SkillDisplay skill={AboutData.Frameworks} />
      </div>
      <div className="col-start-4 col-end-4 flex justify-center">
        <SkillDisplay skill={AboutData.Skills} />
      </div>
      <div className="col-start-3 col-end-3 flex justify-center">
        <p>{AboutData.Contact}</p>
      </div>
      <div className="col-start-4 col-end-4 flex justify-center">
        <h2>Resume</h2>
        <p>{AboutData.Resume}</p>
      </div>
    </div>
  );
}

export default About;
