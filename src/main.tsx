import "potfisch-ui/dist/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { IntroSteps } from "./constants/introSteps";
import "./index.css";
import { DialogueScreen } from "./screens/DialogueScreen/DialogueScreen";
import { LandingScreen } from "./screens/LandingScreen/LandingScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "/intro",
    element: (
      <DialogueScreen
        steps={IntroSteps}
        afterLastStep={() => console.log("fbriuebfiu")}
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
