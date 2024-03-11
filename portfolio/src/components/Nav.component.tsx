import { Navbar, NavbarBrand, NavbarContent, NavbarItem, User } from "@nextui-org/react";
import { Link } from "react-router-dom";
import AboutData from "../util/about.util";

function Nav() {
  return (
    <div>
     <Navbar isBlurred maxWidth="full" className="bg-gradient-to-bl">
        <NavbarBrand >Jane Doe</NavbarBrand>
        <NavbarContent className="float-end">
          <NavbarItem>
            <User
              name={AboutData.Name}
              description="Web Dev"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                size: "lg",
              }}
            />
          </NavbarItem>
          <div className="flex gap-2">
            <NavbarItem className="col-start-1">
              <Link to="/projects">Projects</Link>
            </NavbarItem>
            <NavbarItem className="col-start-2">
              <Link to="/">About</Link>
            </NavbarItem>
          </div>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
export default Nav;
