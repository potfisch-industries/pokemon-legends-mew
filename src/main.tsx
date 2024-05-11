import "potfisch-ui/dist/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LandingScreen } from "./screens/LandingScreen/LandingScreen.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LandingScreen />
  </React.StrictMode>
);
