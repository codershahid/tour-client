import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/pages/Home";
import { Travellers } from "./components/pages/Travellers";
import { AddTraveller } from "./components/pages/AddTraveller";
import { Page404 } from "./components/pages/Page404";
import "./index.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "travellers",
    element: <Travellers />,
  },
  {
    path: "add-traveller",
    element: <AddTraveller />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
