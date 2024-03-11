import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";

import reportWebVitals from "./reportWebVitals";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./util/approuter.util";
import Nav from "./components/Nav.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={appRouter} />
    </NextUIProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
