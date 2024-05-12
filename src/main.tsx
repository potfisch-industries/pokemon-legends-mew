import "potfisch-ui/dist/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { IntroScreen } from "./screens/IntroScreen/IntroScreen";
import { LandingScreen } from "./screens/LandingScreen/LandingScreen";
import { StarterSelectionScreen } from "./screens/StarterSelectionScreen/StarterSelectionScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "/intro",
    element: <IntroScreen />,
  },
  {
    path: "/starter-selection",
    element: <StarterSelectionScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
