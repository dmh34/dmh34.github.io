import React from "react";
import AboutData from "../util/about.util";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import "../../src/output.css";

function About() {
  return (
    <div className="grid grid-cols-5">
      <Navbar isBlurred maxWidth="full" className="col-span-full">
        <NavbarBrand className="md: hidden">Jane Doe</NavbarBrand>
        <NavbarContent className="fl">
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

      <div className="col-span-5 flex justify-center"></div>
      <div className="col-span-5 flex justify-center">
        <h2>About</h2>
      </div>
      <div className="col-start-2 col-end-5 flex justify-center">
        <p>{AboutData.BrandStatment}</p>
      </div>
      <div className="col-start-2 col-end-2 flex justify-center">
        <ul>
          {AboutData.ProgrammingLang.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <div className="col-start-3 col-end-3 flex justify-center">
        <ul>
          {AboutData.Frameworks.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
      <div className="col-start-4 col-end-4 flex justify-center">
        <ul>
          {AboutData.Skills.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
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
