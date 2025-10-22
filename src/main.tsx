import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//Styles file
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//The entry point to the app (Renders the react application inside the browser)
