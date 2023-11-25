import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Generator from "../pages/Generator";
import Visualizer from "../pages/Visualizer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "generator",
    element: <Generator/>,
  },
  {
    path: "visualizer",
    element: <Visualizer/>,
  },
]);

export default router;