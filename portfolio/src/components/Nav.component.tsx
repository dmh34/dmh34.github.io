import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  User,
} from "@heroui/react";
import { Link } from "react-router-dom";
import AboutData from "../util/about.util";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    'About',
    'Projects',
    'Contact']
  return (
    <>
      <Navbar position="sticky" className="flex ">
        <NavbarMenuToggle className="sm:hidden"></NavbarMenuToggle>
        <NavbarBrand className="flex">
          <p className="hidden sm:flex">{AboutData.ShortName}</p>
          <p className="sm:hidden">{AboutData.Name}</p>
        </NavbarBrand>
        <NavbarContent  className="hidden sm:flex"justify="center">
          <NavbarItem className="  flex flex-grow justify-right gap-4">
            <Link to="/projects">Portfolio</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/">About</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </NavbarMenuItem>
          ))}
         
        </NavbarMenu>
      </Navbar>
    </>
  );
}
