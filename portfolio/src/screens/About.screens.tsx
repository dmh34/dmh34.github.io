import { getIcon } from "../assests";
import Nav from "../components/Nav.component";
import AboutData from "../util/about.util";

import { Avatar, Button, Link } from "@heroui/react";

function About() {
  return (
    <div>
      <Nav />
      <div className="col-span-5 flex justify-center">
        <Avatar
          src="https://i.pravatar.cc/300"
          alt="Avatar"
          className=" shadow-primary h-48 w-48 shadow-md gap-10"
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
      <div className="container mx-auto justify-center">
        <div className="flex justify-center">
          <h2 className="text-3xl shadow-primary">About</h2>
        </div>
        <div className="flex justify-center text-center mx-5">
          <p>{AboutData.BrandStatment}</p>
        </div>
        <div className="flex justify-center text-center mx-5">
          <p>{AboutData.AboutMeHobbies}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
