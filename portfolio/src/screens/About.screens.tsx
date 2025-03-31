import "../../src/output.css";
import { getIcon } from "../assests";
import Nav from "../components/Nav.component";
import AboutData from "../util/about.util";

import { Avatar, Button, Link } from "@heroui/react";

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
        {AboutData.SocialMedia.map((social) => (
          <Link isExternal key={social.Link} href={"https://" + social.Link}>
            <Button
              key={social.Name}
              isIconOnly
              className="bg-primary shadow-primary rounded-full shadow-lg hover:shadow-none"
            >
              {getIcon(social.Name)}
            </Button>
          </Link>
        ))}
      </div>

      <div className="col-span-5 flex justify-center">
        <h2 className="text-3xl shadow-primary">About</h2>
      </div>
      <div className="col-start-2 col-end-5 flex justify-center text-center">
        <p>{AboutData.BrandStatment}</p>
      </div>
      <div className="col-start-2 col-end-5 flex justify-center text-center">
        <p>{AboutData.AboutMeHobbies}</p>
      </div>
    </div>
  );
}

export default About;
