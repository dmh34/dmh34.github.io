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
    errorElement: <div>404</div>,
  },
  {
    path: "/Projects",
    element: <Projects />,
    errorElement: <div>404</div>,
  },
  {
    path: "/project/:id",
    element: <Project />,
    errorElement: <div>404</div>,
  },
  {},
]);

export default appRouter;
