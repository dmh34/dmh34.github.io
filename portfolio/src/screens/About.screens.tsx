import "../../src/output.css";
import Icons from "../assests";
import Nav from "../components/Nav.component";
import AboutData from "../util/about.util";

import { Avatar, Button } from "@nextui-org/react";

function About() {
  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-full">
        <Nav />
      </div>
      <div className="col-span-5 flex justify-center">
        <Avatar
          src="https://i.pravatar.cc/300"
          alt="Avatar"
          className=" shadow-primary h-48 w-48 shadow-md"
        />
      </div>
      <div className="col-span-5 flex justify-center gap-4">
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full  shadow-xl hover:shadow-none"
        >
          {Icons.GithubIcon}
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-xl hover:shadow-none"
        >
          {Icons.LinkedinIcon}
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-xl hover:shadow-none"
        >
          {Icons.EmailIcon}
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-xl hover:shadow-none"
        >
          {Icons.CVIcon}
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-xl hover:shadow-none"
        >
          {Icons.YoutubeIcon}
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-xl hover:shadow-none"
        >
          {Icons.RumbleIcon}
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-xl hover:shadow-none"
        >
          {Icons.TwitchIcon}
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-xl hover:shadow-none"
        >
          {Icons.TwitterIcon}
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-xl hover:shadow-none"
        >
          {Icons.InstagramIcon}
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-xl hover:shadow-none"
        >
          {Icons.FaceBookIcon}
        </Button>
      </div>
      <div className="col-span-5 flex justify-center">
        <h2 className="text-3xl">About</h2>
      </div>
      <div className="col-start-2 col-end-5 flex justify-center text-center">
        <p>{AboutData.BrandStatment}</p>
      </div>
      <div className="col-start-2 col-end-5 flex justify-center text-center">
        <p>{AboutData.AboutMeHobbies}</p>
      </div>
      {/* <div className="col-start-2 col-end-2 flex justify-center">
        <SkillDisplay skill={AboutData.ProgrammingLang} />
      </div>
      <div className="col-start-3 col-end-3 flex flex-wrap justify-center">
        <SkillDisplay skill={AboutData.Frameworks} />
      </div>
      <div className="col-start-4 col-end-4 flex justify-center">
        <SkillDisplay skill={AboutData.Skills} />
      </div> */}
      {/* <div className="col-start-3 col-end-3 flex justify-center">
        <p>{AboutData.Contact}</p>
      </div>
      <div className="col-start-4 col-end-4 flex justify-center">
        <h2>Resume</h2>
        <p>{AboutData.Resume}</p>
      </div> */}
    </div>
  );
}

export default About;
