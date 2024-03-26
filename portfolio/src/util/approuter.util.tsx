import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../screens/About.screens";
import Projects from "../screens/Projects.screens";
import Project from "../screens/Project.screens";
import Nav from "../components/Nav.component";
import ErrorComponent from "../screens/Error.screens";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <About />,
    index: true,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/Projects",
    element: <Projects />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/project/:id",
    element: <Project />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/Error",
    element: <ErrorComponent />,
  },
]);

export default appRouter;
