import AboutData from "../util/about.util";
import "../../src/output.css";
import Nav from "../components/Nav.component";
import SkillDisplay from "../components/SkillDisplay.component";
import { ReactComponent as GithubIcon } from "../assests/GithubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../assests/LinkedinIcon.svg";
import { ReactComponent as CVIcon } from "../assests/CVIcon.svg";
import { ReactComponent as YoutubeIcon } from "../assests/YoutubeIcon.svg";
import { ReactComponent as RumbleIcon } from "../assests/RumbleIcon.svg";
import { ReactComponent as TwitchIcon } from "../assests/TwitchIcon.svg";
import { ReactComponent as TwitterIcon } from "../assests/TwitterIcon.svg";
import { ReactComponent as InstagramIcon } from "../assests/InstagramIcon.svg";
import { ReactComponent as FaceBookIcon } from "../assests/FaceBookIcon.svg";
import { ReactComponent as EmailIcon } from "../assests/EmailIcon.svg";

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
          className="h-48 w-48"
        />
      </div>
      <div className="col-span-5 flex justify-center gap-4">
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-2xl"
        >
          <GithubIcon />
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-2xl "
        >
          <LinkedinIcon />
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-2xl"
        >
          <EmailIcon />
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-2xl"
        >
          <CVIcon />
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-2xl"
        >
          <YoutubeIcon />
        </Button>
        {/* <Button className="bg-primary rounded-full">Rumble</Button> */}
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-2xl"
        >
          <TwitchIcon />
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-2xl"
        >
          <TwitterIcon />
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-2xl"
        >
          <InstagramIcon />
        </Button>
        <Button
          isIconOnly
          className="bg-primary shadow-primary rounded-full shadow-2xl"
        >
          <FaceBookIcon />
        </Button>
      </div>
      <div className="col-span-5 flex justify-center">
        <h2 className="text-3xl">About</h2>
      </div>
      <div className="col-start-2 col-end-5 flex justify-center text-center">
        <p>{AboutData.BrandStatment}</p>
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
