import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HikerLoad } from "./pages/HikerLoad/HikerLoad.tsx";
import "./assets/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HikerLoad />
  </StrictMode>
);
