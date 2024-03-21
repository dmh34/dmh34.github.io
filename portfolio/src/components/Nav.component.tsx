import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Navbar
        isBlurred
        maxWidth="full"
        className="shadow-primary shadow-md"
        isBordered
      >
        <NavbarBrand className="flex">
          <User
            name="Jane Doe"
            description="Software Developer"
            avatarProps={{
              src: "https://i.pravatar.cc/300",
              alt: "Jane Doe",
            }}
          ></User>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem className="flex flex-grow justify-center gap-4">
            <Link to="/projects">Portfolio</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/">About</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
export default Nav;
