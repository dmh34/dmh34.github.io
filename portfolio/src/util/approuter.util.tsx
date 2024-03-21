import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../screens/About.screens";
import Projects from "../screens/Projects.screens";
import Project from "../screens/Project.screens";
import Nav from "../components/Nav.component";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <About />,
    index: true,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
  {},
]);

export default appRouter;
